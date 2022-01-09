import './DrinkTile.css'

// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export const DrinkTile = (props) =>{
    return(
        <div  className="container"> 

            <div className="drink-card">
            <img src={props.drinkImg}/>         
            <h1>{props.drinkName}</h1>
            <hi>{props.ingredients}</hi>
         
        </div>
            
        
        </div>
    )
}