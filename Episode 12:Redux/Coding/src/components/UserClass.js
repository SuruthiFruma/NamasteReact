import React from "react";
import { GITHUB_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {

    constructor(props) {
        console.log("CHILD CONSTRUCTOR")
        super(props)
        // this.state={
        //     count:0
        // }
        this.state = {
            userInfo: '',
        }
    }
    async componentDidMount() {
        console.log("CHILD COMPONENT DID MOUNT")
        const data = await fetch(GITHUB_URL)
        const parsedData = await data.json()
        this.setState({ userInfo: parsedData })

    }
    componentDidUpdate(){
        console.log("CHILD COMPONENT DID UPDATE")
        console.log("after github API is finished calling")
    }
    componentWillUnmount(){
        console.log("component unmounted")
    }
    render() {
        console.log("CHILD RENDER")
        let { props } = this || {}
        let { name, occupation } = props || {}
        let { userInfo } = this.state || {}

        return userInfo===''? (<></>) :(
            <div className="user-box">
                <h1>Author Info</h1>
                <img src={userInfo.avatar_url}></img>
                <h3>Author name : {name}</h3>
                <h3>Occupation:{occupation}</h3>
                <h3>
                    {/* Reading Context in Functional Component */}
                <UserContext.Consumer>
                    {data=><h3>{data.loggedInUser}</h3>

                    
                    }
                    
                </UserContext.Consumer>
                </h3>
                {/* <button onClick={()=>{
                   this.setState({count:count+1})
                }}>Increase</button>
                {count} */}
            </div>)
    }
}
export default UserClass