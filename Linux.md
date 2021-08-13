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

#### 第一栏代表这个文件的类型及权限

​		-rwxrwx---
​		第一位为文件类型，[d]为目录；[-]为文件；[l]为链接文件；[b]为设备文件里面的可供储存的周边设备（可随机存取设		备）；[c]为设备文件里面的序列埠设备，例如键盘、鼠标（一次性读取设备）
​		接下来每三个为一组，第一组为文件拥有者可具备的权限，第二组为“加入此群组之帐号的权限”，第三组为“非本人且		没有加入本群组之其他帐号的权限”
​		且每一组内的三个位置所对应的权限也不会改变，第一个位置为[r]可读，第二个位置为[w]可写，第三个位置为[x]可		执行，如果没有对应的权限，则该位置显示[-]

#### 第二栏表示有多少文件名链接到此节点（i-node）

#### 第三栏表示这个文件（或目录）的拥有者账号

#### 第四栏表示这个文件的所属群组

#### 第五栏表示这个文件的容量大小，默认单位为Bytes

#### 第六栏表示这个文件的创建日期或是最近的修改日期

​		这一栏的显示时间格式一般为“月 日 时:分”，但如果时间太久远，则会变为“月 日 年”，“ls -l --full-time”就能显示完整		的时间格式了，包括年月日时分。

#### 第七栏为这个文件的文件名

​		比较特殊的是如果文件名前多一个“.”符号，则表示该文件为隐藏文件，通过“ls”命令不能查看隐藏文件，通过“ls -a”则		可以显示出隐藏文件。



- #### 改变所属组群 chgrp

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

- #### 改变所属拥有者chown

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

- #### 改变权限chmod

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

##### 对文件的权限概念

- r：读到该文件内容
- w：对该文件内容进行修改
- x：执行文件内容

##### 对文件夹的权限概念

- r：读到该文件夹下的文件列表
- w：变动该文件夹中的内容（创建、删除、更名、复制、剪切）
- x：进入该文件夹的权限

##### 当文件夹没有x权限时，不能进入该文件夹，即“cd”进入该文件夹命名将反馈失败，无权限；

##### 当文件夹没有x权限有r权限时，可列出文件夹下的文件列表，但没有详细信息，且无法进入文件夹；

##### 当文件夹有w权限时，无论其中的文件的权限是何，都有删除其中任一文件的权限，所有不要轻易对文件夹赋予w权限；

##### 当文件夹有x权限没有r权限时，能进入该文件夹，但无法罗列出其中的文件列表，需要对文件夹内部文件结构了解。



# 6.Linux文件与目录管理

- #### 目录的相关操作

  ##### 	. 代表此层目录

  ##### 	.. 代表上一层目录

  ##### 	-代表前一个工作目录

  ##### 	~代表“目前使用者身份”所在的主文件夹

  ##### 	~account 代表 account 这个使用者的主文件夹（account是个帐号名称）

- #### 常见的处理目录指令

  ##### 1.cd：变换目录

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

  

  ##### 2.pwd：显示目前所在的目录

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

  

  ##### 3.mkdir：创建新目录

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

  

  ##### 4.rmdir：删除空目录

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

  

- #### 文件与目录的检视：ls

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
*:代表可可执行文件； /:代表目录； =:代表 socket 文件； &#124;:代表 FIFO 文件；
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

- #### 复制、删除和移动：cp、rm、mv

  ##### cp：复制文件或目录

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

  ##### rm：移除文件或目录

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
  rm: remove regular empty file `/tmp/etc/crypttab'? ^C &lt;== 按下 [crtl]+c 中断
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

  ##### mv：移动文件与目录，或更名

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

  ##### basename和dirname的用途

  ```bash
  [root@study ~]# basename /etc/sysconfig/network
  network <== 很简单！就取得最后的文件名～
  [root@study ~]# dirname /etc/sysconfig/network
  /etc/sysconfig <== 取得的变成目录名了！
  ```

  

- #### 查阅一个文件的内容

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
  &lt;==要等到输入[crtl]-c之后才会离开tail这个指令的侦测！
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

  

