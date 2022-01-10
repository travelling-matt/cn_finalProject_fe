import './IngredientTile.css'

// This component should contain the name of the ingredient, an image of it
// and a button to remove it from the MyBarPage

export const IngredientTile = (props) =>{
    return(
        <div>
            <img src={props.ingredientImg}/>
            <h3>{props.ingredientName}</h3>
        </div>
    )
}