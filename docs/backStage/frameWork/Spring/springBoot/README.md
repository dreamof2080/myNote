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
