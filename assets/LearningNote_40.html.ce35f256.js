import{e as n}from"./app.89363d42.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-34-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E00" tabindex="-1"><a class="header-anchor" href="#_7-34-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E00" aria-hidden="true">#</a> 7.34 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u4E00\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u4E3A\u4E86\u9632\u6B62\u5B50\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5230\u7684\u5BC4\u5B58\u5668\u548C\u4E3B\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u7684\u5BC4\u5B58\u5668\u51B2\u7A81\u5BFC\u81F4\u903B\u8F91\u51FA\u9519\uFF0C\u89E3\u51B3\u529E\u6CD5\u662F\u5728\u5B50\u7A0B\u5E8F\u7684\u5F00\u59CB\u5C06 \u5B50\u7A0B\u5E8F\u4E2D\u6240\u6709\u7528\u5230\u7684\u5BC4\u5B58\u5668\u7684\u5185\u5BB9\u90FD\u4FDD\u5B58\u8D77\u6765\uFF08\u53EF\u4EE5\u7528\u6808\u6765\u4FDD\u5B58\uFF09\uFF0C\u5728\u5B50\u7A0B\u5E8F\u8FD4\u56DE\u524D\u518D\u6062\u590D\u3002\uFF08\u8BE6\u60C5\u5173\u6CE8\uFF1AP205\u9875\uFF09 \u793A\u4F8B\u7A0B\u5E8F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; \u5C06 data \u6570\u636E\u6BB5\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5927\u5199\uFF0C\u5B57\u7B26\u4E32\u4EE5 0 \u7ED3\u5C3E
assume cs:code

data segment

    db &#39;word&#39;, 0
    db &#39;unix&#39;, 0
    db &#39;wind&#39;, 0
    db &#39;good&#39;, 0

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

main:
    mov ax, data
    mov ds, ax      ; \u521D\u59CB\u5316 ds \u5BC4\u5B58\u5668

    mov ax, stack
    mov ss, ax      
    mov sp, 16      ; \u521D\u59CB\u5316\u6808\u9876\u6307\u9488

    mov bx, 0       ; \u7528 bx \u5BC4\u5B58\u5668\u4E34\u65F6\u4FDD\u5B58 si \u7684\u503C
    mov cx, 4
s:
    mov si, bx      ; ds:[si] \u6307\u5411 data \u6570\u636E\u6BB5
    call capital    ; \u8C03\u7528 capital \u51FD\u6570
    add bx, 5       ; \u8BA9 ds:[si] \u6307\u5411\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E32\u5F00\u5934\u5B57\u7B26
    loop s

    mov ax, 4c00h
    int 21h

capital:
    push cx         ; \u9996\u5148\u5C06\u5B50\u7A0B\u5E8F\u4E2D\u8981\u4F7F\u7528\u5230\u7684\u5BC4\u5B58\u5668\u503C\u5165\u6808
    push si

change:
    mov cl, [si]    ; \u5C06\u6570\u636E\u6BB5\u7684\u5355\u4E2A\u5B57\u8282\u4FDD\u5B58\u5230 cl \u5BC4\u5B58\u5668\u4E2D
    mov ch, 0
    jcxz ok         ; \u5982\u679C cx \u5BC4\u5B58\u5668\u4E3A 0\uFF0C\u5219\u8FD4\u56DE
    and byte ptr [si], 11011111b    ; \u8F6C\u5316\u4E3A\u5927\u5199
    inc si
    jmp short change

ok:
    pop si
    pop cx           ; \u6062\u590D\u5B50\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5230\u7684\u7684\u5BC4\u5B58\u5668\u503C
    ret

code ends

end main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u55EF~\uFF0C\u7EE7\u7EED\u4E0B\u8282\u505A\u5B9E\u9A8C 10</p>`,6);function r(p,l){return e}var i=s(a,[["render",r]]);export{i as default};
