"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,v=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),s=n(7392),o=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:d,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=(0,o.U)(),[T,N]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=d){const e=h[d];null!=e&&e!==T&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==T&&(w(t),N(a),null!=d&&k(d,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},v)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:x},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const s={},o="Util",u={unversionedId:"plugins/util",id:"plugins/util",title:"Util",description:"vim-startuptime",source:"@site/docs/plugins/util.md",sourceDirName:"plugins",slug:"/plugins/util",permalink:"/plugins/util",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/util.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI",permalink:"/plugins/ui"}},p={},c=[{value:"vim-startuptime",id:"vim-startuptime",level:2},{value:"persistence.nvim",id:"persistencenvim",level:2},{value:"plenary.nvim",id:"plenarynvim",level:2},{value:"vim-repeat",id:"vim-repeat",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"util"},"Util"),(0,r.kt)("h2",{id:"vim-startuptime"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/dstein64/vim-startuptime"},"vim-startuptime")),(0,r.kt)("p",null," measure startuptime"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "dstein64/vim-startuptime",\n  cmd = "StartupTime",\n  config = function()\n    vim.g.startuptime_tries = 10\n  end,\n}\n')))),(0,r.kt)("h2",{id:"persistencenvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/persistence.nvim"},"persistence.nvim")),(0,r.kt)("p",null," session management"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { options = { "buffers", "curdir", "tabpages", "winsize", "help" } }\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/persistence.nvim",\n  event = "BufReadPre",\n  opts = { options = { "buffers", "curdir", "tabpages", "winsize", "help" } },\n  -- stylua: ignore\n  keys = {\n    { "<leader>qs", function() require("persistence").load() end, desc = "Restore Session" },\n    { "<leader>ql", function() require("persistence").load({ last = true }) end, desc = "Restore Last Session" },\n    { "<leader>qd", function() require("persistence").stop() end, desc = "Don\'t Save Current Session" },\n  },\n}\n')))),(0,r.kt)("h2",{id:"plenarynvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lua/plenary.nvim"},"plenary.nvim")),(0,r.kt)("p",null," library used by other plugins"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-lua/plenary.nvim", lazy = true }\n')))),(0,r.kt)("h2",{id:"vim-repeat"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/tpope/vim-repeat"},"vim-repeat")),(0,r.kt)("p",null," makes some plugins dot-repeatable like leap"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "tpope/vim-repeat", event = "VeryLazy" }\n')))))}d.isMDXComponent=!0}}]);