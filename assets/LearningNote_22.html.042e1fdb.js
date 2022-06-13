import{e as n}from"./app.4ecacacb.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-16-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E09" tabindex="-1"><a class="header-anchor" href="#_7-16-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u5341\u4E09" aria-hidden="true">#</a> 7.16 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u5341\u4E09\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>\u4E3B\u8981\u5B66\u4E60\u4E86 and \u6307\u4EE4\u548C or \u6307\u4EE4\uFF0C\u793A\u4F8B\u7A0B\u5E8F\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>; \u5C06 datasg \u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5927\u5199
; \u5C06 datasg \u4E2D\u7684\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u5C0F\u5199
assume cs: codesg, ds: datasg

datasg segment

    db &#39;BaSiC&#39;
    db &#39;iNfOrMaTiOn&#39;

datasg ends

codesg segment

start:
    mov ax, datasg
    mov ds, ax  ; \u8BBE\u7F6E ds \u6307\u5411 datasg \u6BB5

    mov bx, 0   ; \u8BBE\u7F6E (bx) = 0\uFF0Cds:bx \u6307\u5411&#39;BaSiC&#39;\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD

    mov cx, 5   ; \u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570 5\uFF0C\u56E0\u4E3A &#39;BaSiC&#39;\u67095\u4E2A\u5B57\u6BCD
s:
    mov al, [bx]    ; \u5C06 ASCII \u7801\u4ECE ds:bx \u6240\u6307\u5411\u7684\u5185\u5B58\u5355\u5143\u4E2D\u53D6\u51FA
    and al, 11011111B   ; \u5C06 al \u4E2D\u7684 ASCII \u7801\u7684\u7B2C 5 \u4F4D\u7F6E\u8BBE\u7F6E\u4E3A 0\uFF0C\u53D8\u6210\u5927\u5199\u5B57\u6BCD
    mov [bx], al    ; \u5C06\u8F6C\u53D8\u540E\u7684 ASCII \u7801\u5199\u56DE\u539F\u6765\u7684\u5185\u5B58\u5355\u5143
    inc bx
    loop s

    mov bx, 5   ; \u8BBE\u7F6E\uFF08bx\uFF09= 5\uFF0Cds:bx \u6307\u5411 &#39;iNfOrMaTiOn&#39;\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD

    mov cx, 11  ; \u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570 11\uFF0C\u56E0\u4E3A &#39;iNfOrMaTiOn&#39;\u670911\u4E2A\u5B57\u6BCD
s0:
    mov al, [bx]
    or al, 00100000B    ; \u5C06 al \u4E2D\u7684 ASCII \u7801\u7684\u7B2C 5 \u4F4D\u7F6E\u8BBE\u7F6E\u4E3A1\uFF0C\u53D8\u4E3A\u5C0F\u5199\u5B57\u6BCD
    mov [bx], al
    inc bx
    loop s0

    mov ax, 4c00h
    int 21h

codesg ends

end start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u524D\u4E24\u5929\u6CA1\u5B66\u4E60\u5462~ \u73A9\u8054\u76DF\u53BB\u4E86~</p>`,6);function r(l,b){return e}var c=s(a,[["render",r]]);export{c as default};
