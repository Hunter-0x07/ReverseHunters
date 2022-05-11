import{e as n}from"./app.a7fddaf4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-22-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E5D" tabindex="-1"><a class="header-anchor" href="#_7-22-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E5D" aria-hidden="true">#</a> 7.22 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u4E5D\uFF09</h1><h2 id="\u68C0\u6D4B\u70B9-9-1" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-9-1" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 9.1</h2><p>\uFF081\uFF09\uFF1A \u89E3\u6790\u9898\u76EE\uFF1A\u9996\u5148&quot;jmp word&quot;\u8BF4\u660E\u662F\u6BB5\u5185\u8F6C\u79FB\uFF0C\u7136\u540E\u9700\u8981\u8DF3\u5230\u7B2C\u4E00\u6761\u6307\u4EE4\u7684\u8BDD\u90A3\u5C31\u610F\u5473\u7740IP\u9700\u8981 \u53D8\u4E3A 0\uFF0C\u4E5F\u5C31\u662F ds:[bx + 1] \u5904\u8D77\u59CB\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u5B57\u7684 0 \u5373\u53EF\uFF1B \u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

data segment

    dd 0

data ends

code segment

start:
    mov ax, data
    mov ds, ax
    mov bx, 0
    jmp word ptr [bx + 1]

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\uFF082\uFF09\uFF1A \u8FD9\u4E2A\u9898\u76EE\u4E5F\u6CA1\u4EC0\u4E48\u96BE\u5EA6\uFF0C\u5C31\u662F\u9700\u8981\u5C06 CS:IP \u540C\u65F6\u90FD\u6539\u4E3A0\u5C31\u884C\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

data segment

    dd 12345678H

data ends

code segment

start:
    mov ax, data
    mov ds, ax
    mov bx, 0
    mov word ptr [bx], 0
    mov word ptr [bx+2], cs
    jmp dword ptr ds:[0]

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\uFF083\uFF09\uFF1A \u7B80\u5355\uFF0C(cs) = 0006H, (ip) = 00BEH</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E60\u9898\u8FD8\u884C\uFF0C\u6CA1\u5565\u96BE\u5EA6\u3002</p>`,9);function r(p,l){return e}var i=s(a,[["render",r]]);export{i as default};
