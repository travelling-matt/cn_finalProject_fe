import React, { useState, useEffect } from "react";
import './App.css';
//import { MyBar } from "./components/my.bar";
import { Login } from "./components/login";
import { tokenFetch } from "./utils";

import { Headers } from './components/Header/header';
import { Layout } from './components/Layout/layout';
import './styles/global.css';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser);
  }, []);

  return (
    <div className="App">
      <Headers />
      <Layout />
      
      {!user ? 
        <Login setUser={setUser} /> 
        : 
        <p>Welcome, you are logged in</p>}    

      

    </div>
  );
};

export default App;
