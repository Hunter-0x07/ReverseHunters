# 7.30 王爽汇编语言（二十七）

## 中间笔记
"call far ptr 标号" 等价于如下：
push CS
push IP
jmp far ptr 标号（段间转移）

## 检测点 10.3
题目：下面的程序执行后，ax中的数值为多少？
内存地址       机器码               汇编指令
1000:0         b8 00 00            mov ax, 0
1000:3         9A 09 00 00 10      call far ptr s
1000:8         40                  inc ax
1000:9         58                s:pop ax             ; ax = 8
                                   add ax, ax         ; ax = 10h
                                   pop bx             ; bx = 1000h
                                   add ax, bx         ; ax = 1010h

最终ax的值为 1010h

## 总结
~检测点没什么难度