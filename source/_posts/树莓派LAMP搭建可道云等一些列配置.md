---
title: 树莓派LAMP搭建可道云等一些列配置
date: 2019-10-26 10:49:37
tags:
---
在已经烧录完系统的情况下，再进行以下操作

## 更换apt源

进入[清华大学镜像站](https://mirror.tuna.tsinghua.edu.cn/help/raspbian/ "清华大学镜像站") 根据系统版本选择对应的镜像源，一定要选对了 不然会有很多后续问题

`sudo vi /etc/apt/sources.list`

`sudo apt-get update`

## 安装apache

`sudo apt-get apache2`

没有特殊要求的话 就不用改配置文件 对应的目录为 /var/www/html

此时在浏览器中输入http://ip 如果可以访问到网页就是成功了

## 安装mysql

`sudo apt-get install maridb` 我也不清楚为什么Mysql 安装不了maridb和mysql一样用

如果镜像源配置错 很可能安装不上

`sudo mysql`

进入mysql中则安装成功

## 安装php

安装php网上有很多教程，我都尝试了一下，没有能用的，我逐渐摸索找到了能用的方法

` sudo apt-get install  php7.1 php7.1-curl php7.1-mbstring php7.1-gd`

## 下载可道云

[可道云](https://kodcloud.com/download/)选择版本

复制下载链接

`wget 下载链接`

`mv 下载到的地址 /var/www/html` 将可道云文件移动到改目录下

## 其他配置

### 登录欢迎信息：

`sudo vi /etc/rc.local`

### 开启ftp:

`sudo apt-get install vsftpd`

没特殊需求不用修改配置文件

windows资源管理器中 ftp://ip  就可以访问了

