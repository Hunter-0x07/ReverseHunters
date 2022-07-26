# 7.50 滴水逆向（二）

## 中间笔记
#### 数组指针与指针数组

指针数组
```
int* arr[10];
Point* arr[10];
```

数组指针的定义
```
int (*p)[5];
char (*px)[3];

int (*px)[2][2];
char (*px)[3][3][3];
```

数组指针的运算，其遵从最开始介绍指针时候的特性，参考7.49 滴水逆向（一）；

#### 调用约定
在免杀课程中学过，三种调用约定：
```
__cdecl 参数压栈顺序：从右至左；外平栈；
__stdcall 参数压栈顺序：从右至左；内平栈；
__fastcall ECX,EDX传送前两个，剩下从右至左入栈；内平栈；
```

## 总结
别把指针和其指向类型联系到一起，通透了；