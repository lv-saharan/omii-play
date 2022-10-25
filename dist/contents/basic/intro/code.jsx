import { h, render } from "/es-lib/omii/latest/omii.js"
render(<style>{css}</style>, "head")
render(<h1>hello,world!</h1>, "#container");
let count = 0
function Counter(props, { update }) {
    return <div><button>-</button>{count} <button>+</button></div>
}

render(<Counter></Counter>, "body")