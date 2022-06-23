# 7.48 免杀课程X86（三）

## 中间笔记
```c
#include <stdio.h>

// x86程序默认调用约定，外平栈
int __cdecl function_1(int a, int b) {
	return a + b;
}

// x64程序默认调用约定，内平栈
int __stdcall function_2(int a, int b) {
	return a + b;
}

// 将前两个参数用 ecx, edx 传入，剩下的参数从右往左入栈
int _fastcall function_3(int a, int b, int c, int d) {
	return a + b + c + d;
}

// 裸函数，不生成汇编代码
void __declspec(naked) function_4() {
	__asm {
		ret
	}
}

// 无参数无返回值的框架
void __declspec(naked) function_5() {
	__asm {
		push ebp
		mov ebp, esp
		sub esp, 0x40
		push ebx
		push esi
		push edi
		lea edi, dword ptr ds:[ebp - 0x40]
		mov eax, 0xCCCCCCCC
		mov ecx, 0x10
		rep stosd

		pop edi
		pop esi
		pop ebx
		mov esp, ebp
		pop ebp

		ret
	}
}

// 有参数有返回值的框架
int __declspec(naked) function_6(int x, int y) {
	__asm {
		push ebp
		mov ebp, esp
		sub esp, 0x40
		push ebx
		push esi
		push edi
		lea edi, dword ptr ds:[ebp - 0x40]
		mov eax, 0xCCCCCCCC
		rep stosd

		mov eax, dword ptr ds:[ebp + 8]
		add eax, dword ptr ds:[ebp + 0xC]

		pop edi
		pop esi
		pop ebx
		mov esp, ebp
		pop ebp

		ret
	}
}

int main(void) {
	function_1(1, 2);
	function_2(1, 2);
	function_3(1, 2, 3, 4);
	function_4();
	function_5();
	function_6(1, 2);

	return 0;
}

```

## 总结
主要学习了三种调用约定以及怎么编写裸函数；