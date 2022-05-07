# 7.26 王爽汇编语言（二十三）

## 实验 9 根据材料编程
```shell
# 题目：在屏幕中间分别显示绿色、绿底红色、白底蓝色的字符串'welcome to masm!'
# 参考链接：https://www.bilibili.com/video/BV1Db411T7vK?p=47

# 小甲鱼示范代码如下：

assume cs:code, ds:data, ss:stack

data segment

    db 'welcome to masm!'
    db 02h, 24h, 71h

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

start:
    mov ax, data
    mov ds, ax

    mov ax, stack
    mov ss, ax
    mov sp, 10h

    xor bx, bx  ; bx 清零，用来索引颜色
    mov ax, 0b872h  ; 算出屏幕第 12 行中间的显存的段起始位置放入 ax 中

    mov cx, 3   ; s3 循环控制行数，外循环为 3 次，因为要显示三个字符串
s3:
    push cx
    push ax
    push bx

    mov es, ax  ; 此时 es 为屏幕第 12 行中间的显存的段起始位置

    mov si, 0   ; si 用来索引代码列的字符
    mov di, 0   ; di 用来定位目标列

    mov cx, 10h ; s1 循环控制存放的字符，内循环为 10h 次，因为一个字符串含 10h 个字节
s1:
    mov al, ds:[si]
    mov es:[di], al
    inc si
    add di, 2
    loop s1

    mov di, 1
    pop bx
    mov al, ds:10h[bx]
    inc bx

    mov cx, 10h
s2:
    mov es:[di], al
    add di, 2
    loop s2     ; 此循环实现奇地址中存放字符的颜色属性

    pop ax
    add ax, 0ah

    pop cx
    loop s3

    mov ax, 4c00h
    int 21h

code ends

end start

```


## 总结
看了小甲鱼的代码，自己还需要回头复习一些东西；所以节奏慢下来吧~
