# 7.20 王爽汇编语言（十七）

## 实验 7 寻址方式在结构化数据访问中的应用

做这道题之前先复习一下有几个寄存器可以使用：
```shell
ax：
通常用来临时保存段地址或其他数据

cx：
通常用来保存循环次数

dx：
在 div 除法指令中应用的时候，用来存放 32 被除数的高 16 位


bx、si、di、bp：
4个寄存器通常用来进行内存单元的寻址，存放偏移地址；其中它们可以组合应用；

ss:
通常用来存放栈顶段地址；

sp：
通常用来存放栈顶偏移地址；

ds:
通常用来存放数据的段地址；

es：
和 ds 寄存器功能相近，即用来存放数据的段地址；

ip：
用来存放代码段的偏移地址；
```

另外还要复习一下内存单元寻址的几种书写方式：书中寻址方式小结在：P164

另外题中还用到了 div 除法指令，并且被除数是 32 位，所以也复习一下：
```shell
# 参考 P169
除数：有 8 位和 16 位两种，在一个 reg 或内存单元中
被除数：默认存放在 AX 或 （DX 和 AX）中，如果除数为 16 位，被除数则为 32 位，在DX
和 AX 中存放，DX 存放高 16 位，AX 存放低 16 位；
结果：如果除数为 16 位，则 AX 存放除法操作的商，DX 存放除法操作的余数；
```

第一版自己写的程序如下（明天优化）
```asm
assume cs: codesg, ds: data, ss: stacksg

data segment

    db '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983'
    db '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992'
    db '1993', '1994', '1995'
    ; 以上是表示 21 年的 21 个字符串

    dd 16, 22, 382, 1356, 2390, 8000, 16000, 24486, 50065, 97479, 140417, 197514
    dd 345980, 590827, 803530, 1183000, 1843000, 2759000, 3753000, 4649000, 5937000
    ; 以上是表示 21 年公司总收入的 21 个 dword 型数据

    dw 3, 7, 9, 13, 28, 38, 130, 220, 476, 778, 1001, 1442, 2258, 2793, 4037, 5635, 8226
    dw 11542, 14430, 15257, 17800
    ; 以上是表示 21 年公司雇员人数的 21 个 word 型数据

data ends

table segment

    db 21 dup ('year summ ne ?? ')

table ends

stacksg segment

    ; 以下 dup 指令等价于：dw 0, 0, 0, 0, 0, 0, 0, 0
    dw 8 dup (0)

stacksg ends

codesg segment

start:
    mov ax, data
    mov ds, ax   
    mov bx, 0   
    mov si, 0
    
    mov ax, table
    mov es, ax 
    mov bp, 0
    mov di, 0

    mov cx, 21
    ; 将年份移动到 table 段中
s0:
    push cx
    mov cx, 2
s00:
    mov ax, [bx][si]
    mov es:[bp][di], ax
    add si, 2
    add di, 2
    loop s00

    add di, 12
    pop cx
    loop s0 
    ; 接下来将每年的收入移动到 table 段中

    mov bx, 84
    mov si, 0

    mov bp, 0
    mov di, 5

    mov cx, 21
s1:
    mov ax, [bx + si]
    mov es:[bp + di], ax
    mov ax, [bx + si + 2]
    mov es:[bp + di + 2], ax

    add bx, 4
    add bp, 16
    loop s1
    ; 接下来将雇员数移动到 table 段中，也是类似的做法

    mov bx, 168
    
    mov bp, 0
    mov di, 10

    mov cx, 21
s2:
    mov ax, [bx]
    mov es:[bp + 10], ax

    add bp, 16
    add bx, 2
    loop s2
    ; 接下来计算每年的人均收入，然后将人均收入移动到 table 段中，会用到 div 除法指令
    ; 人均收入 = 一年总收入 / 雇员数（我们这里只取商作为人均收入，余数不要）

    mov bp, 0
    mov si, 10   ; 用于定位收入偏移地址（即被除数）
    mov di, 5   ; 用于定位雇员偏移地址（即除数）
    mov cx, 21
s3:
    mov ax, es:[bp + di]    ; 获取收入的低 16 位保存到 AX 寄存器
    mov dx, es:[bp + di + 2]    ; 获取收入的高 16 位保存到 DX 寄存器
    div word ptr es:[bp + si]   ; 将 dx:ax 中的 32 位被除数除以 es:[bp + si] 字单元中的数据
    mov es:[bp + si + 3], ax    ; 将商保存到人均收入的位置

    add bp, 16
    loop s3

    mov ax, 4c00h                                     
    int 21h

codesg ends

end start
```


## 总结
不知不觉，已经把 13 个寄存器都用了一遍~
技能这种东西，熟练只是时间问题罢了~
还没做完，明天再做;

```shell
# 2022.4.25
# 今天把初步第一版程序写出来了，不过得优化
```