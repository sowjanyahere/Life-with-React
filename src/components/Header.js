import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilits/urls";

const Header = () => {
    const [loginLabel , setLoginLabel] = useState("Login");

    return <div className="header_app_con">
        <div className="logo_con">
            <img className="logo" alt="logo" src={LOGO_URL} />
        </div>
        <div className="nav_items_con">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>{
                    loginLabel=="Login" ? setLoginLabel("Logout") : setLoginLabel("Login");
                }}>{loginLabel}</button>
            </ul>
        </div>

    </div>
}

export default Header;