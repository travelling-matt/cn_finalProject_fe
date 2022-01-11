import './IngredientTile.css'

// This component should contain the name of the ingredient, an image of it
// and a button to remove it from the MyBarPage

export const IngredientTile = (props) =>{
    return(
        <section className="card-container">
            <div className="img-container">
                <img src={props.ingredientImg} alt="ingredient-image"/>
                <h1 className="ingredient-name">{props.ingredientName}</h1>
            </div>
        </section>
    )
}