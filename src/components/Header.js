import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilits/urls";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginLabel , setLoginLabel] = useState("Login");

    return <div className="header_app_con">
        <div className="logo_con">
            <img className="logo" alt="logo" src={LOGO_URL} />
        </div>
        <div className="nav_items_con">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li> <Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button onClick={()=>{
                    loginLabel=="Login" ? setLoginLabel("Logout") : setLoginLabel("Login");
                }}>{loginLabel}</button>
            </ul>
        </div>

    </div>
}

export default Header;