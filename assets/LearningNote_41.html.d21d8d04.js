import{e as n}from"./app.b63866cd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-35-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E8C" tabindex="-1"><a class="header-anchor" href="#_7-35-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u4E8C" aria-hidden="true">#</a> 7.35 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u4E8C\uFF09</h1><h2 id="\u5B9E\u9A8C-10-\u7F16\u5199\u5B50\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-10-\u7F16\u5199\u5B50\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B9E\u9A8C 10 \u7F16\u5199\u5B50\u7A0B\u5E8F</h2><p>\uFF081\uFF09\uFF1A \u89E3\u6790\uFF1A\u5176\u4E2D\u7528\u5230\u4E86\u5B9E\u9A8C 9 \u7684\u77E5\u8BC6\uFF0C\u6240\u4EE5\u9996\u5148\u590D\u4E60\u5B9E\u9A8C 9\uFF0C\u6211\u4EEC\u53EF\u77E5\u663E\u793A\u7F13\u51B2\u533A\u9996\u9875\u7684\u8303\u56F4\uFF1AB8000H ~ B8F9FH \u9996\u5148\u6211\u4EEC\u7684\u5B50\u7A0B\u5E8F\u9700\u8981\u6839\u636E\u884C\u53F7\u548C\u5217\u53F7\u8BA1\u7B97\u8981\u5199\u5165\u7684\u663E\u793A\u7F13\u51B2\u533A\u7684\u5730\u5740\u3002</p><p>\u8981\u5199\u5165\u7684\u663E\u793A\u7F13\u51B2\u533A\u7684\u504F\u79FB\u5730\u5740 = \u884C\u53F7 * 160 + \u5217\u53F7 * 2</p><p>\u7136\u540E\u8BA1\u7B97\u4E58\u6CD5\u4F1A\u7528\u5230 mul \u6307\u4EE4\uFF0C\u8FD9\u91CC\u590D\u4E60\u4E00\u4E0B\uFF1A\u4E66 P199 \u8FD9\u91CC\u7684\u884C\u53F7\u548C\u5217\u53F7\u90FD\u662F 8 \u4F4D\u4EE5\u5185\u7684\u6570\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u4E24\u4E2A\u76F8\u4E58\u7684 8 \u4F4D\u7684\u6570\uFF0C \u4E00\u4E2A\u9ED8\u8BA4\u5B58\u653E\u5728 AL \u4E2D\uFF0C\u53E6\u4E00\u4E2A\u653E\u5728 8 \u4F4D reg \u6216\u5185\u5B58\u5B57\u8282\u5355\u5143\u4E2D\u3002\u4E58\u6CD5\u7ED3\u679C\uFF0C\u5BF9\u4E8E8\u4F4D\u6765\u8BF4\u9ED8\u8BA4\u7ED3\u679C\u5B58\u653E\u5728 AX \u4E2D</p><p>\u5B57\u7B26\u5C5E\u6027 = \u5C31\u662F cl\uFF0C\u5176\u4F1A\u653E\u5728\u6BCF\u4E2A\u5B57\u7B26\u7684\u9AD8\u4F4D\u5B57\u8282\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u4F4E\u4F4D\u5B57\u8282\u5B58\u653E\u989C\u8272\u5C5E\u6027\uFF1B</p><p>\u53E6\u5916\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u7528 es:di \u6765\u5B9A\u4F4D\u8981\u5199\u5165\u7684\u663E\u793A\u7F13\u51B2\u533A\u7684\u5730\u5740\u3002</p><p>\u521D\u6B65\u72EC\u7ACB\u5B8C\u6210\u7684\u7A0B\u5E8F\u5982\u4E0B\uFF1A\uFF08\u4F46\u662F\u5B9E\u9645\u6CA1\u6709\u6210\u529F\uFF09\uFF0C\u660E\u5929\u518D\u505A\u4FEE\u6539</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>; \u5728\u5C4F\u5E55\u7684 8 \u884C 3 \u5217\uFF0C\u7528\u7EFF\u8272\u663E\u793A data \u6BB5\u4E2D\u7684\u5B57\u7B26\u4E32
assume cs:code

data segment

    db &#39;Welcome to masm!&#39;, 0

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

main:
    mov dh, 8   ; \u884C\u53F7
    mov dl, 3   ; \u5217\u53F7
    mov cl, 2   ; \u989C\u8272\u5C5E\u6027

    mov ax, data
    mov ds, ax  ; \u521D\u59CB\u5316 ds \u5BC4\u5B58\u5668
    mov si, 0   ; ds:si \u6307\u5411 data \u6570\u636E\u6BB5
    call show_str

    mov ax, 4c00h
    int 21h

show_str:
    mov bx, 0   ; bx \u7528\u6765\u5B58\u653E\u8981\u5199\u5165\u7684\u663E\u793A\u7F13\u51B2\u533A\u7684\u504F\u79FB\u5730\u5740
    mov di, 160
    mov al, dh
    mul di      ; \u884C\u53F7 * 160\uFF0C\u7ED3\u679C\u4FDD\u5B58\u5230 ax \u5BC4\u5B58\u5668
    add bx, ax
    mov di, 2
    mov al, dl
    mul di      ; \u5217\u53F7 * 2\uFF0C\u7ED3\u679C\u4FDD\u5B58\u5230 ax \u5BC4\u5B58\u5668
    add bx, ax  ; bx = \u884C\u53F7 * 160 + \u5217\u53F7 * 2

    mov ax, 0b800h
    mov es, ax   ; \u521D\u59CB\u5316\u6307\u5411\u663E\u793A\u7F13\u51B2\u533A\u7684\u6BB5\u5730\u5740\u4FDD\u5B58\u5230 es \u5BC4\u5B58\u5668

mov_str:
    mov cl, [si] 
    mov ch, 0
    jcxz ok         ; \u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u8BFB\u5230 data \u6570\u636E\u6BB5\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\uFF08\u5373 0\uFF09
    mov al, [si]
    mov es:[bx], al   ; \u5C06 data \u6570\u636E\u6BB5\u4E2D\u7684\u5B57\u7B26\u4E32\u8D4B\u503C\u5230\u663E\u793A\u7F13\u51B2\u533A
    add bx, 1
    mov byte ptr es:[bx], 2
    add bx, 1
    add si, 1
    jmp short mov_str

ok:
    ret

code ends

end main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ECA\u5929\u4E3B\u8981\u590D\u4E60\u4E86c\u6307\u9488\uFF0C\u53C8\u6709\u4E86\u6DF1\u7684\u7406\u89E3\uFF1B\u53E6\u5916\u8FD9\u4E2A\u7A0B\u5E8F\u770B\u6765\u8DD1\u5931\u8D25\u4E86~\uFF0C\u712F\uFF01 \u660E\u5929\u505A\u4FEE\u6539\u5BF9\u7A0B\u5E8F</p>`,11);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
