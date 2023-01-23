"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7462),r=t(7294),o=t(6010),l=t(2389),i=t(7392),s=t(7094),c=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:l,values:d,groupId:p,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,i.l)(b,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[k,T]=(0,r.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=p){const e=y[p];null!=e&&e!==k&&b.some((n=>n.value===e))&&T(e)}const C=e=>{const n=e.currentTarget,t=N.indexOf(n),a=b[t].value;a!==k&&(x(n),T(a),null!=p&&w(p,String(a)))},z=e=>{let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},f)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>N.push(e),onKeyDown:z,onClick:C},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":k===n})}),t??n)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function p(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},4714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={sidebar_position:2},s="General Settings",c={unversionedId:"configuration/general",id:"configuration/general",title:"General Settings",description:"The files under lua/config will be automatically loaded at the appropriate time,",source:"@site/docs/configuration/general.md",sourceDirName:"configuration",slug:"/configuration/general",permalink:"/configuration/general",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/general.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"lazy.nvim",permalink:"/configuration/lazy.nvim"},next:{title:"Plugins",permalink:"/configuration/plugins"}},m={},u=[{value:"Options",id:"options",level:2},{value:"Keymaps",id:"keymaps",level:2},{value:"Auto Commands",id:"auto-commands",level:2}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-settings"},"General Settings"),(0,r.kt)("p",null,"The files under ",(0,r.kt)("inlineCode",{parentName:"p"},"lua/config")," will be automatically loaded at the appropriate time,\nso you don't need to require those files manually.\n",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," comes with a set of default config files that will be loaded\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"before"))," your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"{4-7}","{4-7}":!0},"~/.config/nvim\n\u251c\u2500\u2500 lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 autocmds.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 keymaps.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lazy.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 options.lua\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0     \u251c\u2500\u2500 spec1.lua\n\u2502\xa0\xa0     \u251c\u2500\u2500 **\n\u2502\xa0\xa0     \u2514\u2500\u2500 spec2.lua\n\u2514\u2500\u2500 init.toml\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," any files under ",(0,r.kt)("inlineCode",{parentName:"p"},"lua/config/")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyvim.config")," manually.\n",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," will load those files automatically.")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"custom",label:"Custom Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/options.lua"',title:'"lua/config/options.lua"'},"-- Options are automatically loaded before lazy.nvim startup\n-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua\n-- Add any additional options here\n\n"))),(0,r.kt)(l.Z,{value:"defaults",label:"Default Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.options"',title:'"lazyvim.config.options"'},'-- This file is automatically loaded by plugins.config\n\nvim.g.mapleader = " "\nvim.g.maplocalleader = " "\n\nlocal opt = vim.opt\n\nopt.autowrite = true -- enable auto write\nopt.clipboard = "unnamedplus" -- sync with system clipboard\nopt.cmdheight = 1\nopt.completeopt = "menu,menuone,noselect"\nopt.conceallevel = 3 -- Hide * markup for bold and italic\nopt.confirm = true -- confirm to save changes before exiting modified buffer\nopt.cursorline = true -- Enable highlighting of the current line\nopt.expandtab = true -- Use spaces instead of tabs\nopt.formatoptions = "jcroqlnt" -- tcqj\nopt.grepformat = "%f:%l:%c:%m"\nopt.grepprg = "rg --vimgrep"\nopt.hidden = true -- Enable modified buffers in background\nopt.ignorecase = true -- Ignore case\nopt.inccommand = "nosplit" -- preview incremental substitute\nopt.joinspaces = false -- No double spaces with join after a dot\nopt.laststatus = 0\nopt.list = true -- Show some invisible characters (tabs...\nopt.mouse = "a" -- enable mouse mode\nopt.number = true -- Print line number\nopt.pumblend = 10 -- Popup blend\nopt.pumheight = 10 -- Maximum number of entries in a popup\nopt.relativenumber = true -- Relative line numbers\nopt.scrolloff = 4 -- Lines of context\nopt.sessionoptions = { "buffers", "curdir", "tabpages", "winsize" }\nopt.shiftround = true -- Round indent\nopt.shiftwidth = 2 -- Size of an indent\nopt.showmode = false -- dont show mode since we have a statusline\nopt.sidescrolloff = 8 -- Columns of context\nopt.signcolumn = "yes" -- Always show the signcolumn, otherwise it would shift the text each time\nopt.smartcase = true -- Don\'t ignore case with capitals\nopt.smartindent = true -- Insert indents automatically\nopt.spelllang = { "en" }\nopt.splitbelow = true -- Put new windows below current\nopt.splitright = true -- Put new windows right of current\nopt.tabstop = 2 -- Number of spaces tabs count for\nopt.termguicolors = true -- True color support\nopt.timeoutlen = 300\nopt.undofile = true\nopt.undolevels = 10000\nopt.updatetime = 200 -- save swap file and trigger CursorHold\nopt.wildmode = "longest:full,full" -- Command-line completion mode\nopt.winminwidth = 5 -- minimum window width\nopt.wrap = false -- Disable line wrap\n\nif vim.fn.has("nvim-0.9.0") == 1 then\n  opt.splitkeep = "screen"\n  opt.shortmess = "filnxtToOFWIcC"\nend\n\n-- fix markdown indentation settings\nvim.g.markdown_recommended_style = 0\n\n')))),(0,r.kt)("h2",{id:"keymaps"},"Keymaps"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"custom",label:"Custom Keymaps",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/keymaps.lua"',title:'"lua/config/keymaps.lua"'},"-- Keymaps are automatically loaded on the VeryLazy event\n-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua\n-- Add any additional keymaps here\n\n"))),(0,r.kt)(l.Z,{value:"defaults",label:"Default Keymaps",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.keymaps"',title:'"lazyvim.config.keymaps"'},'-- This file is automatically loaded by lazyvim.plugins.config\n\nlocal Util = require("lazyvim.util")\n\nlocal function map(mode, lhs, rhs, opts)\n  local keys = require("lazy.core.handler").handlers.keys\n  ---@cast keys LazyKeysHandler\n  -- do not create the keymap if a lazy keys handler exists\n  if not keys.active[keys.parse({ lhs, mode = mode }).id] then\n    vim.keymap.set(mode, lhs, rhs, opts)\n  end\nend\n\n-- better up/down\nmap("n", "j", "v:count == 0 ? \'gj\' : \'j\'", { expr = true, silent = true })\nmap("n", "k", "v:count == 0 ? \'gk\' : \'k\'", { expr = true, silent = true })\n\n-- Move to window using the <ctrl> hjkl keys\nmap("n", "<C-h>", "<C-w>h", { desc = "Go to left window" })\nmap("n", "<C-j>", "<C-w>j", { desc = "Go to lower window" })\nmap("n", "<C-k>", "<C-w>k", { desc = "Go to upper window" })\nmap("n", "<C-l>", "<C-w>l", { desc = "Go to right window" })\n\n-- Resize window using <ctrl> arrow keys\nmap("n", "<C-Up>", "<cmd>resize +2<cr>", { desc = "Increase window height" })\nmap("n", "<C-Down>", "<cmd>resize -2<cr>", { desc = "Decrease window height" })\nmap("n", "<C-Left>", "<cmd>vertical resize -2<cr>", { desc = "Decrease window width" })\nmap("n", "<C-Right>", "<cmd>vertical resize +2<cr>", { desc = "Increase window width" })\n\n-- Move Lines\nmap("n", "<A-j>", ":m .+1<cr>==", { desc = "Move down" })\nmap("v", "<A-j>", ":m \'>+1<cr>gv=gv", { desc = "Move down" })\nmap("i", "<A-j>", "<Esc>:m .+1<cr>==gi", { desc = "Move down" })\nmap("n", "<A-k>", ":m .-2<cr>==", { desc = "Move up" })\nmap("v", "<A-k>", ":m \'<-2<cr>gv=gv", { desc = "Move up" })\nmap("i", "<A-k>", "<Esc>:m .-2<cr>==gi", { desc = "Move up" })\n\n-- buffers\nif Util.has("nvim-bufferline.lua") then\n  map("n", "<S-h>", "<cmd>BufferLineCyclePrev<cr>", { desc = "Prev buffer" })\n  map("n", "<S-l>", "<cmd>BufferLineCycleNext<cr>", { desc = "Next buffer" })\n  map("n", "[b", "<cmd>BufferLineCyclePrev<cr>", { desc = "Prev buffer" })\n  map("n", "]b", "<cmd>BufferLineCycleNext<cr>", { desc = "Next buffer" })\nelse\n  map("n", "<S-h>", "<cmd>bprevious<cr>", { desc = "Prev buffer" })\n  map("n", "<S-l>", "<cmd>bnext<cr>", { desc = "Next buffer" })\n  map("n", "[b", "<cmd>bprevious<cr>", { desc = "Prev buffer" })\n  map("n", "]b", "<cmd>bnext<cr>", { desc = "Next buffer" })\nend\nmap("n", "<leader>bb", "<cmd>e #<cr>", { desc = "Switch to Other Buffer" })\nmap("n", "<leader>`", "<cmd>e #<cr>", { desc = "Switch to Other Buffer" })\n\n-- Clear search with <esc>\nmap({ "i", "n" }, "<esc>", "<cmd>noh<cr><esc>", { desc = "Escape and clear hlsearch" })\n\n-- Clear search, diff update and redraw\n-- taken from runtime/lua/_editor.lua\nmap(\n  "n",\n  "<leader>ur",\n  "<Cmd>nohlsearch<Bar>diffupdate<Bar>normal! <C-L><CR>",\n  { desc = "Redraw / clear hlsearch / diff update" }\n)\n\nmap("n", "gw", "*N")\nmap("x", "gw", "*N")\n\n-- https://github.com/mhinz/vim-galore#saner-behavior-of-n-and-n\nmap("n", "n", "\'Nn\'[v:searchforward]", { expr = true, desc = "Next search result" })\nmap("x", "n", "\'Nn\'[v:searchforward]", { expr = true, desc = "Next search result" })\nmap("o", "n", "\'Nn\'[v:searchforward]", { expr = true, desc = "Next search result" })\nmap("n", "N", "\'nN\'[v:searchforward]", { expr = true, desc = "Prev search result" })\nmap("x", "N", "\'nN\'[v:searchforward]", { expr = true, desc = "Prev search result" })\nmap("o", "N", "\'nN\'[v:searchforward]", { expr = true, desc = "Prev search result" })\n\n-- Add undo break-points\nmap("i", ",", ",<c-g>u")\nmap("i", ".", ".<c-g>u")\nmap("i", ";", ";<c-g>u")\n\n-- save file\nmap({ "i", "v", "n", "s" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Save file" })\n\n-- better indenting\nmap("v", "<", "<gv")\nmap("v", ">", ">gv")\n\n-- lazy\nmap("n", "<leader>l", "<cmd>:Lazy<cr>", { desc = "Lazy" })\n\n-- new file\nmap("n", "<leader>fn", "<cmd>enew<cr>", { desc = "New File" })\n\nmap("n", "<leader>xl", "<cmd>lopen<cr>", { desc = "Open Location List" })\nmap("n", "<leader>xq", "<cmd>copen<cr>", { desc = "Open Quickfix List" })\n\n-- stylua: ignore start\n\n-- toggle options\nmap("n", "<leader>uf", require("lazyvim.plugins.lsp.format").toggle, { desc = "Toggle format on Save" })\nmap("n", "<leader>us", function() Util.toggle("spell") end, { desc = "Toggle Spelling" })\nmap("n", "<leader>uw", function() Util.toggle("wrap") end, { desc = "Toggle Word Wrap" })\nmap("n", "<leader>ul", function() Util.toggle("relativenumber", true) Util.toggle("number") end, { desc = "Toggle Line Numbers" })\nmap("n", "<leader>ud", Util.toggle_diagnostics, { desc = "Toggle Diagnostics" })\nlocal conceallevel = vim.o.conceallevel > 0 and vim.o.conceallevel or 3\nmap("n", "<leader>uc", function() Util.toggle("conceallevel", false, {0, conceallevel}) end, { desc = "Toggle Conceal" })\n\n-- lazygit\nmap("n", "<leader>gg", function() Util.float_term({ "lazygit" }, { cwd = Util.get_root() }) end, { desc = "Lazygit (root dir)" })\nmap("n", "<leader>gG", function() Util.float_term({ "lazygit" }) end, { desc = "Lazygit (cwd)" })\n\n-- quit\nmap("n", "<leader>qq", "<cmd>qa<cr>", { desc = "Quit all" })\n\n-- highlights under cursor\nif vim.fn.has("nvim-0.9.0") == 1 then\n  map("n", "<leader>ui", vim.show_pos, { desc = "Inspect Pos" })\nend\n\n-- floating terminal\nmap("n", "<leader>ft", function() Util.float_term(nil, { cwd = Util.get_root() }) end, { desc = "Terminal (root dir)" })\nmap("n", "<leader>fT", function() Util.float_term() end, { desc = "Terminal (cwd)" })\nmap("t", "<esc><esc>", "<c-\\\\><c-n>", {desc = "Enter Normal Mode"})\n\n-- windows\nmap("n", "<leader>ww", "<C-W>p", { desc = "Other window" })\nmap("n", "<leader>wd", "<C-W>c", { desc = "Delete window" })\nmap("n", "<leader>w-", "<C-W>s", { desc = "Split window below" })\nmap("n", "<leader>w|", "<C-W>v", { desc = "Split window right" })\nmap("n", "<leader>-", "<C-W>s", { desc = "Split window below" })\nmap("n", "<leader>|", "<C-W>v", { desc = "Split window right" })\n\n-- tabs\nmap("n", "<leader><tab>l", "<cmd>tablast<cr>", { desc = "Last Tab" })\nmap("n", "<leader><tab>f", "<cmd>tabfirst<cr>", { desc = "First Tab" })\nmap("n", "<leader><tab><tab>", "<cmd>tabnew<cr>", { desc = "New Tab" })\nmap("n", "<leader><tab>]", "<cmd>tabnext<cr>", { desc = "Next Tab" })\nmap("n", "<leader><tab>d", "<cmd>tabclose<cr>", { desc = "Close Tab" })\nmap("n", "<leader><tab>[", "<cmd>tabprevious<cr>", { desc = "Previous Tab" })\n\n')))),(0,r.kt)("h2",{id:"auto-commands"},"Auto Commands"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"custom",label:"Custom Auto Commands",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/autocmds.lua"',title:'"lua/config/autocmds.lua"'},"-- Autocmds are automatically loaded on the VeryLazy event\n-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua\n-- Add any additional autocmds here\n\n"))),(0,r.kt)(l.Z,{value:"defaults",label:"Default Auto Commands",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.autocmds"',title:'"lazyvim.config.autocmds"'},'-- This file is automatically loaded by plugins.init\n\n-- Check if we need to reload the file when it changed\nvim.api.nvim_create_autocmd({ "FocusGained", "TermClose", "TermLeave" }, { command = "checktime" })\n\n-- Highlight on yank\nvim.api.nvim_create_autocmd("TextYankPost", {\n  callback = function()\n    vim.highlight.on_yank()\n  end,\n})\n\n-- resize splits if window got resized\nvim.api.nvim_create_autocmd({ "VimResized" }, {\n  callback = function()\n    vim.cmd("tabdo wincmd =")\n  end,\n})\n\n-- go to last loc when opening a buffer\nvim.api.nvim_create_autocmd("BufReadPost", {\n  callback = function()\n    local mark = vim.api.nvim_buf_get_mark(0, \'"\')\n    local lcount = vim.api.nvim_buf_line_count(0)\n    if mark[1] > 0 and mark[1] <= lcount then\n      pcall(vim.api.nvim_win_set_cursor, 0, mark)\n    end\n  end,\n})\n\n-- close some filetypes with <q>\nvim.api.nvim_create_autocmd("FileType", {\n  pattern = {\n    "qf",\n    "help",\n    "man",\n    "notify",\n    "lspinfo",\n    "spectre_panel",\n    "startuptime",\n    "tsplayground",\n    "PlenaryTestPopup",\n  },\n  callback = function(event)\n    vim.bo[event.buf].buflisted = false\n    vim.keymap.set("n", "q", "<cmd>close<cr>", { buffer = event.buf, silent = true })\n  end,\n})\n\nvim.api.nvim_create_autocmd("FileType", {\n  pattern = { "gitcommit", "markdown" },\n  callback = function()\n    vim.opt_local.wrap = true\n    vim.opt_local.spell = true\n  end,\n})\n\n')))))}p.isMDXComponent=!0}}]);