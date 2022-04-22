# 7.19 王爽汇编语言（十六）

## 中间笔记
```shell
# div 指令详细参考 P16
# div 指令格式如下：
div reg
div 内存单元

# div 指令运用计算：
mov ax, 1001
mov bl, 100
div bl
程序执行后，(al) = 0AH（即商10），(ah) = 1（余数为1）。
```
dd 伪指令定义 dword（double word）即双字型数据，32位数据；
dup 操作符，也是同 dd、db、dw伪指令一样由编译器处理；
```shell
# dup 指令格式如下：
db 重复的次数 dup （重复的字节型数据）
dw 重复的次数 dup （重复的字型数据）
dd 重复的次数 dup （重复的双字型数据）

# 例子如下：
db 3 dup (0, 1, 2) # 等价于 db 0,1,2,0,1,2,0,1,2；定义了 9 个字节
db 3 dup ('abc', 'ABC') # 等价于 db 'abcABCabcABCabcABC'；定义了 18 个字节
```

## 总结
下一节做实验 7 了；