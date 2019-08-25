---
sidebarDepth: 2
title: postgreSQL
---

## docker安装postgreSQL
```markdown
1. docker pull postgres
2. docker run --name postgres1 -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```
-e POSTGRES_PASSWORD=password，设置环境变量，指定数据库的登录口令为password； 

默认的用户名为：postgres

