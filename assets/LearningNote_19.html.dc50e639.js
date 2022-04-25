import{e as n}from"./app.32a9be5d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-13-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341" tabindex="-1"><a class="header-anchor" href="#_7-13-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341" aria-hidden="true">#</a> 7.13 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\uFF09</h1><h2 id="\u5B9E\u9A8C-4-bx-\u548C-loop-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-4-bx-\u548C-loop-\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5B9E\u9A8C 4 [bx]\u548C loop \u7684\u4F7F\u7528</h2><p>\uFF081\uFF09: \u5206\u6790\uFF1A\u5185\u5B58 0:200 ~ 0:23F \u7B49\u4EF7\u4E8E 0020:0 ~ 0023:f\uFF0C\u800C\u6211\u4EEC\u9700\u8981\u4F20\u9001\u7684\u6570\u636E\u4E5F\u662F 0 ~ 63\uFF08\u5373 0 ~ 3fh\uFF09\uFF0C\u6240\u4EE5\u7528 loop \u641E\u5B9A\uFF1B \u7F16\u5199\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

code segment

    mov ax, 0020h
    mov ds, ax

    mov bx, 0
    mov cx, 40h
s:
    mov [bx], bx
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
    
code ends

end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\uFF082\uFF09\uFF1A \u5206\u6790\uFF1A\u9898\u76EE\u548C\u4E0A\u9898\u4E00\u6837\uFF0C\u4F46\u662F\u53EA\u80FD\u4F7F\u7528\u4E5D\u6761\u6307\u4EE4\uFF1F\u53BB\u6389\u7A0B\u5E8F\u8FD4\u56DE\u7684\u4E24\u6761\u6307\u4EE4\uFF0C\u4E5F\u5C31\u53EA\u80FD\u7528 7 \u6761\u6307\u4EE4\uFF1B\u4E0D\u5BF9\uFF0C \u6211\u4E00\u770B\u4E0A\u9053\u9898\uFF0C\u6211\u4E0D\u5C31\u53EA\u7528\u4E869\u6761\u6307\u4EE4\u5417\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\u54C8\u54C8\u5947\u602A\u3002</p><p>\uFF083\uFF09\uFF1A \u9898\u76EE\u4E2D\u6574\u4F53\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B\uFF08\u6284\u5199\u4E00\u904D\u987A\u4FBF\u8865\u5168\u4EE3\u7801\uFF09\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code

code segment
    mov ax, cs
    mov ds, ax
    mov ax, 0020h
    mov es, ax
    mov bx, 0
    mov cx, 1
s:  
    mov al, [bx]
    mov es:[bx], al
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
code ends

end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5206\u6790\uFF1A&quot;mov ax, 4c00h&quot;\u4E4B\u524D\u7684\u6307\u4EE4\uFF0C\u88AB CPU \u6267\u884C\u7684\u7B2C\u4E00\u6761\u6307\u4EE4\u7684\u5185\u5B58\u6BB5\u5730\u5740\u662F\u4FDD\u5B58\u5728 cs \u5BC4\u5B58\u5668\u91CC\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u9996\u5148\u9700\u8981\u4ECE cs \u5BC4\u5B58\u5668\u6307\u5411\u7684\u5185\u5B58 \u83B7\u53D6\u6570\u636E\u590D\u5236\u5230 0:200\uFF08\u5373 0020:0\uFF09\u5185\u5B58\u5730\u5740\u5904\uFF1B\u6240\u4EE5\u7B2C\u4E00\u6761\u6307\u4EE4\u662F cs \u5BC4\u5B58\u5668\u7684\u5730\u5740\uFF1B \u7136\u540E\u4E00\u6B21\u590D\u5236\u4E00\u4E2A\u5B57\u8282\u7684\u8BDD\uFF0C\u90A3\u4E48\u600E\u4E48\u8BA1\u7B97\u9700\u8981\u590D\u5236\u7684\u6240\u6709\u6307\u4EE4\u7684\u5B57\u8282\u6570\uFF08\u5373\u6211\u4EEC\u9700\u8981 loop \u7684\u6B21\u6570\uFF09\uFF1F\u54E6\uFF0C\u6211\u597D\u50CF\u6709\u60F3\u6CD5\u4E86\uFF0C\u65E2\u7136\u6211\u4EEC\u77E5\u9053\u4E86\u9700\u8981\u6267\u884C \u7684\u6307\u4EE4\u7684\u5185\u5B58\u9996\u5730\u5740\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u77E5\u9053 &quot;mov ax, 4c00h&quot; \u7684\u5730\u5740\uFF0C\u7136\u540E\u7528\u5176\u51CF\u53BB\u9996\u5730\u5740\u4E0D\u5C31\u53EF\u4EE5\u5F97\u51FA\u9700\u8981\u590D\u5236\u7684\u5B57\u8282\u6570\u4E86\u5417\uFF1F \u55EF\uFF0C\u90A3\u4E48\u6211\u4EEC\u600E\u4E48\u77E5\u9053 &quot;mov ax, 4c00h&quot;\u7684\u5730\u5740\u5462\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u91CC\u53C2\u8003\u4E86\u7F51\u4E0A\u7684\u89E3\u51B3\u65B9\u6848\uFF1A</span>
https://www.cnblogs.com/Base-Of-Practice/articles/6883892.html
\u6211\u4EEC\u53EF\u4EE5\u5148\u5C06\u8FD9\u6BB5\u4EE3\u7801\u7F16\u8BD1\uFF0C\u7136\u540E debug \u770B\u4E00\u4E0B\uFF0C\u53D1\u73B0\u5BC4\u5B58\u5668 CX \u4FDD\u5B58\u7684\u503C\u5373\u662F\u6574\u6BB5\u6307\u4EE4\u7684\u5B57\u8282\u5927\u5C0F\uFF1B\u7136\u540E\u6211\u4EEC\u518D\u770B\u4E00\u4E0B
\u7A0B\u5E8F\u8FD4\u56DE\u8FD9\u6BB5\u6307\u4EE4\u7684\u5B57\u8282\u5927\u5C0F\uFF0C\u7ECF\u8FC7\u8BA1\u7B97\u662F <span class="token number">5</span> \u4E2A\u5B57\u8282\uFF0C\u6240\u4EE5 <span class="token string">&quot;mov ax, 4c00h&quot;</span> \u8FD9\u6BB5\u6307\u4EE4\u7684\u5927\u5C0F\u662F <span class="token punctuation">(</span>1c - <span class="token number">5</span><span class="token punctuation">)</span>\uFF0C\u537317h\u4E2A\u5B57\u8282\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u4E2D cx \u5E94\u8BE5\u88AB\u8D4B\u503C\u4E3A 17h\uFF1B
\u6240\u4EE5\u6700\u7EC8\u6C47\u7F16\u4EE3\u7801\u5982\u4E0B\uFF1A

assume cs:code

code segment
    mov ax, cs
    mov ds, ax
    mov ax, 0020h
    mov es, ax
    mov bx, <span class="token number">0</span>
    mov cx, 17h
s:  
    mov al, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>
    mov es:<span class="token punctuation">[</span>bx<span class="token punctuation">]</span>, al
    inc bx
    loop s

    mov ax, 4c00h
    int 21h
code ends

end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2>`,10);function p(r,l){return e}var m=s(a,[["render",p]]);export{m as default};
