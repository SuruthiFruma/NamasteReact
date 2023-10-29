import { useContext } from "react"
import UserContext from "../utils/UserContext"
import AccordionList from "./AccordionList"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
const Cart=()=>{
   const {loggedInUser} =useContext(UserContext)
   const cartItemsFromStore=useSelector(store=>store.cart.items)
   const dispatch=useDispatch()
//Dispatching an action
const handleCartDelete=()=>{
   dispatch(clearCart())
}

    return (
        <div><h1>This is Cart for {loggedInUser}</h1>

        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleCartDelete}>
                    Clear Cart
                </button>

                <AccordionList accordionData={cartItemsFromStore}></AccordionList>
            </div>
        </div>
        </div>
    )
}
export default Cart