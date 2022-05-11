# 7.32 王爽汇编语言（二十九）

## 中间笔记
"call word ptr 内存单元地址" 等价于
push IP
jmp word ptr 内存单元地址

"call dword ptr 内存单元地址" 等价于
push CS
push IP
jmp dword ptr 内存单元地址（看书上例子应该是高位字存放 CS 的值，低位字存放 IP 的值）

## 检测点 10.5
1.下面程序执行后，ax 中的数值为多少？
```asm
assume cs: code
stack segment

    dw 8 dup (0)

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16      ; 初始化栈顶指针，sp 即 10h

    mov ds, ax      ; 将 stack 的段地址赋值给了 ds 寄存器
    mov ax, 0

    call word ptr ds:[0EH] 
    ; 解释 call word ptr ds:[0EH] 这段汇编代码
    ; 首先 push IP 寄存器的值到栈中
    ; ds:[0EH] 这段代码指向的是刚才 IP 寄存器的值，所以 IP 寄存器的值本身没变！
    
    inc ax
    inc ax
    inc ax      ; 既然 IP 寄存器值没变，那 ax 照常增加，ax = 3

    mov ax, 4c00h
    int 21h    

code ends

end start
```

2.下面的程序执行后，ax 和 bx 中的数值为多少？
```
assume cs: code

data segment

    dw 8 dup (0)

data ends

code segment

start:
    mov ax, data
    mov ss, ax
    mov sp, 16      ; 初始化栈顶指针，奇了怪了，这次居然用 "data" 作为栈的名称~

    mov word ptr ss:[0], offset s 
    ; 焯，忘了上面的汇编代码 offset 的意义了，复习一下：
    ; 笔记在 LearningNote_27.md，"offset 标号"的意思是取得标号的偏移地址
    ; 所以这边将 s 标号的偏移地址放到 ss:[0] 处，注意是两个字节哈

    mov ss:[2], cs      ; 将 cs 寄存器的值 mov 到 ss:[2] 的地方
    call dword ptr ss:[0]  ; 看来上面的操作都是为了这步做准备
    ; 先 push 当前 CS 和 IP 到栈中,然后 ss:[0] 处的高位字数据给 cs，低位字数据给 ip
    ; 即 cs 段地址其实没变，而 ip 变为标号 s 的偏移地址，所以接下来指令从标号 s 处开始执行
    nop     ; 什么也不做占 1 个字节
s:
    mov ax, offset s    ; 将 s 处的偏移地址移动到 ax 寄存器
    sub ax, ss:[0cH]    ; 减法指令：即 ax 寄存器的值减去 ss:[0cH] 内存地址处的值
    ; ss:[0cH] 地址处的值是之前执行 "call dword ptr ss:[0]"这条指令时 push 的 ip 的值，因为先压入栈的是 cs 寄存器的值
    ; 所以 ss:[0cH] 处存放的是当时 IP 的值，当时 CS:IP 指向 nop 指令，而 s 标号处的偏移减去 nop 处的偏移，即 nop 指令的大小，即 1 个字节
    ; 所以 ax 大小为 1 个字节，1 个字节对应第一个地址，所以 ax = 1h
    
    mov bx, cs
    sub bx, ss:[0eH]    ; ss:[0eH]处存放的就是 cs 的值，所以 (bx) = (cs) - (cs) = 0
    mov ax, 4c00h       ; 所以最后 ax = 1, bx = 0
    int 21h

code ends

end start
```

## 总结
没有难度，有耐心的去分析就行了，最重要的是耐心，我认为我还是比较适合做 research；