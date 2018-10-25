---
sidebarDepth: 0
title: oracle
---


## 表空间操作
### 查询当前用户对应的表空间
```markdown
select username,default_tablespace from user_users;
```
### 查询表空间的路径
```markdown
select * from dba_data_files
```
### 查询存储的大小
```markdown
select group_number gno,name,state,type,total_mb,free_mb,required_mirror_free_mb rmfmb,usable_file_mb ufmb from v$asm_diskgroup;
```
### 查询表空间的使用情况
```markdown
SELECT D.TABLESPACE_NAME "表空间名字", D.STATUS "状态",
(A.BYTES / 1024 / 1024/1024) as "总共多少G",
((A.BYTES - DECODE(F.BYTES, NULL, 0, F.BYTES)) / 1024 / 1024/1024) as "已经用了多少G",
(DECODE(F.BYTES, NULL, 0, F.BYTES) / 1024 / 1024/1024) as "剩余多少G",
((A.BYTES - DECODE(F.BYTES, NULL, 0, F.BYTES)) / 1024 / 1024/1024)/(A.BYTES / 1024 / 1024/1024) as "利用率",
DECODE(sign(((A.BYTES - DECODE(F.BYTES, NULL, 0, F.BYTES)) / 1024 / 1024/1024)/(A.BYTES / 1024 / 1024/1024)-0.9),1,'剩余不到10%，请考虑扩表空间','正常') as "温馨提示"
FROM SYS.DBA_TABLESPACES D, SYS.SM$TS_AVAIL A, SYS.SM$TS_FREE F
WHERE D.TABLESPACE_NAME = A.TABLESPACE_NAME
AND F.TABLESPACE_NAME (+) = D.TABLESPACE_NAME
```
### 创建表空间
```markdown
create tablespace uf_bak datafile '+DG_DB/ufbak01' size 8000M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M
```
### 扩展表空间
```markdown
alter tablespace permission_bak add datafile '+DG_DB/ufbak04' size 8000M 
```
### 修改表空间自动增长的大小
```markdown
ALTER DATABASE DATAFILE 'D:/database/XXX.DBF' AUTOEXTEND ON NEXT 1G MAXSIZE UNLIMITED;
```
### 压缩表空间
```markdown
1、运行SQL查询当前表空间大小、可以被压缩的大小：
select a.file#,a.name,a.bytes/1024/1024 CurrentMB, ceil(HWM * a.block_size)/1024/1024 ResizeTo,(a.bytes - HWM * a.block_size)/1024/1024 ReleaseMB, 'alter database datafile '''||a.name||''' resize '||  ceil(HWM * a.block_size/1024/1024) || 'M;' ResizeCMD from v$datafile a,  (select file_id,max(block_id+blocks-1) HWM   from dba_extents  group by file_id) b where a.file# = b.file_id(+) and (a.bytes - HWM *block_size)>0 order by 5 
2、查询的SQL中包含压缩语句，直接执行即可。
```
### 删除表空间
```markdown
DROP TABLESPACE tablespace_name INCLUDING CONTENTS AND DATAFILES;
```
### 移动表到其他表空间
```markdown
1、移动表空间
alter table humres move  tablespace spaceName;
2、重建表的索引
alter index INDEX_HUMRES_OBJNO rebuild tablespace spaceName;
```
## 分区表的应用
### 对reqeustlog进行range分区
```markdown
1、创建createdate字段
alter table requestlog add createdate date default sysdate;
2、修改历史数据的值
update requestlog set createdate=to_date(operatedate,'yyyy-mm-dd');
3、创建分区使用的表空间
create tablespace requestlog_2017 datafile '+DATA/requestlog_2017' size 2000M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2018_q1 datafile '+DATA/requestlog_2018_q1' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2018_q2 datafile '+DATA/requestlog_2018_q2' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2018_q3 datafile '+DATA/requestlog_2018_q3' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2018_q4 datafile '+DATA/requestlog_2018_q4' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2019_q1 datafile '+DATA/requestlog_2019_q1' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2019_q2 datafile '+DATA/requestlog_2019_q2' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2019_q3 datafile '+DATA/requestlog_2019_q3' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
create tablespace requestlog_2019_q4 datafile '+DATA/requestlog_2019_q4' size 1024M reuse LOGGING ONLINE PERMANENT EXTENT MANAGEMENT LOCAL UNIFORM SIZE 1M;
4、创建分区表requestlog_p
create table requestlog_p 
(	ID VARCHAR2(32 BYTE) NOT NULL ENABLE, 
	REQUESTID VARCHAR2(32 BYTE), 
	STEPID VARCHAR2(32 BYTE), 
	LOGTYPE VARCHAR2(32 BYTE), 
	OPERATOR VARCHAR2(32 BYTE), 
	OPERATEDATE VARCHAR2(10 BYTE), 
	OPERATORTIME VARCHAR2(8 BYTE), 
	REMARK CLOB, 
	ISDELETE NUMBER(38,0) DEFAULT 0, 
	BYAGENT VARCHAR2(50 BYTE), 
	RULEID VARCHAR2(32 BYTE), 
	LASTSTEPID VARCHAR2(32 BYTE), 
	ATTACHIDS VARCHAR2(500 BYTE), 
	ISFEEDBACKREAD VARCHAR2(2 BYTE), 
	ISREJECTDELETE NUMBER(*,0), 
	NEXTOPERNAME CLOB, 
	SELEMAIL NUMBER(*,0), 
	SELSMS NUMBER(*,0), 
	SELRTX NUMBER(*,0), 
	SELPOPUP NUMBER(*,0), 
	REFDOCBASEID VARCHAR2(4000 BYTE), 
	REFWORKFLOWID VARCHAR2(4000 BYTE), 
	CREATEDATE DATE DEFAULT sysdate, 
    PRIMARY KEY (ID)
)
partition by range (createdate)
(
    PARTITION requestlog_2017 values less than(to_date('2018-01-01','yyyy-mm-dd')) tablespace requestlog_2017,
    PARTITION requestlog_2018_q1 values less than(to_date('2018-04-01','yyyy-mm-dd')) tablespace requestlog_2018_q1,
    PARTITION requestlog_2018_q2 values less than(to_date('2018-07-01','yyyy-mm-dd')) tablespace requestlog_2018_q2,
    PARTITION requestlog_2018_q3 values less than(to_date('2018-10-01','yyyy-mm-dd')) tablespace requestlog_2018_q3,
    PARTITION requestlog_2018_q4 values less than(to_date('2019-01-01','yyyy-mm-dd')) tablespace requestlog_2018_q4,
    PARTITION requestlog_2019_q1 values less than(to_date('2019-04-01','yyyy-mm-dd')) tablespace requestlog_2019_q1,
    PARTITION requestlog_2019_q2 values less than(to_date('2019-07-01','yyyy-mm-dd')) tablespace requestlog_2019_q2,
    PARTITION requestlog_2019_q3 values less than(to_date('2019-10-01','yyyy-mm-dd')) tablespace requestlog_2019_q3,
    PARTITION requestlog_2019_q4 values less than(to_date('2020-01-01','yyyy-mm-dd')) tablespace requestlog_2019_q4,
    PARTITION requestlog_maxvalue VALUES LESS THAN (MAXVALUE)
);
5、创建索引
CREATE INDEX idx_requestlog_all ON requestlog_p (requestid,operator,logtype,stepid);
6、插入数据
insert into requestlog_p select * from requestlog;
7、验证数据是否正常
select count(*) from requestlog;
select count(*) from requestlog_p;
8、表重命名
rename requestlog to requestlog_bak2;
rename requestlog_p to requestlog;
9、分析表数据
exec dbms_stats.gather_table_stats('test1', 'requestlog', cascade => true);
10、重建索引：
alter index IDX_requestlog_ALL rebuild;
```
::: warning 注：
如果插入数据时提示表空间不足，则需要先drop表和表空间并修改创建表空间大小的语句重建表和表空间
因为数据虽然没有插入但表空间已被使用
drop table requestlog_p;
DROP TABLESPACE requestlog_2017 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2018_q1 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2018_q2 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2018_q3 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2018_q4 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2019_q1 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2019_q2 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2019_q3 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE requestlog_2019_q4 INCLUDING CONTENTS AND DATAFILES;
:::
### requestlog表分区后的应用
```markdown
select、update requestlog表时加入条件：
createdate>=to_date(:startdate,'yyyy-mm-dd') and createdate<=to_date(:enddate,'yyyy-mm-dd')
:startdate、:enddate获取：
Map<String,String> requestDateRange = requestbaseService.getReqDateRange(requestid);
String start = requestDateRange.get("start");
String end = requestDateRange.get("end");
```
## 表存储块优化
```markdown
--查询表的大小
select bytes/1024/1024/1024 from dba_segments where segment_name='PERMISSIONRULE';
--清理碎片
alter table PERMISSIONRULE move;
--查询索引
select index_name from dba_indexes where table_name='PERMISSIONRULE';
--重建索引
    --移动到其他表空间
alter index idx_name rebuild tablespace tbs1;
    --不移动表空间
alter index index_name rebuild online
```
## 分析表数据
```markdown
--删除数据后对表重新分析块信息：
1、分析表：
exec dbms_stats.gather_table_stats('test1', 'REQUESTLOG', cascade => true);
2、重建索引：
alter index PERMISSIONDETAILS2_OBJID  rebuild;
```
## 通过进程PID查询SQL 
```markdown
select sql_text from v$sqltext a where a.hash_value = 
( SELECT sql_hash_value from v$session b, 
v$process c where b.paddr = c.addr 
AND c.spid = '67214') 
ORDER BY piece asc;
```