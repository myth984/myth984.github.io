---
title: Java中WebSocket与callable的实际运用
date: 2020-11-07 23:27:38
tags: Java
---
## 前言

公司最近有一个需求 需要Java通过WebSocket与Jupyter的Kernel通信

## 操作

通过Maven导入进了Java-WebSocket包

```java
WebSocketClient ws = new WebSocketClient(uri) {
    @Override
    public void onOpen(ServerHandshake handshakedata) {

    }
    @Override
    public void onMessage(String message) {

    }

    @Override
    public void onClose(int code, String reason, boolean remote) {

    }

    @Override
    public void onError(Exception ex) {

    }
}
```
创建websocket对象时，需要重写这四个方法

因为需要在webSocket成功连接时，才可以进行通信

所以我把业务逻辑写在了`onOpen`中，当websocket连接成功时，就自动发送任务，通过`onMessage`来接受消息返回的结果

写个简单的例子，就像这样
```java
@Override
public void onOpen(ServerHandshake handshakedata){
    // 执行任务
    List<task> taskList = getTaskList();
    for(Task task:taskList){
        this.send(task)
    }
}
@Override
public void onMessage(String message) {
    // 任务完成
    Task.success(message)
}
```

但是这种写法是有问题 因为`onMessage`是`WebSocketClient`待实现的函数，没有返回值，我无法知道所有任务什么时间都执行完毕

所以对代码进行了如下改造，记录任务总数，任务完成一次进行任务总数自减操作

进行死循环阻塞当任务完成时关闭webSocket连接

```java
List<task> taskList = getTaskList();
AtomicInteger ai = new AtomicInteger(taskList.size());
WebSocketClient ws = new WebSocketClient(uri) {
    @Override
    public void onOpen(ServerHandshake handshakedata) {
        for(Task task:taskList){
            this.send(task)
        }
    }
    @Override
    public void onMessage(String message) {
        ai.getAndDecrement();
    }

    @Override
    public void onClose(int code, String reason, boolean remote) {

    }

    @Override
    public void onError(Exception ex) {

    }
}
ws.connect();
while (true){
    if(ai.get() == 0){
        ws.close();
        return true;
    }
}
```

但是这样写还是有问题的 如果与WebSocket通信出现问题可能导致程序死循环，永远结束不了，所以直接上了Callable

将代码用CallAble包裹
```java
public Callable foo(){
    return new Callable() {
        // 业务逻辑
        // ...
    }
}

public executeTask(){
    // 获取callable对象
    Callable call = foo();
    // 创建一个线程池
    ExecutorService EXECUTOR_SERVICE = Executors.newFixedThreadPool(20);
    // 提交任务 获得Futrue对象
    Future<Boolean> future = EXECUTOR_SERVICE.submit(call);
    // 设置future 超时时间为 任务数量*5m+10s
    try{
        future.get(taskList.size() * 5 * 60 * 1000 + 10000, TimeUnit.MILLISECONDS);
    }catch(TimeoutException e){
        // 任务超时处理逻辑
        // ...
    }

}
```

通过callable解决了这种可能因网络连接造成的问题，不得不说future真的好用

## 最后

双拼真的好用，打字速度真的有很大提升，学习一周，实用一生。所以双拼我的双拼练习网站因为学生服务器到期导致已经停止服务了，最近有时间写一个纯JavaScript版本的吧。

最近和女朋友在玩马里奥赛车 还是挺好玩的

写博客最近真的缺乏动力，不是因为觉得写打字麻烦 而是因为组织语言麻烦


