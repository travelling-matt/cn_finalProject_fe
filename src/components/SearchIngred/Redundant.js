//Alternative using MySQL database for ingredients list
import { useState, useEffect } from "react";
import { DrinkTile } from "../DrinkTile/DrinkTile";
import './SearchIngred.css';
import React, { useRef } from 'react';
import { DrinkDetails } from '../DrinkDetails/DrinkDetails.js';
import { allIngredientsFetch } from '../../utils/index.js';


export const Search = () => {
  const [cocktailsByIngredient, setCocktailsByIngredient] = useState([]);
  const [byIngredientLoading, setByIngredientLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
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
      if (data.ingredients && data.ingredients !== "None Found") {
        let drinkList = data.ingredients;
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
    //     //const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list");
    //     const response= await allIngredientsFetch();
    //     console.log(response);
        
    //     console.log("fetching")
    //     if (response.status !== 200) {
    //       throw new Error("not fetching");
    //     }
    //     const data = await response.json();
    //     setAllIngredients(data.ingredients)
    //     console.log("API info", data.ingredients);
    //     setAllIngredientsLoading(false);
    //   } catch (e) {
    //     setError({ error: true, message: e.message });
    //   }
    // };
let list=await allIngredientsFetch();
console.log(list);
setAllIngredients(list);
console.log(allIngredients);
setAllIngredientsLoading(false)
} catch (e) {
      setError({ error: true, message: e.message });
    }
  }

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
  const clear=()=>{
    setInput("")
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
          <div className="Both">
            <div className="searchBox">
              <h3 >Search here for single or multiple ingredients separated by a comma with no space.</h3>
              <input placeholder="Enter ingredient(s)" type="text" onChange={event => setInput(event.target.value)}
                onKeyDown={handleKeyDown} />
              <button onClick={() => getCocktailsByIngredient(input)}>Search</button>
<button onClick={clear}id="clear">Clear</button>

              <div className="search-filter">
                {allIngredientsLoading ? (
                  <p>loading...</p>
                ) : (
                  <div className='main'>
                    {allIngredients.filter(item => {
    if (input === '') {
      return item;
    } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return item;
    }return false;
  }).map((item, index) => {
                      return <div> <h1 className="list" key={index} onClick={() => getCocktailsByIngredient(item.name)}>{item.name} </h1>
                      </div>
                    })}
                  </div>
                )}
              </div>
            </div>


            <h3 className="subtitle">Or click below to find a cocktail containing any of the following alcoholic drinks: </h3>
            <div className="letter-list1">

              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("ale")}>ale</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("beer")}>beer</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("whisky")}>whisky</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("whiskey")}>whiskey</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("irish whiskey")}>Irish whiskey</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("jack daniels")}>Jack Daniels</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("johnnie walker")}>Johnnie Walker</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("wine")}>wine</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("brandy")}>brandy</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("gin")}>gin</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("vodka")}>vodka</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("advocaat")}>advocaat</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("liqueur")}>liqueur</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("cognac")}>cognac</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("rum")}>rum</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("vermouth")}>vermouth</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("dry vermouth")}>dry vermouth</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("tequila")}>tequila</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("port")}>port</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("scotch")}>scotch</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("amaretto")}>amaretto</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("absinthe")}>ansinthe</h3>
              <h3 className="letter-link1" onClick={() => getCocktailsByIngredient("chareau")}>chareau</h3>
            </div>

          </div>



          <span ref={titleRef}></span>
          {cocktailsByIngredient.length !== 0 ?
            <div className="letter" >
              {cocktailsByIngredient.map((item, index) => {
                return <DrinkTile key={index} drinkID={item.idDrink} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} displayDetails={displayDetails} setCurrentDrink={setCurrentDrink} />
              })}
            </div>
            : errorMessage ?
              <h2 className="browse-error-msg">{errorMessage}</h2>
              : <span></span>
          }
        </div>)}
    </div>
  );
}