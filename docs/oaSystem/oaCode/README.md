---
title: OA代码说明
---

## 介绍
### DAO
Dao分为Dao、DaoImpl，Dao为接口，DaoImpl为实现类，   
Dao继承BaseEntityDao，DaoImpl继承BaseHibernateDao，BaseEntityDao中定义了数据库操作的基础方法，具体在BaseHibernateDao中实现，   
这里利用了java中的多态特性，具体的DaoImpl中不需要实现BaseEntityDao中的方法
### 权限
如果涉及到权限的查询则使用find()方法，非权限的查询则可使用其查询方法
### service业务代码
service中的业务代码create、save、modify、update、delete等操作其他entity时使用对应的service操作
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