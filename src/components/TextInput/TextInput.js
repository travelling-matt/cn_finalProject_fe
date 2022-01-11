import './TextInput.css'

// This component should be a text input field for use in the Register and Sign In page components

import { useState } from "react";
import { addIngredientsFetch } from '../../utils';
import App from '../../App';

// const [ingredients, setIngredients] = useState([])
// const [input, setInput] = useState("")

// const changeHandler =(e) => {
//     //e.preventDefault();
//     setInput(e.target.value)
// }


//will add ingredient to ingredients useState
// const addHandler = () => {
//     let addIngredient = [...ingredients] //pulls in current ingredient useState
//     addIngredient.push(input) //adds new ingredient
//     setIngredients(addIngredients) //pushes old ingredients + new ingredient to ingredient useState
// }

// const removeHandler = () => {
//     let removeIngredient = [...ingredients]
//     removeIngredient.splice(index, 1)//check what this removes
//     setIngredients(removeIngredient)
// }

export const IngredientInput = (user) => {
    const [ingredients, setIngredients] = useState([])
    const [input, setInput] = useState("")

   
    //local add
    // const addHandler = () => {
    //     let addIngredient = [...ingredients] //pulls in current ingredient useState
    //     addIngredient.push(input) //adds new ingredient
    //     setIngredients(addIngredient) //pushes old ingredients + new ingredient to ingredient useState
    // };

     const addIngredientHandler = async (e) => {
        e.preventDefault();
        let addIngredient = await [...ingredients] //pulls in current ingredient useState
        await addIngredient.push(input) //adds new ingredient
        await setIngredients(addIngredient) //pushes old ingredients + new ingredient to ingredient useState
        try {
            addIngredientsFetch(user, ingredients);
        }catch (error) {
            console.log(error, "from textInput.js");
        }
    };


    // const addIngredientHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         addIngredientFetch(email, input, setUser);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    
    const removeHandler = (index) => {
        let removeIngredient = [...ingredients]
        removeIngredient.splice(index, 1)//check what this removes
        setIngredients(removeIngredient)
    };

    return(
        <div>
            <h1>Add your spirits and mixers here</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="add ingredient here"
        />
          <button onClick={addIngredientHandler}>Add to MyBar</button>
      
      
        {ingredients.map((ingredient, index) => {
          return (
            <div key={index}>{ingredient}
              <button onClick={() => removeHandler(index)}>Remove Ingredient</button>
            </div>
          )
        })}
        </div>
    )
}

//add to App.js to test

{/* added by matt */}
      {/* <IngredientInput setIngredients={setIngredients} user={user} setInput={setInput} /> */}
      {/* added by matt */}