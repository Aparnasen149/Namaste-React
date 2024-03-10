/* const title = React.createElement('h1',{id:'heading'},'Hello world')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(title)
 */

const title = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "child" }, "Child1 h1 tag"),
    React.createElement("h2", { id: "child" }, "Child2 h2 tag")
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
console.log(title);
