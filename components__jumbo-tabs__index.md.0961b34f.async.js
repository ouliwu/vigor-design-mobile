(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"2m7N":function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("L+to"),c=n.n(r);n("7d6Y");function o(e,t){return s(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],m=u[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},"7d6Y":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},"L+to":function(e,t,n){(function(t){var n="Expected a function",a=NaN,l="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,i=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=m||d||Function("return this")(),E=Object.prototype,f=E.toString,b=Math.max,h=Math.min,v=function(){return s.Date.now()};function p(e,t,a){var l,r,c,o,u,i,m=0,d=!1,s=!1,E=!0;if("function"!=typeof e)throw new TypeError(n);function f(t){var n=l,a=r;return l=r=void 0,m=t,o=e.apply(a,n),o}function p(e){return m=e,u=setTimeout(k,t),d?f(e):o}function y(e){var n=e-i,a=e-m,l=t-n;return s?h(l,c-a):l}function j(e){var n=e-i,a=e-m;return void 0===i||n>=t||n<0||s&&a>=c}function k(){var e=v();if(j(e))return L(e);u=setTimeout(k,y(e))}function L(e){return u=void 0,E&&l?f(e):(l=r=void 0,o)}function x(){void 0!==u&&clearTimeout(u),m=0,l=i=r=u=void 0}function N(){return void 0===u?o:L(v())}function O(){var e=v(),n=j(e);if(l=arguments,r=this,i=e,n){if(void 0===u)return p(i);if(s)return u=setTimeout(k,t),f(i)}return void 0===u&&(u=setTimeout(k,t)),o}return t=w(t)||0,g(a)&&(d=!!a.leading,s="maxWait"in a,c=s?b(w(a.maxWait)||0,t):c,E="trailing"in a?!!a.trailing:E),O.cancel=x,O.flush=N,O}function y(e,t,a){var l=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return g(a)&&(l="leading"in a?!!a.leading:l,r="trailing"in a?!!a.trailing:r),p(e,t,{leading:l,maxWait:t,trailing:r})}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){return!!e&&"object"==typeof e}function k(e){return"symbol"==typeof e||j(e)&&f.call(e)==l}function w(e){if("number"==typeof e)return e;if(k(e))return a;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?i(e.slice(2),n?2:8):c.test(e)?a:+e}e.exports=y}).call(this,n("M3Yg"))},LbWQ:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("Ynrg"),c=n("lgsW"),o=n("2m7N"),u=l.a.memo((e=>{var t=e.demos,n=t["jumbo-tabs-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"jumbotabs-\u590d\u6742\u9009\u9879\u5361"},l.a.createElement(r["AnchorLink"],{to:"#jumbotabs-\u590d\u6742\u9009\u9879\u5361","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"JumboTabs \u590d\u6742\u9009\u9879\u5361"),l.a.createElement("p",null,"\u5185\u5bb9\u7ec4\u4e4b\u95f4\u8fdb\u884c\u5bfc\u822a\u5207\u6362\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"\u9009\u9879\u9700\u8981\u6709\u8fdb\u4e00\u6b65\u63cf\u8ff0\u65f6\uff0c\u7528\u5728\u5c55\u793a\u578b\u754c\u9762\u7684\u5217\u8868\u6216\u6a21\u5757\u4e2d\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(c["default"],t["jumbo-tabs-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"jumbotabs"},l.a.createElement(r["AnchorLink"],{to:"#jumbotabs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"JumboTabs"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"activeKey"),l.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",l.a.createElement("code",null,"tab")," \u9762\u677f\u7684 ",l.a.createElement("code",null,"key")),l.a.createElement("td",null,l.a.createElement("code",null,"string | null")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultActiveKey"),l.a.createElement("td",null,"\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 ",l.a.createElement("code",null,"key"),"\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e ",l.a.createElement("code",null,"activeKey")),l.a.createElement("td",null,l.a.createElement("code",null,"string | null")),l.a.createElement("td",null,"\u7b2c\u4e00\u4e2a\u9762\u677f\u7684 ",l.a.createElement("code",null,"key"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: string) => void")),l.a.createElement("td",null,"-")))),l.a.createElement("h2",{id:"jumbotabstab"},l.a.createElement(r["AnchorLink"],{to:"#jumbotabstab","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"JumboTabs.Tab"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"description"),l.a.createElement("td",null,"\u9009\u9879\u5361\u63cf\u8ff0"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"destroyOnClose"),l.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"forceRender"),l.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 ",l.a.createElement("code",null,"DOM")," \u7ed3\u6784"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"key"),l.a.createElement("td",null,"\u5bf9\u5e94 ",l.a.createElement("code",null,"activeKey")),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")))),l.a.createElement("p",null,"JumboTabs \u7684\u7528\u6cd5\u548c Tabs \u975e\u5e38\u76f8\u4f3c\uff0c\u6240\u4ee5\u5173\u4e8e\u66f4\u591a\u7684\u7528\u6cd5\u4e0a\u7684\u6307\u5f15\uff0c\u8bf7\u53c2\u9605 ",l.a.createElement(r["Link"],{to:"/zh/components/tabs"},"Tabs")," \u7684\u6587\u6863\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}}}]);