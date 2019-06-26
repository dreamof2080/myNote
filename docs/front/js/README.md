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

## ES6
### 最常用的ES6特性
let, const, class, extends, super, arrow functions, template string, destructuring, default, rest arguments   
这些是ES6最常用的几个语法，基本上学会它们，我们就可以走遍天下都不怕啦！我会用最通俗易懂的语言和例子来讲解它们，保证一看就懂，一学就会。

### let,const
这两个的用途与var类似，都是用来声明变量的，但在实际运用中他俩都有各自的特殊用途。   
首先来看下面这个例子：   
```js
var name = 'zach'

while (true) {
    var name = 'obama'
    console.log(name)  //obama
    break
}

console.log(name)  //obama
```
使用var 两次输出都是obama，这是因为ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。第一种场景就是你现在看到的内层变量覆盖外层变量。而let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
```js
let name = 'zach'

while (true) {
    let name = 'obama'
    console.log(name)  //obama
    break
}

console.log(name)  //zach
```
另外一个var带来的不合理场景就是用来计数的循环变量泄露为全局变量，看下面的例子：
```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面代码中，变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。而使用let则不会出现这个问题。
```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
再来看一个更常见的例子，了解下如果不用ES6，而用闭包如何解决这个问题。
```js
var clickBoxs = document.querySelectorAll('.clickBox')
for (var i = 0; i < clickBoxs.length; i++){
    clickBoxs[i].onclick = function(){
        console.log(i)
    }
}
```
我们本来希望的是点击不同的clickBox，显示不同的i，但事实是无论我们点击哪个clickBox，输出的都是5。下面我们来看下，如何用闭包搞定它。
```js
function iteratorFactory(i){
    var onclick = function(e){
        console.log(i)
    }
    return onclick;
}
var clickBoxs = document.querySelectorAll('.clickBox')
for (var i = 0; i < clickBoxs.length; i++){
    clickBoxs[i].onclick = iteratorFactory(i)
}
```
const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。
```js
const PI = Math.PI

PI = 23 //Module build failed: SyntaxError: /es6/app.js: "PI" is read-only
```
当我们尝试去改变用const声明的常量时，浏览器就会报错。
const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug：
```js
const monent = require('moment')
```
### class, extends, super
这三个特性涉及了ES5中最令人头疼的的几个部分：原型、构造函数，继承...你还在为它们复杂难懂的语法而烦恼吗？你还在为指针到底指向哪里而纠结万分吗？   
有了ES6我们不再烦恼！   
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念。新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂。
```js
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello
```
上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。   
Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。   
super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。   
ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。   
P.S 如果你写react的话，就会发现以上三个东西在最新版React中出现得很多。创建的每个component都是一个继承React.Component的类.   

### arrow function
箭头函数最直观的三个特点:
* 不需要 function 关键字来创建函数
* 省略 return 关键字
* 继承当前上下文的 this 关键字   

这个恐怕是ES6最最常用的一个新特性了，用它来写function比原来的写法要简洁清晰很多:
```js
function(i){ return i + 1; } //ES5
(i) => i + 1 //ES6
```
简直是简单的不像话对吧...   
如果方程比较复杂，则需要用{}把代码包起来：
```js
function(x, y) { 
    x++;
    y--;
    return x + y;
}
(x, y) => {x++; y--; return x+y}
```
除了看上去更简洁以外，arrow function还有一项超级无敌的功能！   
长期以来，JavaScript语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。例如：
```js
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout(function(){
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}

 var animal = new Animal()
 animal.says('hi')  //undefined says hi
```
运行上面的代码会报错，这是因为setTimeout中的this指向的是全局对象。所以为了让它能够正确的运行，传统的解决方法有两种：   
1. 第一种是将this传给self,再用self来指代this
```js
 says(say){
       var self = this;
       setTimeout(function(){
           console.log(self.type + ' says ' + say)
       }, 1000)
```
2. 第二种方法是用bind(this),即
```js
 says(say){
       setTimeout(function(){
           console.log(this.type + ' says ' + say)
       }.bind(this), 1000)
```
但现在我们有了箭头函数，就不需要这么麻烦了：
```js
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}
 var animal = new Animal()
 animal.says('hi')  //animal says hi
```
当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。   
并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。

### template string
这个东西也是非常有用，当我们要插入大段的html内容到文档中时，传统的写法非常麻烦，所以之前我们通常会引用一些模板工具库，比如mustache等等。   
大家可以先看下面一段代码：
```js
$("#result").append(
  "There are <b>" + basket.count + "</b> " +
  "items in your basket, " +
  "<em>" + basket.onSale +
  "</em> are on sale!"
);
```
我们要用一堆的'+'号来连接文本与变量，而使用ES6的新特性模板字符串``后，我们可以直接这么来写：
```js
$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```
用反引号(\`)来标识起始，用${}来引用变量，而且所有的空格和缩进都会被保留在输出之中，是不是非常爽？！   
React Router从第1.0.3版开始也使用ES6语法了，比如这个例子：
```js
<Link to={`/taco/${taco.name}`}>{taco.name}</Link>
```
对于字符串 ES6+ 当然也提供了很多厉害也很有意思的方法😊 说几个常用的:
```js
// 1.includes：判断是否包含然后直接返回布尔值
const str = 'hahay'
console.log(str.includes('y')) // true

// 2.repeat: 获取字符串重复n次
const str = 'he'
console.log(str.repeat(3)) // 'hehehe'
//如果你带入小数, Math.floor(num) 来处理
// s.repeat(3.1) 或者 s.repeat(3.9) 都当做成 s.repeat(3) 来处理

// 3. startsWith 和 endsWith 判断是否以 给定文本 开始或者结束
const str =  'hello world!'
console.log(str.startsWith('hello')) // true
console.log(str.endsWith('!')) // true

// 4. padStart 和 padEnd 填充字符串，应用场景：时分秒
setInterval(() => {
    const now = new Date()
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`)
}, 1000)
```

### 拓展的对象功能
对象初始化简写   
ES5我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的。例如：   
```js
    function people(name, age) {
        return {
            name: name,
            age: age
        };
    }
```
键值对重名，ES6可以简写如下：
```js
    function people(name, age) {
        return {
            name,
            age
        };
    }
```
ES6 同样改进了为对象字面量方法赋值的语法。ES5为对象添加方法：
```js
    const people = {
        name: 'lux',
        getName: function() {
            console.log(this.name)
        }
    }
```
ES6通过省略冒号与 function 关键字，将这个语法变得更简洁:
```js
    const people = {
        name: 'lux',
        getName () {
            console.log(this.name)
        }
    }
```
ES6 对象提供了 Object.assign()这个方法来实现浅复制。   
Object.assign() 可以把任意多个源对象自身可枚举的属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象。在实际项目中，我们为了不改变源对象。一般会把目标对象传为{}
```js
    const objA = { name: 'cc', age: 18 }
    const objB = { address: 'beijing' }
    const objC = {} // 这个为目标对象
    const obj = Object.assign(objC, objA, objB)

    // 我们将 objA objB objC obj 分别输出看看
    console.log(objA)   // { name: 'cc', age: 18 }
    console.log(objB) // { address: 'beijing' }
    console.log(objC) // { name: 'cc', age: 18, address: 'beijing' }
    console.log(obj) // { name: 'cc', age: 18, address: 'beijing' }

    // 是的，目标对象ObjC的值被改变了。
    // so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{}
    Object.assign({}, objC, objA, objB)
```
### destructuring
数组和对象是JS中最常用也是最重要表示形式。为了简化提取信息，ES6新增了解构，这是将一个数据结构分解为更小的部分的过程。   
ES5我们提取对象中的信息形式如下：   
```js
    const people = {
        name: 'lux',
        age: 20
    }
    const name = people.name
    const age = people.age
    console.log(name + ' --- ' + age)
```
是不是觉得很熟悉，没错，在ES6之前我们就是这样获取对象信息的，一个一个获取。现在，解构能让我们从对象或者数组里取出数据存为变量，例如
```js
    //对象
    const people = {
        name: 'lux',
        age: 20
    }
    const { name, age } = people
    console.log(`${name} --- ${age}`)
    //数组
    const color = ['red', 'blue']
    const [first, second] = color
    console.log(first) //'red'
    console.log(second) //'blue'
```
要不来点儿面试题，看看自己的掌握情况？
```js
    // 请使用 ES6 重构一下代码

    // 第一题
    var jsonParse = require('body-parser').jsonParse

    // 第二题
    var body = request.body
    var username = body.username
    var password = body.password
```
```js
    // 1.
    import { jsonParse } from 'body-parser'
    // 2. 
    const { body, body: { username, password } } = request
```

### Spread Operator 展开运算符
ES6中另外一个好玩的特性就是Spread Operator 也是三个点儿...接下来就展示一下它的用途。   
组装对象或者数组：
```js
    //数组
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    console.log(colorful) //[red, yellow, green, pink]
    
    //对象
    const alp = { fist: 'a', second: 'b'}
    const alphabets = { ...alp, third: 'c' }
    console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"}
```
有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项
```js
    //数组
    const number = [1,2,3,4,5]
    const [first, ...rest] = number
    console.log(rest) //2,3,4,5
    //对象
    const user = {
        username: 'lux',
        gender: 'female',
        age: 19,
        address: 'peking'
    }
    const { username, ...rest } = user
    console.log(rest) //{"address": "peking", "age": 19, "gender": "female"}
```
对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边
```js
    const first = {
        a: 1,
        b: 2,
        c: 6,
    }
    const second = {
        c: 3,
        d: 4
    }
    const total = { ...first, ...second }
    console.log(total) // { a: 1, b: 2, c: 3, d: 4 }
```

### default, rest
default很简单，意思就是默认值。大家可以看下面的例子，调用animal()方法时忘了传参数，传统的做法就是加上这一句type = type || 'cat' 来指定默认值。
```js
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()
```
如果用ES6我们而已直接这么写：
```js
function animal(type = 'cat'){
    console.log(type)
}
animal()
```
最后一个rest语法也很简单，直接看例子：
```js
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]
```
而如果不用ES6的话，我们则得使用ES5的arguments。

### import 和 export
import导入模块、export导出模块
```js
//全部导入
import people from './example'

//有一种特殊情况，即允许你将整个模块当作单一对象进行导入
//该模块的所有导出都会作为对象的属性存在
import * as example from "./example.js"
console.log(example.name)
console.log(example.age)
console.log(example.getName())

//导入部分
import {name, age} from './example'

// 导出默认, 有且只有一个默认
export default App

// 部分导出
export class App extend Component {};
```
以前有人问我，导入的时候有没有大括号的区别是什么。下面是我在工作中的总结：
```markdown
1.当用export default people导出时，就用 import people 导入（不带大括号）

2.一个文件里，有且只能有一个export default。但可以有多个export。

3.当用export name 时，就用import { name }导入（记得带上大括号）

4.当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age } 

5.当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as example
```

### promise

### Generators
生成器（ generator）是能返回一个迭代器的函数。生成器函数也是一种函数，最直观的表现就是比普通的function多了个星号*，在其函数体内可以使用yield关键字,有意思的是函数会在每个yield后暂停。   
这里生活中有一个比较形象的例子。咱们到银行办理业务时候都得向大厅的机器取一张排队号。你拿到你的排队号，机器并不会自动为你再出下一张票。也就是说取票机“暂停”住了，直到下一个人再次唤起才会继续吐票。   
OK。说说迭代器。当你调用一个generator时，它将返回一个迭代器对象。这个迭代器对象拥有一个叫做next的方法来帮助你重启generator函数并得到下一个值。next方法不仅返回值，它返回的对象具有两个属性：done和value。value是你获得的值，done用来表明你的generator是否已经停止提供值。继续用刚刚取票的例子，每张排队号就是这里的value，打印票的纸是否用完就这是这里的done。
```js
    // 生成器
    function *createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    // 生成器能像正规函数那样被调用，但会返回一个迭代器
    let iterator = createIterator();
    
    console.log(iterator.next().value); // 1
    console.log(iterator.next().value); // 2
    console.log(iterator.next().value); // 3
```
那生成器和迭代器又有什么用处呢？   
围绕着生成器的许多兴奋点都与异步编程直接相关。异步调用对于我们来说是很困难的事，我们的函数并不会等待异步调用完再执行，你可能会想到用回调函数，（当然还有其他方案比如Promise比如Async/await）。   
生成器可以让我们的代码进行等待。就不用嵌套的回调函数。使用generator可以确保当异步调用在我们的generator函数运行一下行代码之前完成时暂停函数的执行。   
那么问题来了，咱们也不能手动一直调用next()方法，你需要一个能够调用生成器并启动迭代器的方法。就像这样子的
```js
    function run(taskDef) { //taskDef即一个生成器函数

        // 创建迭代器，让它在别处可用
        let task = taskDef();

        // 启动任务
        let result = task.next();
    
        // 递归使用函数来保持对 next() 的调用
        function step() {
    
            // 如果还有更多要做的
            if (!result.done) {
                result = task.next();
                step();
            }
        }
    
        // 开始处理过程
        step();
    
    }
```
::: tip
生成器与迭代器最有趣、最令人激动的方面，或许就是可创建外观清晰的异步操作代码。你不必到处使用回调函数，而是可以建立貌似同步的代码，但实际上却使用 yield 来等待异步操作结束。
:::


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

## JS编程技巧
### 传参使用默认值
```js
// Bad:
function createMicrobrewery( name ) {
    const breweryName = name || 'Hipster Brew Co.';
    // ...
}
// Good:
function createMicrobrewery( name = 'Hipster Brew Co.' ) {
    // ...
}
```

### 如果参数超过两个，建议使用 ES6 的解构语法，不用考虑参数的顺序
```js
// Bad:
function createMenu( title, body, buttonText, cancellable ) {
    // ...
}
// Good:
function createMenu( { title, body, buttonText, cancellable } ) {
    // ...
}
createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
});
```

### 使用 Object.assign 设置默认属性
```js
// Bad:
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};
function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}
createMenu(menuConfig);
// Good:
const menuConfig = {
  title: 'Order',
  // 不包含 body
  buttonText: 'Send',
  cancellable: true
};
function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // config : {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}
createMenu(menuConfig);
```

### 尽量别用“非”条件句
```js
// Bad:
function isDOMNodeNotPresent(node) {
  // ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}
// Good:
function isDOMNodePresent(node) {
  // ...
}
if (isDOMNodePresent(node)) {
  // ...
}
```
### 不要过度优化
现代浏览器已经在底层做了很多优化，过去的很多优化方案都是无效的，会浪费你的时间。
```js
// Bad:
// 现代浏览器已对此( 缓存 list.length )做了优化。
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
// Good:
for (let i = 0; i < list.length; i++) {
  // ...
}
```
### 使用 ES6 的 class
在 ES6 之前，没有类的语法，只能用构造函数的方式模拟类，可读性非常差。
```js
// Good:
// 动物
class Animal {
  constructor(age) {
    this.age = age
  };
  move() {};
}
// 哺乳动物
class Mammal extends Animal{
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  };
  liveBirth() {};
}
// 人类
class Human extends Mammal{
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  };
  speak() {};
}
```
### 使用链式调用
这种模式相当有用，可以在很多库中都有使用。它让你的代码简洁优雅。
```js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}
// Bad:
const car = new Car('Ford','F-150','red');
car.setColor('pink');
car.save();

// Good: 
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car("Ford", "F-150", "red").setColor("pink").save();
```
