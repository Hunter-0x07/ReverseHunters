# 7.14 王爽汇编语言（十一）

## 中间笔记
在程序中，定义我们希望处理的数据，这些数据被编译、链接程序作为程序的一部分写到可执行文件中。当可执行文件中的程序被加载入内存时，这些数据也同时被加载入内存中；

单任务系统中，可执行文件执行流程：
（1）由其他程序（如Debug、command或其他）将可执行文件加载进内存；
（2）设置 CS:IP 指向程序第一条要执行的指令（即程序入口），进而执行程序指令；
其中怎么知道要执行的第一条指令的地址呢？-> 根据可执行文件中的描述信息来确定的（可执行文件由描述信息和程序组成）
（3）程序运行结束，返回到加载者；

## 检测点 6.1
（1）：
完整汇编代码如下
```asm
assume cs:codesg

codesg segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah, 0987h
start:
    mov ax, 0
    mov ds, ax
    mov bx, 0

    mov cx, 8
s:  
    mov ax, [bx]
    mov cs:[bx], ax     ; 这两行代码即将 ds:[bx] 中的数据赋值到 cs:[bx] 中
    add bx, 2
    loop s

    mov ax, 4c00h
    int 21h

codesg ends

end start
```
（2）：
解析：相比第一题，这里提出用栈来传送数据，意思是用栈来保存0:0~0:15 单元中的数据，然后出栈将数据pop到程序所在的内存空间；
完整汇编代码如下：
```asm
assume cs:codesg

codesg segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah,  0987h

    dw 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
start:
    mov ax, cs
    mov ss, ax
    mov sp, 24h     ; 设置栈顶地址 ss:sp 为 cs:24h

    mov ax, 0
    mov ds, ax
    mov bx, 0
    mov cx, 8       ; 初始化计数器

s:
    push [bx]       ; 将 0:[bx] 内存的数据压入栈中
    pop cs:[bx]     ; 将压入栈中的数据出栈到 cs:[bx] 中
    add bx, 2
    loop s
    
    mov ax, 4c00h
    int 21h

codesg ends

end start
```

## 总结