import{e as n}from"./app.ae6c918b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_7-09-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u516D" tabindex="-1"><a class="header-anchor" href="#_7-09-\u738B\u723D\u6C47\u7F16\u8BED\u8A00-\u516D" aria-hidden="true">#</a> 7.09 \u738B\u723D\u6C47\u7F16\u8BED\u8A00\uFF08\u516D\uFF09</h1><h2 id="\u68C0\u6D4B\u70B9-3-2" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u70B9-3-2" aria-hidden="true">#</a> \u68C0\u6D4B\u70B9 3.2</h2><p>8086 CPU \u7684\u5165\u6808\u548C\u51FA\u6808\u64CD\u4F5C\u90FD\u662F\u4EE5\u5B57\u4E3A\u5355\u4F4D\u8FDB\u884C\u7684\uFF1B SS \u6BB5\u5BC4\u5B58\u5668\u5B58\u653E\u6808\u9876\u7684\u6BB5\u5730\u5740\uFF0CSP \u5BC4\u5B58\u5668\u5B58\u653E\u6808\u9876\u7684\u504F\u79FB\u5730\u5740\uFF1B \u6240\u4EE5 SS:SP \u5C31\u53EF\u4EE5\u4EE3\u8868\u6808\u9876\u7684\u7269\u7406\u5185\u5B58\u5730\u5740\uFF1B PUSH \u6307\u4EE4\u548C POP \u6307\u4EE4\u6267\u884C\u65F6\uFF0CCPU \u4ECE SS \u548C SP \u4E2D\u5F97\u5230\u6808\u9876\u7684\u5730\u5740\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BE6\u60C5\u53C2\u8003 P68</span>
\u6267\u884C Push \u6307\u4EE4\u65F6\uFF0CCPU \u5148\u6539\u53D8 SP\uFF0C\u7136\u540E\u5411 SS:SP \u7684\u5185\u5B58\u4F20\u9001\u6570\u636E\uFF1B
\u6267\u884C Pop \u6307\u4EE4\u65F6\uFF0CCPU \u5148\u8BFB\u53D6 SS:SP \u5185\u5B58\u7684\u6570\u636E\uFF0C\u800C\u540E\u6539\u53D8 SP\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u4E00\u6BB5\u5185\u5B58\u5F53\u6210\u6570\u636E\u6BB5\u5904\u7406\u3001\u8FD8\u662F\u4EE3\u7801\u6BB5\u5904\u7406\u3001\u8FD8\u662F\u6808\u6BB5\u5904\u7406\uFF0C\u5173\u952E\u770B CPU \u4E2D\u5BC4\u5B58\u5668\u7684\u8BBE\u7F6E\uFF1B CS \u4E3A\u4EE3\u7801\u6BB5\u7684\u6BB5\u5730\u5740\uFF1B IP \u4E3A\u4EE3\u7801\u6BB5\u7684\u504F\u79FB\u5730\u5740\uFF1B SS \u4E3A\u6808\u6BB5\u7684\u6BB5\u5730\u5740\uFF1B SP \u4E3A\u6808\u6BB5\u7684\u504F\u79FB\u5730\u5740\uFF1B DS \u4E3A\u6570\u636E\u6BB5\u7684\u6BB5\u5730\u5740\uFF1B</p><h2 id="\u4F5C\u4E1A\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A\u7B54\u6848" aria-hidden="true">#</a> \u4F5C\u4E1A\u7B54\u6848</h2><p>\uFF081\uFF09\u8FD9\u91CC\u628A\u6240\u6709\u6B65\u9AA4\u90FD\u5217\u4E86\u51FA\u6765\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mov ax, 1000h
mov ds, ax

<span class="token comment"># \u8BBE\u7F6E\u6808\u9876</span>
mov ax, 2000h 
mov ss, ax
mov sp, 0010h

push <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
push <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
push <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
push <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>
push <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
push <span class="token punctuation">[</span>A<span class="token punctuation">]</span>
push <span class="token punctuation">[</span>C<span class="token punctuation">]</span>
push <span class="token punctuation">[</span>E<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\uFF082\uFF09\u8FD9\u91CC\u628A\u6240\u6709\u6B65\u9AA4\u5217\u4E86\u51FA\u6765\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mov ax, 2000h
mov ds, ax

<span class="token comment"># \u8BBE\u7F6E\u6808\u9876</span>
mov ax, 1000h
mov ss, ax
mov sp, 0000h

pop <span class="token punctuation">[</span>E<span class="token punctuation">]</span>
pop <span class="token punctuation">[</span>C<span class="token punctuation">]</span>
pop <span class="token punctuation">[</span>A<span class="token punctuation">]</span>
pop <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
pop <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>
pop <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
pop <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
pop <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10);function e(c,l){return p}var r=s(a,[["render",e]]);export{r as default};
