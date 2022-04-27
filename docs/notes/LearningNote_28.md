# 7.22 王爽汇编语言（十九）

## 检测点 9.1 
（1）：
解析题目：首先"jmp word"说明是段内转移，然后需要跳到第一条指令的话那就意味着IP需要
变为 0，也就是 ds:[bx + 1] 处起始存放的是一个字的 0 即可；
完整代码如下：
```asm
assume cs:code

data segment

    dd 0

data ends

code segment

start:
    mov ax, data
    mov ds, ax
    mov bx, 0
    jmp word ptr [bx + 1]

code ends

end start
```

（2）：
这个题目也没什么难度，就是需要将 CS:IP 同时都改为0就行，完整代码如下：
```asm
assume cs:code

data segment

    dd 12345678H

data ends

code segment

start:
    mov ax, data
    mov ds, ax
    mov bx, 0
    mov word ptr [bx], 0
    mov word ptr [bx+2], cs
    jmp dword ptr ds:[0]

code ends

end start
```

（3）：
简单，(cs) = 0006H, (ip) = 00BEH

## 总结
习题还行，没啥难度。