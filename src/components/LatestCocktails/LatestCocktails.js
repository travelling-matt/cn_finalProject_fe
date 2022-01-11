
import { useEffect, useState } from "react";
import { DrinkTile } from "../DrinkTile/DrinkTile";

import './PopularCocktails.css';

const PopularCocktails = () => {
  const [item, setitem] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const handler = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/latest.php");
      console.log(response);
      console.log("fetching")
      if (response.status !== 200) {
        throw new Error("not fetching");
      }
      const data = await response.json();   
setitem(data.drinks)
      console.log("API info", data.drinks);
      setLoading(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };

  useEffect(() => {
    handler();
  }, []);

  if (error.error) {
    return <h1>{error.message}</h1>;
  }
  /*return <div> <h1>{item.strDrink}</h1><img className='images'key={index} src={item.strDrinkThumb}alt="cocktails"/>
  <p>Instructions: {item.strInstructions}</p></div>*/

  return (
    <div>
      <header className="title"><button onClick={handler}>List Latest Cocktails</button></header>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className='main'>
           {item.map((item, index) => {
             return <DrinkTile key={index} drinkImg={item.strDrinkThumb} drinkName={item.strDrink}/>
        })}
        </div>
      )}
    </div>
  );
}
export default PopularCocktails;