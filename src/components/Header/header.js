import './header.css'

// This component is the Header at the top of the main page
// Contains a HeaderButton component for each of the Pages available on the website

export const Headers = () =>{
    return(
        <header className="header">
            <div className="nav-bar">
                <span>Search Cocktails</span>
                <span>About</span>
                <span>My Bar</span>
            </div>
        </header>
    )
}