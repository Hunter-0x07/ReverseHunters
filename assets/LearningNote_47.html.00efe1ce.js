import{e as n}from"./app.7d2ceebc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_7-41-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u516B" tabindex="-1"><a class="header-anchor" href="#_7-41-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u4E09\u5341\u516B" aria-hidden="true">#</a> 7.41 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u4E09\u5341\u516B\uFF09</h1><h2 id="\u4E2D\u95F4\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u7B14\u8BB0" aria-hidden="true">#</a> \u4E2D\u95F4\u7B14\u8BB0</h2><p>inc \u548C loop \u6307\u4EE4\u4E0D\u5F71\u54CD CF \u6807\u5FD7\u4F4D\u3002 adc \u6307\u4EE4\uFF1A\u5E26\u8FDB\u4F4D\u52A0\u6CD5\u6307\u4EE4\uFF0C\u5229\u7528\u4E86 CF \u4F4D\u4E0A\u8BB0\u5F55\u7684\u8FDB\u4F4D\u503C\uFF1B \u6307\u4EE4\u683C\u5F0F\uFF1A adc \u64CD\u4F5C\u5BF9\u8C611, \u64CD\u4F5C\u5BF9\u8C612 \u5982 adc ax, bx \u7B49\u4EF7\u4E8E \uFF08ax) = (ax) + (bx) + CF;</p><h2 id="\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a> \u601D\u8003</h2><p>\u5BF9\u6BD4\u5982\u4E0B\u4E24\u4E2A\u7A0B\u5E8F\uFF0C\u5C064\u4E2A inc\u6307\u4EE4\u6362\u6210\u4E86 add \u6307\u4EE4\u4E4B\u540E\uFF0C\u4E3A\u4EC0\u4E48\u8FD0\u7B97\u7ED3\u679C\u4F1A\u6539\u53D8\u5462\uFF1F</p><p>\u7A0B\u5E8F1\u5982\u4E0B\uFF0C\u8BA1\u7B97\u7ED3\u679C\u662F\uFF1A2c 11 b4 18 31 13 f5 a5 2d 11 c3 c6 e3 73 8a b9</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:codesg, ds:datasg

datasg segment

    ;; \u7B2C\u4E00\u4E2A 128 \u4F4D\u6570\u636E\u5730\u5740\uFF1A0 ~ 7fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; \u7B2C\u4E8C\u4E2A 128 \u4F4D\u6570\u636E\u5730\u5740\uFF1A80h ~ ffh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] \u6307\u5411\u7B2C\u4E00\u4E2A 128 \u4F4D\u6570\u636E
    mov di, 80h ;; ds:[di] \u6307\u5411\u7B2C\u4E8C\u4E2A 128 \u4F4D\u6570\u636E

    call add128

    mov ax, 4c00h
    int 21h

add128:
    push ax
    push cx
    push si
    push di

    sub ax, ax

    mov cx, 8
s:
    mov ax, [si]
    adc ax, [di]
    mov [si], ax
    inc si
    inc si
    inc di
    inc di
    loop s

    pop di
    pop si
    pop cx
    pop ax
    ret

codesg ends

end main

;; \u8BA1\u7B97\u7ED3\u679C\u662F\uFF1A2c 11 b4 18 31 13 f5 a5 2d 11 c3 c6 e3 73 8a b9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>\u7A0B\u5E8F2\u5982\u4E0B\uFF0C\u8BA1\u7B97\u7ED3\u679C\u662F\uFF1A2c 11 b3 18 30 13 f5 a5 2d 11 c2 c6 e3 73 8a b9</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>assume cs:codesg, ds:datasg

datasg segment

    ;; \u7B2C\u4E00\u4E2A 128 \u4F4D\u6570\u636E\u5730\u5740\uFF1A0 ~ 7fh
    dw 1232h, 3232h, 1231h, 232fh, 1232h, 9bc2h, 2323h, 32fdh

    ;; \u7B2C\u4E8C\u4E2A 128 \u4F4D\u6570\u636E\u5730\u5740\uFF1A80h ~ ffh
    dw 2232h, 3f32h, 0c231h, 0a32fh, 1232h, 0dbc2h, 2323h, 22fdh

datasg ends

codesg segment

main:
    mov ax, datasg
    mov ds, ax
    mov si, 0   ;; ds:[si] \u6307\u5411\u7B2C\u4E00\u4E2A 128 \u4F4D\u6570\u636E
    mov di, 80h ;; ds:[di] \u6307\u5411\u7B2C\u4E8C\u4E2A 128 \u4F4D\u6570\u636E

    call add128

    mov ax, 4c00h
    int 21h

add128:
    push ax
    push cx
    push si
    push di

    sub ax, ax

    mov cx, 8
s:
    mov ax, [si]
    adc ax, [di]
    mov [si], ax
    add si, 2
    add di, 2
    loop s

    pop di
    pop si
    pop cx
    pop ax
    ret

codesg ends

end main

;; \u8BA1\u7B97\u7ED3\u679C\u662F\uFF1A2c 11 b3 18 30 13 f5 a5 2d 11 c2 c6 e3 73 8a b9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E2A\u7A0B\u5E8F\u5F97\u8C03\u8BD5\u4E00\u4E0B\uFF0C\u770B\u4E00\u4E0B\u4E3A\u4EC0\u4E48\uFF0C\u653E\u5728\u660E\u5929\u5427\uFF0C\u8FD8\u662F\u522B\u76F4\u63A5\u7F51\u4E0A\u627E\u7B54\u6848\uFF0C\u800C\u662F\u81EA\u5DF1\u63A2\u7A76\uFF0C\u81EA\u5DF1debug\u4E00\u4E0B\uFF1B</p>`,11);function r(p,l){return e}var c=s(a,[["render",r]]);export{c as default};
