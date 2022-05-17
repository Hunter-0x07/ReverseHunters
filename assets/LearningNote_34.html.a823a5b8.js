import{e as n}from"./app.ebd09711.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-28-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E94" tabindex="-1"><a class="header-anchor" href="#_7-28-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E94" aria-hidden="true">#</a> 7.28 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u4E94\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>ret \u6307\u4EE4\u7B49\u4EF7\u4E8E pop IP retf \u6307\u4EE4\u7B49\u4EF7\u4E8E pop IP \u4E4B\u540E\u518D pop CS</p><p>\u5173\u4E8E\u77ED\u8F6C\u79FB\u3001\u8FD1\u8F6C\u79FB\u3001\u8FDC\u8F6C\u79FB\uFF08\u5373\u6BB5\u95F4\u8F6C\u79FB\uFF09\uFF0C\u53EF\u89C1&quot;LearningNote_27.md&quot;;</p><h2 id="\u68C0\u6D4B\u70B9-10-1" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-10-1" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 10.1</h2><p>\u9898\u76EE\uFF1A\u8865\u5168\u7A0B\u5E8F\uFF0C\u5B9E\u73B0\u4ECE\u5185\u5B58 1000:0000 \u5904\u5F00\u59CB\u6267\u884C\u6307\u4EE4\u3002 \u89E3\u6790\uFF1A\u5F88\u7B80\u5355\uFF0C\u5176\u5B9E\u5C31\u662F\u5229\u7528 retf \u6307\u4EE4\u7684\u539F\u7406\uFF0C\u5148\u538B\u5165\u6808\u4E2D 1000h \u548C 0 \u4E24\u4E2A\u6570\u636E\uFF0C\u540E\u7EED \u4F7F\u7528 retf \u6307\u4EE4\u5C06\u5176\u51FA\u6808\u5230 ip \u5BC4\u5B58\u5668\u548C cs \u5BC4\u5B58\u5668\u5373\u53EF\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

stack segment

    db 16 dup(0)

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16
    mov ax, 1000h
    push ax
    mov ax, 0
    push ax
    retf

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5076\u7136\u95F4\u770B\u5230\u5317\u4EAC\u5927\u5B66\u516C\u4F17\u53F7\u4E00\u7BC7\u6587\u7AE0\u8BF4\uFF1A \u5728\u5317\u4EAC\u5927\u5B66\uFF0C\u6587\u7406\u878D\u5408\uFF0C\u8DE8\u754C\u7814\u7A76\u5341\u5206\u666E\u904D\u3002</p><p>\u4E0D\u5F97\u4E0D\u8BF4\uFF0C\u8FD9\u4E5F\u662F\u6211\u6240\u5411\u5F80\u7684\uFF0C\u8BB0\u5F97\u4F3C\u4E4E\u5112\u5BB6\u6709\u53E5\u8BDD\u662F\uFF1A\u4E00\u7269\u4E0D\u77E5\u800C\u6DF1\u4EE5\u4E3A\u803B\u3002 \u5B89\u5168\u6280\u672F\u5BF9\u4E8E\u6211\u800C\u8A00\uFF0C\u53EF\u4EE5\u8BF4\u662F\u4E00\u95E8\u624B\u827A\u3001\u4E00\u4E2A\u517B\u6D3B\u81EA\u5DF1\u7684\u672C\u9886\u3002 \u800C\u5176\u4ED6\u4E5F\u8981\u8FFD\u6C42\u7684\u662F\u65E0\u9650\u7684\u5176\u5B83\u65B9\u9762\u7684\u77E5\u8BC6\uFF1A \u300A\u5468\u6613\xB7\u7CFB\u8F9E\u4E0A\u300B\u4E2D\u8BF4\u9053\uFF0C\u5F62\u800C\u4E0A\u8005\u8C13\u4E4B\u9053\uFF0C\u5F62\u800C\u4E0B\u8005\u8C13\u4E4B\u5668\u3002</p><p>\u65E2\u8981\u4FEE&quot;\u5668&quot;\uFF0C\u4E5F\u8981\u4FEE&quot;\u9053&quot; -- 2022.5.10 \u6709\u611F\u3002</p>`,11);function r(p,l){return e}var b=s(a,[["render",r]]);export{b as default};
