---
sidebarDepth: 0
title: 断电恢复
---

## 说明
公司异常断电后的生产环境恢复

## 检查数据库是否正常
使用数据库连接工具是否正常连接数据库，无法正常连接则执行以下命令：
```bash
切换到oracle用户下   
[localhost ~]#su - oracle
打开监听服务
[localhost ~]#lsnrctl start
查看监听运行情况
[localhost ~]#lsnrctl status
以管理员身份登陆oracle
[localhost ~]#sqlplus / as sysdba
启动实例
[localhost ~]#startup
```

## 检查redis是否正常
进入192.168.0.57服务器，运行命令：   
```bash
--连接redis客户端
[localhost ~]#redis-cli -h localhost -p 6379
--连接成功后的状态
localhost:6379>auth bestlink
```
执行以上命令不能连接redis则启动redis:   
```bash
[localhost ~]#/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf
```
## 检查activeMQ是否正常
进入192.168.0.58服务器，运行命令：
```bash
[localhost ~]#ps -ef|grep activemq
```
以上命令能正常显示activemq进程，表示activemq已启动，进入浏览器输入地址访问：   
<code>http://192.168.0.58:8161</code>  
能正常显示首页地址表示activemq正常，不正常则启动：   
```bash
[localhost ~]#cd /usr/local/activemq/apache-activemq-5.15.3/bin/linux-x86-64/
[localhost ~]#./activemq start

```

## 进入OA服务器检查docker是否正常
进入192.168.0.55和192.168.0.56服务器，执行命令
```bash
--检查docker是否正常
[localhost ~]#docker ps
--以上命令如果提示docker命令不存在,则docker未启动,执行以下命令启动docker
[localhost ~]#service docker start
--启动docker中的5个tomcat容器
[localhost ~]#docker start tomcat6_8066
[localhost ~]#docker start tomcat6_8067
[localhost ~]#docker start tomcat6_8068
[localhost ~]#docker start tomcat6_8069
[localhost ~]#docker start tomcat6_8070
```

## 检查nginx是否正常
进入192.168.0.53服务器，执行命令：
```bash
[localhost ~]#ps -ef|grep nginx
```
以上命令能正常显示nginx进程，表示nginx已启动,否则执行命令启动nginx:
```bash
[localhost ~]sudo nginx -c /etc/nginx/nginx.conf
[localhost ~]nginx -s reload
```
## 检查keepalived是否正常
进入192.168.0.53服务器，执行命令：
```bash
[localhost ~]#ps -ef|grep keepalived
```
以上命令能正常显示keepalived进程，表示keepalived已启动,否则执行命令启动keepalived:
```bash
[localhost ~]#/etc/init.d/keepalived restart
```
## 访问OA检查是否正常
<code>http://192.168.0.231:8088</code>