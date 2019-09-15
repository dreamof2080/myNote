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

## 约束
* not null
* unique
* primary key
* foreign key
* check: 保证列中的值复合制定的条件
* exclusion: 排他约束，保证如果将任何两行的指定列或表达式使用指定操作府进行比较，至少其中一个操作府比较将会返回false或空值

### check约束
check约束保证列中的所有值满足某一条件，即对输入一条记录要进行检查。如果条件为false,
则记录违反了约束，且不能输入到表。

实例：
下面实例建一个新的表company5,增加了五列。在这里，我们为salary列添加check，所以工资不能为零：
```sql
CREATE TABLE COMPANY5(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL    CHECK(SALARY > 0)
);
```

### exclusion 约束
exclusion约束确保如果使用指定的运算符在指定列或表达式上比较任意两行，至少其中一个运算符比较返回false或null

实例：
```sql
CREATE TABLE COMPANY7(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT,
   AGE            INT  ,
   ADDRESS        CHAR(50),
   SALARY         REAL,
   EXCLUDE USING gist
   (NAME WITH =,  -- 如果满足 NAME 相同，AGE 不相同则不允许插入，否则允许插入
   AGE WITH <>)   -- 其比较的结果是如果整个表边式返回 true，则不允许插入，否则允许
);
```

### 删除约束
删除约束必须知道约束名称，已经知道名称来删除约束很简单，如果不知道名称，则需要找到系统生成的名称，使用\d表名可以找到这些信息
```sql
alter table table_name drop constraint some_name;
```

## join
五种连接类型：
* cross join: 交叉连接
* inner join: 内连接
* left outer join: 左外连接
* right outer join: 右外连接
* full outer join: 全外连接

### cross join
交叉连接把第一个表的每一行与第二个表的每一行进行匹配，如果两个输入表分别有x和y行，
则结果表有x*y行。
由于交叉连接有可能产生非常大的表，使用时必须谨慎，只在适当的时候使用它们。
```sql
select ... from table1 cross join table2 ...
```

### inner join
内连接根据连接谓词结合两个表的列值来创建一个新的结果表。
查询会把table1中的每一行与table2中的每一行进行比较，找到所有满足连接谓词的行的匹配对

当满足连接谓词时，A和B行的每个匹配对的列值会合并成一个结果行。
内连接是最常见的连接类型，是默认的连接类型。
inner关键字是可选的。
```sql
select table1.column1,table2.column2... 
from table1 inner join table2
on table1.common_field = table2.common_field;
```

### left outer join
外部连接是内部连接的扩展。SQL标准定义了三种类型的外部连接：left、right 和 full,
对于左外连接，首先执行一个内连接。然后，对于表T1中不满足表T2中连接条件的每一行，其中T2的列中有null值
也会添加一个连接行。因此，连接的表在T1中每一行至少有一行。
```sql
select ... from table1 left outer join table2 on conditional_expression ...
```
```markdown
runoobdb=# SELECT EMP_ID, NAME, DEPT FROM COMPANY LEFT OUTER JOIN DEPARTMENT ON COMPANY.ID = DEPARTMENT.EMP_ID;
 emp_id | name  |      dept
--------+-------+----------------
      1 | Paul  | IT Billing
      2 | Allen | Engineering
      7 | James | Finance
        | James | 
        | David | 
        | Paul  | 
        | Kim   | 
        | Mark  | 
        | Teddy | 
        | James | 
(10 rows)
```

### right outer join
右外连接，首先执行内部连接。然后，对于表T2中不满足表T1中连接条件的每一行，其中T1列中的值为空也会添加一个连接行。
这与左连接相反；对于T2中的每一行，结果表总是有一行。
```sql
select ... from table1 right outer join table2 on conditional_expression ...
```
```markdown
runoobdb=# SELECT EMP_ID, NAME, DEPT FROM COMPANY RIGHT OUTER JOIN DEPARTMENT ON COMPANY.ID = DEPARTMENT.EMP_ID;
 emp_id | name  |    dept
--------+-------+-----------------
      1 | Paul  | IT Billing
      2 | Allen | Engineering
      7 | James | Finance
(3 rows)
```

### full outer join
全外连接，首先执行内部连接。然后，对于表T1中不满足表T2中任何行连接条件的每一行，如果T2的列中有null值也会添加一个到结果中。
此外，对于T2中不满足T1中的任何行连接条件的每一行，将会添加T1列中包含null值的到结果中。
```sql
select ... from table1 full outer join table2 on conditional_exprssion ...
```
```markdown
runoobdb=# SELECT EMP_ID, NAME, DEPT FROM COMPANY FULL OUTER JOIN DEPARTMENT ON COMPANY.ID = DEPARTMENT.EMP_ID;
 emp_id | name  |      dept
--------+-------+-----------------
      1 | Paul  | IT Billing
      2 | Allen | Engineering
      7 | James | Finance
        | James | 
        | David | 
        | Paul  | 
        | Kim   | 
        | Mark  | 
        | Teddy | 
        | James | 
(10 rows)
```

## union
union操作符合并两个或多个select语句的结果。

请注意，union内部的每个select语句必须拥有相同数量的列，列也必须拥有相似的数据类型。同时，每个select语句中的顺序必须相同。

union all子句：连接两个有重复行的select语句，默认地，union操作符选取不同的值。如果允许重复的值，请使用union all.

## NULL
null值代表遗漏的未知数据。
默认地，表的列可以存放null值。

null的判断： is null 和 is not null

## 别名
我们可以用SQL重命名一张表或者一个字段的名称，这个名称就叫该表或该字段的别名。

表的别名：
```sql
SELECT column1, column2....
FROM table_name AS alias_name
WHERE [condition];
```

列的别名：
```sql
SELECT column_name AS alias_name
FROM table_name
WHERE [condition];
```

## 触发器
postgreSQL触发器是数据库的回调函数，它会在指定的数据库事件发生时自动执行/调用。

下面时关于postgreSQL触发器几个比较重要的点：
* postgreSQL触发器可以在下面几种情况下触发：
    . 在执行操作之前(在检查约束并尝试插入、更新或删除之前)
    . 在执行操作之后（在检查约束并插入、更新或删除完成之后）
    . 更新操作（在对一个视图进行插入、更新、删除时）
* 触发器的for each row属性是可选的，如果选中，当操作修改时每行调用一次；相反，选中for each statement，不管修改了多少行，每个语句标记的触发器执行一次。
* when子句和触发器操作在引用new.column-name和old.column-name表单插入、删除或更新时可以访问每一行元素。其中
column-name是与触发器关联的表中的列的名称。
* 如果存在when子句，postgreSQL语句只会执行when子句成立的那一行，如果没有when子句，postgreSQL语句会在每一行执行。
* before或after关键字决定何时触发动作，决定是在关联行的插入、修改或删除之前或者之后执行触发器动作。
* 要修改的表必须存在于同一数据库中，作为触发器被附加的表或视图，且必须只使用tablename,而不是database.tablename
* 当创建约束触发器时会指定约束选项。这与常规触发器相同，只是可以使用这种约束来调整触发器触发的时间。当约束触发器实现的约束被违反时，它将抛出异常。 

语法：
```sql
create trigger trigger_name [before|after|instead of] event_name
on table_name
[
    -- 触发器逻辑...
]
```
在这里，event_name可以是在所提到的表table_name上的insert、delete和update数据库操作。您可以在表名后选择指定for each row.

以下是在update操作上在表的一个或多个指定列上创建触发器的语法：
```sql
create trigger trigger_name [before|after] update of column_name
on table_name
[
    -- 触发器逻辑...
]
```

### 列出触发器
你可以从pg_trigger表中把当前数据库所有触发器列举出来：
```sql
select * from pg_trigger;
```
如果你想列举出特定表的触发器，语法如下：
```sql
select tgname from pg_trigger,pg_class where tgrelid=pg_class.oid and relname='company'
```

### 删除触发器
```sql
drop trigger trigger_name on table_name;
```

## 索引
```sql
create index index_name on table_name;
```
### 组合索引：
基于表的多列上创建的索引
```sql
create index index_name on table_name(column1_name,column2_name)
```
不管是单列索引还是组合索引，该索引必须是在where子句的过滤条件中使用非常频繁的列。如果只有一列被使用到，就选择单索引，如果有多列就使用组合索引。

### 唯一索引
使用唯一索引不仅是为了性能，同时也为了数据的完整性。唯一索引不允许任何重复的值插入到表中。
```sql
create unique index index_name on table_name(column_name);
```

### 局部索引
局部索引是在表的子集上构建的索引；子集由一个条件表单式上定义。索引只包含满足条件的行。
```sql
create index index_name on table_name (conditional_expression);
```

### 隐式索引
隐式索引是在创建对象时，由数据库服务器自动创建的索引。索引自动创建为主键约束和唯一约束。

### 删除索引
```sql
drop index index_name;
```

### 什么情况下要避免使用索引
虽然索引的目的在于提高数据库的性能，但这里由几个情况需要避免使用索引。
* 索引不应该使用在较小的表上。
* 索引不应该使用在有频繁的大批量的更新或插入操作的表上。
* 索引不应该使用在含有大量的null值的列上。
* 索引不应该使用在频繁操作的列上。

## alter table
添加列
```sql
alter table table_name add column_name datatype;
```
删除列
```sql
alter table table_name drop column column_name;
```
修改列
```sql
alter table table_name alter column column_name type datatype;
```
给表中某列添加not null约束
```sql
alter table table_name modify column_name datatype not null;
```
给表中某列add unique constrain (添加unique约束)
```sql
alter table table_name add constraint myUniqueConstraint unique (column1, column2 ...);
```
给表中add check constraint (添加check约束)
```sql
alter table table_name add constraint myUniqueConstraint check (condition);
```
给表 add primary key (添加主键)
```sql
alter table table_name add constraint myPrimaryKey primary key (column1, column2 ...)
```
drop constraint （删除约束）
```sql
alter table table_name drop constraint myUniqueConstraint;
```
drop primary key (删除主键)
```sql
alter table table_name drop constraint myPrimaryKey;
```

## truncate table
truncate table用于删除表的数据，但不删除表结果，与delete具有相同的效果，但是由于它实际上并不扫描表，所以速度更快。
此外，truncate table可以立即释放表空间，而不需要后续vacuum操作，这在大型表上非常有用。
vacuum操作用于释放、再利用更新/删除行所占据的磁盘空间。

## view 视图
视图时一张假表，只不过是通过相关的名称存储在数据库中的一个postgreSQL语句。

视图实际上是一个以预定义的postgreSQL查询形式存在的表的组合。

视图可以包含一个表的所有行或从一个或多个表选定行。

视图可以从一个或多个表创建，这取决于要创建视图的postgresql查询。

视图是一种虚拟表，允许用户实现以下几点：
. 用户或用户组认为更自然或直观查找结构数据的方式。
. 限制数据访问，用户只能看到有限的数据，而不是完整的表。
. 汇总各种表中的数据，用于生成报告。

postgresql视图是只读的，因此可能无法在视图上执行delete、insert或update语句。但是可以在视图上创建一个触发器，
当尝试delete、insert或update视图时触发，需要左的动作在触发器内中定义。

### 创建视图
```sql
create [temp | temporary] view view_name as
select column1,column2...
from table_name
where [condition];
```
您可以在select语句中包含多个表，这与在正常的SQL SELECT查询中的方式非常相似，如果使用了可选的temp或temporary关键字，则将在
临时数据库中创建视图。

### 删除视图
```sql
drop view view_name;
```

## transaction 事物
transaction是数据库管理系统执行过程中的一个逻辑单位，由一个有限的数据库操作序列构成。
数据库事务通常包含了一个序列的对数据库的读/写操作。包含以下两个目的：
. 为数据库操作序列提供了一个从失败中恢复到正常状体的方法，同时提供了数据库即使在异常状态下仍能保持一致性的方法。
. 当多个应用程序在并发访问数据库时，可以在这些应用程序之间提供一个隔离方法，以防止彼此的操作互相干扰。
当事务被提交给了数据库管理系统(DBMS)，则DBMS需要确保该事务中的所有操作都成功完成且结果被永久保存在数据库中，
如果事务中有的操作没有成功完成，则事务中的所有操作都需要回滚，回到事务执行前的状态；同时，该事务对数据库或者其他事务的执行无影响，所有的事务都好像在独立的运行。

### 事务的属性
事务具有以下四个标准属性，通常根据首字母缩写为ACID：
. 原子性(Atomicity): 事务作为一个整体被执行，包含在其中的对数据库的操作要么全部执行，要么都不执行。
. 一致性(Consistency): 事务应确保数据库的状态从一个一致状态转变为另一个一致状态。一致状态的含义时数据库中的数据应满足完整性约束。
. 隔离性(Isolation): 多个事务并发执行时，一个事务的执行不应影响其他事务的执行。
. 持久性(Durability): 已被提交的事务对数据库的修改应该永久保存在数据库中。

### 事务控制
begin transaction: 开始一个事务
. commit: 事务确认，或者可以使用end transaction命令
. rollback: 事务回滚
事务控制命令只与insert、update和delete一起使用。他们不能在创建表或删除表时使用，因为这些操作在数据库中是自动提交的。

### begin transaction
事务可以使用begin transaction命令或简单的begin命令来启动。此类事务通常会持续执行下去，
直到遇到下一个commit或rollback命令。不过在数据库关闭或发生错误时，事务处理也会回滚。
```sql
begin;
或者
begin transaction;
```

### commit
commit命令是用于把事务调用的更改保存到数据库中的事务命令，即确认事务。
```sql
commit;
或者
end transaction;
```

### rollback
rollback命令是用于撤销尚未保存到数据库的事务命令，即回滚事务。
```sql
rollback;
```

## lock 锁
锁主要是为了保持数据库操作的一致性，可以阻止用户修改一行或整个表，一般用在并发较高的数据库中。
在多个用户访问数据库的时候若对并发操作不加控制就可能会读取和存储不正确的数据，破坏数据库的一致性。

数据库中有两种基本的锁：排它锁(Exclusive Locks)和共享锁(Share Locks)。

如果数据对象加上排它锁，则其他的事务不唔唔对它读取和修改。
如果加上共享锁，则该数据库对象可以被其他事务读取，但不能修改。

语法：
```sql
lock [table]
name
in
lock_mode
```
. name:要锁定的现有表的名称(可选模式限定)。如果只在表名之前指定，则只锁定该表。如果未指定，
则锁定该表及其所有子表（如果有）。
. lock_mode:锁定模式指定该锁与哪个锁冲突。如果没有指定锁定模式，则使用限制最大的访问独占模式。
可能的值是：access share,row share,row exclusive,share update exclusive, share, 
share row exclusive, exclusive, access exclusive

一旦获得了锁，锁将在当前事务的其余时间保持。没有解锁表命令；锁总是在事务结束时释放。

### 死锁
当两个事务彼此等待对方完成其操作时，可能会发生死锁。尽管postgreSQL可以检测它们并以回滚结束它们，但死锁仍然很不方便。
为了防止应用程序遇到这个问题，请确保将应用程序设计为以相同的顺序锁定对象。

### 咨询锁
postgresql提供了创建具有应用程序定义含义的锁的方法。这些被称为咨询锁。由于系统不强制使用它们，所以正确使用它们取决于应用程序。
咨询锁对于不适用MVCC模型的锁定策略非常有用。

例如，咨询锁的一个常见用途是模拟所谓“平面文件”数据管理系统中典型的悲观锁定策略。虽然存储在表中的标志可以用于相同的目的，但是通知锁更快，
避免了表膨胀，并且在会话结束时由服务器自动清理。

下面的示例将数据库中的company表锁定为access exclusive模式。
lock语句只在事务模式下工作。
```sql
begin;
lock table company1 in access exclusive mode;
```
表被锁定，直到事务结束，并且要完成事务，您必须回滚或提交事务

## 子查询
子查询或称为内部查询、嵌套查询，指的是在postgresql查询中的where子句中嵌入查询语句。

子查询需遵循的几个规则：
. 子查询必须用括号括起来。
. 子查询在select子句中只能有一个列，除非在主查询中有多列，与子查询的所选列进行比较。
. order by 不能用在子查询中，虽然主查询可以使用order by。可以在子查询中使用group by,功能与order by 相同。
. 子查询返回多于一行，只能与多值预算符一起使用，如in运算符。
. between运算符不能与子查询一起使用，但是，between可在子查询内使用。

### insert语句中的子查询使用
子查询也可以与insert语句一起使用。insert语句使用子查询返回的数据插入到另一个表中。
在子查询中所选择的数据可以用任意字符、日期或数字函数修改。
```sql
INSERT INTO table_name [ (column1 [, column2 ]) ]
   SELECT [ *|column1 [, column2 ] ]
   FROM table1 [, table2 ]
   [ WHERE VALUE OPERATOR ]
```
```sql
INSERT INTO COMPANY_BKP SELECT * FROM COMPANY  WHERE ID IN (SELECT ID FROM COMPANY) ;
```

## auto increment 自动増长
auto increment会在新记录插入表中时生成一个唯一的数字。

postgreSQL使用序列来标识字段的自増长，数据类型有smallserial、serail和bigserail。
这些类型类似于mysql数据库支持的auto_increment属性。

mysql使用auto_increment这个属性来标识字段的自增。
```sql
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
postgreSQL使用序列来标识字段的自增长：
```sql
CREATE TABLE runoob
(
    id serial NOT NULL,
    alttext text,
    imgurl text
)
```

### smallserial、serial和bigserail范围：

 | 伪类型      | 存储大小     | 范围 |
 | ------------- |---------|---------|
 | smallserail | 2字节 | 1到32,767|
 | serial | 4字节 | 1 到 2,147,483,647 |
 | bigserial | 8字节 | 1 到 922,337,2036,854,775,807 |
 
语法：
```sql
CREATE TABLE COMPANY(
   ID  SERIAL PRIMARY KEY,
   NAME           TEXT      NOT NULL,
   AGE            INT       NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```

## privileges 权限
无论何时创建数据库对象，都会为其分配一个所有者，所有者通常是执行create语句的人。
对于大多数类型的对象，初始状态是只有所有者(或超级用户)才能修改或删除对象。
要允许其他角色或用户使用它，必须为该用户设置权限。
在postgreSQL中，权限分为以下几种：
. select
. insert
. update
. delete
. truncate
. references
. trigger
. create
. connect
. temporary
. execute
. usage
根据对象的类型（表、函数等），将指定权限应用于该对象。

要向用户分配权限，可以使用grant命令
```sql
grant privilege [,...]
on object [,...]
to {PUBLIC | GROUP group | username }
```
. privilege: 值可以为：select,insert,update,delete,rule,all
. object: 要授予访问权限的对象名称。可能的对象有：table,view,sequence
. public： 表示所有用户
. GROUP group: 为用户组授予权限
. username: 要授予权限的用户名。public 是代表所有用户的简短形式。

我们可以使用revoke命令取消权限
```sql
revoke privilege [,...]
on object [,...]
from { PUBLIC | GROUP group | username }
```

示例：
```sql
-- 创建一个用户
create user runoob with password '123456';
-- 给runoob分配权限
grant all on company to runoob;
-- 撤销权限
revoke all on company from runoob;
-- 删除用户
drop user runoob;
```

## 时间/日期函数和操作符

### 日期/时间操作符
下表演示了基本算术操作符的行为(+,*,等)：

 | 操作符      | 例子     | 结果 |
 | ------------- |---------|---------|
 | + |	date '2001-09-28' + integer '7' | 	date '2001-10-05'
 | + |	date '2001-09-28' + interval '1 hour' | 	timestamp '2001-09-28 01:00:00'
 | + |	date '2001-09-28' + time '03:00' | 	timestamp '2001-09-28 03:00:00'
 | + |	interval '1 day' + interval '1 hour' | 	interval '1 day 01:00:00'
 | + |	timestamp '2001-09-28 01:00' + interval '23 hours' | 	timestamp '2001-09-29 00:00:00'
 | + |	time '01:00' + interval '3 hours' | 	time '04:00:00'
 | - |	- interval '23 hours' | 	interval '-23:00:00'
 | - |	date '2001-10-01' - date '2001-09-28' | 	integer '3' (days)
 | - |	date '2001-10-01' - integer '7' | 	date '2001-09-24'
 | - |	date '2001-09-28' - interval '1 hour' | 	timestamp '2001-09-27 23:00:00'
 | - |	time '05:00' - time '03:00' | 	interval '02:00:00'
 | - |	time '05:00' - interval '2 hours' | 	time '03:00:00'
 | - |	timestamp '2001-09-28 23:00' - interval '23 hours' | 	timestamp '2001-09-28 00:00:00'
 | - |	interval '1 day' - interval '1 hour' | 	interval '1 day -01:00:00'
 | - |	timestamp '2001-09-29 03:00' - timestamp '2001-09-27 12:00' | 	interval '1 day 15:00:00'
 | * |	900 * interval '1 second' | 	interval '00:15:00'
 | * |	21 * interval '1 day' | 	interval '21 days'
 | * |	double precision '3.5' * interval '1 hour' | 	interval '03:30:00'
 | / |	interval '1 hour' / double precision '1.5' | 	interval '00:40:00'
 
### 日期/时间函数

 | 函数      | 返回类型 | 描述    | 例子 | 结果 |
 | ------------- |---------|---------|---------|---------|
 | age(timestamp, timestamp) |	interval |	减去参数后的"符号化"结果，使用年和月，不只是使用天 |	age(timestamp '2001-04-10', timestamp '1957-06-13') |	43 years 9 mons 27 days |
 | age(timestamp) |	interval |	从current_date减去参数后的结果（在午夜） |	age(timestamp '1957-06-13') |	43 years 8 mons 3 days
 | clock_timestamp() |	timestamp with time zone |	实时时钟的当前时间戳（在语句执行时变化）	 	 
 | current_date |	date |	当前的日期；	 | 	 
 | current_time |	time with time zone |	当日时间；	  |	 
 | current_timestamp |	timestamp with time zone |	当前事务开始时的时间戳； |	 	 
 | date_part(text, timestamp) |	double precision |	获取子域(等效于extract)； |	date_part('hour', timestamp '2001-02-16 20:38:40') |	20
 | date_part(text, interval) |	double precision |	获取子域(等效于extract)； |	date_part('month', interval '2 years 3 months') |	3
 | date_trunc(text, timestamp) |	timestamp |	截断成指定的精度； |	date_trunc('hour', timestamp '2001-02-16 20:38:40') |	2001-02-16 20:00:00
 | date_trunc(text, interval) |	interval |	截取指定的精度， |	date_trunc('hour', interval '2 days 3 hours 40 minutes') |	2 days 03:00:00
 | extract(field from timestamp) |	double precision |	获取子域； |	extract(hour from timestamp '2001-02-16 20:38:40') |	20
 | extract(field from interval) |	double precision |	获取子域； |	extract(month from interval '2 years 3 months') |	3
 | isfinite(date) |	boolean |	测试是否为有穷日期(不是 +/-无穷) |	isfinite(date '2001-02-16') |	true
 | isfinite(timestamp) |	boolean |	测试是否为有穷时间戳(不是 +/-无穷) |	isfinite(timestamp '2001-02-16 21:28:30') |	true
 | isfinite(interval) |	boolean |	测试是否为有穷时间间隔 |	isfinite(interval '4 hours') |	true
 | justify_days(interval) |	interval |	按照每月 30 天调整时间间隔 |	justify_days(interval '35 days') |	1 mon 5 days
 | justify_hours(interval) |	interval |	按照每天 24 小时调整时间间隔 |	justify_hours(interval '27 hours') |	1 day 03:00:00
 | justify_interval(interval) |	interval |	使用justify_days和justify_hours调整时间间隔的同时进行正负号调整 |	justify_interval(interval '1 mon -1 hour') |	29 days 23:00:00
 | localtime |	time |	当日时间； |	 	 
 | localtimestamp |	timestamp |	当前事务开始时的时间戳； |	 	 
 | make_date(year int, month int, day int) |	date |	为年、月和日字段创建日期 |	make_date(2013, 7, 15) |	2013-07-15
 | make_interval(years int DEFAULT 0, months int DEFAULT 0, weeks int DEFAULT 0, days int DEFAULT 0, hours int DEFAULT 0, mins int DEFAULT 0, secs double precision DEFAULT 0.0) |	interval |	从年、月、周、天、小时、分钟和秒字段中创建间隔 |	make_interval(days := 10) |	10 days
 | make_time(hour int, min int, sec double precision) |	time |	从小时、分钟和秒字段中创建时间 |	make_time(8, 15, 23.5) |	08:15:23.5
 | make_timestamp(year int, month int, day int, hour int, min int, sec double precision) |	timestamp |	从年、月、日、小时、分钟和秒字段中创建时间戳 |	make_timestamp(2013, 7, 15, 8, 15, 23.5) |	2013-07-15 08:15:23.5
 | make_timestamptz(year int, month int, day int, hour int, min int, sec double precision, \[ timezone text \]) |	timestamp with time zone |	从年、月、日、小时、分钟和秒字段中创建带有时区的时间戳。 没有指定timezone时，使用当前的时区。 |	make_timestamptz(2013, 7, 15, 8, 15, 23.5) |	2013-07-15 08:15:23.5+01
 | now() |	timestamp with time zone |	当前事务开始时的时间戳；	 | 	 
 | statement_timestamp() |	timestamp with time zone |	实时时钟的当前时间戳；	 	 | 
 | timeofday() |	text |	与clock_timestamp相同，但结果是一个text 字符串；	  |	 
 | transaction_timestamp() |	timestamp with time zone |	当前事务开始时的时间戳；	 | 	 

## 常用函数
### 聚合函数
. count: 用于计算数据库表中的行数
. max: 用于查询某一特定列中最大值
. min: 用于查询某一特定列中最小值
. age: 用于计算某一特定列中平均值
. sum: 用于计算数字列所有值的总和
. array: 用于输入值(包括Null)添加到数组中
. numeric: 完整列出一个SQL中所需的操作数的函数
. String: 完整列出一个SQL中所需的操作字符的函数

### 数学函数
 | 函数      | 返回类型 | 描述    | 例子 | 结果 |
 | ------------- |---------|---------|---------|---------|
 |abs(x)	 | |	绝对值 |	abs(-17.4) |	17.4 |
 |cbrt(double)	 | |	立方根 |	cbrt(27.0) |	3 |
 |ceil(double/numeric)	 | |	不小于参数的最小的整数 |	ceil(-42.8) |	-42
 |degrees(double)	 | |	把弧度转为角度	degrees(0.5) |	28.6478897565412
 |exp(double/numeric)	 | |	自然指数	exp(1.0) |	2.71828182845905
 |floor(double/numeric)	 | |	不大于参数的最大整数 |	floor(-42.8) |	-43
 |ln(double/numeric) |	 |	自然对数 |	ln(2.0) |	0.693147180559945
 |log(double/numeric) |	 |	10为底的对数 |	log(100.0) |	2
 |log(b numeric,x numeric) |	numeric |	指定底数的对数	log(2.0, 64.0) |	6.0000000000
 |mod(y, x)	 | |	取余数 |	mod(9,4) |	1
 |pi() |	double |	"π"常量	pi() |	3.14159265358979
 |power(a double, b double) |	double |	求a的b次幂 |	power(9.0, 3.0) |	729
 |power(a numeric, b numeric) |	numeric |	求a的b次幂 |	power(9.0, 3.0) |	729
 |radians(double) |	double |	把角度转为弧度	radians(45.0) |	0.785398163397448
 |random() |	double |	0.0到1.0之间的随机数值 |	random()	
 |round(double/numeric)	 | |	圆整为最接近的整数 |	round(42.4) |	42
 |round(v numeric, s int) |	numeric |	圆整为s位小数数字 |	round(42.438,2) |	42.44
 |sign(double/numeric)	 | |	参数的符号(-1,0,+1) |	sign(-8.4)	-1
 |sqrt(double/numeric) | |		平方根 |	sqrt(2.0)	 |1.4142135623731
 |trunc(double/numeric)	 | |	截断(向零靠近) |	trunc(42.8) |	42
 |trunc(v numeric, s int) |	numeric	 |截断为s小数位置的数字 |	trunc(42.438,2) |	42.43

### 三角函数
 | 函数       | 描述    | 
 | ------------- |---------|
 | acos(x) | 	反余弦 | 
 | asin(x) | 	反正弦 | 
 | atan(x) | 	反正切 | 
 | atan2(x, y) | 	正切 y/x 的反函数 | 
 | cos(x) | 	余弦 | 
 | cot(x) | 	余切 | 
 | sin(x) | 	正弦 | 
 | tan(x) | 	正切 | 
 
### 字符串操作符
 | 函数      | 返回类型 | 描述    | 例子 | 结果 |
 | ------------- |---------|---------|---------|---------|
 |  string &#124;&#124; string	 | text | 	字串连接 | 	'Post' &#124;&#124; 'greSQL' | 	PostgreSQL
 |  bit_length(string) | 	int | 	字串里二进制位的个数 | 	bit_length('jose') | 	32
 |  char_length(string) | 	int | 	字串中的字符个数 | 	char_length('jose') | 	4
 |  convert(string using conversion_name) | 	text | 	使用指定的转换名字改变编码。 | 	convert('PostgreSQL' using iso_8859_1_to_utf8) | 	'PostgreSQL'
 |  lower(string) | 	text | 	把字串转化为小写 | 	lower('TOM') | 	tom
 |  octet_length(string) | 	int | 	字串中的字节数	octet_length('jose') | 	4
 |  overlay(string placing string from int \[for int\]) | 	text | 	替换子字串 | 	overlay('Txxxxas' placing 'hom' from 2 for 4) | 	Thomas
 |  position(substring in string) | 	int | 	指定的子字串的位置 | 	position('om' in 'Thomas') | 	3
 |  substring(string \[from int\] \[for int\]) | 	text | 	抽取子字串 | 	substring('Thomas' from 2 for 3) | 	hom
 |  substring(string from pattern) | 	text | 	抽取匹配 POSIX 正则表达式的子字串 | 	substring('Thomas' from '…$') | 	mas
 |  substring(string from pattern for escape) | 	text | 	抽取匹配SQL正则表达式的子字串 | 	substring('Thomas' from '%#"o_a#"_' for '#') | 	oma
 |  trim(\[leading&#124;trailing &#124; both\] \[characters\] from string) | 	text | 	从字串string的开头/结尾/两边/ 删除只包含characters(默认是一个空白)的最长的字串 | 	trim(both 'x' from 'xTomxx') | 	Tom
 |  upper(string) | 	text | 	把字串转化为大写。	 | upper('tom') | 	TOM
 |  ascii(text) | 	int | 	参数第一个字符的ASCII码 | 	ascii('x') | 	120
 |  btrim(string text \[, characters text\]) | 	text | 	从string开头和结尾删除只包含在characters里(默认是空白)的字符的最长字串 | 	btrim('xyxtrimyyx','xy') | 	trim
 |  chr(int) | 	text | 	给出ASCII码的字符 | 	chr(65) | 	A
 |  convert(string text, \[src_encoding name,\] dest_encoding name) | 	text | 	把字串转换为dest_encoding	convert( 'text_in_utf8', 'UTF8', 'LATIN1') | 	以ISO 8859-1编码表示的text_in_utf8
 |  initcap(text) | 	text | 	把每个单词的第一个子母转为大写，其它的保留小写。单词是一系列字母数字组成的字符，用非字母数字分隔。 | 	initcap('hi thomas') | 	Hi Thomas
 |  length(string text) | 	int | 	string中字符的数目 | 	length('jose') | 	4
 |  lpad(string text, length int \[, fill text\]) | 	text | 	通过填充字符fill(默认为空白)，把string填充为长度length。 如果string已经比length长则将其截断(在右边)。 | 	lpad('hi', 5, 'xy') | 	xyxhi
 |  ltrim(string text \[, characters text\]) | 	text | 	从字串string的开头删除只包含characters(默认是一个空白)的最长的字串。 | 	ltrim('zzzytrim','xyz') | 	trim
 |  md5(string text) | 	text | 	计算给出string的MD5散列，以十六进制返回结果。 | 	md5('abc')	
 |  repeat(string text, number int) | 	text | 	重复string number次。 | 	repeat('Pg', 4) | 	PgPgPgPg
 |  replace(string text, from text, to text) | 	text | 	把字串string里出现地所有子字串from替换成子字串to。 | 	replace('abcdefabcdef', 'cd', 'XX') | 	abXXefabXXef
 |  rpad(string text, length int \[, fill text\]) | 	text | 	通过填充字符fill(默认为空白)，把string填充为长度length。如果string已经比length长则将其截断。 | 	rpad('hi', 5, 'xy') | 	hixyx
 |  rtrim(string text \[, character text\]) | 	text | 	从字串string的结尾删除只包含character(默认是个空白)的最长的字 | 	rtrim('trimxxxx','x') | 	trim
 |  split_part(string text, delimiter text, field int) | 	text | 	根据delimiter分隔string返回生成的第field个子字串(1 Base)。 | 	split_part('abc~@~def~@~ghi', '~@~', 2) | 	def
 |  strpos(string, substring) | 	text | 	声明的子字串的位置。 | 	strpos('high','ig') | 	2
 |  substr(string, from \[, count\]) | 	text | 	抽取子字串。 | 	substr('alphabet', 3, 2) | 	ph
 |  to_ascii(text \[, encoding\]) | 	text | 	把text从其它编码转换为ASCII。 | 	to_ascii('Karel') | 	Karel
 |  to_hex(number int/bigint) | 	text | 	把number转换成其对应地十六进制表现形式。 | 	to_hex(9223372036854775807) | 	7fffffffffffffff
 |  translate(string text, from text, to text) | 	text | 	把在string中包含的任何匹配from中的字符的字符转化为对应的在to中的字符。 | 	translate('12345', '14', 'ax') | 	a23x5

### 类型相关转换函数
 | 函数      | 返回类型 | 描述    | 例子 |
 | ------------- |---------|---------|---------|
 |  to_char(timestamp, text) | 	text | 	将时间戳转换为字符串 | 	to_char(current_timestamp, 'HH12:MI:SS')
 |  to_char(interval, text) | 	text | 	将时间间隔转换为字符串 | 	to_char(interval '15h 2m 12s', 'HH24:MI:SS')
 |  to_char(int, text) | 	text | 	整型转换为字符串 | 	to_char(125, '999')
 |  to_char(double precision, text)	 | text | 	双精度转换为字符串 | 	to_char(125.8::real, '999D9')
 |  to_char(numeric, text) | 	text | 	数字转换为字符串 | 	to_char(-125.8, '999D99S')
 |  to_date(text, text)	 | date	 | 字符串转换为日期 | 	to_date('05 Dec 2000', 'DD Mon YYYY')
 |  to_number(text, text) | 	numeric	 | 转换字符串为数字 | 	to_number('12,454.8-', '99G999D9S')
 |  to_timestamp(text, text) | 	timestamp	 | 转换为指定的时间格式 |  time zone convert string to time stamp	to_timestamp('05 Dec 2000', 'DD Mon YYYY')
 |  to_timestamp(double precision) | 	timestamp | 	把UNIX纪元转换成时间戳	 | to_timestamp(1284352323)
