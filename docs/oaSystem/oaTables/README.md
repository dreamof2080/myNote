---
sidebarDepth: 0
title: OA表结构
---


## 下拉框
### selectItem 下拉选择框选择项
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | no | null | 主键 |
| objName      | varchar2(256) | yes | null | 名称 |
| objDesc      | varchar2(256) | yes | null | 描述，部分系统下拉框存放条件，如共享人员定义、共享岗位定义等。 |
| pid      | varchar2(32) | yes | null | 父ID |
|typeId  |varchar2(32)  |yes  |null  |下拉框(select)id，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的id字段。
|<span id="selectItemTypeId">dspOrder </span>|  number  |yes  |null  |顺序
|col1  |varchar2(256)|  yes|  null  |是否无效，0：否，1：是。
|col2  |varchar2(256)  |yes  |null  |(备用)
|col3  |varchar2(256)  |yes  |null|  (备用)
|isDelete|  number  |yes|  0  |是否逻辑删除，0：否，1：是。
|imageField|  varchar2(32)|  yes|  null  |图片路径


### selectItemType 下拉选择框详情
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id   | varchar2(32) | no | null | 主键 |
|objName|  varchar2(256)  |yes|  null|  名称
|pid  |varchar2(32)  |yes  |null  |上级id
|dsporder|  number  |yes  |null  |显示顺序
|col3  |varchar2(256)  |yes  |null  |(备用)
|col2  |varchar2(256)  |yes|  null|  (备用)
|col1  |varchar2(256)  |yes  |null  |(备用)
|isDelete|  number  |yes  |0  |是否删除，0：否，1：是。
|moduleId|  varchar2(32)  |yes  |null|  所属模块，对应module表中的id字段。


## 关联选择
### refObj 关联选择框
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | no | null | 主键 |
|objName|  varchar2(128)  |yes  |null  |名称
|refUrl  |clob|  yes|  null  |关联url
|refTable  |varchar2(32)  |yes  |null|  数据库表名
|keyField  |varchar2(32)|  yes|  null  |主字段
|viewField|  varchar2(256)  |yes  |null  |显示名称
|viewUrl|  varchar2(256)|  yes|  null|  显示url
|filter  |varchar2(512)  |yes  |null|  过滤条件，例：hrstatus='4028804c16acfbc00116ccba13802935'
|isRefObjLink|  number  |yes|  null  |业务协同(弃用)，0：否，1：是。
|col1  |varchar2(256)  |yes  |null  |排序
|col2  |varchar2(256)|  yes  |null  |(备用)
|col3  |varchar2(256)|  yes|  null|  (备用)
|isMulti  |number  |yes  |null|  是否多选，0：否，1：是。
|isPermObj  |number|  yes|  null|  是否授权对象，0：否，1：是。
|isDelete  |number  |yes  |0|  是否逻辑删除，0：否，1：是。
|<span id = "category">selField</span>  |varchar2(2048)|  yes|  null  |直接录入查询字段
|isDirectinPut  |number  |yes  |null|  是否直接录入
|moduleId  |varchar2(32)|  yes|  null|  所属模块，对应module表中的id字段。
|mgid  |clob  |yes  |null  |相同表单合并browser框(弃用)
|isForwarn|  number  |yes|  null  |(弃用)

## 分类
### category 分类基本信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | no | null | 主键 |
|pid|  varchar2(32)  |yes  |null  |父级分类id
|objName  |varchar2(256)|  yes|  null  |分类名称
|dspOrder  |number  |yes  |null  |显示顺序
|oType  |number|  yes|  null|  暂时不用，值与dspOrder相同。
|mType  |number  |yes  |null  |暂时不用，默认2。
|isDelete|  number|  yes|  null|  是否删除。0：否，1：是。
|col1  |varchar2(256)  |yes  |null  |是否记录日志。1：是。
|col2  |varchar2(256)  |yes|  null  |(备用)
|col3  |varchar2(256)  |yes|  null  |(备用)
|workFlowId  |varchar2(32)  |yes|  null  |审批工作流id
|humresId  |varchar2(32)|  yes  |null|  分类管理员id
|createLayoutId  |varchar2(32)  |yes|  null  |新建布局id
|viewLayoutId  |varchar2(32)  |yes|  null  |显示布局id
|editLayoutId|  varchar2(32)  |yes|  null  |编辑布局id
|refLayoutId|  varchar2(32)  |yes  |null  |关联布局id
|formId  |varchar2(32)  |yes  |null|  表单id
|objDesc|  varchar2(2000)  |yes  |null|  描述
|reportId  |varchar2(32)|  yes  |null|  报表id
|isFastNew  |number  |yes  |null|  是否提交并新建。0：是，1：否。
|moduleId  |varchar2(32)|  yes  |null|  模块id
|uniqueFliter  |varchar2(512)  |yes  |null|  唯一校验字段，需要判断的字段名，多个以“,”分隔。
|isApprove  |number  |yes|  null|  是否文档审批
|docField  |varchar2(32)  |yes  |null  |文档字段id
|importDetail  |number|  yes|  0  |是否允许导入明细记录
|actionClazz  |varchar2(100)  |yes  |null|  接口类名
|deleteType  |number  |yes|  null  |数据删除类型
|attachSavePath  |varchar2(200)  |yes|  null  |附件保存路径
|docAttachCanEdit|  number  |yes|  null  |文档office附件是否可编辑


### categoryLink 分类关联关系
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | no | null | 主键 |
|objId  |varchar2(32)  |yes  |null|  文档id或卡片的requestid(跳转到[category](/oaSystem/oaTables/#category)表)
|objType  |varchar2(256)|  yes|  null  |文档或卡片对应的表名
|categoryId  |varchar2(32)  |yes  |null|  分类id
|pType  |number|  yes|  null  |(弃用)
|col1  |varchar2(256)  |yes  |null|  (备用)
|col2  |varchar2(256)|  yes|  null|  (备用)
|col3  |varchar2(256)  |yes  |null|  (备用)
|isDelete|  number  |yes|  0  |是否删除。0：否，1：是。


## 多语言
### label 多语言标签
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id|  varchar2(32)  |no  |null|  主键
|labelName  |varchar2(512)  |yes  |null  |标签名称(用于显示)
|labelDesc|  varchar2(256)  |yes  |null|  标签描述
|col1  |varchar2(256)  |yes  |null  |labeldictory表的外键,和labeldictory表的id对应,一组不同语言的标签数据对应一个labeldictory
|col2  |varchar2(256)  |yes  |null|  扩展字段(尚未用到)
|col3  |varchar2(256)  |yes  |null|  扩展字段(尚未用到)
|isDelete|  number|  yes|  0  |是否被删除(0：未被删除，1:已被删除)
|keyWord|  varchar2(512)  |yes  |null|  关键字(存放的中文,之前的getlabelnamebykeyword方法使用。除了系统遗留的之前国际化的方式之外，现有方式已不使用此字段)
|language|  varchar2(64)|  yes|  null|  标签对应语言(如：中文:zh_cn , 英文:en_us)

### labelCustom 多语言标签
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id|  varchar2(32)  |no  |null|  主键
|labelName  |varchar2(200)|  yes|  null|  标签名称(用于显示)
|keyWord  |varchar2(32)  |yes  |null|  关键字(如果是菜单名称的国际化数据则对应菜单表的id,其他依次类推. 一组不同语言的标签数据拥有相同的keyword)
|language  |varchar2(50)  |yes  |null|  标签对应语言(如：中文:zh_cn , 英文:en_us)
|labelType  |varchar2(50)  |yes  |null  |标签类型(formfield:表单字段,reportfield:报表字段, workflowinfo:流程信息, nodeinfo:流程节点信息, menu:菜单,category:分类, module:模块, setitem:设置项, portaltab:门户标签页, portletobject:门户元素, selectitem下拉框选项, pagemenu:页面扩展)
|col1|  varchar2(50)|  yes  |null  |扩展字段(尚未用到)
|col2|  varchar2(50)  |yes  |null  |扩展字段(尚未用到)
|col3|  varchar2(50)|  yes|  null|  扩展字段(尚未用到)

### labelDictory 多语言标签字典
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)  |no  |null|  主键(和label表的col1字段对应,对应一组不同语言的标签数据)
|keyWord  |varchar2(512)|  yes|  null|  关键字(中文,一般用于该组标签的标识)
|labelUesc  |varchar2(256)|  yes|  null|  描述
|col1  |varchar2(256)|  yes|  null|  扩展字段(尚未用到)

## 接口
### interfaceConfigDetail 接口信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|name  |varchar2(256)  |yes|  null|  接口名称
|description  |varchar2(1024)|  yes|  null  |接口描述
|objId  |number|  yes|  null  |此接口关联的对象 如某节点,分类等
|detailData  |varchar2(4000)  |yes  |null  |每个接口的具体配置信息，以xml的形式存储每个接口的属性
|objType|  varchar2(32)|  yes|  null|  接口关联对象的类型如流程、表单、节点等
|isNeedReturn  |number|  yes  |null  |此接口是否需要返回值
|interfaceType  |number|  yes  |null  |接口类型 如java、sap等
|isDelete  |number  |yes  |null  |是否删除
|interfaceTypeId  |varchar2(32)|  yes|null  |接口类型id
|code  |varchar2(32)|  yes  |null  |接口编码
|paramType  |number  |yes|  null  |参数格式类型 如json、sql 、文本等
|parameters|  varchar2(1024)  |yes  |null  |参数内容
|tipsMsg  |varchar2(2000)|  yes|  null  |???

### interfaceLog 接口执行日志
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|executeDate  |varchar2(20)  |yes|  null|  接口执行日期
|executeTime  |varchar2(20)  |yes|  null|  接口执行时间
|interfaceId  |varchar2(32)  |yes|  null|  接口id
|objId  |varchar2(32)  |yes|  null|  接口关联对象id
|reqId  |varchar2(32)  |yes|  null|  执行此接口关联的数据id 一般是requestid
|objType  |varchar2(32)|  yes|  null  |关联对象类型
|isSuccess  |number|  yes|  null|  接口执行结果代码 成功200 异常500
|message  |varchar2(512)  |yes|  null|  接口执行接口消息

### interfaceMeta 接口类型
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|name  |varchar2(256)|  yes|  null|  接口类型名称
|description|  varchar2(1024)|  yes|  null|  接口描述
|interfaceCode  |varchar2(32)  |yes  |null|  接口类型编码
|isDelete  |number  |yes  |null  |是否删除
|configUrl  |varchar2(256)  |yes|  null|  配置接口对于的配置页面
|pid  |varchar2(32)  |yes|  null|  ???

### interfaceObjLink 接口与业务对象关联
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objType  |varchar2(32)|  yes|  null|  业务对象类型如 节点等
|objId  |varchar2(32)|  yes|  null|  业务对象id 如节点id
|interfaceId  |varchar2(32)|  yes  |null  |接口id
|actionType  |varchar2(2)  |yes|  null|  接口触发类型
|isDelete  |number|  yes  |null|  是否删除

## 提醒
### jobRemind 提醒内容信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|userId  |varchar2(32)  |yes|  null  |所提醒的人员
|objId  |varchar2(32)  |yes|  null  |提醒关联的流程或分类id
|remindTile  |varchar2(256)  |yes|  null  |提醒所使用的标题
|isNodify  |number  |yes  |null  |是否已经提醒
|isRead|  number  |yes  |null  |提醒是否已经被阅读
|remindGenerateTime|  varchar2(64)  |yes  |null  |提醒生成的时间
|remindTime  |varchar2(64)  |yes|  null  |提醒执行的时间
|dataType  |number  |yes|  null  |是流程还是分类
|remindType  |number  |yes|  null  |提醒类型 pop,email,sms and so on.
|remindDetail  |varchar2(1024)|  yes|  null|  提醒的详细内容
|isDelete  |number|  yes  |null  |是否已删除
|titleHerf  |varchar2(128)  |yes|  null|  提醒需要的链接
|ruleId  |varchar2(32)|  yes|  null  |权限规则id

### jreMinder 任务提醒所提醒的人员
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|userId|  varchar2(256)|  yes|  null|  提醒人员id
|ruleId|  varchar2(32)|  yes|  null|  任务规则id
|taskId|  varchar2(256)|  yes|  null|  任务id
|reminderType  |number|  yes|  null|  提醒者类型
|isDelete  |varchar2(32)  |yes|  null|  是否有效

### messageUrl 提醒链接地址
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|url  |varchar2(512)|  yes|  null|  地址
|sendDate|  varchar2(256)|  yes  |null  |提醒发送日期
|isDelete|  number  |yes|  0|  是否逻辑删除，0：否，1：是。

### notify 分类提醒
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|content  |varchar2(1024)|yes|null|  提醒内容
|<span id="notifyDefine">defineId</span>|  char(32)|yes|null|  分类提醒设置，对应[notifyDefine](/oaSystem/oaTables/#notifyDefine)表中的id字段。
|objId  |char(32)  |yes|null|  对象，对应formbase表中的id字段。
|sendTime|  char(19)|yes|  null|  提醒发送(生成)时间
|isDelete|  number  |yes|0  |是否逻辑删除，0：否，1：是。

### notifyDefine 分类提醒设置
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|ahead  |number|  yes  |null|  提前量(天)
|categoryId|  char(32)  |yes|  null|  分类，对应[category](/oaSystem/oaTables/#category)表中的id字段。
|content  |varchar2(1024)  |yes  |null|  提醒内容
|dateField  |varchar2(255)  |yes|  null  |表单日期字段名
|notifyName  |varchar2(255)  |yes|  null  |名称
|remindType  |number  |yes|  null|  提醒类型，1：到期提醒，4：即时提醒。
|formId  |char(32)  |yes|  null|  表单
|isDelete|  number  |yes|  0  |是否逻辑删除，0：否，1：是。
|issms  |number|  yes  |null  |是否短信提醒，0：否，1：是。
|isPopUp  |number|  yes  |null  |是否弹出提醒，0：否，1：是。
|isEmail  |number|  yes  |null  |是否邮件提醒，0：否，1：是。
|isRtx  |number|  yes  |null  |是否即时通讯提醒，0：否，1：是。
|timeField|  varchar2(32)  |yes  |null|  表单时间字段名
|aHour  |number|  yes  |null  |提前量(小时)|
|aMinutes|  number|  yes|  null|  提前量(分)


### notifyReceiverLink 分类提醒状态
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|humresId|  char(32)|  yes|  null  |被提醒用户
|notifyId|  char(32)|  yes|  null  |分类提醒id，对应notify表中的id字段。
|readed  |number|  yes  |null  |是否查看，0：否，1：是。
|sent  |number|  yes  |null  |是否发送，0：否，1：是。
|isDelete|  number  |yes  |0  |是否逻辑删除，0：否，1：是。
|objId  |varchar2(32)|  yes  |null  |对象，对应frombase表中的id字段。


## 数据源
### dsentity 数据源
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|dsName  |varchar2(256)  |yes|  null  |数据源名称
|dbType  |number  |yes|  null|  数据库类型 oracle mssql等
|driverClassName  |varchar2(256)  |yes|  null  |数据源驱动路径
|url  |varchar2(256)  |yes|  null|  数据源连接url
|passWord  |varchar2(32)  |yes  |null|  数据源连接密码
|userName  |varchar2(32)  |yes  |null|  数据源连接用户名
|isStart|  number  |yes  |null  |是否随服务启动
|isDelete  |number  |yes|  null|  此数据源是否删除
|dsType  |number  |yes|  null  |数据源类型编码 关联dsmeta的 dstype字段
|confContent|varchar2(1024)  |yes|  null  |数据源具体配置,为了兼容各种数据源,此字段内容为xml格式的字符串,记录各种数据源的配置属性
|dsTypeId|varchar2(32)  |yes|  null  |数据源类型id关联dsmeta的id字段
|description|varchar2(1024)  |yes|  null  |数据源描述
|minClients|number  |yes  |null|  数据源最小连接数
|maxClients|number  |yes  |null|  数据源最大连接数


### dsMeta 数据源类型
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|name  |varchar2(256)  |yes|  null  |数据源类型名称
|description|  varchar2(1024)  |yes|  null|  数据源类型描述
|<span id="changeLog">dsType</span>  |varchar2(32)|  yes|  null  |此数据源类型编码
|isDelete|  number|  yes  |null  |是否删除
|configUrl|  varchar2(256)  |yes|  null|  配置此数据源时关联的配置页面一般是jsp页面
|pid|  varchar2(32)  |yes|  null|  此数据源所属的父级

## 日志
### changeLog 变更日志
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objId  |varchar2(32)  |yes|  null  |变更对象，系统表保存id，自定义表保存 requestid。
|objName  |varchar2(256)  |yes|  null  |变更对象名称
|logDesc  |clob  |yes|  null  |日志描述
|submitOr|  varchar2(32)  |yes|  null  |操作者id
|submitDate  |varchar2(10)  |yes|  null  |操作日期
|submitTime  |varchar2(8)|  yes|  null  |操作时间
|submitIp  |varchar2(256)  |yes|  null|  操作者ip地址
|isDelete  |number|  yes|  0  |是否删除。0：否，1：是。


### changeLogDetail 变更日志明细
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|fieldId  |varchar2(32)|  yes|  null|  变更字段id，对应formfield表中id字段。
|logId  |varchar2(32)|  yes|  null|  变更日志id，对应[changeLog](/oaSystem/oaTables/#changeLog)表中id字段。
|oldValue|  varchar2(2048)|  yes|  null|  (弃用)
|newValue|  varchar2(2048)|  yes|  null|  变更后数据
|changed  |number|  yes|  null|  (弃用)
|isDelete|  number|  yes|  0|  是否删除。0：否，1：是。

### log 日志
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|OBJID | VARCHAR2(32) | YES | null | 日志记录对象，对应DOCBASE(FORMBASE)表中的ID，若为登录日志则保存用户ID。|
|OBJNAME | VARCHAR2(256) | YES | null | 日志记录对象名称，根据日志类型不同存放文档名称、分类名称_表单信息或者用户姓名。权限资源管理如果勾选记录日志，存放资源对应的模块(菜单)ID。(弃用)|
|MID | VARCHAR2(32) | YES | null | 日志类型，对应SELECTITEMTYPE中的业务操作日志类型。|
|LOGTYPE | VARCHAR2(32) | YES | null | |
|LOGDESC | CLOB | YES | null | 日志内容|
|SUBMITOR | VARCHAR2(32) | YES | null | 操作者|
|SUBMITDATE | VARCHAR2(10) | YES | null | 操作日期|
|SUBMITTIME | VARCHAR2(8) | YES | null | 操作时间|
|SUBMITIP | VARCHAR2(256) | YES | null | IP地址|
|COL1 | VARCHAR2(256) | YES | null | 记录表单日志存放formbase.jsp，记录方法调用日志存放对象名称(sysrole|sysperms|nodeinfo|forminfo|workf lowinfo|reportdef|category)。|
|COL2 | VARCHAR2(256) | YES | null | (备用)|
|COL3 | VARCHAR2(256) | YES | null | (备用)|
|ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。|


## 权限
### permissionBatchAction
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objName  |varchar2(255)|  yes  |null|  名称
|objDesc  |varchar2(2048|  yes  |null|  描述
|type  |number  |yes|  null  |类型，1：授权，2：移交。
|reportId|  varchar2(32)|  yes  |null|  报表，对应reportdef表中的id字段。
|fieldId  |varchar2(32)  |yes|  null|  字段
|formId  |varchar2(32)  |yes  |null|  表单
|optType  |varchar2(255)  |yes|  null|  权限类型，3：查看，15：编辑，105：删除，165：共享，多个以“,”分隔。
|viewLayoutId|  varchar2(32)|  yes  |null|  查看布局
|editLayoutId|  varchar2(32)|  yes  |null|  编辑布局
|viewPriority|  number  |yes  |null|  查看布局优先级
|editPriority|  number  |yes  |null|  编辑布局优先级
|operationObj|  varchar2(32)|  yes  |null|  操作对象
|targetObj|  varchar2(32)  |yes  |null|  目标对象
|isDelete  |number  |yes|  null|  是否逻辑删除，0：否，1：是。
|cardType  |number  |yes|  0  |卡片类型，0：结果包含流程表单，1：仅包含表单，2：仅包含流程。

### permissionBatchActionDetail
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objName|  varchar2(255)  |yes|  null|  名称
|fieldId|  varchar2(32)  |yes  |null|  字段
|unionFieldId|  varchar2(32)|  yes  |null|  主表单关联字段
|categoryId  |varchar2(32)  |yes|  null|  分类
|formId  |varchar2(32)  |yes  |null|  表单
|actionId  |varchar2(32)  |yes|  null|  批量权限转移配置，对应|permissionbatchaction表中的id字段。
|optType  |varchar2(255)  |yes|  null|  权限类型，3：查看，15：编辑，105：删除，165：共享，多个以“,”分隔。
|viewLayoutId|  varchar2(32)|  yes|  null|  查看布局
|editLayoutId|  varchar2(32)|  yes|  null|  编辑布局
|viewPriority|  number|  yes  |null|  查看布局优先级
|editPriority|  number|  yes  |null|  编辑布局优先级
|isDelete  |number|  yes|  null|  是否逻辑删除，0：否，1：是。
|type  |number|  yes|  null  |类型，1：授权，2：移交。
|workflowInfoId  |varchar2(50)|  yes|  null|  流程


### permissionBatchActionGroup
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objName  |varchar2(128)|  yes|null|  组名称
|objDesc  |varchar2(256)|  yes|null|  描述
|permissionBatchActionIds|  varchar2(1024)  |yes|  null|  批量权限转移设置，对应permissionbatchaction表中的id字段，多个以“,”分隔。
|objOrder|  number|  yes|  '0'|顺序
|isDelete|  number|  yes|  '0'|是否逻辑删除，0：否，1：是。

### permissionDetail 权限明细
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|ruleId|  varchar2(32)|  yes|  null  |权限规则id，对应[permissionRule](/oaSystem/oaTables/#permissionRule)表的 id字段
|objId  |varchar2(32)  |yes|  null  |规则对象id，对应如：uf表中requestid字段
|objTable|  varchar2(32)|  yes|  null|  权限对象类型，如docbase，uf表|
|objField|  clob  |yes| null|  权限对象对应字段id
|orgId|  varchar2(32)|  yes| null|  操作权限的组织部门id，对应orgunit表的id字段操作权限的人员id，对应humres表的id字段
|userId|  varchar2(32)|  yes|  null  |???
|isAllUser|  number|  yes|  null|  是否所有员工，默认所有员工
|minSecLevel|  number|  yes|null|  最小安全级别
|maxSecLevel|  number|  yes|null|  最大安全级别
|<span id="permissionRule">optType</span>  |number|  yes|  null|  权限类型，2：创建，3：查看，6：监控,9：到期提醒，13：督办,15：编辑，105：删除，165：共享
|docAttOptType|  number|  yes  |null  |对应文档类型
|wfOptType  |number|  yes  |null  |对应流程类型
|stationId  |varchar2(32)|  yes|  null|  操作权限的岗位id，对应stationinfo表的 id字段
|isDelete  |number|  yes|  0  |是否逻辑删除，1：是，0：否


### permissionRule 权限规则
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|objId  |varchar2(32)|  yes  |null|  规则对象id，对应如：uf表中requestid字段
|isType  |number|  yes|  null|  权限规则类型
|objTable  |varchar2(32)  |yes|  null  |权限规则对应对象类型，如docbase，uf表
|objField  |clob|  yes|  null|  权限规则调用字段id
|shareType  |varchar2(32)  |yes  |null|  权限规则共享操作类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的共享类型(id：402881e60bf4f747010bf4fcad5b0005 )。
|roleType  |varchar2(32)  |yes  |null|  是否受角色作用域控制，0：否，1：是。
|orgObjType  |varchar2(32)  |yes  |null|  组织单元类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的共享组织单元定义(id：402881ea0bf559c7010bf55e479f0013 )。
|orgShareType  |varchar2(32)|  yes|  null|  作用域，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的作用域(id：402881ea0bfa0b45010bfa18ccee000 9)。
|formFieldId  |varchar2(32)|  yes|  null|  相关字段，权限规则调用字段id
|roleObjId  |varchar2(32)  |yes|  null  |角色id，对应[sysRole](/oaSystem/oaTables/#sysRole)的id字段
|userShareType  |varchar2(32)  |yes|  null|  岗位作用域，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的岗位关系定义(id：402880151176095801117665f7c3000 9)。
|orgUnitType|  varchar2(32)  |yes|  null|  组织类型
|orgManager  |number  |yes|  null|  组织部门经理，0：安全级别，1：部门经理。
|userObjType  |varchar2(32)|  yes  |null|  人员类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的共享人员定义(id：402881ea0bf559c7010bf55b290a000 5)。
|orgObjId  |clob  |yes  |null  |组织单元id，对应orgunit的id字段
|userIds  |clob  |yes  |null  |拥有操作权限的用户id，对应humres表的id，格式为'xxxx,xxxx,xxxx'
|minSecLevel  |number  |yes|  null|  最低安全级别,相对于humres人员表seclevel安全级别字段而言
|wfOperatorNodeId  |varchar2(32)  |yes|  null|  节点操作者，对应nodeinfo的id字段
|maxSecLevel  |number  |yes|  null  |最高安全级别,相对于humres人员表seclevel安全级别字段而言
|optType  |number|  yes|  null|  操作类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的权限操作类型(id：402880371fb07b8d011fb0889c890002),2：创建，3：查看，6：监控，9：到期提醒，13：督办，15：编辑，105：删除，165：共享
|docAttOptType  |number  |yes|  null  |文档附件操作类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的权限操作类型(id：402881ea0bfa7679010bfa854d8a000e),1：附件不查看，3：附件查看，15：附件下载，105：附件删除。
|wfOptType  |number  |yes|  null|  流程操作方式，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的流程操作方式(id：402881ea0bfa7679010bfa86f3f70016 )。
|stationObjType  |varchar2(32)  |yes  |null  |岗位类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的共享岗位定义(id：297e828210f211130110f21a5ae0000 6)。
|stationId  |varchar2(32)|  yes|  null|  岗位id，对应stationinfo的id字段
|orgRefType  |varchar2(32)|  yes|  null|  组织维度，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的组织维度(id：402881e510e8223c0110e83c3601001 6)。
|layoutId  |varchar2(32)|  yes|  null|  pc页面编辑布局,对应formlayout的id字段
|layoutId1  |varchar2(32)|  yes|  null|  pc页面显示布局,对应formlayout的id字段
|priority  |number|  yes|  null|  pc对应优先级别
|detailFilter|  char(1)|  yes|  null|  操作详细描述
|isDefault  |number|  yes|  null|  是否缺省默认
|isDelete  |number|  yes|  0  |是否逻辑删除,1：是，0：否
|restrictionsField  |varchar2(2048)|  yes|  ''  |冗余字段
|fieldOf  |varchar2(2048)  |yes  |''|  冗余字段
|nodeId  |varchar2(32)|  yes|  null|  节点id，对应nodeinfo的id字段
|notifyDefineId|  varchar2(32)  |yes  |null|  提醒关联字段，对应[notifyDefine](/oaSystem/oaTables/#notifyDefine)表id
|condition  |varchar2(2048)|  yes  |null|  出口条件
|orderOpt  |varchar2(32)|  yes  |null|  依次逐个审批排序方式，，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的依次逐个审批排序方式(id：03650e8b39d04b128f06cff6e11be5 94)。
|copyRuleId|  varchar2(32)|  yes  |null|  单条权限id，对应[permissionRule](/oaSystem/oaTables/#permissionRule)表的id字段,用于单条权限重构功能
|mobileLayoutId  |varchar2(32)|  yes  |null|  手机页面编辑布局,对应formlayout的id字段手机页面显示布局,对应formlayout的id字段
|mobileLayoutId1|  varchar2(32)|  yes  |null
|mobilePriority  |number|  yes|  null|  手机对应优先级别


### <span id="sysPerms">sysPermResLink</span> 权限资源关联表
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|permId|  varchar2(32)|  no|  null|  权限，对应[sysPerms](/oaSystem/oaTables/#sysPerms)表中的id字段。
|resId|  varchar2(32)|  no|  null|  资源，对应[sysResource](/oaSystem/oaTables/#sysResource)表中的id字段。

### sysPerms 权限标识
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|permName|  varchar2(64)|  yes  |null|  权限标识
|<span id="sysResource">operation</span>|  varchar2(128)|  yes  |null|  权限名称
|permDesc|  varchar2(256)|  yes|  null|  描述
|objType  |varchar2(32)|  yes|  null|  类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)表中的权限类型。
|isDelete|  number|  yes  |0  |是否逻辑删除，0：否，1：是。


### sysResource 资源
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|resName|  varchar2(64)|  yes|  null|  名称
|resType|  number|  yes|  null  |资源类型,0：url，1：function。
|resString|  varchar2(256)|  yes  |null|  资源串
|pid  |varchar2(32)|  yes|  null|  系统模块(弃用)
|objType|  varchar2(32)  |yes  |null|  资源类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)中的资源类型。
|resDesc|  varchar2(256)  |yes  |null|  描述
|logType|  varchar2(32)  |yes  |null|  日志类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)中的日志类型。
|<span id="sysRole">isLog</span>|  number  |yes|  null|  是否记录日志，0：否，1：是。
|col1|  varchar2(256)  |yes|  null|  (备用)
|col2|  varchar2(256)  |yes|  null|  (备用)
|col3|  varchar2(256)  |yes|  null|  (备用)
|isDelete|  number|  yes|  0  |是否逻辑删除，0：否，1：是。


## 设置项
### setItem 系统设置项
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|setItemTypeId|  varchar2(32)  |yes|  null  |类型id，对应[setItemType](/oaSystem/oaTables/#setItemType)表中的id字段。
|itemName  |varchar2(256)|  yes  |null  |名称
|itemValue  |varchar2(256)|  yes  |null  |值
|itemValueType|  number  |yes|  null  |(弃用)
|<span id = "setItemType">itemDesc</span>  |varchar2(256)|  yes|  null|  描述
|itemOrder  |varchar2(256)|  yes|  null  |顺序
|col1  |varchar2(256)|  yes|  null  |(备用)
|col2  |varchar2(256)|  yes|  null  |(备用)
|col3  |varchar2(256)|  yes|  null  |(备用)
|isDelete  |number  |yes|  0  |是否逻辑删除，0：否，1：是。


### setItemType 系统设置项类型
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|itemTypeName  |varchar2(256)  |yes|  null|  类型名称
|itemTypeOrder  |number  |yes|  null|  顺序
|col1  |varchar2(256)  |yes|  null|  (备用)
|col2  |varchar2(256)  |yes|  null|  (备用)
|col3  |varchar2(256)  |yes|  null|  (备用)
|isDelete  |number  |yes|  0  |是否逻辑删除，0：否，1：是。

## 附件
### attach 附件
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
|objName  |  varchar2(256)  |yes  |null|  文件名称。如果是html文档正文则保存文档标题.html。
|fileDir  |  varchar2(256)  |yes  |null|  文件实际存放的路径。规则：“系统设置文件保存路径/当前年月/随机字母/32位字符串”，详见com.eweaver.document.file.fileupload.get filename()。
|fileType|  varchar2(256)  |yes|  null  |文件类型。如text/html、 application/vnd.ms-excel等。
|isZip  |number  |yes  |null  |是否经过压缩。0：否，1：是。
|isEncrypt|  number  |yes  |null  |是否经过加密。0：否，1：是。目前系统默认为0。
|col1  |varchar2(256)  |yes  |null  |(备用)
|col2  |varchar2(256)  |yes  |null  |(备用)
|col3  |varchar2(256)  |yes  |null  |(备用)
|isDelete  |number  |yes  |0  |是否删除。0：否，1：是。
|fileSize  |number(20,0)  |yes|  null|  文件大小。单位：byte。



## Excel导入导出
### excelopt Excel导入导出配置
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no|  null  | 主键 |
|objName|  varchar2(256)|  yes  |null|  任务名称
|objType|  number|  yes|  null|  类型，0：分类，1：流程，2：人员卡片。
|objId  |varchar2(50)  |yes  |null  |类型为分类存放categoryid，类型为流程存放workflowid。
|isInclude|  number  |yes  |'0'  |(弃用)
|creator|  varchar2(50)|  yes|  null  |创建用户，对应humres表中的id字段。
|isDelete|  number  |yes  |'0'|  是否逻辑删除，0：否，1：是。

## 字段编码
### sequence 字段编码流水号配置
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id  |varchar2(32)|  no|  null  | 主键 |
| NAME | VARCHAR2(500) | YES | null | 序号名称| 
| DESCRIPTION | VARCHAR2(200) | YES | null | 序号描述| 
| STARTNO | NUMBER | YES | null | 序号初始编号| 
| INCREMENTNO | NUMBER | YES | null | 序号增量| 
| LOOPTYPE | NUMBER | YES | null | 循环方式0-3分别为无年月日| 
| CURRENTNO | NUMBER | YES | null | 当前编号| 
| MODIFYDATE | CHAR(10) | YES | null | 修改时间| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

## 定时任务
### taskLog 任务管理运行日志
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id  |varchar2(32)|  no|  null  | 主键 |
| OBJID | VARCHAR2(32) | YES | null | 关联的任务ID| 
| NEXTFIRETIME | VARCHAR2(32) | YES | null | 此任务下次执行时间| 
| FIRETIMES | VARCHAR2(32) | YES | null | 此任务执行次数| 
| THISFIRETIME | VARCHAR2(32) | YES | null | 此任务当前已经执行的时间| 
| ISCOMPLETE | NUMBER(5,0) | YES | null | 此任务是否已经结束| 
| ISDELETE | NUMBER(5,0) | YES | null | 此日志是否被删除| 

### taskModel 用户定义任务的配置信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id  |varchar2(32)|  no|  null  | 主键 |
| TASKNAME | VARCHAR2(32) | NO | null | 任务名称| 
| TASKCODE | VARCHAR2(32) | YES | null | 任务编码| 
| ISAUTOSTART | NUMBER(5,0) | YES | null | 是否自动启动| 
| TRIGGERTYPE | NUMBER(5,0) | YES | null | 任务周期触发方式,0-5分别为:分钟 小时 天 周月 仅一次| 
| STARTTIME | VARCHAR2(32) | NO | null | 任务开始时间| 
| ENDTIME | VARCHAR2(32) | NO | null | 任务结束时间| 
| INTERVALTIME | NUMBER(5,0) | YES | null | 任务间隔周期| 
| TIMESPOT | VARCHAR2(128) | YES | null | 具体时间，如 一周中的哪几天，或月中的哪几天。| 
| MONTHS | VARCHAR2(128) | YES | null | 月 哪几个月| 
| EVENTTYPE | NUMBER(5,0) | YES | null | 事件类型| 
| EVENTACTION | VARCHAR2(1024) | NO | null | 事件类| 
| STATUS | NUMBER(5,0) | YES | null | 任务状态，1,running 0,stop| 
| TASKTYPE | NUMBER(5,0) | YES | null | 任务触发类型:0-2 分别为:SQL任务 程序任务流程 分类| 
| STARTMODEL | NUMBER(5,0) | YES | null | 启动模式 0 立即启动 1 手动启动| 
| ISDELETE | NUMBER(5,0) | YES | null | 任务是否被删除| 
| JOBTASKIDS | VARCHAR2(4000) | YES | null | 流程或分类任务关联ID| 
| JOBTASKNAMES | VARCHAR2(512) | YES | null | 程或分类任务关联名称| 
| CREATEDATE | VARCHAR2(32) | YES | null | 创建日期| 
| CREATOR | VARCHAR2(32) | YES | null | 任务创建者| 
| TIPS | VARCHAR2(512) | YES | null | 备注| 
| RUNTIMES | NUMBER | YES | null | 运行次数| 


## 树形配置
### treeViwerInfo 树形配置
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id  |varchar2(32)|  no|  null  | 主键 |
| TREETYPE | NUMBER(4,0) | YES | null | 树形数据来源 1表示组织结构树，2表示分类体系树，3表示表单结构树，4表示选择项树形，5表示自定义树形| 
| TREEFORMID | VARCHAR2(32) | YES | null | 当TREETYPE==3时使用 保存用于建表单结构树的表单| 
| TREEFIELDNAME | VARCHAR2(250) | YES | null | 当TREETYPE==3时使用  结点显示名称字段| 
| DATAFORMID | VARCHAR2(32) | YES | null | 节点数据来源| 
| DATAKEYFIELD | VARCHAR2(250) | YES | null | 数据关联字段| 
| DATAWHERE | VARCHAR2(250) | YES | null | 表单查询条件| 
| DATAVIEWTEXT | VARCHAR2(1000) | YES | null | 结点文本| 
| TREEFIELDKEY | VARCHAR2(30) | YES | null | 当treeType==3时，表示上下级关系的关联字段| 
| TREEFIELDID | VARCHAR2(32) | YES | null | 结点标识字段| 
| TITLE | VARCHAR2(1024) | YES | '????' | 页面标题| 
| ISDELETE | VARCHAR2(1024) | YES | 0 | 是否删除 0表示否 1表示是| 
| TREEWHERE | VARCHAR2(1024) | YES | '' | 当treeType==3时，树节点查询条件| 
| VIEWTYPE | VARCHAR2(1024) | YES | 2 | 树形样式 1表示目录树显示，2表示横向组织树，3表示纵向组织树，4表示Browser框显示，5表示导航页显示| 
| SUBTREE | VARCHAR2(1024) | YES | '' | 级联子树信息| 
| MENUINFO | VARCHAR2(2048) | YES | null | 菜单信息| 
| MENUFUN | VARCHAR2(1024) | YES | null | 菜单接口函数| 
| OPTIONS | VARCHAR2(2048) | YES | null | 保存其他参数选项| 
| MODULEID | VARCHAR2(32) | YES | null | 存放配置的树形所在模块| 
| USERFUN | VARCHAR2(2000) | YES | null | 用户自定义函数| 
| VIEWORDER | NVARCHAR2(200) | YES | null | 表单查询顺序| 


## 员工信息
### humres 人员基本信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OBJNO | VARCHAR2(128) | YES | null | 工号| 
| OBJNAME | VARCHAR2(128) | YES | null | 姓名| 
| GENDER | VARCHAR2(32) | YES | null | 性别，对应SELECTITEMTYPE表中的性别(ID：402881e90cba854b010cba9c4f56000 b)| 
| STATION | VARCHAR2(1024) | YES | null | 岗位，多个(兼岗)以“,”分隔。| 
| DUTY | VARCHAR2(256) | YES | null | 40.私人邮箱| 
| WORKADDR | VARCHAR2(256) | YES | null | 27.社保缴纳地| 
| OFFICEADDR | VARCHAR2(256) | YES | null | 46.现居住地址| 
| HRSTATUS | VARCHAR2(32) | YES | null | 人员状态，对应SELECTITEMTYPE表中的人事状态(ID：402881ea0b1c751a010b1ccf7dbe0002)| 
| WORKSTATUS | VARCHAR2(32) | YES | null | 工作状态，对应SELECTITEMTYPE表中的工作类型(ID：402881ea0b198b1f010b19ff244c000 2)| 
| TEL1 | VARCHAR2(128) | YES | null | 文本| 
| TEL2 | VARCHAR2(128) | YES | null | 36.联系电话| 
| TEL3 | VARCHAR2(128) | YES | null | 37.紧急联络人/电话20140625| 
| FAX | VARCHAR2(128) | YES | null | 56.个人身份| 
| EMAIL | VARCHAR2(128) | YES | null | 39.公司邮箱| 
| IMGFILE | VARCHAR2(256) | YES | null | 照片，对应ATTACH表中的ID字段。| 
| OBJDESC | CLOB | YES | null | 75.奖惩记录| 
| DSPORDER | NUMBER | YES | null | 顺序| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0：否，1：是。| 
| SECLEVEL | NUMBER | YES | null | 安全级别| 
| COL1 | VARCHAR2(256) | YES | null | 32.身份证号码| 
| COL2 | VARCHAR2(256) | YES | null | 62.其他银行开户行20140625| 
| COL3 | VARCHAR2(256) | YES | null | 66.是否在培训服务期内20140625| 
| RTXNO | VARCHAR2(32) | YES | null | RTXNO，与RTX服务器对应。| 
| ORGID | VARCHAR2(32) | YES | null | 所属组织，主岗对应的组织。| 
| EXTINTFIELD0 | NUMBER | YES | null | 可调休天数-废弃| 
| EXTINTFIELD1 | NUMBER | YES | null | 38.分机号| 
| EXTINTFIELD2 | NUMBER | YES | null | 无效| 
| EXTINTFIELD3 | NUMBER | YES | null | | 
| EXTINTFIELD4 | NUMBER | YES | null | | 
| EXTINTFIELD5 | NUMBER | YES | null | | 
| EXTINTFIELD6 | NUMBER | YES | null | | 
| EXTINTFIELD7 | NUMBER | YES | null | | 
| EXTINTFIELD8 | NUMBER | YES | null | | 
| EXTINTFIELD9 | NUMBER | YES | null | | 
| EXTNUMFIELD0 | NUMBER(24,2) | YES | null | 63.可调休天数| 
| EXTNUMFIELD1 | NUMBER(24,2) | YES | null | 岗位薪酬| 
| EXTNUMFIELD2 | NUMBER(24,2) | YES | null | 相机补贴| 
| EXTNUMFIELD3 | NUMBER(24,2) | YES | null | 笔记本补贴| 
| EXTNUMFIELD4 | NUMBER(24,2) | YES | null | 无效| 
| EXTNUMFIELD5 | NUMBER(24,2) | YES | null | 无效| 
| EXTNUMFIELD6 | NUMBER(24,2) | YES | null | 无效| 
| EXTNUMFIELD7 | NUMBER(24,2) | YES | null | 72.住勤补贴| 
| EXTNUMFIELD8 | NUMBER(24,2) | YES | null | | 
| EXTNUMFIELD9 | NUMBER(24,2) | YES | null | | 
| EXTTEXTFIELD0 | VARCHAR2(256) | YES | null | 68.手机包干标准| 
| EXTTEXTFIELD1 | VARCHAR2(256) | YES | null | 65.是否具有导师资格| 
| EXTTEXTFIELD2 | VARCHAR2(256) | YES | null | 19.薪酬体系| 
| EXTTEXTFIELD3 | VARCHAR2(256) | YES | null | 71.是否享用省外补贴| 
| EXTTEXTFIELD4 | VARCHAR2(256) | YES | null | 公交包干标准| 
| EXTTEXTFIELD5 | VARCHAR2(256) | YES | null | 培训标准-废弃| 
| EXTTEXTFIELD6 | VARCHAR2(256) | YES | null | 51.毕业学校| 
| EXTTEXTFIELD7 | VARCHAR2(256) | YES | null | 57.劳动保障号| 
| EXTTEXTFIELD8 | VARCHAR2(256) | YES | null | 67.入选梯队类别| 
| EXTTEXTFIELD9 | VARCHAR2(256) | YES | null | 档案号-废弃| 
| EXTDATEFIELD0 | VARCHAR2(32) | YES | null | 24.入职时间| 
| EXTDATEFIELD1 | VARCHAR2(32) | YES | null | 25.转正时间| 
| EXTDATEFIELD2 | VARCHAR2(32) | YES | null | 41.毕业时间| 
| EXTDATEFIELD3 | VARCHAR2(32) | YES | null | 28.最近一期劳动合同期限起11| 
| EXTDATEFIELD4 | VARCHAR2(32) | YES | null | 30.离职时间| 
| EXTTIMEFIELD0 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD1 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD2 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD3 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD4 | VARCHAR2(32) | YES | null | | 
| EXTDESCFIELD0 | CLOB | YES | null | | 
| EXTDESCFIELD1 | CLOB | YES | null | 79.职称及专业证书| 
| EXTDESCFIELD2 | CLOB | YES | null | 离职原因-废弃| 
| EXTDESCFIELD3 | CLOB | YES | null | 离职去向-废弃| 
| EXTDESCFIELD4 | CLOB | YES | null | 78.项目管理经历| 
| EXTFORMATTEXTFIE LD0 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD1 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD2 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD3 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD4 | CLOB | YES | null | | 
| EXTCHECKBOXFIELD 0 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 1 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 2 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 3 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 4 | NUMBER | YES | null | | 
| EXTSELECTITEMFIEL D0 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D1 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D2 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D3 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D4 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D5 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D6 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D7 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D8 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D9 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD0 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD1 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD2 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD3 | VARCHAR2(32) | YES | null | 14.所属项目组| 
| EXTREFOBJFIELD4 | VARCHAR2(32) | YES | null | 07.所属部门| 
| EXTREFOBJFIELD5 | VARCHAR2(32) | YES | null | 09.产品线| 
| EXTREFOBJFIELD6 | VARCHAR2(32) | YES | null | 09.产品线| 
| EXTREFOBJFIELD7 | VARCHAR2(32) | YES | null | 招聘台账| 
| EXTREFOBJFIELD8 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD9 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD10 | VARCHAR2(32) | YES | null | 无效| 
| EXTREFOBJFIELD11 | VARCHAR2(32) | YES | null | 54.招聘来源| 
| EXTREFOBJFIELD12 | VARCHAR2(32) | YES | null | 顶岗租赁入场| 
| EXTREFOBJFIELD13 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD14 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD15 | VARCHAR2(32) | YES | null | 23.直接上级| 
| EXTMREFOBJFIELD0 | CLOB | YES | null | | 
| EXTMREFOBJFIELD1 | CLOB | YES | null | | 
| EXTMREFOBJFIELD2 | CLOB | YES | null | | 
| EXTMREFOBJFIELD3 | CLOB | YES | null | | 
| EXTMREFOBJFIELD4 | CLOB | YES | null | | 
| EXTMREFOBJFIELD5 | CLOB | YES | null | | 
| EXTMREFOBJFIELD6 | CLOB | YES | null | | 
| EXTMREFOBJFIELD7 | CLOB | YES | null | | 
| EXTMREFOBJFIELD8 | CLOB | YES | null | | 
| EXTMREFOBJFIELD9 | CLOB | YES | null | | 
| EXTATTACHFIELD0 | VARCHAR2(32) | YES | null | 无效| 
| EXTATTACHFIELD1 | VARCHAR2(32) | YES | null | 无效| 
| EXTATTACHFIELD2 | VARCHAR2(32) | YES | null | 奖励证书| 
| EXTATTACHFIELD3 | VARCHAR2(32) | YES | null | 合同签订记录| 
| EXTATTACHFIELD4 | VARCHAR2(32) | YES | null | | 
| FIELD001 | VARCHAR2(256) | YES | null | | 
| ORGIDS | VARCHAR2(1024) | YES | null | 组织，所有岗位(含兼岗)对应的组织，多个以“,”分隔。| 
| MAINSTATION | VARCHAR2(32) | YES | null | 主岗，对应STATIONINFO表中的ID字段。| 
| EXTTEXTFIELD10 | VARCHAR2(256) | YES | null | 59.招行卡号| 
| EXTTEXTFIELD11 | VARCHAR2(256) | YES | null | 岗位级别| 
| EXTTEXTFIELD12 | VARCHAR2(256) | YES | null | 20.员工性质| 
| EXTTEXTFIELD13 | VARCHAR2(256) | YES | null | 18员工性质| 
| EXTTEXTFIELD14 | VARCHAR2(256) | YES | null | 64.入职培训| 
| EXTTEXTFIELD15 | VARCHAR2(256) | YES | null | 48.户口性质| 
| EXTTEXTFIELD16 | VARCHAR2(256) | YES | null | 其他联系电话| 
| EXTTEXTFIELD17 | VARCHAR2(256) | YES | null | 英语级别-废弃| 
| EXTTEXTFIELD18 | VARCHAR2(256) | YES | null | 55.是否签三方| 
| EXTTEXTFIELD19 | VARCHAR2(256) | YES | null | 45.家庭住址| 
| EXTTEXTFIELD20 | VARCHAR2(256) | YES | null | 52.专业| 
| EXTTEXTFIELD21 | VARCHAR2(256) | YES | null | 口语-废弃| 
| EXTTEXTFIELD22 | VARCHAR2(256) | YES | null | 培训标准-废弃| 
| EXTTEXTFIELD23 | VARCHAR2(256) | YES | null | 58.门禁权限| 
| EXTTEXTFIELD24 | VARCHAR2(256) | YES | null | 英文名-废弃| 
| EXTTEXTFIELD25 | VARCHAR2(256) | YES | null | 43.原单位| 
| EXTTEXTFIELD26 | VARCHAR2(256) | YES | null | 44.原工作岗位| 
| EXTTEXTFIELD27 | VARCHAR2(256) | YES | null | 主要社会关系-废弃| 
| EXTTEXTFIELD28 | VARCHAR2(256) | YES | null | 47.户籍所在地| 
| EXTTEXTFIELD29 | VARCHAR2(256) | YES | null | 部门调动-废弃| 
| EXTINTFIELD10 | NUMBER | YES | null | 是否外经证持有人| 
| EXTINTFIELD11 | NUMBER | YES | null | | 
| EXTINTFIELD12 | NUMBER | YES | null | | 
| EXTINTFIELD13 | NUMBER | YES | null | | 
| EXTINTFIELD14 | NUMBER | YES | null | | 
| EXTNUMFIELD10 | NUMBER(24,2) | YES | null | 住宿标准| 
| EXTNUMFIELD11 | NUMBER(24,2) | YES | null | | 
| EXTNUMFIELD12 | NUMBER(24,2) | YES | null | | 
| EXTNUMFIELD13 | NUMBER(24,2) | YES | null | | 
| EXTNUMFIELD14 | NUMBER(24,2) | YES | null | | 
| EXTTEXTFIELD30 | VARCHAR2(256) | YES | null | 60.浦发卡号| 
| EXTTEXTFIELD31 | VARCHAR2(256) | YES | null | 61.其他银行卡号| 
| EXTTEXTFIELD32 | VARCHAR2(256) | YES | null | 学历| 
| EXTTEXTFIELD33 | VARCHAR2(256) | YES | null | 12.归属地| 
| EXTTEXTFIELD34 | VARCHAR2(256) | YES | null | 工龄-废弃| 
| EXTDATEFIELD5 | VARCHAR2(32) | YES | null | | 
| EXTDATEFIELD6 | VARCHAR2(32) | YES | null | 29..最近一期劳动合同期限止| 
| EXTDATEFIELD7 | VARCHAR2(32) | YES | null | 34.出生年月| 
| EXTDATEFIELD8 | VARCHAR2(32) | YES | null | 无效| 
| EXTDATEFIELD9 | VARCHAR2(32) | YES | null | 42.首次参加工作时间20140625| 
| EXTTIMEFIELD5 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD6 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD7 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD8 | VARCHAR2(32) | YES | null | | 
| EXTTIMEFIELD9 | VARCHAR2(32) | YES | null | | 
| EXTDESCFIELD5 | CLOB | YES | null | 74.培训经历| 
| EXTDESCFIELD6 | CLOB | YES | null | 73.职业规划| 
| EXTDESCFIELD7 | CLOB | YES | null | 特长| 
| EXTDESCFIELD8 | CLOB | YES | null | 76.评优记录| 
| EXTDESCFIELD9 | CLOB | YES | null | 77.任职经历| 
| EXTFORMATTEXTFIE LD5 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD6 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD7 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD8 | CLOB | YES | null | | 
| EXTFORMATTEXTFIE LD9 | CLOB | YES | null | | 
| EXTCHECKBOXFIELD 5 | NUMBER | YES | null | 
| EXTCHECKBOXFIELD 6 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 7 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 8 | NUMBER | YES | null | | 
| EXTCHECKBOXFIELD 9 | NUMBER | YES | null | | 
| EXTSELECTITEMFIEL D10 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D11 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D12 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D13 | VARCHAR2(32) | YES | null | | 
| EXTSELECTITEMFIEL D14 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD16 | VARCHAR2(32) | YES | null | 16.业务纬度组织| 
| EXTREFOBJFIELD17 | VARCHAR2(32) | YES | null | 17.业务纬度岗位| 
| EXTREFOBJFIELD18 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD20 | VARCHAR2(32) | YES | null | | 
| EXTREFOBJFIELD19 | VARCHAR2(32) | YES | null | | 
| EXTATTACHFIELD5 | VARCHAR2(32) | YES | null | | 
| EXTATTACHFIELD6 | VARCHAR2(32) | YES | null | | 
| EXTATTACHFIELD7 | VARCHAR2(32) | YES | null | | 
| EXTATTACHFIELD8 | VARCHAR2(32) | YES | null | | 
| EXTATTACHFIELD9 | VARCHAR2(32) | YES | null | | 
| HTMLSIGNATURE | VARCHAR2(2000) | YES | null | 电子签章| 
| extselectitemfield0 | VARCHAR2(32) | YES | null | 09.省份| 
| extselectitemfield1 | VARCHAR2(32) | YES | null | 10.城市| 
| extselectitemfield2 | VARCHAR2(32) | YES | null | 11.区县| 
| extselectitemfield3 | VARCHAR2(32) | YES | null | 21.用工性质| 
| extselectitemfield4 | VARCHAR2(32) | YES | null | 50.学历状况| 
| extselectitemfield5 | VARCHAR2(32) | YES | null | 是否对外租凭| 
| extselectitemfield6 | VARCHAR2(32) | YES | null | 35.婚姻状况| 
| extselectitemfield7 | VARCHAR2(32) | YES | null | 岗位类别| 
| extselectitemfield8 | VARCHAR2(32) | YES | null | 岗位序列| 
| extselectitemfield9 | VARCHAR2(32) | YES | null | 18.岗位等级| 
| extselectitemfield10 | VARCHAR2(32) | YES | null | 人员性质| 
| extselectitemfield11 | VARCHAR2(32) | YES | null | 49.政治面貌| 
| extselectitemfield12 | VARCHAR2(32) | YES | null | 53.培养方式| 
| extselectitemfield13 | VARCHAR2(32) | YES | null | 31.离职类型| 
| extselectitemfield14 | VARCHAR2(32) | YES | null | 26.合同归属| 
| extselectitemfield15 | VARCHAR2(32) | YES | null | 13.是否总部平台办公| 
| extselectitemfield16 | VARCHAR2(32) | YES | null | 69.是否驻外| 
| extselectitemfield17 | VARCHAR2(32) | YES | null | 是否签竞业限制协议| 
| extselectitemfield18 | VARCHAR2(32) | YES | null | 是否签订竞业限制协议-弃| 
| extselectitemfield19 | VARCHAR2(32) | YES | null | 岗位级别新| 
| extselectitemfield20 | VARCHAR2(32) | YES | null | 归属地-省| 
| extselectitemfield21 | VARCHAR2(32) | YES | null | 归属地-市| 
| extselectitemfield22 | VARCHAR2(32) | YES | null | 归属地-县| 
| extselectitemfield23 | VARCHAR2(32) | YES | null | 成本中心| 
| extdatefield10 | VARCHAR2(32) | YES | null | 70.驻外日期起| 
| extdatefield11 | VARCHAR2(32) | YES | null | 驻外日期止| 
| extdatefield12 | VARCHAR2(32) | YES | null | 身份证有效期限起| 
| extdatefield13 | VARCHAR2(32) | YES | null | 身份证有效期限止| 
| exttextfield35 | VARCHAR2(256) | YES | null | 公积金账号| 
| exttextfield36 | VARCHAR2(256) | YES | null | | 
| exttextfield37 | VARCHAR2(256) | YES | null | 个人身份标记| 

### imgInfo 用户签章图片
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| USERID | VARCHAR2(64) | YES | null | 用户ID| 
| IMGNAME | VARCHAR2(512) | YES | null | 图片名称| 
| IMGSIZE | VARCHAR2(512) | YES | null | 图片大小(无用)| 
| IMGLASTMOD | VARCHAR2(256) | YES | null | (无用)| 
| ATTACHID | VARCHAR2(64) | YES | null | 对应ATTACH表中的ID字段| 
| ISDELETE | NUMBER | YES | '0' | 是否逻辑删除。0：否，1：是。| 

### personalSignature 用户自定义流程签字意见
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OBJVALUE | VARCHAR2(1024) | YES | null | 签字意见内容| 
| HUMRESID | VARCHAR2(32) | YES | null | 用户，对应HUMRES表中的ID字段。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### sysGroup 用户自定义组
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| GROUPDESC | VARCHAR2(255) | YES | null | 描述| 
| GROUPNAME | VARCHAR2(255) | YES | null | 名称| 
| GROUPTYPE | VARCHAR2(255) | YES | null | 组类型，1：公共组，2：私有组。| 
| CREATOR | VARCHAR2(32) | YES | null | 创建人| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| ORDERFIELD | VARCHAR2(32) | YES | null | 排序字段，对应FORMFIELD表中的ID字段。| 
| ORDERCONTENT | VARCHAR2(10) | YES | null | 排序方式，asc：升序，desc：降序。| 

### sysGroupHumres 用户自定义组用户
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| GROUPID | VARCHAR2(32) | NO | null | 自定义组，对应SYSGROUP表中的ID字段。| 
| HUMRESID | VARCHAR2(32) | NO | null | 用户| 

### sysUser 用户账户信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OBJID | VARCHAR2(32) | YES | null | 用户ID或岗位ID，若mtype为1对应 HUMRES中的ID字段，若mtype为2对应 STATIONINFO中的ID字段。| 
| LONGONNAME | VARCHAR2(256) | YES | null | 用户名| 
| LOGONPASS | VARCHAR2(256) | YES | null | 密码| 
| MTYPE | NUMBER | YES | null | 1:用户，2:角色中的岗位。| 
| ISCLOSED | NUMBER | YES | null | 账号状态，0:打开，1:关闭。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| BELONGTO | VARCHAR2(32) | YES | null | 从属主账号(弃用)| 
| ISMASTER | NUMBER | YES | null | 主副账号，1:主账号，2:副账号。(弃用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0:否，1:是。| 
| DYNAMICPASS | NUMBER | YES | null | 是否启用动态密码，0:否，1:是。| 
| ISUSBKEY | NUMBER | YES | null | 是否启用USBKEY，0:否，1:是。| 
| LANGUAGE | VARCHAR2(32) | YES | 'zh_CN' | 语言选择| 
| STYLE | VARCHAR2(32) | YES | 'default' | 传统EXTJS模式皮肤选择| 
| DEFVALUE | VARCHAR2(32) | YES | null | 默认签字意见，对应PERSONALSIGNATURE表中的ID字段。| 
| ISIP | VARCHAR2(32) | YES | '0' | 是否启用IP登录限制，0:否，1:是。| 

## 组织信息
### orgunit 组织单元信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(256) | YES | null | 组织单元名称| 
| TYPEID | VARCHAR2(32) | YES | null | 组织类型，对应ORGUNITTYPE中的ID字段。| 
| MGRID | VARCHAR2(32) | YES | null | 组织负责人(弃用)| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0：否，1：是。| 
| MTYPE | NUMBER | YES | null | (弃用)| 
| MOBJID | VARCHAR2(32) | YES | null | (弃用)| 
| OBJNO | VARCHAR2(256) | YES | null | 编码| 
| PAYTOUNIT | VARCHAR2(32) | YES | null | (弃用)| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| MSTATIONID | VARCHAR2(32) | YES | null | 组织负责岗位，对应STATIONINFO中的ID字段。| 
| UNITSTATUS | VARCHAR2(35) | YES | 402880d 31a04dfb a011a04e4db5f0003' | 组织单元状态，非活跃不显示，对应SELECTITEMTYPE组织单元状态。| 
| REFTYPE | VARCHAR2(32) | YES | null | 维度，对应SELECTITEMTYPE组织维度。| 
| ISROOT | NUMBER | YES | null | 是否根结点| 
| ORGINDEX | NUMBER | YES | null | 与RTX Dept对应| 

### orgunitLink 组织单元关联关系
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OID | VARCHAR2(32) | YES | null | 组织单元ID| 
| PID | VARCHAR2(32) | YES | null | 上级组织单元ID| 
| TYPEID | VARCHAR2(32) | YES | null | 维度，对应SELECTITEMTYPE组织维度。| 
| COL1 | VARCHAR2(1024) | YES | null | 指定维度下的组织单元关系，保存所有上级组织单元ID及自身ID，以“,”分隔。| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| PMSTATIONID | VARCHAR2(32) | YES | null | 上级管理岗位| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### orgunitType 组织单元类型
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(256) | YES | null | 类型名称| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| COL1 | VARCHAR2(256) | YES | null | 是否公司类型，0:否，1:是。| 
| COL2 | VARCHAR2(256) | YES | null | 类型级别| 
| COL3 | VARCHAR2(256) | YES | null | 颜色，用于组织结构图中显示。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 


## 岗位信息
### stationInfo 岗位基本信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| CODE | VARCHAR2(16) | YES | null | 编码| 
| ORGID | VARCHAR2(32) | YES | null | 所属组织单元| 
| POSITION1 | VARCHAR2(32) | YES | null | 职位| 
| OBJNAME | VARCHAR2(256) | YES | null | 岗位名称| 
| PARENTOBJID | VARCHAR2(32) | YES | null | 上级岗位| 
| MAXNUM | NUMBER | YES | null | 定编| 
| CURNUM | NUMBER | YES | null | 在编| 
| OBJDESC | CLOB | YES | null | 其它信息| 
| REFDOCID1 | VARCHAR2(32) | YES | null | (弃用)| 
| REFDOCID2 | VARCHAR2(32) | YES | null | (弃用)| 
| REFDOCID3 | VARCHAR2(32) | YES | null | (弃用)| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0：否，1：是。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| STATIONSTATUS | VARCHAR2(32) | YES | 402880d319eb817 20119eba4e1e70004' | 岗位状态，非活跃不显示，对应SELECTITEMTYPE岗位状态。| 
| REFTYPE | VARCHAR2(32) | YES | null | 组织维度| 
| STATIONTYPE | VARCHAR2(32) | YES | null | 岗位类别| 
| STATIONSEQUENCE | VARCHAR2(32) | YES | null | 岗位序列| 
| MINLEVEL | NUMBER | YES | null | 岗位等级下限| 
| MAXLEVEL | NUMBER | YES | null | 岗位等级上限| 

### stationLevelLink 岗位级别与岗位关联关系
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| LEVELID | VARCHAR2(32) | YES | null | 岗位级别，对应SELECTITEM中的ID字段。| 
| STATIONID | VARCHAR2(32) | YES | null | 岗位| 
| COL1 | VARCHAR2(32) | YES | null | (备用)| 
| COL2 | VARCHAR2(32) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### stationLink 岗位上下级关系信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| OID | VARCHAR2(32) | YES | null | 岗位| 
| PID | VARCHAR2(32) | YES | null | 上级岗位| 
| TYPEID | VARCHAR2(32) | YES | null | 组织维度| 
| PMSTATIONID | VARCHAR2(32) | YES | null | (弃用)| 
| PIDS | VARCHAR2(1024) | YES | null | 指定维度下的岗位上下级关系，保存所有上级岗位ID及自身ID，以“,”分隔。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 


## 角色信息
### sysRole 角色
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|roleName|  varchar2(128)|  yes|  null|  名称
|roleDesc|  varchar2(256)|  yes|  null|  描述
|roleType|  varchar2(32)|  yes|  null|  角色类型，对应[selectItemType](/oaSystem/oaTables/#selectItemTypeId)中的角色类型。
|isDelete|  number  |yes|  0  |是否逻辑删除，0：否，1：是。

### sysRolePermLink 角色权限关联
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|roleId  |varchar2(32)|  no|  null|  角色，对应[sysRole](/oaSystem/oaTables/#sysRole)表中的id字段。
|permId  |varchar2(32)|  no|  null|  权限，对应[sysPerms](/oaSystem/oaTables/#sysPerms)表中的id字段。

### sysUserRoleLink 用户角色关联
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
|id  |varchar2(32)|  no  |null  |主键
|userId  |varchar2(32)|  yes|  null|系统用户，对应sysuser表中的id字段。
|roleId|  varchar2(32)|  yes  |null|  角色，对应[sysRole](/oaSystem/oaTables/#sysRole)表中id字段。
|roleLevel|  varchar2(32)|  yes  |null  |角色级别(作用域)，对应orgunit表中的id字段。
|isDelete|  number|  yes|  0  |是否逻辑删除，0：否，1：是。

## 门户
### light_portal_tab 用户门户配置信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | 主键 |
| LABEL | VARCHAR2(255) | YES | null | 名称| 
| URL | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| CLOSEABLE | NUMBER(5,0) | YES | null | LIGHTPORTAL，默认0。| 
| EDITABLE | NUMBER(5,0) | YES | null | LIGHTPORTAL，默认1。| 
| MOVEABLE | NUMBER(5,0) | YES | null | LIGHTPORTAL，默认0。| 
| ALLOWADDCONTE NT | NUMBER(5,0) | YES | null | LIGHTPORTAL，默认1。| 
| COLOR | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| DEFAULTED | NUMBER(5,0) | YES | null | LIGHTPORTAL，默认0。| 
| COLBETWEEN | NUMBER(5,0) | YES | null | 列间隔(px)| 
| WIDTHS | VARCHAR2(255) | YES | null | 列宽度比例| 
| PORTLETWINDOWT YPE | VARCHAR2(255) | YES | null | 默认PortletWindow2。| 
| USERID | VARCHAR2(255) | YES | null | 默认role_public。| 
| PID | NUMBER | YES | 0 | 上级门户ID| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| ABSOLUTE | NUMBER | YES | 0 | 是否绝对定位，0：相对定位，1：绝对定位。| 
| ISSHOW | NUMBER | YES | 1 | 是否显示，0：否，1：是。| 
| DSPORDER | NUMBER | YES | 0 | 显示顺序| 
| MANAGEIDS | VARCHAR2(1000) | YES | null | 管理员，可定义门户元素、位置、样式等，对应HUMRES表中的ID。| 
| SCROLLS | NUMBER | YES | null | 门户滑动，1：无滑动效果，当大于1时WIDTHS需要填写每屏宽度比例，如设置为SCROLLS为2，WIDTHS可设为6,4,7,3。| 

### light_portlet 门户元素配置信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| PORTLETID | NUMBER(5,0) | NO | null | ID| 
| COLUMNNUMBER | NUMBER(5,0) | YES | null | 元素位置列，0：第一列，1：第二列……| 
| ROWNUMBER | NUMBER(5,0) | YES | null | 元素位置行，0：第一行，1：第二行……| 
| LABEL | VARCHAR2(255) | YES | null | 标题| 
| ICON | VARCHAR2(255) | YES | null | 图标路径| 
| URL | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| NAME | VARCHAR2(255) | YES | null | 元素类型| 
| PATH | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| CLOSEABLE | NUMBER(5,0) | YES | null | 是否显示关闭按钮，0：否，1：是。| 
| REFRESHMODE | NUMBER(5,0) | YES | null | 是否显示刷新按钮，0：否，1：是。| 
| EDITMODE | NUMBER(5,0) | YES | null | 是否显示编辑按钮，0：否，1：是。| 
| HELPMODE | NUMBER(5,0) | YES | null | 是否显示帮助按钮，0：否，1：是。| 
| CONFIGMODE | NUMBER(5,0) | YES | null | 是否显示配置按钮，0：否，1：是。| 
| AUTOREFRESHED | NUMBER(5,0) | YES | null | 是否自动刷新，0：否，1：是。| 
| PERIODTIME | NUMBER(5,0) | YES | null | 自动刷新周期(分)，不小于5。| 
| SHOWNUMBER | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| ALLOWJS | NUMBER(5,0) | YES | null | 是否执行元素中的JS脚本| 
| PAGEREFRESHED | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| CLIENTCACHED | NUMBER(5,0) | YES | null | 缓存，0：否，1：是。| 
| PARAMETER | VARCHAR2(3000) | YES | '' | 参数(JSON)| 
| PORTLET_STATUS | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| PORTLET_MODE | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| TABID | NUMBER(5,0) | YES | null | 所属门户，对应LIGHT_PORTAL_TAB表中的 ID字段。| 
| BARBGCOLOR | VARCHAR2(255) | YES | null | (弃用)| 
| BARFONTCOLOR | VARCHAR2(255) | YES | null | (弃用)| 
| CONTENTBGCOLOR | VARCHAR2(255) | YES | null | (弃用)| 
| COLSPAN | NUMBER | YES | 1 | 跨列(绝对定位)| 
| Y | NUMBER | YES | 40 | 元素Y轴位置(绝对定位)| 
| HEIGHT | NUMBER | YES | 200 | 元素高度(绝对定位)| 

### light_portlet_config 门户元素样式关联
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| PORTLETID | NUMBER | YES | null | portlet的id| 
| PORTLETSTYLEID | VARCHAR2(32) | YES | null | portlet样式的id，对应LIGHT_PORTLET_STYLE中的ID字段。| 

### light_portlet_preferences 门户元素参数
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| PREFERENCESID | NUMBER(5,0) | NO | null | ID| 
| NAME | VARCHAR2(255) | YES | null | 参数名称| 
| VALUE | VARCHAR2(255) | YES | null | 值| 
| STATUS | NUMBER(5,0) | YES | null | 状态，默认0。| 
| PORTLETID | NUMBER(5,0) | YES | null | 元素ID，对应LIGHT_PORTLET中的ID字段。| 


### light_portlet_ref 门户元素类型
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| NAME | VARCHAR2(255) | NO | null | 名称| 
| LABEL | VARCHAR2(255) | YES | null | 显示名称| 
| ICON | VARCHAR2(255) | YES | null | 图标路径| 
| URL | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| PATH | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| TAG | VARCHAR2(255) | YES | null | LIGHTPORTAL| 
| REFRESHMODE | NUMBER(5,0) | YES | null | 是否显示刷新按钮，0：否，1：是。| 
| EDITMODE | NUMBER(5,0) | YES | null | 是否显示编辑按钮，0：否，1：是。| 
| HELPMODE | NUMBER(5,0) | YES | null | 是否显示帮助按钮，0：否，1：是。| 
| CONFIGMODE | NUMBER(5,0) | YES | null | 是否显示配置按钮，0：否，1：是。| 
| AUTOREFRESHED | NUMBER(5,0) | YES | null | 是否自动刷新，0：否，1：是。| 
| PERIODTIME | NUMBER(5,0) | YES | null | 自动刷新周期(分)，不小于5。| 
| SHOWNUMBER | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| ALLOWJS | NUMBER(5,0) | YES | null | 是否执行元素中的JS脚本| 
| PAGEREFRESHED | NUMBER(5,0) | YES | null | LIGHTPORTAL| 
| CLIENTCACHED | NUMBER(5,0) | YES | null | 缓存，0：否，1：是。| 
| PARAMETER | VARCHAR2(2048) | YES | null | 参数(JSON)| 
| USERID | VARCHAR2(255) | YES | null | 默认role_public。| 


### light_portlet_style 门户元素样式信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| OBJNAME | VARCHAR2(50) | NO | null | 样式名称| 
| DESCRIPTION | VARCHAR2(200) | YES | null | 样式描述| 
| HASHEADER | NUMBER | YES | null | 是否显示标题栏(1 为显示 0为隐藏)| 
| HEADERHEIGHT | NUMBER | YES | null | 标题栏高度(单位 px)| 
| HEADERBGCOLOR | VARCHAR2(10) | YES | null | 标题栏背景颜色| 
| HEADERBGIMAGE | VARCHAR2(80) | YES | null | 标题栏背景图片| 
| HEADERBGIMAGERE PEAT | VARCHAR2(20) | YES | null | 标题栏背景图片重复方式| 
| HEADERCORNERSTY LE | NUMBER | YES | null | 标题边角显示样式(1为直角, 0为圆角)| 
| HASHEADERREFRES HBTN | NUMBER | YES | null | 标题栏是否包含刷新按钮(1为显示, 0为隐藏)| 
| HEADERREFRESHBT NPATH | VARCHAR2(80) | YES | null | 标题栏刷新按钮的图片路径| 
| HASHEADERMINBT N | NUMBER | YES | null | 标题栏是否包含最小化按钮(1为显示, 0为隐藏)| 
| HEADERMINBTNPA TH | VARCHAR2(80) | YES | null | 标题栏最小化按钮的图片路径| 
| HASHEADERMAXBT N | NUMBER | YES | null | 标题栏是否包含最大化按钮(1为显示, 0为隐藏)| 
| HEADERMAXBTNPA TH | VARCHAR2(80) | YES | null | 标题栏最大化按钮的图片路径| 
| HASFOOTER | NUMBER | YES | null | 是否显示底部(1 为显示 0为隐藏)| 
| FOOTERHEIGHT | NUMBER | YES | null | 底部高度(单位 px)| 
| FOOTERBGCOLOR | VARCHAR2(10) | YES | null | 底部背景颜色| 
| FOOTERBGIMAGE | VARCHAR2(80) | YES | null | 底部背景图片| 
| FOOTERBGIMAGERE PEAT | VARCHAR2(20) | YES | null | 底部背景图片重复方式| 
| FOOTERCORNERSTY LE | NUMBER | YES | null | 底部边角显示样式(1为直角, 0为圆角)| 
| HASFOOTERREFRES HBTN | NUMBER | YES | null | 底部是否包含刷新按钮(1为显示, 0为隐藏)| 
| FOOTERREFRESHBT NPATH | VARCHAR2(80) | YES | null | 底部刷新按钮的图片路径| 
| HASFOOTERMINBT N | NUMBER | YES | null | 底部是否包含最小化按钮(1为显示, 0为隐藏)| 
| FOOTERMINBTNPAT H | VARCHAR2(80) | YES | null | 底部最小化按钮的图片路径| 
| HASFOOTERMAXBT N | NUMBER | YES | null | 底部是否包含最大化按钮(1为显示, 0为隐藏)| 
| FOOTERMAXBTNPA TH | VARCHAR2(80) | YES | null | 底部最大化按钮的图片路径| 

### portalOrg 组织门户
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| PORTALID | VARCHAR2(32) | YES | null | 门户ID，对应LIGHT_PORTAL_TAB表中的 ID字段。| 
| ORGUNITID | VARCHAR2(32) | YES | null | 对象ID，根据OBJTYPE存放对应的ID。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| OBJTYPE | NUMBER | YES | 0 | 对象类型，0：组织，1：岗位，2：人员，3：角色| 


## 文档
### DOCATTACH 文档附件
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| OID      | varchar2(32) | YES | null | 同ID |
| OBJID      | varchar2(32) | YES | null | 关联文档，对应DOCBASE中的ID字段 |
| ATTACHID      | varchar2(32) | YES | null | 附件ID，对应ATTACH表中的ID字段 |
| ATTACHTYPE      | NUMBER | YES | null | 附件类型。1:附件,3:HTML正文,4:Word,5:Excel,6:PDF,7:PPT。 |
| VERSION      | VARCHAR2(256) | YES | null | 最后修改人日期时间 |
| CREATEDATE      | VARCHAR2(10) | YES | null | 创建日期 |
| CREATETIME      | VARCHAR2(8) | YES | null | 创建时间 |
| COL1      | VARCHAR2(256) | YES | null | (备用) |
| COL2      | VARCHAR2(256) | YES | null | (备用) |
| COL3      | VARCHAR2(256) | YES | null | (备用) |
| ISDELETE      | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。 |

### DOCBASE 文档基本信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| SUBJECT      | varchar2(256) | YES | null | 文档标题 |
| DOCABSTRACT      | varchar2(4000) | YES | null | 文档摘要 |
| CONTENT      | CLOB | YES | null | 文档正文 |
| CREATOR      | VARCHAR2(32) | YES | null | 创建人ID |
| CREATEDATE      | VARCHAR2(10) | YES | null | 创建日期 |
| CREATETIME      | VARCHAR2(8) | YES | null | 创建时间 |
| MODIFIER      | VARCHAR2(32) | YES | null | 最后编辑人ID |
| MODIFYDATE      | VARCHAR2(10) | YES | null | 最后编辑日期 |
| MODIFYTIME      | VARCHAR2(8) | YES | null | 最后编辑时间 |
| DOCTYPE      | NUMBER | YES | null | 文档类型，3:HTML，4:Word，5:Excel，7:PPT。|
| DOCSTATUS      | NUMBER | YES | null | 文档状态，0:草稿，1:正常。|
| ISDELETE      | NUMBER | YES | 0 | 是否逻辑删除。0:否，1:是，3:历史版本。|
| ATTACHNUM      | NUMBER | YES | null | 附件数量 |
| PID      |  VARCHAR2(32) | YES | null | 被回复文档ID |
| REPLYNUM      |  NUMBER | YES | null | 回复数量 |
| TYPEID      |  VARCHAR2(32) | YES | null | 文档类型(弃用) |
| COL2      |  VARCHAR2(256) | YES | null | (备用) |
| COL3      |  VARCHAR2(256) | YES | null | (备用) |
| FIELD001      |  VARCHAR2(256) | YES | null |  |
| EXTINTFIELD0      |  NUMBER | YES | null |  |
| EXTINTFIELD1      |  NUMBER | YES | null |  |
| EXTINTFIELD2      |  NUMBER | YES | null |  |
| EXTINTFIELD3      |  NUMBER | YES | null |  |
| EXTINTFIELD4      |  NUMBER | YES | null |  |
| EXTINTFIELD5      |  NUMBER | YES | null |  |
| EXTINTFIELD6      |  NUMBER | YES | null |  |
| EXTINTFIELD7      |  NUMBER | YES | null |  |
| EXTINTFIELD8      |  NUMBER | YES | null |  |
| EXTINTFIELD9      |  NUMBER | YES | null |  |
| EXTNUMFIELD0      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD1      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD2      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD3      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD4      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD5      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD6      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD7      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD8      |  NUMBER(24,2) | YES | null |  |
| EXTNUMFIELD9      |  NUMBER(24,2) | YES | null |  |
| EXTTEXTFIELD1      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD2      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD2      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD3      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD4      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD5      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD6      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD7      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD8      |  VARCHAR2(256) | YES | null |  |
| EXTTEXTFIELD9      |  VARCHAR2(256) | YES | null |  |
| EXTDATEFIELD0      |  VARCHAR2(32) | YES | null |  |
| EXTDATEFIELD1      |  VARCHAR2(32) | YES | null |  |
| EXTDATEFIELD2      |  VARCHAR2(32) | YES | null |  |
| EXTDATEFIELD3      |  VARCHAR2(32) | YES | null |  |
| EXTDATEFIELD4      |  VARCHAR2(32) | YES | null |  |
| EXTTIMEFIELD0      |  VARCHAR2(32) | YES | null |  |
| EXTTIMEFIELD1      |  VARCHAR2(32) | YES | null |  |
| EXTTIMEFIELD2      |  VARCHAR2(32) | YES | null |  |
| EXTTIMEFIELD3      |  VARCHAR2(32) | YES | null |  |
| EXTTIMEFIELD4      |  VARCHAR2(32) | YES | null |  |
| EXTDESCFIELD0      |  CLOB | YES | null |  |
| EXTDESCFIELD1      |  CLOB | YES | null |  |
| EXTDESCFIELD2      |  CLOB | YES | null |  |
| EXTDESCFIELD3      |  CLOB | YES | null |  |
| EXTDESCFIELD4      |  CLOB | YES | null |  |
| EXTFORMATTEXTFIE LD0      |  CLOB | YES | null |  |
| EXTFORMATTEXTFIE LD1      |  CLOB | YES | null |  |
| EXTFORMATTEXTFIE LD2      |  CLOB | YES | null |  |
| EXTFORMATTEXTFIE LD3      |  CLOB | YES | null |  |
| EXTFORMATTEXTFIE LD4      |  CLOB | YES | null |  |
| EXTCHECKBOXFIELD 0    |  NUMBER | YES | null |  |
| EXTCHECKBOXFIELD 1    |  NUMBER | YES | null |  |
| EXTCHECKBOXFIELD 2    |  NUMBER | YES | null |  |
| EXTCHECKBOXFIELD 3    |  NUMBER | YES | null |  |
| EXTCHECKBOXFIELD 4    |  NUMBER | YES | null |  |
| EXTSELECTITEMFIEL D0   |  VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D5   |  VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D6   |  VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D7   |  VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D8   |  VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D9   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD0   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD1   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD2   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD3   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD4   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD5   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD9   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD11   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD12   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD13   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD14   |  VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD15  |  VARCHAR2(32) | YES | null |  |
| EXTMREFOBJFIELD0  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD1  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD2  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD3  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD4  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD5  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD6  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD7  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD8  |  CLOB | YES | null |  |
| EXTMREFOBJFIELD9  |  CLOB | YES | null |  |
| EXTATTACHFIELD0  |  VARCHAR2(32) | YES | null |  |
| EXTATTACHFIELD1  |  VARCHAR2(32) | YES | null |  |
| EXTATTACHFIELD2  |  VARCHAR2(32) | YES | null |  |
| EXTATTACHFIELD3  |  VARCHAR2(32) | YES | null |  |
| EXTATTACHFIELD4  |  VARCHAR2(32) | YES | null |  |
| CREATOR2  |  VARCHAR2(320) | YES | null | (弃用) |
| MODIFIER2  |  VARCHAR2(32) | YES | null | (弃用) |
| DOCSECLEVEL  |  NUMBER | YES | null | 文档级别 |
| CATEGORYIDS  |  VARCHAR2(4000) | YES | null | 文档目录ID |
| EXTREFOBJFIELD6  |  VARCHAR2(32) | YES | null |  |
| EXTMREFOBJFIELD3  | CLOB | YES | null |  |
| EXTSELECTITEMFIEL D1  | VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D2  | VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D3  | VARCHAR2(32) | YES | null |  |
| EXTSELECTITEMFIEL D4  | VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD10  | VARCHAR2(32) | YES | null |  |
| COL1  | VARCHAR2(256) | YES | null | (备用) |
| EXTTEXTFIELD0  | VARCHAR2(256) | YES | null |  |
| OBJNO  | VARCHAR2(128) | YES | null | 文档编号 |
| EXTREFOBJFIELD8  | VARCHAR2(32) | YES | null |  |
| EXTREFOBJFIELD7  | VARCHAR2(32) | YES | null |  |

### DOCBASEPUSH 文档推送
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| PUSHER      | varchar2(32) | YES | null | 推送人 |
| PUSHDATE      | varchar2(256) | YES | null | 推送日期 |
| PUSHTIME      | varchar2(256) | YES | null | 推送时间 |
| DOCID      | varchar2(4000) | YES | null | 推送文档 |
| CATEGORYID      | varchar2(32) | YES | null | 推送文档目录 |
| USERIDS      | varchar2(1000) | YES | null | 被推送人 |
| STATIONIDS      | varchar2(1000) | YES | null | 被推送岗位 |
| ORGIDS      | varchar2(1000) | YES | null | 被推送组织 |
| MINSECLEVEL      | NUMBER | YES | null | 被推送安全级别最小值 |
| MAXSECLEVEL      | NUMBER | YES | null | 被推送安全级别最大值 |
| REASON      | VARCHAR2(4000) | YES | null | 推送理由 |
| ISDELETE      | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。 |

### DOCTRANSFERLOG 文档转移（剪切、复制）日志
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| SOURCE      | varchar2(32) | YES | null | 源目录，对应[CATEGORY](http://localhost:8081/oaSystem/oaTables/#%E5%88%86%E7%B1%BB)表中的ID字段。 |
| TARGET      | varchar2(32) | YES | null | 目标目录，对应[CATEGORY](http://localhost:8081/oaSystem/oaTables/#%E5%88%86%E7%B1%BB)表中的ID字段。 |
| DOCIDS      | varchar2(2000) | YES | null | 操作的文档ID，对应DOCBASE表中的ID字段，多篇文档以“,”隔开。 |
| OPTTYPE      | NUMBER | YES | null | 操作类型，0：剪切，1：复制。 |
| SUBMITOR      | VARCHAR2(32) | YES | null | 操作者 |
| SUBMITDATE      | VARCHAR2(256) | YES | null | 操作日期 |
| SUBMITTIME      | VARCHAR2(256) | YES | null | 操作时间 |

### REMARK 文档评论
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| ID      | varchar2(32) | NO | null | ID |
| TYPE      | NUMBER | YES | null | 默认1 |
| SCORE      | NUMBER | YES | null | 评分 |
| HUMRESID      | VARCHAR2(32) | YES | null | 评论人，对应HUMRES中的ID字段 |
| OBJID      | VARCHAR2(32) | YES | null | 文档，对应DOCBASE中的ID字段 |
| CREATEDATE      | VARCHAR2(10) | YES | null | 创建日期 |
| CREATETIME      | VARCHAR2(8) | YES | null | 创建时间 |
| COL1      | VARCHAR2(256) | YES | null | (备用) |
| COL2      | VARCHAR2(256) | YES | null | (备用) |
| COL3      | VARCHAR2(256) | YES | null | (备用) |
| ISDELETE      | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。 |

## 流程
### export 流程出口信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
|startnodeid | VARCHAR2(32) | YES | null | 起始节点ID | 
|ndnodeid | VARCHAR2(32) | YES | null | 目标节点ID | 
|condition | CLOB | YES | null | 出口条件(以“{”开头的为老出口条件方式设置)出口条件名称(显示在流程图出口连接线上的文字) | 
|linkname | VARCHAR2(128) | YES | null |  
|WORKFLOWID|VARCHAR2(32) | YES | null | 工作流ID，对应WORKFLOW表中的ID字段。 | 
|COL1 | VARCHAR2(256) | YES|null|(备用) | 
|COL2 | VARCHAR2(256) | YES|null|(备用) | 
|COL3 | VARCHAR2(256) | YES|null|(备用) | 
|exclusivePriority | number(10,2)|YES|null|排他性优先级 | 
|ISDELETE | NUMBER | YES | 0 | 是否逻辑删除。0:否，1:是。 | 
|BTNNAME | VARCHAR2(32) | YES | null | (无用) |
|LINKFROM | NUMBER | YES | null | (弃用，原Applet流程图设计器) | 
|LINKTO | NUMBER | YES | null | (弃用，原Applet流程图设计器) | 
|X1 | NUMBER | YES | null|(弃用，原Applet流程图设计器) | 
|X2 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|X3 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|X4 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|X5 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|Y1 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|Y2 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|Y3 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|Y4 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 
|Y5 | NUMBER | YES|null|(弃用，原Applet流程图设计器) | 

### exportdetail 出口条件配置明细
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| EXPORTID | VARCHAR2(64) | YES | null | 出口ID，对应EXPORT表中的ID字段。| 
| PID | VARCHAR2(64) | YES | null | 记录单个条件从属于哪个组(用户添加的括号)，对应此表的ID字段。| 
| FIELDNAME | VARCHAR2(256) | YES | null | 字段ID，对应FORMFIELD表中的ID字段。| 
| OPT | VARCHAR2(32) | YES | null | 比较方式。1：大于，2：大于或等于，3：小于，4：小于或等于，5：等于，6：不等于，7：包含，8：不包含，9：从属于，10：不从属于，11：是，12：否。| 
| VAL | VARCHAR2(2048) | YES | null | 值| 
| RELATIONSHIP | VARCHAR2(64) | YES | null | 如果该条数据保存的是组(用户添加的括号)，则存放EXPORTID。| 
| ROWINDEX | NUMBER | YES | null | 所在行(0,1,2……)| 
| CONDITION | VARCHAR2(10) | YES | null | 条件。1：and，2：or。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除。0：否，1：是。| 

### nodeinfo 流程节点信息
| fieldName      | fieldType     | isnull  | default | remark       |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(128) | YES | null | 节点名称| 
| WORKFLOWID | VARCHAR2(32) | YES | null | 节点所属流程ID| 
| NODETYPE | NUMBER | YES | null | 节点类型（1，开始节点 2，活动节点 3，子过程活动节点 4 ，结束节点）| 
| ISREJECT | NUMBER | YES | null | 是否允许退回（0：否，1：是）| 
| REJECTNODE | VARCHAR2(32) | YES | null | 退回到的节点ID| 
| REFWORKFLOWID | VARCHAR2(32) | YES | null | 相关流程ID| 
| REFNODEID | VARCHAR2(32) | YES | null | 相关节点ID| 
| OUTMAPPING | VARCHAR2(512) | YES | null | 输出参数列表关系| 
| INMAPPING | VARCHAR2(512) | YES | null | 输入参数列表关系| 
| JOINTYPE | NUMBER | YES | null | 前驱转移关系| 
| SPLITTYPE | NUMBER | YES | null | 后驱转移关系| 
| NODEOPERATERS | VARCHAR2(32) | YES | null | 节点操作者| 
| PERPAGE | VARCHAR2(128) | YES | null | 节点预处理页面| 
| AFTERPAGE | VARCHAR2(128) | YES | null | 节点后处理页面| 
| ISEMAIL | NUMBER | YES | null | 是否邮件提醒（0：否，1：是）| 
| ISSMS | NUMBER | YES | null | 是否短信提醒（0：否，1：是）| 
| ISRTX | NUMBER | YES | null | 是否即时通讯提醒（0：否，1：是）| 
| EMAILMODEL | VARCHAR2(32) | YES | null | 邮件提醒模板| 
| MSGMODEL | VARCHAR2(256) | YES | null | 短信提醒模板| 
| ISTIMEOUT | NUMBER | YES | null | 是否超时（0：否，1：是）| 
| TIMEOUTUNIT | NUMBER | YES | null | 时间单位| 
| TIMEOUTSTART | NUMBER | YES | null | 超时起始时间| 
| TIMEOUTTYPE | NUMBER | YES | null | 超时时间类型| 
| TIMEOUTFIELDID | VARCHAR2(32) | YES | null | 超时变量字段id| 
| TIMEOUTVALUE | VARCHAR2(32) | YES | null | 超时变量| 
| TIMEOUTOPT | NUMBER | YES | null | 超时操作| 
| TIMEOUTLOADID | VARCHAR2(32) | YES | null | 重定向节点| 
| DATAINTERFACE | CLOB | YES | null | 数据接口| 
| DRAWXPOS | NUMBER | YES | null | 节点位置 X坐标（流程图）| 
| DRAWYPOS | NUMBER | YES | null | 节点位置 Y坐标 （流程图）| 
| COL1 | VARCHAR2(256) | YES | null | 布局中签字意见显示样式| 
| COL2 | VARCHAR2(256) | YES | null | 忽略和自动执行时间间隔(单位同上面的时间单位)| 
| COL3 | VARCHAR2(256) | YES | null | 是否允许撤回（0：否，1：是）| 
| HUIQIAN | NUMBER | YES | null | 是否会签（0：否，1：是）| 
| REMINDTYPE | VARCHAR2(32) | YES | null | 提醒类型| 
| SAVEBUTTONNAME | VARCHAR2(256) | YES | null | 保存按钮自定义名称| 
| SUBMITBUTTONNA ME | VARCHAR2(256) | YES | null | 提交按钮自定义名称| 
| YNAWOKE | NUMBER | YES | null | 是否提交前确认（0：否，1：是）| 
| AWOKEINFO | VARCHAR2(512) | YES | null | 提交确认信息| 
| NODEEXTPAGE | VARCHAR2(256) | YES | null | 扩展页面| 
| ISAUTOFLOW | NUMBER | YES | null | 是否自动流转-相邻节点（0：否，1：是）| 
| ISDELETE | NUMBER | YES | 0 | 是否已删除（0：否，1：是）| 
| ISPOPUP | NUMBER | YES | null | 是否弹出式提醒（0：否，1：是）| 
| WORDMODULEID | VARCHAR2(32) | YES | null | 流转公文word模板| 
| WORDDOCNAME | VARCHAR2(32) | YES | null | 流转文档名称| 
| WORDMODULEFIEL D | VARCHAR2(32) | YES | null | Word模板存储字段| 
| WORDDOCURL | VARCHAR2(32) | YES | null | 流转文档分类| 
| WORDDOCHEAD | VARCHAR2(32) | YES | null | 红头文字生成字段| 
| ISSTAMP | NUMBER | YES | null | 是否要盖章 （0：否，1：是）| 
| ISPRINT | NUMBER | YES | 0 | 是否允许打印（0：否，1：是）| 
| ISTEMPORARY | VARCHAR2(2) | YES | null | 是否显示添加会签人（0：否，1：是）| 
| DOCCANEDIT | NUMBER | YES | 1 | 公文是否可编辑| 
| ISDOCVESTIGE | NUMBER | YES | 0 | 是否保留痕迹| 
| WFREDTEMPLATE | VARCHAR2(250) | YES | null | 公文套红模板字段| 
| WORDREDTEMPLATE | VARCHAR2(250) | YES | null | Word套红模板字段| 
| STAMPFIELD | VARCHAR2(64) | YES | null | 选择要盖章的位置| 
| FLOWCHARTMETHO D | NUMBER | YES | 0 | 流程图显示方式（0，tab页 1，按钮 2，不显示）| 
| PFLOWMETHOD | NUMBER | YES | 0 | 流程流转显示方式（0，tab页 1，按钮 2，不显示）| 
| ISFORWARD | NUMBER | YES | 1 | 是否允许转发（0：否，1：是）| 
| PLISTMETHOD | NUMBER | YES | 0 | 权限列表显示方式（0，tab页 1，按钮 2，不显示）| 
| SHAREPMETHOD | NUMBER | YES | 0 | 权限共享显示方式（0，tab页 1，按钮 2，不显示）| 
| ISREXPAND | NUMBER | YES | 0 | 签字意见栏是否默认展开（0：否，1：是）| 
| IMPORTDETAIL | NUMBER | YES | 2 | 导入明细记录显示方式| 
| REMARKREQUIRED | NUMBER | YES | 0 | 签字意见是否必填（0：否，1：是）| 
| DATAINTERFACE2 | CLOB | YES | null | 数据接口(退回调用)| 
| ISTEMPORARY2 | VARCHAR2(10) | YES | null | 是否显示非会签人| 
| ISTEMPORARY3 | VARCHAR2(10) | YES | null | 是否显示移交| 
| ISTEMPORARYTEXT | VARCHAR2(64) | YES | null | 添加会签人自定义按钮名称| 
| ISTEMPORARYTEXT2 | VARCHAR2(64) | YES | null | 添加非会签人自定义按钮名称| 
| ISTEMPORARYTEXT3 | VARCHAR2(64) | YES | null | 移交按钮自定义名称| 
| CUSTOMACTION | VARCHAR2(256) | YES | null | 执行动作路径| 
| ISHTMLDOC | NUMBER | YES | null | 是否需要生成HTML文档（0：否，1：是）| 
| HTMLDOCLAYOUT | VARCHAR2(32) | YES | null | HTML文档布局| 
| HTMLDOCCAT | VARCHAR2(32) | YES | null | HTML文档分类| 
| HTMLDOCTITLE | VARCHAR2(32) | YES | null | HTML文档名称| 
| ISCROSSDS | NUMBER | YES | null | 是否跨数据源流转（0：否，1：是）| 
| DATASOURCE | VARCHAR2(256) | YES | null | 数据源| 
| DOCTOURL | VARCHAR2(256) | YES | null | 正文内容同步到主机| 
| SCROSSDS | NUMBER | YES | null | 正文2内容同步到主机| 
| DOCTOURL2 | VARCHAR2(256) | YES | null | 数据源2| 
| DATASOURCE2 | VARCHAR2(256) | YES | null | SYNCTYPE1| 
| SYNCTYPE1 | NUMBER | YES | null | SYNCTYPE2| 
| SYNCTYPE2 | NUMBER | YES | null | 是否跨数据2（0：否，1：是）| 
| ISDISCAUTOFLOW | NUMBER | YES | null | 是否自动流转-非相邻节点 （0：否，1：是）| 
| ISEXCELEXP | NUMBER | YES | null | 是否允许导出Excel（0：否，1：是）| 
| HASTEN | NUMBER | YES | null | 是否可催办（0：否，1：是）| 
| ATTACHCANEDIT | INT | YES | null | 附件是否可编辑（0：否，1：是）| 
| ISISIGNATUREHTML | INT | YES | null | 是否电子签章（0：否，1：是）| 
| ISBATCHAPPROVAL | INT | YES | null | 允许批量审批（0：否，1：是）| 

### noderemind 节点超时提醒
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程，对应REQUESTBASE表中的ID字段。| 
| NODEID | VARCHAR2(32) | YES | null | 节点，对应NODEINFO表中的ID字段。| 
| REMINDDATE | VARCHAR2(10) | YES | null | 提醒日期| 
| REMINDTIME | VARCHAR2(8) | YES | null | 提醒时间| 
| EXEACTION | NUMBER | YES | null | 超时操作，0：忽略，1：自动执行，2：重定向，3：忽略一次后执行，4：自定义执行动作| 
| REDIRECTNODE | VARCHAR2(32) | YES | null | 重定向目标节点，对应NODEINFO表中的ID字段。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | 忽略一次后执行的间隔| 
| COL3 | VARCHAR2(256) | YES | null | 忽略一次后执行的间隔单位，1：小时，2：天，3：周，4：月，5：季。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| REQUESTHOST | VARCHAR2(512) | YES | null | 服务器地址| 
| CONTEXTPATH | VARCHAR2(512) | YES | null | 上下文路径| 
| CUSTOMACTION | VARCHAR2(256) | YES | null | 自定义执行动作路径，例：com.eweaver.job.custom.NodeRemind。| 

### requestBase 流程基本信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| WORKFLOWID | VARCHAR2(32) | YES | null | 工作流，对应WORKFLOWINFO表中的ID字段。| 
| REQUESTNAME | VARCHAR2(256) | YES | null | 流程标题| 
| REQUESTLEVEL | VARCHAR2(32) | YES | null | 紧急程度，对应SELECTITEMTYPE表中的流程等级(ID：402881eb0c42cba0010c42fe333b0007)| 
| CREATETYPE | NUMBER | YES | null | 创建方式，0：系统，1：用户。| 
| CREATER | VARCHAR2(32) | YES | null | 创建人| 
| CREATEDATE | VARCHAR2(10) | YES | null | 创建日期| 
| CREATETIME | VARCHAR2(8) | YES | null | 创建时间| 
| ISFINISHED | NUMBER | YES | null | 是否归档，0：否，1：是。| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0：否，1：是。| 
| OBJNO | VARCHAR2(20) | YES | '' | 流程编号，从KEYINFO表中获取7位编号(KEYNAME=workflow)。| 
| FLOWNO | VARCHAR2(128) | YES | null | 表单中的流程编号，由UF表中的FLOWNO字段生成。| 
| DOCATTACHID | VARCHAR2(250) | YES | null | | 
| ISREJECT | CHAR(1) | YES | null | 是否处于退回状态，0：否，1：是。| 
| ISEMAIL | NUMBER(38,0) | YES | null | 用户选择此流程是否邮件提醒(弃用)| 
| ISSMS | NUMBER(38,0) | YES | null | 用户选择此流程是否短信提醒(弃用)| 
| ISRTX | NUMBER(38,0) | YES | null | 用户选择此流程是否RTX提醒(弃用)| 
| ISPOPUP | NUMBER(38,0) | YES | null | 用户选择此流程是否弹出提醒(弃用)| 
| FINISHDATE | VARCHAR2(10) | YES | null | 归档日期| 
| FINISHTIME | VARCHAR2(8) | YES | null | 归档时间| 

### requestFlowPath 流程流转路径，用于流程图显示
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| STARTNODEID | VARCHAR2(32) | YES | null | 起始节点| 
| ENDNODEID | VARCHAR2(32) | YES | null | 结束节点| 
| FLOWTIME | VARCHAR2(19) | YES | null | 流转时间| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0：否，1：是。| 

### requestInfo 流程节点信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
|REQUESTID | VARCHAR2(32) | YES | null | RequestID，对应REQUESTBASE表中的ID字段。|
|CURRENTNODEID | VARCHAR2(256) | YES | null | 当前节点ID|
|ISDELETE | NUMBER(22,0) | YES | null | 是否逻辑删除，0：否，1：是。|

### requestLog 流程流转日志
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| STEPID | VARCHAR2(32) | YES | null | 步骤ID，对应REQUESTSTEP表中的ID字段。| 
| LOGTYPE | VARCHAR2(32) | YES | null | 日志类型，对应SELECTITEMTYPE表中的流程操作类型(ID：402881e50c5b4646010c5b57d5d700 07)。| 
| OPERATOR | VARCHAR2(32) | YES | null | 操作者，对应HUMRES表中的ID字段。| 
| OPERATEDATE | VARCHAR2(10) | YES | null | 操作日期| 
| OPERATORTIME | VARCHAR2(8) | YES | null | 操作时间| 
| REMARK | CLOB | YES | null | 签字意见| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| BYAGENT | VARCHAR2(50) | YES | null | 被代理人，对应HUMRES表中的ID字段。| 
| RULEID | VARCHAR2(32) | YES | null | 记录操作者对应的规则，流程退回或撤回时根据该RULE还原，对应PERMISSIONRULE表中的ID字段。| 
| LASTSTEPID | VARCHAR2(32) | YES | null | 上一步骤ID，对应REQUESTSTEP表中的ID字段。| 
| ATTACHIDS | VARCHAR2(500) | YES | null | 附件，对应ATTACH表中的ID字段。| 
| ISFEEDBACKREAD | VARCHAR2(2) | YES | null | 反馈标志(弃用，见REQUESTOPERATORMARK表)| 
| NEXTOPERNAME | VARCHAR2(4000) | YES | null | 接收人| 
| ISREJECTDELETE | NUMBER | YES | null | 供自动流转功能退回时删除日志标记0：否，1：是。| 

### requestOperatorMark 流程反馈标记
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| USERID | VARCHAR2(32) | YES | null | 该流程需要反馈的用户| 
| FEEDBACK | CHAR(1) | YES | null | 是否有反馈，0：否，1：是。| 

### requestOperators 流程未操作者
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| STEPID | VARCHAR2(32) | YES | null | 步骤ID，对应REQUESTSTEP表中的ID字段。| 
| RULEID | VARCHAR2(32) | YES | null | 规则ID，对应PERMISSIONRULE表中的ID字段。| 
| USERID | VARCHAR2(32) | YES | null | 用户ID| 
| OPERATELEVEL | NUMBER | YES | null | 操作级别，依次逐个审批时按顺序从低到高。| 
| OPERATETYPE | NUMBER | YES | null | 流程操作方式，对应SELECTITEMTYPE表中的流程操作方式(ID：402881ea0bfa7679010bfa86f3f70016)，1：知会，2：非会签，3：会签，5：依次逐个审批。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| BYAGENT | VARCHAR2(50) | YES | null | 被代理人| 
| ISSUBMIT | NUMBER | YES | 0 | 是否已提交，0：否，1：是。| 
| Updatetime | Varchar(19) | YES |  | 更新时间| 

### requestOptRule 流程未操作者与permisisonrule权限关联表
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| RULEID | VARCHAR2(32) | YES | null | 规则ID，对应PERMISSIONRULE表中的ID字段。| 
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| STEPID | VARCHAR2(32) | YES | null | 步骤ID，对应REQUESTSTEP表中的ID字段| 
| NODEID | VARCHAR2(32) | YES | null | 节点ID，对应NODEINFO表中的ID字段。| 
| ORGID | VARCHAR2(32) | YES | null | 组织单元ID| 
| USERID | VARCHAR2(32) | YES | null | 用户ID| 
| ISALLUSER | NUMBER | YES | null | 是否所有人，0：否，1：是。| 
| MINSECLEVEL | NUMBER | YES | null | 安全级别范围最小值| 
| MAXSECLEVEL | NUMBER | YES | null | 安全级别范围最大值| 
| WFOPTTYPE | NUMBER | YES | null | 流程操作方式，对应SELECTITEMTYPE表中的流程操作方式(ID：402881ea0bfa7679010bfa86f3f70016)，1：知会，2：非会签，3：会签，5：依次逐个审批。| 
| STATIONID | VARCHAR2(32) | YES | null | 岗位ID| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### requestStatus 流程状态信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| LASTSTEPID | VARCHAR2(32) | YES | null | 上一步骤ID| 
| CURSTEPID | VARCHAR2(32) | YES | null | 步骤ID| 
| ISRECEIVED | NUMBER | YES | null | 是否已查看，0：否，1：是。| 
| ISSUBMITED | NUMBER | YES | null | 是否已提交，0：否，1：是。| 
| ISPAUSED | NUMBER | YES | null | | 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### requestStep 流程步骤
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| NODEID | VARCHAR2(32) | YES | null | 节点ID，对应NODEINFO表中的ID字段。| 
| NODETYPE | NUMBER | YES | null | 节点类型，1：开始，2：活动，4：结束。| 
| RECEIVER | VARCHAR2(32) | YES | null | 接收人| 
| RECEIVEDATE | VARCHAR2(10) | YES | null | 接收日期| 
| RECEIVETIME | VARCHAR2(8) | YES | null | 接收时间| 
| SUBMITER | VARCHAR2(32) | YES | null | 提交人| 
| SUBMITDATE | VARCHAR2(10) | YES | null | 提交日期| 
| SUBMITTIME | VARCHAR2(8) | YES | null | 提交时间| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| NODETIMES | NUMBER | YES | 0 | 次数| 

### stampInfo 流程节点图片印章信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REQUESTID | VARCHAR2(64) | YES | null | 流程ID| 
| NODEID | VARCHAR2(64) | YES | null | 节点ID| 
| STAMPX | VARCHAR2(32) | YES | null | 印章位置(X)| 
| STAMPY | VARCHAR2(32) | YES | null | 印章位置(Y)| 
| IMGINFOID | VARCHAR2(64) | YES | null | 印章，对应IMGINFO表中的ID字段。| 
| USERID | VARCHAR2(64) | YES | null | 用户| 
| ISDELETE | NUMBER | YES | '0' | 是否逻辑删除，0：否，1：是。| 

### todoItems 流程未操作者
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| USERID | VARCHAR2(32) | YES | null | 用户ID| 
| REQUESTID | VARCHAR2(32) | YES | null | 流程ID，对应REQUESTBASE表中的ID字段。| 
| WORKFLOWID | VARCHAR2(32) | YES | null | 流程ID，对应WORKFLOWINFO表中ID字段| 
| CREATEDATETIME | VARCHAR2(32) | YES | null | 创建时间| 
| NODEID | VARCHAR2(32) | YES | null | 节点ID，对应NODEINFO表中ID字段| 
| STEPID | VARCHAR2(32) | YES | null | 步骤ID，对应REQUESTSTEP表中的ID字段。| 
| TODOTYPE | NUMBER | YES | null | 流程操作方式，对应SELECTITEMTYPE表中的流程操作方式(ID：402881ea0bfa7679010bfa86f3f70016)，1：知会，2：非会签，3：会签，5：依次逐个审批。| 

### workflowActing 流程代理配置信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(50) | YES | null | (弃用)| 
| WORKFLOWID | VARCHAR2(32) | YES | null | 工作流ID，对应WORKFLOWINFO表中的 ID字段。| 
| BYAGENT | VARCHAR2(32) | YES | null | 被代理人| 
| AGENT | VARCHAR2(32) | YES | null | 代理人| 
| CREATOR | VARCHAR2(32) | YES | null | 创建人| 
| BEGINTIME | VARCHAR2(32) | YES | null | 代理开始日期| 
| ENDTIME | VARCHAR2(32) | YES | null | 代理结束日期| 
| ISEFFECTIVE | NUMBER | YES | null | 是否有效，0：否，1：是。| 
| ISDELETE | NUMBER | YES | '0' | 是否逻辑删除，0：否，1：是。| 
| MODULEID | VARCHAR2(50) | YES | null | 模块，对应MODULE表中的ID字段。| 
| CONDITION | CLOB | YES | null | 条件| 
| CONDITIONNAME | CLOB | YES | null | 条件名称| 

### workflowInfo 工作流信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(128) | YES | null | 名称| 
| OBJTYPE | VARCHAR2(32) | YES | null | | 
| FORMID | VARCHAR2(32) | YES | null | 关联表单ID| 
| ISACTIVE | NUMBER | YES | null | 流程状态，0:禁用，1:显示，2:隐藏。| 
| ISAPPROVABLE | NUMBER | YES | null | 是否审批流程(弃用)| 
| APPROVEOBJ | VARCHAR2(32) | YES | null | 审批对象(弃用)| 
| APPROVEOBJTYPE | VARCHAR2(32) | YES | null | 审批对象类型(弃用)| 
| ISTRIGGER | NUMBER | YES | null | 是否触发| 
| TRIGGERCYCLE | NUMBER | YES | null | 触发周期| 
| TRIGGERDATE | VARCHAR2(32) | YES | null | 触发日期| 
| TRIGGERTIME | VARCHAR2(8) | YES | null | 触发时间| 
| HELPDOC | VARCHAR2(32) | YES | null | 帮助文档，对应DOCBASE中的ID字段。| 
| DEFTITLE | VARCHAR2(256) | YES | null | 默认标题| 
| OBJDESC | VARCHAR2(512) | YES | null | 描述| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| REMINDTYPE | VARCHAR2(32) | YES | null | 提醒类型| 
| ISEMAIL | NUMBER | YES | null | 是否邮件提醒| 
| ISSMS | NUMBER | YES | null | 是否短信提醒| 
| ISRTX | NUMBER | YES | null | 是否RTX提醒| 
| EMAILMODEL | VARCHAR2(32) | YES | null | 邮件模板(弃用)| 
| MSGMODEL | VARCHAR2(256) | YES | null | 短信模板(弃用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0:否，1:是。| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISPOPUP | NUMBER | YES | null | 是否弹出式提醒| 
| MODULEID | VARCHAR2(32) | YES | null | 所属模块ID| 
| GRAPH | CLOB | YES | null | 流程图XML| 
| ISDOC | NUMBER | YES | 0 | 是否公文，0:否，1:是。| 
| DOCTEMPLATE | VARCHAR2(250) | YES | null | 公文模板，对应WORDMODULE中的ID字段| 
| ISCREATEDOC | NUMBER | YES | null | 是否附件生成文档| 
| CREATEDOCFIELD | VARCHAR2(250) | YES | null | 文档相关字段| 
| DEFAULTDOCDIR | VARCHAR2(250) | YES | null | 附件生成文档目录| 
| SELEMAIL | NUMBER(38,0) | YES | null | 选择邮件提醒| 
| SELSMS | NUMBER(38,0) | YES | null | 选择短信提醒| 
| SELRTX | NUMBER(38,0) | YES | null | 选择RTX提醒| 
| SELPOPUP | NUMBER(38,0) | YES | null | 选择弹出式提醒| 
| DELETETYPE | NUMBER | YES | null | 删除类型，0:逻辑删除，1:物理删除。| 
| ISPERMITACTING | NUMBER | YES | null | 是否允许代理| 

### workflowUseCount 用户使用流程次数统计
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| WORKFLOWID | VARCHAR2(32) | YES | null | 工作流程ID| 
| HUMRESID | VARCHAR2(32) | YES | null | 人员ID| 
| TOTALNUM | NUMBER(38) | YES | null | 工作流共计使用次数| 
| ISDELETE | NUMBER(38) | YES | '0' | 是否删除。0：否，1：是。| 

## 表单
### formBase 分类数据基本信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| CREATOR | VARCHAR2(32) | YES | null | 创建人| 
| CREATEDATE | VARCHAR2(10) | YES | null | 创建日期| 
| CREATETIME | VARCHAR2(8) | YES | null | 创建时间| 
| MODIFIER | VARCHAR2(32) | YES | null | 修改人| 
| MODIFYDATE | VARCHAR2(10) | YES | null | 修改日期| 
| MODIFYTIME | VARCHAR2(8) | YES | null | 修改时间| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0:否，1:是。| 
| CATEGORYID | VARCHAR2(32) | YES | null | 分类ID| 
| COL1 | VARCHAR2(256) | YES | null | | 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 

### formField 表单字段信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| FORMID | VARCHAR2(32) | YES | null | 表单ID，对应FORMINFO中的ID字段。| 
| FIELDNAME | VARCHAR2(32) | YES | null | 字段名称，实际物理表中的字段名称。| 
| HTMLTYPE | NUMBER | YES | null | 表现形式，1:单行文本，2:多行文本，3:带格式文本，4:checkbox，5:下拉框，6:Browser，7:附件，8:checkbox多选。| 
| FIELDTYPE | VARCHAR2(32) | YES | null | 字段类型，1:文本，2:整数，3:浮点数，4:日期，5:时间，6:日期时间，若表现形式为下拉框或Browser，该字段存放SELECTITEMTYPE或REFOBJ表对应的ID字段。| 
| FIELDATTR | VARCHAR2(512) | YES | null | 字段属性，当字段类型为节点多选时可以填写 $currentnode$带出当前节点；当字段类型为文档Browser时该字段表示文档类型(0:可选择可新建，1:只新建，2:只选择)。| 
| FIELDCHECK | VARCHAR2(1024) | YES | null | 字段验证| 
| LABELID | VARCHAR2(32) | YES | null | | 
| LABELNAME | VARCHAR2(128) | YES | null | 显示名称| 
| ISDELETE | NUMBER | YES | null | 是否逻辑删除，0:否，1:是。| 
| COL1 | VARCHAR2(256) | YES | null | | 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 
| ISONLY | NUMBER | YES | null | 是否唯一，0:否，1:是。若设置唯一,字段在失去焦点时通过AJAX进行验证。| 
| NEEDLOG | NUMBER | YES | null | 是否记录变更日志，0:否，1:是。暂不支持明细表。| 
| ISPROMPT | VARCHAR2(32) | YES | null | 是否数据提醒，0:否，1:是。通过jquery.autocomplete显示最多15条之前保存的数据。| 
| ISEXCEL | NUMBER | YES | 1 | 是否Excel导入导出字段，0:否，1:是。| 
| ISDEFAULT | NUMBER | YES | 0 | 是否系统默认创建的字段，0:否，1:是。当表单用途为交流、日程时系统会默认创建一些字段。| 
| ISMONEY | NUMBER | YES | null | 是否金额字段，0:否，1:是。金额字段以千分位显示。| 
| DOCDIR | VARCHAR2(64) | YES | null | 文档目录，若文档类型为可新建时必须选择，对应CATEGORY表中的ID字段。| 
| ORDERNUM | NUMBER | YES | null | 显示顺序，手机版中表单的字段排序。| 
| ISENCRYPTION | NUMBER | YES | null | 是否加密| 
| EXCELORDERNUM | NUMBER | YES | null | 导出顺序，excel导出字段顺序| 

### formInfo 自定义表单信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| SELECTITEMID | VARCHAR2(32) | YES | null | 表单分类，对应SELECTITEM表中的ID字段。| 
| OBJNAME | VARCHAR2(256) | YES | null | 表单名称| 
| OBJDESC | VARCHAR2(1024) | YES | null | 描述| 
| OBJTABLENAME | VARCHAR2(32) | YES | null | 物理表名| 
| OBJTYPE | NUMBER | YES | null | 表单类型，0：实际表，1：抽象表，4：虚拟表。| 
| COL1 | VARCHAR2(256) | YES | null | 表单用途，0:普通，1:交流，2:日程。| 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除。0：否，1：是。| 
| MODULEID | VARCHAR2(32) | YES | null | 所属模块ID，对应MODULE表中的ID字段。| 

### formLayout 表单布局信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| FORMID | VARCHAR2(32) | YES | null | 对应表单ID| 
| NODEID | VARCHAR2(32) | YES | null | 对应节点ID| 
| TYPEID | NUMBER | YES | null | 布局类型，1:显示布局，2:编辑布局。| 
| LAYOUTINFO | CLOB | YES | null | 表单布局HTML代码| 
| LAYOUTFORMATTE D | CLOB | YES | null | 解析后的表单布局HTML代码，| 
| LAYOUTNAME | VARCHAR2(256) | YES | null | 布局名称| 
| ISDEFAULT | NUMBER | YES | null | 是否默认，0:非默认，1:默认。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除。0：否，1：是。| 
| supportedclient | NUMBER | YES | 0 | 支持的客户端。0：PC客户端，1：手机客户端| 

### formLayoutField 表单布局字段及子表属性信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| LAYOUTID | VARCHAR2(32) | YES | null | 对应表单布局ID| 
| FORMID | VARCHAR2(32) | YES | null | 默认为null，若存放的是子表属性则为子表ID。| 
| FIELDNAME | VARCHAR2(32) | YES | null | 对应的字段ID| 
| STYLE | VARCHAR2(128) | YES | null | 从布局中解析出的STYLE属性| 
| FORMULA | VARCHAR2(1024) | YES | null | 字段属性| 
| DEFAULTVALUE | VARCHAR2(256) | YES | null | 若数据为子表属性则存放的是筛选条件。| 
| SHOWSTYLE | NUMBER | YES | null | 显示样式，0:隐藏，1:只读，2:可编辑，3:必填。若存放的是子表属性，0:不可添加不可删除，1:可添加不可删除，2不可添加可删除:3:可添加可删除。| 
| COL1 | VARCHAR2(256) | YES | null | 表单布局中设置的字段显示顺序| 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除。0:否，1:是。| 
| ISHTMLSIGNATURE PROTECTED | INT | YES | 0 | 是否受电子签章保护。0:否，1:是。| 

### formLink 表单关系
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OID | VARCHAR2(32) | YES | null | 表单ID| 
| PID | VARCHAR2(32) | YES | null | 关联表单ID| 
| TYPEID | NUMBER | YES | null | 表单关系，1:包含，2:主从，3:扩展。| 
| FIELDMAP | VARCHAR2(128) | YES | null | 关联字段名| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0:否，1:是。| 

## 报表
### combineField 组合字段
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REPORTID | VARCHAR2(32) | YES | null | 设置组合字段所在的报表，存放的是 reportdef表中的id| 
| OBJNAME | VARCHAR2(256) | YES | null | 组合字段的名称| 
| FORMFIELDID | VARCHAR2(32) | YES | null | 需要组合的字段id，存放的formfield表中的id| 
| ISDELETE | NUMBER | YES | '0' | 是否删除 0表示否 1表示是| 

### contemplate 报表查询模板设置
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(256) | YES | '' | 报表查询模板名称| 
| REPORTID | VARCHAR2(32) | NO | null | 设置查询模板所在的报表 存放的是 reportdef表的id| 
| USERID | VARCHAR2(32) | NO | null | 创建查询模板的当前用户 存放的是humres表的id报表根据条件查询的sql;存放的是| 
| TEMPSQL | CLOB | YES | null | ReportAction类中getSql()方法返回的sql[0] 报表中求和的sql;存放的是ReportAction类中| 
| SUMSQL | CLOB | YES | null | getSql()方法返回的sql[1]| 
| CREATETIME | VARCHAR2(20) | YES | null | 创建查询模板的时间| 
| ISPUBLIC | VARCHAR2(6) | YES | null | 是否是公共模板 false表示是私人 true表示是公共| 
| COL1 | VARCHAR2(256) | YES | null | 存放的是TEMPSQL列中sql语句中？对应的值| 
| COL2 | VARCHAR2(256) | YES | null | 预留字段| 
| COL3 | VARCHAR2(256) | YES | null | 预留字段| 
| ISDELETE | NUMBER | YES | 0 | 是否删除 0表示否 1表示是| 
| OBJDESC | VARCHAR2(2048) | YES | '' | 排序| 
| TEMPMAP | CLOB | YES | null | 存放的是此查询模板对应的报表条件| 
| ISDEFAULT | NUMBER | YES | 0 | 是否默认 0表示否 1表示是| 

### groupField 报表查询条件关系配置
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| GROUPNAME | VARCHAR2(100) | YES | null | 名称| 
| REPORTID | VARCHAR2(64) | YES | null | 报表ID| 
| LOGIC | VARCHAR2(64) | YES | null | 逻辑操作符，默认“or”。| 
| DESCRIPTION | VARCHAR2(256) | YES | null | 描述| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### groupFieldDetail 报表查询条件关联字段关联表
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| GROUPID | VARCHAR2(64) | YES | null | 组(关系ID)，对应GROUPFIELD表中的ID字段| 
| FIELDID | VARCHAR2(64) | YES | null | 字段ID，对应FORMFIELD表中的ID字段。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### reportDef 报表配置信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| FORMID | VARCHAR2(32) | YES | null | 关联表单，对应FORMINFO表中的ID字段。| 
| OBJNAME | VARCHAR2(256) | YES | null | 名称| 
| OBJTYPE | VARCHAR2(32) | YES | null | 类型，对应SELECTITEMTYPE中的报表类型。| 
| OBJDESC | VARCHAR2(512) | YES | null | 描述| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| OBJOPTS | VARCHAR2(2048) | YES | null | 报表操作者(弃用)| 
| OBJMODELNAME | VARCHAR2(128) | YES | null | 多表单报表模板文件名(弃用)| 
| OBJSAVEPATH | VARCHAR2(128) | YES | null | 多表单报表文件保存路径(弃用)| 
| OBJTYPE2 | VARCHAR2(32) | YES | null | 报表类型，workflow：流程报表，sql：多表单SQL报表，birt：BIRT报表。(默认 workflow，其它两种类型弃用)| 
| VIEWTYPE | NUMBER | YES | null | 显示模式，0：分页，1：分组，2：上下级，3：多级分组。| 
| GROUPBY | VARCHAR2(32) | YES | null | 默认分组字段| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| SELECTCONDITIONS | VARCHAR2(1024) | YES | '' | 查询限条件| 
| TREEBY | VARCHAR2(50) | YES | '' | 树关联显示字段| 
| GROUPBYTREE | VARCHAR2(50) | YES | '' | 自身关联字段| 
| SECFORMID | VARCHAR2(250) | YES | null | 子表，对应FORMINFO表中的ID字段。| 
| ISFORMBASE | VARCHAR2(20) | YES | null | 数据源，0：全部数据，1：表单数据，2：流程数据。| 
| REPORTUSAGE | NUMBER | YES | null | 是否数据监控，0：否，1：是。(弃用)| 
| MODULEID | VARCHAR2(32) | YES | null | 所属模块，对应MODULE表中的ID字段。| 
| ISREFRESH | NUMBER | YES | null | 是否定时刷新，0：否，1：是。| 
| ISEXPEXCEL | NUMBER | YES | null | 是否Excel导出，0：否，1：是。| 
| DEFAULTTIME | NUMBER | YES | null | 定时刷新间隔(分)| 
| ISBATCHUPDATE | NUMBER | YES | null | 是否显示Checkbox，0：否，1：是。| 
| GROUPBY1 | VARCHAR2(32) | YES | null | 默认分组字段1| 
| GROUPBY2 | VARCHAR2(32) | YES | null | 默认分组字段2| 
| JSCONTENT | CLOB | YES | null | 脚本内容| 
| DELETETYPE | NUMBER | YES | null | 数据删除类型，0：逻辑删除，1：物理删除。| 

### reportField 报表字段属性配置
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REPORTID | VARCHAR2(32) | YES | null | 报表，对应REPORTDEF表中的ID字段。| 
| FORMFIELDID | VARCHAR2(32) | YES | null | 字段，对应FORMFIELD表中的ID字段。| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISORDERFIELD | NUMBER | YES | null | 是否排序，0：否，1：默认升序，2：默认降序，3：是。| 
| ISSUM | NUMBER | YES | null | 是否统计，0：否，1：是。| 
| HREFLINK | VARCHAR2(256) | YES | null | 链接路径| 
| SHOWNAME | VARCHAR2(256) | YES | null | 显示名称| 
| ALERTCOND | VARCHAR2(256) | YES | null | 预警条件| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | SQL| 
| COL3 | VARCHAR2(256) | YES | null | 是否提示(鼠标移至单元格中显示TITLE信息)，0：否，1：是。| 
| SHOWWIDTH | NUMBER | YES | null | 显示列宽(%)| 
| ISBROWSER | VARCHAR2(2) | YES | null | 是否Browser中显示，0：否，1：是。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| SHOWMETHOD | VARCHAR2(32) | YES | null | 显示方式，0：选择项，1：图标，2：图标+选择项，3：数值，4：进度条。| 
| PRIORDER | VARCHAR2(5) | YES | null | 默认排序优先级| 
| ISHREFFIELD | VARCHAR2(5) | YES | null | 是否链接字段，0：否，1：是。| 

### reportSearchField 报表查询条件配置
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| REPORTID | VARCHAR2(32) | YES | null | 报表，对应REPORTDEF表中的ID字段。| 
| FORMFIELDID | VARCHAR2(32) | YES | null | 字段，对应FORMFIELD表中的ID字段。| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| ISQUESTSEARCH | VARCHAR2(2) | YES | null | 是否快捷搜索，0：否，1：是。| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| ISFILLIN | VARCHAR2(5) | YES | null | 是否必填，0（null）：否，1：是。| 

### searchCustomize 自定义查询模板查询结果列定义
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| USERID | VARCHAR2(32) | YES | null | 用户| 
| TABLENAME | VARCHAR2(32) | YES | null | 报表，对应REPORTDEF表中的ID字段。| 
| OBJID | VARCHAR2(32) | YES | null | 字段，对应REPORTFIELD表中的ID字段。| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| CONTEMPLATEID | VARCHAR2(50) | YES | null | 自定义查询模板，对应CONTEMPLATE表中的ID字段。| 

## 菜单
### customAction 自定义动作（用于页面扩展）
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJNAME | VARCHAR2(256) | YES | null | 名称| 
| FORMID | VARCHAR2(64) | YES | null | 更新的表单，对应FORMINFO表中的ID字段| 
| DESCRIPTION | VARCHAR2(1024) | YES | null | 描述| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### customActionDetail 自定义动作详细配置
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| FIELDID | VARCHAR2(64) | YES | null | 更新的字段，对应FORMFIELD表中的ID字段| 
| DEFVALUE | VARCHAR2(1024) | YES | null | 更新数据，存放固定值、$currentdate$、{字段ID}等。| 
| ACTIONID | VARCHAR2(64) | YES | null | 自定义动作，对应CUSTOMACTION表中的ID字段。| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### menu 菜单信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| LABELID | VARCHAR2(32) | YES | null | 未使用(可能之前做多语言国际化时使用，现在未使用，无意义)| 
| MENUNAME | VARCHAR2(256) | YES | null | 菜单名称| 
| PID | VARCHAR2(32) | YES | null | 父菜单的ID(对应同表中的ID字段，如果该菜单是顶级菜单无父菜单,则此字段值为null)| 
| URL | VARCHAR2(1024) | YES | null | 菜单对应的URL| 
| MENUTYPE | NUMBER | YES | null | 菜单类型(1:系统菜单, 2:用户菜单)| 
| NODETYPE | NUMBER | YES | null | 节点类型| 
| IMGFILE | VARCHAR2(256) | YES | null | 菜单对应图片的路径| 
| DSPORDER | NUMBER | YES | null | 菜单显示顺序| 
| ISSHOW | NUMBER | YES | null | 菜单是否显示(0:不显示, 1:显示)| 
| COL1 | VARCHAR2(256) | YES | null | 扩展字段(尚未用到)| 
| COL2 | VARCHAR2(256) | YES | null | 扩展字段(尚未用到)| 
| COL3 | VARCHAR2(256) | YES | null | 扩展字段(尚未用到)| 
| ISDELETE | NUMBER | YES | 0 | 是否被删除(0：未被删除，1:已被删除)| 
| CONDITION | VARCHAR2(1024) | YES | null | 查询条件(此查询条件查询出来的结果会放置在菜单名称的后面进行显示,如待办数量等)| 
| DISPLAYPOSITION | VARCHAR2(50) | YES | null | 菜单显示位置(left:仅在左侧显示, top:仅在顶部显示, 同时包含left和top并用逗号分隔:左侧和顶部都显示)| 
| MODULEID | VARCHAR2(32) | YES | null | 菜单所属模块(和模块表的id字段的对应)| 

### menuOrg 组织菜单信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| MENUID | VARCHAR2(32) | YES | null | 菜单id(对应menu表的主键id)| 
| ORGUNITID | VARCHAR2(32) | YES | null | 组织id(该id有可能对应是组织机构id,岗位id和人员id其中之一)| 
| COL1 | VARCHAR2(256) | YES | null | 该组织菜单的类型(0:表示该数据的ORGUNITID引用的是组织机构id, 1:表示该数据的ORGUNITID引用的是岗位id, 2:表示该数据的ORGUNITID引用的是人员id)| 
| COL2 | VARCHAR2(256) | YES | null | 扩展字段(尚未用到)| 
| COL3 | VARCHAR2(256) | YES | null | 扩展字段(尚未用到)| 
| ISDELETE | NUMBER | YES | 0 | 是否被删除(0：未被删除，1:已被删除)| 

### pageMenu 页面扩展(按钮、标签)
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| PAGEPROP | VARCHAR2(256) | YES | null | 链接源| 
| TOURL | VARCHAR2(1024) | YES | null | 链接目标| 
| LABELID | VARCHAR2(32) | YES | null | 多语言标签ID| 
| SHOWNAME | VARCHAR2(256) | YES | null | 名称| 
| ACCESSKEY | VARCHAR2(256) | YES | null | 快捷键| 
| OBJID | VARCHAR2(32) | YES | null | 关联ID| 
| OBJTABLE | VARCHAR2(256) | YES | null | 关联表名| 
| RIGHTTYPE | VARCHAR2(256) | YES | null | 所需权限| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISSHOW | NUMBER | YES | null | 是否显示，0：否，1：是。| 
| COL1 | VARCHAR2(256) | YES | null | 显示条件(SELECT语句)，当查询结果大于0时显示，否则不显示。| 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 
| IMGFILE | VARCHAR2(255) | YES | null | 图标路径| 
| MODULEID | VARCHAR2(32) | YES | null | 所属模块| 
| CUSTOMACTIONID | VARCHAR2(64) | YES | null | 自定义动作，对应CUSTOMACTION表中的ID字段。| 
| PROPTYPE | VARCHAR2(32) | YES | null | 链接源类型，1：分类，2：流程，3：节点，4：布局，5：报表，6：手动输入。| 
| SHOWSTYLE | VARCHAR2(32) | YES | null | 显示样式，1：按钮，2：标签。| 
| TOURLTYPE | VARCHAR2(32) | YES | null | 链接目标，1：分类，2：流程，3：报表，4：手动输入。| 
| TOURLSPAN | VARCHAR2(32) | YES | null | 链接目标ID，分类：对应CategoryID，流程：对应WorkflowID，报表：对应ReportdefID。| 
| BTNSHOWSTYLE | VARCHAR2(32) | YES | null | 按钮形式，1：新开标签页，2：弹出窗口，3：其它形式。| 
| ACTIONUSE | NUMBER | YES | null | 自定义动作用于，1：修改单张卡片，2：报表批量修改。| 

## 模块信息
### module 模块信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| PID | VARCHAR2(32) | YES | null | 上级模块ID| 
| LABELID | VARCHAR2(32) | YES | null | | 
| OBJNAME | VARCHAR2(256) | YES | null | 名称| 
| DSPORDER | NUMBER | YES | null | 显示顺序| 
| ISDELETE | NUMBER | YES | '0' | 是否逻辑删除，0:否，1:是。| 
| DESCRIPTION | VARCHAR2(500) | YES | null | 描述| 
| colInStartWorkFlow | NUMBER | YES | null | 该模块在新建流程页面的列位置| 
| dsporderInStartWor kFlow | NUMBER | YES | null | 该模块在新建流程页面的顺序| 

## 其他
### keyInfo 系统使用流水号
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| KEYNAME | VARCHAR2(256) | YES | null | 名称，docbase：用于文档 objno，workflow：用于流程objno……| 
| KEYVALUE | NUMBER | YES | null | 当前值| 
| COL1 | VARCHAR2(256) | YES | null | (备用)| 
| COL2 | VARCHAR2(256) | YES | null | (备用)| 
| COL3 | VARCHAR2(256) | YES | null | (备用)| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### keyWords 数据库关键字信息表
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| KEYWORDS | VARCHAR2(256) | YES | null | 关键字名称，必须全部大写。| 
| DBTYPE | VARCHAR2(32) | YES | null | 数据库类型(oracle,sqlserver)| 
| COL1 | VARCHAR2(256) | YES | null | | 
| COL2 | VARCHAR2(256) | YES | null | | 
| COL3 | VARCHAR2(256) | YES | null | | 

### loginUpPass 首次登陆修改密码日志
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJID | VARCHAR2(32) | YES | null | 用户id
| OBJNAME | VARCHAR2(256) | YES | null | 用户名称
| UPDATETIME | VARCHAR2(20) | YES | null | 修改密码日期及时间
| ISUPDATEPASS | NUMBER | YES | 0 | 是否登录修改密码
| ISDELETE | NUMBER | YES | 0 | 是否删除（0：未删除，1：已删除）
| CUSTOMDATE | VARCHAR2(32) | YES | null | 该字段已经不使用

### sqlUpgrade 升级包SQL文件执行日志
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| STATUS | NUMBER | YES | 1 | 状态，0：成功，1：失败。| 
| ERRORDATE | VARCHAR2(32) | YES | null | 执行日期| 
| ERRORTIME | VARCHAR2(32) | YES | null | 执行时间| 
| ERRORFILE | VARCHAR2(128) | YES | null | SQL文件名| 
| ERRORROW | NUMBER | YES | 0 | 执行失败语句在文件中的行号| 
| ERRORSQL | VARCHAR2(4000) | YES | null | 执行失败语句，截取前600个字符。| 
| ERRORSTR | VARCHAR2(1024) | YES | null | 异常信息| 
| ISDELETE | NUMBER | YES | 0 | 是否逻辑删除，0：否，1：是。| 

### templateViewer 模板配置信息
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| id      | varchar2(32) | NO | null | 主键 |
| OBJECTNAMES | VARCHAR2(4000) | YES | null | 模板中使用的SQL对象| 
| TEMPLATETEXT | CLOB | YES | null | 模板内容| 
| ISDELETE | NUMBER | YES | '0' | 是否逻辑删除，0:否，1:是。| 
| TITLE | VARCHAR2(255) | YES | null | 标题| 
| EDITID | VARCHAR2(32) | YES | null | ACTION，对应DYNAMICFORMACTION表中的ID字段。| 
| ISREPORT | NUMBER | YES | null | | 

### timeStamps 系统时间戳
| fieldName      | fieldType     | isnull  | default | remark   |
| ------------- |:-------------| :----- | :-----| :-----|
| LDAPIMPORTTIME | CHAR(10) | NO | null | LDAP最后同步日期|
| NOTIFYTIME | CHAR(10) | NO | null | 提醒最后发送日期|
| DATETIME | VARCHAR2(8) | NO | null | 提醒最后发送时间|



