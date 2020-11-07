---
title: 解决linux运行springboot文件一会就结束
date: 2019-05-01 21:52:28
tags:
---
用java -jar xxx方式启动springboot关闭窗口就会结束任务

然后学习了java -jar xxx &方式启动，结果也是过一会就会结束

于是我便怀疑是自己代码的问题，于是在开发环境测试并没有问题

最后百度查到原因：

参考：[用nohup命令解决SpringBoot/java -jar项目运行一段时间停止运行的问题](https://blog.csdn.net/moshowgame/article/details/82621913 "参考用nohup命令解决SpringBoot/java -jar项目运行一段时间停止运行的问题")

用nohup配合&启动，问题解决
