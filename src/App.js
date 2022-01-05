import React, { useState, useEffect } from "react";
import './App.css';
//import { MyBar } from "./components/my.bar";
import { Login } from "./components/login";
import { tokenFetch } from "./utils";

const App = () => {
  const [user, setUser] = userState();

  useEffect(() => {
    tokenFetch(setUser);
  }, []);

  return (
    <div className="App">
      {!user ? <Login setUser={setUser} /> : <div><p>Welcome, you are logged in</p></div>}    
    </div>
  );
};

export default App;
