---
sidebarDepth: 2
title: MongoDB
---

## docker安装
```markdown
1. docker search mongo
2. docker pull mongo
3. 宿主机创建两个目录：
    data: 数据库数据目录
    dump: 备份数据目录
--4. docker run --name mongodb -p 27017:27017 -v /docker/mongodb/data:/data/db -v /docker/mongodb/dump:/var/dump -d mongo:3.6 --auth
--auth: 开启授权访问。默认不开启，即不需要用户名密码就可以连接数据库，这样会有安全风险，切忌要开启。
开启授权访问之后，还需要为admin数据库创建用户名和密码。
4. docker run -d --name mongo -e MONGO_INITDB_ROOT_USERNAME=bestlink -e MONGO_INITDB_ROOT_PASSWORD=123456 -p 27017:27017 -v /bestlink/mongo/data:/data/db -v /bestlink/mongo/dump:/var/dump cdc6740b66a7
```

## 概念
| SQL术语/概念      | MongoDB术语/概念     | 解释/说明 |
| ------------- |---------|---------|  
| database      | database | 数据库 | 
| table | collection | 数据库表/集合 |
| row | document | 数据记录行/文档 |
| column | field | 数据字段/域 |
| index | index | 索引 |
| table joins | | 表连接，MongoDB不支持 |
| primary key | primary key | 主键，MongoDB自动将_id字段设置为主键 | 

## 数据类型
| 数据类型      | 描述 |
| ------------- |--------- | 
| String      | 字符串。存储数据常用的数据类型。在MongoDB中，UTF-8编码的字符串才是合法的 |
| Integer | 整型数值。用于存储数值。根据你所采用的服务器，可分为32位或64位。 | 
| Boolean | 布尔值。用于存储布尔值(真/假) |
| Double | 双精度浮点值。用于存储浮点值 |
| Min/Max keys | 将一个值与BSON(二进制的JSON)元素的最低值和最高值相对比 |
| Arrays | 用于将数组或列表或多个值存储为一个键 |
| Timestamp | 时间戳。记录文档修改或添加的具体时间 |
| Object | 用于内嵌文档 |
| Null | 用于创建空值 |
| Symbol | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。|
| Date | 日期时间。用UNIT时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建Date对象，传入年月日信息。 |
| Object ID | 对象ID。用于创建文档的ID |
| Binary Data | 二进制数据。用于存储二进制数据 |
| Code | 代码类型。用于在文档中存储JavaScript代码 |
| Regular expression | 正则表达式类型。用于存储正则表达式 |

## 基本命令
| 操作      | 命令 | 说明 |
| ------------- |--------- |  ----- |
| 创建数据库和集合 | use test <br> db.createCollection("bestlink") | 使用use命令时，如果没有则会创建，但是如果不创建一条集合 use命令不会生效| 
| 查看数据库 | show dbs | |
| 查看集合 | show tables / show collections | |
| 删除数据库 | db.dropDatabase("test") | |
| 删除集合 | db.collection.drop() | db.bestlink.drop() |
| 创建集合 | db.createCollection(name, options) | 如果没有集合，当插入文档时也会自动创建集合：db.mycol2.insert({"name":"test11"}) |

db.createCollection中的options说明：

| 字段      | 类型 | 描述 |
| ------------- |--------- |  ----- |
| capped | 布尔 | 可选，如果为true,则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。当该值为true时，必须指定size参数。 |
| autoIndexId | 布尔 | 可选，如为true,自动在_id字段创建索引。默认为false |
| size | 数值 | 可选，为固定集合指定一个最大值（以字节计）。如果capped为true,也需要指定该字段。 |
| max | 数值 | 可选，指定固定集合中包含文档的最大数量。 |

在插入文档时，MongoDB首先检查固定集合的size字段，然后检查max字段。

例子：创建固定集合mycol,整个集合空间大小6142800KB,文档最大个数为10000个
```markdown
db.createCollection("mycol", {capped: true, autoIndexId: true, size: 6142800, max: 10000})
```
