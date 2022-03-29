import{e as n}from"./app.b3e196e9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-02-\u901A\u7528\u5BC4\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#_7-02-\u901A\u7528\u5BC4\u5B58\u5668" aria-hidden="true">#</a> 7.02 \u901A\u7528\u5BC4\u5B58\u5668</h1><h2 id="\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u5F97" aria-hidden="true">#</a> \u5FC3\u5F97</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u7528\u5BC4\u5B58\u5668</span>
\u5176\u4E2D\u53C8\u5206\u4E3A4\u4E2A\u6570\u636E\u5BC4\u5B58\u5668\uFF1AAX\u3001BX\u3001CX\u3001DX
\u4E24\u4E2A16\u4F4D\u6307\u9488\u5BC4\u5B58\u5668\uFF1ASP\u3001BP\uFF1B
\u4E24\u4E2A16\u4F4D\u53D8\u5740\u5BC4\u5B58\u5668\uFF1ASI\u3001DI\uFF1B
<span class="token number">1</span>\u4E2A16\u4E3A\u6307\u4EE4\u6307\u9488\uFF1AIP
<span class="token number">4</span>\u4E2A16\u4F4D\u6BB5\u5BC4\u5B58\u5668\uFF1ACS\u3001DS\u3001SS\u3001ES
<span class="token number">1</span>\u4E2A16\u4F4D\u6807\u5FD7\u5BC4\u5B58\u5668\uFF1AFLAG

- \u5E38\u7528\u6765\u5BFB\u5740\u7684\u5BC4\u5B58\u5668\uFF1A
BP\u3001SI\u3001DI\u3001BX

- \u5E38\u7528\u6765\u505A\u7D2F\u52A0\u5668\uFF08\u6545\u540D\u601D\u610F\uFF1A\u5373\u4E0D\u65AD\u7684\u505A\u52A0\u6CD5\u4FDD\u5B58\u6570\u636E\uFF09\u7684\u5BC4\u5B58\u5668\uFF1A
AX

- \u5176\u4E2DAX\u3001BX\u3001CX\u3001DX\u53EF\u5206\u4E3A\u9AD8\u5B57\u8282\u4E0E\u4F4E\u5B57\u8282
AX -<span class="token operator">&gt;</span> AH\u3001AL\u4E24\u4E2A8\u4F4D\u5BC4\u5B58\u5668
BX -<span class="token operator">&gt;</span> BH\u3001BL
CX -<span class="token operator">&gt;</span> CH\u3001CL
DX -<span class="token operator">&gt;</span> DH\u3001DL

<span class="token comment"># debugger\u6307\u4EE4</span>
r\uFF1A\u67E5\u770B\u5F53\u524D\u6240\u6709\u5BC4\u5B58\u5668\u7684\u503C
a: \u5411\u5185\u5B58\u5199\u5165\u6307\u4EE4
t: \u5355\u6B65\u6267\u884C\uFF0C\u4E00\u6B21\u6267\u884C\u4E00\u6761\u6307\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a> \u4F5C\u4E1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F5C\u4E1A\u7B54\u6848\u5982\u4E0B\uFF1A</span>
<span class="token number">1</span>.\u5199\u51FA\u6BCF\u6761\u6C47\u7F16\u6307\u4EE4\u6267\u884C\u540E\u76F8\u5173\u5BC4\u5B58\u5668\u4E2D\u7684\u503C\u3002<span class="token punctuation">(</span>\u81EA\u5DF1\u7F51\u4E0A\u67E5\u9605\u76F8\u5173\u6C47\u7F16\u6307\u4EE4\u7684\u542B\u4E49\u548C\u4F5C\u7528<span class="token punctuation">)</span>
mov ax,62627  <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
<span class="token assign-left variable">AX</span><span class="token operator">=</span><span class="token number">2627</span> <span class="token comment"># \u5728debugger\u91CC\u4E0D\u80FD\u8F93\u5165mov ax, 62627\uFF0C\u4F1A\u62A5\u9519\uFF1B\u53EA\u80FD\u8F93\u5165mov ax, 2627</span>

mov ah,31H   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F       
AX <span class="token operator">=</span> <span class="token number">3127</span>

mov al,23H   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> <span class="token number">3123</span>

<span class="token function">add</span> ax,ax   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F 
AX <span class="token operator">=</span> <span class="token number">6246</span>

mov bx,826CH  <span class="token assign-left variable">BX</span><span class="token operator">=</span>\uFF1F
BX <span class="token operator">=</span> 826C

mov cx,ax   <span class="token assign-left variable">CX</span><span class="token operator">=</span>\uFF1F
CX <span class="token operator">=</span> <span class="token number">6246</span>

mov ax,bx   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> 826C

<span class="token function">add</span> ax,bx   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> 04D8

mov al,bh   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> 0482

mov ah,bl   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> 6C82

<span class="token function">add</span> ah,ah   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> D882

<span class="token function">add</span> al,6    <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> D888

<span class="token function">add</span> al,al   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> D810

mov ax,cx   <span class="token assign-left variable">AX</span><span class="token operator">=</span>\uFF1F
AX <span class="token operator">=</span> <span class="token number">6246</span>

<span class="token comment"># \u8FD9\u9053\u9898\u5FC3\u5F97\uFF1A\u5176\u5B9E\u8FD9\u9053\u9898\u65E0\u975E\u5C31\u662F\u8003\u5BDF\u7684\u5F5316\u4F4D\u5BC4\u5B58\u5668\u4E0D\u80FD\u4FDD\u5B58\u6BD416\u4F4D\u5927\u7684\u7684\u6570\u7684\u65F6\u5019\uFF0C\u4F1A\u600E\u4E48\u505A\uFF1B</span>
<span class="token comment"># \u5F53\u4FDD\u5B58\u7684\u6570\u76EE\u5927\u4E8E\u76EE\u6807\u5BC4\u5B58\u5668\u65F6\uFF0C\u8FDB\u4F4D\u6807\u5FD7\u4F4D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u7136\u540E\u5BC4\u5B58\u5668\u53EA\u4FDD\u7559\u80FD\u4FDD\u5B58\u7684\u6570\u5B57\uFF0C\u8FDB\u4F4D\u6570\u5B57\u5C31\u4E0D\u5728\u4E86\uFF0C\u4E0D\u6E05\u695A\u5230\u5E95\u53BB\u54EA\u4E86\uFF1F\u6211\u731C\u7684\u662F\u653E\u5230\u6807\u5FD7\u5BC4\u5B58\u5668\u4E86\uFF0C\u4F46\u662F\u4E0D\u77E5\u9053\u600E\u4E48\u67E5\u770B\u6807\u5FD7\u5BC4\u5B58\u5668</span>

<span class="token number">2</span>.\u53EA\u80FD\u4F7F\u7528\u76EE\u524D\u5B66\u8FC7\u7684\u6C47\u7F16\u6307\u4EE4\uFF0C\u6700\u591A\u4F7F\u75284\u6761\u6307\u4EE4\uFF0C\u7F16\u7A0B\u8BA1\u7B972\u76844\u6B21\u65B9\u3002 

<span class="token number">3.8086</span>/8088\u901A\u7528\u5BC4\u5B58\u5668\u7684\u901A\u7528\u6027\u8868\u73B0\u5728\u4F55\u5904\uFF1F8\u4E2A\u901A\u7528\u5BC4\u5B58\u5668\u5404\u81EA\u6709\u4F55\u4E13\u95E8\u7684\u7528\u9014\uFF1F\u54EA\u4E9B\u5BC4\u5B58\u5668\u53EF\u4EE5\u4F5C\u4E3A\u5B58\u50A8\u5668\u5BFB\u5740\u65B9\u5F0F\u7684\u6307\u9488\u5BC4\u5B58\u5668\uFF1F

<span class="token number">4</span>.\u4ECE\u7A0B\u5E8F\u5458\u7684\u89D2\u5EA6\u770B\uFF0C8086/8088\u6709\u591A\u5C11\u4E2A\u53EF\u8BBF\u95EE\u768416\u4F4D\u5BC4\u5B58\u5668\uFF1F\u6709\u591A\u5C11\u4E2A\u53EF\u4EE5\u8BBF\u95EE\u76848\u4F4D\u5BC4\u5B58\u5668\uFF1F

<span class="token number">5</span>.\u5BC4\u5B58\u5668AX\u4E0E\u5BC4\u5B58\u5668AH\u548CAL\u7684\u5173\u7CFB\u5982\u4F55\uFF1F\u8BF7\u5199\u51FA\u5982\u4E0B\u7A0B\u5E8F\u7247\u6BB5\u4E2D\u6BCF\u6761\u6307\u4EE4\u6267\u884C\u540E\u5BC4\u5B58\u5668AX\u7684\u5185\u5BB9\uFF1A<span class="token punctuation">(</span>\u81EA\u5DF1\u7F51\u4E0A\u67E5\u9605\u76F8\u5173\u6C47\u7F16\u6307\u4EE4\u7684\u542B\u4E49\u548C\u4F5C\u7528<span class="token punctuation">)</span>

MOV AX,1234H
MOV AL,98H
MOV AH,76H
ADD AL,81H
SUB AL,35H
ADD AL,AH
ADC AH,AL
ADD AX,0D2H
SUB AX,0FFH

<span class="token number">6</span>\u3001\u5904\u7406\u5668\u7684\u901A\u7528\u5BC4\u5B58\u5668\u662F\u5426\u8D8A\u591A\u8D8A\u597D\uFF1F\u901A\u7528\u5BC4\u5B58\u5668\u4E0D\u591F\u7528\u600E\u4E48\u529E\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div>`,5);function p(r,l){return e}var o=s(a,[["render",p]]);export{o as default};
