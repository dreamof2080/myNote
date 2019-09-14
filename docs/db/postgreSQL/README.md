---
sidebarDepth: 2
title: postgreSQL
---


## ubuntu(18.04)安装postgres
```bash
#新增文件
vim /etc/apt/sources.list.d/pgdg.list
#增加一行内容
deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main 
#执行下面的更新
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
#安装
sudo apt-get install postgresql-11
```
安装完成后，系统会创建一个数据库超级用户postgres,密码为空：
> sudo -i -u postgres

这时使用以下命令进入postgres,输出以下信息，说明安装成功：
```markdown
psql
psql(11.5)
Type "help" from help.

postgres=#

```

## docker安装postgreSQL
```markdown
1. docker pull postgres
2. docker run --name postgres1 -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```
-e POSTGRES_PASSWORD=password，设置环境变量，指定数据库的登录口令为password； 

默认的用户名为：postgres

输入以下命令退出 postgres提示符：
\q

## 手动启动服务
```bash
sudo /etc/init.d/postgresql start
sudo /etc/init.d/postgresql stop
sudo /etc/init.d/postgresql restart

```

## 修改数据库默认用户postgres的密码(注意不是linux系统账号postgres的密码)
```bash
#登陆
sudo -u postgres psql
#修改密码
alter user postgres with password 'postgres'

```

## 修改linux系统的postgres用户的密码
```bash
# 删除postgreSQL用户密码
sudo password -d postgre
# 设置postgreSQL用户密码
sudo -u postgres passwd
#输入新的nunix密码：
#重新输入新的unit密码：
#passwd:已成功更新密码

```

## 登陆
```bash
sudo -u postgres psql
```

## 数据类型

### 数值类型
数值类型由2字节、4字节或8字节的整数以及4字节或8字节的浮点数和可选精度的十进制数组成。

| 名字      | 存储长度     | 描述  | 范围 | 
| ------------- |:-------------| :----- | :-----|
|smallint  | 2字节|  小范围整数  |-32768 到 +32767  |
|integer | 4字节| 常用的整数 | -2147483648 到 +2147483647 |
|bigint | 8字节 | 大范围整数 | -9223372036854775808 到 +9223372036854775807|
|decimal | 可变长| 用户指定的精度，精确| 小数点前 131072 位；小数点后 16383 位 |
|numeric | 可变长|用户制定的精度，精确 |小数点前 131072 位；小数点后 16383 位|
|real | 4字节 | 可变精度，不精确 |  	6 位十进制数字精度|
|double precision | 8字节 | 可变精度，不精确 | 15 位十进制数字精度 |
|smallserial | 2字节|自增的小范围整数 | 1 到 32767 |
|serial |4字节|自增整数|1 到 2147483647|
|bigserail | 8字节| 自增的大范围整数| 1 到 9223372036854775807|

### 货币类型
money类型存储带有固定小鼠精度的货币金额.   
numeric、int和bigint类型的值可以转换为money，不建议使用浮点数来处理货币类型，因为存在舍入错误的可能性。

| 名字      | 存储长度     | 描述  | 范围 | 
| ------------- |:-------------| :----- | :-----|
|money  | 8字节|  货币金额  | -92233720368547758.08 到 +92233720368547758.07  |

### 字符类型
下表列出了postrgres所支持的字符类型：

| 名字      | 存储长度     | 描述  | 范围 | 
| ------------- |:-------------| :----- | :-----|
| character varying(n),varchar(2) | 变成，有长度限制 | 
| character(n),char(n) | 定长，不足补空白 |
| text | 变长，无长度限制 |

### 日期/时间类型

| 名字      | 存储长度     | 描述  | 最低值  | 最高值 | 分辨率 |
| ------------- |:-------------| :----- | :-----|:-----|:-----|
| timestamp \[ (p) \] \[ without time zone \] | 8字节 | 日期和时间(无时区) | 4713BC |  294276 AD | 1 毫秒 / 14 位 |
| timestamp \[ (p) \] \[ without zone \] | 8字节 | 日期和时间(有时区) | 4713BC |  294276 AD | 1 毫秒 / 14 位 |
| date | 4字节| 只用于日期 | 4713 BC | 5874897 AD | 1天 |
| time \[ (p) \] \[ without time zone \] | 8字节 | 只用于一日内时间 | 00:00:00 | 24:00:00 | 1 毫秒 / 14 位 |
| time \[ (p) \] \[ without zone \] | 12字节 | 只用于一日内时间，有时区 | 00:00:00+1459 | 24:00:00-1459 | 1 毫秒 / 14 位 |
| interval \[ fields ] \[ (p) \] | 12字节 | 时间间隔 | -178000000 年 | 178000000 年 | 1 毫秒 / 14 位 |

### 布尔类型
boolean有 true 和 false 两个状态，第三种 unknown 状态，用NULL表示。

| 名字      | 存储长度     | 描述  |
| ------------- |:-------------| :----- |
| boolean | 1字节 | true / false |

### 枚举类型
枚举类型是一个包含静态和值的有序集合的数据类型。
postgres中的枚举类型类似于C语言中的enum类型。
与其他类型不同的是枚举类型需要使用create type命令创建
```sql
create type mood as enum ('sad', 'ok', 'happy');
```
创建一周中的几天，如下所示：
```sql
create type week as enum ('Mon', 'Tue', 'Web', 'Thu', 'Sat', 'Sun');
```
就像其他类型一样，一旦创建，枚举类型可以用于表和函数定义：
```sql
create type mood as enum('sad', 'ok', 'happy');
create table person (
    name text,
    current_mood mood
);
insert into person values ('Moe','happy');
select * from person where current_mod = 'happy';
```

###几何类型
几何数据类型表示二纬的平面物体。
下表列出了postgres支持的几何类型
最基本的类型：点。它是其他类型的基础。

| 名字      | 存储长度     | 描述  | 表现形式 |
| ------------- |:-------------| :----- | :----- |
| point | 16字节 | 平面中的点 | (x,y)|
| line | 32字节 | （无穷）直线 | 	((x1,y1),(x2,y2)) |
| lseg | 32字节 | （有限）线段 | 	((x1,y1),(x2,y2)) |
| box | 32字节 | 矩形 | ((x1,y1),(x2,y2)) | 
| path | 16+16n 字节 | 闭合路径(与多边形类似) | ((x1,y1),...) |
| polygon | 40+16n 字节 | 多边形(与闭合路径相似) | ((x1,y1),...)|
| circle | 24字节 | 圆 | <(x,y),r> (圆心和半径) |

### 网络地址类型
postgres 提供用于存储ipv4、ipv6、mac地址的数据类型。
用这些数据类型存储网络地址比用存文本类型好，因为这些类型提供输入错误检查和特殊的操作和功能。

| 名字      | 存储长度     | 描述  | 
| ------------- |:-------------| :----- |
| cidr | 7 或 19字节 | ipv4 或 ipv6网络 |
| inet | 7 或 19字节 | ipv4或ipv6主机和网络 |
| macaddr | 6字节 | mac地址 |

在对inet 或 cidr数据类型进行排序的时候，ipv4地址总是排在ipv6地址前面，包括那些封装或者是映射在ipv6地址里的ipv4地址，比如::10.2.3.4 或 ::ffff:10.4.3.2

### 位串类型
位串就是一串1和0的字符串。它们可以用于存储和直观化位掩码。我们有两种SQL位类型：bit(n)和bit varing(n),
这里的n是一个正整数。bit类型的数据必须准确匹配长度n,试图存储短些或者长一些的数据都是错误的。
bit varying类型数据是最长n的变长类型；更长的串会被拒绝。写一个没有长度的bit等效于bit(1)，没有长度的
bit varying意思是没有长度限制。

### 文本搜索类型
全文检索即通过自然语言文档的集合来找到那些匹配一个查询的检索。
postgres提供了两种数据类型用于支持全文检索：

| 名字      | 存储长度     | 描述  | 
| ------------- |:-------------| :----- |
| tsvector | | tsvector的值是一个无重复值的lexemes排序丽表，即一些同一个词的不同变种的标准化。|
| tsquery | | tsquery存储用于检索的词汇，并且使用布尔操作府&(AND), &#124; (OR) 和 !(NOT)来组合它们，括号用来强调操作符的分组。 |

### UUID类型
uuid数据类型用来存储RFC4122,ISO/IEF 9834-8:2005以及相关标准定义的通用唯一标识符(UUID)。(一些系统认为这个数据类型为全球唯一标识符，或GUID。)
这个标识符是一个由算法产生的128位标识符，使它不可能在已知使用相同算法的模块中和其他方式产生的标识符相同。因此，对分布式系统而言，这种标识符比序列能更好的提供唯一性保证，
因为序列只能在单一数据库中保证唯一。
UUID被写成一个小写十六进数字的序列，由分字符分成几组，特别是一组8位数字+3组4位数字+1组12位数字，总共32个数字代表128位，一个这种标准的UUID例子如下：
> a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11

### XML类型
xml数据类型可以用于存储xm数据。将xml数据存到text类型中的优势在于它能够为结构良好性检查输入值，并且还支持函数对其进行类型安全性检查。
要使用这个数据类型，编译时必须使用configure --with-libxml。
xml可以存储由xml标准定义的格式良好的文档，以及由xml标准中的XMLDecl?content定义的内容片段，大致上，这意味着内容片段可以有多个顶级元素或字符节点。
xmlvalue is document表达式可以用来判断一个特定的xml值是一个完整的文件还是内容片段。

#### 创建xml值
使用函数xmlparse来从字符数据产生xml类型的值：
```sql
XMLPARSE (DOCUMENT '<?xml version="1.0"><book><title>Manual</title><chapter>...</chapter></book>')
XMLPARSE (CONTENT 'abc<foo>bar</foo><bar>foo</bar>')
```

### JSON类型
json数据类型可以用来存储json数据，这样的数据也可以存储为text,但是json数据类型更有利于检查每个存储的数值是可用的json值。
此外还有相关的函数来处理json数据：

| 实例      | 实例结果     |
| ------------- |:-------------|
| array_to_json('{ {1,5}, {99,100} }'::int[]) | \[\[1,5\],\[99,100\]\] |
| row_to_json(row(1,'foo')) | \{"f1":1,"f2":"foo"\} |

### 数组类型
postgres允许将字段定义成变长的多维数组。
数组类型可以是任何基本类型或用户定义类型，枚举类型或复合类型。

#### 声明数组
创建表的时候，我们可以声明数组，方式如下：
```sql
create table sal_emp (
    name text,
    pay_by_quarter integer[],
    schedule text[][]
)
```
pay_by_quarter为一位整形数组、schedule为二维文本类型数组。
我们也可以使用ARRAY关键字，如下所示：
```sql
create table sal_emp {
    name text,
    pay_by_quarter integer ARRAY[4],
    schedule text[][]
}
```

#### 插入值
插入值使用花括号{}，元素在{}使用逗号隔开：
```sql
insert into sal_emp values ('Bill', '{1000,1000,1000,1000}','{{"meeting", "lunch"},{"training", "presentation"}}');
insert into sal_emp values ('Caral', '{20000, 25000, 25000, 25000}','{{"breakfast", "consulting"}, {"meeting", "lunch"}}');
```
#### 访问数组
现在我们可以在这个表上运行一些查询。
首先，我们演示如何访问数组的一个元素。这个查询检索在第二季度薪水变化的雇员名：
```sql
select name from sal_emp where pay_by_quarter[1] <> pay_by_quarter[2];
```
数组的下表数字哦是写在方括弧内的。

#### 修改数组
我们可以对数组的值进行修改：
```sql
update sal_emp set pay_by_quarter = '{25000,25000,27000,27000}' where name = 'Carol';
```
或者使用array构造器语法：
```sql
update sal_emp set pay_by_quarter = ARRAY[25000,25000,27000,27000] where name = 'Carol'
```
#### 数组中检索
要搜索一个数组中的数值，你必须检查该数组的每一个值。
比如
```sql
select * from sal_emp where pay_by_quarterp[1] = 1000 or
                                pay_by_quarter[2] = 10000 OR
                                pay_by_quarter[3] = 10000 OR
                                pay_by_quarter[4] = 10000;
```
另外，你可以用下面的语句找出数组中所有元素值都等于1000的行：
```sql
select * from sal_emp where 1000 = ALL(pay_by_quarter);
```
或者可以使用generate_subscripts函数。例如：
```sql
select * from 
    (select pay_by_quarter, generate_subscripts(pay_by_quearter, 1) as s from sal_emp)
    as foo where pay_by_quarter[s] = 1000;
```

### 复合类型
复合类型表示一行或者一条记录的结构；它实际上只是一个字段名和它们的数据类型的列表。postgres允许像简单数据类型那样使用复合类型。
比如，一个表的某个字段可以声明为一个复合类型。

#### 声明复合类型
下面是两个定义复合类型的简单例子：
```sql
create type complex as (
    r double precision,
    i double precision
);
create type inventory_item as (
    name text,
    supplier_id integer,
    price numeric
) ;
```
语法类似于create table,只是这里只可以声明字段名字和类型。
定义了类型，我们就可以用它创建表：
```sql
ceate table on_hand (
    item inventory_item,
    count integer
)
insert into on_hand values (ROW('fuzzy dics', 42, 1.99), 1000);
```
#### 复合类型值输入
要以文本常量书写复合类型值，在圆括弧里包围字段值并且用逗号分隔他们。你可以在任何字段值周围放上双引号，如果值本身包含逗号或者圆括弧，你必须用双引号括起。
复合类型常量的一般格式如下：
```markdown
'(val1, val2, ...)'
```

#### 访问复合类型
要访问复合类型字段的一个域，我们写出一个点以及域的名字，非常类似从一个表名字里选出一个字段。实际上，因为实在太像从表名字中选取字段，
所以我们经常需要用圆括弧来避免分析器混淆。比如，你可能需要从on_hand例子表中选取一些子域，像下面这样：
```sql
select item.name from on_hand where item.price > 9.99;
```
这样将不能工作，因为根据SQL语法，item是从一个表明子选取的，而不是一个字段名字。你必须像下面这样写：
```sql
select (item).name from on_hand where (item).price > 9.99;
```
或者如果你也需要使用表名字(比如，在一个多表查询里)，那么这么写：
```sql
select (on_hand.item).name from on_hand where (on_hand.item).price > 9.99
```
现在圆括弧对象正确地解析位一个指向item字段的引用，然后就可以从中选取子域。

### 范围类型
范围数据类型代表着某一元素类型在一定范围内的值。
例如，timestamp范围可能被用于代表一间会议室被预定的时间范围。
postgres内置的范围类型有：
* int4range - integer的范围
* int8range - bigint的范围
* numrange - numeric的范围
* tsrange - timestamp without time zone 的范围
* tstzrange - timestamp with time zone 的范围
* daterrange - date的范围
此外，你可以定义你自己的范围类型。
```sql
create table reservation (room int, during tsrange);
insert into reservation values (1108, '[2010-01-01 14:30, 2010-01-01 15:30)');

-- 包含
select int4range(10,20) @> 3;

-- 重叠
select numrange(11.1,22.2) && numrange(20.0, 30.0);

-- 提取上边界
select upper(int8range(15, 25));

-- 计算交叉
select int4range(10,20) * int4range(15, 25);

-- 范围是否为空
select isempty(numrange(1, 5));
```
范围值的输入必须遵循下面的格式：
```markdown
(下边界,上边界)
(下边界,上边界]
\[下边界,上边界)
\[下边界,上边界\]
空
```
圆括号或者方括号显示下边界和上边界是不包含的还是包含的。注意最后的格式是空，代表着一个空的范围（一个不含有值的范围）。
```sql
-- 包括3，不包括7，并且包括二者之间的所有点
select '[3, 7]'::int4range;

-- 不包括3和7，但是包括二者之间所有点
select '(3, 7]'::int4range;

-- 只包括但一值4
select '[4,4]'::int4range;

-- 不包括点（被标准化为空）
select '[4,4)'::int4range;
```

### 对象标识符类型
postgres在内部使用对象标识符(OID)作为各种系统表的主键。
同时，系统不会给用户创建的表增加一个OID系统字段（除非在建表时声明了with oids 或者配置参数default_with_oids设置为开启）。
oid类型代表一个对象标识符。除此以外oid还有几个别名：
regproc,regprocedure,regoper,regoperator,regclass,regtype,regconfig,和regdictionary。


| 名字      | 引用     | 描述 | 数值例子 |
| ------------- |:---------|:---------|:---------|
| oid | 任意 | 数字化的对象标识符 | 564182 |
| regproc | pg_proc | 函数名字 | sum |
| regprocedure | pg_proc | 带参数类型的函数 | sum(int4) |
| regoper | pg_operator | 操作符名 | + |
| regoperatro | pg_operator | 带参数类型的操作府 | *(integer,integer) 或 -(NONE,integer) |
| regclass | pg_class | 关系名 | pg_type |
| regtype | pg_type | 数据类型名 | integer |
| regconfig | pg_ts_config | 文本搜索配置 | english |
| regdictionary | pg_ts_dict | 文本搜索字典 | simple |

### 伪类型
postgres类型系统包含一系列特殊用途的条目，它们按照类别来说叫做伪类型。
伪类型不能作为字段的数据类型，但是它可以用于声明一个函数的参数或者结果类型。伪类型在一个函数不只是简单地接受并返回某种SQL数据类型的情况下很有用。
下表列出了所有的伪类型：

 | 名字      | 描述     | 
 | ------------- |:---------|
 | any | 表示一个函数接受任何输入数据类型 |
 | anyelement | 表示一个函数接受任何数据类型 |
 | anyarray | 表示一个函数接受任意数组数据类型 |
 | anynonarray | 表示一个函数接受任意非数组数据类型 |
 | anyenum | 表示一个函数接受任意枚举数据类型 |
 | anyrange | 表示一个函数接受任意范围数据类型 |
 | cstring | 表示一个函数接受或者返回一个空结尾的C字符串 |
 | internal | 表示一个函数接受或者返回一种服务器内部的数据类型 |
 | language_handler | 一个过程与反调用处理器声明为返回language_handler |
 | fdw_handler | 一个外部数据封装器声明为返回fdw_handler |
 | record | 标识一个函数返回一个未声明的行类型 |
 | trigger | 一个触发器函数声明为返回trigger |
 | void | 表示一个函数不返回数值 |
 | opaque | 一个已经过时的类型，以前用于所有上面这些用途 |
 
### 模式：schema
schema可以看着是一个表的集合。   
一个schema可以包含视图、索引、据类型、函数和操作符等。   
相同的对象名称可以被用于不同的模式中而不会出现冲突，例如schema1和myschema都可以包含名为mytable的表。
使用模式的优势：
. 允许多个用户使用一个数据库并且不会互相干扰。
. 将数据库对象组织成逻辑组以便更容易管理。
. 第三方应用的对象可以放在独立的模式中，这样它们就不会与其他对象的名称发生冲突。
模式类似操作系统曾的目录，但是模式不能嵌套。

#### 语法
```sql
create schema myschema;
create table myschema.company(
    id int not null,
    name varchar(20) not null,
    age int not null,
    address char(25),
    salary decimal(18,2),
    primary key (id)
);
select * from myschema.company;
```
此时创建的company表存在myschema中，查询的时候必须加myschema.company。   
删除schema
```sql
drop schema myschema cascade;
```
如果schema中已创建表，需要加cascade参数，不然无法删除

## 运算符
* 算术运算符
* 比较运算符
* 逻辑运算符
* 按位运算符

### 算术运算符
假设变量a为2，变量b为3，则：

 | 运算符      | 描述     | 实例 |
 | ------------- |:---------|:---------|
 | + | 加 | a + b = 5 |
 | - | 减 | a - b = -1 |
 | * | 乘 | a * b = 6 |
 | / | 除 | b / a = 1 |
 | % | 模(取余) |  b % a = 1 |
 | ^ | 指数 | a ^ b = 8 |
 | &#124;/ | 平方根 | &#124;/ 25.0 结果为 5 |
 | &#124;&#124;/ | 立方根 | &#124;&#124;/ 27.0 结果为 3 |
 | ! | 阶乘 | 5 ! 结果为 120 |
 | !! | 阶乘(前缀操作符) | !! 5 结果为 120 |

### 比较运算符
 | 运算符      | 描述     | 实例 |
 | ------------- |:---------|:---------|
 | =   | 等于     |	(a = b) 为 false。 |
 | !=  | 不等于   |	(a != b) 为 true。 |
 | <>  | 不等于   |	(a <> b) 为 true。 |
 | >   | 大于     |	(a > b)  为 false。 |
 | <   | 小于     |	(a < b) 为 true。 |
 | >=  | 大于等于  |	(a >= b) 为 false。 |
 | <=  | 小于等于  |	(a <= b) 为 true。 |
 
### 逻辑运算符
 | 运算符      | 描述     |
 | ------------- |:---------|
 | and |
 | not | not exists, not between, not in |
 | or  |
  
### 位运算符
位运算符作用于位，并逐位执行操作。 &、|、和^的真值表如下所示：
 | p      | q     | p & q | p &#124; q |
 | ------- |-----|-----|-----|
 | 0 | 0 | 0 | 0 |
 | 0 |	1 |	0 |	1 |
 | 1 |	1 |	1 |	1 |
 | 1 |	0 |	0 |	1 |
 
### like 子句
在like子句中，通常与通配符结合使用，通配符表示任意字符，在postgreSQL中，主要有以下两种通配符：
* 百分号 %
* 下划线 _
如果没有使用以上两种通配符，like子句和等号得到的结果是一样的。   
下面是like语句中演示了%或_的一些差别：

 | 运算符      | 描述     |
 | ------------- |:---------|
 | WHERE SALARY::text LIKE '200%' | 找出 SALARY 字段中以 200 开头的数据。
 | WHERE SALARY::text LIKE '%200%' | 找出 SALARY 字段中含有 200 字符的数据。
 | WHERE SALARY::text LIKE '_00%' | 找出 SALARY 字段中在第二和第三个位置上有 00 的数据。
 | WHERE SALARY::text LIKE '2 % %' | 找出 SALARY 字段中以 2 开头的字符长度大于 3 的数据。
 | WHERE SALARY::text LIKE '%2' | 找出 SALARY 字段中以 2 结尾的数据
 | WHERE SALARY::text LIKE '_2%3' | 找出 SALARY 字段中 2 在第二个位置上并且以 3 结尾的数据
 | WHERE SALARY::text LIKE '2___3' | 找出 SALARY 字段中以 2 开头，3 结尾并且是 5 位数的数据

在postgreSQL中，like子句是只能用于对字符进行比较，因此在上面例子中，我们要将整形数据类型转化为字符串数据类型。
```sql
SELECT * FROM COMPANY WHERE AGE::text LIKE '2%';
```

### limit子句
limit子句用于限制select语句中查询的数据的数量。
```sql
SELECT column1, column2, columnN
FROM table_name
LIMIT [no of rows];

SELECT column1, column2, columnN 
FROM table_name
LIMIT [no of rows] OFFSET [row num];
```
下面是一个实例，从第三位开始提取3个记录：
```sql
SELECT * FROM COMPANY LIMIT 3 OFFSET 2;
```

### with子句
在 PostgreSQL 中，WITH 子句提供了一种编写辅助语句的方法，以便在更大的查询中使用。

WITH 子句有助于将复杂的大型查询分解为更简单的表单，便于阅读。这些语句通常称为通用表表达式（Common Table Express， CTE），也可以当做一个为查询而存在的临时表。

WITH 子句是在多次执行子查询时特别有用，允许我们在查询中通过它的名称(可能是多次)引用它。

WITH 子句在使用前必须先定义。

with 查询的基础语法如下：
```sql
WITH
   name_for_summary_data AS (
      SELECT Statement)
   SELECT columns
   FROM name_for_summary_data
   WHERE conditions <=> (
      SELECT column
      FROM name_for_summary_data)
   [ORDER BY columns]
```
name_for_summary_data 是 WITH 子句的名称，name_for_summary_data 可以与现有的表名相同，并且具有优先级。

可以在 WITH 中使用数据 INSERT, UPDATE 或 DELETE 语句，允许您在同一个查询中执行多个不同的操作。

#### with递归
在 WITH 子句中可以使用自身输出的数据。

公用表表达式 (CTE) 具有一个重要的优点，那就是能够引用其自身，从而创建递归 CTE。递归 CTE 是一个重复执行初始 CTE 以返回数据子集直到获取完整结果集的公用表表达式。

下面将使用 WITH 子句在上表中查询数据：
```sql
With CTE AS
(Select
 ID
, NAME
, AGE
, ADDRESS
, SALARY
FROM COMPANY )
Select * From CTE;
```
下来让我们使用 RECURSIVE 关键字和 WITH 子句编写一个查询，查找 SALARY(工资) 字段小于 20000 的数据并计算它们的和：
```sql
WITH RECURSIVE t(n) AS (
   VALUES (0)
   UNION ALL
   SELECT SALARY FROM COMPANY WHERE SALARY < 20000
)
SELECT sum(n) FROM t;
```
下面我们建立一张和 COMPANY 表相似的 COMPANY1 表，使用 DELETE 语句和 WITH 子句删除 COMPANY 表中 SALARY(工资) 字段大于等于 30000 的数据，并将删除的数据插入 COMPANY1 表，实现将 COMPANY 表数据转移到 COMPANY1 表中：
```sql
CREATE TABLE COMPANY1(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);


WITH moved_rows AS (
   DELETE FROM COMPANY
   WHERE
      SALARY >= 30000
   RETURNING *
)
INSERT INTO COMPANY1 (SELECT * FROM moved_rows
```
### having子句
having子句可以让我们筛选分组后的各组数据。   
where子句在所选列上设置条件，而having子句则在由group by 子句创建的分组上设置条件。

语法：
```sql
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
```
下面实例将找出根据 NAME 字段值进行分组，并且 name(名称) 字段的计数少于 2 数据：
```sql
SELECT NAME FROM COMPANY GROUP BY name HAVING count(name) < 2;
```

### distinct
去重
```sql
SELECT DISTINCT name FROM COMPANY;
```

