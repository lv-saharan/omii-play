import { h, render, define, Component, createRef, html } from "omii";
import "omii-ui";
import css from "./index.scss";
import node_css from "./node.scss";
const {
  css: { getCSSStyleSheets, getCSSStyleSheet },
} = omii.ui;

define(
  "app-index",
  class extends Component {
    static stylesheets =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css";
    static css = [getCSSStyleSheets("reboot", "utilities", "scrollbar"), css];
    layoutRef = createRef();
    htmlRef = createRef();
    cssRef = createRef();
    jsxRef = createRef();
    previewRef = createRef();

    #talk = {};
    async loadTalk(path, init = false) {
      this.currPath = path;
      const [content, css, html, jsx] = await Promise.all([
        fetch(`./contents${path}/content.html`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.css`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.html`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.jsx`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
      ]);

      this.#talk = {
        content,
        css,
        html,
        jsx,
      };

      if (!init && this.#talk.content) {
        await this.$("#content").update();
        this.initContent();
        this.$("#content").parentNode.scrollTop = 0;
        this.highlight();
        this.cssRef.current.value = css;
        this.htmlRef.current.value = html;
        this.jsxRef.current.value = jsx;
      }
    }
    initContent() {
      import(`./contents${this.currPath}/content.js`)
        .then(({ init }) => {
          init(html, this.$("#content"));
        })
        .catch((exc) => {
          console.info("import content js error", exc);
        });
    }
    highlight() {
      this.$("#content")
        .querySelectorAll("pre code")
        .forEach((el) => {
          this.hljs.highlightElement(el);
        });
    }
    run() {
      const html = this.htmlRef.current.value;
      const css = this.cssRef.current.value;
      const jsx = this.jsxRef.current.value;
      const iframe = this.previewRef.current;
      iframe.contentWindow.location = "about:blank";
      fetch("http://81.69.11.118:7788/build", {
        method: "POST",
        body:
          `const css =\`${css}\`;
          ` + jsx,
      })
        .then((r) => r.text())
        .then((js) => {
          const doc = iframe.contentWindow.document;
          doc.body.innerHTML = html;
          let scriptModule = doc.createElement("script");
          scriptModule.setAttribute("type", "module");
          scriptModule.text = js;
          doc.body.appendChild(scriptModule);
        });
    }
    #navs;
    async install() {
      this.#navs = await fetch(
        new URL("./contents/nav.json", import.meta.url).href
      ).then((r) => r.json());
      this.path = location.hash && location.hash.substring(1);
      let keys = this.path.split("/").filter((key) => key);
      if (keys.length == 0) keys = ["home"];
      this.selectedKey = keys.pop();
      this.expandedKeys = keys;
      await this.loadTalk(
        ["", ...this.expandedKeys, this.selectedKey].join("/"),
        true
      ).then(() => {
        this.initContent();
      });
    }
    installed() {
      import(
        "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/es/highlight.min.js"
      ).then(({ default: hljs }) => {
        this.hljs = hljs;
        this.highlight();
      });
      setTimeout(() => {
        this.run();
      }, 3000);
    }
    render() {
      return (
        <oi-layout ref={this.layoutRef}>
          <div slot="header" class="position-relative">
            <ul>
              <li>
                <a href="javascript:">
                  <oi-icon name="code"></oi-icon> OMII
                </a>
              </li>
            </ul>
            <ul class="position-absolute top-0 end-0">
              <li
                onClick={(evt) => {
                  this.run();
                }}
              >
                <a href="javascript:">
                  <oi-icon name="arrow_right"></oi-icon>Run
                </a>
              </li>
              <li
                title="click to toggle"
                onClick={(evt) => {
                  this.layoutRef.current.toggleRight();
                }}
              >
                <a href="javascript:">
                  {" "}
                  <oi-icon name="file_copy" /> Toggle{" "}
                </a>
              </li>
            </ul>
          </div>
          <div slot="left">
            <oi-tree
              node-css={node_css}
              nodes={this.#navs}
              selectedKey={this.selectedKey}
              expandedKeys={this.expandedKeys}
              onNodeSelect={(evt) => {
                const {
                  node,
                  treeNode: { path },
                } = evt.detail;
                location.hash = "#" + path;
                this.loadTalk(path).then(() => {
                  this.run();
                });
              }}
            ></oi-tree>
            <div class="tools">
              <ul>
                <li title="click to toggle">
                  <oi-icon
                    name="file_copy"
                    onClick={(evt) => {
                      this.layoutRef.current.toggleLeft();
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div slot="content">
            {() => {
              return <div id="content" unsafeHTML={this.#talk.content}></div>;
            }}
          </div>

          <div slot="right">
            <div class="code">
              <oi-tab
                items={[
                  {
                    key: "jsx",
                    pane: (
                      <oi-coder
                        ref={this.jsxRef}
                        language="javascript"
                        codes={this.#talk.jsx}
                      ></oi-coder>
                    ),
                  },
                  {
                    key: "css",
                    pane: (
                      <oi-coder
                        ref={this.cssRef}
                        language="css"
                        codes={this.#talk.css}
                      ></oi-coder>
                    ),
                  },
                  {
                    key: "html",
                    pane: (
                      <oi-coder
                        ref={this.htmlRef}
                        language="html"
                        codes={this.#talk.html}
                      ></oi-coder>
                    ),
                  },
                ]}
              ></oi-tab>
            </div>
            <div class="preview">
              <iframe
                frameborder="0"
                id="preview"
                src="about:blank"
                ref={this.previewRef}
              ></iframe>
            </div>
          </div>
        </oi-layout>
      );
    }
  }
);
getCSSStyleSheet("root").then((cssss) => {
  document.adoptedStyleSheets = [cssss];
});

render(<app-index></app-index>, "body");
