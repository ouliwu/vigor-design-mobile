(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"9kvl":function(e,t,l){"use strict";var a=l("FfOG");l.d(t,"a",(function(){return a["b"]}));l("bCY9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),c=l("hKI/"),r=l.n(c);l("WpQk");function m(e,t){return i(e)||E(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,c=[],r=!0,m=!1;try{for(l=l.call(e);!(r=(a=l.next()).done);r=!0)if(c.push(a.value),t&&c.length===t)break}catch(u){m=!0,n=u}finally{try{r||null==l["return"]||l["return"]()}finally{if(m)throw n}}return c}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),c=Object(a["useState"])(!1),u=m(c,2),o=u[0],d=u[1],E=Object(a["useState"])(!1),i=m(E,2),s=i[0],h=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=r()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},jOUH:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),c=l("dEAq"),r=l("Hf60"),m=l("H1Ra"),u=l("dMo/"),o=n.a.memo((e=>{var t=e.demos,l=t["dialog-demo1"].component,a=t["dialog-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"dialog-\u5bf9\u8bdd\u6846"},n.a.createElement(c["AnchorLink"],{to:"#dialog-\u5bf9\u8bdd\u6846","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog \u5bf9\u8bdd\u6846"),n.a.createElement("p",null,"\u7528\u4e8e\u91cd\u8981\u4fe1\u606f\u7684\u544a\u77e5\u6216\u64cd\u4f5c\u7684\u53cd\u9988\uff0c\u5e76\u9644\u5e26\u5c11\u91cf\u7684\u9009\u9879\u4f9b\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(c["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("p",null,"\u9700\u8981\u7528\u6237\u5904\u7406\u4e8b\u52a1\uff0c\u53c8\u4e0d\u5e0c\u671b\u8df3\u8f6c\u9875\u9762\u4ee5\u81f4\u6253\u65ad\u5de5\u4f5c\u6d41\u7a0b\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Modal \u5728\u5f53\u524d\u9875\u9762\u6b63\u4e2d\u6253\u5f00\u4e00\u4e2a\u6d6e\u5c42\uff0c\u627f\u8f7d\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(r["default"],t["dialog-demo1"].previewerProps,n.a.createElement(l,null)),n.a.createElement(r["default"],t["dialog-demo2"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"dialog"},n.a.createElement(c["AnchorLink"],{to:"#dialog","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog"),n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"actions"),n.a.createElement("td",null,"\u64cd\u4f5c\u6309\u94ae\u5217\u8868\uff0c\u53ef\u4ee5\u4f20\u5165\u4e8c\u7ea7\u6570\u7ec4\u6765\u5b9e\u73b0\u540c\u4e00\u884c\u5185\u5e76\u6392\u591a\u4e2a\u6309\u94ae"),n.a.createElement("td",null,n.a.createElement("code",null,"(Action | Action[])[]")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"afterClose"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," \u5b8c\u5168\u5173\u95ed\u540e\u7684\u56de\u8c03"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterShow"),n.a.createElement("td",null,"\u5b8c\u5168\u5c55\u793a\u540e\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"bodyClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," \u5185\u5bb9\u7c7b\u540d"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"bodyStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," \u5185\u5bb9\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"closeOnAction"),n.a.createElement("td",null,"\u70b9\u51fb\u64cd\u4f5c\u6309\u94ae\u540e\u540e\u662f\u5426\u5173\u95ed"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"closeOnMaskClick"),n.a.createElement("td",null,"\u662f\u5426\u652f\u6301\u70b9\u51fb\u906e\u7f69\u5173\u95ed\u5bf9\u8bdd\u6846"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"content"),n.a.createElement("td",null,"\u5bf9\u8bdd\u6846\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyOnClose"),n.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disableBodyScroll"),n.a.createElement("td",null,"\u662f\u5426\u7981\u7528 ",n.a.createElement("code",null,"body")," \u6eda\u52a8"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 ",n.a.createElement("code",null,"DOM")," \u7ed3\u6784"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getContainer"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5bf9\u8bdd\u6846\u7684\u7236\u5bb9\u5668"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLElement | (() => HTMLElement) | null")),n.a.createElement("td",null,n.a.createElement("code",null,"null"))),n.a.createElement("tr",null,n.a.createElement("td",null,"header"),n.a.createElement("td",null,"\u9876\u90e8\u533a\u57df"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"image"),n.a.createElement("td",null,"\u56fe\u7247 ",n.a.createElement("code",null,"url")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"maskClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," \u906e\u7f69\u7c7b\u540d"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"maskStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," \u906e\u7f69\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onAction"),n.a.createElement("td",null,"\u70b9\u51fb\u64cd\u4f5c\u6309\u94ae\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(action: Action, index: number) => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClose"),n.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"stopPropagation"),n.a.createElement("td",null,"\u963b\u6b62\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5192\u6ce1"),n.a.createElement("td",null,n.a.createElement("code",null,"PropagationEvent[]")),n.a.createElement("td",null,n.a.createElement("code",null,"['click']"))),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"\u5bf9\u8bdd\u6846\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"visible"),n.a.createElement("td",null,"\u663e\u793a\u9690\u85cf"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h3",{id:"action"},n.a.createElement(c["AnchorLink"],{to:"#action","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Action"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"bold"),n.a.createElement("td",null,"\u662f\u5426\u6587\u5b57\u52a0\u7c97"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,n.a.createElement("code",null,"Action")," \u7c7b\u540d"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"danger"),n.a.createElement("td",null,"\u662f\u5426\u4e3a\u5371\u9669\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"key"),n.a.createElement("td",null,"\u552f\u4e00\u6807\u8bb0"),n.a.createElement("td",null,n.a.createElement("code",null,"string | number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u70b9\u51fb\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,n.a.createElement("code",null,"Action")," \u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"\u6307\u4ee4\u5f0f"},n.a.createElement(c["AnchorLink"],{to:"#\u6307\u4ee4\u5f0f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u5f0f"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6307\u4ee4\u5f0f\u7684\u65b9\u5f0f\u4f7f\u7528 ",n.a.createElement("code",null,"Dialog"),"\uff1a"),n.a.createElement("h3",{id:"dialogshow"},n.a.createElement(c["AnchorLink"],{to:"#dialogshow","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.show"),n.a.createElement(m["a"],{code:"const handler = Dialog.show(props)",lang:"ts"}),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",n.a.createElement("code",null,"Dialog")," \u4e0a\u7684 ",n.a.createElement("code",null,"show")," \u65b9\u6cd5\u76f4\u63a5\u6253\u5f00\u5bf9\u8bdd\u6846\uff0c\u5176\u4e2d ",n.a.createElement("code",null,"props")," \u53c2\u6570\u7684\u7c7b\u578b\u540c\u4e0a\u8868\uff0c\u4f46\u4e0d\u652f\u6301\u4f20\u5165 ",n.a.createElement("code",null,"visible")," \u5c5e\u6027\u3002"),n.a.createElement("p",null,"\u5f53\u5bf9\u8bdd\u6846\u88ab\u5173\u95ed\u540e\uff0c\u7ec4\u4ef6\u5b9e\u4f8b\u4f1a\u81ea\u52a8\u9500\u6bc1\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"show")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u63a7\u5236\u5668\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"close"),n.a.createElement("td",null,"\u5173\u95ed\u5bf9\u8bdd\u6846"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,n.a.createElement("code",null,"show")," \u53ea\u662f\u4e00\u4e2a\u5f88\u57fa\u7840\u7684\u65b9\u6cd5\uff0c\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u66f4\u4e3a\u5e38\u7528\u7684\u662f\u4e0b\u9762\u7684 ",n.a.createElement("code",null,"alert")," \u548c ",n.a.createElement("code",null,"confirm")," \u65b9\u6cd5\uff1a"),n.a.createElement("h3",{id:"dialogalert"},n.a.createElement(c["AnchorLink"],{to:"#dialogalert","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.alert"),n.a.createElement("p",null,n.a.createElement("code",null,"alert")," \u63a5\u53d7\u7684\u53c2\u6570\u540c ",n.a.createElement("code",null,"show"),"\uff0c\u4f46\u4e0d\u652f\u6301 ",n.a.createElement("code",null,"closeOnAction")," ",n.a.createElement("code",null,"actions")," \u5c5e\u6027\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u4e0d\u662f\u4e00\u4e2a\u63a7\u5236\u5668\u5bf9\u8c61\uff0c\u800c\u662f ",n.a.createElement("code",null,"Promise<void>"),"\u3002"),n.a.createElement("p",null,"\u6b64\u5916\uff0c\u5b83\u8fd8\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"confirmText"),n.a.createElement("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'\u6211\u77e5\u9053\u4e86'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"dialogconfirm"},n.a.createElement(c["AnchorLink"],{to:"#dialogconfirm","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.confirm"),n.a.createElement("p",null,n.a.createElement("code",null,"confirm")," \u63a5\u53d7\u7684\u53c2\u6570\u540c ",n.a.createElement("code",null,"show"),"\uff0c\u4f46\u4e0d\u652f\u6301 ",n.a.createElement("code",null,"closeOnAction")," ",n.a.createElement("code",null,"actions")," \u5c5e\u6027\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u4e0d\u662f\u4e00\u4e2a\u63a7\u5236\u5668\u5bf9\u8c61\uff0c\u800c\u662f ",n.a.createElement("code",null,"Promise<boolean>"),"\u3002"),n.a.createElement("p",null,"\u6b64\u5916\uff0c\u5b83\u8fd8\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"cancelText"),n.a.createElement("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'\u53d6\u6d88'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"confirmText"),n.a.createElement("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'\u786e\u8ba4'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onCancel"),n.a.createElement("td",null,"\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8e",n.a.createElement("strong",null,"\u6307\u4ee4\u5f0f"),"\u521b\u5efa\u51fa\u6765\u7684 Dialog\uff0c",n.a.createElement("strong",null,"\u5e76\u4e0d\u4f1a\u611f\u77e5\u7236\u7ec4\u4ef6\u7684\u91cd\u6e32\u67d3\u548c\u5176\u4e2d state \u7684\u66f4\u65b0"),"\uff0c\u56e0\u6b64\u4e0b\u9762\u8fd9\u79cd\u5199\u6cd5\u662f\u5b8c\u5168\u9519\u8bef\u7684\uff1a"),n.a.createElement(m["a"],{code:'export default function App() {\n  const [captcha, setCaptcha] = useState<string>("");\n  const showCaptcha = () => {\n    return Dialog.confirm({\n      title: "\u77ed\u4fe1\u9a8c\u8bc1",\n      content: (\n        <div>\n          <Input\n            placeholder="\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"\n            value={captcha} // App \u4e2d captcha \u7684\u66f4\u65b0\u662f\u4e0d\u4f1a\u4f20\u9012\u5230 Dialog \u4e2d\u7684\n            onChange={(v) => {\n              setCaptcha(v)\n            }}\n          />\n        </div>\n      )\n    });\n  };\n  return (\n    <div>\n      <Button onClick={showCaptcha}>Show</Button>\n    </div>\n  );\n}',lang:"tsx"}),n.a.createElement("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728 Dialog \u4e2d\u5305\u542b\u5f88\u591a\u590d\u6742\u7684\u72b6\u6001\u548c\u903b\u8f91\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u58f0\u660e\u5f0f\u7684\u8bed\u6cd5\uff0c\u6216\u8005\u8003\u8651\u81ea\u5df1\u5c06\u5185\u90e8\u72b6\u6001\u548c\u903b\u8f91\u5355\u72ec\u5c01\u88c5\u4e00\u4e2a\u7ec4\u4ef6\u51fa\u6765\uff0c\u8be6\u89c1 ",n.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-mobile/issues/4762"},"#4762"),"\u3002"),n.a.createElement("h3",{id:"dialogclear"},n.a.createElement(c["AnchorLink"],{to:"#dialogclear","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.clear"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",n.a.createElement("code",null,"Dialog")," \u4e0a\u7684 ",n.a.createElement("code",null,"clear")," \u65b9\u6cd5\u5173\u95ed\u6240\u6709\u6253\u5f00\u7684\u5bf9\u8bdd\u6846\uff0c\u901a\u5e38\u7528\u4e8e\u8def\u7531\u76d1\u542c\u4e2d\uff0c\u5904\u7406\u8def\u7531\u524d\u8fdb\u3001\u540e\u9000\u4e0d\u80fd\u5173\u95ed\u5bf9\u8bdd\u6846\u7684\u95ee\u9898\u3002"))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:l})}}}]);