import './DrinkDetails.css';

import { useState, useEffect } from 'react';

export const DrinkDetails = (props) => {
    const [hidden, setHidden] = useState();
    const [drinkDetails, setDrinkDetails] = useState();
    const [drinkIngredients, setDrinkIngredients] = useState();
    const [componentInitialized, setComponentInitialized] = useState(false);

    const initComponent = async () => {
        // Fetch the drink details from the API here
        // and initialize the values into something that can be used below

        console.log("ComponentINIT");
        console.log(props.drinkID);

        const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${props.drinkID}`);
        console.log(response);
        const data = await response.json();
        setDrinkDetails([...data.drinks[0]]);

        console.log(data);

        const ingredients = [
            `${drinkDetails.strIngredient1} ${drinkDetails.strMeasure1}`,
            `${drinkDetails.strIngredient2} ${drinkDetails.strMeasure2}`,
            `${drinkDetails.strIngredient3} ${drinkDetails.strMeasure3}`,
            `${drinkDetails.strIngredient4} ${drinkDetails.strMeasure4}`,
            `${drinkDetails.strIngredient5} ${drinkDetails.strMeasure5}`,
            `${drinkDetails.strIngredient6} ${drinkDetails.strMeasure6}`,
            `${drinkDetails.strIngredient7} ${drinkDetails.strMeasure7}`,
            `${drinkDetails.strIngredient8} ${drinkDetails.strMeasure8}`,
            `${drinkDetails.strIngredient9} ${drinkDetails.strMeasure9}`,
            `${drinkDetails.strIngredient10} ${drinkDetails.strMeasure10}`,
            `${drinkDetails.strIngredient11} ${drinkDetails.strMeasure11}`,
            `${drinkDetails.strIngredient12} ${drinkDetails.strMeasure12}`,
            `${drinkDetails.strIngredient13} ${drinkDetails.strMeasure13}`,
            `${drinkDetails.strIngredient14} ${drinkDetails.strMeasure14}`,
            `${drinkDetails.strIngredient15} ${drinkDetails.strMeasure15}`
        ];

        setDrinkIngredients(ingredients);
        setComponentInitialized(true);
    }

    useEffect(() => {
        //props.childCallback = initComponent();
        initComponent();
      }, []);

    return (
        <div className="drink-details">
            {drinkDetails &&
            <>
            <div className="top-section">
                <img className="drink-image" src={drinkDetails.strImageSource}/>
                <h1 className="drink-name">{drinkDetails.strDrink}</h1>
                <h2 className="glass-type">{drinkDetails.strGlass}</h2>
            </div>
            <div className="bottom-section">
                <div className="drink-instructions">
                    <p className="instructions-paragraph">{drinkDetails.strInstructions}</p>
                </div>
                <div className="drink-ingredients">
                    {drinkIngredients.map((item, index) => {
                        if(item != " ") return <h3 className="drink-ingredients-item" key={index}>{item}</h3>
                    })}
                </div>
            </div>
            </>
            }
            <button className="close-button" onClick={props.closeDetails}>CLOSE</button>
        </div>
    );
}
