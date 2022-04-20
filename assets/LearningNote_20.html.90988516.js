import{e as n}from"./app.9efba518.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-14-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E00" tabindex="-1"><a class="header-anchor" href="#_7-14-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E00" aria-hidden="true">#</a> 7.14 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u4E00\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u5728\u7A0B\u5E8F\u4E2D\uFF0C\u5B9A\u4E49\u6211\u4EEC\u5E0C\u671B\u5904\u7406\u7684\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u88AB\u7F16\u8BD1\u3001\u94FE\u63A5\u7A0B\u5E8F\u4F5C\u4E3A\u7A0B\u5E8F\u7684\u4E00\u90E8\u5206\u5199\u5230\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u3002\u5F53\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7684\u7A0B\u5E8F\u88AB\u52A0\u8F7D\u5165\u5185\u5B58\u65F6\uFF0C\u8FD9\u4E9B\u6570\u636E\u4E5F\u540C\u65F6\u88AB\u52A0\u8F7D\u5165\u5185\u5B58\u4E2D\uFF1B</p><p>\u5355\u4EFB\u52A1\u7CFB\u7EDF\u4E2D\uFF0C\u53EF\u6267\u884C\u6587\u4EF6\u6267\u884C\u6D41\u7A0B\uFF1A \uFF081\uFF09\u7531\u5176\u4ED6\u7A0B\u5E8F\uFF08\u5982Debug\u3001command\u6216\u5176\u4ED6\uFF09\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u52A0\u8F7D\u8FDB\u5185\u5B58\uFF1B \uFF082\uFF09\u8BBE\u7F6E CS:IP \u6307\u5411\u7A0B\u5E8F\u7B2C\u4E00\u6761\u8981\u6267\u884C\u7684\u6307\u4EE4\uFF08\u5373\u7A0B\u5E8F\u5165\u53E3\uFF09\uFF0C\u8FDB\u800C\u6267\u884C\u7A0B\u5E8F\u6307\u4EE4\uFF1B \u5176\u4E2D\u600E\u4E48\u77E5\u9053\u8981\u6267\u884C\u7684\u7B2C\u4E00\u6761\u6307\u4EE4\u7684\u5730\u5740\u5462\uFF1F-&gt; \u6839\u636E\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7684\u63CF\u8FF0\u4FE1\u606F\u6765\u786E\u5B9A\u7684\uFF08\u53EF\u6267\u884C\u6587\u4EF6\u7531\u63CF\u8FF0\u4FE1\u606F\u548C\u7A0B\u5E8F\u7EC4\u6210\uFF09 \uFF083\uFF09\u7A0B\u5E8F\u8FD0\u884C\u7ED3\u675F\uFF0C\u8FD4\u56DE\u5230\u52A0\u8F7D\u8005\uFF1B</p><h2 id="\u68C0\u6D4B\u70B9-6-1" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-6-1" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 6.1</h2><p>\uFF081\uFF09\uFF1A \u5B8C\u6574\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:codesg

codesg segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah, 0987h
start:
    mov ax, 0
    mov ds, ax
    mov bx, 0

    mov cx, 8
s:  
    mov ax, [bx]
    mov cs:[bx], ax     ; \u8FD9\u4E24\u884C\u4EE3\u7801\u5373\u5C06 ds:[bx] \u4E2D\u7684\u6570\u636E\u8D4B\u503C\u5230 cs:[bx] \u4E2D
    add bx, 2
    loop s

    mov ax, 4c00h
    int 21h

codesg ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\uFF082\uFF09\uFF1A \u89E3\u6790\uFF1A\u76F8\u6BD4\u7B2C\u4E00\u9898\uFF0C\u8FD9\u91CC\u63D0\u51FA\u7528\u6808\u6765\u4F20\u9001\u6570\u636E\uFF0C\u610F\u601D\u662F\u7528\u6808\u6765\u4FDD\u5B580:0~0:15 \u5355\u5143\u4E2D\u7684\u6570\u636E\uFF0C\u7136\u540E\u51FA\u6808\u5C06\u6570\u636Epop\u5230\u7A0B\u5E8F\u6240\u5728\u7684\u5185\u5B58\u7A7A\u95F4\uFF1B \u5B8C\u6574\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:codesg

codesg segment

    dw 0123h, 0456h, 0789h, 0abch, 0defh, 0fedh, 0cbah,  0987h

    dw 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
start:
    mov ax, cs
    mov ss, ax
    mov sp, 24h     ; \u8BBE\u7F6E\u6808\u9876\u5730\u5740 ss:sp \u4E3A cs:24h

    mov ax, 0
    mov ds, ax
    mov bx, 0
    mov cx, 8       ; \u521D\u59CB\u5316\u8BA1\u6570\u5668

s:
    push [bx]       ; \u5C06 0:[bx] \u5185\u5B58\u7684\u6570\u636E\u538B\u5165\u6808\u4E2D
    pop cs:[bx]     ; \u5C06\u538B\u5165\u6808\u4E2D\u7684\u6570\u636E\u51FA\u6808\u5230 cs:[bx] \u4E2D
    add bx, 2
    loop s
    
    mov ax, 4c00h
    int 21h

codesg ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2>`,10);function r(b,p){return e}var i=s(a,[["render",r]]);export{i as default};
