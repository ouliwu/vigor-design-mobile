(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("WpQk");function u(e,t){return i(e)||E(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),d=m[0],o=m[1],E=Object(n["useState"])(!1),i=u(E,2),s=i[0],h=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){o(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},mOjX:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("Hf60"),u=l("H1Ra"),m=l("dMo/"),d=a.a.memo((e=>{var t=e.demos,l=t["action-sheet-demo1"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"actionsheet-\u52a8\u4f5c\u9762\u677f"},a.a.createElement(r["AnchorLink"],{to:"#actionsheet-\u52a8\u4f5c\u9762\u677f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"ActionSheet \u52a8\u4f5c\u9762\u677f"),a.a.createElement("p",null,"\u4ece\u5e95\u90e8\u5f39\u51fa\u7684\u52a8\u4f5c\u83dc\u5355\u9762\u677f\u3002"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("p",null,"\u7531\u7528\u6237\u64cd\u4f5c\u89e6\u53d1\uff0c\u63d0\u4f9b\u4e00\u7ec4\u4e0e\u5f53\u524d\u573a\u666f\u64cd\u4f5c\u76f8\u5173\u7684\u4e24\u4e2a\u6216\u591a\u4e2a\u9009\u9879\uff0c\u8ba9\u7528\u6237\u5728\u4e0d\u79bb\u573a\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210\u64cd\u4f5c\u3002"),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["action-sheet-demo1"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"actionsheet"},a.a.createElement(r["AnchorLink"],{to:"#actionsheet","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"ActionSheet"),a.a.createElement("h3",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"actions"),a.a.createElement("td",null,"\u9762\u677f\u9009\u9879\u5217\u8868"),a.a.createElement("td",null,a.a.createElement("code",null,"Action[]")),a.a.createElement("td",null,a.a.createElement("code",null,"[]"))),a.a.createElement("tr",null,a.a.createElement("td",null,"afterClose"),a.a.createElement("td",null,"\u5b8c\u5168\u5173\u95ed\u540e\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"cancelText"),a.a.createElement("td",null,"\u53d6\u6d88\u6309\u94ae\u6587\u5b57\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a\u7a7a\u5219\u4e0d\u663e\u793a\u53d6\u6d88\u6309\u94ae"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"closeOnAction"),a.a.createElement("td",null,"\u70b9\u51fb\u9009\u9879\u540e\u662f\u5426\u5173\u95ed"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"closeOnMaskClick"),a.a.createElement("td",null,"\u70b9\u51fb\u80cc\u666f\u8499\u5c42\u540e\u662f\u5426\u5173\u95ed"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"destroyOnClose"),a.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"forceRender"),a.a.createElement("td",null,"\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"extra"),a.a.createElement("td",null,"\u9876\u90e8\u7684\u989d\u5916\u533a\u57df"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"getContainer"),a.a.createElement("td",null,"\u6307\u5b9a\u6302\u8f7d\u7684 ",a.a.createElement("code",null,"HTML")," \u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a ",a.a.createElement("code",null,"body"),"\uff0c\u5982\u679c\u4e3a ",a.a.createElement("code",null,"null")," \u7684\u8bdd\uff0c\u4f1a\u6e32\u67d3\u5230\u5f53\u524d\u8282\u70b9"),a.a.createElement("td",null,a.a.createElement("code",null,"HTMLElement | () => HTMLElement | null")),a.a.createElement("td",null,a.a.createElement("code",null,"document.body"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onAction"),a.a.createElement("td",null,"\u70b9\u51fb\u9009\u9879\u65f6\u89e6\u53d1\uff0c\u7981\u7528\u6216\u52a0\u8f7d\u72b6\u6001\u4e0b\u4e0d\u4f1a\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"(action: Action, index: number) => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onMaskClick"),a.a.createElement("td",null,"\u70b9\u51fb\u80cc\u666f\u8499\u5c42\u65f6\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"popupClassName"),a.a.createElement("td",null,a.a.createElement("code",null,"ActionSheet")," \u5f39\u51fa\u5c42\u7c7b\u540d"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"popupStyle"),a.a.createElement("td",null,a.a.createElement("code",null,"ActionSheet")," \u5f39\u51fa\u5c42\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"React.CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"safeArea"),a.a.createElement("td",null,"\u662f\u5426\u5f00\u542f\u5b89\u5168\u533a\u9002\u914d"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"visible"),a.a.createElement("td",null,"\u663e\u793a\u9690\u85cf"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"action"},a.a.createElement(r["AnchorLink"],{to:"#action","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Action"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"danger"),a.a.createElement("td",null,"\u662f\u5426\u4e3a\u5371\u9669\u72b6\u6001"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"description"),a.a.createElement("td",null,"\u63cf\u8ff0"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"key"),a.a.createElement("td",null,"\u552f\u4e00\u6807\u8bb0"),a.a.createElement("td",null,a.a.createElement("code",null,"string | number")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb\u65f6\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"text"),a.a.createElement("td",null,"\u6807\u9898"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"bold"),a.a.createElement("td",null,"\u6807\u9898\u662f\u5426\u52a0\u7c97"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"\u6307\u4ee4\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#\u6307\u4ee4\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u5f0f"),a.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6307\u4ee4\u5f0f\u7684\u65b9\u5f0f\u4f7f\u7528 ActionSheet\uff1a"),a.a.createElement(u["a"],{code:"const handler = ActionSheet.show(props)",lang:"ts"}),a.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",a.a.createElement("code",null,"ActionSheet")," \u4e0a\u7684 ",a.a.createElement("code",null,"show")," \u65b9\u6cd5\u76f4\u63a5\u6253\u5f00\u52a8\u4f5c\u9762\u677f\uff0c\u5176\u4e2d ",a.a.createElement("code",null,"props")," \u53c2\u6570\u7684\u7c7b\u578b\u540c\u4e0a\u8868\uff0c\u4f46\u4e0d\u652f\u6301\u4f20\u5165 ",a.a.createElement("code",null,"visible")," \u5c5e\u6027\u3002"),a.a.createElement("p",null,"\u5f53\u52a8\u4f5c\u9762\u677f\u88ab\u5173\u95ed\u540e\uff0c\u7ec4\u4ef6\u5b9e\u4f8b\u4f1a\u81ea\u52a8\u9500\u6bc1\u3002"),a.a.createElement("p",null,a.a.createElement("code",null,"show")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u63a7\u5236\u5668\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"close"),a.a.createElement("td",null,"\u5173\u95ed\u52a8\u4f5c\u9762\u677f"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:l})}}}]);