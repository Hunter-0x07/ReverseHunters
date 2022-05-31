import{e as n}from"./app.b140ef1f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-25-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E8C" tabindex="-1"><a class="header-anchor" href="#_7-25-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E8C" aria-hidden="true">#</a> 7.25 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u4E8C\uFF09</h1><h2 id="\u5B9E\u9A8C8-\u5206\u6790\u4E00\u4E2A\u5947\u602A\u7684\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C8-\u5206\u6790\u4E00\u4E2A\u5947\u602A\u7684\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B9E\u9A8C8 \u5206\u6790\u4E00\u4E2A\u5947\u602A\u7684\u7A0B\u5E8F</h2><p>\u5F85\u5206\u6790\u7A0B\u5E8F\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:codesg

codesg segment

    mov ax, 4c00h   ; \u7A0B\u5E8F\u8FD4\u56DE
    int 21h
start:
    mov ax, 0
s:
    nop     ; nop\u6307\u4EE4\uFF1A\u4EC0\u4E48\u4E5F\u4E0D\u505A\u5360\u4E00\u4E2A\u5B57\u8282
    nop

    mov di, offset s    ; di \u5B58\u653E s \u7684\u504F\u79FB 008h
    mov si, offset s2   ; si \u5B58\u653E s2 \u7684\u504F\u79FB 0020h
    mov ax, cs:[si]     ; \u5C06 jmp short s1 \u7684\u673A\u5668\u7801 EBF6 \u8D4B\u503C\u5230 ax \u5BC4\u5B58\u5668\uFF0C\u5176\u4E2D F6 \u4EE3\u8868\u504F\u79FB -10
    mov cs:[di], ax     ; \u5C06 jmp short s1 \u7684\u673A\u5668\u7801 EBF6 \u8D4B\u503C\u5230 cs:[di] \u4F4D\u7F6E
s0:
    jmp short s     ; \u8DF3\u8F6C\u5230 s \u6307\u4EE4\u5904\uFF0C\u56E0\u4E3Ajmp short s1 \u7B49\u4EF7\u4E8E\u5411\u524D\u504F\u79FB10\u4E2A\u4F4D\u7F6E\uFF0C\u521A\u597D\u5230 mov ax, 4c00h\u6307\u4EE4\u5904\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u80FD\u6B63\u5E38\u7ED3\u675F
s1:
    mov ax, 0
    int 21h
    mov ax, 0
s2:
    jmp short s1
    nop

codesg ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u55EF\uFF0C\u4E94\u4E00\u8FC7\u5B8C\u4E86~\uFF0C\u6B63\u5E38\u5B66\u4E60\uFF01</p>`,6);function r(p,l){return e}var c=s(a,[["render",r]]);export{c as default};
