# 7.41 王爽汇编语言（三十八）

## 中间笔记
inc 和 loop 指令不影响 CF 标志位。
adc 指令：带进位加法指令，利用了 CF 位上记录的进位值；
指令格式： adc 操作对象1, 操作对象2
如 adc ax, bx 等价于 （ax) = (ax) + (bx) + CF;

## 思考
对比如下两个程序，将4个 inc指令换成了 add 指令之后，会有什么变化吗？

程序1如下，计算结果是：64 34 64 71 62 d4 5e c6 64 24 84 77 47 46 fa 55
```asm
assume cs:codesg, ds:datasg

datasg segment

    ;; 第一个 128 位数据地址：0000 ~ 000fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; 第二个 128 位数据地址：0010h ~ 001fh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] 指向第一个 128 位数据
    mov di, 10h ;; ds:[di] 指向第二个 128 位数据

    call add128

    mov ax, 4c00h
    int 21h

add128:
    push ax
    push cx
    push si
    push di

    sub ax, ax

    mov cx, 8
s:
    mov ax, [si]
    adc ax, [di]
    mov [si], ax
    inc si
    inc si
    inc di
    inc di
    loop s

    pop di
    pop si
    pop cx
    pop ax
    ret

codesg ends

end main
```

程序2如下，计算结果是：64 34 64 71 62 d4 5e c6 64 24 84 77 46 46 fa 55
```asm
assume cs:codesg, ds:datasg

datasg segment

    ;; 第一个 128 位数据地址：0000h ~ 000fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; 第二个 128 位数据地址：0010h ~ 001fh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] 指向第一个 128 位数据
    mov di, 10h ;; ds:[di] 指向第二个 128 位数据

    call add128

    mov ax, 4c00h
    int 21h

add128:
    push ax
    push cx
    push si
    push di

    sub ax, ax

    mov cx, 8
s:
    mov ax, [si]
    adc ax, [di]
    mov [si], ax
    add si, 2
    add di, 2
    loop s

    pop di
    pop si
    pop cx
    pop ax
    ret

codesg ends

end main
```

发现将 inc 指令替换成 add 指令后，计算结果并没有改变，也是和预想一样；因为我的想法是 add si 和 add di，他们最终结果并不会产生进位，所以并不会
对 CF 标志位有影响；

参考网上说法：https://bbs.csdn.net/topics/100091529
也是说主要看是否进位，进而影响 CF 标志位，既然最终 si 和 di 在这里不会产生进位，自然不会影响，当然这只是针对当前这个题；

## 总结
这个程序得调试一下，看一下为什么，放在明天吧，还是别直接网上找答案，而是自己探究，自己debug一下；

2022.6.10 10:46，问题已解决
