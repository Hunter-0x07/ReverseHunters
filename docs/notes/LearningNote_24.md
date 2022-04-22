# 7.18 王爽汇编语言（十五）

## 中间笔记
在 8086 CPU 中，只有bx、si、di、bp 4个寄存器可以用在"[...]"进行内存单元的寻址。
```shell
# bx、si、di、bp 组合方式如下：
mov ax, [bx]
mov ax, [si]
mov ax, [di]
mov ax, [bp]
mov ax, [bx + si]
mov ax, [bx + di]
mov ax, [bp + si]
mov ax, [bp + di]
mov ax, [bx + si + idata]
mov ax, [bx + di + idata]
mov ax, [bp + si + idata]
mov ax, [bp + si + idata]
- 注意：在[...]使用 bp 寄存器的时候，指令中没有显式给出段地址的话，段地址默认在 ss 寄存器中，而不是 ds 寄存器~
如：mov ax, [bp]    含义：(ax) = ((ss) * 16 + (bp))
```

数据可能处于的位置：CPU内部、内存、端口； 

```shell
# 汇编语言中表达数据的位置 P163
1.立即数（idata）（我猜全称： immediate data）
如 mov ax, 1
   add bx, 200h
idata 直接在机器指令中，即保存在 CPU 的指令缓冲器中；

2.寄存器中
如：mov ax, bx
    mov ds, ax

3.段地址（SA）和偏移地址（EA）
指令要处理的数据在内存里的话
mov ax, [0]
mov ax, [di]
mov ax, [bx + 8]
```

```shell
# 对于 CPU 怎么知道要处理的数据有多长？8086 CPU 可以处理两种尺寸的数据：byte、word P165
（1）通过寄存器名指明要处理的数据长度
mov ax, 1
mov bx, ds:[0]  # bx 寄存器是 16位寄存器，此时是字操作

（2）通过 "X ptr"的形式指明内存单元的长度，X 在汇编指令中可以为 word 或 byte。
mov word ptr ds:[0], 1
inc word ptr [bx]
add word ptr [bx], 2
mov byte ptr ds:[0], 1
add byte ptr [bx], 2

（3）有些指令操作默认就指明了访问的长度
比如栈的 push 和 pop 操作，默认必须为字操作；

## 总结
嗯~