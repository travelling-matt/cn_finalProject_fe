import './HeaderButton.css'

// This component should contain the title of the page for use in the Header component
// Requires an OnClick event to be returned to the main page so the content can be swapped out appropriately

export const HeaderButton = (props) =>{
    return(
        <div className="buttonContainer" onClick={props.clickFunction}>
            <h3 >{props.buttonName}</h3>
        </div>
    )
}