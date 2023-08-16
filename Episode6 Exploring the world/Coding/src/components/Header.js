import { useState } from "react";

const Header = () => {

    const [btnText, setBtnText] = useState("Login")

    return (
        <div className="header">
            <h2 className="title">Food Clone App</h2>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-logout" onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header