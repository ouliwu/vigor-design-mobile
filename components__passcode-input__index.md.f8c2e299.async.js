(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"2m7N":function(e,t,l){"use strict";var n=l("ahKI"),a=l.n(n),r=l("L+to"),c=l.n(r);l("7d6Y");function u(e,t){return E(e)||i(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){u=!0,a=o}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=u(r,2),m=o[0],d=o[1],i=Object(n["useState"])(!1),E=u(i,2),s=E[0],f=E[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},"7d6Y":function(e,t,l){},"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},"L+to":function(e,t,l){(function(t){var l="Expected a function",n=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,o=/^0o[0-7]+$/i,m=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,E=d||i||Function("return this")(),s=Object.prototype,f=s.toString,p=Math.max,h=Math.min,v=function(){return E.Date.now()};function b(e,t,n){var a,r,c,u,o,m,d=0,i=!1,E=!1,s=!0;if("function"!=typeof e)throw new TypeError(l);function f(t){var l=a,n=r;return a=r=void 0,d=t,u=e.apply(n,l),u}function b(e){return d=e,o=setTimeout(k,t),i?f(e):u}function y(e){var l=e-m,n=e-d,a=t-l;return E?h(a,c-n):a}function w(e){var l=e-m,n=e-d;return void 0===m||l>=t||l<0||E&&n>=c}function k(){var e=v();if(w(e))return N(e);o=setTimeout(k,y(e))}function N(e){return o=void 0,s&&a?f(e):(a=r=void 0,u)}function j(){void 0!==o&&clearTimeout(o),d=0,a=m=r=o=void 0}function A(){return void 0===o?u:N(v())}function I(){var e=v(),l=w(e);if(a=arguments,r=this,m=e,l){if(void 0===o)return b(m);if(E)return o=setTimeout(k,t),f(m)}return void 0===o&&(o=setTimeout(k,t)),u}return t=x(t)||0,g(n)&&(i=!!n.leading,E="maxWait"in n,c=E?p(x(n.maxWait)||0,t):c,s="trailing"in n?!!n.trailing:s),I.cancel=j,I.flush=A,I}function y(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return g(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:a,maxWait:t,trailing:r})}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){return!!e&&"object"==typeof e}function k(e){return"symbol"==typeof e||w(e)&&f.call(e)==a}function x(e){if("number"==typeof e)return e;if(k(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||o.test(e)?m(e.slice(2),l?2:8):c.test(e)?n:+e}e.exports=y}).call(this,l("M3Yg"))},tJAw:function(e,t,l){"use strict";l.r(t);var n=l("ahKI"),a=l.n(n),r=l("Ynrg"),c=l("lgsW"),u=l("2m7N"),o=a.a.memo((e=>{var t=e.demos,l=t["passcode-input-demo1"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"passcodeinput-\u5bc6\u7801\u8f93\u5165\u6846"},a.a.createElement(r["AnchorLink"],{to:"#passcodeinput-\u5bc6\u7801\u8f93\u5165\u6846","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"PasscodeInput \u5bc6\u7801\u8f93\u5165\u6846"),a.a.createElement("p",null,"\u5bc6\u7801\u8f93\u5165\u672c\u6587\u6846\u3002"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("p",null,"\u9002\u7528\u4e8e\u8f93\u5165\u5bc6\u7801\u65f6\u9700\u8981\u8131\u654f\u663e\u793a\u3002"),a.a.createElement("p",null,"\u5bc6\u7801\u3001\u9a8c\u8bc1\u7801\u8f93\u5165\u6846"),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["passcode-input-demo1"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"passcodeinput"},a.a.createElement(r["AnchorLink"],{to:"#passcodeinput","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"PasscodeInput"),a.a.createElement("h3",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"caret"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u5149\u6807"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"className"),a.a.createElement("td",null,"\u5916\u5c42 className"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"defaultValue"),a.a.createElement("td",null,"\u975e\u53d7\u63a7\u503c"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"error"),a.a.createElement("td",null,"\u662f\u5426\u6709\u9519"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"keyboard"),a.a.createElement("td",null,"\u952e\u76d8\u7ec4\u4ef6\uff0c\u5982\u4e0d\u4f20\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7cfb\u7edf\u539f\u751f\u7684\u952e\u76d8"),a.a.createElement("td",null,a.a.createElement("code",null,"NumberKeyboard")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"length"),a.a.createElement("td",null,"\u8f93\u5165\u6846\u957f\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"6"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onBlur"),a.a.createElement("td",null,"\u5931\u53bb\u7126\u70b9\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onChange"),a.a.createElement("td",null,"\u8f93\u5165\u65f6\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"(value: string) => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onFill"),a.a.createElement("td",null,"\u586b\u5199\u5b8c\u6210\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onFocus"),a.a.createElement("td",null,"\u83b7\u53d6\u7126\u70b9\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"plain"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u660e\u6587"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"seperated"),a.a.createElement("td",null,"\u683c\u5b50\u662f\u5426\u662f\u5f7c\u6b64\u5206\u79bb\u7684"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"style"),a.a.createElement("td",null,"\u5916\u5c42 style"),a.a.createElement("td",null,a.a.createElement("code",null,"CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"value"),a.a.createElement("td",null,"\u53d7\u63a7\u503c"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")))),a.a.createElement("p",null,"\u5f53 ",a.a.createElement("code",null,"length")," \u4e3a\u975e\u6b63\u6570\u65f6\u4ee5\u9ed8\u8ba4\u503c\u4e3a\u51c6\u3002"),a.a.createElement("h3",{id:"ref"},a.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Ref"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"blur"),a.a.createElement("td",null,"\u8ba9\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))),a.a.createElement("tr",null,a.a.createElement("td",null,"focus"),a.a.createElement("td",null,"\u8ba9\u8f93\u5165\u6846\u83b7\u5f97\u7126\u70b9"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))))),a.a.createElement("h3",{id:"css-\u53d8\u91cf"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"--border-color"),a.a.createElement("td",null,"\u8fb9\u6846\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#E5E5E5"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--border-radius"),a.a.createElement("td",null,"\u8fb9\u6846\u5706\u89d2"),a.a.createElement("td",null,a.a.createElement("code",null,"8px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--cell-gap"),a.a.createElement("td",null,"\u5355\u5143\u683c\u95f4\u8ddd\uff0c\u4ec5\u5728 ",a.a.createElement("code",null,"seperated")," \u6a21\u5f0f\u4e0b\u751f\u6548"),a.a.createElement("td",null,a.a.createElement("code",null,"6px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--cell-size"),a.a.createElement("td",null,"\u5355\u5143\u683c\u5927\u5c0f"),a.a.createElement("td",null,a.a.createElement("code",null,"42px"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--dot-size"),a.a.createElement("td",null,"\u5bc6\u7801\u9690\u85cf\u65f6\uff0c\u70b9\u7684\u5927\u5c0f"),a.a.createElement("td",null,a.a.createElement("code",null,"10px"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}}}]);