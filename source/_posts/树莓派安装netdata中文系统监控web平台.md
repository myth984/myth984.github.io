---
title: 树莓派安装netdata中文系统监控web平台
date: 2019-11-09 23:12:32
tags:
---
以下操作默认在完成php安装、apache安装、（内网穿透）之前

## 下载netdata

中文版:
`git clone https://github.com/firehol/netdata.git --depth=1`

## 开始安装

`cd netdata`

`sudo ./netdata-installer.sh`

如果安装过程中提示需要安装uuid字样，请输入如下命令

`sudo apt-get install uuid-dev`

重新安装即可

## 启动

`sudo service netdata start`

浏览器输入ip:19999即可
