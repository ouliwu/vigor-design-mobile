(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{"2m7N":function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a),l=n("L+to"),c=n.n(l);n("7d6Y");function i(e,t){return s(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){i=!0,r=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=i(l,2),u=o[0],d=o[1],m=Object(a["useState"])(!1),s=i(m,2),f=s[0],E=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},"7d6Y":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},"L+to":function(e,t,n){(function(t){var n="Expected a function",a=NaN,r="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,s=d||m||Function("return this")(),f=Object.prototype,E=f.toString,v=Math.max,h=Math.min,p=function(){return s.Date.now()};function b(e,t,a){var r,l,c,i,o,u,d=0,m=!1,s=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function E(t){var n=r,a=l;return r=l=void 0,d=t,i=e.apply(a,n),i}function b(e){return d=e,o=setTimeout(j,t),m?E(e):i}function y(e){var n=e-u,a=e-d,r=t-n;return s?h(r,c-a):r}function w(e){var n=e-u,a=e-d;return void 0===u||n>=t||n<0||s&&a>=c}function j(){var e=p();if(w(e))return N(e);o=setTimeout(j,y(e))}function N(e){return o=void 0,f&&r?E(e):(r=l=void 0,i)}function x(){void 0!==o&&clearTimeout(o),d=0,r=u=l=o=void 0}function L(){return void 0===o?i:N(p())}function O(){var e=p(),n=w(e);if(r=arguments,l=this,u=e,n){if(void 0===o)return b(u);if(s)return o=setTimeout(j,t),E(u)}return void 0===o&&(o=setTimeout(j,t)),i}return t=k(t)||0,g(a)&&(m=!!a.leading,s="maxWait"in a,c=s?v(k(a.maxWait)||0,t):c,f="trailing"in a?!!a.trailing:f),O.cancel=x,O.flush=L,O}function y(e,t,a){var r=!0,l=!0;if("function"!=typeof e)throw new TypeError(n);return g(a)&&(r="leading"in a?!!a.leading:r,l="trailing"in a?!!a.trailing:l),b(e,t,{leading:r,maxWait:t,trailing:l})}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){return!!e&&"object"==typeof e}function j(e){return"symbol"==typeof e||w(e)&&E.call(e)==r}function k(e){if("number"==typeof e)return e;if(j(e))return a;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=i.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):c.test(e)?a:+e}e.exports=y}).call(this,n("M3Yg"))},YSYM:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),l=n("Ynrg"),c=n("lgsW"),i=n("2m7N"),o=r.a.memo((e=>{var t=e.demos,n=t["result-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"result-\u7ed3\u679c"},r.a.createElement(l["AnchorLink"],{to:"#result-\u7ed3\u679c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result \u7ed3\u679c"),r.a.createElement("p",null,"\u5bf9\u524d\u4e00\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u8fdb\u884c\u53cd\u9988\u3002"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.a.createElement(l["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("p",null,"\u5f53\u6709\u91cd\u8981\u64cd\u4f5c\u9700\u544a\u77e5\u7528\u6237\u5904\u7406\u7ed3\u679c\uff0c\u4e14\u53cd\u9988\u5185\u5bb9\u8f83\u4e3a\u590d\u6742\u65f6\u4f7f\u7528\u3002"),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement(l["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),r.a.createElement(c["default"],t["result-demo1"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement("h3",{id:"\u5c5e\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"description"),r.a.createElement("td",null,"\u63cf\u8ff0"),r.a.createElement("td",null,r.a.createElement("code",null,"ReactNode")),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"icon"),r.a.createElement("td",null,"\u81ea\u5b9a\u4e49 ",r.a.createElement("code",null,"icon")),r.a.createElement("td",null,r.a.createElement("code",null,"ReactNode")),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"status"),r.a.createElement("td",null,"\u72b6\u6001\u7c7b\u578b"),r.a.createElement("td",null,r.a.createElement("code",null,"'success' | 'error' | 'info' | 'waiting' | 'warning'")),r.a.createElement("td",null,r.a.createElement("code",null,"'info'"))),r.a.createElement("tr",null,r.a.createElement("td",null,"title"),r.a.createElement("td",null,"\u6807\u9898"),r.a.createElement("td",null,r.a.createElement("code",null,"ReactNode")),r.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);