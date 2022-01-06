import React, { useState, useEffect } from "react";
//import './App.css';
//import { MyBar } from "./components/my.bar";
import { Login } from "./components/login";
import { tokenFetch } from "./utils";

import { Header } from './components/Header/header';
import { Layout } from './components/Layout/Layout';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import './styles/global.css';



const App = () =>{
  const [user, setUser] = useState();

  return (
    <div className="App">
     {/* <Header/>
     <Layout/> */}
     <SignIn setUser={setUser}/>
     <Register setUser={setUser}/>
    </div>
  );
};

export default App;