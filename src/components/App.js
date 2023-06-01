
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <form action="">
        {/* Do not remove the main div */}
        {/* <label htmlFor="name">Enter your name: </label> */}
        <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
        </form>
        <p>Hello {userName}</p>
    </div>
  )
}

export default App
