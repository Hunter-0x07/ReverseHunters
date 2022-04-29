# 7.23 王爽汇编语言（二十）

## 中间笔记
jcxz 指令为有条件转移指令，所有的有条件转移指令都是短转移；
"jcxz 标号" 等价于 if ((cx) == 0) jmp short 标号;（这属于 c 语言和汇编语言的综合描述，只是为了方便理解）

## 检测点 9.2
自己写的代码如下：
```asm
assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cx, [bx]
    jcxz ok
    add bx, 1
    jmp short s
ok:
    mov dx, bx
    mov ax, 4c00h
    int 21h

code ends

end start
```
解析：上述代码写错了，自己没注意，然后看了下面参考链接后顿悟。
自己没有注意需要查找的是一个字节，而直接将[bx]处的值 mov 到了 cx 中；
jcxz指令判断的是cx，是一个字，所以需要将cx寄存器的高位设置为0；

参考链接：https://www.jianshu.com/p/be954bf24afe
正确代码如下：
```asm
assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cl, [bx]
    mov ch, 0
    jcxz ok
    inc bx
    jmp short s
ok:
    mov dx, bx
    mov ax, 4c00h
    int 21h

code ends

end start
```

## 总结
检测点 9.2 完成了~，今天做梦想起以前些许伤感的事情。

蓦然回首，已是物是人非。

不过也更加坚定了向前的决心，我辈岂是蓬蒿人~