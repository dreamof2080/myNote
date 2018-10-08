---
title: OA系统配置
---


## OA数据源配置
配置文件：<code>/WEB-INF/classes/eweaver.properties</code>   
具体配置：
```markdown
db.url=jdbc:oracle:thin:@192.168.0.101:1521:racdb1
db.username=test
db.password=test
```
::: tip 说明
db.url: 数据库的地址
db.username: 数据库的用户名  
db.password: 数据库的密码
:::

## 其他数据源配置
配置文件：<code>/WEB-INF/classes/config/application-base.xml</code>  
具体配置：  
```markdown
<bean id="sqlserver_test" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="com.microsoft.sqlserver.jdbc.SQLServerDriver" />
    <property name="url" value="jdbc:sqlserver://192.168.0.200:1433;DatabaseName=test" />
    <property name="username" value="sa" />
    <property name="password" value="123456" />
</bean>
```
::: tip 说明
id: 不能重复  
class: 固定写法，无需修改  
driverClassName: 数据库驱动，不同的数据库对应的驱动程序不一样:  
  * oracle: <code>oracle.jdbc.driver.OracleDriver</code>
  * sqlServer: <code>com.microsoft.sqlserver.jdbc.SQLServerDriver</code>
  * mySQL: <code>com.mysql.jdbc.Driver</code>
:::

## session共享配置
OA使用的集群环境，多个tomcat共享同一个session,session信息保存在redis中。  
在<code>/bestlink/oa/tomcatconf/context.xml</code>中增加配置:
```markdown
<Valve className="com.radiadesign.catalina.session.RedisSessionHandlerValve"/>
<Manager className="com.radiadesign.catalina.session.RedisSessionManager" 
    host="192.168.0.101"             //redis服务器地址
    port="6379"                      //访问端口
    database="0"                     //数据库
    password="abc123"                //密码
    maxInactiveInterval="1800" />    //超时时间，单位秒
```

## OA集群地址配置
在模块管理-->基础设置-->select字段维护中查找:web集群站点,此选择项记录了WEB集群地址

## jedis配置
redis除了保存session信息，也会保存程序中的临时变量或其他数据。程序中采用了jedis操作redis，需要进行相关配置。  
在<code>/WEB-INF/classes/redis.properties</code>中配置：  
```markdown
redis.host=192.168.0.101    //redis服务器地址
redis.port=6379             //端口
redis.password=abc123       //密码
redis.timeout=3000          //链接连接池的超时时间,使用连接时，检测连接是否成功
redis.database=1            //数据库
redis.pool.maxActive=200    //最大激活连接数（能用的最多的连接有多少）
redis.pool.maxIdle=10       //连接池最大空闲连接数（最多保持空闲连接有多少）
```

## activeMQ配置
抛EAS接口和历史数据权限重构使用了消息队列   
在<code>/WEB-INF/classes/activemq.properties</code>中配置：  
```markdown
activemq.url = tcp://192.168.0.102:61616?jms.prefetchPolicy.queuePrefetch=1 //activemq地址
activemq.maxConnections = 20                                                //最大连接数
activemq.username = test                                                    //用户名
activemq.password = test                                                    //密码
```

## EAS配置
EAS金碟财务系统接口地址信息在<code>/WEB-INF/classes/bbsdi.properties</code>中配置

## 定时任务配置
在<code>/WEB-INF/classes/config/application-quratz.xml</code>中配置：  
```markdown
1、 创建bean
<bean id="workflowTodoItemHandle" class="org.springframework.scheduling.quartz.CronTriggerBean">
    <property name="jobDetail">
        <bean class="org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean">
            <property name="targetObject" ref="todoItemsErrorHandle">   //ref填写具体业务逻辑的bean
            </property>
            <property name="targetMethod">
                <value>doIt</value> //bean中执行的方法
            </property>
            <property name="concurrent">
                <value>false</value>
            </property>
        </bean>
    </property>
    <property name="cronExpression">
        <value>0 30 1 * * ? *</value>   //cron表达式
    </property>
</bean>
2、 在list中增加:  
<list>
    <ref bean="workflowTodoItemHandle" />
</list>
```