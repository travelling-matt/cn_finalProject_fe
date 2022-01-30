import './Header.css';
import { HeaderButton } from '../HeaderButton/HeaderButton.js';

// This component is the Header at the top of the main page
// Contains a HeaderButton component for each of the Pages available on the website

export const Header = (props) =>{
    return(
        <header className="header">
            <div className="nav-bar">
            <HeaderButton buttonName="About" clickFunction={props.aboutClicked}/>
                <HeaderButton buttonName="MyBar" clickFunction={props.myBarClicked}/>
                <HeaderButton buttonName="MyCocktails" clickFunction={props.searchClicked}/>
                <HeaderButton buttonName="Search"clickFunction={props.searchIngredClicked}/>
                <HeaderButton buttonName="Browse" clickFunction={props.browseClicked}/>
                <div>
                    {props.user ? 
                    <div className='button' onClick={props.logOutClicked}>
                        <h3 className='nav-email'>{props.user}</h3>
                        <span className='loginButton'>Log Out</span>
                        
                    </div> :
                    
                    <div>
                         
                        <div className='button' onClick={props.signInClicked}>
                        <span className='loginButton'>Log in</span>
                        </div>
                        <div className='button' onClick={props.registerClicked}>
                        <span className='loginButton'>Register</span>

                        
                        </div>
                    </div>
                    }
                   
                </div>
            </div>
        </header>
    )
}