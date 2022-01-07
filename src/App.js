<<<<<<< HEAD
import { Header } from './components/Header/header';
=======
import React, { useState, useEffect } from "react";

import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { SignIn } from "./components/SignIn/SignIn";
import { Register } from "./components/Register/Register";
import { MyBar } from "./components/my.bar";

// import { tokenFetch } from "./utils";

>>>>>>> fa104e00255b4e443ecffe53fec8033c006e3103
import './styles/global.css';

const App = () =>{
  const [user, setUser] = useState();

  return (
    <div className="App">
<<<<<<< HEAD
      
     <Header/>
             
=======
     <Header/>
     <Layout/>
     <SignIn setUser={setUser}/>
     <Register setUser={setUser}/>
>>>>>>> fa104e00255b4e443ecffe53fec8033c006e3103
    </div>
  );
};

export default App;