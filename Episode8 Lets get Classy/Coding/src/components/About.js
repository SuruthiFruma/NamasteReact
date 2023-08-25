import UserClass from "./UserClass"
import React from "react"


class About extends React.Component {
     constructor(){
        super()
        console.log("PARENT CONSTRUCTOR")
     }
    render() {
        console.log("PARENT RENDER")
        const aboutStyle = {
            "margin-left": "120px",
        }
        return (
            <div>
                <h1 style={aboutStyle}>
                    This is about us page</h1>
                <UserClass name="S Fruma" occupation="SDE" ></UserClass>
                {/* <UserClass name="Dummy" occupation="Dummy"></UserClass> */}
            </div>
        )
    }
    componentDidMount(){
        console.log("PARENT COMPONENT DIDMOUNT")
    }
}
export default About