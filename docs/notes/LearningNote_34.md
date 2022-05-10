# 7.28 王爽汇编语言（二十五）

## 中间笔记
ret 指令等价于 pop IP
retf 指令等价于 pop IP 之后再 pop CS

关于短转移、近转移、远转移（即段间转移），可见"LearningNote_27.md";

## 检测点 10.1
题目：补全程序，实现从内存 1000:0000 处开始执行指令。
解析：很简单，其实就是利用 retf 指令的原理，先压入栈中 1000h 和 0 两个数据，后续
使用 retf 指令将其出栈到 ip 寄存器和 cs 寄存器即可，完整代码如下：
```asm
assume cs:code

stack segment

    db 16 dup(0)

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16
    mov ax, 1000h
    push ax
    mov ax, 0
    push ax
    retf

code ends

end start
```


## 总结
偶然间看到北京大学公众号一篇文章说：
在北京大学，文理融合，跨界研究十分普遍。

不得不说，这也是我所向往的，记得似乎儒家有句话是：一物不知而深以为耻。
安全技术对于我而言，可以说是一门手艺、一个养活自己的本领。
而其他也要追求的是无限的其它方面的知识：
《周易·系辞上》中说道，形而上者谓之道，形而下者谓之器。

既要修"器"，也要修"道" -- 2022.5.10 有感。