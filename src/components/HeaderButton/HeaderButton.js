import './HeaderButton.css';

export const HeaderButton = (props) =>{
    return (
        <div className="buttonContainer" onClick={props.clickFunction}>
            <h3 className="button-title">{props.buttonName}</h3>
        </div>
    )
}