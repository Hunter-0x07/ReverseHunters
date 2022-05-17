# 7.34 王爽汇编语言（三十一）

## 中间笔记
为了防止子程序中使用到的寄存器和主程序中使用的寄存器冲突导致逻辑出错，解决办法是在子程序的开始将
子程序中所有用到的寄存器的内容都保存起来（可以用栈来保存），在子程序返回前再恢复。（详情关注：P205页）
示例程序如下：
```
; 将 data 数据段中每个字符串转化为大写，字符串以 0 结尾
assume cs:code

data segment

    db 'word', 0
    db 'unix', 0
    db 'wind', 0
    db 'good', 0

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

main:
    mov ax, data
    mov ds, ax      ; 初始化 ds 寄存器

    mov ax, stack
    mov ss, ax      
    mov sp, 16      ; 初始化栈顶指针

    mov bx, 0       ; 用 bx 寄存器临时保存 si 的值
    mov cx, 4
s:
    mov si, bx      ; ds:[si] 指向 data 数据段
    call capital    ; 调用 capital 函数
    add bx, 5       ; 让 ds:[si] 指向下一个字符串开头字符
    loop s

    mov ax, 4c00h
    int 21h

capital:
    push cx         ; 首先将子程序中要使用到的寄存器值入栈
    push si

change:
    mov cl, [si]    ; 将数据段的单个字节保存到 cl 寄存器中
    mov ch, 0
    jcxz ok         ; 如果 cx 寄存器为 0，则返回
    and byte ptr [si], 11011111b    ; 转化为大写
    inc si
    jmp short change

ok:
    pop si
    pop cx           ; 恢复子程序中使用到的的寄存器值
    ret

code ends

end main
```


## 总结
嗯~，继续下节做实验 10