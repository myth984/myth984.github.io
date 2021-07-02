---
title: vue初级使用说明
date: 2020-12-05 23:26:53
tags:
---

## method 与 computed 的区别：

computed具有缓存 重复使用不会重新计算 mehtod则会重新计算

## vue命名规则

组件由大写字母开头 如： `CodeMIrrorCell.vue`

## 配置环境变量

在根目录下创建 `.env.dev` 和`.env.prod` 文件 其中属性必须以`VUE_APP`开头

```
NODE_ENV = 'development'
VUE_APP_BASE_URL = 'http://localhost:8080/LRHG_war_exploded'
```

## package.json sciprt

`npm run build` 代表 执行 package.json中的script中的 build 通常用于区分打包不同环境

```json
"scripts": {
        "serve": "vue-cli-service serve --mode dev",
        "build-prod": "vue-cli-service build --mode prod&copy_file.bat",
        "build": "vue-cli-service build --mode prod",
        "build-dev": "vue-cli-service build --mode dev",
        "lint": "vue-cli-service lint"
    },
```

## WebPack理解：

webpack简单理解为将npm下载的包 和自己写的src 拼装一起生成HTML+CSS+JS到`dist`里

## vue.config.js

vue-cli3的配置文件 里面可以配置webpakc的相关配置

```js
let publicPath
// 区分当前环境  决定生成的文件的根目录
if (process.env.NODE_ENV === 'production') {
    publicPath = "${ctxStatic}/vue-dist/"
} else if (process.env.NODE_ENV === 'development') {
    publicPath = "./"
}
module.exports = {
    publicPath: publicPath,
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "html标题";
                args[0].jspIncludeCode = "自定义配置项"
                return args;
            })
    },
}
```

## root/public文件夹

该文件夹用于不进行webpack打包的资源，用于存放一些无法webpack的文件

其中index.html可以使用模板引擎 其中为vue.config.js中的配置项`args[0].title`

```html
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
```

## VUE组件间通信方式

### 父子之间通信

#### 通过props注入的方式进行通信

```html
// 父组件
<child :name="莉莉安"></child>
```

子组件通过prod方式获取改属性,

```html
// 子组件
<script>
    export default {
        props: ["name"], // 莉莉安
    }
</script>
```

该通信方式不建议子组件修改父组件传来的属性

#### 通过`$ref`通信

```html
// 父组件
<child :ref="child"></child>
<script>
    export default {
        methods:{
            call(){
                this.$refs.child.hello(); // 调用子组件的hello方法
                this.$refs.child.variable = "123" //给子组件赋值
            }
        }
    }
</script>
```

```html
// 子组件
<script>
    export default {
        data(){
            return{
                variable:"abc"
            }
        },
        methods:{
            hello(){
                console.log("hello");
            },
            callParent(){
                this.$parent // 子组件可以通过$parent获得父组件
            }
        }
    }
</script>
```

### 事件总线通信

新建一个VUE实例 只用于组件之间的通信

```js
//event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()
```

如果a组件需要调用b组件的方法

```html
// b.vue
<script>
    import {EventBus} from '@/event-bus'
    export default {
        methods:{
            hello(){
                console.log("hello");
            },
        },
        mounted(){
            // 在b中注册该方法
            EventBus.$on('hello',()=>{
                this.hello();
            })
        },
        beforeDestroy(){
            // 在销毁前注销这个方法 这步一定不能少
            EventBus.$off('hello')
        }
    }
</script>
```

```html
// a.vue
<script>
    import {EventBus} from '@/event-bus'
    export default {
        methods:{
            hello(){
                //调用b的方法
                EventBus.$emit('hello');
            },
        },
    }
</script>
```

需要注意的是`EventBus.on` 也就是注册方法时，使用return是无法返回值的，如果需要返回值可以使用回调函数

```js
EventBus.$on('hello',(callback)=>{
    callback(this.property)
})
```

### 祖宗组件对后代组件的通信 provide / inject

祖宗组件使用provide将自身的方法/属性保留出去，任意后代方法使用inject进行接收都可以直接获取

```js
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```