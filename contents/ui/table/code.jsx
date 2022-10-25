import { h, render, Component, define } from "/es-lib/omii/latest/omii.js";
import "/es-lib/omii-ui/latest/omii-ui.js";

const rows   = Array.from({ length: 20 }).map((v, index) => {
  return {
    id: index,
    name:
      index == 10 ? (
        <b style={{ color: "red" }}>{"user-" + index}</b>
      ) : (
        "user-" + index
      ),
  };
});
const columns = [
  {
    type: "checkbox",
    field: "id",
    checked: [1, 2, 3],
  },
  {
    type: "index",
    title: "序号",
    style: {
      width: "2em",
      color: "blue",
    },
    titleStyle: {
      color: "red",
      "white-space": "nowrap",
    },
  },
  {
    field: "id",
  },
  { field: "name", title: "姓名" },
];
render(<oi-table class="table-hover" columns={columns} rows={rows} />, "body");
