---
sidebar: auto
title: OA表结构
---


## 系统基础
### 下拉框
#### selectitem
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| objname      | varchar2(256) | YES | null | 名称 |
| objdesc      | varchar2(256) | YES | null | 描述，部分系统下拉框存放条件，如共享人员定义、共享岗位定义等。 |
| pid      | varchar2(32) | YES | null | 父ID |


#### selectitemtype
