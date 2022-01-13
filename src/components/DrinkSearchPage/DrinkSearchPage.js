import './DrinkSearchPage.css';

import { drinksFetch, invertedIngredientsFetch, userIngredientsFetch } from '../../utils/index.js';
import { DrinkTile } from '../DrinkTile/DrinkTile.js';

import { useState, useEffect } from 'react';

// This would contain elements specific to the DrinkSearchPage
// First element would be something to specify the search parameters
// Second element would be a container with a DrinkTile for each returned result

export const DrinkSearchPage = (props) =>{

    const [possibleDrinks, setPossibleDrinks] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);

    const findUsingMyBar = async () => {
        console.log("Finding Cocktails");
        const ingredients = await userIngredientsFetch(props.user);
        setUserIngredients(ingredients)
        if(ingredients.length == 0)
            return;
        let allDrinkObjects = await drinksFetch();
        let availableDrinks = [];
        //const availableIngredients = ['Orange Juice', 'Vodka', 'Coca-Cola', 'Rum', 'Dark Rum', 'Spiced Rum', 'Coca-Cola', 'Gin', 'Tonic Water', 'Lime', 'Ice'];
        const missingIngredients = await invertedIngredientsFetch(ingredients);

        // Iterate through every cocktail in the DB
        for(let i = 0; i < allDrinkObjects.length; i++) {
            
            // Create an array containing each ingredient in the cocktail
            // This is so we can forEach through each ingredient
            let dIng = [
                allDrinkObjects[i].ingredient1,
                allDrinkObjects[i].ingredient2,
                allDrinkObjects[i].ingredient3,
                allDrinkObjects[i].ingredient4,
                allDrinkObjects[i].ingredient5,
                allDrinkObjects[i].ingredient6,
                allDrinkObjects[i].ingredient7,
                allDrinkObjects[i].ingredient8,
                allDrinkObjects[i].ingredient9,
                allDrinkObjects[i].ingredient10,
                allDrinkObjects[i].ingredient11,
                allDrinkObjects[i].ingredient12,
                allDrinkObjects[i].ingredient13,
                allDrinkObjects[i].ingredient14,
                allDrinkObjects[i].ingredient15
            ];

            // Iterate through every missing ingredient
            // If the ingredient in the cocktail matches a missing ingredient, mark the ID as null for later identification
            // If the ingredient is null or blank, continue through the loop
            missingIngredients.forEach(ingredient => {
                dIng.forEach(drinkIngredient => {
                    if(drinkIngredient === null || drinkIngredient === "")
                        return;

                    if(drinkIngredient.toLowerCase() === ingredient.name.toLowerCase())
                        allDrinkObjects[i].id = null;
                });
            });
        };

        // Find each drink that has not been marked as null by the previous loop
        // Then add it to a list of possible drinks
        allDrinkObjects.forEach(drink => {
            if(drink.id != null)
                availableDrinks.push(drink);
        });

        setPossibleDrinks(availableDrinks);
    }

    useEffect(() => {
        findUsingMyBar();
      }, []);

    return(
        <>
        {props.user ?
        <>
            {userIngredients.length == 0 &&
                <div className='search-error'>
                    <h2 className='search-error-msg' > Add ingredients using MyBar to use this page.</h2>
                </div>
            }

            <div className='drink-layout'>
                {possibleDrinks.map((item, index) => {
                    if(index < 20)
                    return <DrinkTile key={index} drinkImg={item.thumbnailURL} drinkName={item.name}/>
                })}       
            </div>
        </>
        :   <div className='login-error'>
                <h2>Please Log In or Register to use this page.</h2>
            </div>
        }
        </>
    )
}