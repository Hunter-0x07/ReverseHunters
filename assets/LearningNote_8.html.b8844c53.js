import{e as n}from"./app.0064a39e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-02-\u901A\u7528\u5BC4\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#_7-02-\u901A\u7528\u5BC4\u5B58\u5668" aria-hidden="true">#</a> 7.02 \u901A\u7528\u5BC4\u5B58\u5668</h1><h2 id="\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u5F97" aria-hidden="true">#</a> \u5FC3\u5F97</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u7528\u5BC4\u5B58\u5668</span>
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

- \u76EE\u524D\u5B66\u8FC7\u7684\u6C47\u7F16\u6307\u4EE4\uFF1Fadd,mov
<span class="token comment"># \u56E0\u4E3A 2^4 = 16\uFF0C\u6240\u4EE5\u5982\u4E0B\u53EF\u4EE5\u8BA1\u7B97\u51FA 16</span>
mov ax, <span class="token number">2</span>
<span class="token function">add</span> ax, ax  <span class="token comment"># ax = 4</span>
<span class="token function">add</span> ax, ax  <span class="token comment"># ax = 8</span>
<span class="token function">add</span> ax, ax  <span class="token comment"># ax = 16</span>

<span class="token number">3.8086</span>/8088\u901A\u7528\u5BC4\u5B58\u5668\u7684\u901A\u7528\u6027\u8868\u73B0\u5728\u4F55\u5904\uFF1F8\u4E2A\u901A\u7528\u5BC4\u5B58\u5668\u5404\u81EA\u6709\u4F55\u4E13\u95E8\u7684\u7528\u9014\uFF1F\u54EA\u4E9B\u5BC4\u5B58\u5668\u53EF\u4EE5\u4F5C\u4E3A\u5B58\u50A8\u5668\u5BFB\u5740\u65B9\u5F0F\u7684\u6307\u9488\u5BC4\u5B58\u5668\uFF1F
<span class="token comment"># \u9996\u5148\u80FD\u56DE\u7B54\u7B2C\u54EA\u4E9B\u5BC4\u5B58\u5668\u53EF\u4EE5\u4F5C\u4E3A\u5B58\u50A8\u5668\u5BFB\u5740\u65B9\u5F0F\u7684\u6307\u9488\u5BC4\u5B58\u5668\uFF1F</span>
\u4E24\u4E2A\u53D8\u5740\u5BC4\u5B58\u5668\uFF1ASI\u3001DI\uFF1B\u4E00\u4E2A\u6570\u636E\u5BC4\u5B58\u5668BX\uFF1B\u4E00\u4E2A\u6307\u9488\u5BC4\u5B58\u5668BP\uFF1B

<span class="token comment"># \u4EE5\u4E0B\u4E24\u4E2A\u7B54\u6848\u90FD\u6765\u6E90\u4E8E\uFF1Ahttps://blog.csdn.net/small_fish__/article/details/7176410</span>
<span class="token comment"># 8086/8088\u901A\u7528\u5BC4\u5B58\u5668\u7684\u901A\u7528\u6027\u8868\u73B0\u5728\u4F55\u5904\uFF1F</span>
\u8FD9\u4E2A\u662F\u6284\u7684\u7F51\u4E0A\u7684\uFF0C\u56E0\u4E3A\u6BD5\u7ADF\u76EE\u524D\u5BF9\u5404\u4E2A\u5BC4\u5B58\u5668\u7684\u4F7F\u7528\u8F83\u5C11\uFF0C\u7528\u591A\u4E86\u5E94\u8BE5\u5C31\u660E\u767D\u4E86\uFF1B
\u8FD9\u4E9B\u5BC4\u5B58\u5668\u9664\u4E86\u5404\u81EA\u89C4\u5B9A\u7684\u4E13\u95E8\u7528\u9014\u5916\uFF0C\u5747\u53EF\u4EE5\u7528\u4E8E\u4F20\u9001\u548C\u6682\u5B58\u6570\u636E\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u7B97\u672F\u903B\u8F91\u8FD0\u7B97\u4E2D\u7684\u64CD\u4F5C
\u6570\u548C\u8FD0\u7B97\u7ED3\u679C\uFF1B

<span class="token comment"># 8\u4E2A\u901A\u7528\u5BC4\u5B58\u5668\u5404\u81EA\u6709\u4F55\u4E13\u95E8\u7684\u7528\u9014</span>
<span class="token number">8</span>\u4E2A\u901A\u7528\u5BC4\u5B58\u5668\u7684\u4E13\u95E8\u7528\u9014\u5982\u4E0B\uFF1A
AX \u5B57\u4E58\u6CD5\uFF0C\u5B57\u9664\u6CD5\uFF0C\u5B57I/O <span class="token comment"># \u5B57\u5373WORD\u7C7B\u578B\uFF0C\u53602\u4E2A\u5B57\u8282\uFF0C\u800CAX\u5BC4\u5B58\u5668\u521A\u597D16\u4F4D</span>
BX \u5B58\u50A8\u5668\u6307\u9488
CX \u4E32\u64CD\u4F5C\u6216\u5FAA\u73AF\u63A7\u5236\u4E2D\u7684\u8BA1\u6570\u5668 <span class="token comment"># \u4E32\u64CD\u4F5C\u4E0D\u77E5\u9053\u662F\u5565\uFF1F\u540E\u7EED\u5E94\u8BE5\u4F1A\u5B66</span>
DX \u5B57\u4E58\u6CD5\uFF0C\u5B57\u51FA\u53D1\uFF0C\u95F4\u63A5I/O <span class="token comment"># \u611F\u89C9\u8DDF AX \u5BC4\u5B58\u5668\u4F5C\u7528\u6BD4\u8F83\u50CF</span>
<span class="token comment"># \u4EE5\u4E0B\u5BC4\u5B58\u5668\u90FD\u6CA1\u7528\u8FC7\u3002\u3002\u3002</span>
SI \u5B58\u50A8\u5668\u6307\u9488\uFF08\u4E32\u64CD\u4F5C\u4E2D\u7684\u6E90\u6307\u9488\uFF09
DI \u5B58\u50A8\u5668\u6307\u9488\uFF08\u4E32\u64CD\u4F5C\u4E2D\u7684\u76EE\u7684\u6307\u9488\uFF09
BP \u5B58\u50A8\u5668\u6307\u9488\uFF08\u5B58\u50A8\u5806\u6808\u7684\u6307\u9488\uFF09
SP \u5806\u6808\u6307\u9488

<span class="token number">4</span>.\u4ECE\u7A0B\u5E8F\u5458\u7684\u89D2\u5EA6\u770B\uFF0C8086/8088\u6709\u591A\u5C11\u4E2A\u53EF\u8BBF\u95EE\u768416\u4F4D\u5BC4\u5B58\u5668\uFF1F\u6709\u591A\u5C11\u4E2A\u53EF\u4EE5\u8BBF\u95EE\u76848\u4F4D\u5BC4\u5B58\u5668\uFF1F
\u4E0D\u6E05\u695A\uFF0C\u8FD8\u662F\u67E5\u4E00\u67E5\uFF1B
<span class="token comment"># \u53C2\u8003\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/small_fish__/article/details/7176410</span>
\u4ECE\u7A0B\u5E8F\u5458\u7684\u89D2\u5EA6\u770B\uFF0C8086/8088\u670914\u4E2A\u53EF\u8BBF\u95EE\u768416\u4F4D\u5BC4\u5B58\u5668\uFF1B\u67098\u4E2A\u53EF\u8BBF\u95EE\u76848\u4F4D\u5BC4\u5B58\u5668\uFF1B
\u770B\u4E86\u7B54\u6848\uFF0C\u660E\u767D\u5565\u610F\u601D\u4E86\uFF0C\u5176\u4E2DAX\u3001BX\u3001CX\u3001DX\u5BC4\u5B58\u5668\u90FD\u53EF\u4EE5\u5206\u9AD8\u4F4D\u5B57\u8282\u548C\u4F4E\u4F4D\u5B57\u8282\uFF0C\u5206\u522B
\u4E3AAH\u3001AL\u3001BH\u3001BL\u3001CH\u3001CL\u3001DH\uFF0CDL\uFF1B

<span class="token number">5</span>.\u5BC4\u5B58\u5668AX\u4E0E\u5BC4\u5B58\u5668AH\u548CAL\u7684\u5173\u7CFB\u5982\u4F55\uFF1F\u8BF7\u5199\u51FA\u5982\u4E0B\u7A0B\u5E8F\u7247\u6BB5\u4E2D\u6BCF\u6761\u6307\u4EE4\u6267\u884C\u540E\u5BC4\u5B58\u5668AX\u7684\u5185\u5BB9\uFF1A<span class="token punctuation">(</span>\u81EA\u5DF1\u7F51\u4E0A\u67E5\u9605\u76F8\u5173\u6C47\u7F16\u6307\u4EE4\u7684\u542B\u4E49\u548C\u4F5C\u7528<span class="token punctuation">)</span>

<span class="token comment"># \u505A\u8FD9\u9053\u9898\u7684\u65F6\u5019\u6211\u53D1\u73B0\u56E0\u4E3A\u51CF\u6CD5\u4F1A\u6D89\u53CA\u5230\u8D1F\u6570\uFF0C\u6211\u611F\u89C9\u548C\u6807\u5FD7\u4F4D\u626F\u5230\u5173\u7CFB\uFF0C\u5148\u67E5\u4E00\u67E5\u6807\u5FD7\u4F4D\u76F8\u5173\u8D44\u6599</span>

MOV AX,1234H <span class="token comment"># \u6B64\u65F6AX\u4E3A 1234</span>
MOV AL,98H <span class="token comment"># \u6B64\u65F6AX \u4E3A 1298</span>
MOV AH,76H <span class="token comment"># \u6B64\u65F6AX \u4E3A 7698</span>
ADD AL,81H <span class="token comment"># \u6B64\u65F6AX \u4E3A 7619\uFF0C\u8FD9\u91CCAX\u7684\u4F4E\u4F4D\u5B57\u8282\u8FDB\u4F4D\u4E86\uFF0C\u8FDB\u4F4D\u6807\u5FD7\u4F4DNC\u53D8\u6210\u4E86CY</span>
SUB AL,35H <span class="token comment"># \u6B64\u65F6AX \u4E3A 76E4\uFF0CSUB\u4E3A\u51CF\u6CD5\u6307\u4EE4</span>
ADD AL,AH <span class="token comment"># \u6B64\u65F6AX \u4E3A 765A</span>
ADC AH,AL <span class="token comment"># \u6B64\u65F6AX \u4E3A D15A\uFF0CADC\u662F\u5E26\u8FDB\u4F4D\u52A0\u6CD5\u6307\u4EE4\uFF0C\u5B83\u5229\u7528\u4E86CF\u4F4D\u4E0A\u8BB0\u5F55\u7684\u8FDB\u4F4D\u503C\uFF0C</span>
<span class="token comment"># \u63A5\u4E0A\u4E00\u884C\uFF0C\u6240\u4EE5ADC AH,AL =&gt; AH = AH + AL + CF = 76 + 5A + 1 = D1\uFF0C\u6B64\u65F6CF\u4F4D\u6062\u590D0\uFF08\u5373NC\uFF09</span>
ADD AX,0D2H <span class="token comment"># \u6B64\u65F6AX \u4E3AD22C</span>
SUB AX,0FFH <span class="token comment"># \u6B64\u65F6AX \u4E3A D12D</span>

<span class="token number">6</span>\u3001\u5904\u7406\u5668\u7684\u901A\u7528\u5BC4\u5B58\u5668\u662F\u5426\u8D8A\u591A\u8D8A\u597D\uFF1F\u901A\u7528\u5BC4\u5B58\u5668\u4E0D\u591F\u7528\u600E\u4E48\u529E\uFF1F
<span class="token comment"># \u53C2\u8003\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/small_fish__/article/details/7176410</span>
\u7B54\uFF1A   \u5904\u7406\u5668\u7684\u901A\u7528\u5BC4\u5B58\u5668\u5E76\u975E\u8D8A\u591A\u8D8A\u597D\uFF0C\u56E0\u4E3A\u5982\u679C\u5904\u7406\u5668\u7684\u901A\u7528\u5BC4\u5B58\u5668\u6570\u91CF\u592A\u591A\uFF0C\u52BF\u5FC5
       \u9020\u6210\u5904\u7406\u5668\u7684\u6210\u672C\u589E\u52A0\uFF0C\u540C\u65F6\u4E5F\u589E\u52A0\u4E86\u5904\u7406\u5668\u8BBE\u8BA1\u7684\u590D\u6742\u5EA6\uFF1B
       \u5982\u679C\u901A\u7528\u5BC4\u5B58\u5668\u4E0D\u591F\u7528\uFF0C\u5E94\u8BE5\u91C7\u7528\u5185\u5B58\u4E2D\u7684\u5B58\u50A8\u5355\u5143\u4EE3\u66FF\uFF0C\u4E0D\u8FC7\u901F\u5EA6\u4E0A\u8981\u6709\u6240\u727A\u7272\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br></div></div>`,5);function p(l,r){return e}var o=s(a,[["render",p]]);export{o as default};
