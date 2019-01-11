---
sidebarDepth: 0
title: SVN版本管理
---

## 分支说明
| 标识      | 说明     |
| ------------- |:-------------|
| trunk      | 主开发版本 |
| tags      | 每次发布的版本 |
| branches      | 分支，tags发布版本有bug，则创建一个分支tag_release_1.0,然后修改bug,修改完成后在tags中创建release版本，完成后merge到trunk中 |

## 基本规范
* 先更新(SVN Update)，再提交(SVN Commit)
* 如果代码没放在源代码管理软件里，等于它不存在
* 要早提交，常提交，并且不要觉得麻烦
* 提交前要检查你更改了什么
* 写提交信息时一定要认真
* 你必须自己提交你的更改内容--不能委托他人
* 编译生成的文件不要放进源代码管理软件里
* 不要上传你自己的用户设置
* 附属文件也要集成在一起  

## SVN常用命令
| 命令      | 说明     | 例子 |
|:---------- |---------| --------|
| svn checkout path   | 将文件checkout到本地,path是服务器的目录 | svn checkout svn://192.168.1.1/projectName/trunk |
| svn add filename | 往版本库中添加新的文件 | svn add test.java |
| svn commit -m "注释" [-N][--no-unlock]|将改动的文件提交到版本库(如果选择了保持就使用--no-unlock开关),简写svn ci | svn commit -m "测试" test.java |
| svn lock -m "注释" path | 加锁 | svn lock -m "测试" test.java |
| svn unlock path | 解锁 | svn unlock test.java |
| svn update -r 版本号 path | 更新到某个版本 | svn update -r 200 test.java |
| svn update path | 更新到最新版本，简写svn up | svn update test.java|
| svn status path | 显示目录下的文件和子目录下的文件状态，正常状态不显示 | ?:不在svn控制中;M:内容被修改;C：发生冲突;A:预定义加入到版本库;K:被锁定 |
| svn status -v path | 显示文件和子目录状态| |
| svn delete path -m "注释"| 删除文件 | svn delete svn://192.168.1.1/projectName/trunk/test.java -m "delete test file" (或者直接svn delete test.php 然后再svn ci -m 'delete test file‘，推荐使用这种)|
| svn log path | 查看日志 | |
| svn info path | 查看文件详细信息 ||
| svn diff path | 将修改的文件与基本版本比较 ||
| svn diff -r m:n | 将修改的文件m版本和n版本比较||
| svn merge -r m:n path | 将两个版本的文件的差异合并到当前文件| svn merge -r 20:25 test.java(将版本20与25之间的差异合并到当前文件，但一般会发生冲突，需要处理下)|
| svn help | svn帮助||
| svn list path | 显示path目录下的所属版本的文件和目录||
| svn mkdir path | 创建纳入版本控制下的新目录,每一个以工作副本path指定的目录，都会创建在本地端，并且加入新增调度，以待下一次的提交| |
| svn mkdir url | 创建纳入版本控制下的新目录，每个以url指定的目录，都会透过立即提交于仓库中创建。||
| svn revert | 恢复本地修改，恢复原始未改变的工作副本文件 | |
| svn switch | 更新工作副本到不同的url| |
| svn switch url [path] | 更新工作副本，映射到一个新的url,会将服务上的文件与本地文件合并。这是将工作副本对应到同一仓库的某个分支或者标记的方法||
| svn switch --relocate from to [path] | 改写工作副本URL元数据，以反映URL的变更，仓库URL变动但工作副本仍旧对映同一仓库的同一目录时使用该命令更新工作副本与仓库的对应关系|
| svn resolved path | 移除工作副本的目录或文件的冲突状态，不会解决冲突或是移除冲突标记，只是移除冲突的相关文件，然后让path可以再次提交| |
| svn cat 目标[@版本]| 输出指定的URL内容，如果指定了版本将从指定的版本开始查找||

## idea上合并分支说明
https://baijiahao.baidu.com/s?id=1566894856997719&wfr=spider&for=pc

