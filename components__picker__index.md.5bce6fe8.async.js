(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"9kvl":function(e,t,l){"use strict";var a=l("FfOG");l.d(t,"a",(function(){return a["b"]}));l("bCY9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),c=l("hKI/"),r=l.n(c);l("WpQk");function m(e,t){return i(e)||E(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,c=[],r=!0,m=!1;try{for(l=l.call(e);!(r=(a=l.next()).done);r=!0)if(c.push(a.value),t&&c.length===t)break}catch(u){m=!0,n=u}finally{try{r||null==l["return"]||l["return"]()}finally{if(m)throw n}}return c}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),c=Object(a["useState"])(!1),u=m(c,2),d=u[0],o=u[1],E=Object(a["useState"])(!1),i=m(E,2),s=i[0],p=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=r()((function(){o(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},fDEZ:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),c=l("dEAq"),r=l("Hf60"),m=l("H1Ra"),u=l("dMo/"),d=n.a.memo((e=>{var t=e.demos,l=t["picker-demo1"].component,a=t["picker-demo2"].component,d=t["cascade-picker-demo1"].component,o=t["date-picker-demo1"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"picker-\u9009\u62e9\u5668"},n.a.createElement(c["AnchorLink"],{to:"#picker-\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Picker \u9009\u62e9\u5668"),n.a.createElement("p",null,"\u663e\u793a\u4e00\u4e2a\u6216\u591a\u4e2a\u9009\u9879\u96c6\u5408\u7684\u7684\u53ef\u6eda\u52a8\u5217\u8868\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(c["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u63d0\u4f9b\u4e00\u7ec4\u6216\u591a\u7ec4\u5173\u8054\u9009\u9879\u4f9b\u7528\u6237\u9009\u62e9\u3002"),n.a.createElement("li",null,"\u5f53\u5c11\u4e8e 5 \u4e2a\u9009\u9879\u65f6\uff0c\u5efa\u8bae\u76f4\u63a5\u5c06\u9009\u9879\u5e73\u94fa\uff0c\u4f7f\u7528 Radio \u662f\u66f4\u597d\u7684\u9009\u62e9\u3002")),n.a.createElement("p",null,"Picker \u7cfb\u5217\u4e00\u5171\u5305\u62ec\u4e86\u4e09\u4e2a\u7ec4\u4ef6\uff1a",n.a.createElement(c["AnchorLink"],{to:"#picker"},"Picker"),"\u3001",n.a.createElement(c["AnchorLink"],{to:"#cascadepicker"},"CascadePicker"),"\u3001",n.a.createElement(c["AnchorLink"],{to:"#datepicker"},"DatePicker"),"\u3002"),n.a.createElement("h2",{id:"picker"},n.a.createElement(c["AnchorLink"],{to:"#picker","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Picker"),n.a.createElement("h3",{id:"\u793a\u4f8b"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(r["default"],t["picker-demo1"].previewerProps,n.a.createElement(l,null)),n.a.createElement(r["default"],t["picker-demo2"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(m["a"],{code:"type PickerColumnItem = {\n  label: ReactNode\n  value: string\n  key?: string | number\n}\n\ntype PickerColumn = (string | PickerColumnItem)[]\n\ntype PickerValue = string | null\n\ntype PickerValueExtend = {\n  items: (PickerColumnItem | null)[]\n}",lang:"typescript"}),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"cancelText"),n.a.createElement("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'\u53d6\u6d88'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u6240\u9009\u9879\u7684\u6e32\u67d3\u51fd\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"(items: PickerColumnItem[], actions: PickerActions) => ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"closeOnMaskClick"),n.a.createElement("td",null,"\u70b9\u51fb\u80cc\u666f\u8499\u5c42\u540e\u662f\u5426\u5173\u95ed"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u914d\u7f6e\u6bcf\u4e00\u5217\u7684\u9009\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"confirmText"),n.a.createElement("td",null,"\u786e\u5b9a\u6309\u94ae\u7684\u6587\u5b57"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'\u786e\u5b9a'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"PickerValue[]")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyOnClose"),n.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"mouseWheel"),n.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u8fdb\u884c\u9009\u62e9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onCancel"),n.a.createElement("td",null,"\u53d6\u6d88\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClose"),n.a.createElement("td",null,"\u786e\u8ba4\u548c\u53d6\u6d88\u65f6\u90fd\u4f1a\u89e6\u53d1\u5173\u95ed\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"\u786e\u8ba4\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: PickerValue[], extend: PickerValueExtend) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSelect"),n.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: PickerValue[], extend: PickerValueExtend) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"popupClassName"),n.a.createElement("td",null,"Popup \u5f39\u5c42\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u7c7b\u540d"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"popupStyle"),n.a.createElement("td",null,"Popup \u5f39\u5c42\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties ")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"renderLabel"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u5217\u5c55\u793a\u7684\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"(item: PickerColumnItem) => ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"(item) => item.label"))),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"\u9009\u4e2d\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"PickerValue[]")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"visible"),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u9009\u62e9\u5668"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"loading"),n.a.createElement("td",null,"\u662f\u5426\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"loadingContent"),n.a.createElement("td",null,"\u52a0\u8f7d\u72b6\u6001\u4e0b\u5c55\u793a\u7684\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u8f6c\u5708\u52a0\u8f7d\u4e2d\u7684\u52a0\u8f7d\u6548\u679c"))))),n.a.createElement("p",null,"\u6b64\u5916\u8fd8\u652f\u6301 ",n.a.createElement(c["Link"],{to:"/zh/components/popup"},"Popup")," \u7684\u4ee5\u4e0b\u5c5e\u6027\uff1a",n.a.createElement("code",null,"getContainer")," ",n.a.createElement("code",null,"afterShow")," ",n.a.createElement("code",null,"afterClose")," ",n.a.createElement("code",null,"onClick")," ",n.a.createElement("code",null,"stopPropagation")),n.a.createElement("p",null,n.a.createElement("strong",null,"\u8bf7\u7559\u610f\uff0c",n.a.createElement("code",null,"columns")," \u5c5e\u6027\u7684\u7c7b\u578b\u662f\u4e8c\u7ea7\u6570\u7ec4"),"\uff0c\u7b2c\u4e00\u7ea7\u5bf9\u5e94\u7684\u662f\u6bcf\u4e00\u5217\uff0c\u800c\u7b2c\u4e8c\u7ea7\u5bf9\u5e94\u7684\u662f\u67d0\u4e00\u5217\u4e2d\u7684\u6bcf\u4e00\u4e2a\u9009\u9879\u3002\u56e0\u6b64\uff0c\u4e0b\u9762\u7684\u8fd9\u79cd\u5199\u6cd5\u662f\u9519\u8bef\u7684\uff1a"),n.a.createElement(m["a"],{code:"<Picker\n  columns={[\n    { label: 'Foo', value: 'foo' },\n    { label: 'Bar', value: 'bar' },\n  ]}\n/>",lang:"jsx"}),n.a.createElement("p",null,"\u9700\u8981\u5199\u6210\uff1a"),n.a.createElement(m["a"],{code:"<Picker\n  columns={[\n    [\n      { label: 'Foo', value: 'foo' },\n      { label: 'Bar', value: 'bar' },\n    ]\n  ]}\n/>",lang:"jsx"}),n.a.createElement("h3",{id:"pickeractions"},n.a.createElement(c["AnchorLink"],{to:"#pickeractions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PickerActions"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"close"),n.a.createElement("td",null,"\u5173\u95ed Picker"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"open"),n.a.createElement("td",null,"\u663e\u793a Picker"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toggle"),n.a.createElement("td",null,"\u5207\u6362 Picker \u7684\u663e\u793a\u548c\u9690\u85cf\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))))),n.a.createElement("h3",{id:"ref"},n.a.createElement(c["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement("p",null,"\u540c PickerActions\u3002"),n.a.createElement("h3",{id:"css-\u53d8\u91cf"},n.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),n.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--header-button-font-size"),n.a.createElement("td",null,"\u786e\u5b9a\u548c\u53d6\u6d88\u6309\u94ae\u7684\u5b57\u53f7"),n.a.createElement("td",null,n.a.createElement("code",null,"15px")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"--item-font-size"),n.a.createElement("td",null,"\u9009\u62e9\u9879\u7684\u5b57\u53f7"),n.a.createElement("td",null,n.a.createElement("code",null,"16px")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"--item-height"),n.a.createElement("td",null,"\u9009\u9879\u7684\u9ad8\u5ea6\uff0c\u4ec5\u652f\u6301 px rem \u548c vw \u5355\u4f4d"),n.a.createElement("td",null,n.a.createElement("code",null,"34px")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"--title-font-size"),n.a.createElement("td",null,"\u6807\u9898\u7684\u5b57\u53f7"),n.a.createElement("td",null,n.a.createElement("code",null,"15px")),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"cascadepicker"},n.a.createElement(c["AnchorLink"],{to:"#cascadepicker","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CascadePicker"),n.a.createElement("h3",{id:"\u793a\u4f8b-1"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(r["default"],t["cascade-picker-demo1"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5c5e\u6027-1"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(m["a"],{code:"type CascadePickerOption = {\n  label: string\n  value: string\n  children?: CascadePickerOption[]\n}",lang:"typescript"}),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"options"),n.a.createElement("td",null,"\u6811\u5f62\u7684\u9009\u9879\u6570\u636e"),n.a.createElement("td",null,n.a.createElement("code",null,"CascadePickerOption[]")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"\u5176\u4ed6\u5c5e\u6027\u540c ",n.a.createElement("code",null,"Picker"),"\uff0c\u4f46\u4e0d\u652f\u6301 ",n.a.createElement("code",null,"columns"),"\u3002"),n.a.createElement("h3",{id:"ref-1"},n.a.createElement(c["AnchorLink"],{to:"#ref-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement("p",null,"\u540c Picker\u3002"),n.a.createElement("h3",{id:"css-\u53d8\u91cf-1"},n.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement("p",null,"\u540c ",n.a.createElement("code",null,"Picker"),"\u3002"),n.a.createElement("h2",{id:"datepicker"},n.a.createElement(c["AnchorLink"],{to:"#datepicker","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"DatePicker"),n.a.createElement("h3",{id:"\u793a\u4f8b-2"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b-2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(r["default"],t["date-picker-demo1"].previewerProps,n.a.createElement(o,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5c5e\u6027-2"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027-2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u6240\u9009\u9879\u7684\u6e32\u67d3\u51fd\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: Date, actions: PickerActions) => ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"\u9009\u4e2d\u503c"),n.a.createElement("td",null,n.a.createElement("code",null,"Date")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyOnClose"),n.a.createElement("td",null,"\u4e0d\u53ef\u89c1\u65f6\u5378\u8f7d\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"filter"),n.a.createElement("td",null,"\u8fc7\u6ee4\u53ef\u4f9b\u9009\u62e9\u7684\u65f6\u95f4"),n.a.createElement("td",null,n.a.createElement("code",null,"DatePickerFilter")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"max"),n.a.createElement("td",null,"\u6700\u5927\u503c"),n.a.createElement("td",null,n.a.createElement("code",null,"Date")),n.a.createElement("td",null,"\u5341\u5e74\u540e")),n.a.createElement("tr",null,n.a.createElement("td",null,"min"),n.a.createElement("td",null,"\u6700\u5c0f\u503c"),n.a.createElement("td",null,n.a.createElement("code",null,"Date")),n.a.createElement("td",null,"\u5341\u5e74\u524d")),n.a.createElement("tr",null,n.a.createElement("td",null,"mouseWheel"),n.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u8fdb\u884c\u9009\u62e9"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"\u786e\u8ba4\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: Date) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSelect"),n.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: Date) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"precision"),n.a.createElement("td",null,"\u7cbe\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'week' | 'week-day'")),n.a.createElement("td",null,n.a.createElement("code",null,"'day'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"renderLabel"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u5217\u5c55\u793a\u7684\u5185\u5bb9\u3002\u5176\u4e2d ",n.a.createElement("code",null,"type")," \u53c2\u6570\u4e3a ",n.a.createElement("code",null,"precision")," \u4e2d\u7684\u4efb\u610f\u503c\uff0c",n.a.createElement("code",null,"data")," \u53c2\u6570\u4e3a\u9ed8\u8ba4\u6e32\u67d3\u7684\u6570\u5b57"),n.a.createElement("td",null,n.a.createElement("code",null,"(type: string, data: number) => ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"\u9009\u4e2d\u503c"),n.a.createElement("td",null,n.a.createElement("code",null,"Date")),n.a.createElement("td",null,"-")))),n.a.createElement(m["a"],{code:"type DatePickerFilter = Partial<\n  Record<\n    Precision,\n    (\n      val: number,\n      extend: {\n        date: Date\n      }\n    ) => boolean\n  >\n>",lang:"typescript"}),n.a.createElement("p",null,"\u6b64\u5916\u8fd8\u652f\u6301 ",n.a.createElement("code",null,"Picker")," \u7684\u4ee5\u4e0b\u5c5e\u6027\uff1a",n.a.createElement("code",null,"onCancel")," ",n.a.createElement("code",null,"onClose")," ",n.a.createElement("code",null,"closeOnMaskClick")," ",n.a.createElement("code",null,"visible")," ",n.a.createElement("code",null,"confirmText")," ",n.a.createElement("code",null,"cancelText")," ",n.a.createElement("code",null,"getContainer")," ",n.a.createElement("code",null,"afterShow")," ",n.a.createElement("code",null,"afterClose")," ",n.a.createElement("code",null,"onClick")," ",n.a.createElement("code",null,"title")," ",n.a.createElement("code",null,"stopPropagation")," ",n.a.createElement("code",null,"loading")," ",n.a.createElement("code",null,"loadingContent"),"\u3002"),n.a.createElement("h3",{id:"ref-2"},n.a.createElement(c["AnchorLink"],{to:"#ref-2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement("p",null,"\u540c Picker\u3002"),n.a.createElement("h3",{id:"css-\u53d8\u91cf-2"},n.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf-2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement("p",null,"\u540c ",n.a.createElement("code",null,"Picker"),"\u3002"),n.a.createElement("h2",{id:"\u6307\u4ee4\u5f0f\u8c03\u7528"},n.a.createElement(c["AnchorLink"],{to:"#\u6307\u4ee4\u5f0f\u8c03\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u5f0f\u8c03\u7528"),n.a.createElement("p",null,n.a.createElement("code",null,"Picker")," \u652f\u6301\u6307\u4ee4\u5f0f\u8c03\u7528\uff0c\u63d0\u4f9b\u4e86 ",n.a.createElement("code",null,"prompt")," \u65b9\u6cd5\uff1a"),n.a.createElement(m["a"],{code:"prompt: (props: Omit<PickerProps, 'value' | 'visible' | 'children'>) => Promise<PickerValue[] | null>",lang:"typescript"}),n.a.createElement("p",null,n.a.createElement("code",null,"prompt")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a Promise\uff0c\u5982\u679c\u7528\u6237\u70b9\u51fb\u4e86\u786e\u5b9a\uff0c\u4ece Promise \u4e2d\u53ef\u4ee5\u89e3\u6790\u5230 ",n.a.createElement("code",null,"PickerValue[]"),"\uff0c\u800c\u5982\u679c\u7528\u6237\u662f\u89e6\u53d1\u7684\u53d6\u6d88\u64cd\u4f5c\uff0c\u90a3\u4e48 Promise \u4e2d\u7684\u503c\u662f ",n.a.createElement("code",null,"null"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"await")," \u6216 ",n.a.createElement("code",null,".then()")," \u6765\u83b7\u53d6\u5230\u5176\u4e2d\u7684\u503c\uff1a"),n.a.createElement(m["a"],{code:"const value = await Picker.prompt({\n  columns: yourColumnsConfig,\n})",lang:"ts"}),n.a.createElement(m["a"],{code:"Picker.prompt({\n  columns: yourColumnsConfig,\n}).then((value) => {\n  // ...\n})",lang:"ts"}),n.a.createElement("p",null,"\u540c\u6837\u5730\uff0c",n.a.createElement("code",null,"CascadePicker")," \u548c ",n.a.createElement("code",null,"DatePicker")," \u4e5f\u652f\u6301 ",n.a.createElement("code",null,"prompt")," \u65b9\u6cd5\uff0c\u5177\u4f53\u7528\u6cd5\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"),n.a.createElement("h2",{id:"\u5e38\u89c1\u95ee\u9898"},n.a.createElement(c["AnchorLink"],{to:"#\u5e38\u89c1\u95ee\u9898","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u89c1\u95ee\u9898"),n.a.createElement("h3",{id:"\u5982\u4f55\u9ad8\u4eae\u5f53\u524d\u9009\u9879"},n.a.createElement(c["AnchorLink"],{to:"#\u5982\u4f55\u9ad8\u4eae\u5f53\u524d\u9009\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u9ad8\u4eae\u5f53\u524d\u9009\u9879"),n.a.createElement("p",null,"\u9009\u4e2d\u9009\u9879\u7684 DOM \u5143\u7d20\u4e0a\u4f1a\u6709 ",n.a.createElement("code",null,'data-selected="true"')," \u5c5e\u6027\u6807\u8bb0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u4e3a\u9009\u4e2d\u9879\u81ea\u5b9a\u4e49 CSS \u6837\u5f0f\u3002"),n.a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u7684\u540d\u5b57\u53eb-datepicker-\u800c\u4e0d\u662f-datetimepicker"},n.a.createElement(c["AnchorLink"],{to:"#\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u7684\u540d\u5b57\u53eb-datepicker-\u800c\u4e0d\u662f-datetimepicker","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),'\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u7684\u540d\u5b57\u53eb "DatePicker" \u800c\u4e0d\u662f "DatetimePicker"\uff1f'),n.a.createElement("p",null,"\u56e0\u4e3a ",n.a.createElement("code",null,"value")," \u7684\u7c7b\u578b\u662f ",n.a.createElement("code",null,"Date"),"\u3002"),n.a.createElement("h3",{id:"\u65e5\u671f\u9009\u62e9\u5668\u4e3a\u4ec0\u4e48\u6ca1\u6709-\u65f6-\u5206-\u6216\u8005-\u6708-\u65e5-\u9009\u62e9"},n.a.createElement(c["AnchorLink"],{to:"#\u65e5\u671f\u9009\u62e9\u5668\u4e3a\u4ec0\u4e48\u6ca1\u6709-\u65f6-\u5206-\u6216\u8005-\u6708-\u65e5-\u9009\u62e9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),'\u65e5\u671f\u9009\u62e9\u5668\u4e3a\u4ec0\u4e48\u6ca1\u6709 "\u65f6-\u5206" \u6216\u8005 "\u6708-\u65e5" \u9009\u62e9\uff1f'),n.a.createElement("p",null,"\u4e0d\u540c\u4e8e Picker \u7ec4\u4ef6\uff0cDatePicker \u7684\u503c\u7684\u7c7b\u578b\u662f ",n.a.createElement("code",null,"Date")," \u5bf9\u8c61\uff0c\u6240\u4ee5\u9700\u8981\u4ece\u5e74\u5f00\u59cb\u4e00\u76f4\u5f80\u4e0b\u9009\u62e9\uff0c\u53ea\u6709\u65f6\u3001\u5206\u7684\u53c2\u6570\u662f\u4e0d\u80fd\u6784\u5efa\u4e00\u4e2a ",n.a.createElement("code",null,"Date")," \u5bf9\u8c61\u7684\u3002"),n.a.createElement("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u8fd9\u6837\u7684\u9009\u62e9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7 Picker \u7ec4\u4ef6\u81ea\u884c\u5b9e\u73b0\u3002"))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(d,{demos:l})}}}]);