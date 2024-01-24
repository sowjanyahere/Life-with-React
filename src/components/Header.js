import { LOGO_URL } from "../utilits/urls";

const Header = () => {
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
            </ul>
        </div>

    </div>
}

export default Header;