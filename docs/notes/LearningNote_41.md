# 7.35 王爽汇编语言（三十二）

## 实验 10 编写子程序
（1）：
解析：其中用到了实验 9 的知识，所以首先复习实验 9，我们可知显示缓冲区首页的范围：B8000H ~ B8F9FH
首先我们的子程序需要根据行号和列号计算要写入的显示缓冲区的地址。

要写入的显示缓冲区的偏移地址 = 行号 * 160 + 列号 * 2

然后计算乘法会用到 mul 指令，这里复习一下：书 P199
这里的行号和列号都是 8 位以内的数，所以对于两个相乘的 8 位的数，
一个默认存放在 AL 中，另一个放在 8 位 reg 或内存字节单元中。乘法结果，对于8位来说默认结果存放在 AX 中


字符属性 = 就是 cl，其会放在每个字符的高位字节，每个字符低位字节存放颜色属性；

另外我们可以尝试用 es:di 来定位要写入的显示缓冲区的地址。

初步独立完成的程序如下：（但是实际没有成功），明天再做修改
```asm
; 在屏幕的 8 行 3 列，用绿色显示 data 段中的字符串
assume cs:code

data segment

    db 'Welcome to masm!', 0

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

main:
    mov dh, 8   ; 行号
    mov dl, 3   ; 列号
    mov cl, 2   ; 颜色属性

    mov ax, data
    mov ds, ax  ; 初始化 ds 寄存器
    mov si, 0   ; ds:si 指向 data 数据段
    call show_str

    mov ax, 4c00h
    int 21h

show_str:
    mov bx, 0   ; bx 用来存放要写入的显示缓冲区的偏移地址
    mov di, 160
    mov al, dh
    mul di      ; 行号 * 160，结果保存到 ax 寄存器
    add bx, ax
    mov di, 2
    mov al, dl
    mul di      ; 列号 * 2，结果保存到 ax 寄存器
    add bx, ax  ; bx = 行号 * 160 + 列号 * 2

    mov ax, 0b800h
    mov es, ax   ; 初始化指向显示缓冲区的段地址保存到 es 寄存器

mov_str:
    mov cl, [si] 
    mov ch, 0
    jcxz ok         ; 判断是否已经读到 data 数据段字符串的末尾（即 0）
    mov al, [si]
    mov es:[bx], al   ; 将 data 数据段中的字符串赋值到显示缓冲区
    add bx, 1
    mov byte ptr es:[bx], 2
    add bx, 1
    add si, 1
    jmp short mov_str

ok:
    ret

code ends

end main
```


## 总结
今天主要复习了c指针，又有了深的理解；另外这个程序看来跑失败了~，焯！
明天做修改对程序