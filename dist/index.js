var B=Object.defineProperty;var v=(i,t,o)=>t in i?B(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var r=(i,t,o)=>(v(i,typeof t!="symbol"?t+"":t,o),o),U=(i,t,o)=>{if(!t.has(i))throw TypeError("Cannot "+o)};var a=(i,t,o)=>(U(i,t,"read from private field"),o?o.call(i):t.get(i)),p=(i,t,o)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,o)},f=(i,t,o,n)=>(U(i,t,"write to private field"),n?n.call(i,o):t.set(i,o),o);import{h as e,render as R,define as O,Component as y,createRef as u}from"/es-lib/omii/latest/omii.js";import"/es-lib/omii-ui/latest/omii-ui.js";var b=`
:host {
  --oi-tab-nav-padding: .6rem 1rem;
  --oi-tab-nav-line-height: 2;
  --oi-tab-nav-font: normal 1.6rem arial, sans-serif;
  --oi-tab-nav-active-font: var(--oi-tab-nav-font);
  --oi-tab-nav-hover-font: var(--oi-tab-nav-font);
  --oi-tab-nav-active-color: #39A7F1;
  --oi-tab-nav-active-border-bottom: 3px solid #0d6efd;
  --oi-tab-nav-hover-border-bottom: 3px solid #0d6efd;
  --oi-tab-nav-border-bottom: 3px solid transparent;
  --layout-tools-width: 3rem;
  --oi-layout-left-padding: 0 0 0 var(--layout-tools-width);
  --oi-icon-color: #39A7F1;
  --oi-icon-width: 2rem;
  --oi-icon-height: var(--oi-icon-width);
  color: white;
  height: 100%;
  display: block;
  --oi-tree-node-color: white;
  --oi-tree-node-hover-color: #e9c700;
  --oi-tree-node-hover-bgcolor: #8b8f7a;
  --oi-tree-node-selected-color: #c3a700;
  --oi-tree-node-selected-bgcolor: #414339;
  --oi-tree-node-font: 16px;
}

hr {
  margin-bottom: 2rem;
}

h1 {
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-bottom: #07518a solid 3px;
  text-transform: uppercase;
}

h2 {
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-bottom: #249af3 solid 2px;
}

h3 {
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-bottom: #35a0f1 solid 1px;
}

p {
  font-size: 1.3rem;
  line-height: 1.9;
  letter-spacing: 0.1rem;
}

dl dt {
  font-size: 1.6rem;
  line-height: 3.6rem;
}
dl dt dd {
  line-height: 2rem;
  font-size: 1.3rem;
}

div.code,
div.preview {
  height: 50%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

div.preview {
  border-top: #39A7F1 solid 6px;
}

#preview {
  box-sizing: border-box;
  border: 0;
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 0;
  margin: 0;
}

oi-layout {
  background-color: #2d2d2d;
}

[slot=footer],
[slot=header] {
  height: 3rem;
  background-color: #323233;
}

[slot=header] li {
  list-style: none;
  display: inline-block;
  color: white;
  margin: 0.5rem 1rem;
}

[slot=left] {
  font-size: 0.8rem;
  width: 16rem;
  height: 100%;
  background: #252526;
  color: white;
  overflow: auto;
}

.tools {
  position: absolute;
  width: var(--layout-tools-width);
  background-color: #272822;
  text-align: center;
  height: 100%;
  left: 0;
  top: 0;
}
.tools li {
  cursor: pointer;
}
.tools li:hover {
  --oi-icon-color: #249af3;
}

[slot=left] ul {
  margin: 0;
  padding: 0;
}

[slot=left] ul > li {
  list-style: none;
  color: white;
  margin: 0.5rem;
}

[slot=right] {
  width: 56rem;
  height: 100%;
  background-color: #252526;
  overflow: auto;
}

[slot=content] {
  background-color: #1e1e1e;
  height: 100%;
  overflow: auto;
  padding: 1rem 2rem;
}
[slot=content] ul li {
  line-height: 2rem;
  font-size: 1.3rem;
}

a {
  color: #249af3;
  font-weight: bold;
}

a:hover {
  color: #0d6efd;
}

.demo {
  background-color: white;
  padding: 1rem;
  outline: #07518a solid 1px;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS1wbGF5XFxzcmMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFNSjtFQUNJOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFFQTs7O0FBR0o7RUFDSTtFQUNBO0VBRUE7OztBQUlKO0VBQ0k7RUFDQTtFQUNBOzs7QUFJQTtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOzs7QUFLWjtBQUFBO0VBRUk7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7OztBQUlKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTs7O0FBTUo7QUFBQTtFQUVJO0VBQ0E7OztBQUlKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7OztBQUtKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBRUE7RUFDSTs7O0FBT1o7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFHSTtFQUNJO0VBQ0E7OztBQU1aO0VBQ0k7RUFDQTs7O0FBR0o7RUFDSTs7O0FBSUo7RUFDSTtFQUNBO0VBQ0EifQ== */`;var g=`
:host .node .element {
  line-height: 2;
}
:host .node .element .expander::after {
  border-left-color: white;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS1wbGF5XFxzcmMiLCJzb3VyY2VzIjpbIm5vZGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJOztBQUdJO0VBQ0kifQ== */`;var{css:{getCSSStyleSheets:T,getCSSStyleSheet:x}}=omii.ui,F,l,Q;O("app-index",(F=class extends y{constructor(){super(...arguments);r(this,"layoutRef",u());r(this,"htmlRef",u());r(this,"cssRef",u());r(this,"jsxRef",u());r(this,"previewRef",u());p(this,l,{});p(this,Q,void 0)}async loadTalk(t,o=!1){this.currPath=t;let[n,m,c,d,h]=await Promise.all([import(`./contents${t}/store.js`).then(({default:s})=>(this.store.content=s,s)).catch(s=>(console.error(s),null)),fetch(`./contents${t}/content.html`).then(s=>s.status==200?s.text():null).catch(()=>null),fetch(`./contents${t}/code.css`).then(s=>s.status==200?s.text():null).catch(()=>null),fetch(`./contents${t}/code.html`).then(s=>s.status==200?s.text():null).catch(()=>null),fetch(`./contents${t}/code.jsx`).then(s=>s.status==200?s.text():null).catch(()=>null)]);f(this,l,{content:m,css:c,html:d,jsx:h}),!o&&a(this,l).content&&(await this.$("#content").update(),this.$("#content").parentNode.scrollTop=0,this.highlight(),this.cssRef.current.value=c,this.htmlRef.current.value=d,this.jsxRef.current.value=h)}highlight(){this.$("#content").querySelectorAll("pre code").forEach(t=>{this.hljs.highlightElement(t)})}run(){let t=this.htmlRef.current.value,o=this.cssRef.current.value,n=this.jsxRef.current.value,m=this.previewRef.current;m.contentWindow.location="about:blank",fetch("http://81.69.11.118:7788/build",{method:"POST",body:`const css =\`${o}\`;
          `+n}).then(c=>c.text()).then(c=>{let d=m.contentWindow.document;d.body.innerHTML=t;let h=d.createElement("script");h.setAttribute("type","module"),h.text=c,d.body.appendChild(h)})}async install(){f(this,Q,await fetch(new URL("./contents/nav.json",import.meta.url).href).then(o=>o.json())),this.path=location.hash&&location.hash.substring(1);let t=this.path.split("/").filter(o=>o);t.length==0&&(t=["home"]),this.selectedKey=t.pop(),this.expandedKeys=t,await this.loadTalk(["",...this.expandedKeys,this.selectedKey].join("/"),!0)}installed(){import("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/es/highlight.min.js").then(({default:t})=>{this.hljs=t,this.highlight()}),setTimeout(()=>{this.run()},3e3)}render(){return e("oi-layout",{ref:this.layoutRef},e("div",{slot:"header",class:"position-relative"},e("ul",null,e("li",null,e("a",{href:"javascript:"},e("oi-icon",{name:"code"})," OMII"))),e("ul",{class:"position-absolute top-0 end-0"},e("li",{onClick:t=>{this.run()}},e("a",{href:"javascript:"},e("oi-icon",{name:"arrow_right"}),"Run")),e("li",{title:"click to toggle",onClick:t=>{this.layoutRef.current.toggleRight()}},e("a",{href:"javascript:"}," ",e("oi-icon",{name:"file_copy"})," Toggle"," ")))),e("div",{slot:"left"},e("oi-tree",{"node-css":g,nodes:a(this,Q),selectedKey:this.selectedKey,expandedKeys:this.expandedKeys,onNodeSelect:t=>{let{node:o,treeNode:{path:n}}=t.detail;location.hash="#"+n,this.loadTalk(n).then(()=>{this.run()})}}),e("div",{class:"tools"},e("ul",null,e("li",{title:"click to toggle"},e("oi-icon",{name:"file_copy",onClick:t=>{this.layoutRef.current.toggleLeft()}}))))),e("div",{slot:"content"},()=>e("div",{id:"content",unsafeHTML:a(this,l).content})),e("div",{slot:"right"},e("div",{class:"code"},e("oi-tab",{items:[{key:"jsx",pane:e("oi-coder",{ref:this.jsxRef,language:"javascript",codes:a(this,l).jsx})},{key:"css",pane:e("oi-coder",{ref:this.cssRef,language:"css",codes:a(this,l).css})},{key:"html",pane:e("oi-coder",{ref:this.htmlRef,language:"html",codes:a(this,l).html})}]})),e("div",{class:"preview"},e("iframe",{frameborder:"0",id:"preview",src:"about:blank",ref:this.previewRef}))))}},l=new WeakMap,Q=new WeakMap,r(F,"stylesheets","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"),r(F,"css",[T("reboot","tables","utilities","forms","buttons","grid","scrollbar"),b]),F));x("root").then(i=>{document.adoptedStyleSheets=[i]});R(e("app-index",null),"body");
//# sourceMappingURL=index.js.map
