(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"2m7N":function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("L+to"),c=n.n(r);n("7d6Y");function u(e,t){return E(e)||m(e,t)||d(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(o){u=!0,l=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=u(r,2),d=o[0],i=o[1],m=Object(a["useState"])(!1),E=u(m,2),s=E[0],f=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":d||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},"7d6Y":function(e,t,n){},"8v+K":function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("Ynrg"),c=n("lgsW"),u=n("C5yj"),o=n("2m7N"),d=l.a.memo((e=>{var t=e.demos,n=t["cascader-demo1"].component,a=t["cascader-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"cascader-\u7ea7\u8054\u9009\u62e9"},l.a.createElement(r["AnchorLink"],{to:"#cascader-\u7ea7\u8054\u9009\u62e9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Cascader \u7ea7\u8054\u9009\u62e9"),l.a.createElement("p",null,"\u591a\u5c42\u7ea7\u6570\u636e\u7684\u9009\u62e9\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"\u9700\u8981\u4ece\u4e00\u7ec4\u76f8\u5173\u8054\u7684\u6570\u636e\u96c6\u5408\u8fdb\u884c\u9009\u62e9\uff0c\u4f8b\u5982\u7701\u5e02\u533a\uff0c\u516c\u53f8\u5c42\u7ea7\uff0c\u4e8b\u7269\u5206\u7c7b\u7b49\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(c["default"],t["cascader-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement(c["default"],t["cascader-demo2"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"cascader"},l.a.createElement(r["AnchorLink"],{to:"#cascader","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Cascader"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(u["a"],{code:"type CascaderValue = string | null\n\ntype CascaderOption = {\n  label: string\n  value: string\n  disabled?: boolean\n  children?: CascaderOption[]\n}\n\ntype CascaderValueExtend = {\n  items: (CascaderOption | null)[]\n  isLeaf: boolean\n}",lang:"typescript"}),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"activeIcon"),l.a.createElement("td",null,"\u9009\u4e2d\u56fe\u6807"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"cancelText"),l.a.createElement("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"'\u53d6\u6d88'"))),l.a.createElement("tr",null,l.a.createElement("td",null,"children"),l.a.createElement("td",null,"\u6240\u9009\u9879\u7684\u6e32\u67d3\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(items: CascaderOption[], actions: CascaderActions) => ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"confirmText"),l.a.createElement("td",null,"\u786e\u5b9a\u6309\u94ae\u7684\u6587\u5b57"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"'\u786e\u5b9a'"))),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderValue[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))),l.a.createElement("tr",null,l.a.createElement("td",null,"destroyOnClose"),l.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"forceRender"),l.a.createElement("td",null,"\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onCancel"),l.a.createElement("td",null,"\u53d6\u6d88\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,"\u786e\u8ba4\u548c\u53d6\u6d88\u65f6\u90fd\u4f1a\u89e6\u53d1\u5173\u95ed\u4e8b\u4ef6"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onConfirm"),l.a.createElement("td",null,"\u786e\u8ba4\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: CascaderValue[], extend: CascaderValueExtend) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onSelect"),l.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: CascaderValue[], extend: CascaderValueExtend) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onTabsChange"),l.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),l.a.createElement("td",null,l.a.createElement("code",null,"(index: number) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u7ea7\u8054\u6570\u636e"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderOption[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"placeholder"),l.a.createElement("td",null,"\u672a\u9009\u4e2d\u65f6\u7684\u63d0\u793a\u6587\u6848"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"'\u8bf7\u9009\u62e9'"))),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u6807\u9898"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderValue[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u7ea7\u8054\u9009\u62e9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))))),l.a.createElement("p",null,"\u8bf7\u7559\u610f ",l.a.createElement("code",null,"CascaderOption")," \u7684 ",l.a.createElement("code",null,"children")," \u5c5e\u6027\uff0c\u5982\u679c\u67d0\u4e2a ",l.a.createElement("code",null,"option")," \u7684 ",l.a.createElement("code",null,"children")," \u4e3a ",l.a.createElement("code",null,"[]"),"\uff0c\u90a3\u5f53\u7528\u6237\u9009\u62e9\u4e86\u8fd9\u4e2a ",l.a.createElement("code",null,"option"),' \u65f6\uff0cCascader \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u8df3\u8f6c\u5230\u4e0b\u4e00\u7ea7\uff0c\u5373\u4fbf\u8fd9\u4e00\u7ea7\u5f53\u524d\u662f\u6ca1\u6709\u4efb\u4f55\u9009\u9879\u7684\uff08\u56e0\u4e3a Cascader \u6ca1\u6709\u529e\u6cd5\u5224\u65ad\uff0c\u5728\u540e\u7eed\u7684\u66f4\u65b0\u4e2d\uff0c\u8fd9\u4e2a\u7a7a\u6570\u7ec4\u4f1a\u4e0d\u4f1a\u53d8\u4e3a\u4e00\u4e2a\u6709\u5185\u5bb9\u7684\u6570\u7ec4\uff09\u3002\u56e0\u6b64\uff0c\u8bf7\u786e\u4fdd\u6700\u672b\u4e00\u7ea7\u7684 option\uff08\u4e5f\u5c31\u662f"\u53f6\u5b50\u8282\u70b9"\uff09\u7684 ',l.a.createElement("code",null,"children")," \u5c5e\u6027\u4e0d\u5b58\u5728\u6216\u8005\u503c\u4e3a ",l.a.createElement("code",null,"undefined"),"\uff0c\u8fd9\u6837 Cascader \u7ec4\u4ef6\u624d\u80fd\u5c06\u5176\u6b63\u786e\u5730\u8bc6\u522b\u3002"),l.a.createElement("h3",{id:"cascaderactions"},l.a.createElement(r["AnchorLink"],{to:"#cascaderactions","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CascaderActions"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"close"),l.a.createElement("td",null,"\u5173\u95ed Cascader"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"open"),l.a.createElement("td",null,"\u663e\u793a Cascader"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"toggle"),l.a.createElement("td",null,"\u5207\u6362 Cascader \u7684\u663e\u793a\u548c\u9690\u85cf\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))),l.a.createElement("h3",{id:"ref"},l.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ref"),l.a.createElement("p",null,"\u540c CascaderActions\u3002"),l.a.createElement("h3",{id:"\u52a0\u8f7d\u4e2d"},l.a.createElement(r["AnchorLink"],{to:"#\u52a0\u8f7d\u4e2d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7d\u4e2d"),l.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u628a ",l.a.createElement("code",null,"Cascader.optionSkeleton")," \u4f5c\u4e3a ",l.a.createElement("code",null,"CascaderOption[]")," \u4f20\u5165\u5230 Cascader \u7684 ",l.a.createElement("code",null,"options")," \u5c5e\u6027\u6216\u8005\u662f ",l.a.createElement("code",null,"CascaderOption")," \u7684 ",l.a.createElement("code",null,"children")," \u4e2d\u3002Cascader \u4f1a\u5c06\u5176\u8bc6\u522b\u5e76\u663e\u793a\u51fa\u9aa8\u67b6\u5c4f\u6548\u679c\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(d,{demos:n})}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},"L+to":function(e,t,n){(function(t){var n="Expected a function",a=NaN,l="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,o=/^0o[0-7]+$/i,d=parseInt,i="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,E=i||m||Function("return this")(),s=Object.prototype,f=s.toString,p=Math.max,h=Math.min,v=function(){return E.Date.now()};function b(e,t,a){var l,r,c,u,o,d,i=0,m=!1,E=!1,s=!0;if("function"!=typeof e)throw new TypeError(n);function f(t){var n=l,a=r;return l=r=void 0,i=t,u=e.apply(a,n),u}function b(e){return i=e,o=setTimeout(x,t),m?f(e):u}function y(e){var n=e-d,a=e-i,l=t-n;return E?h(l,c-a):l}function g(e){var n=e-d,a=e-i;return void 0===d||n>=t||n<0||E&&a>=c}function x(){var e=v();if(g(e))return w(e);o=setTimeout(x,y(e))}function w(e){return o=void 0,s&&l?f(e):(l=r=void 0,u)}function O(){void 0!==o&&clearTimeout(o),i=0,l=d=r=o=void 0}function N(){return void 0===o?u:w(v())}function A(){var e=v(),n=g(e);if(l=arguments,r=this,d=e,n){if(void 0===o)return b(d);if(E)return o=setTimeout(x,t),f(d)}return void 0===o&&(o=setTimeout(x,t)),u}return t=k(t)||0,C(a)&&(m=!!a.leading,E="maxWait"in a,c=E?p(k(a.maxWait)||0,t):c,s="trailing"in a?!!a.trailing:s),A.cancel=O,A.flush=N,A}function y(e,t,a){var l=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return C(a)&&(l="leading"in a?!!a.leading:l,r="trailing"in a?!!a.trailing:r),b(e,t,{leading:l,maxWait:t,trailing:r})}function C(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){return!!e&&"object"==typeof e}function x(e){return"symbol"==typeof e||g(e)&&f.call(e)==l}function k(e){if("number"==typeof e)return e;if(x(e))return a;if(C(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=C(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||o.test(e)?d(e.slice(2),n?2:8):c.test(e)?a:+e}e.exports=y}).call(this,n("M3Yg"))}}]);