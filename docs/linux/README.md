---
sidebarDepth: 0
title: Linux知识
---

## 基本命令
| 功能      | 命令     |
| ------------- |:-------------|
| 复制文件夹  | cp -r tomcat tomcat_bak01 |
| 清空swap交换分区 | sync<br>echo1 > /proc/sys/vm/drop_caches<br>free -m<br>swapoff -a<br>swapon -a|
| 修改hostname | vim /etc/hosts |
| 删除文件及文件夹 | rm -rf ...|
| 压缩文件夹 | tar -zcvf tomcat.tar.gz tomcat|
| 解压缩文件夹 | tar -zxvf tomcat.tar.gz |
| 查看linux线程 | netstat -anltp |
| 开启端口(centos) | firewall-cmd --permanent --zone=public --add-port=80/tcp<br>systemctl restart firewalld.service|
| 修改日期时间| date -s 06/10/96<br>date -s 14:22:00<br>hwclock -w (写入bios) |
| 安装网络工具,如Ping等 | yum install net-tools |
| 日期时间与网络时间同步 | yum -y install ntp ntpdate<br> ntpdate cn.pool.ntp.org<br>hwclock --systohc |
| 拷贝文件到其他服务器上 | scp /opt/tmp/1.txt root@192.168.56.121:/opt/tmp|
| 修改open files的最大数 | 1、查看open files的最大数：ulimit -a<br>修改file-max:<br># vim /etc/sysctl.conf，加入以下内容，重启生效:<br>fs.file-max=6553560<br>修改ulimitd的open file,系统默认的ulimit对文件打开数量的限制是1024<br>#vim /etc/security/limits.conf加入以下内容：<br>soft nofile 65535<br>hard nofile 65535<br>重启生效|

