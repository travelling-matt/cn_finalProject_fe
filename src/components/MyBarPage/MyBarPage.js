import './MyBarPage.css'

import { useState, useEffect } from 'react';

import { IngredientSearch } from '../IngredientSearch/IngredientSearch.js';
import { IngredientTile } from '../IngredientTile/IngredientTile.js';
import { addIngredientsFetch, userIngredientsFetch } from '../../utils';

// This component should contain the IngredientSearch component, along with any
// of the ingredients that are stored on the MongoDB entry for this user.
// The ingredients the user has should be displayed as an IngredientTile component

export const MyBarPage = (props) =>{

    const [ingredients, setIngredients] = useState([]);

    const changeIngredients = async (state, action) => {
        console.log(`${state} ${action}`);
        let list;
        switch (action) {
            case 'add':
                list = [...ingredients];
                list.push(state);
                break;
            case 'remove':
                const index = ingredients.indexOf(state);
                list = [...ingredients];
                if(index > -1)
                    list.splice(index, 1);
                break;
            default:
                break;
        }
        setIngredients(list);
        await addIngredientsFetch(props.user, list);
    }

    const getUserIngredients = async () => {
        let list = await userIngredientsFetch(props.user);
        setIngredients(list);
    }

    useEffect(() => {
        getUserIngredients();
    }, []);

    return(
        <div className="ingredient-search-content">
            <div className="ingredient-search-bar">
                <IngredientSearch ingredientList={ingredients} changeIngredients={changeIngredients}/>
            </div>
            <div className="my-ingredients">
                {ingredients.map((item, index) => {
                    return <IngredientTile key={index} ingredientImg={`https://www.thecocktaildb.com/images/ingredients/${item}-Medium.png`} ingredientName={item} changeIngredients={changeIngredients}/>
                })}
            </div>
        </div>
    )
}