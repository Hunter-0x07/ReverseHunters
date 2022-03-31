import{e as _}from"./app.4d70b66a.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},h=_('<h1 id="_7-03-\u6BB5\u5BC4\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#_7-03-\u6BB5\u5BC4\u5B58\u5668" aria-hidden="true">#</a> 7.03 \u6BB5\u5BC4\u5B58\u5668</h1><h2 id="\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u5F97" aria-hidden="true">#</a> \u5FC3\u5F97</h2><p>\u4F4E\u5B57\u8282\u5BF9\u5E94\u4F4E\u5730\u5740 \u9AD8\u5B57\u8282\u5BF9\u5E94\u9AD8\u5730\u5740</p><p>8086/8088 CPU\u4E2D\uFF0C\u670920\u6839\u5730\u5740\u7EBF\uFF0C\u53EF\u76F4\u63A5\u5BFB\u5740\u7684\u7A7A\u95F4\u4E3A2^20=1MB = 1024 * 1024 Byte = 100000H Byte = (FFFFF + 1)H Byte\uFF1B\u6240\u4EE5\u5BFB\u5740\u8303\u56F4\u4E3A 00000 - FFFFF;</p><p>\u7269\u7406\u5730\u5740 = \u6BB5\u5730\u5740 * 16 + \u504F\u79FB\u5730\u5740 \u7269\u7406\u5730\u5740\u4E3A 20 \u4F4D\u7684\u5730\u5740\uFF0820\u6839\u5730\u5740\u603B\u7EBF\uFF09\uFF0816\u4F4D\u6BB5\u5730\u5740\u548C16\u4F4D\u504F\u79FB\u5730\u5740\u5408\u6210\u4E00\u4E2A20\u4F4D\u7269\u7406\u5730\u5740\uFF09</p><h4 id="\u9898\u5916\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u9898\u5916\u8BDD" aria-hidden="true">#</a> \u9898\u5916\u8BDD</h4><p>\u8FD9\u4E2A\u8BFE\u7A0B\u5B66\u7684\u6211\u4E00\u6123\u4E00\u6123\u7684\uFF0C\u611F\u89C9\u592A\u591A\u57FA\u7840\u6CA1\u4ED4\u7EC6\u8BB2\uFF0C\u662F\u9762\u5411\u6709\u57FA\u7840\u7684\u4EBA\u6765\u8BB2\u7684\u8BFE\uFF0C\u770B\u6765\u6211\u5F97\u5148\u9605\u8BFB\u738B\u723D\u90A3\u672C\u6C47\u7F16\u8BED\u8A00\u624D\u884C\uFF1B \u5148\u5B66\u4E60\u90A3\u672C\u6C47\u7F16\u8BED\u8A00\u4E66\u7C4D\u5427\uFF1B</p><h2 id="\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a> \u4F5C\u4E1A</h2><ol><li>\u7ED9\u5B9A\u6BB5\u5730\u5740\u4E3A0001H\uFF0C\u4EC5\u901A\u8FC7\u53D8\u5316\u504F\u79FB\u5730\u5740\u5BFB\u5740\uFF0CCPU\u7684\u5BFB\u5740\u8303\u56F4\u4E3A _______ \u5230_______H \u3002 \u504F\u79FB\u5730\u5740\u53D8\u5316\u8303\u56F4\uFF1A00000h - FFFFFh \u7269\u7406\u5730\u5740 = \u6BB5\u5730\u5740 * 16 + \u504F\u79FB\u5730\u5740\uFF1B \u90A3\u4E48\u6700\u5C0F\u7269\u7406\u5730\u5740\uFF1A0001h =&gt; 16 16 + 00000 = 16 = 10h \u6700\u5927\u7269\u7406\u5730\u5740\uFF1A16 + 1048576(FFFFh\u6362\u7B97\u6210\u5341\u8FDB\u5236) = 1048592 = 100010h \u6240\u4EE5\u5BFB\u5740\u8303\u56F4\u4E3A 0010h - 100010h \u5373 0010h - 1000fh</li></ol><p>2.\u6709\u4E00\u6570\u636E\u5B58\u653E\u5728\u5185\u5B5820000H\u5355\u5143\u4E2D\uFF0C\u73B0\u7ED9\u5B9A\u6BB5\u5730\u5740\u4E3ASA\uFF0C\u82E5\u60F3\u7528\u504F\u79FB\u5730\u5740\u5BFB\u5230\u6B64\u5355\u5143\u3002\u5219SA\u5E94\u6EE1\u8DB3\u7684\u6761\u4EF6\u662F\uFF1A\u6700\u5C0F\u4E3A _______H \uFF0C\u6700\u5927\u4E3A________H \u3002</p><p>\u63D0\u793A\uFF1A\u53CD\u8FC7\u6765\u601D\u8003\uFF0C\u5F53\u6BB5\u5730\u5740\u7ED9\u5B9A\u4E3A 1001H \u4EE5\u4E0B\u548C 2000H \u4EE5\u4E0A\uFF0CCPU\u65E0\u8BBA\u600E\u4E48\u53D8\u5316\u504F\u79FB\u5730\u5740\u90FD\u65E0\u6CD5\u5BFB\u523020000H\u5355\u5143\uFF1F</p><p>3.8086/8088\u4E0A\u8FD0\u884C\u7684\u7A0B\u5E8F\u67D0\u4E00\u65F6\u523B\u6700\u591A\u53EF\u4EE5\u8BBF\u95EE\u51E0\u4E2A\u6BB5\uFF1F\u7A0B\u5E8F\u6700\u591A\u53EF\u4EE5\u5177\u6709\u591A\u5C11\u4E2A\u6BB5\uFF1F\u7A0B\u5E8F\u81F3\u5C11\u6709\u51E0\u4E2A\u6BB5\uFF1F</p><p>4.8086/8088\u5982\u4F55\u5BFB\u57401M\u5B57\u8282\u7684\u5B58\u50A8\u5668\u7269\u7406\u5730\u5740\u7A7A\u95F4\uFF1F\u5728\u5212\u5206\u6BB5\u65F6\uFF0C\u5FC5\u987B\u6EE1\u8DB3\u7684\u4E24\u4E2A\u6761\u4EF6\u662F\u4EC0\u4E48\uFF1F\u6700\u591A\u53EF\u4EE5\u628A1M\u5B57\u8282\u7A7A\u95F4\u5212\u5206\u6210\u51E0\u4E2A\u6BB5\uFF1F\u6700\u5C11\u53EF\u628A1M\u5B57\u8282\u5730\u5740\u7A7A\u95F4\u5212\u5206\u4E3A\u51E0\u4E2A\u6BB5\uFF1F</p><p>5.\u5B58\u50A8\u5355\u5143\u7684\u903B\u8F91\u5730\u5740\u5982\u4F55\u8868\u793A?\u5B58\u50A8\u5355\u5143\u768420\u4F4D\u7269\u7406\u5730\u5740\u5982\u4F55\u6784\u6210\uFF1F</p><p>6\u3001\u5F53\u6BB5\u91CD\u53E0\u65F6\uFF0C\u4E00\u4E2A\u5B58\u50A8\u5355\u5143\u7684\u5730\u5740\u53EF\u4EE5\u8868\u793A\u6210\u591A\u4E2A\u903B\u8F91\u5730\u5740\u3002\u8BF7\u95EE\u7269\u7406\u5730\u574012345H\u53EF\u8868\u793A\u591A\u5C11\u4E2A\u4E0D\u540C\u7684\u903B\u8F91\u5730\u5740\uFF1F\u504F\u79FB\u6700\u5927\u7684\u903B\u8F91\u5730\u5740\u662F\u4EC0\u4E48\uFF1F\u504F\u79FB\u6700\u5C0F\u7684\u903B\u8F91\u5730\u5740\u662F\u4EC0\u4E48\uFF1F</p><p>7\u3001\u4EC0\u4E48\u60C5\u51B5\u4E0B\uFF0C\u6839\u636E\u6BB5\u503C\u548C\u504F\u79FB\u786E\u5B9A\u7684\u5B58\u50A8\u5355\u5143\u5730\u5740\u4F1A\u8D85\u51FA1M\uFF1F8086\u5982\u4F55\u5904\u7406\u8FD9\u79CD\u60C5\u51B5\uFF1F</p>',16);function r(t,p){return h}var n=e(a,[["render",r]]);export{n as default};
