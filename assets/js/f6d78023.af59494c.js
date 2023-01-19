"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[16],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="\u2699\ufe0f Configuration",l={unversionedId:"configuration/index",id:"configuration/index",title:"\u2699\ufe0f Configuration",description:"\ud83d\udcc2 File Structure",source:"@site/docs/configuration/index.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/configuration/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2328\ufe0f Keymaps",permalink:"/keymaps"},next:{title:"Plugins",permalink:"/configuration/plugins"}},u={},c=[{value:"\ud83d\udcc2 File Structure",id:"-file-structure",level:2},{value:"LazyVim",id:"lazyvim",level:2},{value:"Default Settings",id:"default-settings",level:3}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,a.kt)("h2",{id:"-file-structure"},"\ud83d\udcc2 File Structure"),(0,a.kt)("p",null,"The files under config will be automatically loaded at the appropriate time,\nso you don't need to require those files manually.\n",(0,a.kt)("strong",{parentName:"p"},"LazyVim")," comes with a set of default config files that will be loaded\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"before"))," your own. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LazyVim/LazyVim/tree/main/lua/lazyvim/config"},"here")),(0,a.kt)("p",null,"You can add your custom plugin specs under ",(0,a.kt)("inlineCode",{parentName:"p"},"lua/plugins/"),". All files there\nwill be automatically loaded by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.config/nvim\n\u251c\u2500\u2500 lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 autocmds.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 keymaps.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lazy.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 options.lua\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0     \u251c\u2500\u2500 spec1.lua\n\u2502\xa0\xa0     \u251c\u2500\u2500 **\n\u2502\xa0\xa0     \u2514\u2500\u2500 spec2.lua\n\u2514\u2500\u2500 init.toml\n")),(0,a.kt)("h2",{id:"lazyvim"},"LazyVim"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LazyVim")," can be configured in the same way as any other plugin."),(0,a.kt)("p",null,"For example in ",(0,a.kt)("inlineCode",{parentName:"p"},"lua/plugins/core.lua")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  {\n    "LazyVim/LazyVim",\n    opts = {\n      colorscheme = "catppuccin",\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"default-settings"},"Default Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  -- colorscheme can be a string like `catppuccin` or a function that will load the colorscheme\n  ---@type string|fun()\n  colorscheme = function()\n    require("tokyonight").load()\n  end,\n  -- icons used by other plugins\n  icons = {\n    diagnostics = {\n      Error = "\uf057 ",\n      Warn = "\uf071 ",\n      Hint = "\uf835 ",\n      Info = "\uf05a ",\n    },\n    git = {\n      added = "\uf0fe ",\n      modified = "\uf14b ",\n      removed = "\uf146 ",\n    },\n    kinds = {\n      Array = "\uea8a ",\n      Boolean = "\uea8f ",\n      Class = "\ueb5b ",\n      Color = "\ueb5c ",\n      Constant = "\ueb5d ",\n      Constructor = "\uea8c ",\n      Enum = "\uea95 ",\n      EnumMember = "\ueb5e ",\n      Event = "\uea86 ",\n      Field = "\ueb5f ",\n      File = "\uea7b ",\n      Folder = "\uf74a ",\n      Function = "\uea8c ",\n      Interface = "\ueb61 ",\n      Key = "\uea93 ",\n      Keyword = "\ueb62 ",\n      Method = "\uea8c ",\n      Module = "\ueb29 ",\n      Namespace = "\uea8b ",\n      Null = "\ufce0 ",\n      Number = "\uea90 ",\n      Object = "\uea8b ",\n      Operator = "\ueb64 ",\n      Package = "\ueb29 ",\n      Property = "\ueb65 ",\n      Reference = "\ueb36 ",\n      Snippet = "\ueb66 ",\n      String = "\ueb8d ",\n      Struct = "\uea91 ",\n      Text = "\uea93 ",\n      TypeParameter = "\uea92 ",\n      Unit = "\uea96 ",\n      Value = "\uea93 ",\n      Variable = "\uea88 ",\n    },\n  },\n}\n')))}s.isMDXComponent=!0}}]);