---
sidebarDepth: 0
title: JavaScript
---


## addEventListener()和冒泡与捕获
addEventListener()方法，事件监听，可以使用removeEventListener()方法来移除事件的监听。   
::: tip 语法
element.addEventListener(event,function,useCapture);    
event:事件类型（如："click","mousedown"）。   
function:事件触发后调用的函数。   
useCapture:可选参数，布尔值，描述事件是冒泡还是捕获，默认false冒泡。   
:::
举例：   
```js
document.getElementById("mydiv").addEventListener("click",myFunction);
document.getElementById("mydiv").addEventListener("click",myFunction,true);
document.getElementById("mydiv").addEventListener("click",function(){
  myFunction(param1,param2);
});
document.getElementById("mydiv").removeEventListener("click",myFunction);
```

----

冒泡与捕获   
::: tip 
事件传递有两种方式：冒泡与捕获。   
事件传递定义了元素事件触发的顺序。如果将p元素插入到div元素中，p和div都有click事件，用户点击p，哪个元素的click事件先被触发？   
在冒泡中：内部元素的事件会先被触发，然后再触发外部元素，即p先触发，div后触发。   
在捕获中：外部元素的事件会先被触发，然后再触发内部元素，即div先触发，p后触发。   
addEventListener中默认值为false，冒泡传递。   
:::
看如下的例子：   
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width:100px;
            height: 100px;
            background-color:red;
        }
        p{
            height:20px;
            width:100%;
            background-color:rebeccapurple;
        }
    </style>
</head>
<body>
    <div id="div1">
        <p id="p1">这是P</p>
    </div>

<script>
    document.getElementById("div1").addEventListener("click",function () {
      console.log("div被点击");
    })
    document.getElementById("p1").addEventListener("click",function () {
      console.log("p被点击");
    })
</script>
</body>
</html>
```
执行的结果如下：   
![avatar](/img/front/js/js_1.png)  
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width:100px;
            height: 100px;
            background-color:red;
        }
        p{
            height:20px;
            width:100%;
            background-color:rebeccapurple;
        }
    </style>
</head>
<body>
    <div id="div1">
        <p id="p1">这是P</p>
    </div>

<script>
    document.getElementById("div1").addEventListener("click",function () {
      console.log("div被点击");
    },true)
    document.getElementById("p1").addEventListener("click",function () {
      console.log("p被点击");
    },true)
</script>
</body>
</html>
```
执行的结果如下：   
![avatar](/img/front/js/js_2.png) 
