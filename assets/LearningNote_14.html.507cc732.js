import{e as a}from"./app.d24386f7.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="_7-08-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E94" tabindex="-1"><a class="header-anchor" href="#_7-08-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E94" aria-hidden="true">#</a> 7.08 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E94\uFF09</h1><h2 id="\u68C0\u6D4B\u70B9-3-1" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-3-1" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 3.1</h2><p>\u5185\u5B58\u4E2D\u5B57\u7684\u5B58\u50A8\uFF1A\u7531\u4E8E\u5185\u5B58\u5355\u5143\u662F\u5B57\u8282\u5355\u5143\uFF0C\u6240\u4EE5\u4E00\u4E2A\u5B57\u9700\u8981\u4E24\u4E2A\u5730\u5740\u8FDE\u7EED\u7684\u5185\u5B58\u5355\u5143\u6765\u5B58\u653E\uFF1B\u5176\u4E2D\u8FD9\u4E2A\u5B57\u7684\u4F4E\u4F4D\u5B57\u8282\u9700\u8981\u4FDD\u5B58\u5728\u4F4E\u5730\u5740\u5355\u5143\uFF0C\u9AD8\u4F4D\u5B57\u8282\u9700\u8981\u4FDD\u5B58\u5728 \u9AD8\u5730\u5740\u5355\u5143\uFF1B</p><p>mov \u6307\u4EE4\u53EF\u7528\u4E8E\u5C06\uFF1A \uFF081\uFF09\u6570\u636E\u76F4\u63A5\u9001\u5165\u5BC4\u5B58\u5668: mov ax, 1000h \uFF082\uFF09\u5C06\u4E00\u4E2A\u5BC4\u5B58\u5668\u7684\u5185\u5BB9\u9001\u5165\u53E6\u4E00\u4E2A\u5BC4\u5B58\u5668: mov ax, bx \uFF083\uFF09\u5C06\u5185\u5B58\u5355\u5143\u7684\u5185\u5BB9\u9001\u5165\u6307\u5B9A\u5BC4\u5B58\u5668: \u9700\u8981\u5148\u5C06\u6570\u636E\u5728\u5185\u5B58\u4E2D\u7684\u6BB5\u5730\u5740\u9001\u5165 ds \u6BB5\u5BC4\u5B58\u5668\uFF0C\u4F46\u662F\u4E0D\u80FD\u76F4\u63A5\u5C06\u6570\u636E\u9001\u5F80 ds \u5BC4\u5B58\u5668\uFF0C\u9700\u8981\u5176\u4ED6\u5BC4\u5B58\u5668\u4E2D\u8F6C\uFF08CPU \u8BBE\u8BA1\u7684\u539F\u56E0\uFF09 \u6240\u4EE5\u9996\u5148 mov ax, 1000h \u7136\u540E mov ds, ax \u6700\u540E\u83B7\u53D6\u5185\u5B58\u5355\u5143 1000:0 \u4E2D\u7684\u6570\u636E\u7684\u8BDD\uFF0C\u5219\u4F7F\u7528 mov ax, [0] \u5176\u4E2D [] \u4E2D\u7684 0 \u662F\u6570\u636E\u7684\u504F\u79FB\u5730\u5740\uFF1B \uFF084\uFF09\u5C06\u5BC4\u5B58\u5668\u4E2D\u7684\u5185\u5BB9\u9001\u5165\u5185\u5B58\uFF1A \u77E5\u9053\uFF083\uFF09\u5C31\u80FD\u63A8\u51FA\uFF084\uFF09\uFF1B\u5BF9\u4E8E mov \u6307\u4EE4\u6765\u8BF4\u5C31\u662F mov [\u5185\u5B58\u5355\u5143\u504F\u79FB\u5730\u5740], \u5BC4\u5B58\u5668\u540D\u79F0\uFF1B</p><p>add\u3001sub \u6307\u4EE4\u4E0D\u80FD\u5BF9\u6BB5\u5BC4\u5B58\u5668\u8FDB\u884C\u64CD\u4F5C</p><p>\u5DE9\u56FA\u4E00\u4E0B jmp \u6307\u4EE4\u5E72\u561B\u7684\uFF1A jmp \u67D0\u4E00\u4E2A\u5408\u6CD5\u5BC4\u5B58\u5668\uFF1A\u5373\u7528\u5BC4\u5B58\u5668\u7684\u503C\u4FEE\u6539 IP \u5BC4\u5B58\u5668\uFF1B\u8BE6\u60C5\u89C1 P33\uFF1B jmp &quot;\u6BB5\u5730\u5740:\u504F\u79FB\u5730\u5740&quot; \u5219\u540C\u65F6\u4FEE\u6539 cs \u548C ip \u5BC4\u5B58\u5668\u7684\u503C\uFF1B</p><h2 id="\u4F5C\u4E1A\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A\u7B54\u6848" aria-hidden="true">#</a> \u4F5C\u4E1A\u7B54\u6848</h2><p>\uFF081\uFF09\uFF1A \u6CA1\u5565\u96BE\u5EA6\uFF0C\u4E0D\u8FC7\u8981\u6CE8\u610F\u7684\u662F\u5F00\u5934\uFF1B \u9996\u5148\u8BA1\u7B97\u4E00\u4E0B\u7269\u7406\u5730\u5740\uFF0Cds \u5BC4\u5B58\u5668\u5B58\u653E 0001h\uFF0C\u90A3\u4E48 mov ax, [0000] \u7684\u8BDD\uFF0C\u7269\u7406\u5730\u5740\u7B97\u4E00\u4E0B\uFF1A\u5373 00010h\uFF0C\u5C31\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u540E\u7EED\u6CA1\u5565\u96BE\u5EA6\uFF0C\u5C31\u662F\u7B97\uFF1B \u7B54\u6848\u5982\u4E0B\uFF1A AX = 2662H BX = E626H AX = E626H AX = 2662H BX = D6E6H AX = FD48H AX = 2C14H AX = 0000H AX = 00E6H BX = 0000H BX = 0026H AX = 000CH</p><p>\uFF082\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CS <span class="token operator">=</span> 2000H IP <span class="token operator">=</span> <span class="token number">0</span> DS <span class="token operator">=</span> 1000H AX <span class="token operator">=</span> <span class="token number">0</span> BX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">#\uFF081\uFF09\u5199\u51FA CPU \u6267\u884C\u7684\u6307\u4EE4\u5E8F\u5217\uFF1A</span>
- \u9996\u5148\u8BA1\u7B97\u4E00\u4E0B\u4E0B\u4E00\u6761\u6267\u884C\u7684\u6307\u4EE4\u7684\u7269\u7406\u5730\u5740\uFF1A20000H\uFF0C\u6240\u4EE5\u7B2C\u4E00\u6761\u6267\u884C\u7684\u6307\u4EE4\u662F mov ax, 6622H\uFF0C\u540E\u7EED\u5C31\u7B80\u5355\u4E86\uFF1B
\u7B54\u6848\u5982\u4E0B\uFF1A
mov ax, 6622H
jmp 0ff0:0100 <span class="token comment"># \u6B64\u65F6 cs = 0ff0h ip = 0100h 0ff00h + 0100h = 10000h</span>
mov ax, 2000h
mov ds, ax <span class="token comment"># ds = 2000h</span>
mov ax, <span class="token punctuation">[</span>0008<span class="token punctuation">]</span> <span class="token comment"># \u6B64\u65F6\u5185\u5B58\u6570\u636E\u7684\u7269\u7406\u5730\u5740\u4E3A 20008h, ax = c389h</span>
mov ax, <span class="token punctuation">[</span>0002<span class="token punctuation">]</span> <span class="token comment"># \u6B64\u65F6\u5185\u5B58\u6570\u636E\u7684\u7269\u7406\u5730\u5740\u4E3A 20002h, ax = ea66h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6162\u6162\u6765\uFF01\u52A0\u6CB9\uFF01\u5176\u5B9E\u77E5\u8BC6\u5E76\u4E0D\u96BE\uFF0C\u89C9\u5F97\u96BE\u7684\u4EBA\u53EA\u662F\u7F3A\u4E4F\u8010\u5FC3\u628A\u4ED6\u5F04\u61C2\u7F62\u4E86\u3002</p>`,12);function p(o,r){return e}var l=n(s,[["render",p]]);export{l as default};
