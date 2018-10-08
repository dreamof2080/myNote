---
sidebarDepth: 0
title: docker
---

## 安装
### ubuntu下安装docker
<code>sudo apt install docker-io</code>
### centos下安装docker
<code>sudo yum -y install docker-io</code>

## 启动
<code>service docker start</code>

## 命令
| 命令      | 说明     |
| ------------- |:-------------|
| dockper ps      | 查看运行中的docker容器 | 
| docker ps -a	| 查看所有的docker容器 |
| docker logs -f id | 实时打印容器的运行日志 |
| docker logs -f -t --since="2018-05-23" --tail=100 tomcat6_8066 | 实时打印日志：日期、行数、容器ID|
| docker top id | 查看容器的进程|
| docker inspect id	| 查看容器的配置和状态信息|
| docker stop id | 停止容器|
| docker start id| 启动容器 |
| docker restart id| 重启容器 |
| docker rm id | 删除容器，删除容器时必须先停止容器|
| docker images	| 列出本地主机上的镜像 |
| docker rmi imageID | 删除某个镜像|
| docker rmi -f hub.doge.com/ubuntu:latest | 删除某个tag|
| docker search dockername | 在配置的镜像源中搜索docker |
| docker pull dockername | 获取一个新的镜像|
| sudo docker exec -ti cbd53ba42a0a /bin/bash|进入某个容器|

## 运行redis
```markdown
--获取镜像   
docker pull redis    
--启动容器   
docker run -p 6379:6379 --name myredis -v $PWD/redis.conf:/etc/redis/redis.conf -v $PWD/data:/data -d docker.io/redis redis-server /etc/redis/redis.conf --appendonly yes --requirepass "bestlink"
--进入客户端   
docker run -it redis redis-cli -h localhost
```
## 运行tomcat
```markdown
--获取镜像   
docker pull tomcat
--启动容器
docker run --name tomcat8_nginxstatus -v /docker/tomcat/logs:/usr/local/tomcat/logs -v /docker/tomcat/webapps:/usr/local/tomcat/webapps -d -p 80:8080 11df4b40749f   
```
## 运行mysql
```markdown
--获取镜像   
docker pull mysql
--启动容器
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d 5709795eeffa
```