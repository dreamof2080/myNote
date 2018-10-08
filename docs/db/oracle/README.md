---
sidebarDepth: 0
title: oracle
---


## 表空间操作
### 查询当前用户对应的表空间
```markdown
select username,default_tablespace from user_users;
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

