(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"2m7N":function(e,t,n){"use strict";var l=n("ahKI"),a=n.n(l),r=n("L+to"),c=n.n(r);n("7d6Y");function o(e,t){return E(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=o(r,2),i=u[0],m=u[1],d=Object(l["useState"])(!1),E=o(d,2),s=E[0],f=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},"7d6Y":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var l=n("FfOG");n.d(t,"a",(function(){return l["b"]}));n("bCY9")},"L+to":function(e,t,n){(function(t){var n="Expected a function",l=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,i=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,E=m||d||Function("return this")(),s=Object.prototype,f=s.toString,b=Math.max,h=Math.min,p=function(){return E.Date.now()};function v(e,t,l){var a,r,c,o,u,i,m=0,d=!1,E=!1,s=!0;if("function"!=typeof e)throw new TypeError(n);function f(t){var n=a,l=r;return a=r=void 0,m=t,o=e.apply(l,n),o}function v(e){return m=e,u=setTimeout(w,t),d?f(e):o}function y(e){var n=e-i,l=e-m,a=t-n;return E?h(a,c-l):a}function g(e){var n=e-i,l=e-m;return void 0===i||n>=t||n<0||E&&l>=c}function w(){var e=p();if(g(e))return L(e);u=setTimeout(w,y(e))}function L(e){return u=void 0,s&&a?f(e):(a=r=void 0,o)}function A(){void 0!==u&&clearTimeout(u),m=0,a=i=r=u=void 0}function N(){return void 0===u?o:L(p())}function T(){var e=p(),n=g(e);if(a=arguments,r=this,i=e,n){if(void 0===u)return v(i);if(E)return u=setTimeout(w,t),f(i)}return void 0===u&&(u=setTimeout(w,t)),o}return t=x(t)||0,k(l)&&(d=!!l.leading,E="maxWait"in l,c=E?b(x(l.maxWait)||0,t):c,s="trailing"in l?!!l.trailing:s),T.cancel=A,T.flush=N,T}function y(e,t,l){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return k(l)&&(a="leading"in l?!!l.leading:a,r="trailing"in l?!!l.trailing:r),v(e,t,{leading:a,maxWait:t,trailing:r})}function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){return!!e&&"object"==typeof e}function w(e){return"symbol"==typeof e||g(e)&&f.call(e)==a}function x(e){if("number"==typeof e)return e;if(w(e))return l;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?i(e.slice(2),n?2:8):c.test(e)?l:+e}e.exports=y}).call(this,n("M3Yg"))},M2qV:function(e,t,n){"use strict";n.r(t);var l=n("ahKI"),a=n.n(l),r=n("Ynrg"),c=n("lgsW"),o=n("2m7N"),u=a.a.memo((e=>{var t=e.demos,n=t["tabs-demo1"].component,l=t["tabs-demo2"].component,u=t["tabs-demo3"].component,i=t["tabs-demo4"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"tabs-\u6807\u7b7e\u9875"},a.a.createElement(r["AnchorLink"],{to:"#tabs-\u6807\u7b7e\u9875","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tabs \u6807\u7b7e\u9875"),a.a.createElement("p",null,"\u5185\u5bb9\u7ec4\u4e4b\u95f4\u8fdb\u884c\u5bfc\u822a\u5207\u6362\u3002"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("p",null,"\u5f53\u524d\u5185\u5bb9\u9700\u8981\u5206\u6210\u540c\u5c42\u7ea7\u7ed3\u6784\u7684\u7ec4\uff0c\u8fdb\u884c\u5185\u5bb9\u5207\u6362\u5c55\u793a\uff0c\u5e38\u7528\u5728\u8868\u5355\u6216\u8005\u5217\u8868\u7684\u9876\u90e8\u3002"),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["tabs-demo1"].previewerProps,a.a.createElement(n,null)),a.a.createElement(c["default"],t["tabs-demo2"].previewerProps,a.a.createElement(l,null)),a.a.createElement(c["default"],t["tabs-demo3"].previewerProps,a.a.createElement(u,null)),a.a.createElement(c["default"],t["tabs-demo4"].previewerProps,a.a.createElement(i,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"tabs"},a.a.createElement(r["AnchorLink"],{to:"#tabs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tabs"),a.a.createElement("h3",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"activeKey"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u9762\u677f\u7684 ",a.a.createElement("code",null,"key")),a.a.createElement("td",null,a.a.createElement("code",null,"string | null")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"activeLineMode"),a.a.createElement("td",null,"\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u4e0b\u5212\u7ebf\u7684\u6a21\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"'auto' | 'full' | 'fixed'")),a.a.createElement("td",null,a.a.createElement("code",null,"'auto'"))),a.a.createElement("tr",null,a.a.createElement("td",null,"defaultActiveKey"),a.a.createElement("td",null,"\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 ",a.a.createElement("code",null,"key"),"\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e ",a.a.createElement("code",null,"activeKey")),a.a.createElement("td",null,a.a.createElement("code",null,"string | null")),a.a.createElement("td",null,"\u7b2c\u4e00\u4e2a\u9762\u677f\u7684 ",a.a.createElement("code",null,"key"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onChange"),a.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"(key: string) => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"stretch"),a.a.createElement("td",null,"\u9009\u9879\u5361\u5934\u90e8\u662f\u5426\u62c9\u4f38"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))))),a.a.createElement("h3",{id:"css-\u53d8\u91cf"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"--active-line-border-radius"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u4e0b\u5212\u7ebf\u7684\u5706\u89d2"),a.a.createElement("td",null,a.a.createElement("code",null,"var(--active-line-height)"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--active-line-color"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u4e0b\u5212\u7ebf\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"var(--adm-color-primary)"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--active-line-height"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u4e0b\u5212\u7ebf\u7684\u9ad8\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"2px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--active-title-color"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u9009\u9879\u6587\u5b57\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"var(--adm-color-primary)"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--content-padding"),a.a.createElement("td",null,a.a.createElement("code",null,"tab")," \u5185\u5bb9\u533a\u7684 ",a.a.createElement("code",null,"padding")),a.a.createElement("td",null,a.a.createElement("code",null,"12px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--fixed-active-line-width"),a.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b ",a.a.createElement("code",null,"tab")," \u4e0b\u5212\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ec5\u5728 ",a.a.createElement("code",null,"activeLineMode")," \u4e3a ",a.a.createElement("code",null,"'fixed'")," \u65f6\u6709\u6548"),a.a.createElement("td",null,a.a.createElement("code",null,"30px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--title-font-size"),a.a.createElement("td",null,"\u9009\u9879\u5361\u5934\u6587\u5b57\u7684\u5927\u5c0f"),a.a.createElement("td",null,a.a.createElement("code",null,"17px"))))),a.a.createElement("h2",{id:"tabstab"},a.a.createElement(r["AnchorLink"],{to:"#tabstab","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tabs.Tab"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"destroyOnClose"),a.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"forceRender"),a.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 ",a.a.createElement("code",null,"DOM")," \u7ed3\u6784"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"key"),a.a.createElement("td",null,"\u5bf9\u5e94 ",a.a.createElement("code",null,"activeKey")),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")))),a.a.createElement("h2",{id:"faq"},a.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"FAQ"),a.a.createElement("h3",{id:"tabs-\u662f\u5426\u652f\u6301-sticky-\u5438\u9876\u6548\u679c"},a.a.createElement(r["AnchorLink"],{to:"#tabs-\u662f\u5426\u652f\u6301-sticky-\u5438\u9876\u6548\u679c","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tabs \u662f\u5426\u652f\u6301 sticky \u5438\u9876\u6548\u679c\uff1f"),a.a.createElement("p",null,"\u652f\u6301\uff0c\u4f46\u662f Tabs \u5e76\u6ca1\u6709\u4e00\u4e2a\u7c7b\u4f3c\u4e8e ",a.a.createElement("code",null,"sticky")," \u7684\u5c5e\u6027\u3002\u4f60\u53ef\u4ee5\u81ea\u5df1\u5728 Tabs \u7684\u5916\u5c42\u5bb9\u5668\u4e2d\u589e\u52a0\u4e00\u4e0b ",a.a.createElement("code",null,"position: sticky")," \u7684 CSS \u6837\u5f0f\uff0c\u4ece\u800c\u5b9e\u73b0\u5438\u9876\u6548\u679c\u3002"),a.a.createElement("h3",{id:"tabs-\u600e\u4e48\u914d\u5408-swiperpulltorefreshinfinitescroll-\u5b9e\u73b0\u4e00\u4e2a\u590d\u6742\u7684\u4fe1\u606f\u6d41\u754c\u9762"},a.a.createElement(r["AnchorLink"],{to:"#tabs-\u600e\u4e48\u914d\u5408-swiperpulltorefreshinfinitescroll-\u5b9e\u73b0\u4e00\u4e2a\u590d\u6742\u7684\u4fe1\u606f\u6d41\u754c\u9762","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tabs \u600e\u4e48\u914d\u5408 Swiper\u3001PullToRefresh\u3001InfiniteScroll \u5b9e\u73b0\u4e00\u4e2a\u590d\u6742\u7684\u4fe1\u606f\u6d41\u754c\u9762\uff1f"),a.a.createElement("p",null,"\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a ",a.a.createElement(r["Link"],{to:"https://codesandbox.io/s/mystifying-glitter-knpc7u?file=/src/components/getPullToRefreshlData.tsx"},"demo"),"\u3002"))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:n})}}}]);