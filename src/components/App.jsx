import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login"

var isloggedin=false;
var isRegistered=false;

function App()
{
  return(
    <div className="container">
      {isloggedin ? <h1> Hello! </h1> : <Login isRegistered={isRegistered}/> }
     </div>
  )
}

export default App;