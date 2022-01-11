import { useEffect, useState } from "react";
import { DrinkTile, } from "../DrinkTile/DrinkTile";
import './BrowseCocktails.css';

export const BrowseCocktails = () => {
  const [popularCocktails, setPopularCocktails] = useState([]);
  const [latestCocktails, setLatestCocktails] = useState([]);
  const [cocktailsByLetter, setCocktailsByLetter] = useState([]);
  const [popularLoading, setPopularLoading] = useState(false);
  const [latestLoading, setLatestLoading] = useState(false);
  const [byLetterLoading, setByLetterLoading] = useState(false);

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
    try {
      setCocktailsByLetter([]);
      setByLetterLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`);
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();
      setCocktailsByLetter(data.drinks)
      console.log("API info", data.drinks);
      setByLetterLoading(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };
  
  useEffect(() => {
    getPopularCocktails();
    getLatestCocktails();
  }, []);

  if (error.error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>   
      {popularLoading ? (
        <p>loading...</p>
      ) : (
        <div >
           <header className="header"><h1>Popular Cocktails</h1></header>
           <div className=' popular'>
          {popularCocktails.map((item, index) => {
            return <DrinkTile key={index} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} />
          })}</div>
        </div>
      )}
  
      {latestLoading ? (
        <p>loading...</p>
      ) : (
        <div >
          <hr></hr>
           <header className="header"><h1>Latest Cocktails</h1></header>
           <div className='latest '>
          {latestCocktails.map((item, index) => {
            return <DrinkTile key={index} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} />
          })}</div>
        </div>
        )}


      <div >
        <hr></hr>
          <header className="header"><h1> Cocktails A-Z</h1></header>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("a")}>A</h1>
            <h1 className="letter-link" onClick={() => getCocktailsByLetter("b")}>B</h1>
          <div className="letter">
            {cocktailsByLetter.map((item, index) => {
            return <DrinkTile key={index} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} />
          })}</div>
      </div>      
    </div>
  );
}