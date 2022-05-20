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

初步完成的程序如下：
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
    mov cl, 2   ; 颜色
    
    mov ax, data   
    mov ds, ax      
    mov si, 0      ; 初始化 ds:[si] 指向 'Welcome to masm!'
    call show_str

    mov ax, 4c00h
    int 21h

show_str:
    push si     ; 保存原始主程序寄存器的值 
    push cx    

    ; 计划用 es:di 来定位要写入的显存缓冲区的首地址
    mov al, 160
    mul dh
    mov bx, ax      ; 计算 160 * 行号保存到 bx 寄存器
    mov al, 2
    mul dl
    add bx, ax      ; bx 此时 = 160 * 行号 + 2 * 列号
    
    mov ax, 0b800h
    mov es, ax  ; es 保存要写入的显存缓冲区的段地址
    mov di, 0
    mov al, cl  ; al 存放颜色属性

change:
    mov ch, 0
    mov cl, [si]    ; cl 存放源字符
    jcxz ok         ; 如果源字符串遇到 0 则返回
    mov es:[bx + di], cl    ; 将源字符存放到目标显存位置
    mov es:[bx + di + 1], al    ; 将颜色属性存放到目标显存位置
    add di, 2
    add si, 1
    jmp short change

ok:
    pop cx      ; 恢复原始主程序寄存器的值
    pop si  
    ret

code ends

end main
```

#### 参考链接：
小甲鱼讲16位汇编：
https://www.bilibili.com/video/BV1Rs411c7HG?p=52
其中给了我一些启发。


## 总结
今天主要复习了c指针，又有了深的理解；另外这个程序看来跑失败了~，焯！
明天做修改对程序

2022.5.20 11：45 终于完成了这个题目，也纠正了一些错误哈哈