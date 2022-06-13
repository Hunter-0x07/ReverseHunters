import{e as n}from"./app.4ecacacb.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-32-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E5D" tabindex="-1"><a class="header-anchor" href="#_7-32-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E5D" aria-hidden="true">#</a> 7.32 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u4E5D\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>&quot;call word ptr \u5185\u5B58\u5355\u5143\u5730\u5740&quot; \u7B49\u4EF7\u4E8E push IP jmp word ptr \u5185\u5B58\u5355\u5143\u5730\u5740</p><p>&quot;call dword ptr \u5185\u5B58\u5355\u5143\u5730\u5740&quot; \u7B49\u4EF7\u4E8E push CS push IP jmp dword ptr \u5185\u5B58\u5355\u5143\u5730\u5740\uFF08\u770B\u4E66\u4E0A\u4F8B\u5B50\u5E94\u8BE5\u662F\u9AD8\u4F4D\u5B57\u5B58\u653E CS \u7684\u503C\uFF0C\u4F4E\u4F4D\u5B57\u5B58\u653E IP \u7684\u503C\uFF09</p><h2 id="\u68C0\u6D4B\u70B9-10-5" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-10-5" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 10.5</h2><p>1.\u4E0B\u9762\u7A0B\u5E8F\u6267\u884C\u540E\uFF0Cax \u4E2D\u7684\u6570\u503C\u4E3A\u591A\u5C11\uFF1F</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs: code
stack segment

    dw 8 dup (0)

stack ends

code segment

start:
    mov ax, stack
    mov ss, ax
    mov sp, 16      ; \u521D\u59CB\u5316\u6808\u9876\u6307\u9488\uFF0Csp \u5373 10h

    mov ds, ax      ; \u5C06 stack \u7684\u6BB5\u5730\u5740\u8D4B\u503C\u7ED9\u4E86 ds \u5BC4\u5B58\u5668
    mov ax, 0

    call word ptr ds:[0EH] 
    ; \u89E3\u91CA call word ptr ds:[0EH] \u8FD9\u6BB5\u6C47\u7F16\u4EE3\u7801
    ; \u9996\u5148 push IP \u5BC4\u5B58\u5668\u7684\u503C\u5230\u6808\u4E2D
    ; ds:[0EH] \u8FD9\u6BB5\u4EE3\u7801\u6307\u5411\u7684\u662F\u521A\u624D IP \u5BC4\u5B58\u5668\u7684\u503C\uFF0C\u6240\u4EE5 IP \u5BC4\u5B58\u5668\u7684\u503C\u672C\u8EAB\u6CA1\u53D8\uFF01
    
    inc ax
    inc ax
    inc ax      ; \u65E2\u7136 IP \u5BC4\u5B58\u5668\u503C\u6CA1\u53D8\uFF0C\u90A3 ax \u7167\u5E38\u589E\u52A0\uFF0Cax = 3

    mov ax, 4c00h
    int 21h    

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>2.\u4E0B\u9762\u7684\u7A0B\u5E8F\u6267\u884C\u540E\uFF0Cax \u548C bx \u4E2D\u7684\u6570\u503C\u4E3A\u591A\u5C11\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>assume cs: code

data segment

    dw 8 dup (0)

data ends

code segment

start:
    mov ax, data
    mov ss, ax
    mov sp, 16      ; \u521D\u59CB\u5316\u6808\u9876\u6307\u9488\uFF0C\u5947\u4E86\u602A\u4E86\uFF0C\u8FD9\u6B21\u5C45\u7136\u7528 &quot;data&quot; \u4F5C\u4E3A\u6808\u7684\u540D\u79F0~

    mov word ptr ss:[0], offset s 
    ; \u712F\uFF0C\u5FD8\u4E86\u4E0A\u9762\u7684\u6C47\u7F16\u4EE3\u7801 offset \u7684\u610F\u4E49\u4E86\uFF0C\u590D\u4E60\u4E00\u4E0B\uFF1A
    ; \u7B14\u8BB0\u5728 LearningNote_27.md\uFF0C&quot;offset \u6807\u53F7&quot;\u7684\u610F\u601D\u662F\u53D6\u5F97\u6807\u53F7\u7684\u504F\u79FB\u5730\u5740
    ; \u6240\u4EE5\u8FD9\u8FB9\u5C06 s \u6807\u53F7\u7684\u504F\u79FB\u5730\u5740\u653E\u5230 ss:[0] \u5904\uFF0C\u6CE8\u610F\u662F\u4E24\u4E2A\u5B57\u8282\u54C8

    mov ss:[2], cs      ; \u5C06 cs \u5BC4\u5B58\u5668\u7684\u503C mov \u5230 ss:[2] \u7684\u5730\u65B9
    call dword ptr ss:[0]  ; \u770B\u6765\u4E0A\u9762\u7684\u64CD\u4F5C\u90FD\u662F\u4E3A\u4E86\u8FD9\u6B65\u505A\u51C6\u5907
    ; \u5148 push \u5F53\u524D CS \u548C IP \u5230\u6808\u4E2D,\u7136\u540E ss:[0] \u5904\u7684\u9AD8\u4F4D\u5B57\u6570\u636E\u7ED9 cs\uFF0C\u4F4E\u4F4D\u5B57\u6570\u636E\u7ED9 ip
    ; \u5373 cs \u6BB5\u5730\u5740\u5176\u5B9E\u6CA1\u53D8\uFF0C\u800C ip \u53D8\u4E3A\u6807\u53F7 s \u7684\u504F\u79FB\u5730\u5740\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u6307\u4EE4\u4ECE\u6807\u53F7 s \u5904\u5F00\u59CB\u6267\u884C
    nop     ; \u4EC0\u4E48\u4E5F\u4E0D\u505A\u5360 1 \u4E2A\u5B57\u8282
s:
    mov ax, offset s    ; \u5C06 s \u5904\u7684\u504F\u79FB\u5730\u5740\u79FB\u52A8\u5230 ax \u5BC4\u5B58\u5668
    sub ax, ss:[0cH]    ; \u51CF\u6CD5\u6307\u4EE4\uFF1A\u5373 ax \u5BC4\u5B58\u5668\u7684\u503C\u51CF\u53BB ss:[0cH] \u5185\u5B58\u5730\u5740\u5904\u7684\u503C
    ; ss:[0cH] \u5730\u5740\u5904\u7684\u503C\u662F\u4E4B\u524D\u6267\u884C &quot;call dword ptr ss:[0]&quot;\u8FD9\u6761\u6307\u4EE4\u65F6 push \u7684 ip \u7684\u503C\uFF0C\u56E0\u4E3A\u5148\u538B\u5165\u6808\u7684\u662F cs \u5BC4\u5B58\u5668\u7684\u503C
    ; \u6240\u4EE5 ss:[0cH] \u5904\u5B58\u653E\u7684\u662F\u5F53\u65F6 IP \u7684\u503C\uFF0C\u5F53\u65F6 CS:IP \u6307\u5411 nop \u6307\u4EE4\uFF0C\u800C s \u6807\u53F7\u5904\u7684\u504F\u79FB\u51CF\u53BB nop \u5904\u7684\u504F\u79FB\uFF0C\u5373 nop \u6307\u4EE4\u7684\u5927\u5C0F\uFF0C\u5373 1 \u4E2A\u5B57\u8282
    ; \u6240\u4EE5 ax \u5927\u5C0F\u4E3A 1 \u4E2A\u5B57\u8282\uFF0C1 \u4E2A\u5B57\u8282\u5BF9\u5E94\u7B2C\u4E00\u4E2A\u5730\u5740\uFF0C\u6240\u4EE5 ax = 1h
    
    mov bx, cs
    sub bx, ss:[0eH]    ; ss:[0eH]\u5904\u5B58\u653E\u7684\u5C31\u662F cs \u7684\u503C\uFF0C\u6240\u4EE5 (bx) = (cs) - (cs) = 0
    mov ax, 4c00h       ; \u6240\u4EE5\u6700\u540E ax = 1, bx = 0
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6CA1\u6709\u96BE\u5EA6\uFF0C\u6709\u8010\u5FC3\u7684\u53BB\u5206\u6790\u5C31\u884C\u4E86\uFF0C\u6700\u91CD\u8981\u7684\u662F\u8010\u5FC3\uFF0C\u6211\u8BA4\u4E3A\u6211\u8FD8\u662F\u6BD4\u8F83\u9002\u5408\u505A research\uFF1B</p>`,11);function r(p,l){return e}var i=s(a,[["render",r]]);export{i as default};
