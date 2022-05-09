import{e as n}from"./app.1f970551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-24-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E00" tabindex="-1"><a class="header-anchor" href="#_7-24-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E00" aria-hidden="true">#</a> 7.24 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u4E00\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>loop \u6307\u4EE4\u4E3A\u77ED\u8F6C\u79FB\uFF0C\u6240\u6709\u7684\u5FAA\u73AF\u6307\u4EE4\u90FD\u662F\u77ED\u8F6C\u79FB\u3002 &quot;loop \u6807\u53F7&quot; \u7B49\u4EF7\u4E8E (cx)--; if ((cx) != 0) jmp short \u6807\u53F7\uFF1B</p><h2 id="\u68C0\u6D4B\u70B9-9-3" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-9-3" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 9.3</h2><p>\u8FD9\u9053\u9898\u9700\u8981\u6CE8\u610F\u4E00\u70B9\u5728\u4E8E\uFF1Aloop \u6307\u4EE4\u4F1A\u5148\u5BF9 cx \u8FDB\u884C\u51CF\u4E00\uFF0C\u4E4B\u540E\u518D\u5224\u5B9Acx\u662F\u5426 \u7B49\u4E8E0\u4E4B\u540E\u518D\u505A\u540E\u7EED\u64CD\u4F5C\uFF1B\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u5148\u5BF9 cx \u8FDB\u884C\u52A0\u4E00\u624D\u884C\uFF1B</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cl, [bx]
    mov ch, 0
    inc cx
    inc bx
    loop s
ok:
    dec bx
    mov dx, bx

    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u505A\u9898\u524D\u591A\u601D\u8003\uFF0C\u6CE8\u610F\u7EC6\u8282\u95EE\u9898\uFF1B</p>`,8);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
