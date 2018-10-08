---
sidebarDepth: 0
title: 权限分表功能
---


## 作用
权限配置表:permissionRule和权限明细表:permissionDetail随着业务数据量的增加会越来越大，导致整个系统运行越来越慢，所以需要对这两张表进行拆分操作。

## 准备工作
1、确认迁移的分类或流程对应的表单是实际表单还是抽象表单,如果是抽象表单查询此抽象表单的objtablename是否为空:   
<code>select objtablename from forminfo where id=?</code>   
如果为空，需要更新objtablename,更新为抽象表单对应的实际表单的objtablename:   
<code>update forminfo set objtablename=? where id=?</code> 
2、 进入OA系统后台管理-->数据管理-->权限分表管理，点击新增规则，选择权限表和业务表。   
::: warning 注：
如果表单是抽象表，需要为主表也建立一条规则。由于前端页面无法创建相同表单的记录，请直接在后台插入。
::: 
3、确认表单是否对应多个分类或多个流程：   
分类确认：   
<code>select * from category where formid in (select id from forminfo where objtablename=?)</code>   
流程确认：   
<code>select * from workflowinfo where formid in (select id from forminfo where objtablename=?)</code>

## 迁移permissiondetail表数据
1、查询迁移表单对应的permissiondetail数据量：   
<code>select count(*) from permissionDetail pd where exists(select 1 from uf_table uf where pd.objid=uf.requestid)</code>   
2、根据查询出来的数据量执行存储过程：   
<code>exec P_transfer_permissionDetail('S02',5,'permissionDetails2','uf_table');</code>
::: tip 参数说明
S02：对应的权限表标识   
5：循环的次数，1次循环操作30万条数据   
permissionDetails2：对应的权限表   
uf_table：对应的uf表单
:::
3、校验数据是否迁移完成：   
<code>select count(pd.id) from permissionDetail pd where exists(select 1 from uf_table where uf.requestid=pd.objid)</code>

## 迁移permissionrule表数据
1、查询迁移表单对应的permissionrule数据量：   
<code>select count(*) from permissionRule pd where exists(select 1 from uf_table uf where pd.objid=uf.requestid)</code>   
2、根据查询出来的数据量执行存储过程：   
<code>exec P_transfer_permissionRule('S02',2,'permissionRules2','uf_table');</code>
::: tip 参数说明
S02：对应的权限表标识   
2：循环的次数，1次循环操作30万条数据   
permissionRules2：对应的权限表   
uf_table：对应的uf表单
:::
3、校验数据是否迁移完成：   
<code>select count(pd.id) from permissionRule pd where exists (select 1 from uf_table uf where uf.requestid=pd.objid);</code>

## 迁移流程配置对应的权限数据
### 迁移nodeInfo的permissionRule
```markdown
--下面语句中的S04应根据实际情况替换
insert into permissionRule_test select pr.* from permissionRule pr where exists(select 1 from nodeInfo node where node.workflowid in (select id from workflowinfo where formid in (select id from forminfo where objtablename=?)) and node.id=pr.objid);
commit;
delete from permissionRule pr where exists(select 1 from permissionrule_test test where pr.id=test.id);
commit;
--更新export的workflowid(节点操作者的条件配置中根据workflowid对应节点的permissionrule的id)
update export set workflowid = replace(workflowid,substr(workflowid,0,3),'S04') where workflowid in (select id from permissionrule_test);
commit;
update permissionrule_test set id = replace(id,substr(id,0,3),'S04');
commit;
insert into permissionrules4 select pd.* from permissionrule_test pd;
commit;
truncate table permissionrule_test;
```
### 迁移nodeInfo的permissionDetail
```markdown
--下面语句中的S04应根据实际情况替换
insert into permissiondetail_test select pr.* from permissiondetail pr where exists(select 1 from nodeinfo node where node.workflowid in (select id from workflowinfo where formid in (select id from forminfo where objtablename=?)) and node.id=pr.objid);
commit;
delete from permissiondetail pr where exists(select 1 from permissiondetail_test test where pr.id=test.id);
commit;
update permissiondetail_test set id = replace(id,substr(id,0,3),'S04') , ruleid =replace(ruleid,substr(ruleid,0,3),'S04');
commit;
insert into permissiondetails4 select pd.* from permissiondetail_test pd;
commit;
```

### 迁移workflowinfo的权限
```markdown
--下面语句中的S04应根据实际情况替换
insert into permissionrule_test select pr.* from permissionrule pr where pr.objid in (select id from workflowinfo where formid in (select id from forminfo where objtablename=?));
commit;
delete from permissionrule pr where exists (select 1 from permissionrule_test test where pr.id=test.id);
commit;
update permissionrule_test set id = replace(id,substr(id,0,3),'S04');
commit;
insert into permissionrules4 select pd.* from permissionrule_test pd;
commit;
truncate table permissionrule_test;
```

## 迁移分类配置对应的权限数据
### 迁移category的permissionRule
```markdown
--下面语句中的S04应根据实际情况替换
insert into permissionrule_test select pr.* from permissionrule pr where pr.objid in (select id from category where formid in (select id from forminfo where objtablename=?));
commit;
delete from permissionrule pr where exists(select 1 from permissionrule_test test where pr.id=test.id);
commit;
--更新export的workflowid(节点操作者的条件配置中根据workflowid对应节点的permissionrule的id)
update export set workflowid = replace(workflowid,substr(workflowid,0,3),'S04') where workflowid in (select id from permissionrule_test);
commit;
update permissionrule_test set id = replace(id,substr(id,0,3),'S04');
commit;
insert into permissionrules4 select pd.* from permissionrule_test pd;
commit;
truncate table permissionrule_test;
```
### 迁移category的permisisonDetail
```markdown
--下面语句中的S04应根据实际情况替换
insert into permissiondetail_test select pr.* from permissiondetail pr where objid in (select id from category where formid in (select id from forminfo where objtablename=?));
commit;
delete from permissiondetail pr where exists(select 1 from permissiondetail_test test where pr.id=test.id);
commit;
update permissiondetail_test set id = replace(id,substr(id,0,3),'S04') , ruleid =replace(ruleid,substr(ruleid,0,3),'S04');
commit;
insert into permissiondetails4 select pd.* from permissiondetail_test pd;
commit;
truncate table permissiondetail_test;
```
## 存储过程：P_transfer_permissiondetail
```markdown
create or replace PROCEDURE P_transfer_permissiondetail(permcode in varchar2,pdetailTotal in number,detailTable in varchar2,ufTable in varchar2)
as
pint number:=0;
psql varchar2(500);
begin
    loop
        --插入permissiondetail_test
        psql:='insert into permissiondetail_test select pd.* from permissiondetail pd where exists (select 1 from '||ufTable||' uf where uf.requestid=pd.objid) and rownum<100001';
        execute immediate psql;
        commit;
        --删除permissiondetail
        delete from permissiondetail pd where exists (select 1 from permissiondetail_test test where test.id=pd.id);
        commit;
        --更新permissionrule_test
        update permissiondetail_test set id = replace(id,substr(id,0,3),permcode) , ruleid =replace(ruleid,substr(ruleid,0,3),permcode);
        commit;
        --插入permissiondetail的拆分表
        psql:='insert into '||detailTable||' select * from permissiondetail_test';
        execute immediate psql;
        commit;
        --清空permissiondetail_test
        execute immediate 'truncate table permissiondetail_test';
        exit when pint>pdetailTotal;
        pint:=pint + 1;
    end loop;
    dbms_output.put_line('迁移成功');
end;
```
## 存储过程：P_transfer_permissionRule
```markdown
create or replace PROCEDURE P_transfer_permissionRule(permcode in varchar2,pdetailTotal in number,ruleTable in varchar2,ufTable in varchar2)
as
pint number:=0;
psql varchar2(500);
begin
    loop
        --插入permissionrule_test
        psql:='insert into permissionrule_test select pd.* from permissionrule pd where exists (select 1 from '||ufTable||' uf where uf.requestid=pd.objid) and rownum<100001';
        execute immediate psql;
        commit;
        --删除permissionrule
        delete from permissionrule pd where exists (select 1 from permissionrule_test test where test.id=pd.id);
        commit;
		--更新requestoperators
		update requestoperators rop set rop.ruleid = replace(rop.ruleid,substr(rop.ruleid,0,3),permcode) where exists(select 1 from permissionrule_test pr where pr.id=rop.ruleid);
		commit;
		--更新REQUESTOPTRULE
		update REQUESTOPTRULE rop set rop.ruleid = replace(rop.ruleid,substr(rop.ruleid,0,3),permcode) where exists(select 1 from permissionrule_test pr where pr.id=rop.ruleid);
		commit;
        --更新permissionrule_test
        update permissionrule_test set id = replace(id,substr(id,0,3),permcode);

        commit;
        --插入permissionrule的拆分表
        psql:='insert into '||ruleTable||' select * from permissionrule_test';
        execute immediate psql;
        commit;
        --清空permissionrule_test
        execute immediate 'truncate table permissionrule_test';
        exit when pint>pdetailTotal;
        pint:=pint + 1;
    end loop;
    dbms_output.put_line('迁移成功');
end;
```
