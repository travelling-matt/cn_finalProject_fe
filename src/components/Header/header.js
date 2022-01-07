import './Header.css';
import { HeaderButton } from '../HeaderButton/HeaderButton.js';

// This component is the Header at the top of the main page
// Contains a HeaderButton component for each of the Pages available on the website

export const Header = () =>{

    const aboutClicked = () => {
        console.log("About clicked");
    }

    const myBarClicked = () => {
        console.log("MyBar Clicked");
    }

    const searchClicked = () => {
        console.log("Search Clicked");
    }

    return(
        <header className="header">
            <div className="nav-bar">
                <HeaderButton buttonName="About" clickFunction={aboutClicked}/>
                <HeaderButton buttonName="MyBar" clickFunction={myBarClicked}/>
                <HeaderButton buttonName="Search" clickFunction={searchClicked}/>
            </div>
        </header>
    )
}