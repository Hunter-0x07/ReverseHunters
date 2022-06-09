import{e as n}from"./app.7d2ceebc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-33-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341" tabindex="-1"><a class="header-anchor" href="#_7-33-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341" aria-hidden="true">#</a> 7.33 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\uFF09</h1><h2 id="\u95EE\u9898-10-1" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898-10-1" aria-hidden="true">#</a> \u95EE\u9898 10.1</h2><p>\u4E0B\u9762\u7A0B\u5E8F\u8FD4\u56DE\u524D\uFF0Cbx \u4E2D\u7684\u503C\u662F\u591A\u5C11\uFF1F</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs: code

code segment

start:
    mov ax, 1
    mov cx, 3
    call s      ; \u5373 push ip\uFF0C\u7136\u540E ip \u6307\u5411\u8BE5\u6807\u53F7\u7684\u504F\u79FB\u5730\u5740

    mov bx, ax  ; bx = 8
    mov ax, 4c00h
    int 21h
s:
    add ax, ax  ; \u5FAA\u73AF 3 \u6B21\u540E ax = 8
    loop s
    ret         ; \u590D\u4E60\u4E00\u4E0B\uFF0Cret \u6307\u4EE4\u7B49\u4EF7\u4E8E pop IP\uFF0C\u6240\u4EE5\u6B64\u65F6\u5C31\u5E94\u8BE5\u6307\u5411 &quot;mov bx, ax&quot;

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u5B66\u5230\u4E86\u65B0\u4E1C\u897F\uFF0C\u901A\u8FC7 call \u6307\u4EE4\u548C ret \u6307\u4EE4\u6765\u5B9E\u73B0\u5B50\u7A0B\u5E8F\u7684\u673A\u5236\uFF08\u5373\u6211\u770B\u7C7B\u4F3C\u51FD\u6570\u8C03\u7528\uFF09 \u5177\u6709\u5B50\u7A0B\u5E8F\u7684\u6E90\u7A0B\u5E8F\u7684\u6846\u67B6\u89C1\u4E66 P198\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mul \u4E58\u6CD5\u6307\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A\uFF08\u8BE6\u60C5\u89C1 P199\uFF09</span>
mul reg
mul \u5185\u5B58\u5355\u5143
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5BF9\u4E8E\u5B50\u7A0B\u5E8F\u7684\u8C03\u7528\uFF0C\u7528\u5BC4\u5B58\u5668\u6765\u4FDD\u5B58\u53C2\u6570\u548C\u7ED3\u679C\u662F\u6700\u5E38\u7528\u7684\u65B9\u6CD5\u3002 \u4F46\u662F\u5BF9\u4E8E\u9700\u8981\u4F20\u9012\u591A\u4E2A\u53C2\u6570\u548C\u8FD4\u56DE\u591A\u4E2A\u7ED3\u679C\u7684\u5B50\u7A0B\u5E8F\uFF0C\u7528\u5BC4\u5B58\u5668\u663E\u7136\u4E0D\u662F\u4E00\u4E2A\u6709\u6548 \u7684\u529E\u6CD5\uFF0C\u6B64\u65F6\u53EF\u4EE5\u91C7\u7528\u5185\u5B58\u7A7A\u95F4\u6765\u8FDB\u884C\u5B58\u653E\u3002\u6211\u4EEC\u5C06\u6570\u636E\u653E\u5230\u5185\u5B58\u4E2D\uFF0C\u7136\u540E\u5C06\u8BE5\u90E8\u5206\u5185\u5B58 \u7684\u9996\u5730\u5740\u5B58\u653E\u5230\u5BC4\u5B58\u5668\u5373\u53EF\u3002</p><p>\u591A\u4E2A\u53C2\u6570\u7684\u793A\u8303\u4EE3\u7801\u5982\u4E0B\uFF0C\u8FD9\u91CC\u6211\u4EEC\u64CD\u4F5C\u5185\u5B58\u5355\u5143\u65F6\u4F7F\u7528\u4E86\u5FAA\u73AF\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; \u5C06 data \u6BB5\u4E2D\u7684\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5927\u5199

assume cs: code

data segment

    db &#39;conversation&#39;

data ends

code segment

main:
    mov ax, data
    mov ds, ax
    mov si, 0
    mov cx, 12
    call capital

    mov ax, 4c00h
    int 21h

capital:
    and byte ptr [si], 11011111b    ; \u5C06 ds:si \u6240\u6307\u5411\u7684\u5185\u5B58\u5355\u5143\u8F6C\u5316\u4E3A\u5927\u5199
    inc si
    loop capital
    ret

code ends

end main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u9664\u4E86\u7528\u5BC4\u5B58\u5668\u4F20\u9012\u53C2\u6570\u5916\uFF0C\u8FD8\u6709\u4E00\u79CD\u901A\u7528\u7684\u65B9\u6CD5\u662F\u7528\u6808\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u8BE6\u60C5\u89C1 P333</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ECA\u65E5\u5230 P203\uFF0C\u51C6\u5907\u770B 10.12 \u5BC4\u5B58\u5668\u51B2\u7A81\u7684\u95EE\u9898~\uFF0C\u53E6\u5916\u9644\u6CE84\uFF08\u7528\u6808\u4F20\u9012\u53C2\u6570\u8FD8\u6CA1\u770B\u5B8C\uFF09</p>`,13);function r(l,p){return e}var c=s(a,[["render",r]]);export{c as default};
