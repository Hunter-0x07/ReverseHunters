# 7.31 王爽汇编语言（二十八）

## 中间笔记
"call 16位数的reg" 等价于:
push IP
jmp 16位reg

## 检测点 10.4
下面的程序执行后，ax中的数值为多少？
内存地址    机器码          汇编指令
1000:0     b8 06 00        mov ax, 6
1000:3     ff d0           call ax       ; 首先将当前 IP 值 5 push 到栈中，然后 IP 指向 6，执行 1000:6 内存地址的指令，即 mov bp, sp
1000:5     40              inc ax           
1000:6                     mov bp, sp       
                           add ax, [bp]

解析：奇怪，我都不知道 sp 的值是多少；参考了链接：https://blog.csdn.net/shaco_/article/details/105471142，我明白了！
我并不需要知道 sp 的值，而是要知道其指向的数据，[bp]在这里等价于 ss:[bp]（嗯？以前的思想是[bp]就一定是 ds:[bp]，现在这个
似乎又稍微改变了我的认知~。那就好办了，之前压入栈的是 5，那么此时相加则 ax = 11即（bh）


## 总结
嗯~没啥难度