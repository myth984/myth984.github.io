---
title: MyBatis中整数0与空字符串比较
date: 2022-05-26 10:38:54
tags:
---
# 背景

公司一个表根据sort字段进行排序 sort为整数型

将sort修改为0的时候不生效  只有为0 的时候不生效 修改为别的都可以

`.xml`文件表达式如下
```xml
<if test="sort != null and sort!= ''">
  sort = #{sort}
</if>
```
# 原因

经调查发现 在执行test表达式时 整数的0 和 空字符串 进行比较会得到相等的结果

# 解决方案

因xml文件是由代码生成器生成的 同时整数型永远不可能为空字符串

所以将xml修改如下
```xml
<if test="sort != null">
  sort = #{sort}
</if>
```