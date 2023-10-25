import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnText, setBtnText] = useState("Login")


    //**************Hooks like useState,useEffect shouldnt used in conditionals, loops ****************
    useEffect(() => {
        if (btnText === "Logout") {
            console.log("Call the Logout API")
        }
    })


    return (
        <div className="flex justify-between bg-red-100 shadow m-2">
            <h2 className="flex items-center p-5 ">Food Clone App</h2>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to ="/home">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/cart">Cart</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="login-logout" onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header