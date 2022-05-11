import{e as n}from"./app.33e4a15e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-15-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E8C" tabindex="-1"><a class="header-anchor" href="#_7-15-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E8C" aria-hidden="true">#</a> 7.15 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u4E8C\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u5728\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F\u4E2D\uFF0C\u6BB5\u540D\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u6807\u53F7\uFF08\u7531\u6C47\u7F16\u7F16\u8BD1\u5668\u7FFB\u8BD1\u6210\u5185\u5B58\u6BB5\u5730\u5740\u7684\u6570\u503C\uFF09\uFF0C\u5B83\u4EE3\u8868\u4E86\u6BB5\u5730\u5740\u3002</p><h2 id="\u5B9E\u9A8C-5-\u7F16\u5199\u3001\u8C03\u8BD5\u5177\u6709\u591A\u4E2A\u6BB5\u7684\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-5-\u7F16\u5199\u3001\u8C03\u8BD5\u5177\u6709\u591A\u4E2A\u6BB5\u7684\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B9E\u9A8C 5 \u7F16\u5199\u3001\u8C03\u8BD5\u5177\u6709\u591A\u4E2A\u6BB5\u7684\u7A0B\u5E8F</h2><p>\uFF081\uFF09\uFF1A \u9898\u76EE\u6C47\u7F16\u6E90\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code, ds:data, ss:stack

data segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah, 0987h

data ends

stack segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16

    mov ax, data
    mov ds, ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]

    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B2C\u4E00\u9898\u7B54\u6848\u5982\u4E0B\uFF1A</span>
<span class="token number">1</span>.\u89E3\u6790\uFF1A\u7A0B\u5E8F\u8FD4\u56DE\u524D\uFF08\u4E0D\u5C31\u662F\u6307\u7A0B\u5E8F\u6267\u884C\u5B8C\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u5417\uFF1F\u54C8\u54C8\uFF09
\u4E0D\u8FC7\u770B\u4EE3\u7801\uFF0C\u6570\u636E\u6BB5\u4E2D\u7684\u6570\u636E\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u4E3A\u5165\u6808\u51FA\u6808\uFF0C\u6570\u636E\u6BB5\u4E2D\u7684\u6570\u636E\u6CA1\u6709\u53D8\u5316\uFF1B

<span class="token number">2</span>.\u89E3\u6790\uFF1A\u8FD9\u4E09\u4E2A\u6BB5\u5BC4\u5B58\u5668\u7684\u503C\uFF0C\u4E0D\u5C31\u662F3\u4E2A\u6807\u53F7\u6240\u7FFB\u8BD1\u8FC7\u6765\u7684\u5185\u5B58\u6BB5\u5730\u5740\u5417\uFF1F\u5BF9\u5427\u3002
<span class="token assign-left variable">cs</span><span class="token operator">=</span>code<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076C<span class="token punctuation">)</span>, <span class="token assign-left variable">ss</span><span class="token operator">=</span>stack<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076B<span class="token punctuation">)</span>, <span class="token assign-left variable">ds</span><span class="token operator">=</span>data<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076A<span class="token punctuation">)</span>

<span class="token number">3</span>.\u89E3\u6790\uFF1A\u8FD9\u4E2A\u95EE\u9898\u95EE\u5F97\u597D\uFF0C\u6211\u4E5F\u53D1\u73B0\u4E86\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u90A3\u5C31\u662F\u770B\u7B2C2\u4E2A\u9898\uFF0C\u6211\u4EEC\u53D1\u73B0cs\u3001ss\u3001ds\u5BC4\u5B58\u5668\u7684\u503C\u7684\u5DEE\u503C\u662F\u76F8\u540C\u7684\uFF08\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\uFF0C\u6211\u9690\u7EA6\u731C\u5230\u8DDF\u4EE3\u7801\u4E2D\u6BB5\u7684\u5B9A\u4E49\u987A\u5E8F\u6709\u5173\u7CFB\uFF1A\u5373\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u4E3A\u6570\u636E\u6BB5\u3001\u6808\u6BB5\u3001\u4EE3\u7801\u6BB5\uFF09\uFF1B
\u6240\u4EE5\u8FD9\u9053\u9898\u7B54\u6848\u4E3A data\u6BB5\u5730\u5740\u4E3A <span class="token punctuation">(</span>X - <span class="token number">2</span><span class="token punctuation">)</span>\u3001stack\u6BB5\u7684\u6BB5\u5730\u5740\u4E3A <span class="token punctuation">(</span>X - <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\uFF082\uFF09\uFF1A \u9898\u76EE\u6C47\u7F16\u6E90\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code, ds:data, ss:stack

data segment

    dw 0123h, 0456h

data ends

stack segment

    dw 0, 0

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16

    mov ax, data
    mov ds, ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]

    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7591\u95EE\u4E00\uFF1A</span>
\u770B\u5230mov sp, <span class="token number">16</span>\u8FD9\u6BB5\u4EE3\u7801\u5C31\u611F\u89C9\u4E0D\u5BF9\u52B2\uFF1B\u660E\u660E\u5B9A\u4E49\u6808\u6BB5\u7684\u65F6\u5019\u53EA\u5B9A\u4E49\u4E86\u4E24\u4E2A\u5B57\uFF0C\u4E3A\u5565sp \u4E3A <span class="token number">16</span>\uFF1F
<span class="token number">16</span>\u4E0D\u662F\u5B9A\u4E498\u4E2A\u5B57\uFF08\u537316\u4E2A\u5B57\u8282\u7684\u65F6\u5019\u624D\u5199\u7684\u5417\uFF1F\u4E0D\u7136\u8FD9\u6808\u9876\u6307\u9488\u6307\u5411\u8FD9\u4E48\u8FDC\u5E72\u561B\uFF1F\u7EE7\u7EED\u5F80\u4E0B\u770B\u5427\uFF09
<span class="token number">1</span>.\u89E3\u6790\uFF1A\u6570\u636E\u4E0D\u4F1A\u6709\u4EFB\u4F55\u53D8\u5316\uFF1B
<span class="token number">2</span>.cs<span class="token operator">=</span>code<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076C<span class="token punctuation">)</span>, <span class="token assign-left variable">ss</span><span class="token operator">=</span>stack<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076B<span class="token punctuation">)</span>, <span class="token assign-left variable">ds</span><span class="token operator">=</span>data<span class="token punctuation">(</span>\u5B9E\u9645\u4E3A\uFF1A076A<span class="token punctuation">)</span>
<span class="token number">3</span>.data\u6BB5\u5730\u5740\u4E3A <span class="token punctuation">(</span>X - <span class="token number">2</span><span class="token punctuation">)</span>\u3001stack\u6BB5\u7684\u6BB5\u5730\u5740\u4E3A <span class="token punctuation">(</span>X - <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># \u600E\u4E48\u611F\u89C9\u6709\u70B9\u91CD\u590D\uFF1F\uFF1F\uFF1F\uFF1F</span>
<span class="token number">4</span>.\u6211\u731C\u60F3\u662F <span class="token number">64</span> KB\uFF1F\u4E3A\u4EC0\u4E48\u8FD9\u6837\u731C\uFF1F\u56E0\u4E3A\u6211\u89C9\u7740\u4F60\u867D\u7136\u6808\u6BB5\u521D\u59CB\u5316\u4E86\u4E24\u4E2A\u5B57\u6570\u636E\uFF0C\u4F46\u662F\u4F60\u4F9D\u7136
\u53EF\u4EE5\u66F4\u6539\u6808\u6BB5\u4E2D\u5176\u4ED6\u504F\u79FB\u5730\u5740\u7684\u6570\u636E\uFF0C\u90A3\u8FD9\u5206\u914D\u8DDF\u6CA1\u5206\u914D\u6709\u5565\u533A\u522B\u5417\uFF1F
\u4EE5\u4E0A\u731C\u60F3\u662F\u9519\u8BEF\u7684\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5728\u7A0B\u5E8F\u52A0\u8F7D\u8FDB\u5185\u5B58\u65F6\uFF0C\u7136\u540E\u67E5\u770B\u4E00\u4E0B\u6B64\u65F6\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u624D\u80FD
\u53D1\u73B0\u7A0B\u5E8F\u52A0\u8F7D\u540E\u6211\u4EEC\u867D\u7136\u5F80\u5185\u5B58\u7A7A\u95F4\u53EA\u521D\u59CB\u5316\u4E864\u4E2A\u5B57\u8282\u7684\u5185\u5B58\uFF0C\u4F46\u662F\u5B9E\u9645\u5374\u5206\u914D\u4E8616\u4E2A\u5B57\u8282\u7684\u7A7A\u95F4\uFF0C\u4E0D\u8DB3\u7684\u630900\u8865\u5168\uFF1B
\u7ED3\u8BBA\uFF1A\u6570\u636E\u6BB5\u548C\u6808\u6BB5\u5728\u7A0B\u5E8F\u52A0\u8F7D\u540E\u5B9E\u9645\u5360\u636E\u7684\u7A7A\u95F4\u90FD\u662F\u4EE516\u4E2A\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u3002\u5982\u679C\u4E0D\u8DB3\uFF0C\u4EE50\u8865\u5168\u586B\u5145\u3002
\u6240\u4EE5\u5F53\u6BB5\u4E2D\u6570\u636E\u4E3A N \u4E2A\u5B57\u8282\u65F6\uFF0C\u8BE5\u6BB5\u5B9E\u9645\u5360\u636E\u7A7A\u95F4\u4E3A\uFF1A
N <span class="token operator">&lt;</span> <span class="token number">16</span>\u65F6\uFF0C\u5B9E\u9645\u5360\u7528 <span class="token number">16</span> \u4E2A\u5B57\u8282\uFF1B
N <span class="token operator">&gt;</span> <span class="token number">16</span>\u65F6\uFF0C\u5B9E\u9645\u5360\u7528\uFF08N/16\u53D6\u6574\u6570 + <span class="token number">1</span>\uFF09* <span class="token number">16</span>\u4E2A\u5B57\u8282\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\uFF083\uFF09\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs: code, ds: data, ss: stack

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16

    mov ax, data
    mov ds, ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]

    mov ax, 4c00h
    int 21h

code ends

data segment

    dw 0123h, 0456h

data ends

stack segment

    dw 0, 0

stack ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.\u89E3\u6790\uFF1Adata \u6BB5\u4E2D\u7684\u6570\u636E\u8FD8\u662F\u4E00\u6837\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF1B

<span class="token number">2</span>.
\u89E3\u6790\uFF1Acs<span class="token operator">=</span>076a, <span class="token assign-left variable">ss</span><span class="token operator">=</span>076e, <span class="token assign-left variable">ds</span><span class="token operator">=</span>076d\uFF0C\u8FD9\u91CC\u5F00\u59CB\u6709\u70B9\u7591\u60D1\u4E86\uFF1B
\u4F46\u662F\u6211\u6000\u7591\u8DDF end start\u7684\u4F4D\u7F6E\u6709\u5173\uFF0C\u8FD9\u91CC\u7684end start\u662F\u653E\u5728\u6700\u540E\u7684\uFF0C\u4F46\u662F\u4E2D\u95F4\u8FD8\u653E\u4E86\u6570\u636E
\u6BB5\u548C\u6808\u6BB5\uFF1B

<span class="token number">3</span>.
\u89E3\u6790\uFF1A
data\u6BB5\u7684\u6BB5\u5730\u5740\u4E3AX + <span class="token number">3</span>\uFF0Cstack\u6BB5\u7684\u6BB5\u5730\u5740\u4E3A X + <span class="token number">4</span>\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\uFF084\uFF09\uFF1A \u89E3\u6790\uFF1A \u6211\u89C9\u5F97\u662F\u7B2C\uFF083\uFF09\u9898\u4E2D\u7684\u7A0B\u5E8F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF0C\u56E0\u4E3A\u5176\u4EE3\u7801\u6BB5\u5728\u7A0B\u5E8F\u7684\u5F00\u5934\uFF1B</p><p>\uFF085\uFF09\uFF1A \u89E3\u6790\uFF1A db\u5E94\u8BE5\u662F&quot;define a byte&quot;\u7684\u610F\u601D\uFF0C\u6240\u4EE5\u5E94\u8BE5\u75288\u4F4D\u5BC4\u5B58\u5668\u6765\u4FDD\u5B58\u8FD9\u4E2A\u6570\u3002</p><p>\u4EE3\u7801\u53C2\u8003\u4E86\u522B\u4EBA\u7684\u7B54\u6848\uFF0C\u5176\u4E2D\u7528\u5230\u4E86\u4E4B\u524D\u6CA1\u7528\u8FC7\u7684\u4E09\u4E2A\u5BC4\u5B58\u5668\uFF0Csi\u3001di\u3001es\uFF1B \u5176\u4E2Dsi\u3001di\u662F8086CPU\u4E2D\u548C bx \u5BC4\u5B58\u5668\u529F\u80FD\u76F8\u8FD1\u7684\u5BC4\u5B58\u5668\uFF0C\u7528\u6765\u5B58\u653E\u504F\u79FB\u5730\u5740\uFF1B es \u662F\u4E0E ds \u5BC4\u5B58\u5668\u529F\u80FD\u76F8\u8FD1\u7684\u5BC4\u5B58\u5668\uFF0C\u7528\u6765\u5B58\u653E\u6BB5\u5730\u5740\uFF1B</p><p>\u5B8C\u6574\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

a segment

    db 1, 2, 3, 4, 5, 6, 7, 8

a ends

b segment

    db 1, 2, 3, 4, 5, 6, 7, 8

b ends

c segment

    db 0, 0, 0, 0, 0, 0, 0, 0

c ends

code segment

start:
    mov ax, a
    mov ds, ax
    mov bx, 0

    mov ax, b
    mov es, ax
    mov si, 0
    mov di, 16

    mov cx, 8
s:
    mov al, ds:[bx]
    add al, es:[si]
    mov es:[di], al
    inc bx
    inc si
    inc di
    loop s

    mov ax, 4c00h
    int 21h

code ends

end start

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u505A\u5B8C\u8FD9\u9053\u9898\u6211\u6709\u70B9\u61F5\u5708\u3002\u3002\u3002mov di, 16\u8FD9\u4E2A\u6307\u4EE4\u6211\u4E0D\u61C2\uFF0C\u4E3A\u4EC0\u4E48 es:[di]\u4FDD\u5B58\u4E86 c \u6BB5\u7684\u6570\u636E\uFF1F\u800C\u4E14\u6211\u8FD8\u53D1\u73B0\uFF0Ca\u6BB5\u91CC\u9762\u4E5F\u4FDD\u5B58\u4E86b\u3001c\u3001code\u6BB5\u7684\u6570\u636E\uFF1B\u5947\u602A\uFF0C\u4E0D\u61C2\u4E3A\u4EC0\u4E48\uFF0C\u6216\u8BB8\u540E\u7EED\u5B66\u4E60\u4E2D \u80FD\u77E5\u9053\u4E3A\u4EC0\u4E48\u3002 \u5BF9\u4E86\uFF0C\u6BB5\u5730\u5740 * 16 + \u504F\u79FB\u5730\u5740 = \u7269\u7406\u5730\u5740\uFF0C\u5DEE\u70B9\u5FD8\u4E86\uFF0C\u4F1A\u4E0D\u4F1A\u8DDF\u8FD9\u4E2A\u6709\u5173\u7CFB\uFF0C\u6211\u60F3\u4E00\u4E0B\uFF1B \u660E\u767D\u4E86\uFF0C\u867D\u7136\u5B9A\u4E49\u7684\u6BB5\u7684\u6BB5\u5730\u5740\u4E0D\u4E00\u6837\uFF0C\u4F46\u662F\u4ED6\u4EEC\u6700\u7EC8\u7684\u7269\u7406\u5730\u5740\u7B97\u51FA\u6765\u662F\u4E00\u6837\u7684\uFF0C\u602A\u4E0D\u5F97\uFF1B</p><p>\uFF086\uFF09\uFF1A \u8FD9\u9053\u9898\u6BD4\u8F83\u7B80\u5355\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs: code

a segment

    dw 1, 2, 3, 4, 5, 6, 7, 8, 9, 0ah, 0bh, 0ch, 0dh, 0eh, 0fh, 0ffh

a ends

b segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

b ends

code segment

start:
    mov ax, a
    mov ds, ax
    mov bx, 0

    mov ax, b
    mov ss, ax
    mov sp, 16

    mov cx, 8
s:
    push [bx]
    add bx, 2
    loop s

    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u4EE5\u4E0A\u5B9E\u9A8C5\u7684\u7B54\u6848\u53C2\u8003\u94FE\u63A5\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E0A\u5B9E\u9A8C5\u7684\u7B54\u6848\u53C2\u8003\u94FE\u63A5\u5982\u4E0B" aria-hidden="true">#</a> \u4EE5\u4E0A\u5B9E\u9A8C5\u7684\u7B54\u6848\u53C2\u8003\u94FE\u63A5\u5982\u4E0B\uFF1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.https://silence-tang.github.io/2021/09/19/
%E7%8E%8B%E7%88%BD%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80%20%E5%AE%9E%E9%AA%8C5/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u55EF\uFF0C\u6709\u610F\u601D\u3002</p>`,25);function p(r,l){return e}var i=s(a,[["render",p]]);export{i as default};
