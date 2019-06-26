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
| docker kill $(docker ps -a -q)|杀死所有正在运行的容器|
| docker rm $(docker ps -a -q)|删除所有已经停止的容器|
| docker rmi $(docker images -q)|删除所有的镜像|

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
## tomcat容器日期时间与宿主机日期时间不一致
使用过程中发现定时任务不执行，查看tomcat日志发现打印的时间与宿主机时间不一致：
```bash
#查看宿主机时间
[root@localhost ~]# date
2018年 12月 21日 星期五 09:19:01 CST
#进入容器查看容器时间：
[root@localhost ~]# docker exec -ti tomcat6_8099 /bin/bash
[root@b6d3b0435ffb /]# date
Fri Dec 21 01:19:48 UTC 2018
```
::: tip
两者相差8小时   
CST: China Shanghai Time，东八区时间   
UTC: Coordinated Universal Time,标准时间
:::
统一两者的时区有下面几种方法：
* 共享主机的localtime:   
创建容器的时候指定启动参数，挂载localtime文件到容器内，保证两者所采用的时区是一致的
```bash
docker run --name tomcat8_nginxstatus -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro -v /docker/tomcat/logs:/usr/local/tomcat/logs -v /docker/tomcat/webapps:/usr/local/tomcat/webapps -d -p 80:8080 11df4b40749f
#注 ro:readonly   
```
* 复制主机的localtime
```bash
docker cp /etc/localtime 容器名称或ID:/etc/
```
* 创建dockerfile文件的时候，自定义该镜像的时间格式及时区。在dockerfile文件里添加下面内容：
```bash
FROM tomcat
ENV CATALINA_HOME /usr/local/tomcat
...
#设置时区   
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

```
保存后，利用docker build命令生成镜像使用即可,使用dockerfile创建的镜像的容器改变了容器的时区，这样不仅保证了容器时间与宿主机时间一致（假如宿主机也是CST）,并且像上面使用tomcat作为父镜像的话，JVM的时区也是CST,这样tomcat的日志信息的时间也是和宿主机一致的，像上面那两种方式只是保证了宿主机时间与容器时间一致，JVM的时区并没有改变，tomcat日志的打印时间依旧是UTC

## ubuntu执行docker命令提示permission denied
```bash
sudo groupadd docker
sudo gpasswd -a $master docker
sudo gpasswd -a $USER docker
newgrp docker

```
