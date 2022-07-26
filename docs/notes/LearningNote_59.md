#### 7.53 cpp学习（一）

#### 在堆中创建对象

- 示例代码如下：

```cpp
#include <stdio.h>
#include <stdlib.h>

class Test {
private:
	int x;
	int y;
public:
	Test() {
		printf("Test() executed\n");
	}
	Test(int x, int y) {
		printf("Test(int x, int y) executed\n");
		this->x = x;
		this->y = y;
	}
	~Test() {
		printf("~Test() executed\n");
	}
};


int main() {
	// 在堆中创建对象
	Test* p1 = new Test(1, 2);

	// 在堆中申请 int 数组
	int* p2 = (int*)malloc(sizeof(int) * 10);  // 调用 malloc 函数的形式
	int* p3 = new int[10]; // 使用 new 关键字的形式

	// 在堆中申请 class 类型的数组
	Test* p4 = (Test*)malloc(sizeof(Test) * 10); // 调用 malloc 函数的形式
	Test* p5 = new Test[10]; // 使用 new 关键字的形式

	// 释放所有堆中分配的内存空间
	delete p1;
	free(p2);
	delete[] p3;
	free(p4);
	delete[] p5;

	return 0;
}
```

- 使用 new 关键字创建对象，其等价于调用 malloc 函数外加调用构造函数；
- 使用 delete 关键字释放创建对象的内存空间；

- 使用 new 关键字创建对象数组或普通数组的时候，释放时需要使用 delete[] 关键字释放内存；

#### 引用类型

- 引用类型让我想起了 python 和 java 的引用类型；
- 现在看起来 CPP 增加的引用类型像“弱化的指针”；
- 示例代码：

```cpp
#include <stdio.h>
#include <stdlib.h>

class Test {
private:
	int x;
	int y;
public:
	int z = 0;
	Test() {
		printf("Test() executed\n");
	}
	Test(int x, int y) {
		printf("Test(int x, int y) executed\n");
		this->x = x;
		this->y = y;
	}
	~Test() {
		printf("~Test() executed\n");
	}
};


int main() {
	// 基本类型
	int x = 10;
	int& ref_1 = x;
	printf("%d\n", ref_1);
	ref_1++;
	printf("%d\n", ref_1);

	// 类
	Test y;
	Test& ref_2 = y;
	ref_2.z = 1;
	printf("%d\n", ref_2.z);

	// 指针类型
	int*** z = (int***)1;
	int***& ref_3 = z;
	
	// 数组
	int arr[] = { 1, 2, 3 };
	int(&ref_4)[3] = arr;
	ref_4[1] = 4;
	printf("modified: %d\n", arr[1]);

	return 0;
}
```

- 运行结果如下：

![](E:\GitProjects\ReverseHunters\docs\images\LearningNote_58\test_18.png)

- 引用类型相当于变量的“别名”，为什么说是阉割版的指针呢？其实引用类型变量获取的也是地址，只不过它没有改变其最初获得的变量地址的能力，如指针，可以增加减少，而引用类型增加减少是其所指向变量的增加减少，而不是地址的增加减少，这个看一下汇编代码就知道了。

