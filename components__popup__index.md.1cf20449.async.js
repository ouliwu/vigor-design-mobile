(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("WpQk");function u(e,t){return i(e)||E(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),d=m[0],o=m[1],E=Object(n["useState"])(!1),i=u(E,2),s=i[0],p=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){o(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},"yd+a":function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("Hf60"),u=l("dMo/"),m=a.a.memo((e=>{var t=e.demos,l=t["popup-demo1"].component,n=t["popup-demo2"].component,m=t["center-popup-demo1"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"popup-\u5f39\u51fa\u5c42"},a.a.createElement(r["AnchorLink"],{to:"#popup-\u5f39\u51fa\u5c42","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Popup \u5f39\u51fa\u5c42"),a.a.createElement("p",null,"\u4ece\u5c4f\u5e55\u6ed1\u51fa\u6216\u5f39\u51fa\u4e00\u5757\u81ea\u5b9a\u4e49\u5185\u5bb9\u533a\u3002"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("p",null,"\u9002\u7528\u4e8e\u5c55\u793a\u5f39\u7a97\u3001\u4fe1\u606f\u63d0\u793a\u3001\u9009\u62e9\u8f93\u5165\u3001\u5207\u6362\u7b49\u5185\u5bb9\uff0c\u652f\u6301\u591a\u4e2a\u5f39\u51fa\u5c42\u53e0\u52a0\u5c55\u793a\u3002"),a.a.createElement("h2",{id:"popup"},a.a.createElement(r["AnchorLink"],{to:"#popup","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Popup"),a.a.createElement("h3",{id:"\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["popup-demo1"].previewerProps,a.a.createElement(l,null)),a.a.createElement(c["default"],t["popup-demo2"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"afterClose"),a.a.createElement("td",null,"\u5b8c\u5168\u5173\u95ed\u540e\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"afterShow"),a.a.createElement("td",null,"\u5b8c\u5168\u5c55\u793a\u540e\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"bodyClassName"),a.a.createElement("td",null,"\u5185\u5bb9\u533a\u57df\u7c7b\u540d"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"bodyStyle"),a.a.createElement("td",null,"\u5185\u5bb9\u533a\u57df\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"React.CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"className"),a.a.createElement("td",null,"\u5bb9\u5668\u7c7b\u540d"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"closeOnMaskClick"),a.a.createElement("td",null,"\u70b9\u51fb\u80cc\u666f\u8499\u5c42\u540e\u662f\u5426\u5173\u95ed"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"destroyOnClose"),a.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"forceRender"),a.a.createElement("td",null,"\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"getContainer"),a.a.createElement("td",null,"\u6307\u5b9a\u6302\u8f7d\u7684 ",a.a.createElement("code",null,"HTML")," \u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a ",a.a.createElement("code",null,"body"),"\uff0c\u5982\u679c\u4e3a ",a.a.createElement("code",null,"null")," \u7684\u8bdd\uff0c\u4f1a\u6e32\u67d3\u5230\u5f53\u524d\u8282\u70b9"),a.a.createElement("td",null,a.a.createElement("code",null,"HTMLElement | () => HTMLElement | null")),a.a.createElement("td",null,a.a.createElement("code",null,"() => document.body"))),a.a.createElement("tr",null,a.a.createElement("td",null,"mask"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u8499\u5c42"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"maskClassName"),a.a.createElement("td",null,"\u906e\u7f69\u7c7b\u540d"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"maskStyle"),a.a.createElement("td",null,"\u906e\u7f69\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"React.CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb\u65f6\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),a.a.createElement("td",null,a.a.createElement("code",null,"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onMaskClick"),a.a.createElement("td",null,"\u70b9\u51fb\u8499\u5c42\u89e6\u53d1"),a.a.createElement("td",null,a.a.createElement("code",null,"(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"position"),a.a.createElement("td",null,"\u6307\u5b9a\u5f39\u51fa\u7684\u4f4d\u7f6e"),a.a.createElement("td",null,a.a.createElement("code",null,"'bottom' | 'top' | 'left' | 'right'")),a.a.createElement("td",null,a.a.createElement("code",null,"'bottom'"))),a.a.createElement("tr",null,a.a.createElement("td",null,"showCloseButton"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"stopPropagation"),a.a.createElement("td",null,"\u963b\u6b62\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5192\u6ce1"),a.a.createElement("td",null,a.a.createElement("code",null,"PropagationEvent[]")),a.a.createElement("td",null,a.a.createElement("code",null,"['click']"))),a.a.createElement("tr",null,a.a.createElement("td",null,"style"),a.a.createElement("td",null,"\u5bb9\u5668\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"React.CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"visible"),a.a.createElement("td",null,"\u662f\u5426\u53ef\u89c1"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"css-\u53d8\u91cf"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"--z-index"),a.a.createElement("td",null,"\u5143\u7d20\u7684 ",a.a.createElement("code",null,"z-index")),a.a.createElement("td",null,a.a.createElement("code",null,"1000")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-popup-z-index"))))),a.a.createElement("h2",{id:"centerpopup"},a.a.createElement(r["AnchorLink"],{to:"#centerpopup","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CenterPopup"),a.a.createElement("p",null,"\u548c Popup \u4e0d\u540c\uff0cCenterPopup \u662f\u4ece\u4e2d\u95f4\u5f39\u51fa\u7684\uff0cDialog \u548c Modal \u90fd\u662f\u57fa\u4e8e\u5b83\u5b9e\u73b0\u7684\u3002"),a.a.createElement("h3",{id:"\u793a\u4f8b-1"},a.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),a.a.createElement(c["default"],t["center-popup-demo1"].previewerProps,a.a.createElement(m,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u5c5e\u6027-1"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement("p",null,"CenterPopup \u4e0d\u652f\u6301 ",a.a.createElement("code",null,"position")," \u5c5e\u6027\uff0c\u5e76\u4e14 ",a.a.createElement("code",null,"getContainer")," \u7684\u9ed8\u8ba4\u503c\u662f ",a.a.createElement("code",null,"null"),"\uff0c\u5176\u4ed6\u5c5e\u6027\u540c Popup\u3002"),a.a.createElement("h3",{id:"css-\u53d8\u91cf-1"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"--background-color"),a.a.createElement("td",null,"\u5f39\u5c42\u7684\u80cc\u666f\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#ffffff")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-center-popup-background-color"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--border-radius"),a.a.createElement("td",null,"\u5f39\u5c42\u7684\u8fb9\u6846\u5706\u89d2"),a.a.createElement("td",null,a.a.createElement("code",null,"8px")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-center-popup-border-radius"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--max-width"),a.a.createElement("td",null,"\u5f39\u5c42\u7684\u6700\u5927\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"75vw")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-center-popup-max-width"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--min-width"),a.a.createElement("td",null,"\u5f39\u5c42\u7684\u6700\u5c0f\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"280px")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-center-popup-min-width"))),a.a.createElement("tr",null,a.a.createElement("td",null,"--z-index"),a.a.createElement("td",null,"\u5143\u7d20\u7684 ",a.a.createElement("code",null,"z-index")),a.a.createElement("td",null,a.a.createElement("code",null,"1000")),a.a.createElement("td",null,a.a.createElement("code",null,"--adm-center-popup-z-index"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}}}]);