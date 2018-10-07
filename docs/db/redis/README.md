---
sidebarDepth: 0
title: redis
---

## docker下的redis
### ubuntu下安装docker
运行：<code>sudo apt install docker</code>
### 获取redis
运行：<code>sudo docker pull redis</code>   
查看已获取的redis镜像：<code>sudo docker images</code>
### 创建容器
创建data文件夹：  
<code>mkdir redis</code>   
<code>cd redis</code>     
<code>mkdir data</code>   
运行：   
<code>sudo docker run -p 6379:6379 -v $PWD/data:/data --name redis -d redis redis-server --appendonly yes</code>   
命令说明：   
-p 6379:6379 : 将容器的6379端口映射到主机的6379端口   
-v $PWD/data:/data : 将主机中当前目录下的data挂载到容器的/data   
redis-server --appendonly yes : 在容器执行redis-server启动命令，并打开redis持久化配置   
连接、查看容器：   <code>docker exec -it 43f7a65ec7f8 redis-cli</code>   


