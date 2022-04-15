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
（3）：
```asm
assume cs: code, ds: data, ss: stack

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

data segment

    dw 0123h, 0456h

data ends

stack segment

    dw 0, 0

stack ends

end start
```
```shell
1.解析：data 段中的数据还是一样不会发生变化；

2.
解析：cs=076a, ss=076e, ds=076d，这里开始有点疑惑了；
但是我怀疑跟 end start的位置有关，这里的end start是放在最后的，但是中间还放了数据
段和栈段；

3.
解析：
data段的段地址为X + 3，stack段的段地址为 X + 4；
```

（4）：
解析：
我觉得是第（3）题中的程序可以正常运行，因为其代码段在程序的开头；

（5）：
解析：
db应该是"define a byte"的意思，所以应该用8位寄存器来保存这个数。

代码参考了别人的答案，其中用到了之前没用过的三个寄存器，si、di、es；
其中si、di是8086CPU中和 bx 寄存器功能相近的寄存器，用来存放偏移地址；
es 是与 ds 寄存器功能相近的寄存器，用来存放段地址；

完整汇编代码如下：
```asm
assume cs:code

a segment

    db 1, 2, 3, 4, 5, 6, 7, 8

a ends

b segment

    db 1, 2, 3, 4, 5, 6, 7, 8

b ends

c segment

    db 0, 0, 0, 0, 0, 0, 0, 0

c ends

code segment

start:
    mov ax, a
    mov ds, ax
    mov bx, 0

    mov ax, b
    mov es, ax
    mov si, 0
    mov di, 16

    mov cx, 8
s:
    mov al, ds:[bx]
    add al, es:[si]
    mov es:[di], al
    inc bx
    inc si
    inc di
    loop s

    mov ax, 4c00h
    int 21h

code ends

end start

```
做完这道题我有点懵圈。。。mov di, 16这个指令我不懂，为什么 es:[di]保存了 c 段的数据？而且我还发现，a段里面也保存了b、c、code段的数据；奇怪，不懂为什么，或许后续学习中
能知道为什么。
对了，段地址 * 16 + 偏移地址 = 物理地址，差点忘了，会不会跟这个有关系，我想一下；
明白了，虽然定义的段的段地址不一样，但是他们最终的物理地址算出来是一样的，怪不得；

（6）：
这道题比较简单，代码如下：
```asm
assume cs: code

a segment

    dw 1, 2, 3, 4, 5, 6, 7, 8, 9, 0ah, 0bh, 0ch, 0dh, 0eh, 0fh, 0ffh

a ends

b segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

b ends

code segment

start:
    mov ax, a
    mov ds, ax
    mov bx, 0

    mov ax, b
    mov ss, ax
    mov sp, 16

    mov cx, 8
s:
    push [bx]
    add bx, 2
    loop s

    mov ax, 4c00h
    int 21h

code ends

end start
```


## 以上实验5的答案参考链接如下：
```shell
1.https://silence-tang.github.io/2021/09/19/
%E7%8E%8B%E7%88%BD%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80%20%E5%AE%9E%E9%AA%8C5/
```

## 总结
嗯，有意思。