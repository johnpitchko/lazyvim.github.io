"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),d=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,d]=f({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var g=n(2389);const h="tabList__CuJ",b="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(_,(0,a.Z)({},e,t)),r.createElement(j,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={},s="lang.java",d={unversionedId:"extras/lang/java",id:"extras/lang/java",title:"lang.java",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/java.md",sourceDirName:"extras/lang",slug:"/extras/lang/java",permalink:"/extras/lang/java",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/java.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/extras/lang/go"},next:{title:"JSON",permalink:"/extras/lang/json"}},u={},c=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"nvim-jdtls",id:"nvim-jdtls",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"nvim-dap <em>(optional)</em>",id:"nvim-dap-optional",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"langjava"},(0,r.kt)("inlineCode",{parentName:"h1"},"lang.java")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.java" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)("p",null," Add java to treesitter."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "java" })\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "java" })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," Configure nvim-lspconfig to install the server automatically via mason, but\ndefer actually starting it to our configuration of nvim-jtdls below."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  -- make sure mason installs the server\n  servers = {\n    jdtls = {},\n  },\n  setup = {\n    jdtls = function()\n      return true -- avoid duplicate servers\n    end,\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      jdtls = {},\n    },\n    setup = {\n      jdtls = function()\n        return true -- avoid duplicate servers\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-jdtls"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-jdtls"},"nvim-jdtls")),(0,r.kt)("p",null," Set up nvim-jdtls to attach to java files."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  return {\n    -- How to find the root dir for a given filename. The default comes from\n    -- lspconfig which provides a function specifically for java projects.\n    root_dir = require("lspconfig.server_configurations.jdtls").default_config.root_dir,\n\n    -- How to find the project name for a given root dir.\n    project_name = function(root_dir)\n      return root_dir and vim.fs.basename(root_dir)\n    end,\n\n    -- Where are the config and workspace dirs for a project?\n    jdtls_config_dir = function(project_name)\n      return vim.fn.stdpath("cache") .. "/jdtls/" .. project_name .. "/config"\n    end,\n    jdtls_workspace_dir = function(project_name)\n      return vim.fn.stdpath("cache") .. "/jdtls/" .. project_name .. "/workspace"\n    end,\n\n    -- How to run jdtls. This can be overridden to a full java command-line\n    -- if the Python wrapper script doesn\'t suffice.\n    cmd = { "jdtls" },\n    full_cmd = function(opts)\n      local fname = vim.api.nvim_buf_get_name(0)\n      local root_dir = opts.root_dir(fname)\n      local project_name = opts.project_name(root_dir)\n      local cmd = vim.deepcopy(opts.cmd)\n      if project_name then\n        vim.list_extend(cmd, {\n          "-configuration",\n          opts.jdtls_config_dir(project_name),\n          "-data",\n          opts.jdtls_workspace_dir(project_name),\n        })\n      end\n      return cmd\n    end,\n\n    -- These depend on nvim-dap, but can additionally be disabled by setting false here.\n    dap = { hotcodereplace = "auto", config_overrides = {} },\n    test = true,\n  }\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-jdtls",\n  dependencies = { "folke/which-key.nvim" },\n  ft = java_filetypes,\n  opts = function()\n    return {\n      -- How to find the root dir for a given filename. The default comes from\n      -- lspconfig which provides a function specifically for java projects.\n      root_dir = require("lspconfig.server_configurations.jdtls").default_config.root_dir,\n\n      -- How to find the project name for a given root dir.\n      project_name = function(root_dir)\n        return root_dir and vim.fs.basename(root_dir)\n      end,\n\n      -- Where are the config and workspace dirs for a project?\n      jdtls_config_dir = function(project_name)\n        return vim.fn.stdpath("cache") .. "/jdtls/" .. project_name .. "/config"\n      end,\n      jdtls_workspace_dir = function(project_name)\n        return vim.fn.stdpath("cache") .. "/jdtls/" .. project_name .. "/workspace"\n      end,\n\n      -- How to run jdtls. This can be overridden to a full java command-line\n      -- if the Python wrapper script doesn\'t suffice.\n      cmd = { "jdtls" },\n      full_cmd = function(opts)\n        local fname = vim.api.nvim_buf_get_name(0)\n        local root_dir = opts.root_dir(fname)\n        local project_name = opts.project_name(root_dir)\n        local cmd = vim.deepcopy(opts.cmd)\n        if project_name then\n          vim.list_extend(cmd, {\n            "-configuration",\n            opts.jdtls_config_dir(project_name),\n            "-data",\n            opts.jdtls_workspace_dir(project_name),\n          })\n        end\n        return cmd\n      end,\n\n      -- These depend on nvim-dap, but can additionally be disabled by setting false here.\n      dap = { hotcodereplace = "auto", config_overrides = {} },\n      test = true,\n    }\n  end,\n  config = function()\n    local opts = Util.opts("nvim-jdtls") or {}\n\n    -- Find the extra bundles that should be passed on the jdtls command-line\n    -- if nvim-dap is enabled with java debug/test.\n    local mason_registry = require("mason-registry")\n    local bundles = {} ---@type string[]\n    if opts.dap and Util.has("nvim-dap") and mason_registry.is_installed("java-debug-adapter") then\n      local java_dbg_pkg = mason_registry.get_package("java-debug-adapter")\n      local java_dbg_path = java_dbg_pkg:get_install_path()\n      local jar_patterns = {\n        java_dbg_path .. "/extension/server/com.microsoft.java.debug.plugin-*.jar",\n      }\n      -- java-test also depends on java-debug-adapter.\n      if opts.test and mason_registry.is_installed("java-test") then\n        local java_test_pkg = mason_registry.get_package("java-test")\n        local java_test_path = java_test_pkg:get_install_path()\n        vim.list_extend(jar_patterns, {\n          java_test_path .. "/extension/server/*.jar",\n        })\n      end\n      for _, jar_pattern in ipairs(jar_patterns) do\n        for _, bundle in ipairs(vim.split(vim.fn.glob(jar_pattern), "\\n")) do\n          table.insert(bundles, bundle)\n        end\n      end\n    end\n\n    local function attach_jdtls()\n      local fname = vim.api.nvim_buf_get_name(0)\n\n      -- Configuration can be augmented and overridden by opts.jdtls\n      local config = extend_or_override({\n        cmd = opts.full_cmd(opts),\n        root_dir = opts.root_dir(fname),\n        init_options = {\n          bundles = bundles,\n        },\n        -- enable CMP capabilities\n        capabilities = require("cmp_nvim_lsp").default_capabilities(),\n      }, opts.jdtls)\n\n      -- Existing server will be reused if the root_dir matches.\n      require("jdtls").start_or_attach(config)\n      -- not need to require("jdtls.setup").add_commands(), start automatically adds commands\n    end\n\n    -- Attach the jdtls for each java buffer. HOWEVER, this plugin loads\n    -- depending on filetype, so this autocmd doesn\'t run for the first file.\n    -- For that, we call directly below.\n    vim.api.nvim_create_autocmd("FileType", {\n      pattern = java_filetypes,\n      callback = attach_jdtls,\n    })\n\n    -- Setup keymap and dap after the lsp is fully attached.\n    -- https://github.com/mfussenegger/nvim-jdtls#nvim-dap-configuration\n    -- https://neovim.io/doc/user/lsp.html#LspAttach\n    vim.api.nvim_create_autocmd("LspAttach", {\n      callback = function(args)\n        local client = vim.lsp.get_client_by_id(args.data.client_id)\n        if client and client.name == "jdtls" then\n          local wk = require("which-key")\n          wk.register({\n            ["<leader>cx"] = { name = "+extract" },\n            ["<leader>cxv"] = { require("jdtls").extract_variable_all, "Extract Variable" },\n            ["<leader>cxc"] = { require("jdtls").extract_constant, "Extract Constant" },\n            ["gs"] = { require("jdtls").super_implementation, "Goto Super" },\n            ["gS"] = { require("jdtls.tests").goto_subjects, "Goto Subjects" },\n            ["<leader>co"] = { require("jdtls").organize_imports, "Organize Imports" },\n          }, { mode = "n", buffer = args.buf })\n          wk.register({\n            ["<leader>c"] = { name = "+code" },\n            ["<leader>cx"] = { name = "+extract" },\n            ["<leader>cxm"] = {\n              [[<ESC><CMD>lua require(\'jdtls\').extract_method(true)<CR>]],\n              "Extract Method",\n            },\n            ["<leader>cxv"] = {\n              [[<ESC><CMD>lua require(\'jdtls\').extract_variable_all(true)<CR>]],\n              "Extract Variable",\n            },\n            ["<leader>cxc"] = {\n              [[<ESC><CMD>lua require(\'jdtls\').extract_constant(true)<CR>]],\n              "Extract Constant",\n            },\n          }, { mode = "v", buffer = args.buf })\n\n          if opts.dap and Util.has("nvim-dap") and mason_registry.is_installed("java-debug-adapter") then\n            -- custom init for Java debugger\n            require("jdtls").setup_dap(opts.dap)\n            require("jdtls.dap").setup_dap_main_class_configs()\n\n            -- Java Test require Java debugger to work\n            if opts.test and mason_registry.is_installed("java-test") then\n              -- custom keymaps for Java test runner (not yet compatible with neotest)\n              wk.register({\n                ["<leader>t"] = { name = "+test" },\n                ["<leader>tt"] = { require("jdtls.dap").test_class, "Run All Test" },\n                ["<leader>tr"] = { require("jdtls.dap").test_nearest_method, "Run Nearest Test" },\n                ["<leader>tT"] = { require("jdtls.dap").pick_test, "Run Test" },\n              }, { mode = "n", buffer = args.buf })\n            end\n          end\n\n          -- User can set additional keymaps in opts.on_attach\n          if opts.on_attach then\n            opts.on_attach(args)\n          end\n        end\n      end,\n    })\n\n    -- Avoid race condition by calling attach the first time, since the autocmd won\'t fire.\n    attach_jdtls()\n  end,\n}\n')))),(0,r.kt)("h2",{id:"which-keynvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/which-key.nvim" }\n')))),(0,r.kt)("h2",{id:"nvim-dap-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," Ensure java debugger and test packages are installed."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\n      end,\n    },\n  },\n}\n')))))}m.isMDXComponent=!0}}]);