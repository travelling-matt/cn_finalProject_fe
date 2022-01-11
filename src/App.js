import React, { useState, useEffect } from "react";


import { Header } from './components/Header/Header';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import { AboutPage } from "./components/AboutPage/AboutPage.js";
import { DrinkSearchPage } from "./components/DrinkSearchPage/DrinkSearchPage.js";
import { MyBarPage } from "./components/MyBarPage/MyBarPage.js";
import { BrowseCocktails } from "./components/BrowseCocktails/BrowseCocktails.js";

// import { tokenFetch } from "./utils";

import './styles/global.css';

const App = () =>{
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState();

  const aboutClicked = () => {
    setCurrentPage("About");
  }

  const myBarClicked = () => {
    setCurrentPage("MyBar");
  }

  const searchClicked = () => {
    setCurrentPage("DrinkSearch");
  }

  const browseClicked = () => {
    setCurrentPage("BrowseCocktails");
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
        return <MyBarPage user={user}/>;
      case "DrinkSearch":
        return <DrinkSearchPage/>;
      case "SignIn":
        return <SignIn setUser={setUser}/>;
      case "Register":
        return <Register setUser={setUser}/>;
      case "BrowseCocktails":
        return <BrowseCocktails/>;
    }
  }

  return (
    <div className="App">
      <Header aboutClicked={aboutClicked}
              myBarClicked={myBarClicked}
              searchClicked={searchClicked}
              browseClicked={browseClicked}
              signInClicked={signInClicked}
              registerClicked={registerClicked}/>
      <div>
        {getCurrentPage()}
      </div>
    </div>
  );
};

export default App;