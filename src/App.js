import React, { useState, useEffect } from "react";

import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import { MyBar } from "./components/my.bar";

// import { tokenFetch } from "./utils";

import './styles/global.css';

const App = () =>{
  const [user, setUser] = useState();

  return (
    <div className="App">
     <Header/>
     <Layout/>
     <SignIn setUser={setUser}/>
     <Register setUser={setUser}/>
    </div>
  );
};

export default App;