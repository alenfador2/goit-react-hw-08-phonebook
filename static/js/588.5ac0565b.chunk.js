"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[588],{3588:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(4420),a="ContactForm_contact_container__iDfmG",o="ContactForm_add_button__HoPGx",i=n(8137),s=n(3634),u=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},l=n(4942),m=n(3366),f=n(7462),h=n(2791),p=n(3733),v=n(4657),x=n(838),b=n(6642),Z=n(7078),_=n(3433),g=n(9439),y=n(6649),w=n(8736),j=n(8809),k=n(104),C=["ownerState"],S=["variants"],N=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function W(e){return"string"===typeof e&&e.charCodeAt(0)>96}function A(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}var R=(0,j.Z)(),F=function(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e};function P(e){var t,n=e.defaultTheme,r=e.theme,a=e.themeId;return t=r,0===Object.keys(t).length?n:r[a]||r}function I(e){return e?function(t,n){return n[e]}:null}function G(e,t){var n=t.ownerState,r=(0,m.Z)(t,C),a="function"===typeof e?e((0,f.Z)({ownerState:n},r)):e;if(Array.isArray(a))return a.flatMap((function(e){return G(e,(0,f.Z)({ownerState:n},r))}));if(a&&"object"===typeof a&&Array.isArray(a.variants)){var o=a.variants,i=void 0===o?[]:o,s=(0,m.Z)(a,S);return i.forEach((function(e){var t=!0;"function"===typeof e.props?t=e.props((0,f.Z)({ownerState:n},r,n)):Object.keys(e.props).forEach((function(a){(null==n?void 0:n[a])!==e.props[a]&&r[a]!==e.props[a]&&(t=!1)})),t&&(Array.isArray(s)||(s=[s]),s.push("function"===typeof e.style?e.style((0,f.Z)({ownerState:n},r,n)):e.style))})),s}return a}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,n=e.defaultTheme,r=void 0===n?R:n,a=e.rootShouldForwardProp,o=void 0===a?A:a,i=e.slotShouldForwardProp,s=void 0===i?A:i,u=function(e){return(0,k.Z)((0,f.Z)({},e,{theme:P((0,f.Z)({},e,{defaultTheme:r,themeId:t}))}))};return u.__mui_systemSx=!0,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,y.internal_processStyles)(e,(function(e){return e.filter((function(e){return!(null!=e&&e.__mui_systemSx)}))}));var a,i=n.name,c=n.slot,d=n.skipVariantsResolver,l=n.skipSx,h=n.overridesResolver,p=void 0===h?I(F(c)):h,v=(0,m.Z)(n,N),x=void 0!==d?d:c&&"Root"!==c&&"root"!==c||!1,b=l||!1;var Z=A;"Root"===c||"root"===c?Z=o:c?Z=s:W(e)&&(Z=void 0);var j=(0,y.default)(e,(0,f.Z)({shouldForwardProp:Z,label:a},v)),k=function(e){return"function"===typeof e&&e.__emotion_real!==e||(0,w.P)(e)?function(n){return G(e,(0,f.Z)({},n,{theme:P({theme:n.theme,defaultTheme:r,themeId:t})}))}:e},C=function(n){for(var a=k(n),o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];var d=s?s.map(k):[];i&&p&&d.push((function(e){var n=P((0,f.Z)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[i]||!n.components[i].styleOverrides)return null;var a=n.components[i].styleOverrides,o={};return Object.entries(a).forEach((function(t){var r=(0,g.Z)(t,2),a=r[0],i=r[1];o[a]=G(i,(0,f.Z)({},e,{theme:n}))})),p(e,o)})),i&&!x&&d.push((function(e){var n,a=P((0,f.Z)({},e,{defaultTheme:r,themeId:t}));return G({variants:null==a||null==(n=a.components)||null==(n=n[i])?void 0:n.variants},(0,f.Z)({},e,{theme:a}))})),b||d.push(u);var l=d.length-s.length;if(Array.isArray(n)&&l>0){var m=new Array(l).fill("");(a=[].concat((0,_.Z)(n),(0,_.Z)(m))).raw=[].concat((0,_.Z)(n.raw),(0,_.Z)(m))}var h=j.apply(void 0,[a].concat((0,_.Z)(d)));return e.muiName&&(h.muiName=e.muiName),h};return j.withConfig&&(C.withConfig=j.withConfig),C}}(),M=T,L=n(184),O=["className","component","disableGutters","fixed","maxWidth","classes"],E=(0,j.Z)(),z=M("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),q=function(e){return(0,Z.Z)({props:e,name:"MuiContainer",defaultTheme:E})},D=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,b.Z)(String(o))),r&&"fixed",a&&"disableGutters"]};return(0,x.Z)(i,(function(e){return(0,v.ZP)(t,e)}),n)};var H=n(4036),V=n(6934),B=n(1402),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?z:t,r=e.useThemeProps,a=void 0===r?q:r,o=e.componentName,i=void 0===o?"MuiContainer":o,s=n((function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,l.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({},"xs"===n.maxWidth&&(0,l.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,l.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),u=h.forwardRef((function(e,t){var n=a(e),r=n.className,o=n.component,u=void 0===o?"div":o,c=n.disableGutters,d=void 0!==c&&c,l=n.fixed,h=void 0!==l&&l,v=n.maxWidth,x=void 0===v?"lg":v,b=(0,m.Z)(n,O),Z=(0,f.Z)({},n,{component:u,disableGutters:d,fixed:h,maxWidth:x}),_=D(Z,i);return(0,L.jsx)(s,(0,f.Z)({as:u,ownerState:Z,className:(0,p.Z)(_.root,r),ref:t},b))}));return u}({createStyledComponent:(0,V.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,H.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,B.Z)({props:e,name:"MuiContainer"})}}),X=J,K=n(697),Q=n(1163),U=n(3495),Y=(0,i.x0)(),$=(0,i.x0)(),ee=function(){var e=(0,r.v9)(u),t=(0,r.I0)();return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=r.elements.name.value,o=r.elements.number.value;e.some((function(e){return e.name===a}))?(alert("Contact already exist!"),r.reset()):(t((0,s.el)({name:a,number:o})),r.reset())},children:(0,L.jsx)(X,{children:(0,L.jsxs)(K.Z,{className:a,children:[(0,L.jsx)(Q.Z,{label:"Please, write name",variant:"outlined",type:"text",name:"name",id:Y,pattern:"[a-zA-Z \\-']{2,30}",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,L.jsx)(Q.Z,{label:"Please, write number",variant:"outlined",type:"tel",name:"number",id:$,pattern:"^\\+?[0-9 \\-\\(\\)]{7,20}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,L.jsx)(U.Z,{type:"submit",variant:"contained",className:o,children:"Add contact"})]})})})})},te="ContactItem_span_container__yRF80",ne="ContactItem_item_span__Pv1TF",re="ContactItem_item_button__pEcHX",ae=function(e){var t=e.id,n=e.name,a=e.number,o=(0,r.I0)();return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(K.Z,{className:te,children:[(0,L.jsxs)("span",{className:ne,children:[n,":"]}),(0,L.jsx)("span",{className:ne,children:a}),(0,L.jsx)(U.Z,{className:re,type:"button",onClick:function(){return function(e){o((0,s._f)(e))}(t)},children:"Delete"})]})})},oe=function(e){return e.filter.value},ie=function(){var e=(0,r.v9)(u),t=(0,r.v9)(oe)||"",n=(0,r.I0)();return(0,h.useEffect)((function(){n((0,s.yF)())}),[]),(0,L.jsx)("ul",{children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,L.jsx)(ae,{id:e.id,name:e.name,number:e.phone},e.id)}))})},se="Filter_filter_input__eu2zm",ue=n(9585),ce=function(){var e=(0,r.I0)();return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(Q.Z,{label:"Write name here",variant:"standard",type:"text",id:"filter",name:"filter",onChange:function(t){e((0,ue.h)(t.currentTarget.value))},className:se})})},de=n(1605),le=function(){var e=(0,r.v9)(d);return(0,L.jsx)("div",{children:e})},me=n(4270),fe=function(){var e=(0,r.v9)(c),t=(0,r.v9)(d);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(me.q,{children:"Contacts"}),e&&(0,L.jsx)(de.Z,{}),(0,L.jsxs)("div",{className:"main-div",children:[t&&(0,L.jsx)(le,{}),(0,L.jsx)("h1",{className:"phonebook-header",children:"Phonebook"}),(0,L.jsx)(ee,{}),(0,L.jsx)("h2",{className:"phonebook-second-header",children:"Contacts"}),(0,L.jsx)(ce,{}),(0,L.jsx)(ie,{})]})]})}}}]);
//# sourceMappingURL=588.5ac0565b.chunk.js.map