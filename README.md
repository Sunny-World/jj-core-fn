# js工具函数（适用所有环境）
- 重要更新！核心模块以及本工具函数基于typescript重构以及api简化，原基于class api废弃，暴露的$fn为自2.0改为对象，
- 现支持typescript,以及js直接在html中引用
- github : https://sunny-world.github.io/jj-core-fn/
- 只要可以运行js的环境都可以支持，浏览器端、node都可以使用
- 引用库，后续 $fn 直接当作全局进行使用
    ```js
    import $fn from 'jj-core-fn'
    ```
- html直接引用
    ```html
    <script src="jj-core-fn/common/$fn.js"></script>
    ```
- [浏览器环境js工具库请点击跳转](https://javison666.github.io/jj-browser-fn/)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [js工具函数（适用所有环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E9%80%82%E7%94%A8%E6%89%80%E6%9C%89%E7%8E%AF%E5%A2%83)

- [js工具函数（适用所有环境）](#js%e5%b7%a5%e5%85%b7%e5%87%bd%e6%95%b0%e9%80%82%e7%94%a8%e6%89%80%e6%9c%89%e7%8e%af%e5%a2%83)
  - [字符处理](#%e5%ad%97%e7%ac%a6%e5%a4%84%e7%90%86)
    - [默认处理非数值的内容为0](#%e9%bb%98%e8%ae%a4%e5%a4%84%e7%90%86%e9%9d%9e%e6%95%b0%e5%80%bc%e7%9a%84%e5%86%85%e5%ae%b9%e4%b8%ba0)
    - [默认处理空字符串为'--'](#%e9%bb%98%e8%ae%a4%e5%a4%84%e7%90%86%e7%a9%ba%e5%ad%97%e7%ac%a6%e4%b8%b2%e4%b8%ba)
    - [判断是否有值](#%e5%88%a4%e6%96%ad%e6%98%af%e5%90%a6%e6%9c%89%e5%80%bc)
    - [给URL添加参数](#%e7%bb%99url%e6%b7%bb%e5%8a%a0%e5%8f%82%e6%95%b0)
    - [将编码由utf8转为utf16](#%e5%b0%86%e7%bc%96%e7%a0%81%e7%94%b1utf8%e8%bd%ac%e4%b8%bautf16)
    - [将编码由utf16转为utf8](#%e5%b0%86%e7%bc%96%e7%a0%81%e7%94%b1utf16%e8%bd%ac%e4%b8%bautf8)
    - [对字符串进行base64编码](#%e5%af%b9%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bf%9b%e8%a1%8cbase64%e7%bc%96%e7%a0%81)
    - [对字符串进行base64解码](#%e5%af%b9%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bf%9b%e8%a1%8cbase64%e8%a7%a3%e7%a0%81)
  - [数字处理](#%e6%95%b0%e5%ad%97%e5%a4%84%e7%90%86)
    - [显示两位小数的金额](#%e6%98%be%e7%a4%ba%e4%b8%a4%e4%bd%8d%e5%b0%8f%e6%95%b0%e7%9a%84%e9%87%91%e9%a2%9d)
    - [千位符显示数字](#%e5%8d%83%e4%bd%8d%e7%ac%a6%e6%98%be%e7%a4%ba%e6%95%b0%e5%ad%97)
  - [时间处理](#%e6%97%b6%e9%97%b4%e5%a4%84%e7%90%86)
    - [自定义格式](#%e8%87%aa%e5%ae%9a%e4%b9%89%e6%a0%bc%e5%bc%8f)
    - [距离当前时间差处理](#%e8%b7%9d%e7%a6%bb%e5%bd%93%e5%89%8d%e6%97%b6%e9%97%b4%e5%b7%ae%e5%a4%84%e7%90%86)
  - [请我喝杯果汁呗～](#%e8%af%b7%e6%88%91%e5%96%9d%e6%9d%af%e6%9e%9c%e6%b1%81%e5%91%97)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 字符处理
### 默认处理非数值的内容为0
对非数字的内容，返回默认想展示的内容defaultVal || 0，否则返回原值
```js
$fn.n(null) //返回0
$fn.n(1) //返回1
$fn.n('1') //返回'1'
$fn.n('1a') //返回0
$fn.n('1a',null) //返回null
```
### 默认处理空字符串为'--'
对undefined/null/''(空字符串)，返回默认想展示的内容defaultVal || '--'，否则返回原值
```js
$fn.s(null) //返回'--'
```
### 判断是否有值
对undefined/null/''(空字符串)返回false，其他返回true
```js
$fn.hasValue(null) //返回false
```
### 给URL添加参数
```js
$fn.urlAddParams(url,{
    user:'admin'
})
```
### 将编码由utf8转为utf16
```js
$fn.utf8to16(str) 
```
### 将编码由utf16转为utf8
```js
$fn.utf16to8(str) 
```
### 对字符串进行base64编码
```js
$fn.encodeBase64(str) 
```
### 对字符串进行base64解码
```js
$fn.decodeBase64(str) 
```

## 数字处理
### 显示两位小数的金额
```js
$fn.showMoney(34) //返回0.34
$fn.showMoney(1234) //返回12.34
```
### 千位符显示数字
```js
$fn.showThousandMoney(1234) //返回1,234.00
```

## 时间处理
### 自定义格式
* YMDhms直接替换对应时间单位，格式可自由替换
* 没有参数直接返回Y-M-D h:m:s(如2018-01-01 12:21:45)
* 有参数则直接替换
```js
$fn.showDate() //返回当前时间2018-01-01 12:21:45
$fn.showDate('Y-M-D h:m:s',new Date('2018-01-01 12:21:45')) //返回2018-01-01 12:21:45
$fn.showDate('Y-M',new Date('2018-01-01 12:21:45')) //返回2018-01
```

### 距离当前时间差处理
获取参数时间戳距离当前的时差，超过1秒显示*秒，超过1分显示*分，超过1时显示*时，超过1天显示*天，超过1年显示*年
```js
$fn.diffToNow(new Date()) //返回0秒
```


## 请我喝杯果汁呗～

![Image text](https://github.com/sunny-world/jj-browser-fn/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/sunny-world/jj-browser-fn/blob/master/image/wechat.jpg?raw=true)