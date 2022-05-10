import{e as n}from"./app.a57237bc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-26-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E09" tabindex="-1"><a class="header-anchor" href="#_7-26-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E8C\u5341\u4E09" aria-hidden="true">#</a> 7.26 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E8C\u5341\u4E09\uFF09</h1><h2 id="\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-9-\u6839\u636E\u6750\u6599\u7F16\u7A0B" aria-hidden="true">#</a> \u5B9E\u9A8C 9 \u6839\u636E\u6750\u6599\u7F16\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9898\u76EE\uFF1A\u5728\u5C4F\u5E55\u4E2D\u95F4\u5206\u522B\u663E\u793A\u7EFF\u8272\u3001\u7EFF\u5E95\u7EA2\u8272\u3001\u767D\u5E95\u84DD\u8272\u7684\u5B57\u7B26\u4E32&#39;welcome to masm!&#39;</span>
<span class="token comment"># \u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.bilibili.com/video/BV1Db411T7vK?p=47</span>

<span class="token comment"># \u5C0F\u7532\u9C7C\u793A\u8303\u4EE3\u7801\u5982\u4E0B\uFF1A</span>

assume cs:code, ds:data, ss:stack

data segment

    db <span class="token string">&#39;welcome to masm!&#39;</span>
    db 02h, 24h, 71h

data ends

stack segment

    dw <span class="token number">8</span> dup<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

stack ends

code segment

start:
    mov ax, data
    mov ds, ax

    mov ax, stack
    mov ss, ax
    mov sp, 10h

    xor bx, bx  <span class="token punctuation">;</span> bx \u6E05\u96F6\uFF0C\u7528\u6765\u7D22\u5F15\u989C\u8272
    mov ax, 0b872h  <span class="token punctuation">;</span> \u7B97\u51FA\u5C4F\u5E55\u7B2C <span class="token number">12</span> \u884C\u4E2D\u95F4\u7684\u663E\u5B58\u7684\u6BB5\u8D77\u59CB\u4F4D\u7F6E\u653E\u5165 ax \u4E2D

    mov cx, <span class="token number">3</span>   <span class="token punctuation">;</span> s3 \u5FAA\u73AF\u63A7\u5236\u884C\u6570\uFF0C\u5916\u5FAA\u73AF\u4E3A <span class="token number">3</span> \u6B21\uFF0C\u56E0\u4E3A\u8981\u663E\u793A\u4E09\u4E2A\u5B57\u7B26\u4E32
s3:
    push cx
    push ax
    push bx

    mov es, ax  <span class="token punctuation">;</span> \u6B64\u65F6 es \u4E3A\u5C4F\u5E55\u7B2C <span class="token number">12</span> \u884C\u4E2D\u95F4\u7684\u663E\u5B58\u7684\u6BB5\u8D77\u59CB\u4F4D\u7F6E

    mov si, <span class="token number">0</span>   <span class="token punctuation">;</span> si \u7528\u6765\u7D22\u5F15\u4EE3\u7801\u5217\u7684\u5B57\u7B26
    mov di, <span class="token number">0</span>   <span class="token punctuation">;</span> di \u7528\u6765\u5B9A\u4F4D\u76EE\u6807\u5217

    mov cx, 10h <span class="token punctuation">;</span> s1 \u5FAA\u73AF\u63A7\u5236\u5B58\u653E\u7684\u5B57\u7B26\uFF0C\u5185\u5FAA\u73AF\u4E3A 10h \u6B21\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u542B 10h \u4E2A\u5B57\u8282
s1:
    mov al, ds:<span class="token punctuation">[</span>si<span class="token punctuation">]</span>
    mov es:<span class="token punctuation">[</span>di<span class="token punctuation">]</span>, al
    inc si
    <span class="token function">add</span> di, <span class="token number">2</span>
    loop s1

    mov di, <span class="token number">1</span>
    pop bx
    mov al, ds:10h<span class="token punctuation">[</span>bx<span class="token punctuation">]</span>
    inc bx

    mov cx, 10h
s2:
    mov es:<span class="token punctuation">[</span>di<span class="token punctuation">]</span>, al
    <span class="token function">add</span> di, <span class="token number">2</span>
    loop s2     <span class="token punctuation">;</span> \u6B64\u5FAA\u73AF\u5B9E\u73B0\u5947\u5730\u5740\u4E2D\u5B58\u653E\u5B57\u7B26\u7684\u989C\u8272\u5C5E\u6027

    pop ax
    <span class="token function">add</span> ax, 0ah

    pop cx
    loop s3

    mov ax, 4c00h
    int 21h

code ends

end start

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u770B\u4E86\u5C0F\u7532\u9C7C\u7684\u4EE3\u7801\uFF0C\u81EA\u5DF1\u8FD8\u9700\u8981\u56DE\u5934\u590D\u4E60\u4E00\u4E9B\u4E1C\u897F\uFF1B\u6240\u4EE5\u8282\u594F\u6162\u4E0B\u6765\u5427~</p>`,5);function p(l,r){return e}var i=s(a,[["render",p]]);export{i as default};
