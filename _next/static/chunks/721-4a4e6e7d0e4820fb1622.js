(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{1082:function(e){"use strict";e.exports={}},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},5284:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(7294),a=n(1163),i=n(1664),c=(n(1082),n(9352));function s(){var e=(0,o.useState)(!1),t=e[0],n=e[1],s=(0,a.useRouter)();(0,o.useEffect)((function(){var e=function(){document.documentElement.scrollTop>210?document.querySelector(".trans-background").classList.add("solid"):document.querySelector(".trans-background").classList.remove("solid")};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,o.useEffect)((function(){var e=function(e,t){t.shallow;n(!1),document.querySelector(".mobile-menu").classList.remove("active")};return s.events.on("routeChangeStart",e),function(){s.events.off("routeChangeStart",e)}}),[]);var u=JSON.parse('[{"name":"CHANGELOG","slug":"/changelog"},{"name":"CODESTYLE","slug":"/code_of_conduct"},{"name":"CONTRIBUTING","slug":"/contributing"},{"name":"TEAM","slug":"/core_team"},{"name":"LICENSE","slug":"/license"},{"name":"DUMMY","slug":"/dummy_page"}]');return(0,r.jsxs)("header",{className:"fixed-header",children:[(0,r.jsxs)("div",{className:"d-flex flex-justify-between px-3 trans-background",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"logo-link",children:(0,r.jsx)("img",{src:"assets/images/logo.png",className:"logo"})})}),(0,r.jsx)("nav",{className:"menu-nav",children:(0,r.jsx)("ul",{className:"hori-list",children:u.map((function(e){return(0,r.jsx)("li",{className:"menu-item ".concat(s.asPath===e.slug?"active":""),children:(0,r.jsx)(i.default,{href:e.slug,children:(0,r.jsx)("a",{children:e.name})})},e.name)}))})}),(0,r.jsx)("div",{className:"mobile-nav",children:(0,r.jsxs)("button",{type:"button",onClick:function(){document.querySelector(".mobile-menu").classList.toggle("active"),n(!t)},children:[!t&&(0,r.jsx)(c._yl,{style:{width:24,height:24}}),t&&(0,r.jsx)(c.tgW,{style:{width:24,height:24}})]})})]}),(0,r.jsx)("ul",{className:"mobile-menu",children:u.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:e.slug,children:(0,r.jsx)("a",{children:e.name})})},e.name)}))})]})}},2875:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(5988),a=n(1664),i=(n(1082),n(9352));function c(){return(0,r.jsxs)("footer",{className:"d-flex flex-justify-center border-top",children:[(0,r.jsx)("p",{className:"p-2 mr-4 mb-0",children:"@RainbowCodingStudio"}),(0,r.jsx)(a.default,{href:"https://github.com/lwz7512",children:(0,r.jsx)("a",{className:"p-2 mr-2 mb-0",children:(0,r.jsx)(i.q7V,{style:{width:24,height:24}})})}),(0,r.jsx)(a.default,{href:"https://twitter.com/lwz75121",children:(0,r.jsx)("a",{className:"p-2 mb-0",children:(0,r.jsx)(i.x2F,{style:{width:24,height:24}})})})]})}function s(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"jsx-889587288 wrapper",children:[t,(0,r.jsx)(c,{})]}),(0,r.jsx)(o.default,{id:"1649752317",children:[".wrapper.jsx-889587288{max-width:1024px;margin:0 auto;padding:0;background-color:#FFF;}"]}),(0,r.jsx)(o.default,{id:"1032689196",children:["*{margin:0;padding:0;}",":root{--site-color:royalblue;--divider-color:rgba(0,0,0,0.4);}","html{font:100%/1.5 system-ui;}","a{color:inherit;-webkit-text-decoration-color:var(--divider-color);text-decoration-color:var(--divider-color);-webkit-text-decoration-thickness:2px;text-decoration-thickness:2px;}","a:hover{color:var(--site-color);-webkit-text-decoration-color:currentcolor;text-decoration-color:currentcolor;}","h1,p{margin-bottom:1.5rem;}","code{font-family:'Menlo';}"]})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},s=n(3367),u=n(4287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function v(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var g=v;t.default=g},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},9008:function(e,t,n){e.exports=n(7947)},1163:function(e,t,n){e.exports=n(2441)}}]);