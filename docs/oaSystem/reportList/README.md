---
sidebarDepth: 0
title: 分类或流程列表功能说明
---

## 列表JS获取某行字段的值
需求：列表搜索结果出来后，勾选其中的某几行，点击按钮获取某个字段的值后做其他操作（比如更新其他流程的数据）：   
- 在列表设置中加入如下脚本内容：   
```js
<script>
  function update(){
    //selected：数组， 表示选择的requestid
    //selectedid：数组 表示选择的id
    if(selected.length==0){
      Dialog.alert('请选择数据！');
    }else{
      if (selected.length>20){
        Dialog.alert('不能超过20条数据！');
      } else {
        //获取选择的行
        var items = sm.selections.items;
        var paramArray = new Array();
        for (var i=0;i<items.length;i++){
          //items[i].data['fgzzt']：表示选择行的某个字段
          if(items[i].data['fgzzt']){
            paramArray.push(items[i].data['fgzzt']);
          }
        }
        console.log('获取到的字段fgzzt的数组：'+paramArray);
      }
    }
  }
</script>
```
- 给列表增加页面扩展，链接目标手动输入：update();
- 结果如下：   
![avatar](/img/oaSystem/reportList/updatejs.png)  

