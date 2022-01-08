// import './TextInput.css'

// // This component should be a text input field for use in the Register and Sign In page components

// import { useState } from "react";

// // const [ingredients, setIngredients] = useState([])
// // const [input, setInput] = useState("")

// // const changeHandler =(e) => {
// //     //e.preventDefault();
// //     setInput(e.target.value)
// // }


// //will add ingredient to ingredients useState
// // const addHandler = () => {
// //     let addIngredient = [...ingredients] //pulls in current ingredient useState
// //     addIngredient.push(input) //adds new ingredient
// //     setIngredients(addIngredients) //pushes old ingredients + new ingredient to ingredient useState
// // }

// // const removeHandler = () => {
// //     let removeIngredient = [...ingredients]
// //     removeIngredient.splice(index, 1)//check what this removes
// //     setIngredients(removeIngredient)
// // }

// export const IngredientInput = () => {
//     const [ingredients, setIngredients] = useState([])
//     const [input, setInput] = useState("")

//     const changeHandler =(e) => {
//         e.preventDefault();
//         setInput(e.target.value)
//     };
    
//     const addHandler = () => {
//         let addIngredient = [...ingredients] //pulls in current ingredient useState
//         addIngredient.push(input) //adds new ingredient
//         setIngredients(addIngredients) //pushes old ingredients + new ingredient to ingredient useState
//     };
    
//     const removeHandler = () => {
//         let removeIngredient = [...ingredients]
//         removeIngredient.splice(index, 1)//check what this removes
//         setIngredients(removeIngredient)
//     };

//     return(
//         <div>
//             <div>
//                 <h1>Add your spirits and mixers here</h1>
//                 <input>
//                     onChange={changeHandler}
//                 </input>
//                 <button onClick={addHandler}>Add to MyBar</button>
//             </div>
//             <div>
//                 {ingredients.map((ingredient, index) => {
//                     return (
//                         <div key={index}>
//                             <h3>{ingredient}</h3>
//                             <button onClick={() => removeHandler(index)}>Remove Ingredient</button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// // export const TextInput = () =>{
// //     return(
// //         <div>

// //         </div>
// //     )
// // }