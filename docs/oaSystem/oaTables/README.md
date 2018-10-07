---
sidebarDepth: 0
title: OA表结构
---


## 下拉框
### selectItem
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| objname      | varchar2(256) | YES | null | 名称 |
| objdesc      | varchar2(256) | YES | null | 描述，部分系统下拉框存放条件，如共享人员定义、共享岗位定义等。 |
| pid      | varchar2(32) | YES | null | 父ID |

### selectItemType
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |

## 关联选择
### refObj
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |

## 分类
### category
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |

### categoryLink
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |

## 多语言

## 接口

## 提醒

## 数据源

## 日志

## 权限

## 设置项

## 附件

## Excel导入导出

## 字段编码

## 定时任务

## 树形配置

## 员工信息

## 岗位信息

## 角色信息

## 门户

## 文档

## 流程

## 表单

## 报表

## 菜单

## 其他