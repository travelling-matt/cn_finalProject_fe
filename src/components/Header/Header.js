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
                <HeaderButton buttonName="Search" clickFunction={props.searchClicked}/>
                <HeaderButton buttonName="Browse" clickFunction={props.browseClicked}/>
                <div>
                    <div className='button' onClick={props.signInClicked}>
                        <span className='loginButton'>Sign In</span>
                    </div>
                    <div className='button' onClick={props.registerClicked}>
                        <span className='loginButton'>Sign Up</span>
                    </div>
                </div>
            </div>
        </header>
    )
}