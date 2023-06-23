
//  To create a single tag with React
// const heading=React.createElement("h1",{},"Namaste React")

//To create child tags in React
// const parent=React.createElement("div",{id :"parent"},React.createElement("h1",{},"Namaste React"))

//To create sibling tags in React like mentioned below
//   <div id="parent">
//     <div id="child1">
//       <h1>Im first tag</h1>
//       <h1>Im second tag</h1>
//     </div>
//     <div id="child2">
//       <h1>Im first tag</h1>
//       <h1>Im second tag</h1>
//     </div>
//   </div>;

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im first tag from child 1"),
    React.createElement("h1", {}, "Im second tag from child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im first tag from child 2"),
    React.createElement("h1", {}, "Im second tag from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
