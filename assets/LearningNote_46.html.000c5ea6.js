import{e as n}from"./app.8845416f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-40-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E03" tabindex="-1"><a class="header-anchor" href="#_7-40-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E03" aria-hidden="true">#</a> 7.40 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u4E03\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u672C\u7AE0\u7EE7\u7EED\u8BB2\u6807\u5FD7\u5BC4\u5B58\u5668\uFF1B 8086 CPU \u7684 flag \u5BC4\u5B58\u5668\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 of df if tf sf zf af pf cf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.CF\uFF08carry flag\uFF09\u6807\u5FD7\u4F4D\uFF1A\u8FDB\u4F4D\u6807\u5FD7\u4F4D\uFF0C\u5728\u8FDB\u884C\u65E0\u7B26\u53F7\u8FD0\u7B97\u7684\u65F6\u5019\uFF0C\u8BB0\u5F55\u4E86\u8FD0\u7B97\u7ED3\u679C\u7684\u6700\u9AD8\u6709\u6548\u4F4D\u5411\u66F4\u9AD8\u4F4D\u7684\u8FDB\u4F4D\u503C\uFF0C\u6216\u4ECE\u66F4\u9AD8\u4F4D\u7684\u501F\u4F4D\u503C\u3002
<span class="token number">2</span>.OF\uFF08overflow flag\uFF09\u6807\u5FD7\u4F4D\uFF1A\u6EA2\u51FA\u6807\u5FD7\u4F4D\uFF0C\u5728\u8FDB\u884C\u6709\u7B26\u53F7\u8FD0\u7B97\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8FD0\u7B97\u7ED3\u679C\u53D1\u751F\u4E86\u6EA2\u51FA\uFF0C\u90A3\u4E48OF\u7F6E\u4E3A1\uFF0C\u5426\u5219\u7F6E\u4E3A0\uFF1B

<span class="token comment"># \u4E3E\u4E2A\u4F8B\u5B50</span>
mov al, <span class="token number">98</span>
<span class="token function">add</span> al, <span class="token number">99</span>
\u5BF9\u4E8E\u65E0\u7B26\u53F7\u8FD0\u7B97\u6765\u8BF4\uFF0C98 + <span class="token number">99</span> <span class="token operator">=</span> <span class="token number">197</span>\uFF0C\u5176\u6CA1\u6709\u8D85\u8FC7 <span class="token number">8</span> \u4F4D\u65E0\u7B26\u53F7\u8868\u793A\uFF080 ~ <span class="token number">255</span>\uFF09\uFF0C\u4F46\u662F\u8D85\u8FC7\u4E86 <span class="token number">8</span> \u4F4D\u6709\u7B26\u53F7\u8868\u793A\uFF08-127 ~ <span class="token number">128</span>\uFF09\uFF0C\u6240\u4EE5\u6B64\u65F6 CF \u7F6E\u4E3A1\uFF0C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u68C0\u6D4B\u70B9-11-2" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-11-2" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 11.2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># sub al, al</span>

<span class="token comment"># mov al, 10h</span>

<span class="token comment"># add al, 90h</span>

<span class="token comment"># mov al, 80h</span>

<span class="token comment"># add al, 80h</span>

<span class="token comment"># mov al, 80h</span>

<span class="token comment"># add al, 05h</span>

<span class="token comment"># mov al, 7dh</span>

<span class="token comment"># add al, 0bh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u660E\u5929\u7EE7\u7EED\u8865\u5145</p>`,8);function r(l,p){return e}var m=s(a,[["render",r]]);export{m as default};
