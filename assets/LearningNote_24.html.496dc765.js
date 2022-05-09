import{e as n}from"./app.1f970551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_7-18-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E94" tabindex="-1"><a class="header-anchor" href="#_7-18-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E94" aria-hidden="true">#</a> 7.18 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u4E94\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u5728 8086 CPU \u4E2D\uFF0C\u53EA\u6709bx\u3001si\u3001di\u3001bp 4\u4E2A\u5BC4\u5B58\u5668\u53EF\u4EE5\u7528\u5728&quot;[...]&quot;\u8FDB\u884C\u5185\u5B58\u5355\u5143\u7684\u5BFB\u5740\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># bx\u3001si\u3001di\u3001bp \u7EC4\u5408\u65B9\u5F0F\u5982\u4E0B\uFF1A</span>
mov ax, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>si<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>di<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bp<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bx + si<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bx + di<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bp + si<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bp + di<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bx + si + idata<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bx + di + idata<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bp + si + idata<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bp + si + idata<span class="token punctuation">]</span>
- \u6CE8\u610F\uFF1A\u5728<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>\u4F7F\u7528 bp \u5BC4\u5B58\u5668\u7684\u65F6\u5019\uFF0C\u6307\u4EE4\u4E2D\u6CA1\u6709\u663E\u5F0F\u7ED9\u51FA\u6BB5\u5730\u5740\u7684\u8BDD\uFF0C\u6BB5\u5730\u5740\u9ED8\u8BA4\u5728 ss \u5BC4\u5B58\u5668\u4E2D\uFF0C\u800C\u4E0D\u662F ds \u5BC4\u5B58\u5668~
\u5982\uFF1Amov ax, <span class="token punctuation">[</span>bp<span class="token punctuation">]</span>    \u542B\u4E49\uFF1A<span class="token punctuation">(</span>ax<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable"><span class="token punctuation">((</span>ss<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16</span> <span class="token operator">+</span> <span class="token punctuation">(</span>bp<span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6570\u636E\u53EF\u80FD\u5904\u4E8E\u7684\u4F4D\u7F6E\uFF1ACPU\u5185\u90E8\u3001\u5185\u5B58\u3001\u7AEF\u53E3\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6C47\u7F16\u8BED\u8A00\u4E2D\u8868\u8FBE\u6570\u636E\u7684\u4F4D\u7F6E P163</span>
<span class="token number">1</span>.\u7ACB\u5373\u6570\uFF08idata\uFF09\uFF08\u6211\u731C\u5168\u79F0\uFF1A immediate data\uFF09
\u5982 mov ax, <span class="token number">1</span>
   <span class="token function">add</span> bx, 200h
idata \u76F4\u63A5\u5728\u673A\u5668\u6307\u4EE4\u4E2D\uFF0C\u5373\u4FDD\u5B58\u5728 CPU \u7684\u6307\u4EE4\u7F13\u51B2\u5668\u4E2D\uFF1B

<span class="token number">2</span>.\u5BC4\u5B58\u5668\u4E2D
\u5982\uFF1Amov ax, bx
    mov ds, ax

<span class="token number">3</span>.\u6BB5\u5730\u5740\uFF08SA\uFF09\u548C\u504F\u79FB\u5730\u5740\uFF08EA\uFF09
\u6307\u4EE4\u8981\u5904\u7406\u7684\u6570\u636E\u5728\u5185\u5B58\u91CC\u7684\u8BDD
mov ax, <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>di<span class="token punctuation">]</span>
mov ax, <span class="token punctuation">[</span>bx + <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BF9\u4E8E CPU \u600E\u4E48\u77E5\u9053\u8981\u5904\u7406\u7684\u6570\u636E\u6709\u591A\u957F\uFF1F8086 CPU \u53EF\u4EE5\u5904\u7406\u4E24\u79CD\u5C3A\u5BF8\u7684\u6570\u636E\uFF1Abyte\u3001word P165</span>
\uFF081\uFF09\u901A\u8FC7\u5BC4\u5B58\u5668\u540D\u6307\u660E\u8981\u5904\u7406\u7684\u6570\u636E\u957F\u5EA6
mov ax, <span class="token number">1</span>
mov bx, ds:<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># bx \u5BC4\u5B58\u5668\u662F 16\u4F4D\u5BC4\u5B58\u5668\uFF0C\u6B64\u65F6\u662F\u5B57\u64CD\u4F5C</span>

\uFF082\uFF09\u901A\u8FC7 <span class="token string">&quot;X ptr&quot;</span>\u7684\u5F62\u5F0F\u6307\u660E\u5185\u5B58\u5355\u5143\u7684\u957F\u5EA6\uFF0CX \u5728\u6C47\u7F16\u6307\u4EE4\u4E2D\u53EF\u4EE5\u4E3A word \u6216 byte\u3002
mov word ptr ds:<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>, <span class="token number">1</span>
inc word ptr <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>
<span class="token function">add</span> word ptr <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>, <span class="token number">2</span>
mov byte ptr ds:<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>, <span class="token number">1</span>
<span class="token function">add</span> byte ptr <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>, <span class="token number">2</span>

\uFF083\uFF09\u6709\u4E9B\u6307\u4EE4\u64CD\u4F5C\u9ED8\u8BA4\u5C31\u6307\u660E\u4E86\u8BBF\u95EE\u7684\u957F\u5EA6
\u6BD4\u5982\u6808\u7684 push \u548C pop \u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u5FC5\u987B\u4E3A\u5B57\u64CD\u4F5C\uFF1B

<span class="token comment">## \u603B\u7ED3</span>
\u55EF~</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,7);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
