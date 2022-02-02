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
        <section className="ingredient-tile-container">
            <button className="ingredient-remove-button" onClick={removeIngredient}><span className="remove">X</span></button>
                <img className='ingredient-tile-img'  src={props.ingredientImg} alt="ingredient-image"/>
                <h1 className="ingredient-tile-name">{props.ingredientName}</h1>
                
        </section>
    )
}