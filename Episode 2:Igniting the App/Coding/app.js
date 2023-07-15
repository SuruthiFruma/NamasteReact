import React from "react"
import ReactDOM from "react-dom/client"
{
  /* <div id="headdiv">
  <div id="parent">
    <p id="child1">C1</p>
    <p id="child2">C2</p>
  </div>
</div>; */
}

const headdiv = React.createElement(
  "div",
  { id: "headdiv" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("p", { id: "child1" }, "C1"),
    React.createElement("p", { id: "child2" }, "C2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headdiv);
