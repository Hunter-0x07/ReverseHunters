import{e as a}from"./app.33442751.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="_7-29-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u516D" tabindex="-1"><a class="header-anchor" href="#_7-29-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u516D" aria-hidden="true">#</a> 7.29 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u516D\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>call \u6307\u4EE4\u4E0D\u80FD\u5B9E\u73B0\u77ED\u8F6C\u79FB\uFF1B\u77ED\u8F6C\u79FB\u4FEE\u6539 IP \u7684\u8303\u56F4\u4E3A -128 ~ 127\uFF0C\u6240\u4EE5\u6211\u53EF\u4EE5\u7406\u89E3\u4E3A\u4FEE\u6539 IP \u7684\u8303\u56F4\u4E0D\u80FD\u5C0F\u4E8E\u8FD9\u4E2A \u8303\u56F4\u5417\uFF1F\u5BF9\u7684\uFF0C\u56E0\u4E3A call \u6807\u53F7\u7B49\u4EF7\u4E8E push IP \u7136\u540E jmp near ptr \u6807\u53F7\uFF08\u8FD9\u91CC\u5373\u8FD1\u8F6C\u79FB\uFF09</p><h2 id="\u68C0\u6D4B\u70B9-10-2" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-10-2" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 10.2</h2><p>\u9898\u76EE\uFF1A\u4E0B\u9762\u7684\u7A0B\u5E8F\u6267\u884C\u540E\uFF0Cax \u4E2D\u7684\u6570\u503C\u4E3A\u591A\u5C11\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5185\u5B58\u5730\u5740    \u673A\u5668\u7801          \u6C47\u7F16\u6307\u4EE4
<span class="token number">1000</span>:0      b8 00 00        mov ax, <span class="token number">0</span>
<span class="token number">1000</span>:3      e8 01 00        call s
<span class="token number">1000</span>:6      <span class="token number">40</span>              inc ax
<span class="token number">1000</span>:7      <span class="token number">58</span>              s:pop ax
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u89E3\u6790\uFF1Acall s \u76F8\u5F53\u4E8E\u5C06\u5F53\u524D IP \u538B\u5165\u6808\u4E2D\uFF0C\u7136\u540E\u8DF3\u8F6C\u5230 s \u5904\u6267\u884C, ax \u5373\u5F53\u524D IP \u7684\u5185\u5BB9\uFF0C\u5F53\u524D IP \u662F 6\uFF08\u6307\u5411\u4E0B\u4E00\u6761\u6307\u4EE4\u7684\u504F\u79FB\u5730\u5740\uFF09\uFF0C\u6240\u4EE5 ax \u4E3A 6\uFF1B</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>~</p>`,9);function r(p,c){return e}var d=n(s,[["render",r]]);export{d as default};
