# 7.27 王爽汇编语言（二十四）

## 实验 9 根据材料编程（续）

```shell
# xor指令
# 参考链接：http://c.biancheng.net/view/3558.html
格式：xor destination, source

# 所以 xor bx, bx的意思就显而易见了。
xor bx, bx # 它们是同一个值，相同即为 0，所以用 xor bx, bx 来对 bx 清零是没问题的。
```
其中题目要求是在屏幕中间显示三行内容，而屏幕是 80 * 25，所以中间一行应该是：
（25 / 2 的 余数 + 1）= 第 13 行，往前一行 + 往后一行；那么即第 12 行，第 13 行，第 14 行为中间的行数。
那么首先我们需要算出第 12 行的段起始地址。

第二行的起始偏移是 160，即 A0H；所以算第几行的公式为：160 * (第几行的行数 - 1)；
所以第 12 行的偏移是 160 * 11 = 1760，即 06E0H；而我们会显示在显示器上的内容的内存地址范围是 B8000H ~ B8F9FH，即显示缓冲区第 0 页的内容；所以第 12 行的起始物理地址应该是 B8000H + 6E0H = B86E0H；而因为又要
显示在中间，我们的 'welcome to masm!' 占了 16 个字节，算上字符的颜色属性，我们需要使用中间的 32 个字节。
经过计算，对于 0 ~ 159 的中间位置的索引范围应该是 64 ~ 96（即 40H ~ 60H，想不出来就动笔在纸上算一下就好了）；所以中间位置的起始物理地址是 (B86E0H + 40H = B8720H)；其物理地址等价于 B872H:0000H（段地址:偏移地址）。这样也方便我们后续的使用；

mov ax, 0b872h  ; 为什么0开头？因为字母不能作为开头，我记得语法是这样规定的，所以前面要添加0；

```asm
assume cs:code, ds:data, ss:stack

data segment

    db 'welcome to masm!'
    db 02h, 24h, 71h

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

start:
    mov ax, data
    mov ds, ax

    mov ax, stack
    mov ss, ax
    mov sp, 10h

    xor bx, bx  ; bx 清零，用来索引颜色
    mov ax, 0b872h  ; 将屏幕第 12 行中间显存的起始位置的段地址放入 ax 中

    mov cx, 3   ; s3 循环控制行数，外循环为 3 次，因为要显示三个字符串
s3:
    push cx     ; 因为有两层循环，所以需要保存 cx 的值到栈中；
    push ax     
    push bx

    mov es, ax  ; 此时 es 为屏幕第 12 行中间显存的起始位置的段地址

    mov si, 0   ; si 用来索引代码列的字符（即索引 'welcome to masm!'这段数据）
    mov di, 0   ; di 用来定位目标偏移地址（即用es:[di]来定位我们要写入的地址）

    mov cx, 10h ; s1 循环控制存放的字符，内循环为 16(10h) 次，因为一个字符串含 10h 个字节
s1:
    mov al, ds:[si]
    mov es:[di], al
    inc si
    add di, 2       ; 因为两个字节中，其中低位字节用于存放字符ascii
    loop s1

    mov di, 1
    pop bx
    mov al, ds:10h[bx]
    inc bx

    mov cx, 10h
s2:
    mov es:[di], al
    add di, 2
    loop s2     ; 此循环实现奇地址中存放字符的颜色属性

    pop ax
    add ax, 0ah     ; 这里获取下一行中间显存的起始位置的段地址

    pop cx
    loop s3

    mov ax, 4c00h
    int 21h

code ends

end start
```


## 总结
这个程序理解之后就并不复杂：主要逻辑就是将数据段中存放的字符和颜色属性分别通过循环存放到
中间显存的位置；其中要点：1.计算中间显存的地址；2.一个字符占用两个字节，低位字节存放字符ASCII码，高位字节
存放颜色属性；3.颜色属性通过控制字节的位来获得；4.注意使用栈段来存放外循环的次数以及其他临时的数据；