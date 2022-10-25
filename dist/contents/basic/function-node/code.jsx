import { h, render } from "/es-lib/omii/latest/omii.js";

let count = 1;
render(<h1>这是一个表达式节点：{count}</h1>, "body");

render(() => {
  return (
    <h1>
      这是一个函数节点：
      {() => {
        return <output>{count}</output>;
      }}
      <button
        onClick={(e) => {
          count++;
          document.querySelector("output").update();
        }}
      >
        +
      </button>
    </h1>
  );
}, "body");

render(() => {
  return (
    <h1>
      这是一个函数节点：
      {({ update }) => {
        setTimeout(() => {
          update();
        }, 1000);
        return <output>{new Date().toUTCString()}</output>;
      }}
    </h1>
  );
}, "body");
