import {
  h,
  render,
  Component,
  define,
  observe,
  unobserve,
} from "/es-lib/omii/latest/omii.js";

const store = observe({
  name: "lv-saharan",
  gender: "male",
  likes: ["tv", "music", "reading"],
  get likesCount() {
    return this.likes.length;
  },

  some: {
    prop1: 123,
    prop2: true,
  },
});

define(
  "app-main",
  class extends Component {
    static css = `
    div{
      line-height: 1.5;
      margin: .6rem;
    }
    div span{
      display:inline-block;
      margin-right:.2rem;
      width:10rem;
    }
    button{
      padding:.5rem;
      margin:.3rem;
    }
    `;

    data = store;
    //指定绑定的范围
    get bindingScope() {
      return this.data;
    }
    showLikes = true;
    render() {
      return (
        <fieldset>
          <legend>form binding</legend>
          <div>
            <span>name:</span>
            <input o-model="name" style="width:50rem;"></input>
          </div>
          <div>
            <span>gender:</span>
            <input
              o-model="gender"
              type="radio"
              value="male"
              name="gender"
            ></input>
            male
            <input
              o-model="gender"
              type="radio"
              value="female"
              name="gender"
            ></input>
            female
          </div>
          <div>
            <span>likes:</span>

            {["tv", "game", "reading", "music", "others"].map((l) => (
              <label>
                <input
                  o-model="likes"
                  type="checkbox"
                  value={l}
                  onChange={(evt) => {
                    updateBindings();
                  }}
                ></input>
                {l}
              </label>
            ))}
          </div>
          <div>
            <span>likes count</span>
            <select o-model="likesCount" disabled>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <span>some</span>
            prop1:<input type="number" o-model="some.prop1"></input> prop2:
            <input type="checkbox" o-model="some.prop2"></input>
          </div>
          <button
            onClick={(evt) => {
              this.data.name = "sa";
              this.updateBindings();
            }}
          >
            set name to sa and updateBindings
          </button>

          <button
            onClick={(evt) => {
              alert(JSON.stringify(this.data));
            }}
          >
            show data
          </button>
        </fieldset>
      );
    }
  }
);
render(<app-main />, "body");

define(
  "a-observing",
  class extends Component {
    install() {
      store.addCallbacks(({ path, oldVal, val }) => {
        if (oldVal != val) {
          this.update();
        }
      });
    }
    render() {
      return (
        <ul>
          <li>name:{store.name}</li>
          <li>gender:{store.gender}</li>
          <li>likes:{store.likes.join(',')}</li>
          <li>some.prop1:{store.some.prop1}</li>
          <li>some.prop1:{store.some.prop2==true?"true":"false"}</li>
        </ul>
      );
    }
  }
);
render(
  <fieldset>
    <legend>observing</legend>
    <a-observing></a-observing>
  </fieldset>,
  "body"
);
