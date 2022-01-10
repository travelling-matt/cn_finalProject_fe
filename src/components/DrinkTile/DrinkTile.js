
import './DrinkTile.css'

// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export const DrinkTile = (props) =>{
    return(
        
     
        <section className="card-container">
           <div className="img-container">
            <img src={props.drinkImg} alt="drink-image"/>
            </div>
             
            <section className="card-content">
            <div className="drink-name">     
            <h1>{props.drinkName}</h1>
            </div>
            
            </section>

        </section>
    
    )

}
