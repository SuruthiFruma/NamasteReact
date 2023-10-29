import { useContext } from "react"
import UserContext from "../utils/UserContext"
const Cart=()=>{
   const {loggedInUser} =useContext(UserContext)
    return (
        <div><h1>This is Cart for {loggedInUser}</h1></div>
    )
}
export default Cart