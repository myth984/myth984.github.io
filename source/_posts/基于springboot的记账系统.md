---
title: 基于springboot的记账系统
date: 2019-09-20 14:43:15
tags:
---
七月初来的北京，对自己的花销一直没有具体记录，全都靠人脑记录

很久之前就有这个记账系统的想法，九月初开始使用至今快一个月，还算满足了自己的需求

## 技术
前端：

- layui的数据表格作为展示详情信息

- chartjs用于展示饼状图折线图

后端:

- 简单的springboot处理请求

数据库:

- 饼状图: where type = "支出" order by time desc  group by tag
	
- 折线图:
	+ 因为考虑到即使今天没有花销也要在图表中对应的日期显示为0，而不是空。
	+ 网上其他人的解决方案是通过mysql建立临时表，然后 group by 天 进行对比查询.
	+ 我的解决方案是放到java中 新建一个 长度为当前月份的天数 的数组 new double[nowMonth.datCount].
	+ 将mysql发送来的数据 group by 天 一次插入对应下标-1。
	+ 如第一天的花销为 arr[0],第十天的花销为 arr[9],第n天为 arr[n-1]。
	+ 利用java中double数组元素默认为0，解决了这个问题。