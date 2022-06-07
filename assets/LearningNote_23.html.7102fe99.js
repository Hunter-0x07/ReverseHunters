import{e as n}from"./app.8845416f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-17-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u56DB" tabindex="-1"><a class="header-anchor" href="#_7-17-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u56DB" aria-hidden="true">#</a> 7.17 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u56DB\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u8FD9\u7AE0\u8282\u6807\u9898\uFF1A\u66F4\u7075\u6D3B\u7684\u5B9A\u4F4D\u5185\u5B58\u5730\u5740\u7684\u65B9\u6CD5~</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># CPU \u63D0\u4F9B\u4E86\u591A\u79CD\u5BFB\u5740\u65B9\u5F0F</span>
<span class="token comment"># \u7528 [bx+idata] \u7684\u65B9\u5F0F\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u5355\u5143</span>
mov ax, <span class="token punctuation">[</span><span class="token number">200</span> + bx<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token number">200</span><span class="token punctuation">[</span>bx<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>.200

<span class="token comment"># \u7528 [bx + si] \u6216 [bx + di] \u7684\u65B9\u5F0F\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u5355\u5143</span>
mov ax, <span class="token punctuation">[</span>bx + si<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span><span class="token punctuation">[</span>si<span class="token punctuation">]</span>

<span class="token comment"># \u7528 [bx + si + idata] \u7684\u5F62\u5F0F\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u5355\u5143</span>
mov ax, <span class="token punctuation">[</span>bx + si + idata<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token punctuation">[</span>bx + idata + si<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, idata<span class="token punctuation">[</span>bx<span class="token punctuation">]</span><span class="token punctuation">[</span>si<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span>.idata<span class="token punctuation">[</span>si<span class="token punctuation">]</span>
\u7B49\u4EF7\u4E8E mov ax, <span class="token punctuation">[</span>bx<span class="token punctuation">]</span><span class="token punctuation">[</span>si<span class="token punctuation">]</span>.idata
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>si\u3001di \u5BC4\u5B58\u5668\u662F 8086 CPU \u4E2D\u548C bx \u5BC4\u5B58\u5668\u529F\u80FD\u76F8\u8FD1\u7684\u5BC4\u5B58\u5668\uFF0C\u7528\u6765\u5B58\u653E\u504F\u79FB\u5730\u5740\uFF1B</p><h2 id="\u5B9E\u9A8C6" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C6" aria-hidden="true">#</a> \u5B9E\u9A8C6</h2><p>\uFF082\uFF09\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs: codesg, ss: stacksg, ds: datasg

stacksg segment

    dw 0, 0, 0, 0, 0, 0, 0, 0

stacksg ends

datasg segment

    db &#39;1. display  &#39;
    db &#39;2. brows    &#39;
    db &#39;3. replace  &#39;
    db &#39;4. modify   &#39;

datasg ends

codesg segment

start:
    mov ax, stacksg
    mov ss, ax
    mov sp, 16  ; \u521D\u59CB\u5316\u6808\u9876\u6307\u9488

    mov ax, datasg
    mov ds, ax
    mov bx, 0

    mov cx, 4   ; \u5916\u5C42\u5FAA\u73AF 4 \u6B21
s0:
    push cx     ; \u4FDD\u5B58\u5916\u5C42\u5FAA\u73AF\u7684\u6B21\u6570
    mov cx, 4   ; \u5185\u5C42\u5FAA\u73AF 4 \u6B21
    mov si, 3   ; \u521D\u59CB\u5316\u4E00\u7EF4\u6570\u7EC4\u6307\u9488
s:
    mov al, [bx][si]
    and al, 11011111b
    mov [bx][si], al
    inc si
    loop s
    
    pop cx      ; \u8FD8\u539F\u5916\u5C42\u5FAA\u73AF\u7684\u6B21\u6570
    add bx, 12  ; \u8C03\u6574 bx \u7684\u503C\u6307\u5411\u4E0B\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4
    loop s0

    mov ax, 4c00h
    int 21h

codesg ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E00\u8282\u4E3B\u8981\u8BB2\u4E86\u591A\u79CD\u5B9A\u4F4D\u5185\u5B58\u5355\u5143\u5730\u5740\u7684\u65B9\u6CD5\uFF0C\u8FD8\u8BB2\u4E86\u7528\u5185\u5B58\u6808\u7ED3\u6784\u6765\u4FDD\u5B58\u4E34\u65F6\u7684\u6570\u636E\u3002 \u8FD8\u884C\uFF0C\u5E76\u4E0D\u96BE~</p>`,10);function p(l,r){return e}var i=s(a,[["render",p]]);export{i as default};
