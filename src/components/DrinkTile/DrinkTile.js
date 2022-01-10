import './DrinkTile.css'

// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export const DrinkTile = (props) =>{
    return(
        <section className="card-container">
            <div className="img-container">
                <img src={props.drinkImg}/>
            </div>
            <section className="card-content">
                <div className="ingredient-name">
                    <h3>{props.drinkName}</h3>
                </div>
            </section>
        </section>
    )
}