import './IngredientTile.css'

// This component should contain the name of the ingredient, an image of it
// and a button to remove it from the MyBarPage

export const IngredientTile = (props) =>{
    return(
        <section className="ingredient-container">
            
               
                <img className='ingredient-img'  src={props.ingredientImg} alt="ingredient-image"/>
                
                <h1 className="ingredientImg-name">{props.ingredientName}</h1>
               
            
        </section>
    )
}