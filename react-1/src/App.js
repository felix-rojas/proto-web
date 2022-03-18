// this is a single component
// react creates the views in here and we can make functions
import React from 'react';

function App(){
  const sayHello = () => {
    console.log("Looik ma im programming");
  };
  
  return(
    <div>
      <h1>Hello!</h1>
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}

// exports this file to index.js
export default App;