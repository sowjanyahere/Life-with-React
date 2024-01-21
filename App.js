import React from "react";
import ReactDOM from "react-dom/client" 


//React Element
const Tittle = () => (<h1>Hello World from react World!</h1>);

//React Functional Component

const HeadingComponent = () => {
   return <div id="contanier">
        <Tittle />
        <h1 className="heading">React Functional Component</h1>
    </div>
}

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>)