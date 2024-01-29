import React from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./components/Header";
import ResMainCon from "./components/ResMainCon";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ResMenuCard from "./components/ResMenuCard";


const Footer = () => {
    return <div className="footer_app_con">
        <div>

        </div>
    </div>
}


const App = () => {
    return <div className="main_app_container">
        <Header/>
        <Outlet />
    </div>
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<ResMainCon/>
            },
            {
                path:"about",
                element:<AboutUs/>
            },
            {
                path: "contact",
                element:<ContactUs/>
            },
            {
                path: "resmenucard/:resid",
                element:<ResMenuCard />
            }

        ],
        errorElement:<Error/>
    }
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);
