"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[454],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>v});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),u=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=u(n.components);return a.createElement(s.Provider,{value:e},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,s=n.parentName,d=o(n,["components","mdxType","originalType","parentName"]),c=u(t),m=i,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(v,r(r({ref:e},d),{},{components:t})):a.createElement(v,r({ref:e},d))}));function v(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[c]="string"==typeof n?n:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(7294),i=t(6010);const l="tabItem_Ymn6";function r(n){let{children:e,hidden:t,className:r}=n;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},e)}},5488:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(7462),i=t(7294),l=t(6010),r=t(2389),o=t(7392),s=t(7094),u=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(n){const{lazy:e,block:t,defaultValue:r,values:p,groupId:m,className:v}=n,b=i.Children.map(n.children,(n=>{if((0,i.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),f=(0,o.l)(h,((n,e)=>n.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??b.find((n=>n.props.default))?.props.value??b[0].props.value;if(null!==g&&!h.some((n=>n.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[_,T]=(0,i.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const n=y[m];null!=n&&n!==_&&h.some((e=>e.value===n))&&T(n)}const w=n=>{const e=n.currentTarget,t=N.indexOf(e),a=h[t].value;a!==_&&(x(e),T(a),null!=m&&k(m,String(a)))},q=n=>{let e=null;switch(n.key){case"Enter":w(n);break;case"ArrowRight":{const t=N.indexOf(n.currentTarget)+1;e=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(n.currentTarget)-1;e=N[t]??N[N.length-1];break}}e?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},v)},h.map((n=>{let{value:e,label:t,attributes:r}=n;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:n=>N.push(n),onKeyDown:q,onClick:w},r,{className:(0,l.Z)("tabs__item",c,r?.className,{"tabs__item--active":_===e})}),t??e)}))),e?(0,i.cloneElement)(b.filter((n=>n.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==_})))))}function m(n){const e=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(e)},n))}},2385:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(7462),i=(t(7294),t(3905)),l=t(5488),r=t(5162);const o={},s="UI",u={unversionedId:"plugins/ui",id:"plugins/ui",title:"UI",description:"nvim-notify",source:"@site/docs/plugins/ui.md",sourceDirName:"plugins",slug:"/plugins/ui",permalink:"/plugins/ui",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TreeSitter",permalink:"/plugins/treesitter"},next:{title:"Util",permalink:"/plugins/util"}},d={},c=[{value:"nvim-notify",id:"nvim-notify",level:2},{value:"dressing.nvim",id:"dressingnvim",level:2},{value:"nvim-bufferline.lua",id:"nvim-bufferlinelua",level:2},{value:"lualine.nvim",id:"lualinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"mini.indentscope",id:"miniindentscope",level:2},{value:"noice.nvim",id:"noicenvim",level:2},{value:"alpha-nvim",id:"alpha-nvim",level:2},{value:"nvim-navic",id:"nvim-navic",level:2},{value:"nvim-web-devicons",id:"nvim-web-devicons",level:2},{value:"nui.nvim",id:"nuinvim",level:2}],p={toc:c};function m(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ui"},"UI"),(0,i.kt)("h2",{id:"nvim-notify"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,i.kt)("p",null," Better ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.notify()")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  timeout = 3000,\n  max_height = function()\n    return math.floor(vim.o.lines * 0.75)\n  end,\n  max_width = function()\n    return math.floor(vim.o.columns * 0.75)\n  end,\n}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rcarriga/nvim-notify",\n  keys = {\n    {\n      "<leader>un",\n      function()\n        require("notify").dismiss({ silent = true, pending = true })\n      end,\n      desc = "Delete all Notifications",\n    },\n  },\n  opts = {\n    timeout = 3000,\n    max_height = function()\n      return math.floor(vim.o.lines * 0.75)\n    end,\n    max_width = function()\n      return math.floor(vim.o.columns * 0.75)\n    end,\n  },\n}\n')))),(0,i.kt)("h2",{id:"dressingnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/dressing.nvim"},"dressing.nvim")),(0,i.kt)("p",null," better vim.ui"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/dressing.nvim",\n  lazy = true,\n  init = function()\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.select = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.select(...)\n    end\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.input = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.input(...)\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-bufferlinelua"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/nvim-bufferline.lua"},"nvim-bufferline.lua")),(0,i.kt)("p",null," bufferline"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    diagnostics = "nvim_lsp",\n    always_show_bufferline = false,\n    diagnostics_indicator = function(_, _, diag)\n      local icons = require("lazyvim.config").icons.diagnostics\n      local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n        .. (diag.warning and icons.Warn .. diag.warning or "")\n      return vim.trim(ret)\n    end,\n    offsets = {\n      {\n        filetype = "neo-tree",\n        text = "Neo-tree",\n        highlight = "Directory",\n        text_align = "left",\n      },\n    },\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/nvim-bufferline.lua",\n  event = "VeryLazy",\n  opts = {\n    options = {\n      diagnostics = "nvim_lsp",\n      always_show_bufferline = false,\n      diagnostics_indicator = function(_, _, diag)\n        local icons = require("lazyvim.config").icons.diagnostics\n        local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n          .. (diag.warning and icons.Warn .. diag.warning or "")\n        return vim.trim(ret)\n      end,\n      offsets = {\n        {\n          filetype = "neo-tree",\n          text = "Neo-tree",\n          highlight = "Directory",\n          text_align = "left",\n        },\n      },\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"lualinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,i.kt)("p",null," statusline"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(plugin)\n  if plugin.override then\n    require("lazyvim.util").deprecate("lualine.override", "lualine.opts")\n  end\n\n  local icons = require("lazyvim.config").icons\n\n  local function fg(name)\n    return function()\n      ---@type {foreground?:number}?\n      local hl = vim.api.nvim_get_hl_by_name(name, true)\n      return hl and hl.foreground and { fg = string.format("#%06x", hl.foreground) }\n    end\n  end\n\n  return {\n    options = {\n      theme = "auto",\n      globalstatus = true,\n      disabled_filetypes = { statusline = { "dashboard", "lazy", "alpha" } },\n    },\n    sections = {\n      lualine_a = { "mode" },\n      lualine_b = { "branch" },\n      lualine_c = {\n        {\n          "diagnostics",\n          symbols = {\n            error = icons.diagnostics.Error,\n            warn = icons.diagnostics.Warn,\n            info = icons.diagnostics.Info,\n            hint = icons.diagnostics.Hint,\n          },\n        },\n        { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n        { "filename", path = 1, symbols = { modified = " \uf0f6 ", readonly = "", unnamed = "" } },\n        -- stylua: ignore\n        {\n          function() return require("nvim-navic").get_location() end,\n          cond = function() return package.loaded["nvim-navic"] and require("nvim-navic").is_available() end,\n        },\n      },\n      lualine_x = {\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.command.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n          color = fg("Statement")\n        },\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.mode.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n          color = fg("Constant") ,\n        },\n        { require("lazy.status").updates, cond = require("lazy.status").has_updates, color = fg("Special") },\n        {\n          "diff",\n          symbols = {\n            added = icons.git.added,\n            modified = icons.git.modified,\n            removed = icons.git.removed,\n          },\n        },\n      },\n      lualine_y = {\n        { "progress", separator = "", padding = { left = 1, right = 0 } },\n        { "location", padding = { left = 0, right = 1 } },\n      },\n      lualine_z = {\n        function()\n          return "\uf43a " .. os.date("%R")\n        end,\n      },\n    },\n    extensions = { "nvim-tree" },\n  }\nend\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  event = "VeryLazy",\n  opts = function(plugin)\n    if plugin.override then\n      require("lazyvim.util").deprecate("lualine.override", "lualine.opts")\n    end\n\n    local icons = require("lazyvim.config").icons\n\n    local function fg(name)\n      return function()\n        ---@type {foreground?:number}?\n        local hl = vim.api.nvim_get_hl_by_name(name, true)\n        return hl and hl.foreground and { fg = string.format("#%06x", hl.foreground) }\n      end\n    end\n\n    return {\n      options = {\n        theme = "auto",\n        globalstatus = true,\n        disabled_filetypes = { statusline = { "dashboard", "lazy", "alpha" } },\n      },\n      sections = {\n        lualine_a = { "mode" },\n        lualine_b = { "branch" },\n        lualine_c = {\n          {\n            "diagnostics",\n            symbols = {\n              error = icons.diagnostics.Error,\n              warn = icons.diagnostics.Warn,\n              info = icons.diagnostics.Info,\n              hint = icons.diagnostics.Hint,\n            },\n          },\n          { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n          { "filename", path = 1, symbols = { modified = " \uf0f6 ", readonly = "", unnamed = "" } },\n          -- stylua: ignore\n          {\n            function() return require("nvim-navic").get_location() end,\n            cond = function() return package.loaded["nvim-navic"] and require("nvim-navic").is_available() end,\n          },\n        },\n        lualine_x = {\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.command.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n            color = fg("Statement")\n          },\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.mode.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n            color = fg("Constant") ,\n          },\n          { require("lazy.status").updates, cond = require("lazy.status").has_updates, color = fg("Special") },\n          {\n            "diff",\n            symbols = {\n              added = icons.git.added,\n              modified = icons.git.modified,\n              removed = icons.git.removed,\n            },\n          },\n        },\n        lualine_y = {\n          { "progress", separator = "", padding = { left = 1, right = 0 } },\n          { "location", padding = { left = 0, right = 1 } },\n        },\n        lualine_z = {\n          function()\n            return "\uf43a " .. os.date("%R")\n          end,\n        },\n      },\n      extensions = { "nvim-tree" },\n    }\n  end,\n}\n')))),(0,i.kt)("h2",{id:"indent-blanklinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,i.kt)("p",null," indent guides for Neovim"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- char = "\u258f",\n  char = "\u2502",\n  filetype_exclude = { "help", "alpha", "dashboard", "neo-tree", "Trouble", "lazy" },\n  show_trailing_blankline_indent = false,\n  show_current_context = false,\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lukas-reineke/indent-blankline.nvim",\n  event = "BufReadPre",\n  opts = {\n    -- char = "\u258f",\n    char = "\u2502",\n    filetype_exclude = { "help", "alpha", "dashboard", "neo-tree", "Trouble", "lazy" },\n    show_trailing_blankline_indent = false,\n    show_current_context = false,\n  },\n}\n')))),(0,i.kt)("h2",{id:"miniindentscope"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.indentscope"},"mini.indentscope")),(0,i.kt)("p",null," active indent guide and indent text objects"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- symbol = "\u258f",\n  symbol = "\u2502",\n  options = { try_as_border = true },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.indentscope",\n  version = false, -- wait till new 0.7.0 release to put it back on semver\n  event = "BufReadPre",\n  opts = {\n    -- symbol = "\u258f",\n    symbol = "\u2502",\n    options = { try_as_border = true },\n  },\n  config = function(_, opts)\n    vim.api.nvim_create_autocmd("FileType", {\n      pattern = { "help", "alpha", "dashboard", "neo-tree", "Trouble", "lazy", "mason" },\n      callback = function()\n        vim.b.miniindentscope_disable = true\n      end,\n    })\n    require("mini.indentscope").setup(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"noicenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/noice.nvim"},"noice.nvim")),(0,i.kt)("p",null," noicer ui"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  lsp = {\n    override = {\n      ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n      ["vim.lsp.util.stylize_markdown"] = true,\n    },\n  },\n  presets = {\n    bottom_search = true,\n    command_palette = true,\n    long_message_to_split = true,\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/noice.nvim",\n  event = "VeryLazy",\n  opts = {\n    lsp = {\n      override = {\n        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n        ["vim.lsp.util.stylize_markdown"] = true,\n      },\n    },\n    presets = {\n      bottom_search = true,\n      command_palette = true,\n      long_message_to_split = true,\n    },\n  },\n  -- stylua: ignore\n  keys = {\n    { "<S-Enter>", function() require("noice").redirect(vim.fn.getcmdline()) end, mode = "c", desc = "Redirect Cmdline" },\n    { "<leader>snl", function() require("noice").cmd("last") end, desc = "Noice Last Message" },\n    { "<leader>snh", function() require("noice").cmd("history") end, desc = "Noice History" },\n    { "<leader>sna", function() require("noice").cmd("all") end, desc = "Noice All" },\n    { "<c-f>", function() if not require("noice.lsp").scroll(4) then return "<c-f>" end end, silent = true, expr = true, desc = "Scroll forward" },\n    { "<c-b>", function() if not require("noice.lsp").scroll(-4) then return "<c-b>" end end, silent = true, expr = true, desc = "Scroll backward"},\n  },\n}\n')))),(0,i.kt)("h2",{id:"alpha-nvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")),(0,i.kt)("p",null," dashboard"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dashboard = require("alpha.themes.dashboard")\n  local logo = [[\n  \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n  ]]\n\n  dashboard.section.header.val = vim.split(logo, "\\n")\n  dashboard.section.buttons.val = {\n    dashboard.button("f", "\uf0c5 " .. " Find file", ":Telescope find_files <CR>"),\n    dashboard.button("n", "\uf15b " .. " New file", ":ene <BAR> startinsert <CR>"),\n    dashboard.button("r", "\uf608 " .. " Recent files", ":Telescope oldfiles <CR>"),\n    dashboard.button("g", "\uf022 " .. " Find text", ":Telescope live_grep <CR>"),\n    dashboard.button("c", "\uf423 " .. " Config", ":e $MYVIMRC <CR>"),\n    dashboard.button("s", "\uf952" .. " Restore Session", [[:lua require("persistence").load() <cr>]]),\n    dashboard.button("l", "\uf9b1" .. " Lazy", ":Lazy<CR>"),\n    dashboard.button("q", "\uf426 " .. " Quit", ":qa<CR>"),\n  }\n  for _, button in ipairs(dashboard.section.buttons.val) do\n    button.opts.hl = "AlphaButtons"\n    button.opts.hl_shortcut = "AlphaShortcut"\n  end\n  dashboard.section.footer.opts.hl = "Type"\n  dashboard.section.header.opts.hl = "AlphaHeader"\n  dashboard.section.buttons.opts.hl = "AlphaButtons"\n  dashboard.opts.layout[1].val = 8\n  return dashboard\nend\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "goolord/alpha-nvim",\n  event = "VimEnter",\n  opts = function()\n    local dashboard = require("alpha.themes.dashboard")\n    local logo = [[\n    \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n    \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n    \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n    \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n    ]]\n\n    dashboard.section.header.val = vim.split(logo, "\\n")\n    dashboard.section.buttons.val = {\n      dashboard.button("f", "\uf0c5 " .. " Find file", ":Telescope find_files <CR>"),\n      dashboard.button("n", "\uf15b " .. " New file", ":ene <BAR> startinsert <CR>"),\n      dashboard.button("r", "\uf608 " .. " Recent files", ":Telescope oldfiles <CR>"),\n      dashboard.button("g", "\uf022 " .. " Find text", ":Telescope live_grep <CR>"),\n      dashboard.button("c", "\uf423 " .. " Config", ":e $MYVIMRC <CR>"),\n      dashboard.button("s", "\uf952" .. " Restore Session", [[:lua require("persistence").load() <cr>]]),\n      dashboard.button("l", "\uf9b1" .. " Lazy", ":Lazy<CR>"),\n      dashboard.button("q", "\uf426 " .. " Quit", ":qa<CR>"),\n    }\n    for _, button in ipairs(dashboard.section.buttons.val) do\n      button.opts.hl = "AlphaButtons"\n      button.opts.hl_shortcut = "AlphaShortcut"\n    end\n    dashboard.section.footer.opts.hl = "Type"\n    dashboard.section.header.opts.hl = "AlphaHeader"\n    dashboard.section.buttons.opts.hl = "AlphaButtons"\n    dashboard.opts.layout[1].val = 8\n    return dashboard\n  end,\n  config = function(_, dashboard)\n    vim.b.miniindentscope_disable = true\n\n    -- close Lazy and re-open when the dashboard is ready\n    if vim.o.filetype == "lazy" then\n      vim.cmd.close()\n      vim.api.nvim_create_autocmd("User", {\n        pattern = "AlphaReady",\n        callback = function()\n          require("lazy").show()\n        end,\n      })\n    end\n\n    require("alpha").setup(dashboard.opts)\n\n    vim.api.nvim_create_autocmd("User", {\n      pattern = "LazyVimStarted",\n      callback = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        dashboard.section.footer.val = "\u26a1 Neovim loaded " .. stats.count .. " plugins in " .. ms .. "ms"\n        pcall(vim.cmd.AlphaRedraw)\n      end,\n    })\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-navic"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/SmiteshP/nvim-navic"},"nvim-navic")),(0,i.kt)("p",null," lsp symbol navigation for lualine"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { separator = " ", highlight = true, depth_limit = 5 }\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "SmiteshP/nvim-navic",\n  lazy = true,\n  init = function()\n    vim.g.navic_silence = true\n    require("lazyvim.util").on_attach(function(client, buffer)\n      if client.server_capabilities.documentSymbolProvider then\n        require("nvim-navic").attach(client, buffer)\n      end\n    end)\n  end,\n  opts = { separator = " ", highlight = true, depth_limit = 5 },\n}\n')))),(0,i.kt)("h2",{id:"nvim-web-devicons"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-tree/nvim-web-devicons"},"nvim-web-devicons")),(0,i.kt)("p",null," icons"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-tree/nvim-web-devicons", lazy = true }\n')))),(0,i.kt)("h2",{id:"nuinvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/MunifTanjim/nui.nvim"},"nui.nvim")),(0,i.kt)("p",null," ui components"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "MunifTanjim/nui.nvim", lazy = true }\n')))))}m.isMDXComponent=!0}}]);