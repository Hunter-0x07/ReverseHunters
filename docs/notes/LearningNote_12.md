# 7.06 王爽汇编语言（三）

## 检测点 2.2
物理地址：CPU在访问内存单元时，必须给出一个物理地址，而这个物理地址是唯一的（用来标识内存单元在内存中的位置）；
8086 CPU 内部一次能处理、传输的是16位的数据，而 CPU 外部地址总线宽度为20位；所以其在内部采用了用两个
16 位地址合成的办法形成一个 20 位的物理地址；
物理地址 = 段地址 * 16 + 偏移地址

段地址 * 16 等价于 数据的二进制形式左移 4 位 等价于 数据的十六进制形式左移 1 位；

物理地址计算的思想：8086 CPU因为限制只能提供16位的数据，但是CPU的外部地址总线宽度为20；为了满足宽度 20的寻址
能力，我们必须要能提供20位的地址；我们通过（物理地址 = 段地址 * 16 + 偏移地址）的形式来形成一个 20 位的物理地址；

给定一个段地址，如果只变化偏移地址的话，最多只能寻址 2^16 个内存单元，也就是 64 KB 内存单元；

## 作业答案
（1）：
00010H ~ 1000FH
解析：偏移地址为 16 位，变化范围为 0 ~ FFFFH；
所以CPU寻址范围为：0001H * 16 + 0 ~ 0001H * 16 + FFFFH 即 00010H ~ 1000FH

（2）：
```shell
# 参考链接
https://www.jianshu.com/p/bae18b34aa9b

解析：最大段地址是很好求的，但是最小段地址求解的时候就出问题了；
要求最小段地址，需要偏移地址最大，偏移地址变化范围 0H ~ FFFFH
根据计算公式：SA * 16 + FFFFH = 20000H,这样是不对的，因为
20000H - FFFFH = 10001H = 65537，没法整除 16；而段地址必须是
16的整数倍；因为FFFFH已经是最大偏移地址了，不能再大了，所以需要
缩小偏移地址来缩小 65537，直到能整除 16 为止；计算得出：
SA范围为： 1001H ~ 2000H

当段地址小于 1001H，或者大于 2000H的时候，偏移地址怎么变化都无法寻到 20000H 内存单元；

```
