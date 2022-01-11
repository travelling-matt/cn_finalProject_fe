
import { useEffect, useState } from "react";

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
      const response = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php");
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
  return (
    <div>
      <header className="title"><button onClick={handler}>List Popular Cocktails</button></header>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className='main'>
           {item.map((item, index) => {
        return <div> <h1>{item.strDrink}</h1><img className='images'key={index} src={item.strDrinkThumb}alt="cocktails"/>
        <p>Ingredients:</p>
        <ul>
           <li>{item.strMeasure1} {item.strIngredient1} </li>
           <li>{item.strMeasure2} {item.strIngredient2}</li>
           <li>{item.strMeasure3} {item.strIngredient3}</li>
           <li> {item.strMeasure4} {item.strIngredient4} </li>
           <li>{item.strMeasure5} {item.strIngredient5} </li>
           <li>{item.strMeasure6} {item.strIngredient6} </li>
           <li> {item.strMeasure7} {item.strIngredient7}</li>
           </ul>         
        <p>Instructions: {item.strInstructions}</p></div>
        })}
        </div>
      )}
    </div>
  );
}
export default PopularCocktails;