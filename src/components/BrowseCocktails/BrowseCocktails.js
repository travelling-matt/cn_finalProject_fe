import { useEffect, useState } from "react";
import { DrinkTile, } from "../DrinkTile/DrinkTile";
import './BrowseCocktails.css';

export const BrowseCocktails = () => {
  const [item, setitem] = useState([]);
  const [item1, setitem1] = useState([]);
  const [item2, setitem2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

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

  const handler1 = async () => {
    try {
      setLoading1(true);
      const response1 = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/latest.php");
      console.log(response1);
      console.log("fetching")
      if (response1.status !== 200) {
        throw new Error("not fetching");
      }
      const data1 = await response1.json();
      setitem1(data1.drinks)
      console.log("API info", data1.drinks);
      setLoading1(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };
  const handler2 = async (e) => {
    e.preventDefault()
    try {
        
      setLoading2(true);
      const response2 = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a");
      console.log(response2);
      console.log("fetching")
      if (response2.status !== 200) {
        throw new Error("not fetching");
      }
      const data2 = await response2.json();
      setitem2(data2.drinks)
      console.log("API info", data2.drinks);
      setLoading2(false);
    } catch (e) {
      setError({ error: true, message: e.message });
    }
  };
  


  useEffect(() => {
    handler();
  }, []);
  useEffect(() => {
    handler1();
  }, []);
  useEffect(() => {
    handler2();
  }, []);


  if (error.error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {handler}      
      {loading ? (
        <p>loading...</p>
      ) : (
        <div >
           <header className="header"><h1>Popular Cocktails</h1></header>
           <div className=' popular'>
          {item.map((item, index) => {
            return <DrinkTile key={index} drinkImg={item.strDrinkThumb} drinkName={item.strDrink} />
          })}</div>
        </div>
      )}

      {handler1}      
      {loading1 ? (
        <p>loading...</p>
      ) : (
        <div >
          <hr></hr>
           <header className="header"><h1>Latest Cocktails</h1></header>
           <div className='latest '>
          {item1.map((item1, index) => {
            return <DrinkTile key={index} drinkImg={item1.strDrinkThumb} drinkName={item1.strDrink} />
          })}</div>
        </div>
      )}

      {loading2 ? (
        <p>loading...</p>
      ) : (
        <div >
          <hr></hr>
           <header className="header"><h1> Cocktails A-Z</h1></header>
           <div class="letter"><p onClick={handler2}>A</p>
          {item2.map((item2, index) => {
            return <DrinkTile key={index} drinkImg={item2.strDrinkThumb} drinkName={item2.strDrink} />
          })}</div>
        </div>
      )}
            
    </div>
  );
}