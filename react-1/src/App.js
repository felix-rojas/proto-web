// this is a single component
// react creates the views in here and we can make functions
import React from 'react';
import Hello from './Hello';


function App(){

  return (
    <div>
      {/* 
      below is the app component that we 
      just created, anything can be made 
      in small modules so that it is
      more manageable 
      */}
      <Hello/> 
    </div>
  )
}

// exports this file to index.js
export default App;