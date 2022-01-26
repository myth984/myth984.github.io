---
title: MyBatis Mapper多次请求返回值为同一引用
date: 2022-01-26 08:46:53
tags:
---

昨天修改一个以前写的代码,发现代码有些看不懂了 代码如下
```Java
public List<StAssetFactorQuestionVo> findAssetFactorQuestionList() {
        String userId = UserUtils.getUser().getId();
        // 从这往下
        List<StQuestionIdAndAnswerVo> answerList = stFactorIndexDataQualMapper.findQuestionIdAndAnswerListByResearcher(userId);
        List<StAssetFactorQuestionVo> assetFactorList = dao.findAssetFactorQuestionList(userId);
        // 将答案构建Map
        Map<String, StQuestionIdAndAnswerVo> answerMap = new HashMap<>();
        // 根据资产id分组
        for (StQuestionIdAndAnswerVo item : answerList) {
            String assetId = item.getAssetId();
            String factorId = item.getFactorId();
            String questionId = item.getQuestionId();
            answerMap.put(assetId + factorId + questionId, item);
        }

        assetFactorList.stream().forEach(i -> {
            String assetId = i.getAssetId();
            String factorId = i.getFactorId();
            String questionId = i.getQuestionId();
            StQuestionIdAndAnswerVo a = answerMap.get(assetId + factorId + questionId);
            if (a != null) {
                String score = a.getAnswer();
                // 后续想办法合并到findQuestionIdAndAnswerListByResearcher这个SQL里
                Date lastDate = stFactorIndexDataQualMapper.findDifferentAnswerDate(assetId, factorId, questionId, score);
                if (lastDate != null) {
                    // 天数向上取整
                    double day = Math.ceil(DateUtils.getDistanceOfTwoDate(lastDate, a.getUpdateDate()));
                    a.setLastChangeDay((int) day);
                }
            }
            i.setLastAnswer(a);
        });
        // 从这向上
        return dao.findAssetFactorQuestionList(userId);
    }
```

可以看出中间的代码一点作用没有 我开始获取了一下当前用户的id然后直接mapper返回 中间的代码可有可无

奇怪的事情发生了 当我把中间的代码去掉 两次的返回值变得不一样了

后续根据探索 发现**Mapper多次请求返回值为同一引用**

以下代码即可证明我的猜想
```Java
List list1 = dao.findAssetFactorQuestionList(userId);
List list2 = dao.findAssetFactorQuestionList(userId);
System.out.printLn(list1 == list2); // true
```