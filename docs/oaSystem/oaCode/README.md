---
title: OA代码说明
---

## 用户
判断当前用户是否属于某个角色
```java
sysuserrolelinkService.isRole(roleid,userid);
//orgid可为空，不为空时对应角色中的角色级别
permissionruleService.checkUserRole(userid,roleid,orgid);
//判断用户是否属于管理员角色
boolean isSysAdmin = ps.checkUserRole(eweaveruser.getId(), "402881e50bf0a737010bf0a96ba70004", null);
```
## 数据库
获取数据库类型
```java
SQLMap.getDbtype()
```