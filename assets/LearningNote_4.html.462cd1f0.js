import{e as n}from"./app.ec4d4dd1.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="_4-4-\u7F16\u5199\u7B2C\u4E00\u4E2A\u7834\u89E3\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#_4-4-\u7F16\u5199\u7B2C\u4E00\u4E2A\u7834\u89E3\u8865\u4E01" aria-hidden="true">#</a> 4.4 \u7F16\u5199\u7B2C\u4E00\u4E2A\u7834\u89E3\u8865\u4E01</h1><h2 id="\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u5F97" aria-hidden="true">#</a> \u5FC3\u5F97</h2><p>\u4E3B\u8981\u8BB2\u7528C\u8BED\u8A00\u548C\u6613\u8BED\u8A00\u5199\u4E86\u4E00\u4E2A\u8865\u4E01\uFF0C\u53BB\u4FEE\u6539\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u7684\u5185\u5B58\u91CC\u7684\u5185\u5BB9\uFF1B \u53E6\u5916\u8FD8\u8BB2\u4E86\u4E00\u4E9BDLL\u52AB\u6301\u7684\u77E5\u8BC6\uFF1B\u5982\u679C\u6709C\u8BED\u8A00\u57FA\u7840\u7684\u8BDD\uFF0C\u6709\u5174\u8DA3\u53EF\u4EE5\u5B66\u4E00\u5B66DLL\u52AB\u6301\u7684\u6280\u672F\uFF0C\u5F53\u65F6 \u6211\u4E5F\u662F\u96F6\u57FA\u7840\u5B66\u7684DLL\u52AB\u6301\uFF0C\u53EA\u8981\u6709C\u8BED\u8A00\u57FA\u7840\u5C31\u884C\uFF0C\u6211\u628A\u6211\u5F53\u521D\u5B66\u4E60\u7684\u94FE\u63A5\u653E\u5728\u4E0B\u9762\uFF1B</p><p>\u53E6\u5916\u4E0D\u60F3\u5B66 DLL \u4E5F\u65E0\u6240\u8C13\uFF0C\u524D\u51E0\u8282\u8BFE\u4ED6\u8BB2\u7684\u6D89\u53CA\u8303\u56F4\u5E7F\uFF0C\u9700\u8981\u57FA\u7840\u591A\uFF0C\u540E\u7EED\u4F1A\u5148\u8865 C \u548C CPP\u57FA\u7840\uFF0C\u4EE5\u53CA\u6C47\u7F16\u57FA\u7840\uFF0C\u500D\u901F\u770B\u5427\uFF1B</p><p>\u4F46\u662F\u4E0D\u5F97\u4E0D\u8BF4\uFF0C\u6613\u8BED\u8A00\u5199\u4EE3\u7801\u662F\u771F\u5FEB\uFF1B\u5C31\u7B97\u6CA1\u6709\u6613\u8BED\u8A00\u57FA\u7840\uFF0C\u4F46\u662F\u4F46\u51E1\u6709\u70B9\u7F16\u7A0B\u57FA\u7840\uFF0C\u90FD\u5927\u6982\u80FD\u770B\u61C2 \u4ED6\u5199\u7684\u5565\u5427\uFF0C\u6BD5\u7ADF\u662F\u4E2D\u6587\u5199\u4EE3\u7801\u54C8\u54C8\u54C8\uFF1B</p><h4 id="dll\u52AB\u6301\u5B66\u4E60\u94FE\u63A5\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#dll\u52AB\u6301\u5B66\u4E60\u94FE\u63A5\u63A8\u8350" aria-hidden="true">#</a> DLL\u52AB\u6301\u5B66\u4E60\u94FE\u63A5\u63A8\u8350</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EC0\u4E48\u662F\u52A8\u6001\u94FE\u63A5\u5E93 DLL(Dynamic Link Library)\uFF1F</span>
http://c.biancheng.net/cpp/u/dll/
\u6211\u81EA\u5DF1\u7684\u8BA4\u77E5\uFF1A\u8C08\u52A8\u6001\u94FE\u63A5\uFF0C\u90A3\u9996\u5148\u5C31\u8981\u8C08\u9759\u6001\u94FE\u63A5\uFF1B\u9996\u5148\u5047\u5982\u6211\u4EEC\u8981\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570 A\uFF0C
\u6211\u4EEC\u628A\u5B83\u5199\u5728\u6E90\u7801\u91CC\uFF0C\u7136\u540E\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u8C03\u7528\u8BE5\u51FD\u6570 A\uFF0C\u76F4\u63A5\u5C06\u5176\u7F16\u8BD1\u6210\u7A0B\u5E8F\uFF0C\u8FD9\u53EB\u9759\u6001\u94FE\u63A5\uFF1B

\u4F46\u662F\u6211\u4EEC\u5047\u8BBE\u4E00\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u5199\u7684\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u4E5F\u8981\u8C03\u7528\u51FD\u6570 A\uFF0C\u90A3\u6211\u4EEC\u53C8\u8981\u5728\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u4EE3\u7801\u91CC\u5199\u5165\u76F8\u540C\u7684\u51FD\u6570A\uFF1B\u4F46\u662F\u5982\u679C\u6211\u4EEC\u628A\u4E24\u4E2A\u7A0B\u5E8F\u90FD\u4F1A\u7528\u5230\u7684\u51FD\u6570 A \u62BD\u51FA\u6765\uFF0C\u5355\u72EC\u5199\u4E00\u4E2A\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u7136\u540E\u8BA9\u4E24\u4E2A
\u7A0B\u5E8F\u5728\u8FD0\u884C\u7684\u65F6\u5019\u518D\u53BB\u8C03\u7528\u8FD9\u4E2A\u5355\u72EC\u7684\u6211\u4EEC\u5199\u7684\u51FD\u6570A\u7684\u7A0B\u5E8F\uFF0C\u90A3\u4E48\u8FD9\u6837\u5C31\u8282\u7701\u4E24\u4E2A\u7A0B\u5E8F\u7684\u4EE3\u7801\uFF1B\u800C\u6211\u4EEC

\u5355\u72EC\u62FF\u51FA\u6765\u5199\u5728\u4E00\u4E2A\u7A0B\u5E8F\u7684\u51FD\u6570 A\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u52A8\u6001\u94FE\u63A5\u5E93\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8FBE\u5230\u4E00\u4E2A\u51FD\u6570\u63A5\u53E3\u80FD\u88AB\u591A\u4E2A\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\u8C03\u7528\u7684\u76EE\u7684\uFF1B

<span class="token comment"># DLL\u52AB\u6301\uFF1F</span>
https://paper.seebug.org/1713/
\u6211\u7684\u8BA4\u77E5\uFF1A\u56E0\u4E3A\u7A0B\u5E8F\u5728\u8C03\u7528\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u4E00\u4E9B\u52A8\u6001\u94FE\u63A5\u5E93 DLL \u6587\u4EF6\uFF0C\u5B83\u4F1A\u53BB\u76EE\u5F55\u4E2D\u641C\u7D22\u5BF9\u5E94\u8981\u8C03\u7528\u7684DLL\u6587\u4EF6\uFF1B\u4F46\u662F\u5982\u679C\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A\u548C\u5B83\u60F3\u8981\u8C03\u7528\u7684 DLL \u540D\u79F0\u76F8\u540C\u7684 DLL\uFF0C\u5E76\u4E14\u5B9E\u73B0\u5B83\u6240\u9700\u8981\u8C03\u7528\u7684\u529F\u80FD\uFF0C\u7136\u540E\u6211\u4EEC\u518D\u5F80\u8FD9\u4E2A DLL\u91CC\u9762\u5D4C\u5165\u6076\u610F\u4EE3\u7801\uFF1B\u6700\u540E\u5C06\u8FD9\u4E2A\u6211\u4EEC\u7F16\u5199\u7684DLL\u548C\u5B83\u653E\u5728\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u90A3\u4E48\u8BE5\u7A0B\u5E8F\u8FD0\u884C\u65F6\u4F1A\u5148\u8C03\u7528\u6211\u4EEC\u7F16\u5199\u7684\u6076\u610F DLL\uFF0C\u4ECE\u800C\u6267\u884C\u6211\u4EEC\u7684\u6076\u610F\u4EE3\u7801\uFF1B
DLL\u52AB\u6301\u7B80\u8A00\u4E4B\u5C31\u662F\u52AB\u6301\u6B63\u5E38\u7684 DLL\uFF0C\u4E0D\u8BA9\u7A0B\u5E8F\u52A0\u8F7D\u6B63\u5E38\u7684 DLL\uFF0C\u800C\u52A0\u8F7D\u6211\u4EEC\u7F16\u5199\u7684\u6076\u610F DLL\uFF1B

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,7);function r(p,l){return e}var b=a(s,[["render",r]]);export{b as default};
