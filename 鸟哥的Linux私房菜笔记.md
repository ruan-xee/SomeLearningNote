# 0.计算机概论

#### 1、CPU的主要工作在于管理和运算，因此，CPU主要分为两个主要的单元，算数逻辑单元和控制单元。其中算数逻辑单 元主要负责程序运算与逻辑判断，控制单元则主要在协调各周边元件与各单元间的工作。

#### 2、CPU要处理的数据完全来自于内存，内存中的数据从输入单元所传输过来，CPU处理后的数据也是重新写回内存中去，最后再从内存中把数据传输到输出单元中去。

#### 3、五大单元包括：算数逻辑单元、控制单元、输入、输出单元、系统单元、存储单元

#### 4、CPU依设计理念主要分为：精简指令集（RISC）与复杂指令集（CISC）系统； 

#### 5、关于CPU的频率部分：外频指的是CPU与外部元件进行数据传输时的速度，倍频则是 CPU内部用来加速工作性能的一个倍数， 两者相乘才是CPU的频率速度； 

#### 6、新的 CPU 设计中，已经将北桥的内存控制芯片整合到 CPU 内，而 CPU 与内存、显卡沟通的总线通常称为系统总线。 南桥就是所谓的输入输出（I/O）总线，主要在联系硬盘、USB、网卡等周边设备；

#### 7、 CPU每次能够处理的数据量称为字组大小（word size），字组大小依据CPU的设计而有 32位与64位。 我们现在所称的电脑是32或64位主要是依据这个 CPU解析的字组大小而 来的！

#### 8、个人电脑的内存主要元件为动态随机存取内存（Dynamic Random Access Memory, DRAM）， 至于CPU内部的第二层高速缓存则使用静态随机存取内存（Static Random Access Memory, SRAM）；	

#### 9、 BIOS（Basic Input Output System）是一套程序，这套程序是写死到主板上面的一个内 存芯片中， 这个内存芯片在没有通电时也能够将数据记录下来，那就是只读存储器 （Read Only Memory, ROM）；

#### 10、目前主流的外接卡接口大多为 PCIe 接口，且最新为 PCIe 3.0，单信道速度高达 1GBytes/s；

#### 11、常见的显卡连接到屏幕的接口有 HDMI/DVI/D-Sub/Display port 等等。HDMI 可同时传送 影像与声音；

#### 12、传统硬盘的组成为：圆形盘片、机械手臂、 磁头与主轴马达所组成的，其中盘片的组成 为扇区、磁道与柱面； 磁盘连接到主板的接口大多为 SATA 或 SAS，目前台式机主流为 SATA 3.0，理论极速可 达 600MBytes/s；

#### 13、常见的文字编码为 ASCII，繁体中文编码主要有 Big5 及 UTF8 两种，目前主流为 UTF8；

#### 14、操作系统（Operating System, OS）其实也是一组程序， 这组程序的重点在于管理电脑 的所有活动以及驱动系统中的所有硬件。 电脑主要以二进制作为单位，常用的磁盘容量单位为Bytes，其单位换算为1Byte = 8bits；

#### 15、最阳春的操作系统仅在驱动与管理硬件，而要使用硬件时，就得需要通过应用软件或者 是壳程序（shell）的功能， 来调用操作系统操纵硬件工作。目前称为操作系统的，除了上述功能外，通常已经包含了日常工作所需要的应用软件在内了。

# 1.Linux是什么与如何学习

### 1、简单的说，整个开机流程到操作系统之前的动作应该是这样的：

#### 	1. BIOS：开机主动执行的固件，会认识第一个可开机的设备；

#### 	2. MBR：第一个可开机设备的第一个扇区内的主要开机记录区块，内含开机管理程序；

#### 	3. 开机管理程序（boot loader）：一支可读取核心文件来执行的软件；

#### 	4. 核心文件：开始操作系统的功能。

### 2、boot loader的主要任务有下面这些项目：

#### 	提供菜单：使用者可以选择不同的开机项目，这也是多重开机的重要功能！

#### 	载入核心文件：直接指向可开机的程序区段来开始操作系统；

#### 	转交其他loader：将开机管理功能转交给其他loader负责。

<img src="C:\Users\rxee\AppData\Roaming\Typora\typora-user-images\image-20210801222954373.png" alt="image-20210801222954373" style="zoom:50%;" />

### 我们将上图作个总结： 

#### 	每个分区都拥有自己的开机扇区（boot sector）；

#### 	图中的系统盘为第一及第二分区；

#### 	实际可开机的核心文件是放置到各分区内的；

#### 	loader只会认识自己的系统盘内的可开机核心文件，以及其他loader而已；

#### 	loader可直接指向或者是间接将管理权转交给另一个管理程序。



# 4.首次登陆与线上求助

- #### 文件名以“.”开头的为隐藏文件

- #### ctrl+alt+F1进入图像模式

- #### ctrl+alt+[F2-F6]进入文字模式

- #### ctrl+alt+del重新启动图像模式

- #### 文字模式中“exit”命令为登出Linux，**离开系统不等于关机**

- #### 命令行区分大小写

- #### 'LANG=en_US.utf8'、'export LC_ALL=en_US.utf8'命令为设置英文语系

- #### 'date'查看日期、'cal'查看日历、'locale'查看当前语系、'bc'打开计算器

- #### 'date +%Y/%m/%d'按照特殊格式查看日期

- #### [tab]可以自动补齐,按下两次[tab]列出所有带有该开头的命令或文件

- #### ctrl+c终止当前执行的命令

- #### ctrl+d离开命令行

- #### shift+pgUp或shift+pgDn命令行上下翻页查看

- #### [指令] --help可以查看命令的相关帮助文档

- #### man查看说明文档

- #### 在man模式中输入'/xxx'进行关键词查找模式,'n'或'N'进行上下查找

- #### man -f xxx查找所有与该指令相关的说明文档

- #### man -k xxx查找具有该关键字的相关说明文档

- #### info xxx以段落的形式打开操作说明或说明文档,pgUp或pgDn进行上下翻页,tab键进行目录选择,回车键进行跳转(需要有相关的info文件才能使用该命令)

- #### /usr/share/doc目录中也有一些相关说明文档

- #### nano xxx.txt文档编辑器

- #### shutdown [-krhc] [time] [information]选项与参数：

  #### 	-k： 不要真的关机，只是发送警告讯息出去！ 

  ##### 	-r：在将系统的服务停掉之后就重新开机。（常用)

  #### 	-h ： 将系统的服务停掉后，立即关机。（常用）

  #### 	-c ： 取消已经在进行的 shutdown 指令内容。

  #### 	时间：指定系统关机的时间！时间的范例下面会说明。若没有这个项目，则默认1分钟后自动进行。 

  #### 	例：shutdown -h 10 'I will shutdown after 10 mins.'将在十分钟后关机，并向目前登陆者发送引号	间的信息。

  ```bash
  [root@study ~]# shutdown -h now
  立刻关机，其中 now 相当于时间为 0 的状态
  [root@study ~]# shutdown -h 20:25
  系统在今天的 20:25 分会关机，若在21:25才下达此指令，则隔天才关机
  [root@study ~]# shutdown -h +10
  系统再过十分钟后自动关机
  [root@study ~]# shutdown -r now
  系统立刻重新开机
  [root@study ~]# shutdown -r +30 'The system will reboot'
  再过三十分钟系统会重新开机，并显示后面的讯息给所有在线上的使用者
  [root@study ~]# shutdown -k now 'This system will reboot'
  仅发出警告信件的参数！系统并不会关机啦！吓唬人！
  
  [root@study ~]# sync; sync; sync; reboot # 保存数据，重新启动
  [root@study ~]# halt # 系统停止～屏幕可能会保留系统已经停止的讯息！
  [root@study ~]# poweroff # 系统关机，所以没有提供额外的电力，屏幕空白！
  ```

  

- #### systemctl中与关机相关的指令：

  ```bash
  [root@study ~]# systemctl [指令]
  指令项目包括如下：
  halt 进入系统停止的模式，屏幕可能会保留一些讯息，这与你的电源管理模式有关
  poweroff 进入系统关机模式，直接关机没有提供电力喔！
  reboot 直接重新开机
  suspend 进入休眠模式
  [root@study ~]# systemctl reboot # 系统重新开机
  [root@study ~]# systemctl poweroff # 系统关机
  ```

  

# 5.Linux的文件权限与目录配置

- #### 在我们Linux系统当中，默认的情况下，所有的系统上的帐号与一般身份使用者，还有那个root的相关信息， 都是记录在/etc/passwd这个文件内的。至于个人的密码则是记录 在/etc/shadow这个文件下。此外，Linux所有的群组名称都纪录在/etc/group内！这三个文件可以说是Linux系统里面账号、密码、群组信息的集中地啰！ 不要随便删除这三个文件啊！

```bash
[root@study ~]# ls -al
total 48
dr-xr-x---. 5 root root 4096 May 29 16:08 .
dr-xr-xr-x. 17 root root 4096 May 4 17:56 ..
-rw-------. 1 root root 1816 May 4 17:57 anaconda-ks.cfg
-rw-------. 1 root root 927 Jun 2 11:27 .bash_history
-rw-r--r--. 1 root root 18 Dec 29 2013 .bash_logout
-rw-r--r--. 1 root root 176 Dec 29 2013 .bash_profile
-rw-r--r--. 1 root root 176 Dec 29 2013 .bashrc
drwxr-xr-x. 3 root root 17 May 6 00:14 .config <=范例说明处
drwx------. 3 root root 24 May 4 17:59 .dbus
-rw-r--r--. 1 root root 1864 May 4 18:01 initial-setup-ks.cfg <=范例说明处
[ 1 ]     [ 2 ][ 3 ][ 4 ][ 5 ]  [ 6 ]      [ 7 ]
[权限]    [链接][拥有者][群组][文件大小][ 修改日期 ] [ 文件名 ]
```

- #### 第一栏代表这个文件的类型及权限


​		-rwxrwx---
​		第一位为文件类型，[d]为目录；[-]为文件；[l]为链接文件；[b]为设备文件里面的可供储存的周边设备（可随机存取设		备）；[c]为设备文件里面的序列埠设备，例如键盘、鼠标（一次性读取设备）
​		接下来每三个为一组，第一组为文件拥有者可具备的权限，第二组为“加入此群组之帐号的权限”，第三组为“非本人且		没有加入本群组之其他帐号的权限”
​		且每一组内的三个位置所对应的权限也不会改变，第一个位置为[r]可读，第二个位置为[w]可写，第三个位置为[x]可		执行，如果没有对应的权限，则该位置显示[-]

- #### 第二栏表示有多少文件名链接到此节点（i-node）


- #### 第三栏表示这个文件（或目录）的拥有者账号


- #### 第四栏表示这个文件的所属群组


- #### 第五栏表示这个文件的容量大小，默认单位为Bytes


- #### 第六栏表示这个文件的创建日期或是最近的修改日期


​		这一栏的显示时间格式一般为“月 日 时:分”，但如果时间太久远，则会变为“月 日 年”，“ls -l --full-time”就能显示完整		的时间格式了，包括年月日时分。

- #### 第七栏为这个文件的文件名


​		比较特殊的是如果文件名前多一个“.”符号，则表示该文件为隐藏文件，通过“ls”命令不能查看隐藏文件，通过“ls -a”则		可以显示出隐藏文件。



#### 改变所属组群 chgrp

```bash
[root@study ~]# chgrp [-R] dirname/filename ...
选项与参数：
-R : 进行递回（recursive）的持续变更，亦即连同次目录下的所有文件、目录
都更新成为这个群组之意。常常用在变更某一目录内所有的文件之情况。
范例：
[root@study ~]# chgrp users initial-setup-ks.cfg
[root@study ~]# ls -l
-rw-r--r--. 1 root users 1864 May 4 18:01 initial-setup-ks.cfg
[root@study ~]# chgrp testing initial-setup-ks.cfg
chgrp: invalid group: `testing' <== 发生错误讯息啰～找不到这个群组名～
```

#### 改变所属拥有者chown

```bash
[root@study ~]# chown [-R] 帐号名称 文件或目录
[root@study ~]# chown [-R] 帐号名称:群组名称 文件或目录
选项与参数：
-R : 进行递回（recursive）的持续变更，亦即连同次目录下的所有文件都变更
范例：将 initial-setup-ks.cfg 的拥有者改为bin这个帐号：
[root@study ~]# chown bin initial-setup-ks.cfg
[root@study ~]# ls -l
-rw-r--r--. 1 bin users 1864 May 4 18:01 initial-setup-ks.cfg
范例：将 initial-setup-ks.cfg 的拥有者与群组改回为root：
[root@study ~]# chown root:root initial-setup-ks.cfg
[root@study ~]# ls -l
-rw-r--r--. 1 root root 1864 May 4 18:01 initial-setup-ks.cfg
```

​		chown也可以使用“chown user.group file”，亦即在拥有者与群组间加上小数点“ . ”也行！此外，chown也能单纯的修		改所属群组呢！例如“chown .sshd initial-setup-ks.cfg”就是修改群组！

#### 改变权限chmod

- 数字类型改变文件权限

```bash
[root@study ~]# chmod [-R] xyz 文件或目录
选项与参数：
> r:4 > w:2 > x:1
xyz : 就是刚刚提到的数字类型的权限属性，为 rwx 属性数值的相加。
-R : 进行递回（recursive）的持续变更，亦即连同次目录下的所有文件都会变更

举例来说，如果要将.bashrc这个文件所有的权限都设置启用，那么就下达：
[root@study ~]# ls -al .bashrc
-rw-r--r--. 1 root root 176 Dec 29 2013 .bashrc
[root@study ~]# chmod 777 .bashrc
[root@study ~]# ls -al .bashrc
-rwxrwxrwx. 1 root root 176 Dec 29 2013 .bashrc
```

- 符号类型改变文字权限

```bash
| chmod | u g o a | +（加入） -（除去） =（设置） | r w x | 文件或目录 |

[root@study ~]# chmod u=rwx,go=rx .bashrc
# 注意喔！那个 u=rwx,go=rx 是连在一起的，中间并没有任何空白字符！
[root@study ~]# ls -al .bashrc
-rwxr-xr-x. 1 root root 176 Dec 29 2013 .bashrc

[root@study ~]# ls -al .bashrc
-rwxr-xr-x. 1 root root 176 Dec 29 2013 .bashrc
[root@study ~]# chmod a+w .bashrc
[root@study ~]# ls -al .bashrc
-rwxrwxrwx. 1 root root 176 Dec 29 2013 .bashrc

[root@study ~]# chmod a-x .bashrc
[root@study ~]# ls -al .bashrc
-rw-rw-rw-. 1 root root 176 Dec 29 2013 .bashrc
[root@study ~]# chmod 644 .bashrc # 测试完毕得要改回来喔！
```



#### 文件权限概念

- ##### 对文件的权限概念


- r：读到该文件内容
- w：对该文件内容进行修改
- x：执行文件内容

- ##### 对文件夹的权限概念


- r：读到该文件夹下的文件列表
- w：变动该文件夹中的内容（创建、删除、更名、复制、剪切）
- x：进入该文件夹的权限

- ##### 当文件夹没有x权限时，不能进入该文件夹，即“cd”进入该文件夹命名将反馈失败，无权限；


- ##### 当文件夹没有x权限有r权限时，可列出文件夹下的文件列表，但没有详细信息，且无法进入文件夹；


- ##### 当文件夹有w权限时，无论其中的文件的权限是何，都有删除其中任一文件的权限，所有不要轻易对文件夹赋予w权限；


- ##### 当文件夹有x权限没有r权限时，能进入该文件夹，但无法罗列出其中的文件列表，需要对文件夹内部文件结构了解。




# 6.Linux文件与目录管理

#### 目录的相关操作

. 代表此层目录

.. 代表上一层目录

-代表前一个工作目录

~代表“目前使用者身份”所在的主文件夹

~account 代表 account 这个使用者的主文件夹（account是个帐号名称）

#### 常见的处理目录指令

- ##### cd：变换目录


```bash
[dmtsai@study ~]$ su - # 先切换身份成为 root 看看！
[root@study ~]# cd [相对路径或绝对路径]
# 最重要的就是目录的绝对路径与相对路径，还有一些特殊目录的符号啰！
[root@study ~]# cd ~dmtsai
# 代表去到 dmtsai 这个使用者的主文件夹，亦即 /home/dmtsai
[root@study dmtsai]# cd ~
# 表示回到自己的主文件夹，亦即是 /root 这个目录
[root@study ~]# cd
# 没有加上任何路径，也还是代表回到自己主文件夹的意思喔！
[root@study ~]# cd ..
# 表示去到目前的上层目录，亦即是 /root 的上层目录的意思；
[root@study /]# cd -
# 表示回到刚刚的那个目录，也就是 /root 啰～
[root@study ~]# cd /var/spool/mail
# 这个就是绝对路径的写法！直接指定要去的完整路径名称！
[root@study mail]# cd ../postfix
# 这个是相对路径的写法，我们由/var/spool/mail 去到/var/spool/postfix 就这样写！
```

- ##### pwd：显示目前所在的目录


```bash
[root@study ~]# pwd [-P]
选项与参数：
-P ：显示出确实的路径，而非使用链接 （link） 路径。
范例：单纯显示出目前的工作目录：
[root@study ~]# pwd
/root <== 显示出目录啦～
范例：显示出实际的工作目录，而非链接文件本身的目录名而已
[root@study ~]# cd /var/mail <==注意，/var/mail是一个链接文件
[root@study mail]# pwd
/var/mail <==列出目前的工作目录
[root@study mail]# pwd -P
/var/spool/mail <==怎么回事？有没有加 -P 差很多～
[root@study mail]# ls -ld /var/mail
lrwxrwxrwx. 1 root root 10 May 4 17:51 /var/mail -&gt; spool/mail
# 看到这里应该知道为啥了吧？因为 /var/mail 是链接文件，链接到 /var/spool/mail
# 所以，加上 pwd -P 的选项后，会不以链接文件的数据显示，而是显示正确的完整路径啊！
```

- ##### mkdir：创建新目录


```bash
[root@study ~]# mkdir [-mp] 目录名称
选项与参数：
-m ：设置文件的权限喔！直接设置，不需要看默认权限 （umask） 的脸色～
-p ：帮助你直接将所需要的目录（包含上层目录）递回创建起来！
范例：请到/tmp下面尝试创建数个新目录看看：
[root@study ~]# cd /tmp
[root@study tmp]# mkdir test <==创建一名为 test 的新目录
[root@study tmp]# mkdir test1/test2/test3/test4
mkdir: cannot create directory ‘test1/test2/test3/test4’: No such file or directory
# 话说，系统告诉我们，没可能创建这个目录啊！就是没有目录才要创建的！见鬼嘛？
[root@study tmp]# mkdir -p test1/test2/test3/test4
# 原来是要建 test4 上层没先建 test3 之故！加了这个 -p 的选项，可以自行帮你创建多层目录！
范例：创建权限为rwx--x--x的目录
[root@study tmp]# mkdir -m 711 test2
[root@study tmp]# ls -ld test*
drwxr-xr-x. 2 root root 6 Jun 4 19:03 test
drwxr-xr-x. 3 root root 18 Jun 4 19:04 test1
drwx--x--x. 2 root root 6 Jun 4 19:05 test2
# 仔细看上面的权限部分，如果没有加上 -m 来强制设置属性，系统会使用默认属性。
# 那么你的默认属性为何？这要通过下面介绍的 [umask](../Text/index.html#umask) 才能了解喔！ ^_^
```

- ##### rmdir：删除空目录


```bash
[root@study ~]# rmdir [-p] 目录名称
选项与参数：
-p ：连同“上层”“空的”目录也一起删除
范例：将于mkdir范例中创建的目录（/tmp下面）删除掉！
[root@study tmp]# ls -ld test* <==看看有多少目录存在？
drwxr-xr-x. 2 root root 6 Jun 4 19:03 test
drwxr-xr-x. 3 root root 18 Jun 4 19:04 test1
drwx--x--x. 2 root root 6 Jun 4 19:05 test2
[root@study tmp]# rmdir test <==可直接删除掉，没问题
[root@study tmp]# rmdir test1 <==因为尚有内容，所以无法删除！
rmdir: failed to remove ‘test1’: Directory not empty
[root@study tmp]# rmdir -p test1/test2/test3/test4
[root@study tmp]# ls -ld test* <==您看看，下面的输出中test与test1不见了！
drwx--x--x. 2 root root 6 Jun 4 19:05 test2
# 瞧！利用 -p 这个选项，立刻就可以将 test1/test2/test3/test4 一次删除～
# 不过要注意的是，这个 rmdir 仅能“删除空的目录”喔！
```

- ##### 将ls指令文件从bin中移动到root文件夹中（务必先切换至root身份）：

```bash
[root@study ~]# mv /bin/ls /root
# mv 为移动，可将文件在不同的目录间进行移动作业
```

- ##### 因为这个ls确实存在于/root下面，并不是被删除了！所以我们可以通过使用绝对路径或 者是相对路径直接指定这个可执行文件文件名， 下面的两个方法都能够执行ls这个指令：

```bash
[root@study ~]# /root/ls <==直接用绝对路径指定该文件名
[root@study ~]# ./ls <==因为在 /root 目录下，就用./ls来指定
```

- ##### 如果想要让root在任何目录均可执行/root下面的ls，那么就将/root加入PATH当中即可：

```bash
[root@study ~]# PATH="${PATH}:/root"
```



#### 文件与目录的检视：ls

```bash
[root@study ~]# ls [-aAdfFhilnrRSt] 文件名或目录名称..
[root@study ~]# ls [--color={never,auto,always}] 文件名或目录名称..
[root@study ~]# ls [--full-time] 文件名或目录名称..
选项与参数：
-a ：全部的文件，连同隐藏文件（ 开头为 . 的文件） 一起列出来（常用）
-A ：全部的文件，连同隐藏文件，但不包括 . 与 .. 这两个目录
-d ：仅列出目录本身，而不是列出目录内的文件数据（常用）
-f ：直接列出结果，而不进行排序 （ls 默认会以文件名排序！）
-F ：根据文件、目录等信息，给予附加数据结构，例如：
*:代表可可执行文件； /:代表目录； =:代表 socket 文件； |:代表 FIFO 文件；
-h ：将文件大小以人类较易读的方式（例如 GB, KB 等等）列出来；
-i ：列出 inode 号码，inode 的意义下一章将会介绍；
-l ：长数据串行出，包含文件的属性与权限等等数据；（常用）
-n ：列出 UID 与 GID 而非使用者与群组的名称 （UID与GID会在帐号管理提到！）
-r ：将排序结果反向输出，例如：原本文件名由小到大，反向则为由大到小；
-R ：连同子目录内容一起列出来，等于该目录下的所有文件都会显示出来；
-S ：以文件大小大小排序，而不是用文件名排序；
-t ：依时间排序，而不是用文件名。
--color=never ：不要依据文件特性给予颜色显示；
--color=always ：显示颜色
--color=auto ：让系统自行依据设置来判断是否给予颜色
--full-time ：以完整时间模式 （包含年、月、日、时、分） 输出
--time={atime,ctime} ：输出 access 时间或改变权限属性时间 （ctime）
					而非内容变更时间 （modification time）
```

#### 复制、删除和移动：cp、rm、mv

- ##### cp：复制文件或目录


```bash
[root@study ~]# cp [-adfilprsu] 来源文件（source） 目标文件（destination）
[root@study ~]# cp [options] source1 source2 source3 .... directory
选项与参数：
-a ：相当于 -dr --preserve=all 的意思，至于 dr 请参考下列说明；（常用）
-d ：若来源文件为链接文件的属性（link file），则复制链接文件属性而非文件本身；
-f ：为强制（force）的意思，若目标文件已经存在且无法打开，则移除后再尝试一次；
-i ：若目标文件（destination）已经存在时，在覆盖时会先询问动作的进行（常用）
-l ：进行硬式链接（hard link）的链接文件创建，而非复制文件本身；
-p ：连同文件的属性（权限、用户、时间）一起复制过去，而非使用默认属性（备份常用）；
-r ：递回持续复制，用于目录的复制行为；（常用）
-s ：复制成为符号链接文件 （symbolic link），亦即“捷径”文件；
-u ：destination 比 source 旧才更新 destination，或 destination 不存在的情况下才复制。
--preserve=all ：除了 -p 的权限相关参数外，还加入 SELinux 的属性, links, xattr 等也复制了。
最后需要注意的，如果来源文件有两个以上，则最后一个目的文件一定要是“目录”才行！
```

复制练习：

```bash
范例一：用root身份，将主文件夹下的 .bashrc 复制到 /tmp 下，并更名为 bashrc
[root@study ~]# cp ~/.bashrc /tmp/bashrc
[root@study ~]# cp -i ~/.bashrc /tmp/bashrc
cp: overwrite `/tmp/bashrc'? n <==n不覆盖，y为覆盖
# 重复作两次动作，由于 /tmp 下面已经存在 bashrc 了，加上 -i 选项后，
# 则在覆盖前会询问使用者是否确定！可以按下 n 或者 y 来二次确认呢！
范例二：变换目录到/tmp，并将/var/log/wtmp复制到/tmp且观察属性：
[root@study ~]# cd /tmp
[root@study tmp]# cp /var/log/wtmp . <==想要复制到目前的目录，最后的 . 不要忘
[root@study tmp]# ls -l /var/log/wtmp wtmp
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 /var/log/wtmp
-rw-r--r--. 1 root root 28416 Jun 11 19:01 wtmp
# 注意上面的特殊字体，在不加任何选项的情况下，文件的某些属性/权限会改变；
# 这是个很重要的特性！要注意喔！还有，连文件创建的时间也不一样了！
# 那如果你想要将文件的所有特性都一起复制过来该怎办？可以加上 -a 喔！如下所示：
[root@study tmp]# cp -a /var/log/wtmp wtmp_2
[root@study tmp]# ls -l /var/log/wtmp wtmp_2
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 /var/log/wtmp
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 wtmp_2
# 瞭了吧！整个数据特性完全一模一样ㄟ！真是不赖～这就是 -a 的特性！

范例三：复制 /etc/ 这个目录下的所有内容到 /tmp 下面
[root@study tmp]# cp /etc/ /tmp
cp: omitting directory `/etc' <== 如果是目录则不能直接复制，要加上 -r 的选项
[root@study tmp]# cp -r /etc/ /tmp
# 还是要再次的强调喔！ -r 是可以复制目录，但是，文件与目录的权限可能会被改变
# 所以，也可以利用“ cp -a /etc /tmp ”来下达指令喔！尤其是在备份的情况下！
范例四：将范例一复制的 bashrc 创建一个链接文件 （symbolic link）
[root@study tmp]# ls -l bashrc
-rw-r--r--. 1 root root 176 Jun 11 19:01 bashrc <==先观察一下文件情况
[root@study tmp]# cp -s bashrc bashrc_slink
[root@study tmp]# cp -l bashrc bashrc_hlink
[root@study tmp]# ls -l bashrc*
-rw-r--r--. 2 root root 176 Jun 11 19:01 bashrc <==与原始文件不太一样了！
-rw-r--r--. 2 root root 176 Jun 11 19:01 bashrc_hlink
lrwxrwxrwx. 1 root root 6 Jun 11 19:06 bashrc_slink -> bashrc

范例五：若 ~/.bashrc 比 /tmp/bashrc 新才复制过来
[root@study tmp]# cp -u ~/.bashrc /tmp/bashrc
# 这个 -u 的特性，是在目标文件与来源文件有差异时，才会复制的。
# 所以，比较常被用于“备份”的工作当中喔！ ^_^
范例六：将范例四造成的 bashrc_slink 复制成为 bashrc_slink_1 与bashrc_slink_2
[root@study tmp]# cp bashrc_slink bashrc_slink_1
[root@study tmp]# cp -d bashrc_slink bashrc_slink_2
[root@study tmp]# ls -l bashrc bashrc_slink*
-rw-r--r--. 2 root root 176 Jun 11 19:01 bashrc
lrwxrwxrwx. 1 root root 6 Jun 11 19:06 bashrc_slink -> bashrc
-rw-r--r--. 1 root root 176 Jun 11 19:09 bashrc_slink_1 <==与原始文件相同
lrwxrwxrwx. 1 root root 6 Jun 11 19:10 bashrc_slink_2 -> bashrc <==是链接文件！
# 这个例子也是很有趣喔！原本复制的是链接文件，但是却将链接文件的实际文件复制过来了
# 也就是说，如果没有加上任何选项时，cp复制的是原始文件，而非链接文件的属性！
# 若要复制链接文件的属性，就得要使用 -d 的选项了！如 bashrc_slink_2 所示。
范例七：将主文件夹的 .bashrc 及 .bash_history 复制到 /tmp 下面
[root@study tmp]# cp ~/.bashrc ~/.bash_history /tmp
# 可以将多个数据一次复制到同一个目录去！最后面一定是目录！
```

- ##### rm：移除文件或目录


```bash
[root@study ~]# rm [-fir] 文件或目录
选项与参数：
-f ：就是 force 的意思，忽略不存在的文件，不会出现警告讯息；
-i ：互动模式，在删除前会询问使用者是否动作
-r ：递回删除啊！最常用在目录的删除了！这是非常危险的选项！！！
范例一：将刚刚在 cp 的范例中创建的 bashrc 删除掉！
[root@study ~]# cd /tmp
[root@study tmp]# rm -i bashrc
rm: remove regular file `bashrc'? y
# 如果加上 -i 的选项就会主动询问喔，避免你删除到错误的文件名！
范例二：通过万用字符*的帮忙，将/tmp下面开头为bashrc的文件名通通删除：
[root@study tmp]# rm -i bashrc*
# 注意那个星号，代表的是 0 到无穷多个任意字符喔！很好用的东西！
范例三：将 cp 范例中所创建的 /tmp/etc/ 这个目录删除掉！
[root@study tmp]# rmdir /tmp/etc
rmdir: failed to remove '/tmp/etc': Directory not empty <== 删不掉啊！因为这不是空的目录！
[root@study tmp]# rm -r /tmp/etc
rm: descend into directory `/tmp/etc'? y
rm: remove regular file `/tmp/etc/fstab'? y
rm: remove regular empty file `/tmp/etc/crypttab'? ^C <== 按下 [crtl]+c 中断
.....（中间省略）.....
# 因为身份是 root ，默认已经加入了 -i 的选项，所以你要一直按 y 才会删除！
# 如果不想要继续按 y ，可以按下“ [ctrl]-c ”来结束 rm 的工作。
# 这是一种保护的动作，如果确定要删除掉此目录而不要询问，可以这样做：
[root@study tmp]# \rm -r /tmp/etc
# 在指令前加上反斜线，可以忽略掉 alias 的指定选项喔！至于 alias 我们在bash再谈！
# 拜托！这个范例很可怕！你不要删错了！删除 /etc 系统是会挂掉的！
范例四：删除一个带有 - 开头的文件
[root@study tmp]# touch ./-aaa- <==[touch](../Text/index.html#touch)这个指令可以创建空文件！
[root@study tmp]# ls -l
-rw-r--r--. 1 root root 0 Jun 11 19:22 -aaa- <==文件大小为0，所以是空文件
[root@study tmp]# rm -aaarm: invalid option -- 'a' <== 因为 "-" 是选项嘛！所以系统误判了！
Try 'rm ./-aaa-' to remove the file `-aaa-'. <== 新的 bash 有给建议的
Try 'rm --help' for more information.
[root@study tmp]# rm ./-aaa
```

- ##### mv：移动文件与目录，或更名


```bash
[root@study ~]# mv [-fiu] source destination
[root@study ~]# mv [options] source1 source2 source3 .... directory
选项与参数：
-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
-i ：若目标文件 （destination） 已经存在时，就会询问是否覆盖！
-u ：若目标文件已经存在，且 source 比较新，才会更新 （update）
范例一：复制一文件，创建一目录，将文件移动到目录中
[root@study ~]# cd /tmp
[root@study tmp]# cp ~/.bashrc bashrc
[root@study tmp]# mkdir mvtest
[root@study tmp]# mv bashrc mvtest
# 将某个文件移动到某个目录去，就是这样做！
范例二：将刚刚的目录名称更名为 mvtest2
[root@study tmp]# mv mvtest mvtest2 <== 这样就更名了！简单～
# 其实在 Linux 下面还有个有趣的指令，名称为 rename ，
# 该指令专职进行多个文件名的同时更名，并非针对单一文件名变更，与mv不同。请man rename。
范例三：再创建两个文件，再全部移动到 /tmp/mvtest2 当中
[root@study tmp]# cp ~/.bashrc bashrc1
[root@study tmp]# cp ~/.bashrc bashrc2
[root@study tmp]# mv bashrc1 bashrc2 mvtest2
# 注意到这边，如果有多个来源文件或目录，则最后一个目标文件一定是“目录！”
# 意思是说，将所有的数据移动到该目录的意思！
```

- ##### basename和dirname的用途


```bash
[root@study ~]# basename /etc/sysconfig/network
network <== 很简单！就取得最后的文件名～
[root@study ~]# dirname /etc/sysconfig/network
/etc/sysconfig <== 取得的变成目录名了！
```



#### 查阅一个文件的内容

1. ​	cat 由第一行开始显示文件内容
2. ​	tac 从最后一行开始显示，可以看出 tac 是 cat 的倒着写！ 
3. ​	nl 显示的时候，顺道输出行号！ 
4. ​	more 一页一页的显示文件内容 
5. ​	less 与 more 类似，但是比 more 更好的是，他可以往前翻页！ 
6. ​	head 只看头几行 
7. ​	tail 只看尾巴几行 
8. ​	od 以二进制的方式读取文件内容！

- #### 直接检视文件内容

  - ##### cat（concatenate）

  ```bash
  [root@study ~]# cat [-AbEnTv]
  选项与参数：
  -A ：相当于 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
  -b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
  -E ：将结尾的断行字符 $ 显示出来；
  -n ：打印出行号，连同空白行也会有行号，与 -b 的选项不同；
  -T ：将 [tab] 按键以 ^I 显示出来；
  -v ：列出一些看不出来的特殊字符
  范例一：检阅 /etc/issue 这个文件的内容
  [root@study ~]# cat /etc/issue
  \S
  Kernel \r on an \m
  范例二：承上题，如果还要加印行号呢？
  [root@study ~]# cat -n /etc/issue
  1 \S
  2 Kernel \r on an \m
  3
  # 所以这个文件有三行！看到了吧！可以印出行号呢！这对于大文件要找某个特定的行时，有点用处！
  # 如果不想要编排空白行的行号，可以使用“cat -b /etc/issue”，自己测试看看：
  范例三：将 /etc/man_db.conf 的内容完整的显示出来（包含特殊字符）
  [root@study ~]# cat -A /etc/man_db.conf
  # $
  ....（中间省略）....
  MANPATH_MAP^I/bin^I^I^I/usr/share/man$
  MANPATH_MAP^I/usr/bin^I^I/usr/share/man$
  MANPATH_MAP^I/sbin^I^I^I/usr/share/man$
  MANPATH_MAP^I/usr/sbin^I^I/usr/share/man$
  .....（下面省略）.....
  # 上面的结果限于篇幅，鸟哥删除掉很多数据了。另外，输出的结果并不会有特殊字体，
  # 鸟哥上面的特殊字体是要让您发现差异点在哪里就是了。基本上，在一般的环境中，
  # 使用 [tab] 与空白键的效果差不多，都是一堆空白啊！我们无法知道两者的差别。
  # 此时使用 cat -A 就能够发现那些空白的地方是啥鬼东西了！[tab]会以 ^I 表示，
  # 断行字符则是以 $ 表示，所以你可以发现每一行后面都是 $ 啊！不过断行字符
  # 在Windows/Linux则不太相同，Windows的断行字符是 ^M$ 啰。
  # 这部分我们会在[第九章 vim 软件](../Text/index.html#tips_dos)的介绍时，再次的说明到喔！
  ```

  - ##### tac（反向列示）

  ```bash
  [root@study ~]# tac /etc/issue
  Kernel \r on an \m
  \S
  # 嘿嘿！与刚刚上面的范例一比较，是由最后一行先显示喔！
  ```

  - ##### nl（添加行号打印）

  ```bash
  [root@study ~]# nl [-bnw] 文件
  选项与参数：
  -b ：指定行号指定的方式，主要有两种：
  -b a ：表示不论是否为空行，也同样列出行号（类似 cat -n）；
  -b t ：如果有空行，空的那一行不要列出行号（默认值）；
  -n ：列出行号表示的方法，主要有三种：
  -n ln ：行号在屏幕的最左方显示；
  -n rn ：行号在自己字段的最右方显示，且不加 0 ；
  -n rz ：行号在自己字段的最右方显示，且加 0 ；
  -w ：行号字段的占用的字符数。
  范例一：用 nl 列出 /etc/issue 的内容
  [root@study ~]# nl /etc/issue
  1 \S
  2 Kernel \r on an \m
  # 注意看，这个文件其实有三行，第三行为空白（没有任何字符），
  # 因为他是空白行，所以 nl 不会加上行号喔！如果确定要加上行号，可以这样做：
  [root@study ~]# nl -b a /etc/issue
  1 \S
  2 Kernel \r on an \m
  3
  # 呵呵！行号加上来啰～那么如果要让行号前面自动补上 0 呢？可这样
  [root@study ~]# nl -b a -n rz /etc/issue
  000001 \S
  000002 Kernel \r on an \m
  000003
  # 嘿嘿！自动在自己字段的地方补上 0 了～默认字段是六位数，如果想要改成 3 位数？
  [root@study ~]# nl -b a -n rz -w 3 /etc/issue
  001 \S
  002 Kernel \r on an \m
  003
  # 变成仅有 3 位数啰～
  ```

  - ##### more（一页一页翻动）

  ```bash
  [root@study ~]# more /etc/man_db.conf
  #
  #
  # This file is used by the man-db package to configure the man and cat paths.
  # It is also used to provide a manpath for those without one by examining
  # their PATH environment variable. For details see the manpath（5） man page.
  #
  .....（中间省略）.....
  --More--（28%） <== 重点在这一行喔！你的光标也会在这里等待你的指令
  #more 这个程序的运行过程中的一些快捷键
  #空白键 （space）：代表向下翻一页；
  #Enter ：代表向下翻“一行”；
  #/字串 ：代表在这个显示的内容当中，向下搜寻“字串”这个关键字；按下[enter]开始搜索，重复搜索按[n]
  #:f ：立刻显示出文件名以及目前显示的行数；
  #q ：代表立刻离开 more ，不再显示该文件内容。
  #b 或 [ctrl]-b ：代表往回翻页，不过这动作只对文件有用，对管线无用。
  ```

  - ##### less（一页一页翻动）

  ```bash
  [root@study ~]# less /etc/man_db.conf
  ```

  ​	在 more 的时候，我们并没有办法向前面翻，只能往后面看，但若使用了 less 时，呵呵！就可以使用[pageup] [pagedown]等按键的功能来往前往后翻看文件。

  ​	空白键 ：向下翻动一页； 

  ​	[pagedown]：向下翻动一页；

  ​	[pageup]：向上翻动一页；

  ​	/字串：向下搜寻“字串”的功能；

  ​	?字串：向上搜寻“字串”的功能；

  ​	n：重复前一个搜寻（与 / 或 ? 有关！）

  ​	N：反向的重复前一个搜寻（与 / 或 ? 有关！）

  ​	g：前进到这个数据的第一行去；

  ​	G：前进到这个数据的最后一行去（注意大小写）；

  ​	q：离开 less 这个程序；

  - ##### head（取出前面几行）

  ```bash
  [root@study ~]# head [-n number] 文件
  选项与参数：
  -n ：后面接数字，代表显示几行的意思
  [root@study ~]# head /etc/man_db.conf
  # 默认的情况中，显示前面十行！若要显示前 20 行，就得要这样：
  [root@study ~]# head -n 20 /etc/man_db.conf
  范例：如果后面100行的数据都不打印，只打印/etc/man_db.conf的前面几行，该如何是好？
  [root@study ~]# head -n -100 /etc/man_db.conf
  ```

  - ##### tail（取出后面几行）

  ```bash
  [root@study ~]# tail [-n number] 文件
  选项与参数：
  -n ：后面接数字，代表显示几行的意思
  -f ：表示持续侦测后面所接的文件名，要等到按下[ctrl]-c才会结束tail的侦测
  [root@study ~]# tail /etc/man_db.conf
  # 默认的情况中，显示最后的十行！若要显示最后的 20 行，就得要这样：
  [root@study ~]# tail -n 20 /etc/man_db.conf
  范例一：如果不知道/etc/man_db.conf有几行，却只想列出100行以后的数据时？
  [root@study ~]# tail -n +100 /etc/man_db.conf
  范例二：持续侦测/var/log/messages的内容
  [root@study ~]# tail -f /var/log/messages
  <==要等到输入[crtl]-c之后才会离开tail这个指令的侦测！
  ```

  例题：假如我想要显示/etc/man_db.conf的第11到第20行呢？答：这个应该不算难，想一想，在第11到第20行，那么我取前20行，再取后十行，所以结果就是：“head -n 20 /etc/man_db.conf|tail -n 10”，这样就可以得到第11到第20行之间的内容了！ 

  这两个指令中间有个管线（|）的符号存在，这个管线的意思是：“前面的指令所输出的讯息，请通过管线交由后续的指令继续使用”的意思。所以，head -n 20 /etc/man_db.conf 会将文件内的20行取出来，但不输出到屏幕上，而是转交给后续的 tail 指令继续处理。因此 tail “不需要接文件名”，因为 tail 所需要的数据是来自于 head 处理后的结果！

  例题：承上一题，那如果我想要列出正确的行号呢？就是屏幕上仅列出 /etc/man_db.conf 的第11到第20行，且有行号存在？答：我们可以通过 cat -n 来带出行号，然后再通过 head/tail 来撷取数据即可！所以就变成如下的模样了：cat -n /etc/man_db.conf|head -n 20|tail -n 10

  - ##### 非纯文本文件od

  ```bash
  [root@study ~]# od [-t TYPE] 文件
  选项或参数：
  -t：后面可以接各种“类型 （TYPE）”的输出，例如：
  a：利用默认的字符来输出；
  c：使用 ASCII 字符来输出
  d[size] ：利用十进制（decimal）来输出数据，每个整数占用 size Bytes ；
  f[size] ：利用浮点数值（floating）来输出数据，每个数占用 size Bytes ；
  o[size] ：利用八进位（octal）来输出数据，每个整数占用 size Bytes ；
  x[size] ：利用十六进制（hexadecimal）来输出数据，每个整数占用 size Bytes ；
  范例一：请将/usr/bin/passwd的内容使用ASCII方式来展现！
  [root@study ~]# od -t c /usr/bin/passwd
  0000000 177 E L F 002 001 001 \0 \0 \0 \0 \0 \0 \0 \0 \0
  0000020 003 \0 &gt; \0 001 \0 \0 \0 364 3 \0 \0 \0 \0 \0 \0
  0000040 @ \0 \0 \0 \0 \0 \0 \0 x e \0 \0 \0 \0 \0 \0
  0000060 \0 \0 \0 \0 @ \0 8 \0 \t \0 @ \0 035 \0 034 \0
  0000100 006 \0 \0 \0 005 \0 \0 \0 @ \0 \0 \0 \0 \0 \0 \0
  .....（后面省略）....
  # 最左边第一栏是以 8 进位来表示Bytes数。以上面范例来说，第二栏0000020代表开头是
  # 第 16 个 byes （2x8） 的内容之意。
  范例二：请将/etc/issue这个文件的内容以8进位列出储存值与ASCII的对照表
  [root@study ~]# od -t oCc /etc/issue
  0000000 134 123 012 113 145 162 156 145 154 040 134 162 040 157 156 040
  \ S \n K e r n e l \ r o n
  0000020 141 156 040 134 155 012 012
  a n \ m \n \n
  0000027
  # 如上所示，可以发现每个字符可以对应到的数值为何！要注意的是，该数值是 8 进位喔！
  # 例如 S 对应的记录数值为 123 ，转成十进制：1x8^2+2x8+3=83。
  ```

#### 修改文件时间或创建新文件：touch

- modification time（mtime）：当该文件的“内容数据”变更时，就会更新这个时间！内容数据指的是文件的内容，而不是文件的属性或权限喔！


- status time（ctime）：当该文件的“状态（status）”改变时，就会更新这个时间，举例来说，像是权限与属性被更改了，都会更新这个时间啊。


- access time（atime）：当“该文件的内容被取用”时，就会更新这个读取时间（access）。举例来说，我们使用 cat 去读取/etc/man_db.conf ，就会更新该文件的 atime 了。

```bash
[root@study ~]# touch [-acdmt] 文件
选项与参数：
-a ：仅修订 access time；
-c ：仅修改文件的时间，若该文件不存在则不创建新文件；
-d ：后面可以接欲修订的日期而不用目前的日期，也可以使用 --date="日期或时间"
-m ：仅修改 mtime ；
-t ：后面可以接欲修订的时间而不用目前的时间，格式为[YYYYMMDDhhmm]
范例一：新建一个空的文件并观察时间
[dmtsai@study ~]# cd /tmp
[dmtsai@study tmp]# touch testtouch
[dmtsai@study tmp]# ls -l testtouch
-rw-rw-r--. 1 dmtsai dmtsai 0 Jun 16 00:45 testtouch
# 注意到，这个文件的大小是 0 呢！在默认的状态下，如果 touch 后面有接文件，
# 则该文件的三个时间 （atime/ctime/mtime） 都会更新为目前的时间。若该文件不存在，
# 则会主动的创建一个新的空的文件喔！例如上面这个例子！
范例二：将 ~/.bashrc 复制成为 bashrc，假设复制完全的属性，检查其日期
[dmtsai@study tmp]# cp -a ~/.bashrc bashrc
[dmtsai@study tmp]# date; ll bashrc; ll --time=atime bashrc; ll --time=ctime bashrc
Tue Jun 16 00:49:24 CST 2015 <==这是目前的时间
-rw-r--r--. 1 dmtsai dmtsai 231 Mar 6 06:06 bashrc <==这是 mtime
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 15 23:44 bashrc <==这是 atime
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 16 00:47 bashrc <==这是 ctime
范例三：修改案例二的 bashrc 文件，将日期调整为两天前
[dmtsai@study tmp]# touch -d "2 days ago" bashrc
[dmtsai@study tmp]# date; ll bashrc; ll --time=atime bashrc; ll --time=ctime bashrc
Tue Jun 16 00:51:52 CST 2015
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 14 00:51 bashrc
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 14 00:51 bashrc
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 16 00:51 bashrc
# 跟上个范例比较看看，本来是 16 日变成 14 日了 （atime/mtime）～不过， ctime 并没有跟着改变喔！
范例四：将上个范例的 bashrc 日期改为 2014/06/15 2:02
[dmtsai@study tmp]# touch -t 201406150202 bashrc
[dmtsai@study tmp]# date; ll bashrc; ll --time=atime bashrc; ll --time=ctime bashrc
Tue Jun 16 00:54:07 CST 2015
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 15 2014 bashrc
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 15 2014 bashrc
-rw-r--r--. 1 dmtsai dmtsai 231 Jun 16 00:54 bashrc
# 注意看看，日期在 atime 与 mtime 都改变了，但是 ctime 则是记录目前的时间！
```

#### umask 就是指定 “目前使用者在创建文件或目录时候的权限默认值”

```bash
[root@study ~]# umask
0022 <==与一般权限有关的是后面三个数字！
[root@study ~]# umask -S
u=rwx,g=rx,o=rx
[root@study ~]# umask 002	#在umask后面直接增加要修改的默认权限
```

​	若使用者创建为“文件”则默认“没有可执行（ x ）权限”，亦即只有 rw 这两个项目，也就是最大为 666 分，默认权限如下：-rw-rw-rw

​	若使用者创建为“目录”，则由于 x 与是否可以进入此目录有关，因此默认为所有权限均开放，亦即为 777 分，默认权限如下：drwxrwxrwx

​	如果以上面的例子来说明的话，因为 umask 为 022 ，所以 user 并没有被拿掉任何权限，不 过 group 与 others 的权限被拿掉了 2 （也就是 w 这个权限），那么当使用者：

​	创建文件时：（-rw-rw-rw-） - （-----w--w-） ==> -rw-r--r-- 

​	创建目录时：（drwxrwxrwx） - （d----w--w-） ==> drwxr-xr-x

#### chattr（设置文件隐藏属性）

```bash
[root@study ~]# chattr [+-=][ASacdistu] 文件或目录名称
选项与参数：
+ ：增加某一个特殊参数，其他原本存在参数则不动。
- ：移除某一个特殊参数，其他原本存在参数则不动。
= ：设置一定，且仅有后面接的参数
A ：当设置了 A 这个属性时，若你有存取此文件（或目录）时，他的存取时间 atime 将不会被修改，
可避免 I/O 较慢的机器过度的存取磁盘。（目前建议使用文件系统挂载参数处理这个项目）
S ：一般文件是非同步写入磁盘的（原理请参考[前一章sync](../Text/index.html#sync)的说明），如果加上 S 这个属性时，当你进行任何文件的修改，该更动会“同步”写入磁盘中。
a ：当设置 a 之后，这个文件将只能增加数据，而不能删除也不能修改数据，只有root 才能设置这属性
c ：这个属性设置之后，将会自动的将此文件“压缩”，在读取的时候将会自动解压缩，
但是在储存的时候，将会先进行压缩后再储存（看来对于大文件似乎蛮有用的！）
d ：当 dump 程序被执行的时候，设置 d 属性将可使该文件（或目录）不会被 dump 备份
i ：这个 i 可就很厉害了！他可以让一个文件“不能被删除、改名、设置链接也无法写入或新增数据！”
对于系统安全性有相当大的助益！只有 root 能设置此属性
s ：当文件设置了 s 属性时，如果这个文件被删除，他将会被完全的移除出这个硬盘空间，
所以如果误删了，完全无法救回来了喔！
u ：与 s 相反的，当使用 u 来设置文件时，如果该文件被删除了，则数据内容其实还存在磁盘中，
可以使用来救援该文件喔！
注意1：属性设置常见的是 a 与 i 的设置值，而且很多设置值必须要身为 root 才能设置
注意2：xfs 文件系统仅支持 AadiS 而已
范例：请尝试到/tmp下面创建文件，并加入 i 的参数，尝试删除看看。
[root@study ~]# cd /tmp
[root@study tmp]# touch attrtest <==创建一个空文件
[root@study tmp]# chattr +i attrtest <==给予 i 的属性
[root@study tmp]# rm attrtest <==尝试删除看看
rm: remove regular empty file `attrtest'? y
rm: cannot remove `attrtest': Operation not permitted
# 看到了吗？呼呼！连 root 也没有办法将这个文件删除呢！赶紧解除设置！
范例：请将该文件的 i 属性取消！
[root@study tmp]# chattr -i attrtest
```

#### lsattr（显示文件隐藏属性）

```bash
[root@study ~]# lsattr [-adR] 文件或目录
选项与参数：
-a ：将隐藏文件的属性也秀出来；
-d ：如果接的是目录，仅列出目录本身的属性而非目录内的文件名；
-R ：连同子目录的数据也一并列出来！
[root@study tmp]# chattr +aiS attrtest
[root@study tmp]# lsattr attrtest
--S-ia---------- attrtest
```

#### Set UID（SUID）

- SUID 权限仅对二进制程序（binary program）有效；

- 执行者对于该程序需要具有 x 的可执行权限；

- 本权限仅在执行该程序的过程中有效 （run-time）；

- 执行者将具有该程序拥有者 （owner） 的权限。

#### Set GID（SGID）

如果是对文件来说， SGID 有如下的功能：

- SGID 对二进制程序有用；

- 程序执行者对于该程序来说，需具备 x 的权限；

- 执行者在执行的过程中将会获得该程序群组的支持！

当一个目录设置了 SGID 的权限后，他将具有如下的功能：

- 使用者若对于此目录具有 r 与 x 的权限时，该使用者能够进入此目录；

- 使用者在此目录下的有效群组（effective group）将会变成该目录的群组；

- 用途：若使用者在此目录下具有 w 的权限（可以新建文件），则使用者所创建的新文件，该新文件的群组与此目录的群组相同。

#### Sticky Bit（SBIT）

这个Sticky Bit,SBIT目前只针对目录有效，对于文件已经没有效果了。SBIT对于目录的作用是：

当使用者对于此目录具有 w, x 权限，亦即具有写入的权限时；

当使用者在该目录下创建文件或目录时，仅有自己与 root 才有权力删除该文件

#### SUID/SGID/SBIT 权限设置

```bash
[root@study ~]# cd /tmp
[root@study tmp]# touch test <==创建一个测试用空档
[root@study tmp]# chmod 4755 test; ls -l test <==加入具有 SUID 的权限
-rwsr-xr-x 1 root root 0 Jun 16 02:53 test
[root@study tmp]# chmod 6755 test; ls -l test <==加入具有 SUID/SGID 的权限
-rwsr-sr-x 1 root root 0 Jun 16 02:53 test
[root@study tmp]# chmod 1755 test; ls -l test <==加入 SBIT 的功能！
-rwxr-xr-t 1 root root 0 Jun 16 02:53 test
[root@study tmp]# chmod 7666 test; ls -l test <==具有空的 SUID/SGID 权限
-rwSrwSrwT 1 root root 0 Jun 16 02:53 test

# 设置权限成为 -rws--x--x 的模样：
[root@study tmp]# chmod u=rwxs,go=x test; ls -l test
-rws--x--x 1 root root 0 Jun 16 02:53 test
# 承上，加上 SGID 与 SBIT 在上述的文件权限中！
[root@study tmp]# chmod g+s,o+t test; ls -l test
-rws--s--t 1 root root 0 Jun 16 02:53 test
```

#### 查找文件的命令

- ##### file：观察文件类型

```bash
[root@study ~]# file ~/.bashrc
/root/.bashrc: ASCII text <==告诉我们是 ASCII 的纯文本文件啊！
[root@study ~]# file /usr/bin/passwd
/usr/bin/passwd: setuid ELF 64-bit LSB shared object, x86-64, version 1 （SYSV）, dynamically
linked （uses shared libs）, for GNU/Linux 2.6.32,
BuildID[sha1]=0xbf35571e607e317bf107b9bcf65199988d0ed5ab, stripped
# 可执行文件的数据可就多的不得了！包括这个文件的 suid 权限、相容于 Intel x86-64 等级的硬件平台
# 使用的是 Linux 核心 2.6.32 的动态函数库链接等等。
[root@study ~]# file /var/lib/mlocate/mlocate.db
/var/lib/mlocate/mlocate.db: data <== 这是 data 文件！
```

- ##### which：寻找“可执行文件”

```bash
[root@study ~]# which [-a] command
选项或参数：
-a ：将所有由 PATH 目录中可以找到的指令均列出，而不止第一个被找到的指令名称
范例一：搜寻 ifconfig 这个指令的完整文件名
[root@study ~]# which ifconfig
/sbin/ifconfig
范例二：用 which 去找出 which 的文件名为何？
[root@study ~]# which which
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
/bin/alias
/usr/bin/which
# 竟然会有两个 which ，其中一个是 alias 这玩意儿呢！那是啥？
# 那就是所谓的“命令别名”，意思是输入 which 会等于后面接的那串指令啦！
# 更多的数据我们会在 bash 章节中再来谈的！
范例三：请找出 history 这个指令的完整文件名
[root@study ~]# which history
/usr/bin/which: no history in （/usr/local/sbin:/usr/local/bin:/sbin:/bin:
/usr/sbin:/usr/bin:/root/bin）
[root@study ~]# history --help
-bash: history: --: invalid option
history: usage: history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg
# 瞎密？怎么可能没有 history ，我明明就能够用 root 执行 history 的啊！
```

- ##### whereis：由一些特定的目录中寻找文件文件名

```bash
[root@study ~]# whereis [-bmsu] 文件或目录名
选项与参数：
-l :可以列出 whereis 会去查询的几个主要目录而已
-b :只找 binary 格式的文件
-m :只找在说明文档 manual 路径下的文件
-s :只找 source 来源文件
-u :搜寻不在上述三个项目当中的其他特殊文件
范例一：请找出 ifconfig 这个文件名
[root@study ~]# whereis ifconfig
ifconfig: /sbin/ifconfig /usr/share/man/man8/ifconfig.8.gz
范例二：只找出跟 passwd 有关的“说明文档”文件名（man page）
[root@study ~]# whereis passwd # 全部的文件名通通列出来！
passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz
[root@study ~]# whereis -m passwd # 只有在 man 里面的文件名才抓出来！
passwd: /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz

```

- ##### locate/updatedb

```bash
[root@study ~]# locate [-ir] keyword
选项与参数：
-i ：忽略大小写的差异；
-c ：不输出文件名，仅计算找到的文件数量
-l ：仅输出几行的意思，例如输出五行则是 -l 5
-S ：输出 locate 所使用的数据库文件的相关信息，包括该数据库纪录的文件/目录数量等
-r ：后面可接正则表达式的显示方式
范例一：找出系统中所有与 passwd 相关的文件名，且只列出 5 个
[root@study ~]# locate -l 5 passwd
/etc/passwd
/etc/passwd-
/etc/pam.d/passwd
/etc/security/opasswd
/usr/bin/gpasswd
范例二：列出 locate 查询所使用的数据库文件之文件名与各数据数量
[root@study ~]# locate -S
Database /var/lib/mlocate/mlocate.db:
8,086 directories # 总纪录目录数
109,605 files # 总纪录文件数
5,190,295 Bytes in file names
2,349,150 Bytes used to store database
```

- updatedb：根据 /etc/updatedb.conf 的设置去搜寻系统硬盘内的文件名，并更新 /var/lib/mlocate 内的数据库文件；
- locate：依据 /var/lib/mlocate 内的数据库记载，找出使用者输入的关键字文件名。

- ##### find

```bash
[root@study ~]# find [PATH] [option] [action]
选项与参数：
1\. 与时间有关的选项：共有 -atime, -ctime 与 -mtime ，以 -mtime 说明
-mtime n ：n 为数字，意义为在 n 天之前的“一天之内”被更动过内容的文件；
-mtime +n ：列出在 n 天之前（不含 n 天本身）被更动过内容的文件文件名；
-mtime -n ：列出在 n 天之内（含 n 天本身）被更动过内容的文件文件名。
-newer file ：file 为一个存在的文件，列出比 file 还要新的文件文件名
范例一：将过去系统上面 24 小时内有更动过内容 （mtime） 的文件列出
[root@study ~]# find / -mtime 0
# 那个 0 是重点！0 代表目前的时间，所以，从现在开始到 24 小时前，
# 有变动过内容的文件都会被列出来！那如果是三天前的 24 小时内？
# find / -mtime 3 有变动过的文件都被列出的意思！
范例二：寻找 /etc 下面的文件，如果文件日期比 /etc/passwd 新就列出
[root@study ~]# find /etc -newer /etc/passwd
# -newer 用在分辨两个文件之间的新旧关系是很有用的！
```

![image-20210814205405469](C:\Users\rxee\AppData\Roaming\Typora\typora-user-images\image-20210814205405469.png)

+4代表大于等于5天前的文件名：ex> find /var -mtime +4

-4代表小于等于4天内的文件文件名：ex> find /var -mtime -4

4则是代表4-5那一天的文件文件名：ex> find /var -mtime 4

```bash
选项与参数：
2\. 与使用者或群组名称有关的参数：
-uid n ：n 为数字，这个数字是使用者的帐号 ID，亦即 UID ，这个 UID 是记录在
/etc/passwd 里面与帐号名称对应的数字。这方面我们会在第四篇介绍。
-gid n ：n 为数字，这个数字是群组名称的 ID，亦即 GID，这个 GID 记录在
/etc/group，相关的介绍我们会第四篇说明～
-user name ：name 为使用者帐号名称喔！例如 dmtsai
-group name：name 为群组名称喔，例如 users ；
-nouser ：寻找文件的拥有者不存在 /etc/passwd 的人！
-nogroup ：寻找文件的拥有群组不存在于 /etc/group 的文件！
当你自行安装软件时，很可能该软件的属性当中并没有文件拥有者，
这是可能的！在这个时候，就可以使用 -nouser 与 -nogroup 搜寻。
范例三：搜寻 /home 下面属于 dmtsai 的文件
[root@study ~]# find /home -user dmtsai
# 这个东西也很有用的～当我们要找出任何一个使用者在系统当中的所有文件时，
# 就可以利用这个指令将属于某个使用者的所有文件都找出来喔！
范例四：搜寻系统中不属于任何人的文件
[root@study ~]# find / -nouser
# 通过这个指令，可以轻易的就找出那些不太正常的文件。如果有找到不属于系统任何人的文件时，
# 不要太紧张，那有时候是正常的～尤其是你曾经以源代码自行编译软件时。
```

```bash
选项与参数：
3\. 与文件权限及名称有关的参数：
-name filename：搜寻文件名称为 filename 的文件；
-size [+-]SIZE：搜寻比 SIZE 还要大（+）或小（-）的文件。这个 SIZE 的规格有：
c: 代表 Byte， k: 代表 1024Bytes。所以，要找比 50KB
还要大的文件，就是“ -size +50k ”
-type TYPE ：搜寻文件的类型为 TYPE 的，类型主要有：一般正规文件 （f）, 设备文件 （b, c）,
目录 （d）, 链接文件 （l）, socket （s）, 及 FIFO （p） 等属性。
-perm mode ：搜寻文件权限“刚好等于” mode 的文件，这个 mode 为类似 chmod
的属性值，举例来说， -rwsr-xr-x 的属性为 4755 ！
-perm -mode ：搜寻文件权限“必须要全部囊括 mode 的权限”的文件，举例来说，
我们要搜寻 -rwxr--r-- ，亦即 0744 的文件，使用 -perm -0744，
当一个文件的权限为 -rwsr-xr-x ，亦即 4755 时，也会被列出来，
因为 -rwsr-xr-x 的属性已经囊括了 -rwxr--r-- 的属性了。
-perm /mode ：搜寻文件权限“包含任一 mode 的权限”的文件，举例来说，我们搜寻
-rwxr-xr-x ，亦即 -perm /755 时，但一个文件属性为 -rw-------
也会被列出来，因为他有 -rw.... 的属性存在！
范例五：找出文件名为 passwd 这个文件
[root@study ~]# find / -name passwd
范例五-1：找出文件名包含了 passwd 这个关键字的文件
[root@study ~]# find / -name "*passwd*"
# 利用这个 -name 可以搜寻文件名啊！默认是完整文件名，如果想要找关键字，
# 可以使用类似 * 的任意字符来处理
范例六：找出 /run 目录下，文件类型为 Socket 的文件名有哪些？
[root@study ~]# find /run -type s
# 这个 -type 的属性也很有帮助喔！尤其是要找出那些怪异的文件，
# 例如 socket 与 FIFO 文件，可以用 find /run -type p 或 -type s 来找！
范例七：搜寻文件当中含有 SGID 或 SUID 或 SBIT 的属性
[root@study ~]# find / -perm /7000
# 所谓的 7000 就是 ---s--s--t ，那么只要含有 s 或 t 的就列出，所以当然要使用 /7000，
# 使用 -7000 表示要同时含有 ---s--s--t 的所有三个权限。而只需要任意一个，就是 /7000 ～瞭乎？
```

```bash
选项与参数：
4\. 额外可进行的动作：
-exec command ：command 为其他指令，-exec 后面可再接额外的指令来处理搜寻到的结果。
-print ：将结果打印到屏幕上，这个动作是默认动作！
范例八：将上个范例找到的文件使用 ls -l 列出来～
[root@study ~]# find /usr/bin /usr/sbin -perm /7000 -exec ls -l {} \;
# 注意到，那个 -exec 后面的 ls -l 就是额外的指令，指令不支持命令别名，
# 所以仅能使用 ls -l 不可以使用 ll 喔！注意注意！
范例九：找出系统中，大于 1MB 的文件
[root@study ~]# find / -size +1M
```

#### 极重要的复习！权限与指令间的关系

一、让使用者能进入某目录成为“可工作目录”的基本权限为何： 

- 可使用的指令：例如 cd 等变换工作目录的指令；
- 目录所需权限：使用者对这个目录至少需要具有 x 的权限；
- 额外需求：如果使用者想要在这个目录内利用 ls 查阅文件名，则使用者对此目录还需要 r 的权限。

二、使用者在某个目录内读取一个文件的基本权限为何？ 

- 可使用的指令：例如本章谈到的 cat, more, less等等；

- 目录所需权限：使用者对这个目录至少需要具有 x 权限；

- 文件所需权限：使用者对文件至少需要具有 r 的权限才行！

三、让使用者可以修改一个文件的基本权限为何？

- 可使用的指令：例如 nano 或未来要介绍的 vi 编辑器等；

- 目录所需权限：使用者在该文件所在的目录至少要有 x 权限；

- 文件所需权限：使用者对该文件至少要有 r, w 权限。

四、让一个使用者可以创建一个文件的基本权限为何？

- 目录所需权限：使用者在该目录要具有 w,x 的权限，重点在 w 啦！

五、让使用者进入某目录并执行该目录下的某个指令之基本权限为何？

- 目录所需权限：使用者在该目录至少要有 x 的权限；

- 文件所需权限：使用者在该文件至少需要有 x 的权限。

# 7.Linux磁盘与文件系统管理

#### Ext2文件系统的限制：

- 原则上，block 的大小与数量在格式化完就不能够再改变了（除非重新格式化）；

- 每个 block 内最多只能够放置一个文件的数据；

- 承上，如果文件大于 block 的大小，则一个文件会占用多个 block 数量；

- 承上，若文件小于 block ，则该 block 的剩余容量就不能够再被使用了（磁盘空间会浪费）。

#### inode记录的文件数据至少有以下：

- 该文件的存取模式（read/write/excute）；

- 该文件的拥有者与群组（owner/group）；

- 该文件的容量；

- 该文件创建或状态改变的时间（ctime）；

- 最近一次的读取时间（atime）；

- 最近修改的时间（mtime）；

- 定义文件特性的旗标（flag），如 SetUID...；

- 该文件真正内容的指向（pointer）；

#### inode 的数量与大小也是在格式化时就已经固定了，除此之外 inode 还有些什么特色呢？

- 每个 inode 大小均固定为 128 Bytes （新的 ext4 与 xfs 可设置到 256 Bytes）；

- 每个文件都仅会占用一个 inode 而已；

- 承上，因此文件系统能够创建的文件数量与 inode 的数量有关；

- 系统读取文件时需要先找到 inode，并分析 inode 所记录的权限与使用者是否符合，若符合才能够开始实际读取 block 的内容。

#### Superblock（超级区块）

Superblock 是记录整个 filesystem 相关信息的地方， 没有 Superblock ，就没有这个 filesystem 了。他记录的信息主要有：

- block 与 inode 的总量；

- 未使用与已使用的 inode / block 数量；

- block 与 inode 的大小 （block 为 1, 2, 4K，inode 为 128Bytes 或 256Bytes）；

- filesystem 的挂载时间、最近一次写入数据的时间、最近一次检验磁盘 （fsck） 的时间 等文件系统的相关信息；

- 一个 valid bit 数值，若此文件系统已被挂载，则 valid bit 为 0 ，若未被挂载，则 valid bit 为 1 。

#### Filesystem Description（文件系统描述说明）

这个区段可以描述每个 block group 的开始与结束的 block 号码，以及说明每个区段（superblock, bitmap, inodemap, data block）分别介于哪一个 block 号码之间。这部份也能够用 dumpe2fs 来观察的。

#### block bitmap（区块对照表）

从 block bitmap 当中可以知道哪些 block 是空的，因此我们的系统就能够很快速的找到可使用的空间来处置文件啰。同样的，如果你删除某些文件时，那么那些文件原本占用的 block 号码就得要释放出来，此时在 block bitmap 当中相对应到该 block 号码的标志就得要修改成为“未使用中”啰！这就是 bitmap 的功能。 

#### inode bitmap（inode对照表）

inode bitmap 记录使用与未使用的 inode 号码。

#### block group 的内容我们单纯看 Group0 信息好了： 

- Group0 所占用的 block 号码由 0 到 32767 号，superblock 则在第 0 号的 block 区块内！

- 文件系统描述说明在第 1 号 block 中；

- block bitmap 与 inode bitmap 则在 129 及 145 的 block 号码上。

- 至于 inode table 分布于 161-672 的 block 号码中！

- 由于（1）一个 inode 占用 256 Bytes ，（2）总共有 672 - 161 + 1（161本身）= 512 个 block 花在 inode table 上，（3）每个 block 的大小为 4096 Bytes（4K）。由这些数据可以算出 inode 的数量共有 512 * 4096 / 256 = 8192 个 inode 啦！

- 这个 Group0 目前可用的 block 有 28521 个，可用的 inode 有 8181 个；

- 剩余的 inode 号码为 12 号到 8192 号

#### 假设我们想要新增一个文件，此时文件系统的行为是：

1. 先确定使用者对于欲新增文件的目录是否具有 w 与 x 的权限，若有的话才能新增；
2. 根据 inode bitmap 找到没有使用的 inode 号码，并将新文件的权限/属性写入；
3. 根据 block bitmap 找到没有使用中的 block 号码，并将实际的数据写入 block 中，且更 新 inode 的 block 指向数据；
4. 将刚刚写入的 inode 与 block 数据同步更新 inode bitmap 与 block bitmap，并更新 superblock 的内容。

#### Linux 系统上面文件系统与内存有非常大的关系喔：

- 系统会将常用的文件数据放置到内存的缓冲区，以加速文件系统的读/写；

- 承上，因此 Linux 的实体内存最后都会被用光！这是正常的情况！可加速系统性能；

- 你可以手动使用 sync 来强迫内存中设置为 Dirty 的文件回写到磁盘中；

- 若正常关机时，关机指令会主动调用 sync 来将内存的数据回写入磁盘内；

- 但若不正常关机（如跳电、死机或其他不明原因），由于数据尚未回写到磁盘内，因此重新开机后可能会花很多时间在进行磁盘检验，甚至可能导致文件系统的损毁（非磁盘损毁）。

#### xfs 文件系统在数据的分布上，主要规划为三个部份，一个数据区（data section）、一个文件系统活动登录区（log section）以及一个实时运行区（realtime section）。

##### 数据区（data section）

每个储存区群组都包含了（1）整个文件系统的 superblock、（2）剩余空间的管理机制、（3）inode的分配与追踪。

此外，inode与 block 都是系统需要用到时，这才动态配置产生，所以格式化动作超级快！

##### 文件系统活动登录区（log section）

在登录区这个区域主要被用来纪录文件系统的变化，其实有点像是日志区啦！文件的变化会在这里纪录下来，直到该变化完整的写入到数据区后， 该笔纪录才会被终结。

##### 实时运行区（realtime section）

当有文件要被创建时，xfs 会在这个区段里面找一个到数个的 extent 区块，将文件放置在这个区块内，等到分配完毕后，再写入到 data section 的 inode 与 block 去！

#### df：列出文件系统的整体磁盘使用量

```bash
[root@study ~]# df [-ahikHTm] [目录或文件名]
选项与参数：
-a ：列出所有的文件系统，包括系统特有的 /proc 等文件系统；
-k ：以 KBytes 的容量显示各文件系统；
-m ：以 MBytes 的容量显示各文件系统；
-h ：以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；
-H ：以 M=1000K 取代 M=1024K 的进位方式；
-T ：连同该 partition 的 filesystem 名称 （例如 xfs） 也列出；
-i ：不用磁盘容量，而以 inode 的数量来显示
范例一：将系统内所有的 filesystem 列出来！
[root@study ~]# df
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/mapper/centos-root 10475520 3409408 7066112 33% /
devtmpfs 627700 0 627700 0% /dev
tmpfs 637568 80 637488 1% /dev/shm
tmpfs 637568 24684 612884 4% /run
tmpfs 637568 0 637568 0% /sys/fs/cgroup
/dev/mapper/centos-home 5232640 67720 5164920 2% /home
/dev/vda2 1038336 133704 904632 13% /boot
# 在 Linux 下面如果 df 没有加任何选项，那么默认会将系统内所有的
# （不含特殊内存内的文件系统与 swap） 都以 1 KBytes 的容量来列出来！
# 至于那个 /dev/shm 是与内存有关的挂载，先不要理他！
范例二：将容量结果以易读的容量格式显示出来
[root@study ~]# df -h
Filesystem Size Used Avail Use% Mounted on
/dev/mapper/centos-root 10G 3.3G 6.8G 33% /
devtmpfs 613M 0 613M 0% /dev
tmpfs 623M 80K 623M 1% /dev/shm
tmpfs 623M 25M 599M 4% /run
tmpfs 623M 0 623M 0% /sys/fs/cgroup
/dev/mapper/centos-home 5.0G 67M 5.0G 2% /home
/dev/vda2 1014M 131M 884M 13% /boot
# 不同于范例一，这里会以 G/M 等容量格式显示出来，比较容易看啦！
范例三：将系统内的所有特殊文件格式及名称都列出来
[root@study ~]# df -aT
Filesystem Type 1K-blocks Used Available Use% Mounted on
rootfs rootfs 10475520 3409368 7066152 33% /
proc proc 0 0 0 - /proc
sysfs sysfs 0 0 0 - /sys
devtmpfs devtmpfs 627700 0 627700 0% /dev
securityfs securityfs 0 0 0 - /sys/kernel/security
tmpfs tmpfs 637568 80 637488 1% /dev/shm
devpts devpts 0 0 0 - /dev/pts
tmpfs tmpfs 637568 24684 612884 4% /run
tmpfs tmpfs 637568 0 637568 0% /sys/fs/cgroup
.....（中间省略）.....
/dev/mapper/centos-root xfs 10475520 3409368 7066152 33% /
selinuxfs selinuxfs 0 0 0 - /sys/fs/selinux
.....（中间省略）.....
/dev/mapper/centos-home xfs 5232640 67720 5164920 2% /home
/dev/vda2 xfs 1038336 133704 904632 13% /boot
binfmt_misc binfmt_misc 0 0 0 - /proc/sys/fs/binfmt_misc
# 系统里面其实还有很多特殊的文件系统存在的。那些比较特殊的文件系统几乎
# 都是在内存当中，例如 /proc 这个挂载点。因此，这些特殊的文件系统
# 都不会占据磁盘空间喔！ ^_^
范例四：将 /etc 下面的可用的磁盘容量以易读的容量格式显示
[root@study ~]# df -h /etc
Filesystem Size Used Avail Use% Mounted on
/dev/mapper/centos-root 10G 3.3G 6.8G 33% /
# 这个范例比较有趣一点啦，在 df 后面加上目录或者是文件时， df
# 会自动的分析该目录或文件所在的 partition ，并将该 partition 的容量显示出来，
# 所以，您就可以知道某个目录下面还有多少容量可以使用了！ ^_^
范例五：将目前各个 partition 当中可用的 inode 数量列出
[root@study ~]# df -ih
Filesystem Inodes IUsed IFree IUse% Mounted on
/dev/mapper/centos-root 10M 108K 9.9M 2% /
devtmpfs 154K 397 153K 1% /dev
tmpfs 156K 5 156K 1% /dev/shm
tmpfs 156K 497 156K 1% /run
tmpfs 156K 13 156K 1% /sys/fs/cgroup
# 这个范例则主要列出可用的 inode 剩余量与总容量。分析一下与范例一的关系，
# 你可以清楚的发现到，通常 inode 的数量剩余都比 block 还要多呢
```

- Filesystem：代表该文件系统是在哪个 partition ，所以列出设备名称；

- 1k-blocks：说明下面的数字单位是 1KB 呦！可利用 -h 或 -m 来改变容量；

- Used：顾名思义，就是使用掉的磁盘空间啦！

- Available：也就是剩下的磁盘空间大小；

- Use%：就是磁盘的使用率啦！如果使用率高达 90% 以上时， 最好需要注意一下了，免得容量不足造成系统问题喔！（例如最容易被灌爆的 /var/spool/mail 这个放置邮件的磁盘）

- Mounted on：就是磁盘挂载的目录所在啦！（挂载点啦！）

#### du：评估文件系统的磁盘使用量（常用在推估目录所占容量）

```bash
[root@study ~]# du [-ahskm] 文件或目录名称
选项与参数：
-a ：列出所有的文件与目录容量，因为默认仅统计目录下面的文件量而已。
-h ：以人们较易读的容量格式 （G/M） 显示；
-s ：列出总量而已，而不列出每个各别的目录占用容量；
-S ：不包括子目录下的总计，与 -s 有点差别。
-k ：以 KBytes 列出容量显示；
-m ：以 MBytes 列出容量显示；
范例一：列出目前目录下的所有文件大小
[root@study ~]# du
4 ./.cache/dconf <==每个目录都会列出来
4 ./.cache/abrt
8 ./.cache
....（中间省略）....
0 ./test4
4 ./.ssh <==包括隐藏文件的目录
76 . <==这个目录（.）所占用的总量
# 直接输入 du 没有加任何选项时，则 du 会分析“目前所在目录”
# 的文件与目录所占用的磁盘空间。但是，实际显示时，仅会显示目录容量（不含文件），
# 因此 . 目录有很多文件没有被列出来，所以全部的目录相加不会等于 . 的容量喔！
# 此外，输出的数值数据为 1K 大小的容量单位。
范例二：同范例一，但是将文件的容量也列出来
[root@study ~]# du -a
4 ./.bash_logout <==有文件的列表了
4 ./.bash_profile
4 ./.bashrc
....（中间省略）....
4 ./.ssh/known_hosts
4 ./.ssh
76 .
范例三：检查根目录下面每个目录所占用的容量
[root@study ~]# du -sm /*
0 /bin
99 /boot
....（中间省略）....
du: cannot access ‘/proc/17772/task/17772/fd/4’: No such file or directory
du: cannot access ‘/proc/17772/fdinfo/4’: No such file or directory
0 /proc <==不会占用硬盘空间！
1 /root
25 /run
....（中间省略）....
3126 /usr <==系统初期最大就是他了啦！
117 /var
# 这是个很常被使用的功能～利用万用字符 * 来代表每个目录，如果想要检查某个目录下，
# 哪个次目录占用最大的容量，可以用这个方法找出来。值得注意的是，如果刚刚安装好 Linux 时，
# 那么整个系统容量最大的应该是 /usr 。而 /proc 虽然有列出容量，但是那个容量是在内存中，
# 不占磁盘空间。至于 /proc 里头会列出一堆“No such file or directory” 的错误，
# 别担心！因为是内存内的程序，程序执行结束就会消失，因此会有些目录找不到，是正确的！
```

#### Hard Link（实体链接，硬式链接或实际链接）

简单的说：hard link 只是在某个目录下新增一笔文件名链接到某 inode 号码的关联记录而已。

一般来说，使用 hard link 设置链接文件时，磁盘的空间与 inode 的数目都不会改变！

hard link 是有限制的：

- 不能跨 Filesystem；

不能 link 目录。

![image-20210816210003898](C:\Users\rxee\AppData\Roaming\Typora\typora-user-images\image-20210816210003898.png)

#### Symbolic Link（符号链接，亦即是捷径）

基本上，Symbolic link 就是在创建一个独立的文件，而这个文件会让数据的读取指向他 link 的那个文件的文件名！

这里还是得特别留意，这个 Symbolic Link 与 Windows 的捷径可以给他划上等号，由 Symbolic link 所创建的文件为一个独立的新的文件，所以会占用掉 inode 与 block 喔！

![image-20210816210208726](C:\Users\rxee\AppData\Roaming\Typora\typora-user-images\image-20210816210208726.png)

#### ln：制作链接文件

```bash
[root@study ~]# ln [-sf] 来源文件 目标文件
选项与参数：
-s ：如果不加任何参数就进行链接，那就是hard link，至于 -s 就是symbolic link
-f ：如果 目标文件 存在时，就主动的将目标文件直接移除后再创建！
范例一：将 /etc/passwd 复制到 /tmp 下面，并且观察 inode 与 block
[root@study ~]# cd /tmp
[root@study tmp]# cp -a /etc/passwd .
[root@study tmp]# du -sb ; df -i .
6602 . <==先注意一下这里的容量是多少！
Filesystem Inodes IUsed IFree IUse% Mounted on
/dev/mapper/centos-root 10485760 109748 10376012 2% /
# 利用 du 与 df 来检查一下目前的参数～那个 du -sb 是计算整个 /tmp 下面有多少 Bytes 的容量啦！
范例二：将 /tmp/passwd 制作 hard link 成为 passwd-hd 文件，并观察文件与容量
[root@study tmp]# ln passwd passwd-hd
[root@study tmp]# du -sb ; df -i .
6602 .
Filesystem Inodes IUsed IFree IUse% Mounted on
/dev/mapper/centos-root 10485760 109748 10376012 2% /
# 仔细看，即使多了一个文件在 /tmp 下面，整个 inode 与 block 的容量并没有改变！
[root@study tmp]# ls -il passwd*
2668897 -rw-r--r--. 2 root root 2092 Jun 17 00:20 passwd
2668897 -rw-r--r--. 2 root root 2092 Jun 17 00:20 passwd-hd
# 原来是指向同一个 inode 啊！这是个重点啊！另外，那个第二栏的链接数也会增加！
范例三：将 /tmp/passwd 创建一个符号链接
[root@study tmp]# ln -s passwd passwd-so
[root@study tmp]# ls -li passwd*
2668897 -rw-r--r--. 2 root root 2092 Jun 17 00:20 passwd
2668897 -rw-r--r--. 2 root root 2092 Jun 17 00:20 passwd-hd
2668898 lrwxrwxrwx. 1 root root 6 Jun 23 22:40 passwd-so -&gt; passwd
# passwd-so 指向的 inode number 不同了！这是一个新的文件～这个文件的内容是指向
# passwd 的。passwd-so 的大小是 6Bytes ，因为 “passwd” 这个单字共有六个字符之故
[root@study tmp]# du -sb ; df -i .
6608 .
Filesystem Inodes IUsed IFree IUse% Mounted on
/dev/mapper/centos-root 10485760 109749 10376011 2% /
# 呼呼！整个容量与 inode 使用数都改变啰～确实如此啊！
范例四：删除原始文件 passwd ，其他两个文件是否能够打开？
[root@study tmp]# rm passwd
[root@study tmp]# cat passwd-hd
.....（正常显示完毕！）
[root@study tmp]# cat passwd-so
cat: passwd-so: No such file or directory
[root@study tmp]# ll passwd*
-rw-r--r--. 1 root root 2092 Jun 17 00:20 passwd-hd
lrwxrwxrwx. 1 root root 6 Jun 23 22:40 passwd-so -&gt; passwd
# 怕了吧！符号链接果然无法打开！另外，如果符号链接的目标文件不存在，
# 其实文件名的部分就会有特殊的颜色显示喔！
```

#### 如果我们想要在系统里面新增一颗磁盘时，应该有哪些动作需要做的呢：

1. 对磁盘进行分区，以创建可用的 partition；
2. 对该 partition 进行格式化（format），以创建系统可用的 filesystem；
3. 若想要仔细一点，则可对刚刚创建好的 filesystem 进行检验；
4. 在 Linux 系统上，需要创建挂载点（亦即是目录），并将他挂载上来；

#### lsblk 列出系统上的所有磁盘列表

```bash
[root@study ~]# lsblk [-dfimpt] [device]
选项与参数：
-d ：仅列出磁盘本身，并不会列出该磁盘的分区数据
-f ：同时列出该磁盘内的文件系统名称
-i ：使用 ASCII 的线段输出，不要使用复杂的编码 （再某些环境下很有用）
-m ：同时输出该设备在 /dev 下面的权限数据 （rwx 的数据）
-p ：列出该设备的完整文件名！而不是仅列出最后的名字而已。
-t ：列出该磁盘设备的详细数据，包括磁盘伫列机制、预读写的数据量大小等
范例一：列出本系统下的所有磁盘与磁盘内的分区信息
[root@RuanXee dutest]# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   40G  0 disk 
├─sda1            8:1    0    2M  0 part 
├─sda2            8:2    0    1G  0 part /boot
└─sda3            8:3    0   30G  0 part 
  ├─centos-root 253:0    0   10G  0 lvm  /
  ├─centos-swap 253:1    0    1G  0 lvm  [SWAP]
  └─centos-home 253:2    0    5G  0 lvm  /home
sr0              11:0    1  7.1G  0 rom  /run/media/rxee/CentOS 7 x86_64

范例二：仅列出 /dev/vda 设备内的所有数据的完整文件名
[root@RuanXee dutest]# lsblk -ip /dev/sda
NAME                        MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
/dev/sda                      8:0    0  40G  0 disk 
|-/dev/sda1                   8:1    0   2M  0 part 
|-/dev/sda2                   8:2    0   1G  0 part /boot
`-/dev/sda3                   8:3    0  30G  0 part 
  |-/dev/mapper/centos-root 253:0    0  10G  0 lvm  /
  |-/dev/mapper/centos-swap 253:1    0   1G  0 lvm  [SWAP]
  `-/dev/mapper/centos-home 253:2    0   5G  0 lvm  /home
```

- NAME：就是设备的文件名啰！会省略 /dev 等前导目录！

- MAJ:MIN：其实核心认识的设备都是通过这两个代码来熟悉的！分别是主要：次要设备代码！

- RM：是否为可卸载设备 （removable device），如光盘、USB 磁盘等等

- SIZE：当然就是容量啰！

- RO：是否为只读设备的意思

- TYPE：是磁盘 （disk）、分区 （partition） 还是只读存储器 （rom） 等输出

- MOUTPOINT：就是前一章谈到的挂载点！

#### blkid列出设备的 UUID 等参数

```bash
[root@RuanXee dutest]# blkid
/dev/sda2: UUID="be8d7b40-9c2d-4407-962e-481f07e80042" TYPE="xfs" PARTUUID="572bd508-ee81-42f6-97bc-adf3714fe697" 
/dev/sda3: UUID="xd5Ts1-CHVk-3l0u-WlaZ-BPbA-noUk-yfK5uW" TYPE="LVM2_member" PARTUUID="89c404f0-53c5-4002-b4ac-b4b73e785d1e" 
/dev/sr0: UUID="2015-04-01-00-21-36-00" LABEL="CentOS 7 x86_64" TYPE="iso9660" PTTYPE="dos" 
/dev/mapper/centos-root: UUID="fed8e7fc-ee16-4531-bc71-6a8f0ba71337" TYPE="xfs" 
/dev/mapper/centos-swap: UUID="9028e759-f0a3-4f34-84d8-2c0f54d28508" TYPE="swap" 
/dev/mapper/centos-home: UUID="2fc5a97d-611d-4315-a126-3e2732a96968" TYPE="xfs" 
```

UUID 是全域单一识别码 （universally unique identifier），Linux 会将系统内所有的设备都给予一个独一无二的识别码， 这个识别码就可以拿来作为挂载或者是使用这个设备/文件系统之用了。

#### parted 列出磁盘的分区表类型与分区信息

```bash
[root@study ~]# parted device_name print
范例一：列出 /dev/vda 磁盘的相关数据
[root@study ~]# parted /dev/vda print
Model: Virtio Block Device （virtblk） # 磁盘的模块名称（厂商）
Disk /dev/vda: 42.9GB # 磁盘的总容量
Sector size （logical/physical）: 512B/512B # 磁盘的每个逻辑/物理扇区容量
Partition Table: gpt # 分区表的格式 （MBR/GPT）
Disk Flags: pmbr_boot
Number Start End Size File system Name Flags # 下面才是分区数据
1 1049kB 3146kB 2097kB bios_grub
2 3146kB 1077MB 1074MB xfs
3 1077MB 33.3GB 32.2GB lvm
```

#### 磁盘分区： gdisk

```bash
[root@study ~]# gdisk 设备名称
范例：由前一小节的 lsblk 输出，我们知道系统有个 /dev/vda，请观察该磁盘的分区与相关数据
[root@study ~]# gdisk /dev/vda <==仔细看，不要加上数字喔！
GPT fdisk （gdisk） version 0.8.6
Partition table scan:
MBR: protective
BSD: not present
APM: not present
GPT: present
Found valid GPT with protective MBR; using GPT. <==找到了 GPT 的分区表！
Command （? for help）: <==这里可以让你输入指令动作，可以按问号 （?） 来查看可用指令
Command （? for help）: ?
b back up GPT data to a file
c change a partition's name
d delete a partition # 删除一个分区
i show detailed information on a partition
l list known partition types
n add a new partition # 增加一个分区
o create a new empty GUID partition table （GPT）
p print the partition table # 印出分区表 （常用）
q quit without saving changes # 不储存分区就直接离开 gdisk
r recovery and transformation options （experts only）
s sort partitions
t change a partition's type code
v verify disk
w write table to disk and exit # 储存分区操作后离开 gdisk
x extra functionality （experts only）
? print this menu
Command （? for help）:

Command （? for help）: p <== 这里可以输出目前磁盘的状态
Disk /dev/vda: 83886080 sectors, 40.0 GiB # 磁盘文件名/扇区数与总容量
Logical sector size: 512 Bytes # 单一扇区大小为 512 Bytes
Disk identifier （GUID）: A4C3C813-62AF-4BFE-BAC9-112EBD87A483 # 磁盘的 GPT 识别码
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 83886046
Partitions will be aligned on 2048-sector boundaries
Total free space is 18862013 sectors （9.0 GiB）
Number Start （sector） End （sector） Size Code Name # 下面为完整的分区信息了！
1 2048 6143 2.0 MiB EF02 # 第一个分区数据
2 6144 2103295 1024.0 MiB 0700
3 2103296 65026047 30.0 GiB 8E00
# 分区编号 开始扇区号码 结束扇区号码 容量大小
Command （? for help）: q
# 想要不储存离开吗？按下 q 就对了！不要随便按 w 啊！
```

每个项目的意义为： 

Number：分区编号，1号指的是 /dev/vda1 这样计算。

Start （sector）：每一个分区的开始扇区号码位置。

End （sector）：每一个分区的结束扇区号码位置，与 start 之间可以算出分区的总容量。

Size：就是分区的容量了。

Code：在分区内的可能的文件系统类型。Linux 为 8300，swap 为 8200。不过这个项目只是一个提示而已，不见得真的代表此分区内的文件系统喔！

Name：文件系统的名称等等。

#### 用gdisk新增分区

```bash
[root@study ~]# gdisk /dev/vda
Command （? for help）: p
Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048            6143   2.0 MiB     EF02  
   2            6144         2103295   1024.0 MiB  0700  
   3         2103296        65026047   30.0 GiB    8E00  
# 找出最后一个 sector 的号码是很重要的！
Command （? for help）: ? # 查一下增加分区的指令为何
Command （? for help）: n # 就是这个！所以开始新增的行为！
Partition number （4-128, default 4）: 4 # 默认就是 4 号，所以也能 enter 即可！
First sector （34-83886046, default = 65026048） or {+-}size{KMGTP}: 65026048 # 也能 enter
Last sector （65026048-83886046, default = 83886046） or {+-}size{KMGTP}: +1G # 决不要 enter
# 这个地方可有趣了！我们不需要自己去计算扇区号码，通过 +容量 的这个方式，
# 就可以让 gdisk 主动去帮你算出最接近你需要的容量的扇区号码喔！
Current type is 'Linux filesystem'
Hex code or GUID （L to show codes, Enter = 8300）: # 使用默认值即可～直接 enter 下去！
# 这里在让你选择未来这个分区预计使用的文件系统！默认都是 Linux 文件系统的 8300 啰！
Command （? for help）: p
umber  Start (sector)    End (sector)  Size       Code  Name
   1            2048            6143   2.0 MiB     EF02  
   2            6144         2103295   1024.0 MiB  0700  
   3         2103296        65026047   30.0 GiB    8E00  
   4        65026048        67123199   1024.0 MiB  8300  Linux filesystem
   
   umber  Start (sector)    End (sector)  Size       Code  Name
   1            2048            6143   2.0 MiB     EF02  
   2            6144         2103295   1024.0 MiB  0700  
   3         2103296        65026047   30.0 GiB    8E00  
   4        65026048        67123199   1024.0 MiB  8300  Linux filesystem
   5        67123200        69220351   1024.0 MiB  0700  Microsoft basic data
   6        69220352        70244351   500.0 MiB   8200  Linux swap
   
Command （? for help）: w
Final checks complete. About to write GPT data. THIS WILL OVERWRITE EXISTING
PARTITIONS!!
Do you want to proceed? （Y/N）: y
OK; writing new GUID partition table （GPT） to /dev/vda.
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot.
The operation has completed successfully.
# gdisk 会先警告你可能的问题，我们确定分区是对的，这时才按下 y ！不过怎么还有警告？
# 这是因为这颗磁盘目前正在使用当中，因此系统无法立即载入新的分区表～
[root@study ~]# cat /proc/partitions
major minor #blocks name
252 0 41943040 vda
252 1 2048 vda1
252 2 1048576 vda2
252 3 31461376 vda3
253 0 10485760 dm-0
253 1 1048576 dm-1
253 2 5242880 dm-2
# 你可以发现，并没有 vda4, vda5, vda6 喔！因为核心还没有更新！
```

#### partprobe 更新 Linux 核心的分区表信息

```bash
[root@study ~]# partprobe [-s] # 你可以不要加 -s ！那么屏幕不会出现讯息！
[root@study ~]# partprobe -s # 不过还是建议加上 -s 比较清晰！
/dev/vda: gpt partitions 1 2 3 4 5 6
root@RuanXee ~]# lsblk /dev/sda
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   40G  0 disk 
├─sda1            8:1    0    2M  0 part 
├─sda2            8:2    0    1G  0 part /boot
├─sda3            8:3    0   30G  0 part 
│ ├─centos-root 253:0    0   10G  0 lvm  /
│ ├─centos-swap 253:1    0    1G  0 lvm  [SWAP]
│ └─centos-home 253:2    0    5G  0 lvm  /home
├─sda4            8:4    0    1G  0 part 
├─sda5            8:5    0    1G  0 part 
└─sda6            8:6    0  500M  0 part 
[root@RuanXee ~]# cat /proc/partitions 
major minor  #blocks  name
   8        0   41943040 sda
   8        1       2048 sda1
   8        2    1048576 sda2
   8        3   31461376 sda3
   8        4    1048576 sda4
   8        5    1048576 sda5
   8        6     512000 sda6
  11        0    7413760 sr0
 253        0   10485760 dm-0
 253        1    1048576 dm-1
 253        2    5242880 dm-2
# 现在核心也正确的抓到了分区参数了！
```

#### 用gdisk删除一个分区

```bash
[root@study ~]# gdisk /dev/vda
Command （? for help）: p
Number Start （sector） End （sector） Size Code Name
1 2048 6143 2.0 MiB EF02
2 6144 2103295 1024.0 MiB 0700
3 2103296 65026047 30.0 GiB 8E00
4 65026048 67123199 1024.0 MiB 8300 Linux filesystem
5 67123200 69220351 1024.0 MiB 0700 Microsoft basic data
6 69220352 70244351 500.0 MiB 8200 Linux swap
Command （? for help）: d
Partition number （1-6）: 6
Command （? for help）: p
# 你会发现 /dev/vda6 不见了！非常棒！没问题就写入吧！
Command （? for help）: w
# 同样会有一堆讯息！鸟哥就不重复输出了！自己选择 y 来处理吧！
[root@study ~]# lsblk
# 你会发现！怪了！怎么还是有 /dev/vda6 呢？没办法！还没有更新核心的分区表啊！所以当然有错！
[root@study ~]# partprobe -s
[root@study ~]# lsblk
# 这个时候，那个 /dev/vda6 才真的消失不见了！了解吧！
```

#### 磁盘分区：fdisk

因为 fdisk 跟 gdisk 使用的方式几乎一样！只是一个使用 ? 作为指令提示数据，一个使用 m 作为提示这样而已。 此外，fdisk 有时会使用柱面 （cylinder） 作为分区的最小单位，与 gdisk 默认使用 sector 不太一样！大致上只是这点差别！

```bash
[root@study ~]# fdisk /dev/sda
Command （m for help）: m <== 输入 m 后，就会看到下面这些指令介绍
Command action
a toggle a bootable flag
b edit bsd disklabel
c toggle the dos compatibility flag
d delete a partition <==删除一个partition
l list known partition types
m print this menu
n add a new partition <==新增一个partition
o create a new empty DOS partition table
p print the partition table <==在屏幕上显示分区表
q quit without saving changes <==不储存离开fdisk程序
s create a new empty Sun disklabel
t change a partition's system id
u change display/entry units
v verify the partition table
w write table to disk and exit <==将刚刚的动作写入分区表
x extra functionality （experts only）
```

#### 要注意的是

“MBR 分区表请使用 fdisk 分区， GPT 分区表请使用 gdisk 分区！” 这个不要搞错～否则会分区失败的！

不要去处理一个正在使用中的分区！

#### XFS 文件系统 mkfs.xfs

```bash
[root@study ~]# mkfs.xfs [-b bsize] [-d parms] [-i parms] [-l parms] [-L label] [-f] \
[-r parms] 设备名称
选项与参数：
关於单位：下面只要谈到“数值”时，没有加单位则为 Bytes 值，可以用 k,m,g,t,p （小写）等来解释
比较特殊的是 s 这个单位，它指的是 sector 的“个数”喔！
-b ：后面接的是 block 容量，可由 512 到 64k，不过最大容量限制为 Linux 的 4k 喔！
-d ：后面接的是重要的 data section 的相关参数值，主要的值有：
agcount=数值 ：设置需要几个储存群组的意思（AG），通常与 CPU 有关
agsize=数值 ：每个 AG 设置为多少容量的意思，通常 agcount/agsize 只选一个设置即可
file ：指的是“格式化的设备是个文件而不是个设备”的意思！（例如虚拟磁盘）
size=数值 ：data section 的容量，亦即你可以不将全部的设备容量用完的意思
su=数值 ：当有 RAID 时，那个 stripe 数值的意思，与下面的 sw 搭配使用
sw=数值 ：当有 RAID 时，用于储存数据的磁盘数量（须扣除备份碟与备用碟）
sunit=数值 ：与 su 相当，不过单位使用的是“几个 sector（512Bytes大小）”的意思
swidth=数值 ：就是 su*sw 的数值，但是以“几个 sector（512Bytes大小）”来设置
-f ：如果设备内已经有文件系统，则需要使用这个 -f 来强制格式化才行！
-i ：与 inode 有较相关的设置，主要的设置值有：
size=数值 ：最小是 256Bytes 最大是 2k，一般保留 256 就足够使用了！
internal=[0|1]：log 设备是否为内置？默认为 1 内置，如果要用外部设备，使用下面设置
logdev=device ：log 设备为后面接的那个设备上头的意思，需设置 internal=0 才可！
size=数值 ：指定这块登录区的容量，通常最小得要有 512 个 block，大约 2M 以上才行！
-L ：后面接这个文件系统的标头名称 Label name 的意思！
-r ：指定 realtime section 的相关设置值，常见的有：
extsize=数值 ：就是那个重要的 extent 数值，一般不须设置，但有 RAID 时，
最好设置与 swidth 的数值相同较佳！最小为 4K 最大为 1G 。
范例：将前一小节分区出来的 /dev/vda4 格式化为 xfs 文件系统
[root@study ~]# mkfs.xfs /dev/vda4
meta-data=/dev/vda4 isize=256 agcount=4, agsize=65536 blks
= sectsz=512 attr=2, projid32bit=1
= crc=0 finobt=0
data = bsize=4096 blocks=262144, imaxpct=25
= sunit=0 swidth=0 blks
naming =version 2 bsize=4096 ascii-ci=0 ftype=0
log =internal log bsize=4096 blocks=2560, version=2
= sectsz=512 sunit=0 blks, lazy-count=1
realtime =none extsz=4096 blocks=0, rtextents=0
# 很快格是化完毕！都用默认值！较重要的是 inode 与 block 的数值
[root@study ~]# blkid /dev/vda4
/dev/vda4: UUID="39293f4f-627b-4dfd-a015-08340537709c" TYPE="xfs"
# 确定创建好 xfs 文件系统了！
```

```bash
范例：找出你系统的 CPU 数，并据以设置你的 agcount 数值
[root@study ~]# grep 'processor' /proc/cpuinfo
processor : 0
processor : 1
# 所以就是有两颗 CPU 的意思，那就来设置设置我们的 xfs 文件系统格式化参数吧！！
[root@study ~]# mkfs.xfs -f -d agcount=2 /dev/vda4
meta-data=/dev/vda4 isize=256 agcount=2, agsize=131072 blks
= sectsz=512 attr=2, projid32bit=1
= crc=0 finobt=0
.....（下面省略）.....
# 可以跟前一个范例对照看看，可以发现 agcount 变成 2 了喔！
# 此外，因为已经格式化过一次，因此 mkfs.xfs 可能会出现不给你格式化的警告！因此需要使用 -f
```

```bash
[root@study ~]# mkfs.xfs -f -d agcount=2,su=256k,sw=7 -r extsize=1792k /dev/vda4
meta-data=/dev/vda4 	isize=256 agcount=2, agsize=131072 blks
         = 				sectsz=512 attr=2, projid32bit=1
         = 				crc=0 finobt=0
data     = 				bsize=4096 blocks=262144, imaxpct=25
         = 				sunit=64 swidth=448 blks
naming   =version 2 	bsize=4096 ascii-ci=0 ftype=0
log      =internal log 	bsize=4096 blocks=2560, version=2
         = 				sectsz=512 sunit=64 blks, lazy-count=1
realtime =none 			extsz=1835008 blocks=0, rtextents=0
```

如果使用 sunit 与 swidth 直接套用在 mkfs.xfs 当中呢？那你得小心了！因为指令中的这两个参数用的是“几个 512Bytes 的 sector 数量”的意思！ 是“数量”单位而不是“容量”单位！

#### EXT4 文件系统 mkfs.ext4

```bash
[root@study ~]# mkfs.ext4 [-b size] [-L label] 设备名称
选项与参数：
-b ：设置 block 的大小，有 1K, 2K, 4K 的容量，
-L ：后面接这个设备的标头名称。
范例：将 /dev/vda5 格式化为 ext4 文件系统
[root@study ~]# mkfs.ext4 /dev/vda5
mke2fs 1.42.9 （28-Dec-2013）
Filesystem label= # 显示 Label name
OS type: Linux
Block size=4096 （log=2） # 每一个 block 的大小
Fragment size=4096 （log=2）
Stride=0 blocks, Stripe width=0 blocks # 跟 RAID 相关性较高
65536 inodes, 262144 blocks # 总计 inode/block 的数量
13107 blocks （5.00%） reserved for the super user
First data block=0
Maximum filesystem blocks=268435456
8 block groups # 共有 8 个 block groups 喔！
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks:
32768, 98304, 163840, 229376
Allocating group tables: done
Writing inode tables: done
Creating journal （8192 blocks）: done
Writing superblocks and filesystem accounting information: done
[root@study ~]# dumpe2fs -h /dev/vda5
dumpe2fs 1.42.9 （28-Dec-2013）
Filesystem volume name: &lt;none&gt;
Last mounted on: &lt;not available&gt;
Filesystem UUID: 3fd5cc6f-a47d-46c0-98c0-d43b072e0e12
....（中间省略）....
Inode count: 65536
Block count: 262144
Block size: 4096
Blocks per group: 32768
Inode size: 256
Journal size: 32M
```

#### 其他文件系统mkfs

```bash
[root@RuanXee ~]# mkfs
mkfs         mkfs.cramfs  mkfs.ext3    mkfs.fat     mkfs.msdos   mkfs.xfs     
mkfs.btrfs   mkfs.ext2    mkfs.ext4    mkfs.minix   mkfs.vfat 
```

所以系统还有支持 ext2/ext3/vfat 等等多种常用的文件系统喔！那如果要将刚刚的 /dev/vda5 重新格式化为 VFAT 文件系统呢？

```bash
[root@study ~]# mkfs -t vfat /dev/vda5
[root@study ~]# blkid /dev/vda5
/dev/vda5: UUID="7130-6012" TYPE="vfat" PARTLABEL="Microsoft basic data"
[root@study ~]# mkfs.ext4 /dev/vda5
[root@study ~]# blkid /dev/vda4 /dev/vda5
/dev/vda4: UUID="e0a6af55-26e7-4cb7-a515-826a8bd29e90" TYPE="xfs"
/dev/vda5: UUID="899b755b-1da4-4d1d-9b1c-f762adb798e1" TYPE="ext4"
```

#### xfs_repair 处理 XFS 文件系统

```bash
[root@study ~]# xfs_repair [-fnd] 设备名称
选项与参数：
-f ：后面的设备其实是个文件而不是实体设备
-n ：单纯检查并不修改文件系统的任何数据 （检查而已）
-d ：通常用在单人维护模式下面，针对根目录 （/） 进行检查与修复的动作！很危险！不要随便使用
范例：检查一下刚刚创建的 /dev/vda4 文件系统
[root@study ~]# xfs_repair /dev/vda4
Phase 1 - find and verify superblock...
Phase 2 - using internal log
Phase 3 - for each AG...
Phase 4 - check for duplicate blocks...
Phase 5 - rebuild AG headers and trees...
Phase 6 - check inode connectivity...
Phase 7 - verify and correct link counts...
done
# 共有 7 个重要的检查流程！详细的流程介绍可以 man xfs_repair 即可！
范例：检查一下系统原本就有的 /dev/centos/home 文件系统
[root@study ~]# xfs_repair /dev/centos/home
xfs_repair: /dev/centos/home contains a mounted filesystem
xfs_repair: /dev/centos/home contains a mounted and writable filesystem
fatal error -- couldn't initialize XFS library
```

#### fsck.ext4 处理 EXT4 文件系统

```bash
[root@study ~]# fsck.ext4 [-pf] [-b superblock] 设备名称
选项与参数：
-p ：当文件系统在修复时，若有需要回复 y 的动作时，自动回复 y 来继续进行修复动作。
-f ：强制检查！一般来说，如果 fsck 没有发现任何 unclean 的旗标，不会主动进入
细部检查的，如果您想要强制 fsck 进入细部检查，就得加上 -f 旗标啰！
-D ：针对文件系统下的目录进行最优化配置。
-b ：后面接 superblock 的位置！一般来说这个选项用不到。但是如果你的 superblock 因故损毁时，
通过这个参数即可利用文件系统内备份的 superblock 来尝试救援。一般来说，superblock 备份在：
1K block 放在 8193, 2K block 放在 16384, 4K block 放在 32768
范例：找出刚刚创建的 /dev/vda5 的另一块 superblock，并据以检测系统
[root@study ~]# dumpe2fs -h /dev/vda5 | grep 'Blocks per group'
Blocks per group: 32768
# 看起来每个 block 群组会有 32768 个 block，因此第二个 superblock 应该就在 32768 上！
# 因为 block 号码为 0 号开始编的！
[root@study ~]# fsck.ext4 -b 32768 /dev/vda5
e2fsck 1.42.9 （28-Dec-2013）
/dev/vda5 was not cleanly unmounted, check forced.
Pass 1: Checking inodes, blocks, and sizes
Deleted inode 1577 has zero dtime. Fix&lt;y&gt;? yes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vda5: ***** FILE SYSTEM WAS MODIFIED ***** # 文件系统被改过，所以这里会有警告！
/dev/vda5: 11/65536 files （0.0% non-contiguous）, 12955/262144 blocks
# 好巧合！鸟哥使用这个方式来检验系统，恰好遇到文件系统出问题！于是可以有比较多的解释方向！
# 当文件系统出问题，它就会要你选择是否修复～如果修复如上所示，按下 y 即可！
# 最终系统会告诉你，文件系统已经被更改过，要注意该项目的意思！
范例：已默认设置强制检查一次 /dev/vda5
[root@study ~]# fsck.ext4 /dev/vda5
e2fsck 1.42.9 （28-Dec-2013）
/dev/vda5: clean, 11/65536 files, 12955/262144 blocks
# 文件系统状态正常，它并不会进入强制检查！会告诉你文件系统没问题 （clean）
[root@study ~]# fsck.ext4 -f /dev/vda5
e2fsck 1.42.9 （28-Dec-2013）
Pass 1: Checking inodes, blocks, and sizes
....（下面省略）....
```

无论是 xfs_repair 或 fsck.ext4，这都是用来检查与修正文件系统错误的指令。注意：通常只有身为 root 且你的文件系统有问题的时候才使用这个指令，否则在正常状况下使用此一指令，可能会造成对系统的危害！通常使用这个指令的场合都是在系统出现极大的问题，导致你在 Linux 开机的时候得进入单人单机模式下进行维护的行为时，才必须使用此一指令！

另外，如果你怀疑刚刚格式化成功的磁盘有问题的时后，也可以使用 xfs_repair/fsck.ext4 来检查一磁盘呦！其实就有点像是 Windows 的 scandisk 啦！此外，由于 xfs_repair/fsck.ext4 在扫瞄磁盘的时候，可能会造成部分 filesystem 的修订，所以“执行 xfs_repair/fsck.ext4 时，被检查的 partition 务必不可挂载到系统上！亦即是需要在卸载的状态喔！”

#### 文件系统挂载与卸载

要进行挂载前，你最好先确定几件事：

- 单一文件系统不应该被重复挂载在不同的挂载点（目录）中；

- 单一目录不应该重复挂载多个文件系统；

- 要作为挂载点的目录，理论上应该都是空目录才是。

##### mount

```bash
[root@study ~]# mount -a
[root@study ~]# mount [-l]
[root@study ~]# mount [-t 文件系统] LABEL='' 挂载点
[root@study ~]# mount [-t 文件系统] UUID='' 挂载点 # 鸟哥近期建议用这种方式喔！
[root@study ~]# mount [-t 文件系统] 设备文件名 挂载点
选项与参数：
-a ：依照配置文件 [/etc/fstab](../Text/index.html#fstab) 的数据将所有未挂载的磁盘都挂载上来
-l ：单纯的输入 mount 会显示目前挂载的信息。加上 -l 可增列 Label 名称！
-t ：可以加上文件系统种类来指定欲挂载的类型。常见的 Linux 支持类型有：xfs, ext3, ext4,
reiserfs, vfat, iso9660（光盘格式）, nfs, cifs, smbfs （后三种为网络文件系统类型）
-n ：在默认的情况下，系统会将实际挂载的情况实时写入 /etc/mtab 中，以利其他程序的运行。
但在某些情况下（例如单人维护模式）为了避免问题会刻意不写入。此时就得要使用 -n 选项。
-o ：后面可以接一些挂载时额外加上的参数！比方说帐号、密码、读写权限等：
async, sync: 此文件系统是否使用同步写入 （sync） 或非同步 （async） 的
内存机制，请参考[文件系统运行方式](../Text/index.html#harddisk-filerun)。默认为 async。
atime,noatime: 是否修订文件的读取时间（atime）。为了性能，某些时刻可使用 noatime
ro, rw: 挂载文件系统成为只读（ro） 或可读写（rw）
auto, noauto: 允许此 filesystem 被以 mount -a 自动挂载（auto）
dev, nodev: 是否允许此 filesystem 上，可创建设备文件？ dev 为可允许
suid, nosuid: 是否允许此 filesystem 含有 suid/sgid 的文件格式？
exec, noexec: 是否允许此 filesystem 上拥有可执行 binary 文件？
user, nouser: 是否允许此 filesystem 让任何使用者执行 mount ？一般来说，
mount 仅有 root 可以进行，但下达 user 参数，则可让
一般 user 也能够对此 partition 进行 mount 。
defaults: 默认值为：rw, suid, dev, exec, auto, nouser, and async
remount: 重新挂载，这在系统出错，或重新更新参数时，很有用！
```

系统有没有指定哪些类型的 filesystem 才需要进行上述的挂载测试呢？主要是参考下面这两个文件：

- /etc/filesystems：系统指定的测试挂载文件系统类型的优先顺序；

- /proc/filesystems：Linux系统已经载入的文件系统类型。

那我怎么知道我的 Linux 有没有相关文件系统类型的驱动程序呢？我们 Linux 支持的文件系统之驱动程序都写在如下的目录中：

/lib/modules/$（uname -r）/kernel/fs/

例如 ext4 的驱动程序就写在“/lib/modules/$（uname -r）/kernel/fs/ext4/”这个目录下啦！

##### 挂载 xfs/ext4/vfat 等文件系统

```bash
范例：找出 /dev/vda4 的 UUID 后，用该 UUID 来挂载文件系统到 /data/xfs 内
[root@study ~]# blkid /dev/vda4
/dev/vda4: UUID="e0a6af55-26e7-4cb7-a515-826a8bd29e90" TYPE="xfs"
[root@study ~]# mount UUID="e0a6af55-26e7-4cb7-a515-826a8bd29e90" /data/xfs
mount: mount point /data/xfs does not exist # 非正规目录！所以手动创建它！
[root@study ~]# mkdir -p /data/xfs
[root@study ~]# mount UUID="e0a6af55-26e7-4cb7-a515-826a8bd29e90" /data/xfs
[root@study ~]# df /data/xfs
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/vda4 1038336 32864 1005472 4% /data/xfs
# 顺利挂载，且容量约为 1G 左右没问题！
范例：使用相同的方式，将 /dev/vda5 挂载于 /data/ext4
[root@study ~]# blkid /dev/vda5
/dev/vda5: UUID="899b755b-1da4-4d1d-9b1c-f762adb798e1" TYPE="ext4"
[root@study ~]# mkdir /data/ext4
[root@study ~]# mount UUID="899b755b-1da4-4d1d-9b1c-f762adb798e1" /data/ext4
[root@study ~]# df /data/ext4
Filesystem 	1K-blocks 	Used 	Available 	Use% Mounted on
/dev/vda5 	999320 		2564 	927944 		1% 	/data/ext4
```

##### 挂载 CD 或 DVD 光盘

```bash
范例：将你用来安装 Linux 的 CentOS 原版光盘拿出来挂载到 /data/cdrom！
[root@study ~]# blkid
.....（前面省略）.....
/dev/sr0: UUID="2015-04-01-00-21-36-00" LABEL="CentOS 7 x86_64" TYPE="iso9660" PTTYPE="dos"
[root@study ~]# mkdir /data/cdrom
[root@study ~]# mount /dev/sr0 /data/cdrom
mount: /dev/sr0 is write-protected, mounting read-only
[root@study ~]# df /data/cdrom
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sr0 7413478 7413478 0 100% /data/cdrom
# 怎么会使用掉 100% 呢？是啊！因为是 DVD 啊！所以无法再写入了啊！
```

##### 挂载 vfat 中文U盘 （USB磁盘）

```bash
范例：找出你的U盘设备的 UUID，并挂载到 /data/usb 目录中
[root@study ~]# blkid
/dev/sda1: UUID="35BC-6D6B" TYPE="vfat"
[root@study ~]# mkdir /data/usb
[root@study ~]# mount -o codepage=950,iocharset=utf8 UUID="35BC-6D6B" /data/usb
[root@study ~]# # mount -o codepage=950,iocharset=big5 UUID="35BC-6D6B" /data/usb
[root@study ~]# df /data/usb
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sda1 2092344 4 2092340 1% /data/usb
```

##### 重新挂载根目录与挂载不特定目录

```bash
范例：将 / 重新挂载，并加入参数为 rw 与 auto
[root@study ~]# mount -o remount,rw,auto /
```

##### 我们也可以利用 mount 来将某个目录挂载到另外一个目录去喔！这并不是挂载文件系统，而是额外挂载某个目录的方法！

```bash
范例：将 /var 这个目录暂时挂载到 /data/var 下面：
[root@study ~]# mkdir /data/var
[root@study ~]# mount --bind /var /data/var
[root@study ~]# ls -lid /var /data/var
16777346 drwxr-xr-x. 22 root root 4096 Jun 15 23:43 /data/var
16777346 drwxr-xr-x. 22 root root 4096 Jun 15 23:43 /var
# 内容完全一模一样啊！因为挂载目录的缘故！
[root@study ~]# mount | grep var
/dev/mapper/centos-root on /data/var type xfs （rw,relatime,seclabel,attr2,inode64,noquota）
```

##### umount （将设备文件卸载）

```bash
[root@study ~]# umount [-fn] 设备文件名或挂载点
选项与参数：
-f ：强制卸载！可用在类似网络文件系统 （NFS） 无法读取到的情况下；
-l ：立刻卸载文件系统，比 -f 还强！
-n ：不更新 /etc/mtab 情况下卸载。

范例：将本章之前自行挂载的文件系统全部卸载：
[root@study ~]# mount
.....（前面省略）.....
/dev/vda4 on /data/xfs type xfs （rw,relatime,seclabel,attr2,inode64,logbsize=256k,sunit=512,..）
/dev/vda5 on /data/ext4 type ext4 （rw,relatime,seclabel,data=ordered）
/dev/sr0 on /data/cdrom type iso9660 （ro,relatime）
/dev/sda1 on /data/usb type vfat （rw,relatime,fmask=0022,dmask=0022,codepage=950,iocharset=...）
/dev/mapper/centos-root on /data/var type xfs （rw,relatime,seclabel,attr2,inode64,noquota）
# 先找一下已经挂载的文件系统，如上所示，特殊字体即为刚刚挂载的设备啰！
# 基本上，卸载后面接设备或挂载点都可以！不过最后一个 centos-root 由于有其他挂载，
# 因此，该项目一定要使用挂载点来卸载才行！
[root@study ~]# umount /dev/vda4 &lt;==用设备文件名来卸载
[root@study ~]# umount /data/ext4 &lt;==用挂载点来卸载
[root@study ~]# umount /data/cdrom &lt;==因为挂载点比较好记忆！
[root@study ~]# umount /data/usb
[root@study ~]# umount /data/var &lt;==一定要用挂载点！因为设备有被其他方式挂载
```

如果你遇到这样的情况：

```bash
[root@study ~]# mount /dev/sr0 /data/cdrom
[root@study ~]# cd /data/cdrom
[root@study cdrom]# umount /data/cdrom
umount: /data/cdrom: target is busy.
（In some cases useful info about processes that use
the device is found by lsof（8） or fuser（1））
[root@study cdrom]# cd /
[root@study /]# umount /data/cdrom
```

也就是说其实“你正在使用该文件系统”的意思！所以自然无法卸载这个设备！就“离开该文件系统的挂载点”即可。以上述的案例来说，你可以使用“cd /”回到根目录，就能够卸载 /data/cdrom 啰！

#### mknod

```bash
[root@study ~]# mknod 设备文件名 [bcp] [Major] [Minor]
选项与参数：
设备种类：
b ：设置设备名称成为一个周边储存设备文件，例如磁盘等；
c ：设置设备名称成为一个周边输入设备文件，例如鼠标/键盘等；
p ：设置设备名称成为一个 FIFO 文件；
Major ：主要设备代码；
Minor ：次要设备代码；
范例：由上述的介绍我们知道 /dev/vda10 设备代码 252, 10，请创建并查阅此设备
[root@study ~]# mknod /dev/vda10 b 252 10
[root@study ~]# ll /dev/vda10
brw-r--r--. 1 root root 252, 10 Jun 24 23:40 /dev/vda10
# 上面那个 252 与 10 是有意义的，不要随意设置啊！
范例：创建一个 FIFO 文件，文件名为 /tmp/testpipe
[root@study ~]# mknod /tmp/testpipe p
[root@study ~]# ll /tmp/testpipe
prw-r--r--. 1 root root 0 Jun 24 23:44 /tmp/testpipe
# 注意啊！这个文件可不是一般文件，不可以随便就放在这里！
# 测试完毕之后请删除这个文件吧！看一下这个文件的类型！是 p 喔！^_^
[root@study ~]# rm /dev/vda10 /tmp/testpipe
rm: remove block special file '/dev/vda10' ? y
rm: remove fifo '/tmp/testpipe' ? y
```

#### xfs_admin 修改 XFS 文件系统的 UUID 与 Label name

```bash
[root@study ~]# xfs_admin [-lu] [-L label] [-U uuid] 设备文件名
选项与参数：
-l ：列出这个设备的 label name
-u ：列出这个设备的 UUID
-L ：设置这个设备的 Label name
-U ：设置这个设备的 UUID 喔！
范例：设置 /dev/vda4 的 label name 为 vbird_xfs，并测试挂载
[root@study ~]# xfs_admin -L vbird_xfs /dev/vda4
writing all SBs
new label = "vbird_xfs" # 产生新的 LABEL 名称啰！
[root@study ~]# xfs_admin -l /dev/vda4
label = "vbird_xfs"
[root@study ~]# mount LABEL=vbird_xfs /data/xfs/
范例：利用 uuidgen 产生新 UUID 来设置 /dev/vda4，并测试挂载
[root@study ~]# umount /dev/vda4 # 使用前，请先卸载！
[root@study ~]# uuidgen
e0fa7252-b374-4a06-987a-3cb14f415488 # 很有趣的指令！可以产生新的 UUID 喔！
[root@study ~]# xfs_admin -u /dev/vda4
UUID = e0a6af55-26e7-4cb7-a515-826a8bd29e90
[root@study ~]# xfs_admin -U e0fa7252-b374-4a06-987a-3cb14f415488 /dev/vda4
Clearing log and setting UUID
writing all SBs
new UUID = e0fa7252-b374-4a06-987a-3cb14f415488
[root@study ~]# mount UUID=e0fa7252-b374-4a06-987a-3cb14f415488 /data/xfs
```

#### tune2fs 修改 ext4 的 label name 与 UUID

```bash
[root@study ~]# tune2fs [-l] [-L Label] [-U uuid] 设备文件名
选项与参数：
-l ：类似 dumpe2fs -h 的功能～将 superblock 内的数据读出来～
-L ：修改 LABEL name
-U ：修改 UUID 啰！
范例：列出 /dev/vda5 的 label name 之后，将它改成 vbird_ext4
[root@study ~]# dumpe2fs -h /dev/vda5 &#124; grep name
dumpe2fs 1.42.9 （28-Dec-2013）
Filesystem volume name: &lt;none&gt; # 果然是没有设置的！
[root@study ~]# tune2fs -L vbird_ext4 /dev/vda5
[root@study ~]# dumpe2fs -h /dev/vda5 &#124; grep name
Filesystem volume name: vbird_ext4
[root@study ~]# mount LABEL=vbird_ext4 /data/ext4
```

#### 系统挂载的一些限制：

- 根目录 / 是必须挂载的，而且一定要先于其它 mount point 被挂载进来。

- 其它 mount point 必须为已创建的目录，可任意指定，但一定要遵守必须的系统目录架构原则（FHS）。

- 所有 mount point 在同一时间之内，只能挂载一次。

- 所有 partition 在同一时间之内，只能挂载一次。

- 如若进行卸载，您必须先将工作目录移到 mount point（及其子目录）之外。

```bash
[root@study ~]# cat /etc/fstab
# Device Mount point filesystem parameters dump fsck
/dev/mapper/centos-root                      /        xfs      defaults      0       0
UUID=94ac5f77-cb8a-495e-a65b-2ef7442b837c    /boot    xfs      defaults      0       0
/dev/mapper/centos-home                      /home    xfs      defaults      0       0
/dev/mapper/centos-swap                      swap     swap     defaults      0       0
[设备/UUID等]                                 [挂载点] [文件系统] [文件系统参数] [dump] [fsck]
```

- 第一栏：磁盘设备文件名/UUID/LABEL name： 

  这个字段可以填写的数据主要有三个项目：

  - 文件系统或磁盘的设备文件名，如 /dev/vda2 等
  - 文件系统的 UUID 名称，如 UUID=xxx
  - 文件系统的 LABEL 名称，例如 LABEL=xxx

- 第二栏：挂载点（mount point）：

   就是挂载点啊！挂载点是什么？一定是目录啊～

- 第三栏：磁盘分区的文件系统：

  在手动挂载时可以让系统自动测试挂载，但在这个文件当中我们必须要手动写入文件系统才行！包括 xfs, ext4, vfat, reiserfs, nfs 等等。

- 第四栏：文件系统参数：

  在 mount 这个指令中谈到很多特殊的文件系统参数就是写入在这个字段。

- 第五栏：能否被 dump 备份指令作用：

  dump 是一个用来做为备份的指令，不过现在有太多的备份方案了，所以这个项目可以不要理会！直接输入0就好了！

- 第六栏：是否以 fsck 检验扇区：

  我们现在用的 xfs 文件系统没有办法适用，因为 xfs 会自己进行检验，不需要额外进行这个动作！所以直接填 0 就好了。

#### 例题：假设我们要将 /dev/vda4 每次开机都自动挂载到 /data/xfs ，该如何进行？

```bash
#首先，请用 nano 将下面这一行写入 /etc/fstab 最后面中
[root@study ~]# nano /etc/fstab
UUID="e0fa7252-b374-4a06-987a-3cb14f415488" /data/xfs xfs defaults 0 0

#再来看看 /dev/vda4 是否已经挂载，如果挂载了，请务必卸载再说！
[root@study ~]# df
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/vda4 1038336 32864 1005472 4% /data/xfs
# 竟然不知道何时被挂载了？赶紧给他卸载先！
# **因为，如果要被挂载的文件系统已经被挂载了（无论挂载在哪个目录），那测试就不会进行喔！**
[root@study ~]# umount /dev/vda4

#最后测试一下刚刚我们写入 /etc/fstab 的语法有没有错误！
[root@study ~]# mount -a
[root@study ~]# df /data/xfs
```

/etc/fstab 是开机时的配置文件，不过，实际 filesystem 的挂载是记录到 /etc/mtab 与 /proc/mounts 这两个文件当中的。每次我们在更动 filesystem 的挂载时，也会同时更动这两个文件喔！但是，万一发生你在 /etc/fstab 输入的数据错误，导致无法顺利开机成功，而进入单人维护模式当中，那时候的 / 可是 read only 的状态，当然你就无法修改 /etc/fstab ，也无 法更新 /etc/mtab 啰～那怎么办？没关系，可以利用下面这一招：

```bash
[root@study ~]# mount -n -o remount,rw /
```

