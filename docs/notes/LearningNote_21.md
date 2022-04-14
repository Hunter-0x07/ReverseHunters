# 7.15 王爽汇编语言（十二）

## 中间笔记
在汇编语言程序中，段名就相当于一个标号（由汇编编译器翻译成内存段地址的数值），它代表了段地址。

## 实验 5 编写、调试具有多个段的程序
（1）：
题目汇编源代码如下：
```asm
assume cs:code, ds:data, ss:stack

data segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah, 0987h

data ends

stack segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16

    mov ax, data
    mov ds, ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]

    mov ax, 4c00h
    int 21h

code ends

end start
```
```shell
# 第一题答案如下：
1.解析：程序返回前（不就是指程序执行完我们编写的代码吗？哈哈）
不过看代码，数据段中的数据不会发生变化，因为入栈出栈，数据段中的数据没有变化；

2.解析：这三个段寄存器的值，不就是3个标号所翻译过来的内存段地址吗？对吧。
cs=code(实际为：076C), ss=stack(实际为：076B), ds=data(实际为：076A)

3.解析：这个问题问得好，我也发现了这个情况，那就是看第2个题，我们发现cs、ss、ds寄存器的值的差值是相同的（不知道为什么，我隐约猜到跟代码中段的定义顺序有关系：即从上到下依次为数据段、栈段、代码段）；
所以这道题答案为 data段地址为 (X - 2)、stack段的段地址为 (X - 1);
```

（2）：
题目汇编源代码如下：
```asm
assume cs:code, ds:data, ss:stack

data segment

    dw 0123h, 0456h

data ends

stack segment

    dw 0, 0

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16

    mov ax, data
    mov ds, ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]

    mov ax, 4c00h
    int 21h

code ends

end start
```
```shell
# 疑问一：
看到mov sp, 16这段代码就感觉不对劲；明明定义栈段的时候只定义了两个字，为啥sp 为 16？
16不是定义8个字（即16个字节的时候才写的吗？不然这栈顶指针指向这么远干嘛？继续往下看吧）
1.解析：数据不会有任何变化；
2.cs=code(实际为：076C), ss=stack(实际为：076B), ds=data(实际为：076A)
3.data段地址为 (X - 2)、stack段的段地址为 (X - 1); # 怎么感觉有点重复？？？？
4.我猜想是 64 KB？为什么这样猜？因为我觉着你虽然栈段初始化了两个字数据，但是你依然
可以更改栈段中其他偏移地址的数据，那这分配跟没分配有啥区别吗？
以上猜想是错误的，我们应该在程序加载进内存时，然后查看一下此时分配的内存空间，才能
发现程序加载后我们虽然往内存空间只初始化了4个字节的内存，但是实际却分配了16个字节的空间，不足的按00补全；
结论：数据段和栈段在程序加载后实际占据的空间都是以16个字节为单位的。如果不足，以0补全填充。
所以当段中数据为 N 个字节时，该段实际占据空间为：
N < 16时，实际占用 16 个字节；
N > 16时，实际占用（N/16取整数 + 1）* 16个字节；
```

## 总结