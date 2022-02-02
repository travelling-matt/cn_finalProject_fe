import { useState } from "react";
import { DrinkTile } from "../DrinkTile/DrinkTile";
import './BrowseCocktails.css';
import { DrinkDetails } from '../DrinkDetails/DrinkDetails.js';


export const BrowseCocktails = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailsLoading, setCocktailsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDrink, setCurrentDrink] = useState();
  const [displayDrink, setDisplayDrink] = useState(false);

  const getCocktails = async (parameter) => {

    setCocktailList([]);
    setCocktailsLoading(true);

    let fetchParameter;

    switch(parameter) {
      case "popular":
        fetchParameter = `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`;
        break;

      case "latest":
        fetchParameter = `https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`;
        break;

      case "random":
        fetchParameter = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
        break;

      default:
        fetchParameter = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${parameter}`;
        break;
    }

    const response = await fetch(fetchParameter);

    if (response.status !== 200) {
      throw new Error("Cocktail Fetch Failed");
    }

    const data = await response.json();

    if(data.drinks) {
      let drinkList = data.drinks;

      if(parameter !== "random" && parameter !== "popular" && parameter !== "latest") {
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
      }
      setCocktailList(drinkList)
    } else {
      setErrorMessage(`No cocktails beginning with ${parameter.toUpperCase()}`);
    }
    setCocktailsLoading(false);
  };
  
  const displayDetails = () => {
    setDisplayDrink(true);
  }

  const closeDetails = () => {
    setDisplayDrink(false);
    setCurrentDrink(null);
  }

  return (
    <div className="browse-main-container">

      {displayDrink && currentDrink && <DrinkDetails drinkID={currentDrink} closeDetails={closeDetails}/>}

      <div className="browse-navigation">
        <div className="browse-nav-categories">
          <h1 className="browse-link" onClick={() => getCocktails("popular")}>Popular</h1>
          <h1 className="browse-link" onClick={() => getCocktails("latest")}>Latest</h1>
          <h1 className="browse-link" onClick={() => getCocktails("random")}>Random</h1>
        </div>
        <div className="browse-nav-letters">
          <h1 className="browse-link" onClick={() => getCocktails("a")}>A</h1>
          <h1 className="browse-link" onClick={() => getCocktails("b")}>B</h1>
          <h1 className="browse-link" onClick={() => getCocktails("c")}>C</h1>
          <h1 className="browse-link" onClick={() => getCocktails("d")}>D</h1>
          <h1 className="browse-link" onClick={() => getCocktails("e")}>E</h1>
          <h1 className="browse-link" onClick={() => getCocktails("f")}>F</h1>
          <h1 className="browse-link" onClick={() => getCocktails("g")}>G</h1>
          <h1 className="browse-link" onClick={() => getCocktails("h")}>H</h1>
          <h1 className="browse-link" onClick={() => getCocktails("i")}>I</h1>
          <h1 className="browse-link" onClick={() => getCocktails("j")}>J</h1>
          <h1 className="browse-link" onClick={() => getCocktails("k")}>K</h1>
          <h1 className="browse-link" onClick={() => getCocktails("l")}>L</h1>
          <h1 className="browse-link" onClick={() => getCocktails("m")}>M</h1>
          <h1 className="browse-link" onClick={() => getCocktails("n")}>N</h1>
          <h1 className="browse-link" onClick={() => getCocktails("o")}>O</h1>
          <h1 className="browse-link" onClick={() => getCocktails("p")}>P</h1>
          <h1 className="browse-link" onClick={() => getCocktails("q")}>Q</h1>
          <h1 className="browse-link" onClick={() => getCocktails("r")}>R</h1>
          <h1 className="browse-link" onClick={() => getCocktails("s")}>S</h1>
          <h1 className="browse-link" onClick={() => getCocktails("t")}>T</h1>
          <h1 className="browse-link" onClick={() => getCocktails("u")}>U</h1>
          <h1 className="browse-link" onClick={() => getCocktails("v")}>V</h1>
          <h1 className="browse-link" onClick={() => getCocktails("w")}>W</h1>
          <h1 className="browse-link" onClick={() => getCocktails("x")}>X</h1>
          <h1 className="browse-link" onClick={() => getCocktails("y")}>Y</h1>
          <h1 className="browse-link" onClick={() => getCocktails("z")}>Z</h1>
          <h1 className="browse-link" onClick={() => getCocktails("0")}>0</h1>
          <h1 className="browse-link" onClick={() => getCocktails("1")}>1</h1>
          <h1 className="browse-link" onClick={() => getCocktails("2")}>2</h1>
          <h1 className="browse-link" onClick={() => getCocktails("3")}>3</h1>
          <h1 className="browse-link" onClick={() => getCocktails("4")}>4</h1>
          <h1 className="browse-link" onClick={() => getCocktails("5")}>5</h1>
          <h1 className="browse-link" onClick={() => getCocktails("6")}>6</h1>
          <h1 className="browse-link" onClick={() => getCocktails("7")}>7</h1>
          <h1 className="browse-link" onClick={() => getCocktails("8")}>8</h1>
          <h1 className="browse-link" onClick={() => getCocktails("9")}>9</h1>
        </div>
        <hr className="browse-hr"/>
      </div>
      <div className="browse-cocktail-section">
        {cocktailsLoading ?
            <p className="browse-loading-text"></p>
          :
            cocktailList.length !== 0 ?
              cocktailList.map((item, index) =>
                {return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink}/>})
                :errorMessage!==""?
              <h1 className="browse-error-msg">{errorMessage}</h1>:
              <span></span>
            
          
        }              
      </div>   
    </div>
  )
}