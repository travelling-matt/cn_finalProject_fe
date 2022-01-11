import './DrinkTile.css';
import React, { Component } from 'react';
// This component should contain an image and drink name
// These would be passed down from the DrinkSearchPage for each drink in the search results

export class DrinkTile extends Component {
    constructor(props) {
        super(props);
        this.expanderContent = React.createRef();
        this.cardContainer = React.createRef();
    }

    componentDidMount() {
        const cardContainer = this.cardContainer.current;
        const expanderContent = this.expanderContent.current;
    
        function delay (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    
        cardContainer.addEventListener("click", async function () {
            if(expanderContent.style.display === "block") {
                expanderContent.style.animation = "shrinkContent 2s ease 1";
    
                await delay(1900);
    
                expanderContent.style.display = "none";
    
            } else {
                expanderContent.style.animation = "expandContent 2s ease 1";
                expanderContent.style.display = "block";
            }
        });
    }

    render() {
    return  <div>
                <section ref={this.cardContainer} id="card-container" className="card-container">
                    <div className="img-container">
                        <img src={this.props.drinkImg} alt="drink-image"/>
                        <h1 className='drink-name'>{this.props.drinkName}</h1>
                    </div>
                </section>
                <div ref={this.expanderContent} id="expanding-box" className="expanding-box">
                    <h2>Drink Title</h2>
                    <p>This is where the instructions for the cocktail go</p>
                    <p>Some other stuff probably goes here</p>
                </div>
            </div>
    }
}