---
sidebarDepth: 3
title: 软考
---
  
## 对数 logarithm 
如果a的x次方等于N(a>0,且a不等于1)，那么数X叫做以a为底N的对数,记作 log<sub>a</sub>N=x,其中a叫做对数的底数，N叫做真数。   
上面的解释很抽象，换个说法：log<sub>10</sub>100 相当于问 ‘将多少个10相乘的结果为100’,答案是两个：10 x 10 = 100。因此log<sub>10</sub>100 = 2   
## 数据结构与算法
经典的数据结构大致分为：list、stack、queue、linkedList、dictionary、hash、set、tree、graph等等
![avatar](/img/softExamination/tree/mainPic.png)  

## 线性表
线性表（linear list）是数据结构的一种，一个线性表是n个具有相同特性的数据元素的有限序列。

>特征
1. 集合中必存在唯一的一个第一个元素
2. 集合中必存在唯一的一个最后元素
3. 除最后一个元素之外，均有唯一的后继(后件)
4. 除第一个元素之外，均有唯一的前驱(前件)
> 存储结构 
1. 线性表主要由顺序表示或链式表示。在实际应用中，常以栈、队列、字符串等特殊形式使用。
> 结构特点
1. 均匀性：虽然不同数据表的数据元素可以是各种各样的，但对于同一线性表的各数据元素必定具有相同的数据类型和长度。
2. 有序性：各数据元素在线性表中的位置只取决于它们的序号，数据元素之前的相对位置是线性的，即存在唯一的第一个和最后一个的数据元素，除了第一个和最后一个外，其它元素前面均只有一个数据元素（直接前驱）和后面均只有一个数据元素（直接后继）
> 相关计算公式
1. 插入一个新元素需要移动的元素个数期望值为：n/2
2. 删除一个元素时需要移动的元素个数为：(n-1)/2

## 数组和链表
### 数组
数组是定长线性表在维数上的扩展，即线性表中的元素又是一个线性表。n维数组是一种“同构”的数据结构，其每个数据元素类型相同、结构一致。   
数组结构特点：   
1. 数据元素数目固定，一旦定义了一个数组结构，就不再有元素个数的增减变化。
2. 数据元素具有相同的类型。
3. 数据元素的下标关系具有上下界的约束且下标有序。   

数组的顺序存储：   
数组一般不做插入和删除运算，一旦定义了数组，则结构中的数据元素个数和元素之间的关系就不再发生变动，因此数组适合于采用顺序存储结构。   
二维数组：   
二维数组的存储结构可分为以行为主序和以列为主序的两种方法：   
![avatar](/img/softExamination/tree/array3.png)    
设每个数据元素占用L个单元，m、n为数组的行数和列数，Loc(a<sub>11</sub>)表示元素a<sub>11</sub>的地址,
那么以行为主序优先存储的地址计算公式为：   
>Loc(a<sub>ij</sub>) = Loc(a<sub>11</sub>) + ((i - 1) * n + (j - 1)) * L

同理，以列为主序优先存储的地址计算公式为：   
>Loc(a<sub>ij</sub>) = Loc(a<sub>11</sub>) + ((j - 1) * m + (i - 1)) * L

数组总结：连续的存储空间，读速度快，删除和插入慢，因为删除和插入后需要对后续的存储进行移位   
![avatar](/img/softExamination/tree/array.jpeg)    

### 链表
链表：散列的存储空间(也可连续的存储空间)，读速度慢，删除和插入速度快   
![avatar](/img/softExamination/tree/array2.jpeg)     
带头结点的链表：头结点数据域不存放数据，头结点的下一个结点是链表的第一个元素，从第一个元素开始存储有效数据。
   ![avatar](/img/softExamination/tree/list2.gif)    
#### 链表的查询、删除和插入
在链式存储结构中，只需要一个指针指向第一个结点，就可以顺序地访问到表中的任意一个元素。
在链式存储结构下进行插入和删除，其实质都是对相关指针的修改。
>单链表的插入   

![avatar](/img/softExamination/tree/linelist1.png)  
```markdown
s->next = p->next;
p->next = s;
```
1. p->next:p所指结点的后继结点指针域，s->next:s所指结点的后继结点指针域，即把a结点的后继指针域赋值给c结点的后继结点指针域   
![avatar](/img/softExamination/tree/linelist2.png)     
2. 把a结点的后继指针域指向c   
![avatar](/img/softExamination/tree/linelist3.png)  
### 数组和链表的优缺点
>数组的优点
* 随机访问性强
* 查找速度快
>数组的缺点
* 插入和删除效率低
* 可能浪费内存
* 内存空间要求高，必须有足够的连续内存空间
* 数组大小固定，不能动态拓展
>链表的优点：
* 插入删除速度快
* 内存利用率高，不会浪费内存
* 大小没有固定，拓展很灵活
>链表的缺点
* 不能随即查找，必须从第一个开始遍历，查找效率低   

|       | 数组     | 链表  |
| ------------- |:-------------| :----- |
|读取  | O(1) |  O(n)  |
|插入  | O(n) |  O(1)  |
|删除  | O(n) |  O(1)  |

## 矩阵
### 特殊矩阵
若矩阵中元素（或非0元素）的分布有一定的规律，则称之为特殊矩阵。
常见的特殊矩阵有对称矩阵、三角矩阵和对角矩阵。
#### 对称矩阵
若矩阵A<sub>n*n</sub>中的元素特点为aij=aji(i>=1,n>=j)，则称之为n阶对称矩阵。
#### 对角矩阵
对角矩阵是指矩阵中的非0元素都集中在以主对角线为中心的带状区域中，即除了主对角线上和直角对角线上、下方若干条对角线上的元素外，其余的矩阵元素都为0
#### 稀疏矩阵
在一个矩阵中，若非0元素的个数远远少于0元素的个数，且非0元素的分布没有规律，则称之为稀疏矩阵。

## 广义表

## 栈、队列
### 栈
栈是限定仅在表头进行插入和删除操作的线性表。   
栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。它按照先进后出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据。   
栈顶：线性表允许进行插入和删除的那一端   
栈底：固定的，不允许进行插入和删除的另一端   
空栈：不含任何元素的空表   
>进栈出栈的变化形式：

如果我们有3个整形数字元素1、2、3依次进栈，会有哪些出栈次序呢？
* 第一种：1、2、3进，再3、2、1出。这事最简单的最好理解的一种，出栈次序为321
* 第二种：1进，1出，2进，2出，3进，3出，出栈次序为123
* 第三种：1进，2进，2出，1出，3进，3出，出栈次序为213
* 第四种：1进，1出，2进，3进，3出，2出，出栈次序为132
* 第五种：1进，2进，2出，3进，3出，1出，出栈次序为231
有没有可能是312这样的次序出栈呢，答案是不可能的，因为3先出栈，就意味着3曾经进栈，既然3进栈了，那也意味着1和2已经进栈了，此时，2一定是在1的上面，就是更接近栈顶，那么出栈只可能是321，不然不满足123一次进栈的要求，所以此时不会发生1比2先出栈的情况

### 栈的应用
1. 括号是否匹配
读取算术表达式，遇到左括号 '('、'{'、'[' 压入栈，栈的特点是后入先出，所以当遇到右括号 ')'、'}'、']'的时候，
取出栈顶元素，是否满足读取的右括号，栈顶是与之相匹配的左括号。最后判断是否为空，为空证明该表达式没有问题，否则则说明这个表达式存在括号不匹配问题。
2. 回文
3. 进制转换

### 队列
队列是一种特殊的线性表，特殊之处在于它只允许在表的前端(front)进行删除操作，而在表的后段(rear)进行插入操作，和栈一样，队列是一种操作受限制的线性表，进行插入操作的端称为队尾，进行删除操作的端称为队头。队列中没有元素时，称为空队列。
  ![avatar](/img/softExamination/tree/list.png)   
##### 循环队列
循环队列满时，数组中还有一个空的单元。如图4-12-8所示，我们认为，队列已经满了，也就是说，我们不允许出现4-12-7的右图情况出现。
![avatar](/img/softExamination/tree/4-12-8.PNG)
![avatar](/img/softExamination/tree/4-12-7.PNG)  
队列满的条件是：
```markdown
(rear+1)%QueueSize == front
```
通用的计算队列长度的公式为：
```markdown
(rear - front+ QueueSize)%QueueSize
```
## 树和二叉树
### 相关术语
度：   
&#160; &#160; &#160; &#160;一个结点含有的子树的个树称为该结点的度   
  ![avatar](/img/softExamination/tree/tree.png)    
叶子结点：   
&#160; &#160; &#160; &#160;度为0的结点      
分支结点：   
&#160; &#160; &#160; &#160;度不为0的结点      
树的度：   
&#160; &#160; &#160; &#160;一棵树中，最大的结点的度称为树的度      
结点的层次：   
&#160; &#160; &#160; &#160;从根开始定义起，根为第1层，根的子结点为第2层，以此类推
  ![avatar](/img/softExamination/tree/tree2.png)           
树的高度或深度：   
&#160; &#160; &#160; &#160;树中结点的最大层次      
兄弟结点：   
&#160; &#160; &#160; &#160;具有相同父结点的结点互称为兄弟结点      
堂兄弟结点：   
&#160; &#160; &#160; &#160;双亲在同一层的结点互为堂兄弟      
结点的祖先：   
&#160; &#160; &#160; &#160;从根到该结点所经分支上的所有结点      
森林：   
&#160; &#160; &#160; &#160;由m(m>0)棵互不相交的树的集合称为森林      
路径：   
&#160; &#160; &#160; &#160;在一棵树中，从一个结点往下可以达到的孩子或子孙结点之间的通路，称为路径      
路径长度：   
&#160; &#160; &#160; &#160;通路中分支的数目称为路径长度，若规定根结点的层数为1，则从根结点到第L层结点的路径长度为L-1      
结点的权：   
&#160; &#160; &#160; &#160;若将树中结点赋给一个有着某种含义的数值，则这个数值称为该结点的权      
结点的带权路径长度：   
&#160; &#160; &#160; &#160;从根结点到该结点之间的路径长度与该结点的权的乘积     
*****
### 树的种类
无序树：   
&#160; &#160; &#160; &#160;树中任意结点的子结点之间没有顺序关系，这种树称为无序树，也称为自由树   
有序树：   
&#160; &#160; &#160; &#160;树中任意结点的子结点之间有顺序关系，这种树称为有序树   
二叉树：   
&#160; &#160; &#160; &#160;每个结点最多含有两个子树的树   
  ![avatar](/img/softExamination/tree/binaryTree.png)   
满二叉树（Perfect Binary Tree(PBT)）：   
&#160; &#160; &#160; &#160;除最后一层无任何子结点外，每一层上的所有结点都有两个子结点的二叉树(A Perfect Binary Tree is a tree with all leaf nodes at the same depth.All internal nodes have degree 2)   
  ![avatar](/img/softExamination/tree/PBT.png)    
完全二叉树(Complete Binary Tree(CBT))：   
&#160; &#160; &#160; &#160;完全二叉树从根结点到倒数第二结点满足完美二叉树，最后一层可以不完全填充，
其叶子结点都靠左对齐（A Complete Binary Tree is a binary tree in which every level,except possibly the last,is completely filled,
and all nodes are as far left as possible）   
  ![avatar](/img/softExamination/tree/CBT.png)    
完满二叉树（Full Binary Tree(FBT)):   
&#160; &#160; &#160; &#160;所有非叶子结点的度都是2，即只要你有孩子，你就必然是有两个孩子（A Full Binary Tree is a tree in which every node other than the leaves has two children）   
  ![avatar](/img/softExamination/tree/FBT.png)    
霍夫曼树：   
&#160; &#160; &#160; &#160;带权路径最短的二叉树称为霍夫曼树或最优二叉树   
二叉查找树（Binary Search Tree）：   
&#160; &#160; &#160; &#160;二叉查找树又被称为二叉搜索树，设x为二叉查找树中的一个结点，x结点包含关键字key,结点x的key值记为key[x]。如果y是x的左子树中的一个结点，则key[y]<=key[x];如果y是x的右子树的一个结点，则key[y]>=key[x]   
二叉查找树的性质：   
* 若任意结点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
* 任意结点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
* 任意结点的左、右子树也分别为二叉查找树。
* 没有键值相等的结点(no duplicate nodes)   
  ![avatar](/img/softExamination/tree/BST.jpg)
*****
### 二叉树的性质
* 性质1： 二叉树第i层上的结点数目最多为2<sup>i-1</sup>(i>=1)
* 性质2： 深度为k的二叉树至多有2<sup>k</sup>-1个结点(k>=1)
* 性质3： 具有n个结点的完全二叉树的深度为[log<sub>2</sub>n] + 1 ([]表示向下取整)
* 性质4： 在任意一颗二叉树中，若终端结点的个数为n<sub>0</sub>，度为2的结点数为n<sub>2</sub>，则n<sub>0</sub>=n<sub>2</sub>+1
*****
###  二叉树的遍历
二叉树遍历分为四种：前序、中序、后序、层序遍历，其中中序遍历最为重要。为啥叫这个名字？是根据根结点的顺序命令的
  ![avatar](/img/softExamination/tree/loop.png)  
  比如上图正常的一个满结点，A：根结点、B：左结点、C：右结点
  * 前序顺序是ABC（根结点排最先，然后同级先左后右 -> 根左右）；
  * 中序顺序是BAC（先左后根最后右 -> 左根右）；
  * 后续顺序是BCA（先左后右最后根 -> 左右根）；
  * 层序遍历是ABC，按照树的层次自上而下的遍历二叉树
     
 ![avatar](/img/softExamination/tree/loop2.png)  
  比如上图二叉树遍历结果：
 * 前序遍历：ABCDEFGHK；
 * 中序遍历：BDCAEHGKF；
 * 后序遍历：DCBHKGFEA；
 *****
 ###  二叉树的存储结构
 包括 顺序存储、链式存储
 #### 顺序存储
 二叉树的顺序存储结构就是使用一维数组存储二叉树中的结点，并且结点的存储位置，就是数组的下标索引   
  ![avatar](/img/softExamination/tree/binaryTree2.png)    
  上图所示的一棵完全二叉树采用顺序存储方式：      
   ![avatar](/img/softExamination/tree/binaryTree3.png)    
 由图可以看出，当二叉树为完全二叉树时，结点数刚好填满数组。   
 那么当二叉树不为完全二叉树时，采用顺序存储形式如何呢？   
![avatar](/img/softExamination/tree/binaryTree4.png)    
 其中浅色结点表示结点不存在，其顺序存储结构：   
![avatar](/img/softExamination/tree/binaryTree5.png)    
  其中,^表示数组中此位置没有存储结点。此时可以发现，顺序存储结构中已经出现了空间浪费的情况。   
  那么对于右斜树极端情况对应的顺序存储结构如图：    
![avatar](/img/softExamination/tree/binaryTree6.png)     
   由图可以看出，对于这种右斜树极端情况，采用顺序存储的方式是十分浪费空间的，因此，顺序存储一般适用于完全二叉树。   
#### 二叉链表
既然顺序存储不能满足二叉树的存储需求，那么考虑采用链式存储。   
由二叉树定义可知，二叉树的每个结点最多有两个孩子。因此，可以将结点数据结构定义为一个数据和两个指针域。如图所示：   
![avatar](/img/softExamination/tree/binaryTree7.png)        
上面的完全二叉树可采用如下方法存储：   
![avatar](/img/softExamination/tree/binaryTree8.png)    
这种采用链表结构存储二叉树，称为二叉链表。
 *****
#### 常见的二叉树操作
* 前序遍历，中序遍历，后序遍历，层次遍历
* 求树的结点树
* 求树的叶子树
* 求树的深度
* 求二叉树第K层的结点树
* 判断两棵二叉树是否结构相同
* 求二叉树的镜像
* 求两个结点的最低公共祖先结点
* 求任意两个结点距离
* 找出二叉树中某个结点的所有祖先结点
* 不使用递归和栈遍历二叉树
* 二叉树前序中序推后序
* 判断二叉树是不是完全二叉树
* 判断是否是二叉查找树的后序遍历结果
* 给定一个二叉查找树中的结点，找出在中序遍历下它的后继和前驱
* 二分查找树转化为排序的循环双链表
* 有序链表转化为平衡的二分查找树
## 图
### 图的基本概念

### 图的遍历与最小生成树

### 拓扑排序与关键路径

## 排序算法

## 哈希表

## 查找算法

## 文法

## 正规式

## 有限自动机

## 语法推导树

## 算符优先

## 进程

## 存储

## 作业管理

## 目录和spooling

## 软件开发生命周期模型

## 软件需求分析与设计

## 结构化分析与设计

## 测试基础

## 软件测试的步骤

## 黑盒测试

## 白盒测试

## 软件维护

## 软件过程改进

## E-R模型

## 键（码）、函数依赖及范式

## 无损分解

## 关系代数

## 元组演算

## SQL语言

## d多媒体相关基本概念及计算问题

## 常见多媒体标准及压缩技术

## 流水线

## 高速缓冲存储器-Cache

## 编址与存储相关计算

## 树制

## 校验码

## 网络相关基础概念

## OSI模型

## TCPIP协议

## IP地址的划分及子网划分

## 传输介质和网络应用

## 系统的可靠性

## 数据安全加密

## 网络安全

## 软件设计技术总论

## 数据流图设计

## 面向对象设计

## 数据库设计

## 算法设计

## Web Service应用

## 标准化基本概念

## 常见标准化组织与标准

## 著作权法解读

## 计算机保护条例解读

## 商标法解读

## 专利法与反不正当竞争法解读

## 知识产权考点讲解

## 面向对象的分析与设计

## 面向对象程序设计

## 设计模式基础

## 设计模式（创建型模式）

## 设计模式（结构型模式）

## 设计模式（行为型模式）