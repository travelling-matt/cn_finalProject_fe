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
        <section className="card-container">
            <div className="img-container">
                <img src={props.ingredientImg} alt="ingredient-image"/>
                <h1 className="ingredient-name">{props.ingredientName}</h1>
                <button className="remove-button" onClick={removeIngredient}><h1 className="minus">-</h1></button>
            </div>
        </section>
    )
}

