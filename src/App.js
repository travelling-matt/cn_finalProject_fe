import React, { useState, useEffect } from "react";

import { Header } from './components/Header/Header';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import { DrinkSearchPage } from "./components/DrinkSearchPage/DrinkSearchPage";

// import { tokenFetch } from "./utils";

import './styles/global.css';

const App = () =>{
  const [user, setUser] = useState();

  return (
    <div className="App">
     <Header/>
     <SignIn setUser={setUser}/>
     <Register setUser={setUser}/>
     <DrinkSearchPage/>
    </div>
  );
};

export default App;