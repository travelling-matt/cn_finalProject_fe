import './IngredientTile.css'

// This component should contain the name of the ingredient, an image of it
// and a button to remove it from the MyBarPage


export const IngredientTile = (props) =>{

    const removeIngredient = () => {
            props.changeIngredients(
                props.ingredientName,
                "remove");
    }

    return(
        <section className="ingredient-container">
            <button className="remove-button" onClick={removeIngredient}><span className="remove">X</span></button>
                <img className='ingredient-img'  src={props.ingredientImg} alt="ingredient-image"/>
                <h1 className="ingredientImg-name">{props.ingredientName}</h1>
                
        </section>
    )
}