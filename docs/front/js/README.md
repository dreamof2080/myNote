---
sidebarDepth: auto
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
```html
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
```html
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


## js中的栈(Stack)和堆(Heap)
>基础

栈是栈内存的简称，堆是堆内存的简称。说道堆栈，我们讲的就是内存的使用和分配，没有寄存器的事，也没有硬盘的事。
::: tip
各种语言在处理堆栈的原理上都大同小异。堆是动态分配内存，内存大小不一，也不会自动释放。
栈是自动分配相对固定大小的内存空间，并由系统自动释放。
:::
js的基本类型就5中：数字、字符串、Undefined、Null、不是new出来的布尔，
它们都是直接按值存储在栈中的，每种类型的数据占用的内存空间的大小是固定的，
并由系统自动分配和自动释放。这样带来的好处就是，内存可以及时得到回收，相对于堆来说，更加容易管理内存空间。
js中其他类型的数据被称为引用类型的数据(如对象、数组、函数等)，它们是通过拷贝和new出来的，
这样的数据存储于堆中。其实，说存储于堆中，也不太准确，因为，引用类型的数据的地址指针是存储于栈中的，当我们想要访问引用类型的值的时候，需要先从栈中获得对象的地址指针，
然后在通过地址指针找到堆中的所需要的数据。   
首先看个例子：
```javascript
var obj = new Object();
setName(obj);
console.log(obj.name)
function setName(obj) {
    obj.name = 'jame';
    obj = new Object();
    obj.name = 'olife';
}
```
输出结果：   
```markdown
jame
```
执行分析：
1. var obj = new Object();   
创建一个obj对象，在栈内存划分一块地址存储obj对象的指针信息,
在堆内存中划分一块地址存储具体的对象信息，栈中的指针指向具体的堆内存。   
![avatar](/img/front/js/stack1.png) 
2. setName(obj);   
执行setName方法，把obj对象的指针信息传给setName方法，注意这里传的是obj对象的指针信息，相当于在栈中复制了一个obj(为了区分我们叫它_obj)，同时指向同一个堆内存   
obj.name = 'jame'，给obj对象添加name属性
![avatar](/img/front/js/stack2.png)  
3. obj = new Object();   
创建一个新的对象，并把_obj的指针指向这个新的对象
![avatar](/img/front/js/stack3.png)  
4. obj.name = 'olife'   
给这个新的对象添加name属性   
![avatar](/img/front/js/stack4.png) 
5. console.log(obj.name)   
打印obj.name，这个时候的obj其实指的是栈中的obj并非_obj,所以输出的就是jame

