import{e as n}from"./app.4ecacacb.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-23-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341" tabindex="-1"><a class="header-anchor" href="#_7-23-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341" aria-hidden="true">#</a> 7.23 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>jcxz \u6307\u4EE4\u4E3A\u6709\u6761\u4EF6\u8F6C\u79FB\u6307\u4EE4\uFF0C\u6240\u6709\u7684\u6709\u6761\u4EF6\u8F6C\u79FB\u6307\u4EE4\u90FD\u662F\u77ED\u8F6C\u79FB\uFF1B &quot;jcxz \u6807\u53F7&quot; \u7B49\u4EF7\u4E8E if ((cx) == 0) jmp short \u6807\u53F7;\uFF08\u8FD9\u5C5E\u4E8E c \u8BED\u8A00\u548C\u6C47\u7F16\u8BED\u8A00\u7684\u7EFC\u5408\u63CF\u8FF0\uFF0C\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF09</p><h2 id="\u68C0\u6D4B\u70B9-9-2" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-9-2" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 9.2</h2><p>\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cx, [bx]
    jcxz ok
    add bx, 1
    jmp short s
ok:
    mov dx, bx
    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u89E3\u6790\uFF1A\u4E0A\u8FF0\u4EE3\u7801\u5199\u9519\u4E86\uFF0C\u81EA\u5DF1\u6CA1\u6CE8\u610F\uFF0C\u7136\u540E\u770B\u4E86\u4E0B\u9762\u53C2\u8003\u94FE\u63A5\u540E\u987F\u609F\u3002 \u81EA\u5DF1\u6CA1\u6709\u6CE8\u610F\u9700\u8981\u67E5\u627E\u7684\u662F\u4E00\u4E2A\u5B57\u8282\uFF0C\u800C\u76F4\u63A5\u5C06[bx]\u5904\u7684\u503C mov \u5230\u4E86 cx \u4E2D\uFF1B jcxz\u6307\u4EE4\u5224\u65AD\u7684\u662Fcx\uFF0C\u662F\u4E00\u4E2A\u5B57\uFF0C\u6240\u4EE5\u9700\u8981\u5C06cx\u5BC4\u5B58\u5668\u7684\u9AD8\u4F4D\u8BBE\u7F6E\u4E3A0\uFF1B</p><p>\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.jianshu.com/p/be954bf24afe \u6B63\u786E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

code segment

start:
    mov ax, 2000h
    mov ds, ax
    mov bx, 0
s:
    mov cl, [bx]
    mov ch, 0
    jcxz ok
    inc bx
    jmp short s
ok:
    mov dx, bx
    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u68C0\u6D4B\u70B9 9.2 \u5B8C\u6210\u4E86~\uFF0C\u4ECA\u5929\u505A\u68A6\u60F3\u8D77\u4EE5\u524D\u4E9B\u8BB8\u4F24\u611F\u7684\u4E8B\u60C5\u3002</p><p>\u84E6\u7136\u56DE\u9996\uFF0C\u5DF2\u662F\u7269\u662F\u4EBA\u975E\u3002</p><p>\u4E0D\u8FC7\u4E5F\u66F4\u52A0\u575A\u5B9A\u4E86\u5411\u524D\u7684\u51B3\u5FC3\uFF0C\u6211\u8F88\u5C82\u662F\u84EC\u84BF\u4EBA~</p>`,13);function r(p,l){return e}var i=s(a,[["render",r]]);export{i as default};
