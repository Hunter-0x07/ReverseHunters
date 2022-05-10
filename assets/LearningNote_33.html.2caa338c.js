import{e as n}from"./app.58bd0ff6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-27-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u56DB" tabindex="-1"><a class="header-anchor" href="#_7-27-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u56DB" aria-hidden="true">#</a> 7.27 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u56DB\uFF09</h1><h2 id="\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B-\u7EED" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B-\u7EED" aria-hidden="true">#</a> \u5B9E\u9A8C 9 \u6839\u636E\u6750\u6599\u7F16\u7A0B\uFF08\u7EED\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># xor\u6307\u4EE4</span>
<span class="token comment"># \u53C2\u8003\u94FE\u63A5\uFF1Ahttp://c.biancheng.net/view/3558.html</span>
\u683C\u5F0F\uFF1Axor destination, <span class="token builtin class-name">source</span>

<span class="token comment"># \u6240\u4EE5 xor bx, bx\u7684\u610F\u601D\u5C31\u663E\u800C\u6613\u89C1\u4E86\u3002</span>
xor bx, bx <span class="token comment"># \u5B83\u4EEC\u662F\u540C\u4E00\u4E2A\u503C\uFF0C\u76F8\u540C\u5373\u4E3A 0\uFF0C\u6240\u4EE5\u7528 xor bx, bx \u6765\u5BF9 bx \u6E05\u96F6\u662F\u6CA1\u95EE\u9898\u7684\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5176\u4E2D\u9898\u76EE\u8981\u6C42\u662F\u5728\u5C4F\u5E55\u4E2D\u95F4\u663E\u793A\u4E09\u884C\u5185\u5BB9\uFF0C\u800C\u5C4F\u5E55\u662F 80 * 25\uFF0C\u6240\u4EE5\u4E2D\u95F4\u4E00\u884C\u5E94\u8BE5\u662F\uFF1A \uFF0825 / 2 \u7684 \u4F59\u6570 + 1\uFF09= \u7B2C 13 \u884C\uFF0C\u5F80\u524D\u4E00\u884C + \u5F80\u540E\u4E00\u884C\uFF1B\u90A3\u4E48\u5373\u7B2C 12 \u884C\uFF0C\u7B2C 13 \u884C\uFF0C\u7B2C 14 \u884C\u4E3A\u4E2D\u95F4\u7684\u884C\u6570\u3002 \u90A3\u4E48\u9996\u5148\u6211\u4EEC\u9700\u8981\u7B97\u51FA\u7B2C 12 \u884C\u7684\u6BB5\u8D77\u59CB\u5730\u5740\u3002</p><p>\u7B2C\u4E8C\u884C\u7684\u8D77\u59CB\u504F\u79FB\u662F 160\uFF0C\u5373 A0H\uFF1B\u6240\u4EE5\u7B97\u7B2C\u51E0\u884C\u7684\u516C\u5F0F\u4E3A\uFF1A160 * (\u7B2C\u51E0\u884C\u7684\u884C\u6570 - 1)\uFF1B \u6240\u4EE5\u7B2C 12 \u884C\u7684\u504F\u79FB\u662F 160 * 11 = 1760\uFF0C\u5373 06E0H\uFF1B\u800C\u6211\u4EEC\u4F1A\u663E\u793A\u5728\u663E\u793A\u5668\u4E0A\u7684\u5185\u5BB9\u7684\u5185\u5B58\u5730\u5740\u8303\u56F4\u662F B8000H ~ B8F9FH\uFF0C\u5373\u663E\u793A\u7F13\u51B2\u533A\u7B2C 0 \u9875\u7684\u5185\u5BB9\uFF1B\u6240\u4EE5\u7B2C 12 \u884C\u7684\u8D77\u59CB\u7269\u7406\u5730\u5740\u5E94\u8BE5\u662F B8000H + 6E0H = B86E0H\uFF1B\u800C\u56E0\u4E3A\u53C8\u8981 \u663E\u793A\u5728\u4E2D\u95F4\uFF0C\u6211\u4EEC\u7684 &#39;welcome to masm!&#39; \u5360\u4E86 16 \u4E2A\u5B57\u8282\uFF0C\u7B97\u4E0A\u5B57\u7B26\u7684\u989C\u8272\u5C5E\u6027\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4E2D\u95F4\u7684 32 \u4E2A\u5B57\u8282\u3002 \u7ECF\u8FC7\u8BA1\u7B97\uFF0C\u5BF9\u4E8E 0 ~ 159 \u7684\u4E2D\u95F4\u4F4D\u7F6E\u7684\u7D22\u5F15\u8303\u56F4\u5E94\u8BE5\u662F 64 ~ 96\uFF08\u5373 40H ~ 60H\uFF0C\u60F3\u4E0D\u51FA\u6765\u5C31\u52A8\u7B14\u5728\u7EB8\u4E0A\u7B97\u4E00\u4E0B\u5C31\u597D\u4E86\uFF09\uFF1B\u6240\u4EE5\u4E2D\u95F4\u4F4D\u7F6E\u7684\u8D77\u59CB\u7269\u7406\u5730\u5740\u662F (B86E0H + 40H = B8720H)\uFF1B\u5176\u7269\u7406\u5730\u5740\u7B49\u4EF7\u4E8E B872H:0000H\uFF08\u6BB5\u5730\u5740:\u504F\u79FB\u5730\u5740\uFF09\u3002\u8FD9\u6837\u4E5F\u65B9\u4FBF\u6211\u4EEC\u540E\u7EED\u7684\u4F7F\u7528\uFF1B</p><p>mov ax, 0b872h ; \u4E3A\u4EC0\u4E480\u5F00\u5934\uFF1F\u56E0\u4E3A\u5B57\u6BCD\u4E0D\u80FD\u4F5C\u4E3A\u5F00\u5934\uFF0C\u6211\u8BB0\u5F97\u8BED\u6CD5\u662F\u8FD9\u6837\u89C4\u5B9A\u7684\uFF0C\u6240\u4EE5\u524D\u9762\u8981\u6DFB\u52A00\uFF1B</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code, ds:data, ss:stack

data segment

    db &#39;welcome to masm!&#39;
    db 02h, 24h, 71h

data ends

stack segment

    dw 8 dup(0)

stack ends

code segment

start:
    mov ax, data
    mov ds, ax

    mov ax, stack
    mov ss, ax
    mov sp, 10h

    xor bx, bx  ; bx \u6E05\u96F6\uFF0C\u7528\u6765\u7D22\u5F15\u989C\u8272
    mov ax, 0b872h  ; \u5C06\u5C4F\u5E55\u7B2C 12 \u884C\u4E2D\u95F4\u663E\u5B58\u7684\u8D77\u59CB\u4F4D\u7F6E\u7684\u6BB5\u5730\u5740\u653E\u5165 ax \u4E2D

    mov cx, 3   ; s3 \u5FAA\u73AF\u63A7\u5236\u884C\u6570\uFF0C\u5916\u5FAA\u73AF\u4E3A 3 \u6B21\uFF0C\u56E0\u4E3A\u8981\u663E\u793A\u4E09\u4E2A\u5B57\u7B26\u4E32
s3:
    push cx     ; \u56E0\u4E3A\u6709\u4E24\u5C42\u5FAA\u73AF\uFF0C\u6240\u4EE5\u9700\u8981\u4FDD\u5B58 cx \u7684\u503C\u5230\u6808\u4E2D\uFF1B
    push ax     
    push bx

    mov es, ax  ; \u6B64\u65F6 es \u4E3A\u5C4F\u5E55\u7B2C 12 \u884C\u4E2D\u95F4\u663E\u5B58\u7684\u8D77\u59CB\u4F4D\u7F6E\u7684\u6BB5\u5730\u5740

    mov si, 0   ; si \u7528\u6765\u7D22\u5F15\u4EE3\u7801\u5217\u7684\u5B57\u7B26\uFF08\u5373\u7D22\u5F15 &#39;welcome to masm!&#39;\u8FD9\u6BB5\u6570\u636E\uFF09
    mov di, 0   ; di \u7528\u6765\u5B9A\u4F4D\u76EE\u6807\u504F\u79FB\u5730\u5740\uFF08\u5373\u7528es:[di]\u6765\u5B9A\u4F4D\u6211\u4EEC\u8981\u5199\u5165\u7684\u5730\u5740\uFF09

    mov cx, 10h ; s1 \u5FAA\u73AF\u63A7\u5236\u5B58\u653E\u7684\u5B57\u7B26\uFF0C\u5185\u5FAA\u73AF\u4E3A 16(10h) \u6B21\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u542B 10h \u4E2A\u5B57\u8282
s1:
    mov al, ds:[si]
    mov es:[di], al
    inc si
    add di, 2       ; \u56E0\u4E3A\u4E24\u4E2A\u5B57\u8282\u4E2D\uFF0C\u5176\u4E2D\u4F4E\u4F4D\u5B57\u8282\u7528\u4E8E\u5B58\u653E\u5B57\u7B26ascii
    loop s1

    mov di, 1
    pop bx
    mov al, ds:10h[bx]
    inc bx

    mov cx, 10h
s2:
    mov es:[di], al
    add di, 2
    loop s2     ; \u6B64\u5FAA\u73AF\u5B9E\u73B0\u5947\u5730\u5740\u4E2D\u5B58\u653E\u5B57\u7B26\u7684\u989C\u8272\u5C5E\u6027

    pop ax
    add ax, 0ah     ; \u8FD9\u91CC\u83B7\u53D6\u4E0B\u4E00\u884C\u4E2D\u95F4\u663E\u5B58\u7684\u8D77\u59CB\u4F4D\u7F6E\u7684\u6BB5\u5730\u5740

    pop cx
    loop s3

    mov ax, 4c00h
    int 21h

code ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E2A\u7A0B\u5E8F\u7406\u89E3\u4E4B\u540E\u5C31\u5E76\u4E0D\u590D\u6742\uFF1A\u4E3B\u8981\u903B\u8F91\u5C31\u662F\u5C06\u6570\u636E\u6BB5\u4E2D\u5B58\u653E\u7684\u5B57\u7B26\u548C\u989C\u8272\u5C5E\u6027\u5206\u522B\u901A\u8FC7\u5FAA\u73AF\u5B58\u653E\u5230 \u4E2D\u95F4\u663E\u5B58\u7684\u4F4D\u7F6E\uFF1B\u5176\u4E2D\u8981\u70B9\uFF1A1.\u8BA1\u7B97\u4E2D\u95F4\u663E\u5B58\u7684\u5730\u5740\uFF1B2.\u4E00\u4E2A\u5B57\u7B26\u5360\u7528\u4E24\u4E2A\u5B57\u8282\uFF0C\u4F4E\u4F4D\u5B57\u8282\u5B58\u653E\u5B57\u7B26ASCII\u7801\uFF0C\u9AD8\u4F4D\u5B57\u8282 \u5B58\u653E\u989C\u8272\u5C5E\u6027\uFF1B3.\u989C\u8272\u5C5E\u6027\u901A\u8FC7\u63A7\u5236\u5B57\u8282\u7684\u4F4D\u6765\u83B7\u5F97\uFF1B4.\u6CE8\u610F\u4F7F\u7528\u6808\u6BB5\u6765\u5B58\u653E\u5916\u5FAA\u73AF\u7684\u6B21\u6570\u4EE5\u53CA\u5176\u4ED6\u4E34\u65F6\u7684\u6570\u636E\uFF1B</p>`,9);function r(p,l){return e}var i=s(a,[["render",r]]);export{i as default};
