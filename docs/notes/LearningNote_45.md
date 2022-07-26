# 7.39 王爽汇编语言（三十六）

## 中间笔记
本章主要讲标志寄存器；
```shell
1.ZF（zero flag）标志位：简称零标志位，用于判断计算结果是否为0；如果为0，则ZF标志位置1；不为0，则ZF标志位置为0；

2.PF（parity flag）标志位：奇偶标志位，用于判断计算结果中 bit 位 1 的个数是否为偶数；如果 1 的个数为偶数，则 pf = 1；如果 1 的个数为奇数，则 pf = 0；

3.SF（sign flag）标志位：符号标志位，用于判断结果是否为负数（但是其存在意义的前提是我们是否将运算结果看作有符号数）；如果计算结果为负，则SF=1；否则 SF=0；
```

## 检测点 11.1
```shell
# sub al, al      
解析：sub al, al，结果为 0；所以 zf = 1, pf = 1, sf = 0

# mov al, 1
解析：mov al, 1；传送指令不影响标志位；所以zf = 1, pf = 1, sf = 0;

# push ax
# pop bx
解析：push 和 pop 等转移指令对标志位没有影响吧？按理说不会变化？
那么即维持现状？即 zf = 1, pf = 1, sf = 0 

# add al, bl
解析：上面两条指令压栈和出栈了，最开始压入了 ax，后来出栈到 bx，ax = 0x01，bx = 0x01
add al, bl之后，al = 2（即00000010B），此时zf = 0；pf = 0；sf = 0；

# add al, 10
解析：此时 al = 12（即00001100B），此时 zf = 0; pf = 1; sf = 0;

# mul al
解析：mul 指令复习 P199，所以 ax = 144（即 10010000）; 此时 zf = 0; pf = 1; sf = 0;

# 参考答案对比：
https://blog.csdn.net/shaco_/article/details/105497569
```

## 总结
传送指令不影响标志位，mov, push, pop；牢记，都做错了最开始；
另外一点是 mul 指令是无符号乘法指令，所以对 sf 标志位不会产生影响，在olldbg中出现就是并不会改变 sf 的值，这一点在自己做的
时候也出错了，牢记。
另外，自己先舍弃了前面的课程设计1，先往后做题了；后续碰到障碍，再说；因为最近免杀课程的学习，导致需要接触x86汇编了；
所以不能在继续在课程设计1上耗费时间了。