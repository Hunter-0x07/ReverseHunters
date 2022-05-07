import{e as n}from"./app.308ac255.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-21-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u516B" tabindex="-1"><a class="header-anchor" href="#_7-21-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u516B" aria-hidden="true">#</a> 7.21 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u516B\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u8F6C\u79FB\u6307\u4EE4\uFF1A\u53EF\u4EE5\u4FEE\u6539IP\u3001\u6216\u540C\u65F6\u4FEE\u6539 CS \u548C IP \u7684\u6307\u4EE4\u7EDF\u79F0\u4E3A\u8F6C\u79FB\u6307\u4EE4\u3002\u6982\u62EC\u8BB2\u5C31\u662F\u53EF\u4EE5 \u63A7\u5236 CPU \u6267\u884C\u5185\u5B58\u67D0\u5904\u4EE3\u7801\u7684\u6307\u4EE4\uFF1B-- \u6458\u6284\u6765\u81EA P175\uFF0C\u4E0D\u96BE\u7406\u89E3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64CD\u4F5C\u7B26 offset</span>
<span class="token comment"># offset: \u53D6\u5F97\u6807\u53F7\u7684\u504F\u79FB\u5730\u5740</span>
\u4F8B\u5982\uFF1Amov ax, offset start 

<span class="token comment"># \u6307\u4EE4 jmp</span>
<span class="token comment"># \u53EF\u4EE5\u4FEE\u6539 IP\uFF0C\u6216\u540C\u65F6\u4FEE\u6539 IP \u548C CS</span>
<span class="token comment"># \u53EA\u4FEE\u6539 IP \u5BC4\u5B58\u5668\u79F0\u4E3A\u6BB5\u5185\u8F6C\u79FB</span>
<span class="token comment"># \u540C\u65F6\u4FEE\u6539 IP \u548C CS \u79F0\u4E3A\u6BB5\u95F4\u8F6C\u79FB</span>
<span class="token comment"># \u6BB5\u5185\u8F6C\u79FB\u53C8\u5206\u4E3A\uFF1A</span>
<span class="token comment">#\uFF081\uFF09\u77ED\u8F6C\u79FB\uFF1A\u4FEE\u6539 IP \u7684\u8303\u56F4\u4E3A -128 ~ 127</span>
jmp short \u6807\u53F7 <span class="token comment"># \u5176\u529F\u80FD\u4E3A (IP) = (IP) + 8 \u4F4D\u4F4D\u79FB</span>

<span class="token comment">#\uFF082\uFF09\u8FD1\u8F6C\u79FB\uFF1A\u4FEE\u6539 IP \u7684\u8303\u56F4\u4E3A -32768 ~ 32767</span>
jmp near ptr \u6807\u53F7 <span class="token comment"># \u5176\u529F\u80FD\u4E3A\uFF08IP) = (IP) + 16 \u4F4D\u4F4D\u79FB</span>

<span class="token comment"># \u6BB5\u95F4\u8F6C\u79FB\uFF08\u53C8\u79F0\u4E3A\u8FDC\u8F6C\u79FB\uFF09</span>
<span class="token comment"># \u6307\u660E\u4E86\u7528\u6807\u53F7\u7684\u6BB5\u5730\u5740\u548C\u504F\u79FB\u5730\u5740\u4FEE\u6539 CS \u548C IP</span>
jmp far ptr \u6807\u53F7

<span class="token comment"># \u8F6C\u79FB\u5730\u5740\u5728\u5BC4\u5B58\u5668\u4E2D\u7684 jmp \u6307\u4EE4</span>
jmp <span class="token number">16</span>\u4F4Dreg <span class="token comment"># \u529F\u80FD\u4E3A\uFF1A(IP) = (16\u4F4Dreg)</span>

<span class="token comment"># \u8F6C\u79FB\u5730\u5740\u5728\u5185\u5B58\u4E2D\u7684 jmp \u6307\u4EE4 \u8BE6\u7EC6\u53C2\u8003 P182</span>
jmp word ptr \u5185\u5B58\u5355\u5143\u5730\u5740\uFF08\u6BB5\u5185\u8F6C\u79FB\uFF09 <span class="token comment"># \u529F\u80FD\uFF1A\u4ECE\u5185\u5B58\u5355\u5143\u5730\u5740\u5904\u5F00\u59CB\u5B58\u653E\u4E00\u4E2A\u5B57\uFF0C\u662F\u8F6C\u79FB\u7684\u76EE\u7684\u504F\u79FB\u5730\u5740\u3002</span>
jmp dword ptr \u5185\u5B58\u5355\u5143\u5730\u5740\uFF08\u6BB5\u95F4\u8F6C\u79FB\uFF09<span class="token comment"># \u529F\u80FD\uFF1A\u4ECE\u5185\u5B58\u5355\u5143\u5730\u5740\u5904\u5B58\u653E\u7740\u4E24\u4E2A\u5B57\uFF0C\u9AD8\u5730\u5740\u5904\u7684\u5B57\u662F\u8F6C\u79FB\u7684\u76EE\u7684\u7684\u6BB5\u5730\u5740\uFF0C\u4F4E\u5730\u5740\u5904\u662F\u8F6C\u79FB\u7684\u76EE\u7684\u504F\u79FB\u5730\u5740\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u590D\u4E60\u4E00\u4E0B\u8865\u7801\uFF1A \u5BF9\u4E8E\u6709\u7B26\u53F7\u6570\u6765\u8BF4\uFF0C\u8D1F\u6570\u7528\u8865\u7801\u8868\u793A\uFF0C\u201C\u6B63\u6570\u7684\u8865\u7801\u5728\u8BA1\u7B97\u673A\u4E2D\u5C31\u662F\u5176\u672C\u8EAB\u201D\uFF1B</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7740\u6025\u554A\uFF0C\u60F3\u5B66\u65B0\u7684\u4E1C\u897F~\uFF1B\u90A3\u5C31\u5B66\u4E0B\u53BB\u5427~\uFF1B \u4ECA\u5929\u770B\u5230 P180\u9875\u672B\u5C3E\uFF1B</p>`,7);function p(r,c){return e}var t=s(a,[["render",p]]);export{t as default};