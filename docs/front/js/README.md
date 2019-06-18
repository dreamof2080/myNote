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


## forEach、filter、map、some、every、find、findIndex、reduce
有一堆土豆：
```javascript
const potatos = [{ id: '1001', weight: 50 },
{ id: '1002', weight: 80 },
{ id: '1003', weight: 120 },
{ id: '1004', weight: 40 },
{ id: '1005', weight: 110 },
{ id: '1006', weight: 60 }]
```
把上面的重量(g)记录成一个数组
```javascript
let w = [50, 80, 120, 40, 110, 60]
```
我们希望把这一批土豆全部催熟一下，进行增重 可以用到forEach方法
```javascript
potatos.forEach(potato => {potato.weight += 20 })
```
map方法说：我也可以！
```javascript
potatos.map(potato => { potato.weight += 20 })
```
map补充了一句，我还可以把重量统计表格，更新出一份新的给你
```javascript
w = potatos.map(potato => 
{ return potato.weight += 20 })

//[ 70, 100, 140, 60, 130, 80 ]
```
forEach和map的最大区别就在于，forEach没有返回值。 即便你给forEach加上return也没用   

filter是滤波的意思 从名字上看，就知道筛选过滤这样的活是filter来干的
```javascript
var bigOnes = potatos.filter(potato => { return potato.weight > 100 })

//[ { id: '1003', weight: 120 }, { id: '1005', weight: 110 } ]
```
返回一个新的对象数组，并不会改变原数组   

旁边的小商贩嘲笑我们说，我们这都是小土豆，不中用的 那不得找一个巨无霸给他看看
当只需要判断数组中有没有符合条件的时候（一个就行） 就需要我们的some方法登场了
```javascript
var hasbig = potatos.some(potato => { return potato.weight > 100 })

//true
```
我们的some小伙计，去土豆存放的仓库进行寻找，只要找到一个符合条件的，就回来报告true 所以并不会全部遍历，不做多余的活（性能优良）   
小商贩不服了，我不信你这全是大的 派了个every小伙计去检查
```javascript
var allbig = potatos.every(potato => { return potato.weight > 100 })

//false
```
every对每一个元素执行一个callback，直到它找到一个使 callback 返回 false的元素（没那么大的土豆），就返回false，直到遍历完成也没有返回false的话，就返回true   

来了一个顾客，想要一个大土豆 find自告奋勇，我去找给他
```javascript
var big = potatos.find(potato => { return potato.weight > 100 })

//{ id: '1003', weight: 120 }
```
find和some很类似，都是寻找符合条件的，有一个就可以 不过some进去搜罗了一圈回来报了个“有”（true），而find则把那个土豆抱了出来（返回第一个符合条件的对象）   

“哎，这土豆是仓库的第几个？” find说：“哎呀我光顾着抱土豆了，没看是第几个”

“你这粗心鬼，早知道让findIndex跟你一起去了”
```javascript
var i = potatos.findIndex(potato=>{ return potato.weight > 100 })

//2

```
当需要知道所需元素的索引，就可以用findIndex,

findIndex返回第一个符合条件的索引号   
说起来还不知道今年收成到底怎么样呢 谁数学好 把表格上那些土豆重量加一加 reduce说：那不得我来么
```javascript
var sum = weight.reduce((sum, w) => { return w + sum },0)

//460
//并不会改变原表格
```
````markdown
reduce()方法接收一个回调函数作为第一个参数，回调函数又接受四个参数，分别是：
1、previousValue =>初始值或上一次回调函数叠加的值；
2、currentValue => 本次回调（循环）将要执行的值；
3、index=>“currentValue”的索引值；
4、arr => 数组本身；
reduce()方法返回的是最后一次调用回调函数的返回值；
````
也可以这样
```javascript
  var sum = potatos.reduce((sum, p) => 
  { return p.weight + sum },0)
  
  //460

```

## reduce
先看一个例子：
```javascript
//计算数组元素相加后的总和
const numbers = [1,22,12,32];
// 第一种方式：把合计计算方法单独拿出来
function getSum(total,item) {
  return total + item;
}
function sum1() {
  return numbers.reduce(getSum);
}
// 第二种方式：直接传入方法
function sum2() {
  return numbers.reduce((total,item) => { return total + item })
}

```
定义和用法：
```markdown
reduce()方法接收一个函数作为累加器，数组中的每个值(从左到右)开始缩减，最终计算为一个值，
reduce()为数组中的每个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素。
reduce()可以作为一个高阶函数，用于函数的compose。
注：reduce()对于空数组是不会执行回调函数的。

```
语法：
```markdown
array.reduce(function(previousValue,currentValue,currentIdex,arr),initialValue);
previousValue: 必需，上一次调用回调返回的值，或者是提供的初始值（initialValue）。
currentValue: 必须，当前元素。
currentIndex: 可选，当前元素的索引。
arr: 可选，调用 reduce 的数组。
initialValue: 可选，作为第一次调用 callback 的第一个参数。

如果没有initialValue的话，那么回调函数当中previousValue会是数组当中索引为0的第一个值，回调函数当中的第二个参数为索引为1的第二个值。
```
reduce函数的返回结果类型和传入的初始值相同，同理，初始值也可为object类型
```javascript
var items = [10, 120, 1000];

// our reducer function
var reducer = function add(sumSoFar, item) {
  sumSoFar.sum = sumSoFar.sum + item;
  return sumSoFar;
};

// do the job
var total = items.reduce(reducer, {sum: 0});

console.log(total); // {sum:1130}

```
如何知道一串字符串中每个字母出现的次数
```javascript
const arr = 'abcdaabc';
const res = arr.split('').reduce(function (res,cur) {
    res[cur] ? res[cur]++ : res[cur] = 1;
    return res;
},{});
console.log(res)
```

由于可以通过第二参数设置叠加结果的类型初始值，因此这个时候reduce就不再仅仅只是做一个加法了，我们可以灵活的运用它来进行各种各样的类型转换，比如将数组按照一定规则转换为对象，也可以将一种形式的数组转换为另一种形式的数组，大家可以动手去尝试一样。
```javascript
const newArr = [1, 2].reduce(function(res, cur) {
    res.push(cur + 1);
    return res;
  }, []);
  console.log(newArr)
```