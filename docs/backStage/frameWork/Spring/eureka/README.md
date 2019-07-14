---
sidebarDepth: 0
title: Spring
---


## eureka配置高可用
添加3个yml文件：
* application.yml:
```markdown
server:
  port: 8761
#服务名
spring:
  application:
    name: eureka-cluster
```
* application-server1.yml:
```markdown
#server (eureka 默认端口为8761)
server:
  port: 8700
#服务名
spring:
  application:
    name: eureka-server1
eureka:
  client:
    #服务地址
    service-url:
      #这里设置服务地址8701，注意peer1的端口是8700
      defaultZone: http://localhost:8701/eureka/

```
* application-server2.yml
```markdown
#server (eureka 默认端口为8761)
server:
  port: 8701
#服务名
spring:
  application:
    name: eureka-server2
eureka:
  client:
    #服务地址
    service-url:
      #这里设置服务地址8700，注意peer1的端口是8701
      defaultZone: http://localhost:8700/eureka/
```
打包启动server1:
```bash
java -jar euraka-0.0.1.jar --spring.profiles.active=server1
```
启动server2:
```bash
java -jar euraka-0.0.1.jar --spring.profiles.active=server2
```

## eureka api
| 协议      | url     | 说明  |   
| ------------- |:-------------| :----- |
|POST |   /eureka/apps/{appId}          |      注册新的实例
|DELETE | /eureka/apps/{appId}/{instanceId}     |     注销应用实例
|PUT  |   /eureka/apps/{appId}/{instanceId}     |      应用实例发送心跳
|GET  |   /eureka/apps          |                     查询所有的实例
|GET  |   /eureka/apps/{appId}                 |        查询指定appId的实例
|GET  |   /eureka/apps/{appId}/{instanceId}      |       查询指定appId和instanceId的实例
|GET  |   /eureka/instances/{instanceId}    |                  查询指定的instanceId的实例
|PUT  |   /eureka/apps/{appId}/{instanceId}/status?value=OUT_OF_SERVICE   |  暂停应用实例
|PUT  |   /eureka/apps/{appId}/{instanceId}/status?value=UP    |         恢复应用实例
|PUT  |   /eureka/apps/{appId}/{instanceId}/metadata?key=value    |        更新元数据信息
|GET  |   /eureka/vips/{vipAddress}               |                       根据vip地址查询
|GET  |   /eureka/svips/{svipAddress}             |                        根据svip地址查询
示例：
curl -X PUT "http://localhost:8761/eureka/apps/logService1/192.168.3.20:logService1:8090/status?value=UP"

### eureka client参数
client端：

| 参数    | 说明  |   
| ------------- |:-------------| 
|eureka.client.register-with-eureka: true       |              是否注册自己到Eureka Server上面|
|eureka.client.fetch-registry: true             |              是否从Eureka Server上面拉取服务信息
|eureka.client.enable: true                      |             是否启用Eureka客户端,不启用则不注册到Eureka Server
|eureka.client.healthcheck.enable: true          |             是否启用Eureka健康检查
|eureka.client.availability-zones: new HashMap<>() |           告诉client有哪些可用的region和zone
|eureka.client.filter-only-up-instances: true      |           是否过滤出InstanceStatus为UP的实例
|eureka.client.region: us-east-1            |                  指定该应用实例所在的region,AWS datacenters适用
|eureka.client.prefer-same-zone-eureka: true    |              是否优先使用与该应用相同Zone的Eureka Server
|eureka.client.cache-refresh-executor-thread-pool-size: 2   |  缓存刷新线程池CacheRefreshThread的初始化线程数
|eureka.client.registry-fetch-interval-seconds: 30      |      Eureka client拉取服务注册信息间隔时间(s)
|eureka.client.instance-info-replication-interval-seconds: 30 | 复制实例变化信息到Eureka服务器所需要的时间间隔（s）
|eureka.client.eureka-service-url-poll-interval-seconds:  300 | 轮询Eureka服务端地址更改的间隔时间(s)
|eureka.client.eureka-server-read-timeout-seconds: 8       |   读取Eureka Server信息的超时时间(s)
|eureka.client.eureka-server-connect-timeout-seconds: 5    |   连接Eureka Server的超时时间(s)
|eureka.client.eureka-server-total-connections: 200         |  从Eureka客户端到所有Eureka服务端的连接总数
|eureka.client.eureka-server-total-connections-per-host: 50  | 从Eureka客户端到每个Eureka服务端主机的连接总数
|eureka.client.eureka-connection-idle-timeout-seconds: 30   |  Eureka服务端连接的空闲关闭时间(s)
|eureka.instance.metadata-map: new HashMap<>()              |  指定应用实例的元数据信息
|eureka.instance.prefer-ip-address: false                   |  是否优先使用ip地址来替代hostname作为实例hostname字段值 
|eureka.instance.lease-expiration-duration-in-seconds: 90   |  Eureka clent最后一次心跳后,Eureka Server剔除需要等待时间(s)
|eureka.instance.lease-renewal-interval-in-seconds: 30     |   客户端向Eureka Server发送心跳周期(s)
server端：

| 参数    | 说明  |   
| ------------- |:-------------|
|eureka.server.enable-self-preservation: true           |      Eureka Server是否开启自我保护模式
|eureka.server.renewal-percent-threshold: 0.85           |     指定每分钟需要收到的续约次数的阙值,如果阈值比最小值大,则自我保护模式开启
|eureka.server.eviction-interval-timer-in-ms: 60*1000   |      指定EvictionTask定时任务的调度频率,用于剔除过期的实例
|eureka.server.wait-time-in-ms-when-sync-empty: 1000*60*5  |   在Eureka服务器获取不到集群里对等服务器上的实例时，需要等待的时间


