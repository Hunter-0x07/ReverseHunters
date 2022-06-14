# 7.43 免杀课程X86（一）

## 中间笔记
jnz 指令（短跳转），jmp if not zero，即 zf 标志位不为0，则跳转，目前看来经常和 cmp 指令配合使用；
cmp 指令比较两个数后，会影响 zf 标志位; 
如 cmp ax, bx
zf = 1, 说明 (ax) == (bx)
zf = 0, 说明 (ax) != (bx)
进而再用 jnz 指令采取下一步跳转操作；

AF（auxiliary flag）标志位：辅助进位标志位，运算过程中看最后四位，最后四位向前进位或借位，则置为1；（其与 CF 进位标志位不同在于，CF 进位标志位需要看当前操作的寄存器的长度）

xchg 指令: 即交换两个操作数的内容；
```shell
xchg reg, reg
xchg reg, mem
xchg mem, reg
```

movs 指令：可以在内存和内存之间移动数据；
```shell
# 示例如下
movs byte ptr es:[edi], byte ptr ds:[esi]  => 简写为 movsb
movs word ptr es:[edi], word ptr ds:[esi]  => 简写为 movsw
movs dword ptr es:[edi], dword ptr ds:[esi]  => 简写为 movsd
```

df（direction flag）标志位：方向标志位，df 置 0，则是"自增方向"；置 1 则反之；
继续昨天实验；
（esi） = 0019FF84
（edi） = 0019FF94
DWORD（ds:[esi]）= 77817A7E
DWORD（es:[edi]）= 00000000
当进行 movs byte ptr es:[edi], byte ptr ds:[esi]
此时 DF 标志位为 0 
此时 byte ptr (es:[0019FF84]) = 7E，（ESI）= 0019FF84 + 1 = 0019FF85，（EDI）= 0019FF94 + 1 = 0019FF95

当进行 movs word ptr es:[edi], word ptr ds:[esi]
此时 DF 标志位为 0
此时 word ptr (es:[0019FF85]) = 817A，（ESI）= 0019FF85 + 2 = 0019FF87，（EDI）= 0019FF95 + 2 = 0019FF97

当进行 movs dword ptr es:[edi], dword ptr ds:[esi]
此时 DF 标志位为 0
此时 dword ptr (es:[0019FF87]) = 3C100077，(ESI) = 0019FF87 + 4 = 0019FF8B，（EDI）= 0019FF97 + 4 = 0019FF9B

从以上可以发现规律，当从“内存1”移动一个字节到“内存2”时，如果 DF 标志位置 0，则移动后，esi + 1，edi + 1；
当从“内存1”移动一个字到“内存2”时，如果 DF 标志位置 0，则移动后，esi + 2，edi + 2；
当从“内存1”移动双字到“内存2”时，如果 DF 标志位置 0，则移动后，esi + 4，edi + 4；
简单概括就是，“自动移动指针指向下一块内存数据”，DF标志位决定其指针是自增还是自减，如果置 0，则自增；置 1 则反之；

STOS 指令：将 AL/AX/EAX 的值存储到 es:[edi] 指定的内存，并且也由 DF 标志位来决定 di 是自增还是自减，自增自减的大小由操作数的数据宽度决定（比如操作一个字节，那么就自增或自减 1）;
DF 置 0，则自增；置 1 则反之；
STOS byte ptr es:[edi] => 简写为 stosb
stos word ptr es:[edi] => 简写为 stosw
stos dword ptr es:[edi] => 简写为 stosd

## 总结
今天还在学习免杀课程的标志位，其中 df标志位为什么和 movs 指令有关联，这个明天抽空探究一下；
11:53