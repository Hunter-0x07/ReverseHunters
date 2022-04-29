# 7.24 王爽汇编语言（二十一）

## 中间笔记
loop 指令为短转移，所有的循环指令都是短转移。
"loop 标号" 等价于 (cx)--; if ((cx) != 0) jmp short 标号；


## 检测点 9.3
这道题需要注意一点在于：loop 指令会先对 cx 进行减一，之后再判定cx是否
等于0之后再做后续操作；所以这里需要先对 cx 进行加一才行；
```asm
assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cl, [bx]
    mov ch, 0
    inc cx
    inc bx
    loop s
ok:
    dec bx
    mov dx, bx

    mov ax, 4c00h
    int 21h

code ends

end start
```

## 总结
做题前多思考，注意细节问题；