# 7.09 王爽汇编语言（六）

## 检测点 3.2
8086 CPU 的入栈和出栈操作都是以字为单位进行的；
SS 段寄存器存放栈顶的段地址，SP 寄存器存放栈顶的偏移地址；
所以 SS:SP 就可以代表栈顶的物理内存地址；
PUSH 指令和 POP 指令执行时，CPU 从 SS 和 SP 中得到栈顶的地址；

```shell
# 详情参考 P68
执行 Push 指令时，CPU 先改变 SP，然后向 SS:SP 的内存传送数据；
执行 Pop 指令时，CPU 先读取 SS:SP 内存的数据，而后改变 SP；
```

将一段内存当成数据段处理、还是代码段处理、还是栈段处理，关键看 CPU 中寄存器的设置；
CS 为代码段的段地址；
IP 为代码段的偏移地址；
SS 为栈段的段地址；
SP 为栈段的偏移地址；
DS 为数据段的段地址；

## 作业答案
（1）这里把所有步骤都列了出来；
```shell
mov ax, 1000h
mov ds, ax

# 设置栈顶
mov ax, 2000h 
mov ss, ax
mov sp, 0010h

push [0]
push [2]
push [4]
push [6]
push [8]
push [A]
push [C]
push [E]
```

（2）这里把所有步骤列了出来：
```shell
mov ax, 2000h
mov ds, ax

# 设置栈顶
mov ax, 1000h
mov ss, ax
mov sp, 0000h

pop [E]
pop [C]
pop [A]
pop [8]
pop [6]
pop [4]
pop [2]
pop [0]
```