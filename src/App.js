import React from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./components/Header";
import ResMainCon from "./components/ResMainCon";



const Footer = () => {
    return <div className="footer_app_con">
        <div>

        </div>
    </div>
}





const App = () => {
    return <div className="main_app_container">
        <Header/>
        <ResMainCon />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
