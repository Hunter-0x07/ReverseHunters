# 7.33 王爽汇编语言（三十）

## 问题 10.1
下面程序返回前，bx 中的值是多少？

```asm
assume cs: code

code segment

start:
    mov ax, 1
    mov cx, 3
    call s      ; 即 push ip，然后 ip 指向该标号的偏移地址

    mov bx, ax  ; bx = 8
    mov ax, 4c00h
    int 21h
s:
    add ax, ax  ; 循环 3 次后 ax = 8
    loop s
    ret         ; 复习一下，ret 指令等价于 pop IP，所以此时就应该指向 "mov bx, ax"

code ends

end start
```

## 中间笔记
学到了新东西，通过 call 指令和 ret 指令来实现子程序的机制（即我看类似函数调用）
具有子程序的源程序的框架见书 P198；

```shell
# mul 乘法指令格式如下：（详情见 P199）
mul reg
mul 内存单元
```
对于子程序的调用，用寄存器来保存参数和结果是最常用的方法。
但是对于需要传递多个参数和返回多个结果的子程序，用寄存器显然不是一个有效
的办法，此时可以采用内存空间来进行存放。我们将数据放到内存中，然后将该部分内存
的首地址存放到寄存器即可。

多个参数的示范代码如下，这里我们操作内存单元时使用了循环；
```
; 将 data 段中的字符串转化为大写

assume cs: code

data segment

    db 'conversation'

data ends

code segment

main:
    mov ax, data
    mov ds, ax
    mov si, 0
    mov cx, 12
    call capital

    mov ax, 4c00h
    int 21h

capital:
    and byte ptr [si], 11011111b    ; 将 ds:si 所指向的内存单元转化为大写
    inc si
    loop capital
    ret

code ends

end main
```
除了用寄存器传递参数外，还有一种通用的方法是用栈来传递参数，详情见 P333


## 总结
今日到 P203，准备看 10.12 寄存器冲突的问题~，另外附注4（用栈传递参数还没看完）