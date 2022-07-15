# 7.52 个人指针专项复习与练习

## 前言

- 鉴于自己一直属于指针的"半懂状态"，2022年7月6日这天，准备做一篇指针的专项复习与练习，估计花费时间有点长，但是！我一定要搞懂他，并且以汇编的方式搞懂！目的就是从此以后不再惧怕指针！！！

## 中间笔记

#### 指针类型变量介绍

- 基本或复合变量类型加上一个(*)星号，即变为指针类型，例子如下：

```c
char* b;
float* a;
int* c;		// 一级指针
int**** d; // 多级指针
int(*p)[5]; // 数组指针（其本质是指针），并且必须给p加括号，因为[]优先级比*优先级高，不加的话，就成了指针数组(其本质是数组)了。

struct Test {
	int a;
	char b;
};
Test* x; // 结构体指针；
```

- 指针变量类型宽度统一都为 4 字节；

#### 关于指针类型变量的运算

- 指针类型变量有两种运算，增加和减少分为（自增或增加N），（自减或减少N）；

- 指针类型变量自增或自减的大小，取决于其去掉一个(*)星号后变量类型的宽度；
- 如 char* 类型的变量 a，其自增即（a++）的时候，其所增加的大小为 1，因为 char* 去掉一个(*)星号后，类型为 char，其宽度为 1；
- 如 int* 类型的变量 b，其自增即（b++）的时候，其所增加的大小为 4，因为 int* 去掉一个(*)星号后，类型为 int，其宽度为 4；

- 如int(\*)[5]类型的变量 p，其自增即 (p++) 的时候，其所增加的大小为 20，因为 int(\*)[5] 去掉一个(*)星号后，类型为 int[5]，其为一个int类型数组，宽度为4\*5 = 20；
- 如 char\*\*\* 类型的变量 d，其自增即 (d++) 的时候，其所增加的大小为 4，因为 char\*\*\* 去掉一个(\*)星号后，类型为 char\*\*，其为一个指针，宽度为 4；

- 实际论证程序代码如下：

```c
#include <stdio.h>

int main() {
	char* a = (char*)100;
	int* b = (int*)100;
	int(*p)[5] = (int(*)[5])100;
	char*** d = (char***)100;

	printf("++a: %d\n, ++b: %d\n, ++c: %d\n, ++d: %d\n", ++a, ++b, ++p, ++d);

	return 0;
}
```

- 结果如下图：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_1.png)

- 对了，这里还要讲一下 ++a 和 a++，我们这里使用printf的时候，是用的 ++a，而不是用的 a++，因为 ++a 在printf函数这里是"先自增再传参"，而 a++ 是"先传参再自增"，我们可以通过如下代码来论证；

```c
#include <stdio.h>

int main() {
	char* a = (char*)100;

	printf("a++: %d\n", a++);

	return 0;
}
```

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_2.png)

- 如上图，可以看到我们打印的是自增前的值，为什么呢？这时我们debug看一下汇编代码就知道了；

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_3.png)

- 如上图我们可以看到 edx 寄存器的值作为 printf 函数的参数压入栈中，而 edx 寄存器的值来源于 [ebp - 0D0h] 这块内存的值，这块内存的值就是 变量a 原始的值，所以这下知道为什么了吧。

- 同理推导，增加 N 的大小，其增加（去掉一个 * 后变量类型的宽度 * N）个字节；
- 如 char* 类型的变量 a，其增加 2 即（a+2）的时候，其所增加的大小为 2，因为 char* 去掉一个(*)星号后，类型为 char，其宽度为 1，然后 1\*2 = 2；
- 如 int* 类型的变量 b，其增加 3 即（b+3）的时候，其所增加的大小为 12，因为 int* 去掉一个(*)星号后，类型为 int，其宽度为 4，然后 4\*3 = 12；

- 实际论证程序代码如下：

```c
#include <stdio.h>

int main() {
	char* a = (char*)100;
	int* b = (int*)100;

	a = a + 2;
	b = b + 3;
	printf("a: %d\n  b:%d\n", a, b);

	return 0;
}
```

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_4.png)

- 指针变量为无符号数，论证代码如下：

```c
#include <stdio.h>

int main() {
	int* a = (int*)100;
	int* b = (int*)101;

	if (a > b) {
		printf("a > b is true!");
	}
	else {
		printf("a < b is true!");
	}

	return 0;
}
```

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_5.png)

- 可以看到这里使用的jbe跳转指令，该跳转指令针对的是无符号数，所以从这里可以判断编译器将指针变量看作为无符号数；

#### & 的使用

- 作用，获取变量的内存地址，其类型为变量的类型加一个星号（在我看来就成为了指针类型），论证代码如下：

```c
#include <stdio.h>

int main() {
	char a;
	char b;

	int c = &a;

	return 0;
}
```

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_6.png)

- 可以看到，以上代码无法编译通过，因为&a是 "char\*" 类型，无法赋值给 int 类型；所以可以推断 a 前面加上 & 之后，变为了 "char\*"类型；

#### * 运算符

```shell
1.作乘法运算符
2.定义指针类型，如 char* y;
3.取值运算符，即 * + 指针类型的变量或表达式：
其将指针变量的值当作内存地址，取其中的值，之后的类型为（指针类型减去一个*）；
```

#### 数组参数传递

- 将数组作为参数传递的本质是传递数组首元素的地址，其形参写法有两种，示例如下：

```c
#include <stdio.h>

void print_array_1(int arr[], int length);
void print_array_2(int* p, int length);


int main() {
    int arr[5] = { 1, 2, 3, 4, 5 };

    print_array_1(arr, 5);
    print_array_2(arr, 5);

    return 0;
}

void print_array_1(int arr[], int length) {
    for (int i = 0; i < length; i++) {
        printf("%d\n", arr[i]);
    }
}

void print_array_2(int* p, int length) {
    for (int i = 0; i < length; i++) {
        printf("%d\n", *(p + i));
    }
}
```

- 如下图是如上代码运行时的汇编代码：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_7.png)

- 从上图我们可以得知传递数组变量本质就是传递数组首元素的地址；

- 然后我们观察代码 arr[i] 和 *(p + i) 的汇编，arr[i]汇编代码如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_8.png)

- 如上图，我们可以看到四条重要的汇编代码：

```assembly
mov eax, dword ptr [ebp-8] ; 将保存的字符串索引放到eax，此时arr[0]，所以eax为0
mov ecx, dword ptr [arr]   ; 将[arr]保存的值放到ecx，这里[arr]即是数组首元素的地址，不要被名称arr误导，这里是我们定义的名称，所以该汇编指令将数组首元素地址放到ecx；
mov edx, dword ptr [ecx+eax*4] ; 这里即将数组首元素地址加上索引乘以4得到最终我们要获取的数据的地址，因为每个数据为int（即dword），占4个字节；
push edx ; 然后将arr[i]内容 push 到调用printf函数的堆栈中；
```

- 然后我们看*(p + i) 的汇编代码，如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_9.png)

- 可以看到其汇编代码和arr[i]的汇编代码一模一样，也就是说 arr[i] 等价于 *(p + i)；

#### 指针与字符串

- c 语言中，字符串有几种表示方式：

```c
// 第一种
char str_1[6] = {'a', 'b', 'c', 'd', 'e', '\0'};

// 第二种
char str_2[] = "abcde";

// 第三种
char* str_3 = "abcde";
```

- 看一下它们的汇编代码吧；

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_10.png)

- 可以看到其直接将字符对应的ASCII码保存到已经初始化为cc的堆栈里边；

- 第二种如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_11.png)

- 可以看到str_2数组堆栈空间是已经初始化为了cc，然后将常量区02F7BCC地址处的"abcde"以及末尾的"00"复制到了str_2数组所在的堆栈空间中；
- 第三种如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_12.png)

- 其直接将常量区0x002F7BCC的"abcde"地址保存到了指针变量str_3中；而且我们还可以发现，虽然同时用第二种和第三种方法写了"abcde"这个字符串，但是其始终在常量区只有一个数据"abcde"；

- 如下是常用的几个操作字符串的函数；

```c
1. int strlen(char* s);
统计字符串长度并返回，但是要注意，其统计中文时，会将一个中文统计为两个字符；
    
2. char* strcpy(char* dest, char* str);
将str字符串复制到dest字符串，并返回目的字符串的地址；

3. char* strcat(char* dest, char* src);
将src字符串添加到dest字符串末尾，并返回目的字符串的地址；

4. int strcmp(char* s1, char* s2);
比较两个字符串是否相同，相同则返回
```

#### 指针取值的两种方式

- 其实前面在讲数组参数传递的过程中，已经讲到了a[i]等价于*(p+i)，其汇编代码是一样的；
- 后续可以继续推论如下：

```
a[i] 等价于 *(p + i)
a[i][j] 等价于 *(*(p + i) + j)
```

#### 结构体指针

- 基本演示代码如下：

```c
#include <stdio.h>

struct Point
{
    int x;
    int y;
};


int main() {
    struct Point p = { 1, 2 };

    Point* px = &p;

    printf("%d\n%d\n", px->x, px->y);
    
    return 0;
}
```

- 运行之后，看下图可以发现结构体变量在内存中也是连续保存的；

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_13.png)

- 接着继续往下执行指令，如下图，可以发现所谓的"px->y"和"px->x"，也就是等价于将 px 指针变量保存的地址加上对应的偏移得到对应结构体成员变量的起始地址，然后取其值；

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_14.png)

#### 指针数组与数组指针

- 指针数组是数组，只不过其成员变量的类型是指针，例子如下：

```c
#include <stdio.h>


int main() {
    char* a = (char*)"Hello";
    char* b = (char*)"test";
    char* arr_1[2];
    arr_1[0] = a;
    arr_1[1] = b;

    char* arr_2[] = { (char*)"Hello", (char*)"test" };

    printf("%p, %p\n", arr_1[0], arr_1[1]);
    printf("%p, %p\n", arr_2[0], arr_2[1]);

    return 0;
}
```

- 运行截图如下，因为"Hello"和"test"位于常量区，所以打印结果相同：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_15.png)

- 数组指针示例代码如下：

```c
#include <stdio.h>

int main() {
    int arr_1[] = { 1, 2, 3, 4, 5, 6, 7, 8 };
    int arr_2[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // 一维数组类型的指针操作一维数组
    int (*p1)[8] = &arr_1;

    printf("%d\n", (*p1)[1]);

    
    // 用一维数组类型的指针操作二维数组
    int (*p2)[3] = &arr_2[0];

    printf("%d\n", (*p2)[1]);

    p2++;
    printf("%d\n", (*p2)[1]);

    return 0;
}
```

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_16.png)

#### 函数指针

- 举例如下：

```c
// 函数指针定义格式：
// 返回类型 (调用约定 *变量名)(参数列表);
#include <stdio.h>

int test(int a, int b);

int main() {
    int a = 2, b = 1;
    int(__cdecl * pFun)(int, int);

    pFun = &test;
    printf("%d\n", pFun(a, b));

    return 0;
}

int test(int a, int b) {
    return a + b;
}
```

- 运行结果如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_17.png)

- 调用的时候就以正常调用函数的方式调用；

## 后话

- 算是把指针复习一遍了；然后开始继续学习了；！！！！