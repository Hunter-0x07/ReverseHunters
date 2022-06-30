import{e as n}from"./app.09026ae1.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_7-48-\u514D\u6740\u8BFE\u7A0Bx86-\u4E09" tabindex="-1"><a class="header-anchor" href="#_7-48-\u514D\u6740\u8BFE\u7A0Bx86-\u4E09" aria-hidden="true">#</a> 7.48 \u514D\u6740\u8BFE\u7A0BX86\uFF08\u4E09\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// x86\u7A0B\u5E8F\u9ED8\u8BA4\u8C03\u7528\u7EA6\u5B9A\uFF0C\u5916\u5E73\u6808</span>
<span class="token keyword">int</span> __cdecl <span class="token function">function_1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// x64\u7A0B\u5E8F\u9ED8\u8BA4\u8C03\u7528\u7EA6\u5B9A\uFF0C\u5185\u5E73\u6808</span>
<span class="token keyword">int</span> __stdcall <span class="token function">function_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C06\u524D\u4E24\u4E2A\u53C2\u6570\u7528 ecx, edx \u4F20\u5165\uFF0C\u5269\u4E0B\u7684\u53C2\u6570\u4ECE\u53F3\u5F80\u5DE6\u5165\u6808</span>
<span class="token keyword">int</span> _fastcall <span class="token function">function_3</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u88F8\u51FD\u6570\uFF0C\u4E0D\u751F\u6210\u6C47\u7F16\u4EE3\u7801</span>
<span class="token keyword">void</span> <span class="token function">__declspec</span><span class="token punctuation">(</span>naked<span class="token punctuation">)</span> <span class="token function">function_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	__asm <span class="token punctuation">{</span>
		ret
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65E0\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\u7684\u6846\u67B6</span>
<span class="token keyword">void</span> <span class="token function">__declspec</span><span class="token punctuation">(</span>naked<span class="token punctuation">)</span> <span class="token function">function_5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	__asm <span class="token punctuation">{</span>
		push ebp
		mov ebp<span class="token punctuation">,</span> esp
		sub esp<span class="token punctuation">,</span> <span class="token number">0x40</span>
		push ebx
		push esi
		push edi
		lea edi<span class="token punctuation">,</span> dword ptr ds<span class="token operator">:</span><span class="token punctuation">[</span>ebp <span class="token operator">-</span> <span class="token number">0x40</span><span class="token punctuation">]</span>
		mov eax<span class="token punctuation">,</span> <span class="token number">0xCCCCCCCC</span>
		mov ecx<span class="token punctuation">,</span> <span class="token number">0x10</span>
		rep stosd

		pop edi
		pop esi
		pop ebx
		mov esp<span class="token punctuation">,</span> ebp
		pop ebp

		ret
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6709\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u6846\u67B6</span>
<span class="token keyword">int</span> <span class="token function">__declspec</span><span class="token punctuation">(</span>naked<span class="token punctuation">)</span> <span class="token function">function_6</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	__asm <span class="token punctuation">{</span>
		push ebp
		mov ebp<span class="token punctuation">,</span> esp
		sub esp<span class="token punctuation">,</span> <span class="token number">0x40</span>
		push ebx
		push esi
		push edi
		lea edi<span class="token punctuation">,</span> dword ptr ds<span class="token operator">:</span><span class="token punctuation">[</span>ebp <span class="token operator">-</span> <span class="token number">0x40</span><span class="token punctuation">]</span>
		mov eax<span class="token punctuation">,</span> <span class="token number">0xCCCCCCCC</span>
		rep stosd

		mov eax<span class="token punctuation">,</span> dword ptr ds<span class="token operator">:</span><span class="token punctuation">[</span>ebp <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span>
		add eax<span class="token punctuation">,</span> dword ptr ds<span class="token operator">:</span><span class="token punctuation">[</span>ebp <span class="token operator">+</span> <span class="token number">0xC</span><span class="token punctuation">]</span>

		pop edi
		pop esi
		pop ebx
		mov esp<span class="token punctuation">,</span> ebp
		pop ebp

		ret
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">function_1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">function_2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">function_3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">function_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">function_5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">function_6</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E3B\u8981\u5B66\u4E60\u4E86\u4E09\u79CD\u8C03\u7528\u7EA6\u5B9A\u4EE5\u53CA\u600E\u4E48\u7F16\u5199\u88F8\u51FD\u6570\uFF1B</p>`,5);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
