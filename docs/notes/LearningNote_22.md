# 7.16 王爽汇编语言（十三）

## 中间笔记
主要学习了 and 指令和 or 指令，示例程序如下：
```asm
; 将 datasg 中的第一个字符串转化为大写
; 将 datasg 中的第二个字符串转化为小写
assume cs: codesg, ds: datasg

datasg segment

    db 'BaSiC'
    db 'iNfOrMaTiOn'

datasg ends

codesg segment

start:
    mov ax, datasg
    mov ds, ax  ; 设置 ds 指向 datasg 段

    mov bx, 0   ; 设置 (bx) = 0，ds:bx 指向'BaSiC'的第一个字母

    mov cx, 5   ; 设置循环次数 5，因为 'BaSiC'有5个字母
s:
    mov al, [bx]    ; 将 ASCII 码从 ds:bx 所指向的内存单元中取出
    and al, 11011111B   ; 将 al 中的 ASCII 码的第 5 位置设置为 0，变成大写字母
    mov [bx], al    ; 将转变后的 ASCII 码写回原来的内存单元
    inc bx
    loop s

    mov bx, 5   ; 设置（bx）= 5，ds:bx 指向 'iNfOrMaTiOn'的第一个字母

    mov cx, 11  ; 设置循环次数 11，因为 'iNfOrMaTiOn'有11个字母
s0:
    mov al, [bx]
    or al, 00100000B    ; 将 al 中的 ASCII 码的第 5 位置设置为1，变为小写字母
    mov [bx], al
    inc bx
    loop s0

    mov ax, 4c00h
    int 21h

codesg ends

end start
```

## 总结
前两天没学习呢~
玩联盟去了~