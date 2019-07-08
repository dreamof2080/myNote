---
sidebarDepth: 1
title: elasticSearch
---


## 基础命令
| 命令      | 说明     | 
| ------------- |:-------------| 
| curl -X GET "localhost:9200/_cat/health?v" | 健康检查 |
| curl -X GET "localhost:9200/_cat/nodes?v"  | 集群中的节点列表 |
| curl -X GET "localhost:9200/_cat/indices?v"  | 查看所有的索引 |
| curl -X PUT "localhost:9200/customer?pretty"  | 创建名为customer的索引 |
