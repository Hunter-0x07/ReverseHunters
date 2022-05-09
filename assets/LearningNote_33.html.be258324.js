import{e as a}from"./app.1f970551.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},s=a(`<h1 id="_7-27-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u56DB" tabindex="-1"><a class="header-anchor" href="#_7-27-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u56DB" aria-hidden="true">#</a> 7.27 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u56DB\uFF09</h1><h2 id="\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B-\u7EED" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B-\u7EED" aria-hidden="true">#</a> \u5B9E\u9A8C 9 \u6839\u636E\u6750\u6599\u7F16\u7A0B\uFF08\u7EED\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># xor\u6307\u4EE4</span>
<span class="token comment"># \u53C2\u8003\u94FE\u63A5\uFF1Ahttp://c.biancheng.net/view/3558.html</span>
\u683C\u5F0F\uFF1Axor destination, <span class="token builtin class-name">source</span>

<span class="token comment"># \u6240\u4EE5 xor bx, bx\u7684\u610F\u601D\u5C31\u663E\u800C\u6613\u89C1\u4E86\u3002</span>
xor bx, bx <span class="token comment"># \u5B83\u4EEC\u662F\u540C\u4E00\u4E2A\u503C\uFF0C\u76F8\u540C\u5373\u4E3A 0\uFF0C\u6240\u4EE5\u7528 xor bx, bx \u6765\u5BF9 bx \u6E05\u96F6\u662F\u6CA1\u95EE\u9898\u7684\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5176\u4E2D\u9898\u76EE\u8981\u6C42\u662F\u5728\u5C4F\u5E55\u4E2D\u95F4\u663E\u793A\u4E09\u884C\u5185\u5BB9\uFF0C\u800C\u5C4F\u5E55\u662F 80 * 25\uFF0C\u6240\u4EE5\u4E2D\u95F4\u4E00\u884C\u5E94\u8BE5\u662F\uFF1A \uFF0825 / 2 \u7684 \u4F59\u6570 + 1\uFF09= \u7B2C 13 \u884C\uFF0C\u5F80\u524D\u4E00\u884C + \u5F80\u540E\u4E00\u884C\uFF1B\u90A3\u4E48\u5373\u7B2C 12 \u884C\uFF0C\u7B2C 13 \u884C\uFF0C\u7B2C 14 \u884C\u4E3A\u4E2D\u95F4\u7684\u884C\u6570\u3002 \u90A3\u4E48\u9996\u5148\u6211\u4EEC\u9700\u8981\u7B97\u51FA\u7B2C 12 \u884C\u7684\u6BB5\u8D77\u59CB\u5730\u5740\u3002</p><p>\u7B2C\u4E8C\u884C\u7684\u8D77\u59CB\u504F\u79FB\u662F 160\uFF0C\u5373 A0H\uFF1B\u6240\u4EE5\u7B97\u7B2C\u51E0\u884C\u7684\u516C\u5F0F\u4E3A\uFF1A160 * (\u7B2C\u51E0\u884C\u7684\u884C\u6570 - 1)\uFF1B \u6240\u4EE5\u7B2C 12 \u884C\u7684\u504F\u79FB\u662F 160 * 11 = 1760\uFF0C\u5373 06E0H\uFF1B\u800C\u6211\u4EEC\u4F1A\u663E\u793A\u5728\u663E\u793A\u5668\u4E0A\u7684\u5185\u5BB9\u7684\u5185\u5B58\u5730\u5740\u8303\u56F4\u662F B8000H ~ B8F9FH\uFF0C\u5373\u663E\u793A\u7F13\u51B2\u533A\u7B2C 0 \u9875\u7684\u5185\u5BB9\uFF1B\u6240\u4EE5\u7B2C 12 \u884C\u7684\u8D77\u59CB\u7269\u7406\u5730\u5740\u5E94\u8BE5\u662F B8000H + 6E0H = B86E0H\uFF1B\u800C\u56E0\u4E3A\u53C8\u8981 \u663E\u793A\u5728\u4E2D\u95F4\uFF0C\u6211\u4EEC\u7684 &#39;welcome to masm!&#39; \u5360\u4E86 16 \u4E2A\u5B57\u8282\uFF0C\u7B97\u4E0A\u5B57\u7B26\u7684\u989C\u8272\u5C5E\u6027\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4E2D\u95F4\u7684 32 \u4E2A\u5B57\u8282\u3002 \u7ECF\u8FC7\u8BA1\u7B97\uFF0C\u5BF9\u4E8E 0 ~ 159 \u7684\u4E2D\u95F4\u4F4D\u7F6E\u7684\u7D22\u5F15\u8303\u56F4\u5E94\u8BE5\u662F 64 ~ 96\uFF08\u5373 40H ~ 60H\uFF0C\u60F3\u4E0D\u51FA\u6765\u5C31\u52A8\u7B14\u5728\u7EB8\u4E0A\u7B97\u4E00\u4E0B\u5C31\u597D\u4E86\uFF09\uFF1B\u6240\u4EE5\u4E2D\u95F4\u4F4D\u7F6E\u7684\u8D77\u59CB\u7269\u7406\u5730\u5740\u662F (B86E0H + 40H = B8720H)\uFF1B\u5176\u7269\u7406\u5730\u5740\u7B49\u4EF7\u4E8E B872H:0000H\uFF08\u6BB5\u5730\u5740:\u504F\u79FB\u5730\u5740\uFF09\u3002\u8FD9\u6837\u4E5F\u65B9\u4FBF\u6211\u4EEC\u540E\u7EED\u7684\u4F7F\u7528\uFF1B</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672A\u5B8C\u5F85\u7EED~</p>`,7);function r(c,t){return s}var p=n(e,[["render",r]]);export{p as default};
