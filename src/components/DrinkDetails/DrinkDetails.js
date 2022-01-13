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
        const data = await response.json();
        
        const drinkData = data.drinks[0];
        await setDrinkDetails(drinkData);

        console.log(drinkData);
        console.log();

        const ingredients = [
            `${drinkData.strIngredient1} ${drinkData.strMeasure1}`,
            `${drinkData.strIngredient2} ${drinkData.strMeasure2}`,
            `${drinkData.strIngredient3} ${drinkData.strMeasure3}`,
            `${drinkData.strIngredient4} ${drinkData.strMeasure4}`,
            `${drinkData.strIngredient5} ${drinkData.strMeasure5}`,
            `${drinkData.strIngredient6} ${drinkData.strMeasure6}`,
            `${drinkData.strIngredient7} ${drinkData.strMeasure7}`,
            `${drinkData.strIngredient8} ${drinkData.strMeasure8}`,
            `${drinkData.strIngredient9} ${drinkData.strMeasure9}`,
            `${drinkData.strIngredient10} ${drinkData.strMeasure10}`,
            `${drinkData.strIngredient11} ${drinkData.strMeasure11}`,
            `${drinkData.strIngredient12} ${drinkData.strMeasure12}`,
            `${drinkData.strIngredient13} ${drinkData.strMeasure13}`,
            `${drinkData.strIngredient14} ${drinkData.strMeasure14}`,
            `${drinkData.strIngredient15} ${drinkData.strMeasure15}`
        ];

        ingredients.forEach((item, index) => {
            ingredients[index] = item.replaceAll("null", "");
        })

        setDrinkIngredients([...ingredients]);
        setComponentInitialized(true);
    }

    useEffect(() => {
        //props.childCallback = initComponent();
        initComponent();
      }, []);

    return (
        <div className="desc-drink-details">
            {drinkDetails && componentInitialized &&

                <div className="desc-top-section">
                    <div className="desc-left-section">
                        <div className="desc-title-section">
                            <img className="desc-drink-image" src={drinkDetails.strDrinkThumb}/>
                            <div className="desc-name-section">
                                <h1 className="desc-drink-name">{drinkDetails.strDrink}</h1>
                                <h3 className="desc-glass-type">Serve in a {drinkDetails.strGlass}</h3>
                            </div>
                        </div>
                        <div className="desc-horizontal-line"/>
                        <div className="desc-instructions-section">
                            <h2 className="desc-section-title">Instructions</h2>
                            <p className="desc-instructions-paragraph">{drinkDetails.strInstructions}</p>
                        </div>
                    </div>
                    <div className="desc-vertical-line"/>
                    <div className="desc-right-section">
                        <h2 className="desc-section-title">Ingredients</h2>
                        <div className="desc-instructions-container">
                            {drinkIngredients.map((item, index) => {
                                if(item != " ") return <h3 className="desc-drink-ingredients-item" key={index}>{item}</h3>
                            })}
                        </div>
                    </div>
                </div>
            }
            <button className="desc-close-button" onClick={props.closeDetails}>CLOSE</button>
        </div>
    );
}
