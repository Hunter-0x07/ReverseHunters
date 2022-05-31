# 7.38 王爽汇编语言（三十五）

## 课程设计 1
解析：
首先将数据放到数据段再说，要显示出来的话得放入显示缓冲区，可以看到是21行数据，差不多
可以搞，对了是以字符的形式，所以需要对内存中的数据进行转化。

好家伙，自己写不出来，看看鱼c论坛帖子把哈哈哈哈！
```shell
# 参考链接
1.https://fishc.com.cn/thread-157074-1-1.html   # 360多行代码，整整比下一个链接多了一半。。
2.https://fishc.com.cn/thread-155084-1-1.html   # 模块化编程思想 178行代码
```
看了帖子，我坚信，这绝对会成为迄今为止写过的最长的汇编程序

复习一下DOS BOX debug.exe的各种指令：
参考链接：```https://blog.csdn.net/ocean35/article/details/88899283```
其中查看内存单元的 d 命令很重要：
```shell
# 格式如下
（1）d 段地址:偏移地址
如 d ds:0 即显示 ds:0 地址往后 128 个内存单元的内容

（2）d 段地址:偏移地址1 偏移地址2 
如 d ds:0 90 即显示 ds:0 地址到 ds:90H 所有内存单元的内容

（3）d 段地址:偏移地址 Lm
如 d ds:0 L2 即显示 ds:0 地址往后 2 个内存单元的内容
```

```asm
assume cs:codesg, ds:datasg, ss:stacksg

datasg segment

    ;; 参数段           偏移地址范围：0000H ~ 000FH
    db 10H dup(0)       
    ;; 字符串倒序暂存缓冲区             偏移地址范围： 0010H ~ 001FH
    db 10H dup(0)
    ;; 21 份日期数据                偏移地址范围：0020H ~ 004FH
    dw 1975, 1976, 1977, 1978,      1979, 1980, 1981, 1982
    dw 1983, 1984, 1985, 1986,      1987, 1988, 1989, 1990
    dw 1991, 1992, 1993, 1994,      1995,    0,    0,    0

datasg ends

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

stacksg segment

    db 20H dup(0)       ;; 32个字节用作栈段

stacksg ends

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

codesg segment

main:
    mov ax, datasg
    mov ds, ax          ;; 初始化数据段段地址
    mov ax, stacksg
    mov ss, ax          
    mov sp, 20H         ;; 初始化栈顶指针
    mov ax, 0B800H      
    mov es, ax          ;; 初始化显存段段地址

parameter_for_date:
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    mov word ptr ds:[0000H], 020H           ;; 年份数据偏移地址
    mov word ptr ds:[0002H], 2-2            ;; 数据的字节大小
    mov word ptr ds:[0004H], (1-1)*160       ;; 最开始在第几行进行显示，这里为第 1 行，所以其实行偏移为 0
    add word ptr ds:[0004H], (4-1)*2       ;; 最开始在第几列进行显示，这里为第 4 列，所以其实列偏移为 6，这里使用 add，即算出来在显存中的偏移地址
    mov word ptr ds:[0006H], 160           ;; 字符间隔，因为 80 个字符占位（其中包含了字符ASCII占 1 个字节，颜色占 1 个字节）
    mov byte ptr ds:[0008H], 02H           ;; 字符颜色，02H 代表黑底绿色
    mov word ptr ds:[0009H], 0             ;; 即保存写入字符串倒序暂存缓冲区的位数，方便后续 loop 显示正常顺序的字符串
    mov di, 10H                            ;; 字符串倒序暂存缓冲区的起始偏移地址

call dtoc_printf                           ;; 显示年份
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    mov ax, 4c00H    
    int 21H
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

dtoc_printf:
    mov si, ds:[0000H]      ;; 待显示数据所在的内存起始偏移地址
    mov bp, ds:[0004H]      ;; 显示起始显存偏移地址
    mov bx, 10              ;; ASCII 转换的除数
    mov cx, ds:[0002H]      ;; cx 作为字节大小判定的标准，如果待显示数据为 1 个字，则 cx 为 0；如果待显示数据为 双字类型，则 cx 为 2；
    jcxz dtoc_printf_byte2  ;; 如果待显示数据的类型为 1 个字，那么跳转到 dtoc_printf_byte2 进行处理
    jmp dtoc_printf_byte4   ;; 如果待显示数据的类型为 双字，那么跳转到 dtoc_printf_byte4 进行处理

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

dtoc_printf_byte2:         
    mov dx, 0                ;; 对于 16 位除法（即除数为 16 位），其被除数需要为 32 位；但是因为待显示数据的类型为单字，不需要占用被除数的高位，所以被除数高位，即 DX 置为 0
    mov ax, ds:[si]          ;; 单字数据放到被除数低位，即 AX 寄存器中
    jmp dtoc_printf_s        ;; 跳转至求余运算


dtoc_printf_s:               ;; 循环求余转 ASCII，写入字符串倒序暂存缓冲区中
    push bp                  ;; bp 原本用来保存起始显存偏移地址，所以需要入栈保存
    call divdw               ;; 进行双字除法运算
    pop bp                   ;; 恢复 bp
    mov ch, ds:[008h]        ;; 字符颜色属性写入ch，作者是add，我觉得一样，因为余数不可能大于 10，那么 ch 就不会保存数
    add cl, 30h              ;; 余数 + 30h 转换为对应字符的 ASCII 编码值
    mov ds:[di], cx          ;; 字符写入显示暂存区
    inc word ptr ds:[009h]   ;; 字符位数自加1
    add di, 2                ;; 指向下一个显示暂存区
    mov cx, ax               ;; 判断商是否为零，如果为零则说明 ASCII 除法结束，则可以打印了
    jcxz dtoc_printf_out
    jmp dtoc_printf_s        ;; 否则继续运算

dtoc_printf_out:
    sub di, 2                ;; 显示暂存区指针修正
    mov cx, ds:[009h]        ;; 字符位数写入cx
    push cx                  ;; 入栈保存 cx

dtoc_printf_outs:
    mov ax, ds:[di]          ;; 字符写入ax
    mov es:[bp], ax          ;; ax写入显存
    sub di, 2                ;; 指向下一位字符
    add bp, 2                ;; 指向下一位显存
    loop dtoc_printf_outs    ;; 循环将字符倒序暂存区的字符转移到显存中
    mov word ptr ds:[009h], 0   ;; 输出完毕，字符位数清零
    add di, 2                   ;; 字符倒序暂存区指针修正
    pop cx                      ;; 原字符位数出栈
    sub bp, cx                  ;; 通过字符位数修正显存地址
    sub bp, cx                  ;; 通过字符位数修正显存地址
    add bp, ds:[006h]           ;; 字符间隔累加到显存地址

divdw:                       ;; 双字不溢出除法：结果是 cx 保存最终的余数，ax 保存结果低位商，dx 保存结果高位商，公式：X/N = int(H/N)*65536 + [rem(H/N)*65536 + L]/N
    push ax                  ;; 低位入栈保存
    mov ax, dx               ;; 高位写入低位
    xor dx, dx               ;; 高位数据清零
    div bx                   ;; int(H/N)
    mov bp, ax               ;; 高位商暂存bp
    pop ax                   ;; 弹出之前保存的被除数低位到 AX
    div bx                   ;; [rem(H/N)*65536 + L]/N，在运算前，dx已经保存了高位运算的余数
    mov cx, dx               ;; 最终余数保存到 cx
    mov dx, bp               ;; 把结果高位商保存到 dx，ax此时保存了低位商
    ret

codesg ends

end main
```


## 总结
有段时间没更新了，一直卡在这道题，还正在做，一直在看鱼c的代码，明天继续分析~。