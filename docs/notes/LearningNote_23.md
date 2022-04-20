# 7.17 王爽汇编语言（十四）

## 中间笔记
这章节标题：更灵活的定位内存地址的方法~

```shell
# CPU 提供了多种寻址方式
# 用 [bx+idata] 的方式指向一个内存单元
mov ax, [200 + bx]
等价于 mov ax, 200[bx]
等价于 mov ax, [bx].200

# 用 [bx + si] 或 [bx + di] 的方式指向一个内存单元
mov ax, [bx + si]
等价于 mov ax, [bx][si]

# 用 [bx + si + idata] 的形式指向一个内存单元
mov ax, [bx + si + idata]
等价于 mov ax, [bx + idata + si]
等价于 mov ax, idata[bx][si]
等价于 mov ax, [bx].idata[si]
等价于 mov ax, [bx][si].idata
```

si、di 寄存器是 8086 CPU 中和 bx 寄存器功能相近的寄存器，用来存放偏移地址；

## 实验6
（2）：
```asm
assume cs: codesg, ss: stacksg, ds: datasg

stacksg segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

stacksg ends

datasg segment

    db '1. display  '
    db '2. brows    '
    db '3. replace  '
    db '4. modify   '

datasg ends

codesg segment

start:
    mov ax, stacksg
    mov ss, ax
    mov sp, 16  ; 初始化栈顶指针

    mov ax, datasg
    mov ds, ax
    mov bx, 0

    mov cx, 4   ; 外层循环 4 次
s0:
    push cx     ; 保存外层循环的次数
    mov cx, 4   ; 内层循环 4 次
    mov si, 3   ; 初始化一维数组指针
s:
    mov al, [bx][si]
    and al, 11011111b
    mov [bx][si], al
    inc si
    loop s
    
    pop cx      ; 还原外层循环的次数
    add bx, 12  ; 调整 bx 的值指向下一个一维数组
    loop s0

    mov ax, 4c00h
    int 21h

codesg ends

end start
```


## 总结
这一节主要讲了多种定位内存单元地址的方法，还讲了用内存栈结构来保存临时的数据。
还行，并不难~