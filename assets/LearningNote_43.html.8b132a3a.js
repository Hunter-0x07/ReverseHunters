import{e as n}from"./app.172bf8d3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-37-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u56DB" tabindex="-1"><a class="header-anchor" href="#_7-37-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u56DB" aria-hidden="true">#</a> 7.37 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u56DB\uFF09</h1><h2 id="\u5B9E\u9A8C-10-\u7F16\u5199\u5B50\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-10-\u7F16\u5199\u5B50\u7A0B\u5E8F" aria-hidden="true">#</a> \u5B9E\u9A8C 10 \u7F16\u5199\u5B50\u7A0B\u5E8F</h2><p>\uFF083\uFF09\uFF1A \u72EC\u7ACB\u5B8C\u6210\u7A0B\u5E8F\u5982\u4E0B\uFF1A</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:code, ds:data, ss:stack

data segment

    db 10 dup (10)

data ends

stack segment

    dw 8 dup (0)

stack ends

code segment

main:
    mov ax, stack
    mov ss, ax
    mov sp, 10h         ; \u521D\u59CB\u5316\u6808\u6BB5

    mov ax, 12666       
    mov bx, data
    mov ds, bx
    mov si, 0
    call dtoc

    mov dh, 8       ; dh \u4FDD\u5B58\u884C\u53F7
    mov dl, 3       ; dl \u4FDD\u5B58\u5217\u53F7
    mov cl, 2       ; cl \u4FDD\u5B58\u989C\u8272\u5C5E\u6027
    call show_str   ; \u8C03\u7528 show_str \u5B50\u7A0B\u5E8F\u5C06 ds:si \u7684\u6570\u636E\u590D\u5236\u5230\u663E\u793A\u7F13\u51B2\u533A\u7136\u540E\u663E\u793A\u51FA\u6765

    mov ax, 4c00h
    int 21h

dtoc:
    push si         ; \u4FDD\u5B58\u539F\u59CB\u4E3B\u7A0B\u5E8F\u5BC4\u5B58\u5668\u7684\u503C
    push bx
    push dx         

    ; \u9996\u5148\u7B2C\u4E00\u6B65\u662F\u6C42\u51FA\u5341\u8FDB\u5236\u6570\u636E 12666 \u7684\u6BCF\u4E00\u4F4D\u503C
    ; \u7136\u540E\u5C06\u6BCF\u4E00\u4F4D\u52A0\u4E0A 30H \u8F6C\u6362\u4E3A\u5B57\u7B26\u7684 ASCII \u7801\u5E76\u4FDD\u5B58\u5230 data \u6570\u636E\u6BB5
    ; \u56E0\u4E3A 12666 / 10 \u5546\u4E3A 1266\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u7528 16 \u4F4D\u9664\u6CD5
    mov bx, 10      ; bx \u7528\u770B\u6765\u4FDD\u5B58\u9664\u6570

conti_cal:
    mov dx, 0       ; \u88AB\u9664\u6570\u9AD8\u4F4D\u7F6E\u4E3A 0\uFF0C\u4F4E\u4F4D\u9ED8\u8BA4\u4E3A ax \u5BC4\u5B58\u5668 word \u578B\u6570\u636E
    div bx          ; 12666 / 10\uFF0C\u5546\u4FDD\u5B58\u5728 AX \u5BC4\u5B58\u5668\u4E2D\uFF0C\u4F59\u6570\u4FDD\u5B58\u5728 DX \u5BC4\u5B58\u5668\u4E2D
    add dx, 30h     ; \u8F6C\u6362\u4E3A\u5BF9\u5E94\u5341\u8FDB\u5236\u5B57\u7B26\u7684 ASCII \u7801
    mov word ptr [si], dx    ; \u5C06\u5B57\u7B26 ASCII \u7801\u4FDD\u5B58\u5230 ds:si \u6570\u636E\u6BB5\u4E2D
    add si, 1     

    ; \u5224\u65AD\u5546\u662F\u5426\u4E3A 0\uFF0C\u5982\u679C\u4E3A 0 \u5219\u7ED3\u675F\u7A0B\u5E8F
    mov cx, ax
    jcxz over       

    ; \u5546\u4E0D\u4E3A 0 \u5219\u7EE7\u7EED\u8BA1\u7B97
    jmp short conti_cal

over:
    pop dx          ; \u6062\u590D\u539F\u59CB\u4E3B\u7A0B\u5E8F\u5BC4\u5B58\u5668\u7684\u503C
    pop bx
    pop si          
    ret

show_str:
    push si     ; \u4FDD\u5B58\u539F\u59CB\u4E3B\u7A0B\u5E8F\u5BC4\u5B58\u5668\u7684\u503C 
    push cx    

    ; \u8BA1\u5212\u7528 es:di \u6765\u5B9A\u4F4D\u8981\u5199\u5165\u7684\u663E\u5B58\u7F13\u51B2\u533A\u7684\u9996\u5730\u5740
    mov al, 160
    mul dh
    mov bx, ax      ; \u8BA1\u7B97 160 * \u884C\u53F7\u4FDD\u5B58\u5230 bx \u5BC4\u5B58\u5668
    mov al, 2
    mul dl
    add bx, ax      ; bx \u6B64\u65F6 = 160 * \u884C\u53F7 + 2 * \u5217\u53F7
    
    mov ax, 0b800h
    mov es, ax  ; es \u4FDD\u5B58\u8981\u5199\u5165\u7684\u663E\u5B58\u7F13\u51B2\u533A\u7684\u6BB5\u5730\u5740
    mov di, 0
    mov al, cl  ; al \u5B58\u653E\u989C\u8272\u5C5E\u6027

change:
    mov ch, 0
    mov cl, [si]    ; cl \u5B58\u653E\u6E90\u5B57\u7B26
    jcxz ok         ; \u5982\u679C\u6E90\u5B57\u7B26\u4E32\u9047\u5230 0 \u5219\u8FD4\u56DE
    mov es:[bx + di], cl    ; \u5C06\u6E90\u5B57\u7B26\u5B58\u653E\u5230\u76EE\u6807\u663E\u5B58\u4F4D\u7F6E
    mov es:[bx + di + 1], al    ; \u5C06\u989C\u8272\u5C5E\u6027\u5B58\u653E\u5230\u76EE\u6807\u663E\u5B58\u4F4D\u7F6E
    add di, 2
    add si, 1
    jmp short change

ok:
    pop cx      ; \u6062\u590D\u539F\u59CB\u4E3B\u7A0B\u5E8F\u5BC4\u5B58\u5668\u7684\u503C
    pop si  
    ret

code ends

end main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u55EF\uFF0C\u62BD\u65F6\u95F4\u7EE7\u7EED\u5F80\u4E0B\u8D70~\uFF0C\u4E09\u4E2A\u95EE\u9898\u5B8C\u6210\u4E86~</p>`,6);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
