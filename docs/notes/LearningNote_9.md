# 7.03 段寄存器

## 心得
低字节对应低地址
高字节对应高地址

8086/8088 CPU中，有20根地址线，可直接寻址的空间为2^20=1MB = 1024 * 1024 Byte = 100000H Byte = (FFFFF + 1)H Byte；所以寻址范围为 00000 - FFFFF;

物理地址 = 段地址 * 16 + 偏移地址
物理地址为 20 位的地址（20根地址总线）（16位段地址和16位偏移地址合成一个20位物理地址）

#### 题外话
这个课程学的我一愣一愣的，感觉太多基础没仔细讲，是面向有基础的人来讲的课，看来我得先阅读王爽那本汇编语言才行；
先学习那本汇编语言书籍吧；

## 作业
1. 给定段地址为0001H，仅通过变化偏移地址寻址，CPU的寻址范围为 _______ 到_______H 。
偏移地址变化范围：00000h - FFFFFh
物理地址 = 段地址 * 16 + 偏移地址；
那么最小物理地址：0001h => 16 16 + 00000 = 16 = 10h
最大物理地址：16 + 1048576(FFFFh换算成十进制) = 1048592 = 100010h
所以寻址范围为 0010h - 100010h 即 0010h - 1000fh

2.有一数据存放在内存20000H单元中，现给定段地址为SA，若想用偏移地址寻到此单元。则SA应满足的条件是：最小为 _______H ，最大为________H 。

提示：反过来思考，当段地址给定为 1001H 以下和 2000H 以上，CPU无论怎么变化偏移地址都无法寻到20000H单元？


3.8086/8088上运行的程序某一时刻最多可以访问几个段？程序最多可以具有多少个段？程序至少有几个段？


4.8086/8088如何寻址1M字节的存储器物理地址空间？在划分段时，必须满足的两个条件是什么？最多可以把1M字节空间划分成几个段？最少可把1M字节地址空间划分为几个段？


5.存储单元的逻辑地址如何表示?存储单元的20位物理地址如何构成？



6、当段重叠时，一个存储单元的地址可以表示成多个逻辑地址。请问物理地址12345H可表示多少个不同的逻辑地址？偏移最大的逻辑地址是什么？偏移最小的逻辑地址是什么？



7、什么情况下，根据段值和偏移确定的存储单元地址会超出1M？8086如何处理这种情况？