import React from "react"
import ReactDOM from "react-dom/client"


//ARROW FUNCTION SYNTAX
const fn1=()=>{
    return true
}
const fn2=()=> true

//HEADING COMPONENT WITHOUT RETURN
const HeadingComponentWithoutReturn=()=>(
    <>
        <h1>Heading Component Without Return</h1>
    </>
)



const number=10000000


 //FUNCTIONAL COMPONENT
const FunctionalComponent=()=>{
    return (
        <React.Fragment>
            <h1>This is a Functional Component</h1>
            <h2>This is a funcional Component using React Fragment</h2>
            </React.Fragment>
    )
}

//ANOTHER ELE
const ele=<div>This is just an element</div>

//TITLE ELEMENT
 const title=(<div>
    <h1>This is Title Element</h1>
    {number}
    {ele}
    <FunctionalComponent/>
 </div>)
  


//HEADING FUNCTIONAL COMPONENET
const HeadingComponent=()=>{
    return (
        <div id="headingComponent">
        <HeadingComponentWithoutReturn/>
        {HeadingComponentWithoutReturn()}
        {title}
        <h1 id="heading">This is Heading Component</h1>
        </div>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponentWithoutReturn/>)
 root.render(HeadingComponent())
