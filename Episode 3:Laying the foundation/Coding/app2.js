import React from "react";
import ReactDOM from "react-dom/client";

//Element using  React createElement ()
const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");

const TitleComponentWithoutReturn = () => (
    <>
      <h1>This is title componenet without return </h1>
    </>
  );
  


//Element using JSX
const jsxHeading = (
  <>
    <h1 id="heading" className="heading">

      Namaste React
    </h1>
    {heading}
    <TitleComponentWithoutReturn/>
    <h2>This is another tag</h2>
  </>
);

//Arrow Funtions with and without return
const fun1 = () => {
  return true;
};
const fun2 = () => true;


const number=10000000000



//Functional Component
const TitleComponent = () => {
  return (
    <>
      <h1>This is title Component</h1>
      {number}
      {jsxHeading}
      <TitleComponentWithoutReturn/>
    </>
  );
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(jsxHeading);
root.render(<TitleComponent/>)
root.render(TitleComponent())
