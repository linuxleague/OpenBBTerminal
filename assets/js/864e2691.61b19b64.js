"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),o=r(67294),a=r(86010),s=r(16550);function i(e){let{title:t,url:r,description:i,command:l}=e;const{pathname:c}=(0,s.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:c.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":c.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":c.startsWith("/bot"),header_docs:!c.startsWith("/terminal")&&!c.startsWith("/sdk")&&!c.startsWith("/bot")}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},46261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const s={},i="alt",l={unversionedId:"sdk/reference/alt/index",id:"sdk/reference/alt/index",title:"alt",description:"<ReferenceCard",source:"@site/content/sdk/reference/alt/index.mdx",sourceDirName:"sdk/reference/alt",slug:"/sdk/reference/alt/",permalink:"/sdk/reference/alt/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/alt/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenBB SDK Reference",permalink:"/sdk/reference/"},next:{title:"companieshouse",permalink:"/sdk/reference/alt/companieshouse/"}},c={},d=[],p={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alt"},"alt"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"covid",description:"stat, slopes, ov, global_cases, global_deaths",url:"/sdk/reference/alt/covid",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"companieshouse",description:"get_search_results, get_persons_with_significant_control, get_company_info, get_filing_document, get_filings,...",url:"/sdk/reference/alt/companieshouse",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"realestate",description:"get_towns_sold_prices, get_estate_sales, get_region_stats",url:"/sdk/reference/alt/realestate",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"oss",description:"search, summary, _make_request, github_data, history, ross, _retry_session, top",url:"/sdk/reference/alt/oss",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"hn",description:"Get top stories from HackerNews.",url:"/sdk/reference/alt/hn",command:"true",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);