/*! For license information please see 136.7ef8b2d6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[136],{9397:function(e,t,r){r.d(t,{A:function(){return b}});var n=r(9379),a=r(45),o=r(8139),i=r.n(o),s=r(5043),l=r(7852),c=r(2673),u=r(579),p=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.active,s=void 0!==o&&o,f=e.children,g=e.className,m=e.as,d=void 0===m?"li":m,b=e.linkAs,v=void 0===b?c.A:b,h=e.linkProps,y=void 0===h?{}:h,P=e.href,k=e.title,C=e.target,x=(0,a.A)(e,p),N=(0,l.oU)(r,"breadcrumb-item");return(0,u.jsx)(d,(0,n.A)((0,n.A)({ref:t},x),{},{className:i()(N,g,{active:s}),"aria-current":s?"page":void 0,children:s?f:(0,u.jsx)(v,(0,n.A)((0,n.A)({},y),{},{href:P,title:k,target:C,children:f}))}))}));f.displayName="BreadcrumbItem";var g=f,m=["bsPrefix","className","listProps","children","label","as"],d=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.listProps,c=void 0===s?{}:s,p=e.children,f=e.label,g=void 0===f?"breadcrumb":f,d=e.as,b=void 0===d?"nav":d,v=(0,a.A)(e,m),h=(0,l.oU)(r,"breadcrumb");return(0,u.jsx)(b,(0,n.A)((0,n.A)({"aria-label":g,className:o,ref:t},v),{},{children:(0,u.jsx)("ol",(0,n.A)((0,n.A)({},c),{},{className:i()(h,null==c?void 0:c.className),children:p}))}))}));d.displayName="Breadcrumb";var b=Object.assign(d,{Item:g})},7804:function(e,t,r){r.d(t,{A:function(){return k}});var n=r(5043);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],l=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p={},f={get exports(){return p},set exports(e){p=e}};var g,m,d,b;function v(){if(m)return g;m=1;return g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}f.exports=function(){if(b)return d;b=1;var e=v();function t(){}function r(){}return r.resetWarningCache=t,d=function(){function n(t,r,n,a,o,i){if(i!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:a,element:n,elementType:n,instanceOf:a,node:n,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".react-hooks-paginator {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0; }\n  .react-hooks-paginator .page-item {\n    list-style: none; }\n    .react-hooks-paginator .page-item:first-child .page-link {\n      margin-left: 0;\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n    .react-hooks-paginator .page-item:last-child .page-link {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px; }\n    .react-hooks-paginator .page-item:hover .page-link, .react-hooks-paginator .page-item.active .page-link {\n      background-color: #3895d3;\n      border-color: #3895d3;\n      color: #fff; }\n  .react-hooks-paginator .page-link {\n    border: 1px solid #dee2e6;\n    color: #4a4a4a;\n    margin-left: -1px;\n    outline: none;\n    padding: 0.5rem 0.75rem;\n    text-decoration: none;\n    transition: all 0.2s; }\n");var h="LEFT",y="RIGHT",P=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,a=[];n<=t;)a.push(n),n+=r;return a};function k(e){var t=s((0,n.useState)((function(){return function(){var t=e.totalRecords,r=void 0===t?null:t,n=e.pageLimit,a=void 0===n?20:n,o=e.pageNeighbours,i=void 0===o?0:o;return{pageLimit:a="number"===typeof a?a:20,totalRecords:r="number"===typeof r?r:0,pageNeighbours:i="number"===typeof i?Math.max(0,Math.min(i,2)):0,totalPages:Math.ceil(r/a)}}()})),2),r=t[0],a=t[1],i=(0,n.useRef)(!0),c=(0,n.useCallback)((function(t){var n=Math.max(1,Math.min(t,r.totalPages));e.setCurrentPage(n)}),[r.totalPages,e.pageLimit]);(0,n.useEffect)((function(){c(e.currentPage||1)}),[c,e.currentPage]),(0,n.useEffect)((function(){e.setOffset((e.currentPage-1)*e.pageLimit)}),[e.currentPage]),(0,n.useEffect)((function(){if(i.current)i.current=!1;else{var t=e.totalRecords,n=Math.ceil(t/r.pageLimit);a(o(o({},r),{},{totalRecords:e.totalRecords,totalPages:n}))}}),[e.totalRecords]);var u=(0,n.useCallback)((function(t){t.preventDefault(),c(e.currentPage-2*r.pageNeighbours-1)}),[e.currentPage]),p=(0,n.useCallback)((function(t){t.preventDefault(),c(e.currentPage+2*r.pageNeighbours+1)}),[e.currentPage,r.pageNeighbours]),f=(0,n.useCallback)((function(){var t=r.totalPages,n=e.currentPage,a=r.pageNeighbours,o=2*r.pageNeighbours+3;if(t>o+2){var i=[],s=n-a,c=n+a,u=t-1,p=s>2?s:2,f=c<u?c:u,g=o-(i=P(p,f)).length-1,m=p>2,d=f<u,b=h,v=y;if(m&&!d){var k=P(p-g,p-1);i=[b].concat(l(k),l(i))}else if(!m&&d){var C=P(f+1,f+g);i=[].concat(l(i),l(C),[v])}else m&&d&&(i=[b].concat(l(i),[v]));return[1].concat(l(i),[t])}return P(1,t)}),[r.totalPages,e.currentPage,r.pageNeighbours]);if(!r.totalRecords)return null;if(1===r.totalPages)return null;var g=e.currentPage,m=f();return n.createElement("ul",{className:e.pageContainerClass},m.map((function(t,r){return t===h?n.createElement("li",{className:e.pageItemClass,key:r},n.createElement("button",{className:e.pagePrevClass,onClick:u},e.pagePrevText)):t===y?n.createElement("li",{className:e.pageItemClass,key:r},n.createElement("button",{className:e.pageNextClass,onClick:p},e.pageNextText)):n.createElement("li",{className:"".concat(e.pageItemClass," ").concat(g===t?e.pageActiveClass:null),key:r},n.createElement("button",{className:e.pageLinkClass,onClick:function(e){return function(e,t){t.preventDefault(),c(e)}(t,e)}},t))})))}k.defaultProps={pageContainerClass:"react-hooks-paginator",pageActiveClass:"active",pageItemClass:"page-item",pageLinkClass:"page-link",pageNextText:"Next \xbb",pagePrevText:"\xab Prev",pagePrevClass:"page-link",pageNextClass:"page-link"},k.propTypes={currentPage:p.number,pageActiveClass:p.string,pageNextText:p.oneOfType([p.string,p.node]),pagePrevText:p.oneOfType([p.string,p.node]),pagePrevClass:p.string,pageNextClass:p.string,pageContainerClass:p.string,pageItemClass:p.string,pageLimit:p.number,pageLinkClass:p.string,pageNeighbours:p.number,setCurrentPage:p.func,setOffset:p.func,totalRecords:p.number.isRequired}}}]);
//# sourceMappingURL=136.7ef8b2d6.chunk.js.map