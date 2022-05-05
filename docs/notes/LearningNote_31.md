# 7.25 王爽汇编语言（二十二）

## 实验8 分析一个奇怪的程序
待分析程序如下：
```asm
assume cs:codesg

codesg segment

    mov ax, 4c00h   ; 程序返回
    int 21h
start:
    mov ax, 0
s:
    nop     ; nop指令：什么也不做占一个字节
    nop

    mov di, offset s    ; di 存放 s 的偏移 008h
    mov si, offset s2   ; si 存放 s2 的偏移 0020h
    mov ax, cs:[si]     ; 将 jmp short s1 的机器码 EBF6 赋值到 ax 寄存器，其中 F6 代表偏移 -10
    mov cs:[di], ax     ; 将 jmp short s1 的机器码 EBF6 赋值到 cs:[di] 位置
s0:
    jmp short s     ; 跳转到 s 指令处，因为jmp short s1 等价于向前偏移10个位置，刚好到 mov ax, 4c00h指令处，所以程序能正常结束
s1:
    mov ax, 0
    int 21h
    mov ax, 0
s2:
    jmp short s1
    nop

codesg ends

end start
```


## 总结
嗯，五一过完了~，正常学习！