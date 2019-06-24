---
sidebarDepth: 0
title: Hibernate
---



## @Cache 的 CacheConcurrencyStrategy 的五种缓存方式
缓存的注解写法如下，加在 Entity 的 java 类上：    
<code>@Cache(region = "OACache", usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE )</code>

* CacheConcurrencyStrategy.NONE:   
  简介说明：不适用，默认
* CacheConcurrencyStrategy.READ_ONLY:   
  简介说明：只读模式，在此模式下，如果对数据进行更新操作，会有异常；   
  使用情景：对于不发生改变的数据使用
* CacheConcurrencyStrategy.READ_WRITE:   
  简介说明：读写模式在更新缓存的时候会把缓存里面的数据换成一个锁，其它事务如果去取相应的缓存数据，发现被锁了，直接就去数据库查询；   
  使用情景：基于时间戳判定机制，对于数据同步要求严格的情况，使用频繁；
* CacheConcurrencyStrategy.NONSTRICT_READ_WRITE:   
  简介说明：不严格的读写模式则不会的缓存数据加锁；   
  使用情景：更新不频繁几个小时或更长
* CacheConcurrencyStrategy.TRANSACTIONAL:   
  简介说明：事务模式指缓存支持事务，当事务回滚时，缓存也能回滚，只支持 JTA 环境。
  
## Restrictions类的常用方法（设置查询条件）：
| 返回值类型      | 方法名称	     | 描述  | 
| ------------- |:-------------| :----- |
| SimpleExpression      | Restrictions.eq	 | 等于（equal） |
| Criterion      | Restrictions.allEq	 | 使用Map,Key/Valu进行多个等于的比对 |
| SimpleExpression |	Restrictions.gt |	大于（great than） |
| SimpleExpression |	Restrictions.ge |	大于等于（great than or equal） |
| SimpleExpression |	Restrictions.lt |	小于（less than） |
| SimpleExpression |	Restrictions.le |	小于等于（less than or equal） |
| Criterion |	Restrictions.between |	对应SQL的between |
| SimpleExpression |	Restrictions.like |	对应SQL的like |
| Criterion |	Restrictions.in |	对应SQL的in |
| LogicalExpression |	Restrictions.and |	and关系 |
| LogicalExpression |	Restrictions.or |	or关系 |
| Criterion |	Restrictions.isNull |	为空 |
| Criterion |	Restrictions.sqlRestriction |	SQL限定查询 |

## Order类的常用方法（设置排序方式）：
| 返回值类型      | 方法名称	     | 描述  | 
| ------------- |:-------------| :----- |
| Order    | Order.asc	 | 升序 |
| Order    | Order.desc	 | 降序 |


## Projections类的常用方法（统计和分组）：
| 返回值类型      | 方法名称	     | 描述  | 
| ------------- |:-------------| :----- |
| AggregateProjection    | Projections.avg	 | 求平均值 |
| CountProjection |	Projections.count |	统计某属性的数量 |
| CountProjection |	Projections.countDistinct |	统计某属性不同值的数量 |
| PropertyProjection |	Projections.groupProperty |	指定某个属性为分组属性 |
| AggregateProjection |	Projections.max |	求最大值 |
| AggregateProjection |	Projections.min	| 求最小值 |
| ProjectionList |	Projections.projectionList | 创建一个ProjectionList对象 |
| Projection |	Projections.rowCount |	查询结果集中的记录条数 |
| AggregateProjection |	Projections.sum	 | 求某属性的合计 |
  
  
## QBC的查询示例和基本理解
```java
//查询匹配的账户adminList
Criteria c = session.createCriteria(Admin.class);
c.add(Restrictions.eq("aname",name));//eq是等于，gt是大于，lt是小于,or是或
c.add(Restrictions.eq("apassword", password));
List<Admin> list=c.list();
```
```java
//分页查询前10条
Criteria criteria = session.createCriteria(Customer.class);
criteria.addOrder( Order.asc("name") ); //排序方式
criteria.setFirstResult(0);
criteria.setMaxResults(10);
List result = criteria.list（）
```
```java
//复合查询
//复合查询就是在原有的查询基础上在进行查询，比如有Clazz班级，包含对象属性Student，那么我们希望查询 “包含学生姓名为Bob” 的班级，那么就可以使用复合查询
Criteria criteria = session.createCriteria(Clazz.class);
Criteria criteriaInner = criteria.createCriteria(Student.class);
criteriaInner.add(Restrictions.eq("name", "Bob"));
List clazzList =  criteria.list();

//如果是DetachedCriteria，则是根据关联属性的名称，而非Class，如：
Member member = MemberHelper.getCurrentLoginMember();
DetachedCriteria criteria = DetachedCriteria.forClass(Picture.class);
DetachedCriteria collectCriteria = criteria.createCriteria("collectRecordList");
collectCriteria.add(Restrictions.eq("member", member));
List<Picture> pictureList = Picture.listByCriteria(collectCriteria, page, Order.desc("updateDate"));
```

## DetachedCriteria的基本使用
Criteria和DetachedCriteria的主要区别在于创建的形式不一样，Criteria是在线的，所以它是由Hibernate Session进行创建的；而DetachedCriteria是离线的，创建时无需Session，它通过2个静态方法forClass(Class) 或 forEntityName(Name) 进行DetachedCriteria 的实例创建。
```java
//查询id为1且在今天或今天之前出生的user的名单
//1、创建DetachedCriteria并设置条件
DetachedCriteria dc = DetachedCriteria.forClass(User.class);
int id = 1;
dc.add(Restrictions.eq("id", id));
Date age = new Date();
dc.add(Restrictions.le("birthday", age));
//2、执行查询（Criteria   getExecutableCriteria(Session session)）
Session session = HibernateUtil.getSession();
Criteria c = dc.getExecutableCriteria(session);
List users = c.list();
```