import './IngredientListItem.css'

// This component should contain the name of the ingredient from the IngredientSearch results
// and a Plus button next to the name so the ingredient can be added to the users MyBarPage

export const IngredientListItem = (props) =>{

    const addIngredient = () => {
        props.changeIngredients(
            props.ingredientName,
            "add");
        }
    

    return(
        <div className='ingredient-list-item'>
            <h3 className="ingredient-name">{props.ingredientName}</h3>
            <div className="add-button" onClick={addIngredient}><h1 className="plus">+</h1></div>
        </div>
    )
}