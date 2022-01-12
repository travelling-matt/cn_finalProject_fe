import './AboutPage.css'

// Contains content specific to the About Page
// This would be a site description and perhaps usage instructions

export const AboutPage = () =>{
    return(
        <div className="content" alt="about-us">
            <title>About Us</title>
            <h1>Tend the Bar</h1>
            <br></br>
            <p>Welcome to Tend the Bar where you can create your own amazing cocktails using ingredients you have at home.
            Using our free cocktail generator you will find easy recipes to create your very own fantastic cocktails. We have over 700 cocktail recipes! 
            You can also search for popular cocktails or latest cocktails in the Browse page.
            </p>
            <br></br>
            <h1>How to use the cocktail generator</h1>
            
            <div className="instructions">
            <ul >
            <li>Create an account and go to My Bar.</li>
            <li>In the drop-down menu, select the ingredients you have. Your ingredients will appear be saved in 'My Bar'.</li>
           
            <li>Go to Search and click on 'Find Cocktails Using MyBar'. We will search for and display all the cocktails you can make with your ingredients. </li>
            
            </ul>
            </div>
            <p>Have fun!</p>
        </div>
    )
}