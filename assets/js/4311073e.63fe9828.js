"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"v3.2.1",version:"3.2.1",date:new Date("2023-08-16T00:00:00.000Z"),description:"v3.2.1",sidebar_position:93},o=void 0,l={unversionedId:"terminal/changelog/version3_2_1",id:"terminal/changelog/version3_2_1",title:"v3.2.1",description:"v3.2.1",source:"@site/content/terminal/changelog/version3_2_1.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_1",permalink:"/terminal/changelog/version3_2_1",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_1.mdx",tags:[],version:"current",sidebarPosition:93,frontMatter:{title:"v3.2.1",version:"3.2.1",date:"2023-08-16T00:00:00.000Z",description:"v3.2.1",sidebar_position:93},sidebar:"tutorialSidebar",previous:{title:"tob",permalink:"/terminal/reference/stocks/tob"},next:{title:"v3.2.0",permalink:"/terminal/changelog/version3_2_0"}},s={},p=[{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,a.kt)("p",null,"We are super excited to launch community routines in the terminal!"),(0,a.kt)("p",null,"This is accompanied by our usual bug fix and general enhancements."),(0,a.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hotfix/simplify-regex (#5324) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Fix routines creation from the Terminal to Hub (#5312) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Fix regex (#5320) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},'Creates a "--dev" flag that points to dev backend for testing with hub (#5319) @DidierRLopes'),(0,a.kt)("li",{parentName:"ul"},"small fixy (#5318) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"few more updates (#5317) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"--debug points to dev env (#5316) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Silly (#5313) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"hotfix/ ",(0,a.kt)("inlineCode",{parentName:"li"},"/stocks/fa/pt")," show all price targets on hover (#5305) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"hotfix/options-hist: Fixes ",(0,a.kt)("inlineCode",{parentName:"li"},"options/hist")," to display date column when raw is True (#5304) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Allow the exe command to run URLs (#5295) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Feature/news sentiment (#5274) @Sai-132"),(0,a.kt)("li",{parentName:"ul"},"hotfix/ conflict docstrings (#5293) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"hotfix / forecast, qa/hist (#5290) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Fixed the get routines to meet the new backend standard (#5271) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Actually fix databento this time (#5287) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"add ",(0,a.kt)("inlineCode",{parentName:"li"},"--india")," flag to ",(0,a.kt)("inlineCode",{parentName:"li"},"stocks/load")," (#5281) @the-praxs"),(0,a.kt)("li",{parentName:"ul"},"Feature/options_views: Add a Variety of Views/Charts to Extend the OptionsChains Class (#5222) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"hotfix/economy-controller-sort-filter: Fwd P/E regex fix (#5273) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Update all_api_keys.json (#5277) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Move hub api keys ts (#5267) @montezdesousa"),(0,a.kt)("li",{parentName:"ul"},"Hotfix  ",(0,a.kt)("inlineCode",{parentName:"li"},"economy/overview")," rates displaying as dates (#5269) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Adds details/image for installing C++ Build Tools (#5268) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"hotfix/gdp-units - better GDP units (#5262) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/ locking when deploying streamlit app (#5261) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Fix issue where incorrect key for biztoc prints exception (#5257) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Check token expiration before request (#5255) @montezdesousa"),(0,a.kt)("li",{parentName:"ul"},"hotfix/economy-report-duplicate-table: fixes duplicate tables. (#5252) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"hotfix/docs-sdk-basics-headTitle: fix headTitle (#5253) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Fix/reports (#5251) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Fix/reports (#5250) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Release/3.2.0 (#5243) @jmaslek")),(0,a.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,a.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,a.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}m.isMDXComponent=!0}}]);