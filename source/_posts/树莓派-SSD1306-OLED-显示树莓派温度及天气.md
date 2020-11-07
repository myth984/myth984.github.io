---
title: 树莓派 SSD1306 OLED 显示树莓派温度及天气
date: 2019-11-17 23:20:30
tags:
---
## 硬件准备
1. 树莓派

2. SSD1306驱动OLED屏幕

3. 母对母杜邦线

4. 面包板、公对公（可选）

## 开始操作

[![](http://shumeipai.nxez.com/wp-content/uploads/2015/03/rpi-pins-40-0.png)](http://shumeipai.nxez.com/wp-content/uploads/2015/03/rpi-pins-40-0.png)

把 oled屏幕引脚 通过 杜邦线 插到 树莓派 对应的引脚，VCC引脚插入3.3v引脚，GND代表接地，SDA要插入SDA.1，SCL插入SCL.1

#### 未试验可否热插拔

ssh连接树莓派（或其他方式）

### 打开相应接口：

`sudo raspi-config`

Interfacing Options > I2C	打开I2C

Interfacing Options > SPI	打开SPI

### 安装相关驱动
`sudo apt-get update`

`sudo apt-get install build-essential python-dev python-pip`

`sudo pip3 install RPi.GPIO`

`sudo apt-get install python-imaging python-smbus`

`sudo pip3 install demjson`

### 从Github上拷贝Adafruit_Python_SSD1306

`sudo apt-get install git`

`git clone https://github.com/adafruit/Adafruit_Python_SSD1306.git` 也可以下载其他语言

`cd Adafruit_Python_SSD1306`

`sudo python3 setup.py install`

### 编写程序
```python
import time
import Adafruit_GPIO.SPI as SPI
import Adafruit_SSD1306
import requests
import demjson
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import threading
import subprocess
RST = None
DC = 23
SPI_PORT = 0
SPI_DEVICE = 0
disp = Adafruit_SSD1306.SSD1306_128_32(rst=RST)
disp.begin()
disp.clear()
disp.display()
width = disp.width
height = disp.height
image = Image.new('1', (width, height))
draw = ImageDraw.Draw(image)
print(str(width) +"," + str(height))
draw.rectangle((0,0,width,height), outline=0, fill=0)
padding = -3
top = padding
bottom = height-padding
x = 0
font = ImageFont.truetype('/home/pi/font/微软vista雅黑.ttf', 14)
#fontTemp = ImageFont.truetype('/home/pi/font/kraash.woff.ttf', 8)

def getWeather():
    while True:
        req = requests.get("http://wthrcdn.etouch.cn/weather_mini?city=%E5%8C%97%E4%BA%AC")
        weatherJson = demjson.decode(req.text)
        weather = weatherJson['data']['forecast'][0]
        global high
        high = weather['high'].replace('高温','').strip()
        global low
        low = weather['low'].replace('低温','').strip()
        global type_
        type_ = weather['type']
        global fengli
        fengli = weather['fengli'].replace('<![CDATA[','').replace(']','').replace('>','')
        time.sleep(60*60)
thead = threading.Thread(target = getWeather)
thead.start()
time.sleep(3)
while True:
    draw.rectangle((0,0,width,height), outline=0, fill=0)
    with open ("/sys/class/thermal/thermal_zone0/temp
```