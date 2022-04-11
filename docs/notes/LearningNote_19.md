# 7.13 王爽汇编语言（十）

## 实验 4 [bx]和 loop 的使用
（1）:
分析：内存 0:200 ~ 0:23F 等价于 0020:0 ~ 0023:f，而我们需要传送的数据也是 0 ~ 63（即 0 ~ 3fh），所以用 loop 搞定；
编写汇编代码如下：
```asm
assume cs:code

code segment

    mov ax, 0020h
    mov ds, ax

    mov bx, 0
    mov cx, 40h
s:
    mov [bx], bx
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
    
code ends

end
```

（2）：
分析：题目和上题一样，但是只能使用九条指令？去掉程序返回的两条指令，也就只能用 7 条指令；不对，
我一看上道题，我不就只用了9条指令吗？？？？？哈哈奇怪。

（3）：
题目中整体汇编代码如下（抄写一遍顺便补全代码）：
```asm
assume cs:code

code segment
    mov ax, cs
    mov ds, ax
    mov ax, 0020h
    mov es, ax
    mov bx, 0
    mov cx, 1
s:  
    mov al, [bx]
    mov es:[bx], al
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
code ends

end
```
分析："mov ax, 4c00h"之前的指令，被 CPU 执行的第一条指令的内存段地址是保存在 cs 寄存器里的，所以我们首先需要从 cs 寄存器指向的内存
获取数据复制到 0:200（即 0020:0）内存地址处；所以第一条指令是 cs 寄存器的地址；
然后一次复制一个字节的话，那么怎么计算需要复制的所有指令的字节数（即我们需要 loop 的次数）？哦，我好像有想法了，既然我们知道了需要执行
的指令的内存首地址，那么我们只需要知道 "mov ax, 4c00h" 的地址，然后用其减去首地址不就可以得出需要复制的字节数了吗？
嗯，那么我们怎么知道 "mov ax, 4c00h"的地址呢？
```shell
# 这里参考了网上的解决方案：
https://www.cnblogs.com/Base-Of-Practice/articles/6883892.html
我们可以先将这段代码编译，然后 debug 看一下，发现寄存器 CX 保存的值即是整段指令的字节大小；然后我们再看一下
程序返回这段指令的字节大小，经过计算是 5 个字节，所以 "mov ax, 4c00h" 这段指令的大小是 (1c - 5)，即17h个字节，所以程序中 cx 应该被赋值为 17h；
所以最终汇编代码如下：

assume cs:code

code segment
    mov ax, cs
    mov ds, ax
    mov ax, 0020h
    mov es, ax
    mov bx, 0
    mov cx, 17h
s:  
    mov al, [bx]
    mov es:[bx], al
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
code ends

end
```


## 总结