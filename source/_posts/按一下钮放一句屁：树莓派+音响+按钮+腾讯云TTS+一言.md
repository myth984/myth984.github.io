---
title: 按一下钮放一句屁：树莓派+音响+按钮+腾讯云TTS+一言
date: 2019-11-30 20:01:03
tags:
---
## 整体流程
1. 脚本监听按钮点击
2. 调用一言api
3. 将一言api转为wav文件
4. 播放wav文件

##前期准备

1. 音响3.5口 或者蓝牙音响都好

2. 触发按钮

## 开始

### 安装mplay

mplay用于播放媒体文件

`sudo apt-get install mplayer`

树莓派插入音响，注意从` sudo raspi-config`中配置一下音响，有线方式还是蓝牙方式，若是蓝牙方式，则先和牙音响匹配，在把输出端设置为蓝牙

`mplayer test.mp3` 随便找个文件测试，是否安装成功

### 腾讯云tts

[腾讯云-语音合成](https://cloud.tencent.com/product/tts "腾讯云-语音合成")

[python_SDK](https://cloud.tencent.com/document/product/1073/37935 "python_SDK")根据文档下载例子,配置AppID、SecretId 与 SecretKey

编写下载好的.py文件

`vi tcloud_tts.py`

修改成这样
```python
# coding=UTF-8
import requests
import wave
import json
import base64
import time
import collections
import os
from request_util import request, authorization

def task_process():
    req = request()
    req.init()
    auth = authorization()
    auth.init()
    url = 'https://v1.hitokoto.cn/?encode=text'
    world = requests.get(url).text
    #request_data = collections.OrderedDict()
    request_data = dict()
    request_data['Action'] = 'TextToStreamAudio'
    request_data['AppId'] = auth.AppId
    request_data['Codec'] = req.Codec
    request_data['Expired'] = int(time.time()) + auth.Expired
    request_data['ModelType'] = req.ModelType
    request_data['PrimaryLanguage'] = req.PrimaryLanguage
    request_data['ProjectId'] = req.ProjectId
    request_data['SampleRate'] = req.SampleRate
    request_data['SecretId'] = auth.SecretId
    request_data['SessionId'] = req.SessionId
    request_data['Speed'] = -1
    request_data['Text'] = '一言:'+world
    request_data['Timestamp'] = int(time.time())
    request_data['VoiceType'] = req.VoiceType
    request_data['Volume'] = req.Volume

    signature = auth.generate_sign(request_data = request_data)
    header = {
        "Content-Type": "application/json",
        "Authorization": signature
    }
    url = "https://tts.cloud.tencent.com/stream"

    r = requests.post(url, headers=header, data=json.dumps(request_data), stream = True)
    '''
    if str(r.content).find("Error") != -1 :
        print(r.content)
        return
    '''
    i = 1
    wavfile = wave.open('test.wav
```