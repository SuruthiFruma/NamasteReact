//Passing props

import React from "react";
import ReactDOM from "react-dom/client";

//********Props in itself is sent as an object ***********

//To send props as direct value
// Eg:<Dummy value="5"> </Dummy> is taken as a prop which is
// let prop={
//     value:5
// }
// It can be accessed like prop.data or destructed as let {data}=prop

//To send a already declared string or array
//<Dummy value={name}></Dummy
//So the prop obj will be
//let prop={
//   value:"fruma"
//}
//It can be accessed like prop.value or destructed like let {value}=prop

//To pass a already defined object
//<Dummy value={actualValue}></Dummy>
//So the prop obj will be of the structure
//let prop={
//     value:{
//         name:"fruma"
//     }
// }
//It can be accessed like prop.value.name or destructed like let {value}=prop, let {name}=value

const testString = "Welcome";
const testObject = {
  name: "fruma",
  age: 24,
};

const Dummy0=(props)=>{
    let {value}=props
    return (<>
  {value}
    </>)
}
const Dummy1 = (prop) => {
  let { value } = prop;
  return <>{value}</>;
};

const Dummy2 = (prop) => {
  let { value } = prop;
  let { name, age } = value;
  return (
    <>
      {name}
      {age}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dummy0 value="Welcome"></Dummy0>)
root.render(<Dummy1 value={testString}></Dummy1>);
root.render(<Dummy2 value={testObject}></Dummy2>);
