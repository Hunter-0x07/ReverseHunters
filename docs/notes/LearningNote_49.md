# 7.43 免杀课程X86（一）

## 中间笔记
jnz 指令（短跳转），jmp if not zero，即 zf 标志位不为0，则跳转，目前看来经常和 cmp 指令配合使用；
cmp 指令比较两个数后，会影响 zf 标志位，进而再用 jnz 指令采取下一步跳转操作；

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

df（direction flag）标志位：方向标志位



## 总结
今天还在学习免杀课程的标志位，其中 df标志位为什么和 movs 指令有关联，这个明天抽空探究一下；
11:53