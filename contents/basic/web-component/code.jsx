import { h, render, Component, define } from "/es-lib/omii/latest/omii.js";
define(
  "oi-todos",
  class extends Component {
    static defaultProps = {
      todos: [],
    };
    get todos() {
      return this.props.todos;
    }
    add(todo) {
      this.todos.push(todo);
      this.update();
    }
    remove(index) {
      this.todos.splice(index, 1);
      this.update();
    }
    render() {
      return (
        <>
          <label>
            todo:<input></input>
            <button
              onClick={(evt) => {
                this.add(this.$("input").value);
              }}
            >
              +
            </button>
          </label>
          <ul>
            {this.todos.map((todo, index) => (
              <li>
                {todo}
                <button
                  onClick={(evt) => {
                    this.remove(index);
                  }}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
);
//fetch from server
const todos = ["todo 1", "todo 2", "todo 3", "todo 4"];
render(<oi-todos todos={todos} />, "body");
