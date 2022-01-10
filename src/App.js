import React, { useState, useEffect } from "react";

import { Header } from './components/Header/Header';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import { AboutPage } from "./components/AboutPage/AboutPage.js";
import { DrinkSearchPage } from "./components/DrinkSearchPage/DrinkSearchPage.js";
import { MyBarPage } from "./components/MyBarPage/MyBarPage.js";
import { IngredientInput } from "./components/TextInput/TextInput";

// import { tokenFetch } from "./utils";

import './styles/global.css';

const App = () =>{
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState();
   {/* added by matt */}
  const [ingredients,setIngredients] = useState([]);
  const [input, setInput] = useState("");
  {/* added by matt */}

  const aboutClicked = () => {
    setCurrentPage("About");
  }

  const myBarClicked = () => {
    setCurrentPage("MyBar");
  }

  const searchClicked = () => {
    setCurrentPage("DrinkSearch");
  }

  const signInClicked = () => {
    setCurrentPage("SignIn");
  }

  const registerClicked = () => {
    setCurrentPage("Register");
  }

  const getCurrentPage = () => {
    switch(currentPage) {
      case "About":
        return <AboutPage/>;
        //return <IngredientInput/>;
      case "MyBar":
        return <MyBarPage/>;
      case "DrinkSearch":
        return <DrinkSearchPage/>;
      case "SignIn":
        return <SignIn setUser={setUser}/>;
      case "Register":
        return <Register setUser={setUser}/>;
    }
  }

  return (
    <div className="App">
      <Header aboutClicked={aboutClicked}
              myBarClicked={myBarClicked}
              searchClicked={searchClicked}
              signInClicked={signInClicked}
              registerClicked={registerClicked}/>
      <div>
        {getCurrentPage()}
      </div>
      {/* added by matt */}
      <IngredientInput setIngredients={setIngredients} user={user} setInput={setInput} />
      {/* added by matt */}
    </div>
  );
};

export default App;