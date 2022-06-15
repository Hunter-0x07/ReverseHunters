# 7.44 免杀课程X86（二）

## 中间笔记
jmp 指令：跳转到指定地址；本质 => 修改 EIP（说法有待考究，暂且听讲课师傅的）；

堆栈平衡：如使用 call 指令，其会调整堆栈指针，当返回的时候，堆栈恢复到原始状态就称为堆栈平衡；
call 指令：先将 call 指令后一条指令地址入栈，入栈肯定会调整 ESP 嘛，因为 ESP 指向的是栈顶；
ret 指令：将之前保存的 call 指令后下一条指令出栈到 EIP，出栈后 ESP 指针随即调整嘛；

```shell
# （这里有个疑问哈，我要是在 ret 指令弹出地址前，再压入一个数据，此时会不会弹出我们的压入的数据？）
事实证明是会出错的，如果我们没有控制好栈的话，ret 指令只会弹出当前 ESP 所指向的位置的数据；
```

test 指令：对两个操作数进行相与的操作，用来判断寄存器的值是否为 0；
例如 test eax, eax；当 eax 为 0 时，执行 test 指令后，zf 标志位置为 1，也相当于只影响标志寄存器；


JCC（全称：jump condition code）：引用 google 解释：Jcc is not a single instruction, it just describes the jump mnemonics that check the condition code before jumping；
简单理解就是，JCC 指令集合指的是那些在跳转前会检查标志位的jump指令，如 jnz（zf = 0则跳转），jz（zf = 1则跳转）等jump指令；

以下参考免杀老师的课堂笔记

| JCC指令     | 中文含义                                         | 英文原意                                                | 检查符号位       | 典型c应用                |
| ----------- | ------------------------------------------------ | ------------------------------------------------------- | ---------------- | ------------------------ |
| JZ/JE       | 若为0则跳转；若相等则跳转                        | jump if zero;jump if equal                              | ZF=1             | if (i == j);if (i == 0); |
| JNZ/JNE     | 若不为0则跳转；若不相等则跳转                    | jump if not zero;jump if not equal                      | ZF=0             | if (i != j);if (i != 0); |
| JS          | 若为负则跳转                                     | jump if sign                                            | SF=1             | if (i < 0);              |
| JNS         | 若为正则跳转                                     | jump if not sign                                        | SF=0             | if (i > 0);              |
| JP/JPE      | 若1出现次数为偶数则跳转                          | jump if Parity (Even)                                   | PF=1             | (null)                   |
| JNP/JPO     | 若1出现次数为奇数则跳转                          | jump if not parity (odd)                                | PF=0             | (null)                   |
| JO          | 若溢出则跳转                                     | jump if overflow                                        | OF=1             | (null)                   |
| JNO         | 若无溢出则跳转                                   | jump if not overflow                                    | OF=0             | (null)                   |
| JC/JB/JNAE  | 若进位则跳转；若低于则跳转；若不高于等于则跳转   | jump if carry;jump if below;jump if not above equal     | CF=1             | if (i < j);              |
| JNC/JNB/JAE | 若无进位则跳转；若不低于则跳转；若高于等于则跳转 | jump if not carry;jump if not below;jump if above equal | CF=0             | if (i >= j);             |
| JBE/JNA     | 若低于等于则跳转；若不高于则跳转                 | jump if below equal;jump if not above                   | ZF=1或CF=1       | if (i <= j);             |
| JNBE/JA     | 若不低于等于则跳转；若高于则跳转                 | jump if not below equal;jump if above                   | ZF=0或CF=0       | if (i > j);              |
| JL/JNGE     | 若小于则跳转；若不大于等于则跳转                 | jump if less;jump if not greater equal                  | SF != OF         | if (si < sj);            |
| JNL/JGE     | 若不小于则跳转；若大于等于则跳转                 | jump if not less;jump if greater equal                  | SF=OF            | if (si >= sj);           |
| JLE/JNG     | 若小于等于则跳转；若不大于则跳转                 | jump if less equal;jump if not greater                  | ZF != OF 或 ZF=1 | if (si <= sj);           |
| JNLE/JG     | 若不小于等于则跳转；若大于则跳转                 | jump if not less equal;jump if greater                  | SF=OF 且 ZF=0    | if(si>sj)                |

olldbg 中下断点是 F2；

免杀课程中老师所说的“提升栈顶”等价于栈顶指针减 4；
“降低栈顶”等价于栈顶指针加 4；

lea（load effective address） 指令，取内存偏移地址，如 lea edi, dword ptr ss:[ebp-0x48]

```shell
mov ecx, 0x10
rep stos dword ptr es:[edi]
```
rep（repeat）指令：

## 总结
11:46 晚上如果有空的话做一下这个实验，顺便看一下 rep 指令，没空就明天，因为晚上要健身；