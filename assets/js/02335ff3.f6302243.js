"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(7462),l=(t(7294),t(3905));const a={sidebar_position:3},r="\ud83d\udce6 Plugins",s={unversionedId:"plugins/index",id:"plugins/index",title:"\ud83d\udce6 Plugins",description:"Configuring LazyVim plugins is exactly the same as using lazy.nvim to build",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/plugins/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tips",permalink:"/configuration/tips"},next:{title:"Coding",permalink:"/plugins/coding"}},o={},p=[{value:"\u2795 Adding Plugins",id:"-adding-plugins",level:2},{value:"\u274c Disabling Plugins",id:"-disabling-plugins",level:2},{value:"\u270f\ufe0f Customizing Plugin Specs",id:"\ufe0f-customizing-plugin-specs",level:2},{value:"\u2328\ufe0f Adding &amp; Disabling Plugin Keymaps",id:"\ufe0f-adding--disabling-plugin-keymaps",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-plugins"},"\ud83d\udce6 Plugins"),(0,l.kt)("p",null,"Configuring ",(0,l.kt)("strong",{parentName:"p"},"LazyVim")," plugins is exactly the same as using ",(0,l.kt)("strong",{parentName:"p"},"lazy.nvim")," to build\na config from scratch."),(0,l.kt)("p",null,"For the full plugin spec documentation please check the ",(0,l.kt)("strong",{parentName:"p"},"lazy.nvim"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"readme"),"."),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("strong",{parentName:"p"},"plugins")," section in the sidebar for configuring\nincluded plugins."),(0,l.kt)("h2",{id:"-adding-plugins"},"\u2795 Adding Plugins"),(0,l.kt)("p",null,"Adding a plugin is as simple as adding the plugin spec to one of the files\nunder ",(0,l.kt)("inlineCode",{parentName:"p"},"lua/plugins/*.lua"),". You can create as many files there as you want."),(0,l.kt)("p",null,"You can structure your ",(0,l.kt)("inlineCode",{parentName:"p"},"lua/plugins")," folder with a file per plugin,\nor a separate file containing all the plugin specs for some functionality."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/plugins/lsp.lua"',title:'"lua/plugins/lsp.lua"'},'return {\n  -- add symbols-outline\n  {\n    "simrat39/symbols-outline.nvim",\n    cmd = "SymbolsOutline",\n    keys = { { "<leader>cs", "<cmd>SymbolsOutline<cr>", desc = "Symbols Outline" } },\n    opts = {\n      -- add your options that should be passed to the setup() function here\n      position = "right",\n    },\n  },\n}\n')),(0,l.kt)("h2",{id:"-disabling-plugins"},"\u274c Disabling Plugins"),(0,l.kt)("p",null,"In order to disable a plugin, add a spec with ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled=false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/plugins/disabled.lua"',title:'"lua/plugins/disabled.lua"'},'-- disable trouble\n{ "folke/trouble.nvim", enabled = false }\n')),(0,l.kt)("h2",{id:"\ufe0f-customizing-plugin-specs"},"\u270f\ufe0f Customizing Plugin Specs"),(0,l.kt)("p",null,"Defaults merging rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cmd"),": the list of commands will be extended with your custom commands"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"event"),": the list of events will be extended with your custom events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ft"),": the list of filetypes will be extended with your custom filetypes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"keys"),": the list of keymaps will be extended with your custom keymaps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"opts"),": your custom opts will be merged with the default opts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dependencies"),": the list of dependencies will be extended with your custom dependencies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"any other property will override the defaults")))),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"ft"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"keys"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"opts")," you can instead also specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," function\nthat can make changes to the default values, or return new values to be used instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- change trouble config\n{\n  "folke/trouble.nvim",\n  -- opts will be merged with the parent spec\n  opts = { use_diagnostic_signs = true },\n}\n\n-- add cmp-emoji\n{\n  "hrsh7th/nvim-cmp",\n  dependencies = { "hrsh7th/cmp-emoji" },\n  ---@param opts cmp.ConfigSchema\n  opts = function(_, opts)\n    local cmp = require("cmp")\n    opts.sources = cmp.config.sources(vim.list_extend(opts.sources, { { name = "emoji" } }))\n  end,\n}\n')),(0,l.kt)("h2",{id:"\ufe0f-adding--disabling-plugin-keymaps"},"\u2328\ufe0f Adding & Disabling Plugin Keymaps"),(0,l.kt)("p",null,"Adding ",(0,l.kt)("inlineCode",{parentName:"p"},"keys=")," follows the rules as explained above."),(0,l.kt)("p",null,"You can also disable a default keymap by setting it to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),".\nTo override a keymap, simply add one with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"lhs")," and a new ",(0,l.kt)("inlineCode",{parentName:"p"},"rhs"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/plugins/telescope.lua"',title:'"lua/plugins/telescope.lua"'},'{\n  "nvim-telescope/telescope.nvim",\n  keys = {\n    -- disable the keymap to grep files\n    {"<leader>/", false},\n    -- change a keymap\n    { "<leader>ff", "<cmd>Telescope find_files<cr>", desc = "Find Files" },\n    -- add a keymap to browse plugin files\n    {\n      "<leader>fp",\n      function() require("telescope.builtin").find_files({ cwd = require("lazy.core.config").options.root }) end,\n      desc = "Find Plugin File",\n    },\n  },\n},\n')),(0,l.kt)("p",null,"You can also return a whole new set of keymaps to be used instead.\nOr return ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," to disable all keymaps for a plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/plugins/telescope.lua"',title:'"lua/plugins/telescope.lua"'},'{\n  "nvim-telescope/telescope.nvim",\n  -- replace all Telescope keymaps with only one mapping\n  keys = function()\n    return {\n      { "<leader>ff", "<cmd>Telescope find_files<cr>", desc = "Find Files" },\n    }\n  end,\n},\n')))}d.isMDXComponent=!0}}]);