(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"2m7N":function(e,t,n){"use strict";var l=n("ahKI"),a=n.n(l),r=n("L+to"),c=n.n(r);n("7d6Y");function o(e,t){return E(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=o(r,2),i=u[0],m=u[1],d=Object(l["useState"])(!1),E=o(d,2),f=E[0],s=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),s(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":f||void 0},a.a.createElement("table",null,t)))};t["a"]=f},"7d6Y":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var l=n("FfOG");n.d(t,"a",(function(){return l["b"]}));n("bCY9")},"L+to":function(e,t,n){(function(t){var n="Expected a function",l=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,i=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,E=m||d||Function("return this")(),f=Object.prototype,s=f.toString,h=Math.max,b=Math.min,v=function(){return E.Date.now()};function p(e,t,l){var a,r,c,o,u,i,m=0,d=!1,E=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function s(t){var n=a,l=r;return a=r=void 0,m=t,o=e.apply(l,n),o}function p(e){return m=e,u=setTimeout(x,t),d?s(e):o}function y(e){var n=e-i,l=e-m,a=t-n;return E?b(a,c-l):a}function w(e){var n=e-i,l=e-m;return void 0===i||n>=t||n<0||E&&l>=c}function x(){var e=v();if(w(e))return N(e);u=setTimeout(x,y(e))}function N(e){return u=void 0,f&&a?s(e):(a=r=void 0,o)}function j(){void 0!==u&&clearTimeout(u),m=0,a=i=r=u=void 0}function L(){return void 0===u?o:N(v())}function O(){var e=v(),n=w(e);if(a=arguments,r=this,i=e,n){if(void 0===u)return p(i);if(E)return u=setTimeout(x,t),s(i)}return void 0===u&&(u=setTimeout(x,t)),o}return t=k(t)||0,g(l)&&(d=!!l.leading,E="maxWait"in l,c=E?h(k(l.maxWait)||0,t):c,f="trailing"in l?!!l.trailing:f),O.cancel=j,O.flush=L,O}function y(e,t,l){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return g(l)&&(a="leading"in l?!!l.leading:a,r="trailing"in l?!!l.trailing:r),p(e,t,{leading:a,maxWait:t,trailing:r})}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){return!!e&&"object"==typeof e}function x(e){return"symbol"==typeof e||w(e)&&s.call(e)==a}function k(e){if("number"==typeof e)return e;if(x(e))return l;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?i(e.slice(2),n?2:8):c.test(e)?l:+e}e.exports=y}).call(this,n("M3Yg"))},hP8z:function(e,t,n){"use strict";n.r(t);var l=n("ahKI"),a=n.n(l),r=n("Ynrg"),c=n("lgsW"),o=n("2m7N"),u=a.a.memo((e=>{var t=e.demos,n=t["notice-bar-demo1"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"noticebar-\u901a\u544a\u680f"},a.a.createElement(r["AnchorLink"],{to:"#noticebar-\u901a\u544a\u680f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"NoticeBar \u901a\u544a\u680f"),a.a.createElement("p",null,"\u5c55\u793a\u4e00\u7ec4\u6d88\u606f\u901a\u77e5\u3002"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("p",null,"\u9002\u7528\u4e8e\u5f53\u524d\u9875\u9762\u5185\u4fe1\u606f\u7684\u901a\u77e5\uff0c\u662f\u4e00\u79cd\u8f83\u9192\u76ee\u7684\u9875\u9762\u5185\u901a\u77e5\u65b9\u5f0f\u3002"),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["notice-bar-demo1"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"noticebar"},a.a.createElement(r["AnchorLink"],{to:"#noticebar","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"NoticeBar"),a.a.createElement("h3",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"closeable"),a.a.createElement("td",null,"\u662f\u5426\u53ef\u5173\u95ed"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"color"),a.a.createElement("td",null,"\u901a\u544a\u680f\u7684\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"'default' | 'alert' | 'error' | 'info'")),a.a.createElement("td",null,a.a.createElement("code",null,"'default'"))),a.a.createElement("tr",null,a.a.createElement("td",null,"content"),a.a.createElement("td",null,"\u516c\u544a\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"React.ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"delay"),a.a.createElement("td",null,"\u5f00\u59cb\u6eda\u52a8\u7684\u5ef6\u8fdf\uff0c\u5355\u4f4d ",a.a.createElement("code",null,"ms")),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"2000"))),a.a.createElement("tr",null,a.a.createElement("td",null,"extra"),a.a.createElement("td",null,"\u989d\u5916\u64cd\u4f5c\u533a\u57df\uff0c\u663e\u793a\u5728\u5173\u95ed\u6309\u94ae\u5de6\u4fa7"),a.a.createElement("td",null,a.a.createElement("code",null,"React.ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u5de6\u4fa7\u5e7f\u64ad\u56fe\u6807"),a.a.createElement("td",null,a.a.createElement("code",null,"React.ReactNode")),a.a.createElement("td",null,a.a.createElement("code",null,"<SoundOutline />"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u7684\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"speed"),a.a.createElement("td",null,"\u6eda\u52a8\u901f\u5ea6\uff0c\u5355\u4f4d ",a.a.createElement("code",null,"px/s")),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"50"))))),a.a.createElement("h3",{id:"css-\u53d8\u91cf"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"--background-color"),a.a.createElement("td",null,"\u80cc\u666f\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#ababab"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--border-color"),a.a.createElement("td",null,"\u8fb9\u6846\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#999999"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--font-size"),a.a.createElement("td",null,"\u6587\u5b57\u5b57\u53f7"),a.a.createElement("td",null,a.a.createElement("code",null,"15px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--height"),a.a.createElement("td",null,"\u6574\u4f53\u9ad8\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"38px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--icon-font-size"),a.a.createElement("td",null,"\u5de6\u4fa7\u56fe\u6807\u7684\u5b57\u53f7"),a.a.createElement("td",null,a.a.createElement("code",null,"18px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--text-color"),a.a.createElement("td",null,"\u6587\u5b57\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#ffffff"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:n})}}}]);