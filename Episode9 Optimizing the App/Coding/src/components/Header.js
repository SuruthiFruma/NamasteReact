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
        <div className="header">
            <h2 className="title">Food Clone App</h2>
            <div className="nav-items">
                <ul>
                    <li><Link to ="/home">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li><Link to ="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-logout" onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header