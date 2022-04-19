# 7.17 王爽汇编语言（十四）

## 中间笔记
这章节标题：更灵活的定位内存地址的方法~

```shell
# CPU 提供了多种寻址方式
# 用 [bx+idata] 的方式指向一个内存单元
mov ax, [200 + bx]
等价于 mov ax, 200[bx]
等价于 mov ax, [bx].200

# 用 [bx + si] 或 [bx + di] 的方式指向一个内存单元
mov ax, [bx + si]
等价于 mov ax, [bx][si]

# 用 [bx + si + idata] 的形式指向一个内存单元
mov ax, [bx + si + idata]
等价于 mov ax, [bx + idata + si]
等价于 mov ax, idata[bx][si]
等价于 mov ax, [bx].idata[si]
等价于 mov ax, [bx][si].idata
```

si、di 寄存器是 8086 CPU 中和 bx 寄存器功能相近的寄存器，用来存放偏移地址；


## 总结
p157 用栈存储；