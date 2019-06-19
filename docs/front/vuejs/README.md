---
sidebar: auto
title: vue
---


## this.$set的使用
```javascript
this.$set(data, 'children', children);
```
给data对象添加新的属性children，那么为什么不用data.children = children呢？   
因为对象的新的属性的添加并不会执行渲染，因为对象新的属性没有在初始化时设置set、get属性，所以直接给对象赋值新的属性并不会执行渲染，
所以需要使用vue提供的方法：this.$set 给对象赋值属性，才能达到渲染的效果

## render()函数
简单的说，在vue中我们使用模板HTML语法组建页面的，使用render函数我们可以用js语言来构建DOM
```javascript
render:(h) => {
    return h(
      'div',//第1个参数 - html 标签
      { // 第2个参数 - 在一个对象里设置该标签属性
        props: {
          value:''
        },
        style:{
          width:'30px'
        },　　
        on: {
          click: () => {
            console.log('点击事件')
          }
        },
      },
      '123' //第3个参数 - 该标签的子元素,可以是另一个h函数对象创建子节点
      )
}
```