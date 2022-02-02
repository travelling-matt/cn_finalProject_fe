import './AboutPage.css'

// Contains content specific to the About Page
// This would be a site description and perhaps usage instructions

export const AboutPage = () =>{
    return(
        <div className="about-content-parent">
            <div className="about-content" alt="about-us">
                <title>About Us</title>
                <h1 className="about-title">Tend the Bar</h1>
                <br></br>
                <p className="about-text">Welcome to Tend the Bar where you can create your own amazing cocktails using ingredients you have at home.
                    Using our free cocktail generator you will find easy recipes to create your very own fantastic cocktails. We have over 600 cocktail recipes! 
                    You can also search for popular cocktails or latest cocktails in the Browse page.
                </p>
                <br></br>
                <h1 className="about-subtitle">How to use the cocktail generator</h1>
            
                <div className="about-text">
                    <ul>
                        <li className="about-list-item">Create an account and go to MyBar.</li>
                        <li className="about-list-item">In the drop-down menu, select the ingredients you have. Your ingredients will appear and be saved in 'MyBar'.</li>
                        <li className="about-list-item">Go to MyCocktails and we will find and display all the cocktails you can make with your ingredients. </li>
                    </ul>
                </div>
            <p>Have fun!</p>
        </div>
        </div>
    )
}