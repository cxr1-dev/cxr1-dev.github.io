---
title: 初学Javascript（一）
published: 2025-07-30
description: '主播要开始学习Javascript了！'
image: 'https://youke1.picui.cn/s1/2025/07/30/6889bc844cd23.png'
tags: [JS， Web]
category: '初学JS'
draft: false 
lang: ''
---
主播要开始学习Javascript了，那么开始吧（本博客可以作为你学JS的参考哦~（尽管是初学者，但是我会写的像教程一样，如果有些不对的地方，欢迎指正（`iscxr1@cxr1.top`

# 一、Class 0：开发环境

主播这里是VSCode + Google Chrome。

# 二、Class 1：Hello World！

首先先从Hello world!开始吧。

既然实际应用中都是从HTML中调用，那我先创建一个HTML文件吧

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Class1</title>
</head>
<body>
    <script>
      
    </script>
</body>
</html>
```

嗯，接下来就可以在`script`标签里面写JS代码了！

```js
console.log("Hello world!");
```

这个就是输出Hello world!的代码了，看起来很简单。

`console`：控制台

`log`：日志

很简单。

# Class 2：变量/常量

让我去翻一下[菜鸟教程](https://https://www.runoob.com/js/js-tutorial.html)，顺带一提，这是一个很好的自学编程语言的地方。

可以用`var`、`let`定义变量，`const`定义常量。

于是上面的代码就可以写成：

```js
var string = "Hello world!";
console.log(string);
```

或者：

```js
const string = "Hello world!";
console.log(string);
```

就先写这么多，再见！👋🏻👋🏻👋🏻
