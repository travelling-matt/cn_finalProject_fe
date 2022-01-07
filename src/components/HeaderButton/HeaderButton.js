import './headerButton.css';

export const HeaderButton = (props) =>{


            return (
        <>
            <header className='nav-bar'>

            <span>Search Cocktails</span>
            <span>About</span>
            <span>My Bar</span>
            
            <section className='btn'>
                
            <div className='button'>
                <span className='loginButton'>Log in</span>
            </div>

            <div className='button'>
                <span className='loginButton'>Register</span>
            </div>

            </section>
            
               
            </header>
            <div className="buttonContainer" onClick={props.clickFunction}>
                    <h3 >{props.buttonName}</h3>
                </div>
          
               
               
        </>
        
          )
        }

    


