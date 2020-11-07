---
title: windows无线控制n个安卓手机
date: 2019-09-09 17:53:59
tags:
---
# 起因
公司有6台手机再跑微信公众号的数据，但是不是特别稳定，偶尔会出现一些需要人为干预才能解决的错误。

# 方案
## 配置adb环境：

	下载地址：https://developer.android.com/studio/releases/platform-tools.html

	解压至任意目录，复制改目录

	此电脑-右键-属性-高级系统设置-环境变量-系统变量-PATH-编辑-新建-粘贴刚刚复制的路径

	打开cmd 输入 adb version 出现版本信息即配置成功
## 下载scrcpy:

- 下载地址：https://github.com/Genymobile/scrcpy
	
- 有线连接：
	
	+ usb连接手机
	
	+ 双击scrcpy.exe
	
- 无线连接：

	+ usb连接手机,打开usb调试
	
	+ 打开cmd
	
	+ 输入adb tcpip 12000 (任意未被占用端口号)
	
	+ 拔出手机
	
	+ 输入adb connect ip:12000 (手机ip可以通过 adb shell ifconfig wlan0查看 或其他方式)
	
	+ scrcpy.exe
	
- 多台手机无线连接：

	+ 先插入第一台手机
	
	+ adb devices 查看手机序列号 复制序列号
	
	+ adb -s 序列号 tcpip 端口 (端口不要重复)
	
	+ 查看手机ip(手机ip可以通过 adb -s 序列号 shell ifconfig wlan0查看 或其他方式)
	
	+ 拔出手机
	
	+ adb connect ip:端口 （连接手机）
	
	+ scrcpy.exe -b 1m -s ip:端口(-b 为最大传输速度，-s为指定哪一台手机)
	
	+ 重复第一步

# 缺点
无线连接不稳定，网络不好的时候 会掉线

配置tcpip端口连接为一次性 如果刚换ip需要重新配置

![](/img/44a1aa09-cc96-480d-a428-d5e194fb1aad218534e76aa265ea0d7131d0e128934.jpg)