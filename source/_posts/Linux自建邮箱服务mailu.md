---
title: Linux自建邮箱服务mailu
date: 2025-06-23 16:19:58
tags:
---
因公司业务需要, 需要帮客户注册某个网站的会员

需要很多的邮箱地址, 但是收信和发信非常少

收信只是需要接受一下激活邮件, 发信是定期给该网站发送邮件, 表明自己还是处于活跃状态

因国内邮件服务基本都是按照用户数来收费的, 所以研究自建邮件服务

有使用过[pmail](https://github.com/Jinnrry/PMail) 但是因为无法配置smtp中继发件服务(后面会讲这是什么), 后面就切换成了[mailu](https://mailu.io/2024.06/)
# 基本介绍
mailu 是通过一组docker images组成的邮件系统, 支持基础的收发信, 管理用户, 垃圾邮件, 中继转发等等功能

# 起步准备:
- 已经安装docker, 略懂一些docker命令
- 服务器已开放25端口(阿里云/腾讯云已经尝试过了, 无法开放, 华为云非北京地区可以开发25端口, 另外如果配置smtp中继转发的话, 25端口并非必要)
- 具备自己的域名(用于DNS解析配置)
- 该服务器的25/80/110/143/443/465/587/993/995/4190确保没被占用(80和443如果被其他服务占用, 可以开一个nginx进行反代)

# 域名DNS配置

比如你想要讲邮箱服务部署到 mail.xxx.com中, 你的服务器地址为2.2.2.2, 那么你需要在dns解析中添加以下内容

| 主机记录 |    类型  |    记录值     |
| ------- | ------- | ------------ |
| mail    | A       |  2.2.2.2     |
| @       |  MX     |  mail.xxx.com|
| mx      |  TXT    | v=spf1 a -all|
|_dmarc	  |  TXT    | v=DMARC1; p=reject; rua=mailto:admin@xxx.com; ruf=mailto:admin@xxx.com|

# rDns配置

以华为云为例 在云解析服务DNS中 找到反向解析, 将 2.2.2.2解析到 mail.xxx.com

这部操作是为了加强发件人的身份的可信度的, 不进行这个配置, 可能会导致有些地址收不到你的邮件

如果你使用smtp中继来发送邮件则不需要处理这个

# 获取mailu配置

进入[mailu配置页面](https://setup.mailu.io/2024.06/) 该页面会根据填写的表单 生成一份你的配置文件

- Mailu storage path: 代表你想讲mailu 放在你服务器的哪个位置 我喜欢放在opt下 所以我添加 `/opt/mailu`
- Main mail domain and server display name. 填写你的域名 xxx.com
- Postmaster local part 填写admin 管理员账户
- Choose how you wish to handle security 这个没有特殊需求不要选择, 这个用来帮你生成ssl证书的
- ...:中间的具体配置按照默认的就好
- Enable the admin UI: 开启管理页面 建议开启
- Enable the API: 开启API控制 看具体情况
- Enable Web email client: 你的邮件网页客户端什么样子, 我选择的是roundcube
- Enable the antivirus service 这个可以选择是否开启,用于防病毒, 占用内存会多1G
- Enable the webdav service 开启
- Enable fetchmail 开启
- Enable oletools 扫描附件是否有病毒的, 可以开启
- Enable Tika 用于全文索引的, 很占用资源, 我没有开启
- IPv4 listen address 这里先填2.2.2.2 国内的主机可能都不是分配的实际IP, 后面可能更改配置项
- Enable IPv6 未开启
- Public hostnames 填写 mail.xxx.com

开始下一步, 根据网页的命令 按照指令在服务器上执行, 

# 启动服务
比如
```
mkdir /opt/mailu
cd /opt/mailu
wget https://setup.mailu.io/2024.06/file/xxxxx/docker-compose.yml
wget https://setup.mailu.io/2024.06/file/xxxxx/mailu.env
docker compose -p mailu up -d
echo 这部是创建管理员 把 PASSWORD 改成你的密码
docker compose -p mailu exec admin flask mailu admin admin xxx.com PASSWORD
```

# 问题检查
观察 执行 docker compose -p mailu up -d 是否会报错

如果ip相关的报错, 可能是该服务器没有实际的IP 去除IP指向, 请将front下的配置改成
```
    ports:
      - "80:80"
      - "443:443"
      - "25:25"
      - "465:465"
      - "587:587"
      - "110:110"
      - "995:995"
      - "143:143"
      - "993:993"
      - "4190:4190"
```
正常情况下就可以 在浏览器中进入mail.xxx.com 进入邮箱了

# 添加 _domainkey DNS 解析

登入mailuadmin

管理-邮件域-详细信息

点击右上角的`生成秘钥`

将生成的信息填入到DNS解析中

# 邮件验证

进入[mail-tester](https://mail-tester.com) 按照步骤来测试

一定要达到满分, 哪里有问题就修改哪里, 不然会进入对方的垃圾箱里


# 附加问题
如果进入webmail的时候 浏览器显示重定向次数过多, 打开控制台确认无限进行302跳转的话

在容器中查看日志 `docker compose logs -f webmail` 是否有无法链接4190之类的错误

可以尝试以下操作, 我在github中的issue找到的解决方案

创建`/opt/mailu/overrides/roundcube/workaround.inc.php`文件

```
$config['imap_host'] = 'tls://front:993';
$config['smtp_host'] = 'tls://front:25';
$config['managesieve_host'] = 'tls://front:4190';
```
重启服务即可解决

# 如何进行smtp中继发件

中继发送邮件的服务有很多 阿里云/mailgun/mailrelay/sendcloud/...

这里以[mailgun](https://www.mailgun.com/)为例

每台可以免费发100条

先注册账户, 按照引导完成激活, 以及域名DNS认证

其中有一条配置 是 @ MX mxa.mailgun.org 和 @ MX mxb.mailgun.org 优先级让你配置成10 你可以配置成15, 让发件人邮箱向你的服务发送邮件

认证完成后

SENDING - Domain settings - SMTP credentials

点击 Add new SMTP user

我这里创建的是 admin@xxx.com

保存好密码


然后需修改`/opt/mailu/mailu.env`配置
```
RELAYHOST=smtp.mailgun.org:587
RELAYUSER=admin@xxx.com
RELAYPASSWORD=a5203235-07e5-4606-8158-a54b2176571e
```

重启docker服务

`docker compose down&docker compose up -d`

可以发送一封邮件来验证以下

然后在 Send - REPORTING - Logs 查看发送状态 如果成功的话 会看见一条记录

# 附加功能
因我需要只要有邮件进入到邮箱就进行企业微信通知

所以我学习了一下 `dovecot` 以及 `sieve` 脚本

可以简单理解为一个过滤器,  当邮件进入邮箱的时候 可以执行sieve脚本来控制后续逻辑

我是这样配置的 创建`/opt/mailu/overrides/dovecot/dovecot.conf` 文件 添加新的dovecot配置, 收到邮件后执行 global.sieve
```
# 启用sieve插件
plugin {
    # Sieve配置
    sieve_plugins = sieve_imapsieve sieve_extprograms
    sieve_global_extensions = +vnd.dovecot.execute +vnd.dovecot.pipe
    sieve_execute_bin_dir = /scripts
    sieve_after = /overrides/sieve/global.sieve
}
```

配置docker-compose文件, 在imap下添加以下配置
```
    volumes:
      ...
      # 添加脚本目录
      - /opt/mailu/overrides/dovecot/scripts:/scripts

```

创建 `/opt/mailu/overrides/dovecot/sieve/global.sieve`, 将收到的邮件脚本`handle-mail.sh` 脚本来处理

```
require ["vnd.dovecot.execute", "variables", "environment"];

execute :pipe "handle-mail.sh";
```

只要交给sh来处理, 后面就灵活来