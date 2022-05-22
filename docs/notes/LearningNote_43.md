# 7.37 王爽汇编语言（三十四）

## 实验 10 编写子程序
（3）：
独立完成程序如下：
```asm
assume cs:code, ds:data, ss:stack

data segment

    db 10 dup (10)

data ends

stack segment

    dw 8 dup (0)

stack ends

code segment

main:
    mov ax, stack
    mov ss, ax
    mov sp, 10h         ; 初始化栈段

    mov ax, 12666       
    mov bx, data
    mov ds, bx
    mov si, 0
    call dtoc

    mov dh, 8       ; dh 保存行号
    mov dl, 3       ; dl 保存列号
    mov cl, 2       ; cl 保存颜色属性
    call show_str   ; 调用 show_str 子程序将 ds:si 的数据复制到显示缓冲区然后显示出来

    mov ax, 4c00h
    int 21h

dtoc:
    push si         ; 保存原始主程序寄存器的值
    push bx
    push dx         

    ; 首先第一步是求出十进制数据 12666 的每一位值
    ; 然后将每一位加上 30H 转换为字符的 ASCII 码并保存到 data 数据段
    ; 因为 12666 / 10 商为 1266，所以我们必须用 16 位除法
    mov bx, 10      ; bx 用看来保存除数

conti_cal:
    mov dx, 0       ; 被除数高位置为 0，低位默认为 ax 寄存器 word 型数据
    div bx          ; 12666 / 10，商保存在 AX 寄存器中，余数保存在 DX 寄存器中
    add dx, 30h     ; 转换为对应十进制字符的 ASCII 码
    mov word ptr [si], dx    ; 将字符 ASCII 码保存到 ds:si 数据段中
    add si, 1     

    ; 判断商是否为 0，如果为 0 则结束程序
    mov cx, ax
    jcxz over       

    ; 商不为 0 则继续计算
    jmp short conti_cal

over:
    pop dx          ; 恢复原始主程序寄存器的值
    pop bx
    pop si          
    ret

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

## 总结
嗯，抽时间继续往下走~，三个问题完成了~