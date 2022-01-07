import './DrinkTile.css'

// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export const DrinkTile = (props) =>{
    return(
        <div>
            <img src={props.drinkImg}/>
            <h3>{props.drinkName}</h3>
        </div>
    )
}