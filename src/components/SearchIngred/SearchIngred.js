import { useState, useEffect } from "react";
import { DrinkTile } from "../DrinkTile/DrinkTile";
import './SearchIngred.css';
import React, { useRef } from 'react';
import { DrinkDetails } from '../DrinkDetails/DrinkDetails.js';
import { IngredientTile } from '../IngredientTile/IngredientTile.js';


export const Search = () => {
  const [cocktailsByIngredient, setCocktailsByIngredient] = useState([]);
  const [byIngredientLoading, setByIngredientLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDrink, setCurrentDrink] = useState();
  const [displayDrink, setDisplayDrink] = useState(false);
  const [input, setInput] = useState("");
  const titleRef = useRef();
  function scrollHandler() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [allIngredientsLoading, setAllIngredientsLoading] = useState(false);
  const [allIngredients, setAllIngredients] = useState([])
  const [message, setMessage] = useState("");
  
  const getCocktailsByIngredient = async (letter) => {
    try {
      setCocktailsByIngredient([]);
      setByIngredientLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${letter}`);
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      if (data.drinks && data.drinks !== "None Found") {
        let drinkList = data.drinks;
        drinkList.sort(function (a, b) {
          let nameA = a.strDrink.toUpperCase(); // ignore upper and lowercase
          let nameB = b.strDrink.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setCocktailsByIngredient(drinkList)
        console.log("API info", drinkList);
        setMessage(`Cocktails that can be made with ${letter.toUpperCase()}`)
      } else {
        setErrorMessage(`No cocktails found containing ${letter.toUpperCase()}`);
      }
      setByIngredientLoading(false);
      scrollHandler();
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };


  const getAllIngredients = async () => {
    try {
      setAllIngredientsLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list");
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      setAllIngredients(data.drinks)
      console.log("API info", data.drinks);
      setAllIngredientsLoading(false);
      
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  const displayDetails = () => {
    setDisplayDrink(true);
  }
  const closeDetails = () => {
    setDisplayDrink(false);
    setCurrentDrink(null);
  }
  useEffect(() => {
    getAllIngredients();
  }, []);

  const handleKeyDown = (event) => {
    if (input === "") return;
    else if (event.key === 'Enter')
      getCocktailsByIngredient(input)
  }
  const clear = () => {
    setInput("");
    setCocktailsByIngredient([]);
    setMessage("");
    setErrorMessage("");
    
  };
  if (error.error) {
    return <h1 className="browse-error-msg">{error.message}</h1>;
  }




  return (
    <div>{displayDrink && currentDrink && <DrinkDetails drinkID={currentDrink} closeDetails={closeDetails} />}
      {byIngredientLoading ? (
        <p className="loading-text">loading...</p>
      ) : (
        <div >
          <header className="browse-section-title"><h1 > Search here for cocktails if you have at least one ingredient</h1></header>
          <h3 className="subtitle">Search here for single ingredient  [to search for multiple ingredients in one cocktail, type your ingredients separated by a comma with no space.]</h3>
            <div className="searchBox">              
              <input placeholder="Enter ingredient(s)" type="text" value={input} onChange={event => setInput(event.target.value)}
                onKeyDown={handleKeyDown} />
               {console.log({input})} 
              <button onClick={() => {
                if (input === "") return;
                else
                  getCocktailsByIngredient(input)
              }}>Search</button>

              <button onClick={clear} id="clear">Clear</button>
</div>
<div className="search-function">
              <div className="search-filter">
                {allIngredientsLoading ? (
                  <p>loading...</p>
                ) : (
                  <div className='main'>
                    {allIngredients.filter(item => {
                      if (input === '') {
                        return item;
                      } else if (item.strIngredient1.toLowerCase().includes(input.toLowerCase())) {
                        return item;
                      } return false;
                    }).map((item, index) => {
                      return <div className="filter"> <h1 className="list" key={index} onClick={() => getCocktailsByIngredient(item.strIngredient1) && setInput(item.strIngredient1)}>{item.strIngredient1} </h1>
                      </div>
                    })}                    
                  </div>
                )}
                <div className="ingredient-tile">
              <IngredientTile  ingredientImg={`https://www.thecocktaildb.com/images/ingredients/${input}-Medium.png`} ingredientName={input} changeIngredients={clear} />
              </div>
              </div>
              
            
          </div>

          <span ref={titleRef}></span>
          {console.log(input)}
          
          {cocktailsByIngredient.length !== 0 ?
            <div>
               
             
              <div ><h1 className="browse-error-msg">{message}</h1></div>
              
              <div className="letter">{cocktailsByIngredient.map((item, index) => {
                return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink} />
              })}</div>
            </div>
            : errorMessage ?
              <h2 className="browse-error-msg">{errorMessage}</h2>
              : <span></span>
          }
        </div>)}
    </div>
  );
}