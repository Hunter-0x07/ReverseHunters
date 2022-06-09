# 7.41 王爽汇编语言（三十八）

## 中间笔记
inc 和 loop 指令不影响 CF 标志位。
adc 指令：带进位加法指令，利用了 CF 位上记录的进位值；
指令格式： adc 操作对象1, 操作对象2
如 adc ax, bx 等价于 （ax) = (ax) + (bx) + CF;

## 思考
对比如下两个程序，将4个 inc指令换成了 add 指令之后，为什么运算结果会改变呢？

程序1如下，计算结果是：2c 11 b4 18 31 13 f5 a5 2d 11 c3 c6 e3 73 8a b9
```asm
assume cs:codesg, ds:datasg

datasg segment

    ;; 第一个 128 位数据地址：0 ~ 7fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; 第二个 128 位数据地址：80h ~ ffh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] 指向第一个 128 位数据
    mov di, 80h ;; ds:[di] 指向第二个 128 位数据

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

;; 计算结果是：2c 11 b4 18 31 13 f5 a5 2d 11 c3 c6 e3 73 8a b9
```

程序2如下，计算结果是：2c 11 b3 18 30 13 f5 a5 2d 11 c2 c6 e3 73 8a b9
```asm
assume cs:codesg, ds:datasg

datasg segment

    ;; 第一个 128 位数据地址：0 ~ 7fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; 第二个 128 位数据地址：80h ~ ffh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] 指向第一个 128 位数据
    mov di, 80h ;; ds:[di] 指向第二个 128 位数据

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

;; 计算结果是：2c 11 b3 18 30 13 f5 a5 2d 11 c2 c6 e3 73 8a b9
```

## 总结
这个程序得调试一下，看一下为什么，放在明天吧，还是别直接网上找答案，而是自己探究，自己debug一下；
