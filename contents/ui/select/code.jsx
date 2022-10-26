import { h, render, Component, define } from "/es-lib/omii/latest/omii.js";

import { css as CSS } from "/es-lib/omii-ui/latest/omii-ui.js";

const options = Array.from({ length: 20 }).map((v, index) => {
  return {
    value: index,
    text:
      index == 10 ? (
        <b style={{ color: "red" }}>{"option-" + index}</b>
      ) : (
        "option-" + index
      ),
  };
});

define(
  "demo-select",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "tables",
      "utilities",
      "forms",
      "buttons",
      "grid",
      "scrollbar"
    );
    render() {
      return (
        <form is="oi-form">
          <div class="mb-3">
            <label for="post" class="form-label">
              Options
            </label>
            <oi-select
              max="10"
              min="2"
              options={options}
              required
              class="form-control"
            ></oi-select>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">提交</button>
          </div>
        </form>
      );
    }
  }
);
render(<demo-select />, "body");
