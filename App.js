import React from "react";
import ReactDOM from "react-dom/client" 

const heading = React.createElement("h1",{},"Hello World from react!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)

    console.log(heading)