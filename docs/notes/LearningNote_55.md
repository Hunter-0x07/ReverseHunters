# 7.49 滴水逆向（一）

## 中间笔记
#### 变量
全局变量，其地址固定（我的想法：即在程序加载到内存时就存在，不像局部变量需要在使用的时候才分配内存），变量名即是内存地址的标号；

#### 变量与参数的内存布局
1.参数在内存中的位置
参数从 ebp + 8 开始；
返回地址在 ebp + 4；
ebp指向原 ebp 的值；


2.局部变量在内存中的位置
分配的CCCC缓冲区存储局部变量；


3.返回值是如何返回的，如何使用的
eax通常存储结果（返回值）；

#### 数组
在声明的时候，括号内只能是常量，但是使用时，括号内可以是变量；

#### 字节对齐
一个变量占用 N 个字节，那么该变量的起始地址必须是 N 的整数倍，即：存放起始地址 % N = 0;如果是结构体，那么结构体的起始地址是其最宽数据类型成员的整数倍。

sizeof的使用
可以用来获取数据类型的宽度；

#pragma pack(n) 用来改变对齐参数；

#### 指针
指针类型的变量宽度永远是4字节，无论类型是什么。
```shell
# 指针类型自加和自减
1.不带*类型的变量，++或者--都是加1或者减1。
2.带*类型的变量，++或者--新增（减少）的数量是去掉一个*后变量的宽度。

# 指针类型变量与其它整数相加或者相减时：
指针类型变量 + N = 指针类型变量 + N * (去掉一个*后类型的宽度)
指针类型变量 - N = 指针类型变量 - N * (去掉一个*后类型的宽度)
```

#### c语言数据类型
```
# 基本类型
1.整数类型 char short int 
2.浮点类型 float double

# 构造类型
1.数组类型
2.结构体类型
3.共用体（联合）类型

# 指针类型
# 空类型（void）
```

#### &的使用
"&变量"的类型：即变量类型后面再加一个*；

#### 取值运算符
"*"的几种用途
```shell
1.乘法运算符
2.定义指针类型，如 char* y;
3.取值运算符，即 * + 指针 => 此时的类型即指针类型减去一个*;
```

#### 数组传递参数
1.数组作为参数时，传递的是地址；
2.数组作为参数时，应该传递数组的长度；

#### 字符串处理函数
1.字符串的几种表示方式？
```shell
(1) char str[6] = {'A', 'B', 'C', 'D', 'E', 'F', '\0'};  # 结尾'\0'或0
(2) char str[] = "ABCDE";   # 编译器在末尾自动添加0
(3) const char* str = "ABCDE";    # 常量区，目前改不了；
```

2.常用的字符串函数
```shell
int strlen(char* s); # 返回值是字符串 s 的长度，不包括结束符 '\0'
char* strcpy(char* dest, char* src); # 复制字符串 src 到 dest 中，返回指针为dest的值
char* strcat(char* dest, char* src); # 将字符串 src 添加到 dest 尾部
int strcmp(char* s1, char* s2); # 一样返回0，不一样返回非0
```

3.指针函数
本质就是函数，只不过函数的返回类型是某一类型的指针。
如 char* strcpy(char* dest, char* src);

#### 指针取值的两种方式
*() 和 [] 可以互换
即 p[1][2] 和 *(*(p+1)+2)

#### 结构体指针
结构体指针读取和修改结构体属性，用箭头，如 px->x

## 总结
“被指针是地址”这句话误导了，学了汇编才知道~。

指针什么类型跟其指向的数据类型一点关系都没有；