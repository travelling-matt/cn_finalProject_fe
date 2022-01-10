
import './DrinkTile.css'

// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export const DrinkTile = (props) =>{
    return(
        
     
        <section className="card-container">
           <div className="img-container">
            <img src={props.drinkImg} alt="drink-image"/>
            <h1 className='drink-name'>{props.drinkName}</h1>
            </div>
             
            

        </section>
    
    )

}
