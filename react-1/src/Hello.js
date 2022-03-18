import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("Look ma im programming");
    };
    return (
        <div>
            <h1>Hello!</h1>
            <button onClick={sayHello}>Hello</button>
        </div>
    );
}

export default Hello;