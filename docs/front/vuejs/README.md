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