import './AboutPage.css'

// Contains content specific to the About Page
// This would be a site description and perhaps usage instructions

export const AboutPage = () =>{
    return(
        <div>
            <h1>About Us</h1>
            <h3>Tend the Bar</h3>
            <p>Welcome to Tend the Bar where you can create your own amazing cocktails using ingredients you have at home.
            Using our free cocktail generator you will find easy recipes to create your very own fantastic cocktails. We have over 700 cocktail recipes! 
            You can also search for popular cocktails or latest cocktails.
            </p>
            <h3>How to use the cocktail generator</h3> 
            <ol>
            <li>In the search box, type in the ingredients you have. Your ingredients will be saved in 'My Bar'.</li>
            <li>You do not have to select an alcohol.</li>
            <li>Select the 'Make my cocktail' button to search your available cocktails. </li>
            <li>You can save your favourite cocktails to 'My favourites' by selecting 'Save to My Favourites'.</li>
            </ol>
            <p>Have fun!</p>
        </div>
    )
}