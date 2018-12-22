---
sidebarDepth: 2
title: 更新说明
---


记录每次OA的重大更新   

## 2018年12月14日:布局设计器更新说明
### 1.增加谷歌浏览器的支持   
 谷歌浏览器下的显示效果：   
![avatar](/img/oaSystem/update/20181214/googleSupport.png)   
   
### 2.增加代码编辑器   
 代码编辑器效果：   
![avatar](/img/oaSystem/update/20181214/codedesign1.png)  
      
 代码编辑器中使用快捷键Ctrl+q可打开设置项对编辑器进行设计      
![avatar](/img/oaSystem/update/20181214/codedesign3.png)   
    
 老版本的代码编辑只支持单引号，新版本单引号双引号都支持：   
![avatar](/img/oaSystem/update/20181214/codedesign2.png) 

### 3.点击布局设计中的字段和左侧的列表字段都可在下方显示字段属性   
注：IE浏览器中设计页面需要双击字段下方才显示字段属性，谷歌浏览器只需单击。  
 选中设计页面中的字段下方会显示此字段的字段属性：    
![avatar](/img/oaSystem/update/20181214/fieldinfo1.png)   
   
 选中左侧字段列表中的字段在下方也会显示字段属性：   
![avatar](/img/oaSystem/update/20181214/fieldinfo2.png)   
   
### 4.移除不必要的按钮，增加字段属性弹窗框按钮
![avatar](/img/oaSystem/update/20181214/fieldinfo3.png)  
   
 设计页面选中字段后点击此按钮会弹出字段属性编辑框：   
![avatar](/img/oaSystem/update/20181214/fieldinfo4.png)  
   
### 5.IE浏览器和谷歌浏览器操作上的差异   
 谷歌浏览器设计页面的字段支持右键属性，IE浏览器不支持，IE浏览器修改字段属性需选中字段后点击上方按钮栏中的最后一个按钮：   
谷歌浏览器：   
![avatar](/img/oaSystem/update/20181214/ie+google_1.png)   

IE浏览器：   
![avatar](/img/oaSystem/update/20181214/ie+google_2.png)    

## 2018年12月21日:布局设计器更新说明
### 1.增加设置字段width和height属性
 在左侧字段明细下面增加width和height的设置，width的数值为百分比，height的数值为像素：   
![avatar](/img/oaSystem/update/20181221/widthheight.png)  

### 2.设计页面增加显示style=display:none的DOM元素
 设计页面会显示style=display:none的DOM元素，并以橘红色的边框标记   
 主表tr设置display:none后的效果：   
 ![avatar](/img/oaSystem/update/20181221/mainTable.png)    
 
 子表td设置display:none后的效果：   
 ![avatar](/img/oaSystem/update/20181221/subTable.png)    
 
 代码编辑页面中的style=display:none系统会默认替换成show=false,不影响JS操作DOM，   
 原来的写法不变：document.getElementById("id").style.display = "none"|"";   
 ![avatar](/img/oaSystem/update/20181221/html.png)  
 
## 2018年12月22日:布局设计器更新说明
### 增加字体大小设置和颜色设置
 ![avatar](/img/oaSystem/update/20181222/fontsize_color.png)  