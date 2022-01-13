import './AboutPage.css'

// Contains content specific to the About Page
// This would be a site description and perhaps usage instructions

export const AboutPage = () =>{
    return(
        <div className="about-content" alt="about-us">
            <title>About Us</title>
            <h1 className="brand-name">Tend the Bar</h1>
            <br></br>
            <p>Welcome to Tend the Bar where you can create your own amazing cocktails using ingredients you have at home.
            Using our free cocktail generator you will find easy recipes to create your very own fantastic cocktails. We have over 700 cocktail recipes! 
            You can also search for popular cocktails or latest cocktails.
            </p>
            <br></br>
            <h1>How to use the cocktail generator</h1>
            
            <div className="instructions">
            <ul >
            <li>In the search box, type in the ingredients you have. Your ingredients will be saved in 'My Bar'.</li>
            <li>You do not have to select an alcohol.</li>
            <li>Select the 'Make my cocktail' button to search your available cocktails. </li>
            <li>You can save your favourite cocktails to 'My favourites' by selecting 'Save to My Favourites'.</li>
            </ul>
            </div>
            <p>Have fun!</p>
        </div>
    )
}