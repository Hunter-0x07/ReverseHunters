import{e as n}from"./app.89363d42.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-40-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E03" tabindex="-1"><a class="header-anchor" href="#_7-40-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E03" aria-hidden="true">#</a> 7.40 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u4E03\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u672C\u7AE0\u7EE7\u7EED\u8BB2\u6807\u5FD7\u5BC4\u5B58\u5668\uFF1B 8086 CPU \u7684 flag \u5BC4\u5B58\u5668\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 of df if tf sf zf af pf cf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.CF\uFF08carry flag\uFF09\u6807\u5FD7\u4F4D\uFF1A\u8FDB\u4F4D\u6807\u5FD7\u4F4D\uFF0C\u5728\u8FDB\u884C\u65E0\u7B26\u53F7\u8FD0\u7B97\u7684\u65F6\u5019\uFF0C\u8BB0\u5F55\u4E86\u8FD0\u7B97\u7ED3\u679C\u7684\u6700\u9AD8\u6709\u6548\u4F4D\u5411\u66F4\u9AD8\u4F4D\u7684\u8FDB\u4F4D\u503C\uFF0C\u6216\u4ECE\u66F4\u9AD8\u4F4D\u7684\u501F\u4F4D\u503C\u3002
<span class="token number">2</span>.OF\uFF08overflow flag\uFF09\u6807\u5FD7\u4F4D\uFF1A\u6EA2\u51FA\u6807\u5FD7\u4F4D\uFF0C\u5728\u8FDB\u884C\u6709\u7B26\u53F7\u8FD0\u7B97\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8FD0\u7B97\u7ED3\u679C\u53D1\u751F\u4E86\u6EA2\u51FA\uFF0C\u90A3\u4E48OF\u7F6E\u4E3A1\uFF0C\u5426\u5219\u7F6E\u4E3A0\uFF1B

<span class="token comment"># \u4E3E\u4E2A\u4F8B\u5B50</span>
mov al, <span class="token number">98</span>
<span class="token function">add</span> al, <span class="token number">99</span>
\u5BF9\u4E8E\u65E0\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0C98 + <span class="token number">99</span> <span class="token operator">=</span> <span class="token number">197</span>\uFF0C\u5176\u6CA1\u6709\u8D85\u8FC7 <span class="token number">8</span> \u4F4D\u65E0\u7B26\u53F7\u8868\u793A\uFF080 ~ <span class="token number">255</span>\uFF09\uFF0C\u4F46\u662F\u8D85\u8FC7\u4E86 <span class="token number">8</span> \u4F4D\u6709\u7B26\u53F7\u8868\u793A\uFF08-127 ~ <span class="token number">128</span>\uFF09\uFF0C\u6240\u4EE5\u6B64\u65F6 CF \u7F6E\u4E3A1\uFF0C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u68C0\u6D4B\u70B9-11-2" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-11-2" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 11.2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># sub al, al</span>
\u89E3\u6790\uFF1A\u7ED3\u679C\u4E3A <span class="token number">0</span>\uFF0C\u6240\u4EE5 ZF \u7F6E\u4E3A <span class="token number">1</span>\uFF1B1\u7684\u4E2A\u6570\u4E3A\u5076\u6570\uFF0C\u6240\u4EE5 PF \u7F6E\u4E3A <span class="token number">1</span>\uFF1B\u6700\u9AD8\u4F4D\u4E3A <span class="token number">0</span>\uFF0C\u5982\u679C\u770B\u4F5C\u6709\u7B26\u53F7\u6570\uFF0C\u5219\u4E3A\u6B63\u6570\uFF0C\u6240\u4EE5 SF \u7F6E\u4E3A <span class="token number">0</span>\uFF1B\u6CA1\u6709\u4EA7\u751F\u8FDB\u4F4D\u548C\u6EA2\u51FA\uFF0C\u6240\u4EE5 CF \u548C OF \u90FD\u4E3A <span class="token number">0</span>\uFF1B

<span class="token comment"># mov al, 10h</span>
\u89E3\u6790\uFF1A\u76EE\u524D\u5DF2\u77E5\u4F20\u9001\u6307\u4EE4mov\u3001push\u3001pop \u4E0D\u5F71\u54CD\u6807\u5FD7\u4F4D\uFF0C\u6807\u5FD7\u4F4D\u7EF4\u6301\u4E0A\u4E00\u6B65\u72B6\u6001\uFF1B

<span class="token comment"># add al, 90h</span>
\u89E3\u6790\uFF1Aal <span class="token operator">=</span> <span class="token number">10</span> + 90h <span class="token operator">=</span> A0h\uFF0Czf \u7F6E\u4E3A <span class="token number">0</span>\uFF1BA0h \u6362\u7B97\u6210\u4E8C\u8FDB\u5236 <span class="token number">1010</span> 0000\uFF1B1\u7684\u4E2A\u6570\u4E3A\u5076\u6570\uFF0C\u6240\u4EE5 PF \u7F6E <span class="token number">1</span>\uFF1B\u6700\u9AD8\u4F4D\u662F <span class="token number">1</span>\uFF0C\u6240\u4EE5 SF \u7F6E <span class="token number">1</span>\uFF1BA0h\uFF0C\u6709\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\u662F -81\uFF1B\u6240\u4EE5 CF \u548C OF \u90FD\u4E3A <span class="token number">0</span>\uFF1B

<span class="token comment"># mov al, 80h</span>
\u89E3\u6790\uFF1A\u76EE\u524D\u5DF2\u77E5\u4F20\u9001\u6307\u4EE4mov\u3001push\u3001pop \u4E0D\u5F71\u54CD\u6807\u5FD7\u4F4D\uFF0C\u6807\u5FD7\u4F4D\u7EF4\u6301\u4E0A\u4E00\u6B65\u72B6\u6001\uFF1B

<span class="token comment"># add al, 80h</span>
\u89E3\u6790\uFF1Aal <span class="token operator">=</span> 80h + 80h <span class="token operator">=</span> 100h\uFF0Cal \u6B64\u65F6\u4FDD\u5B58\u4E8600\uFF0C\u6240\u4EE5 ZF \u7F6E\u4E3A <span class="token number">1</span>\uFF08\u7ECF\u8FC7olldbg\u6D4B\u8BD5\uFF0C\u770B\u6765 zf \u6807\u5FD7\u4F4D\u5224\u65AD\u7684\u662F\u6700\u540E\u5BC4\u5B58\u5668\u7684\u7ED3\u679C\uFF0C\u662F\u4E0D\u7BA1\u8FDB\u4F4D\u7ED3\u679C\u7684\uFF09\uFF1B
al \u7684 00h \u6362\u7B97\u6210\u4E8C\u8FDB\u5236 0000 0000\uFF08\u7ECF\u8FC7olldbg\u6D4B\u8BD5\uFF0CPF \u6807\u5FD7\u4F4D\u5224\u65AD\u7684\u4E5F\u662F\u6700\u540E\u5BC4\u5B58\u5668\u7684\u7ED3\u679C\uFF0C\u662F\u4E0D\u7BA1\u8FDB\u4F4D\u7ED3\u679C\u7684\uFF09\uFF0C\u6240\u4EE5 PF \u5224\u65AD <span class="token number">1</span> \u7684\u4E2A\u6570\u4E3A <span class="token number">0</span>\uFF08\u5373\u5076\u6570\uFF09\uFF0C\u6240\u4EE5 PF \u7F6E <span class="token number">1</span>\uFF1B
al \u7684 00h\uFF0C\u6700\u9AD8\u4F4D\u4E3A <span class="token number">0</span>\uFF0C\u6240\u4EE5 SF \u7F6E <span class="token number">0</span>\uFF1B\u9488\u5BF9\u65E0\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0Cal \u53EA\u80FD\u4FDD\u5B58 <span class="token number">0</span> ~ <span class="token number">255</span>\uFF0C\u800C\u7ED3\u679C\u662F <span class="token number">256</span>\uFF0C\u6240\u4EE5\u5176\u4EA7\u751F\u4E86\u8FDB\u4F4D\uFF0CCF \u7F6E\u4E3A <span class="token number">1</span>\uFF1B
\u9488\u5BF9\u6709\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0C80h \u6362\u7B97\u6210\u4E8C\u8FDB\u5236 <span class="token number">1000</span> 0000\uFF0C\u4E3A\u8D1F\u6570 -128\uFF0C\u4E24\u8005\u76F8\u52A0\u5373 -128 -128\uFF0C\u6EA2\u51FA\uFF0C\u6240\u4EE5 OF \u7F6E\u4E3A <span class="token number">1</span>\uFF1B

<span class="token comment"># mov al, 0fch</span>
\u89E3\u6790\uFF1A\u76EE\u524D\u5DF2\u77E5\u4F20\u9001\u6307\u4EE4mov\u3001push\u3001pop \u4E0D\u5F71\u54CD\u6807\u5FD7\u4F4D\uFF0C\u6807\u5FD7\u4F4D\u7EF4\u6301\u4E0A\u4E00\u6B65\u72B6\u6001\uFF1B

<span class="token comment"># add al, 05h</span>
\u89E3\u6790\uFF1Aal <span class="token operator">=</span> fch + 05h <span class="token operator">=</span> 101h\uFF0C\u6240\u4EE5 zf \u7F6E <span class="token number">0</span>\uFF1Bal\u4FDD\u5B58\u4E86 01h \u6362\u7B97\u6210\u4E8C\u8FDB\u5236\uFF0C\u5373 0000 0001\uFF0C\u6240\u4EE5 pf \u7F6E <span class="token number">0</span>\uFF1BSF \u7F6E <span class="token number">0</span>\uFF1B101h\uFF0C\u5BF9\u4E8E\u65E0\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0C\u5DF2\u7ECF\u8FDB\u4F4D\u4E86\uFF1B
\u4F46\u662F\u5BF9\u4E8E\u6709\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0Cfch \u4E3A <span class="token number">1111</span> <span class="token number">1100</span>\uFF0C\u5373\u4E3A\u8D1F\u6570 -4\uFF0C\u800C 05h \u662F <span class="token number">5</span>\uFF0C\u5219\u76F8\u52A0\u4E3A <span class="token number">1</span>\uFF0C\u5728\u8303\u56F4 -128 ~ <span class="token number">127</span> \u5185\uFF0C\u6CA1\u6709\u6EA2\u51FA<span class="token punctuation">;</span>

<span class="token comment"># mov al, 7dh</span>
\u89E3\u6790\uFF1A\u76EE\u524D\u5DF2\u77E5\u4F20\u9001\u6307\u4EE4mov\u3001push\u3001pop \u4E0D\u5F71\u54CD\u6807\u5FD7\u4F4D\uFF0C\u6807\u5FD7\u4F4D\u7EF4\u6301\u4E0A\u4E00\u6B65\u72B6\u6001\uFF1B

<span class="token comment"># add al, 0bh</span>
\u89E3\u6790\uFF1Aal <span class="token operator">=</span> 7dh + 0bh <span class="token operator">=</span> h\uFF0C\u6240\u4EE5 zf \u7F6E <span class="token number">0</span>\uFF1B8dh \u6362\u7B97\u6210\u4E8C\u8FDB\u5236 <span class="token number">1000</span> <span class="token number">1000</span>\uFF0C\u6240\u4EE5 pf \u7F6E <span class="token number">1</span>\uFF1BSF \u7F6E <span class="token number">1</span>\uFF1B
\u5BF9\u4E8E\u65E0\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0C\u6CA1\u6709\u8FDB\u4F4D\uFF0CCF \u7F6E\u4E3A <span class="token number">1</span>\uFF1B\u800C\u5BF9\u4E8E\u6709\u7B26\u53F7\u8FD0\u7B97\u6765\u8BB2\uFF0C7dh \u6362\u7B97\u6210\u4E8C\u8FDB\u5236 0111 <span class="token number">1101</span>\uFF0C\u4E3A\u6B63\u6570 <span class="token number">125</span>\uFF1B0bh \u4E3A 0000 <span class="token number">1011</span>\uFF0C\u4E3A\u6B63\u657011\uFF0C\u76F8\u52A0\u4E3A <span class="token number">136</span>\uFF0C\u8D85\u8FC7 <span class="token number">127</span>\uFF0C\u5219\u6EA2\u51FA\uFF0C\u6240\u4EE5 OF <span class="token operator">=</span> <span class="token number">1</span>\uFF1B

<span class="token comment"># \u53C2\u8003\u7B54\u6848\u94FE\u63A5\uFF1A</span>
https://blog.csdn.net/shaco_/article/details/105500175
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u660E\u5929\u7EE7\u7EED\u8865\u5145 2022.6.6 11\uFF1A48 \u4E3B\u8981\u662F OF \u6EA2\u51FA\u8FD0\u7B97\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\uFF0C\u5148\u770B\u6267\u884C\u7684\u65F6\u5019\u64CD\u4F5C\u6570\u662F\u5426\u4E3A\u8D1F\u6570\uFF0C\u5982\u679C\u4E3A\u8D1F\u6570\uFF0C\u9700\u8981\u5148\u6362\u7B97\u4E3A\u5341\u8FDB\u5236\u8D1F\u6570\u540E\u518D\u8FDB\u884C\u8BA1\u7B97\uFF1B</p>`,8);function p(l,r){return e}var o=s(a,[["render",p]]);export{o as default};
