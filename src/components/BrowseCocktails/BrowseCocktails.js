import { useEffect, useState } from "react";
import { DrinkTile } from "../DrinkTile/DrinkTile";
import './BrowseCocktails.css';
import React, { useRef } from 'react';
import { DrinkDetails } from '../DrinkDetails/DrinkDetails.js';


export const BrowseCocktails = () => {
  const [popularCocktails, setPopularCocktails] = useState([]);
  const [latestCocktails, setLatestCocktails] = useState([]);
  const [cocktailsByLetter, setCocktailsByLetter] = useState([]);
  const [popularLoading, setPopularLoading] = useState(false);
  const [latestLoading, setLatestLoading] = useState(false);
  const [byLetterLoading, setByLetterLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [currentDrink, setCurrentDrink] = useState();
  const [displayDrink, setDisplayDrink] = useState(false);
  const titleRef = useRef();
  function scrollHandler() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
}
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  
  const getPopularCocktails = async () => {
    try {
      setPopularLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php");
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      setPopularCocktails(data.drinks)
      console.log("API info", data.drinks);
      setPopularLoading(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  const getLatestCocktails = async () => {
    try {
      setLatestLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/latest.php");
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      setLatestCocktails(data.drinks)
      console.log("API info", data.drinks);
      setLatestLoading(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  const getCocktailsByLetter = async (letter) => {
    //try {
      setCocktailsByLetter([]);
      setByLetterLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`);
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      if(data.drinks) {
        let drinkList = data.drinks;
        drinkList.sort(function(a, b) {
          let nameA = a.strDrink.toUpperCase(); // ignore upper and lowercase
          let nameB = b.strDrink.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        });
        setCocktailsByLetter(drinkList)
        console.log("API info", drinkList);
      } else {
        setErrorMessage(`No cocktails beginning with ${letter.toUpperCase()}`);
      }
      setByLetterLoading(false);
    scrollHandler();
  };
  
  const displayDetails = () => {
    setDisplayDrink(true);
    //childCallback.current.needsToBeCalled();
  }

  const closeDetails = () => {
    setDisplayDrink(false);
    setCurrentDrink(null);
  }

  useEffect(() => {
    getPopularCocktails();
    getLatestCocktails();    
  }, []);

  if (error.error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>

      {displayDrink && currentDrink && <DrinkDetails drinkID={currentDrink} closeDetails={closeDetails}/>}

      {popularLoading ? (
        <p className="loading-text">loading...</p>
      ) : (
        <div >
           <header className="browse-section-title"><h1 className="title">Popular Cocktails</h1></header>
           <div className='popular'>
          {popularCocktails.map((item, index) => {
            return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink}/>
          
          })}
          <>
           </>
          
          </div>
        </div>
      )}
  
      {latestLoading ? (
        <p className="loading-text">loading...</p>
      ) : (
        <div >
          <hr></hr>
           <header className="browse-section-title"><h1>Latest Cocktails</h1></header>
           <div className='latest '>
          {latestCocktails.map((item, index) => {
            return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink}/>
          })}</div>
        </div>
        )}

      {byLetterLoading ? (
        <p className="loading-text">loading...</p>
      ) : (
        
      <div >
        <hr></hr>
          <header className="browse-section-title"><h1 ref={titleRef}> Cocktails A-Z</h1></header>
          <div className="letter-list">          
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("a")}>A</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("b")}>B</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("c")}>C</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("d")}>D</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("e")}>E</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("f")}>F</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("g")}>G</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("h")}>H</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("i")}>I</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("j")}>J</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("k")}>K</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("l")}>L</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("m")}>M</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("n")}>N</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("o")}>O</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("p")}>P</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("q")}>Q</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("r")}>R</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("s")}>S</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("t")}>T</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("u")}>U</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("v")}>V</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("w")}>W</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("x")}>X</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("y")}>Y</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("z")}>Z</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("0")}>0</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("1")}>1</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("2")}>2</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("3")}>3</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("4")}>4</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("5")}>5</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("6")}>6</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("7")}>7</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("8")}>8</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("9")}>9</h1>
            </div>
            {cocktailsByLetter.length !== 0 ?
              <div className="letter">
                {cocktailsByLetter.map((item, index) => {
                return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink}/>
                })}
              </div>
            :
              <h1>{errorMessage}</h1>
            }
      </div> )}     
    </div>
  );
}