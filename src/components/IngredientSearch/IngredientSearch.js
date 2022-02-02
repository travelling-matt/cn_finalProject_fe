import './IngredientSearch.css'

import { invertedIngredientsFetch, userIngredientsFetch } from '../../utils/index.js';
import { IngredientListItem } from '../IngredientListItem/IngredientListItem.js';

import React, { Component } from 'react';

// This component should contain a text box for the user to search for ingredients in the list
// And a list of each ingredient from the resulting search

export class IngredientSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            completeIngredientsList: [],
            filteredIngredientsList: [],
            filterText: ""
        }
    }

    getIngredientsList = async () => {
        // Fetch ingredients from the SQL database
        // Store in a variable for further use
        let userIngList = await userIngredientsFetch(this.props.user);
        let ingredients = [];
        if(userIngList.length !== 0) 
            ingredients = await invertedIngredientsFetch(userIngList);
        else
            ingredients = await invertedIngredientsFetch('');
        this.setState({completeIngredientsList: [...ingredients]});
        this.filterIngredientsList(this.state.filterText);
    }

    filterIngredientsList = async (filterText) => {
        // When the user starts typing in the search box
        // filter the array of ingredients to only contain
        // anything that matches the search parameters

        //console.log(this.state.completeIngredientsList);

        await this.setState({filterText: filterText});
        console.log(this.state.filterText);

        let result = this.state.completeIngredientsList.filter(function(item) {
            return typeof item.name == 'string' && item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        });

        //this.hideUserIngredients(result);
        this.setState({filteredIngredientsList: result});
    }

    initializePage = () => {
        if(this.state.completeIngredientsList.length === 0) {
            this.getIngredientsList();
        }
    }

    componentDidMount() {
        this.initializePage();
    }

    render() {
        return(
            <div className="search-container">
            
                <input className="ingredient-input" placeholder='Search' onChange={(e) => this.filterIngredientsList(e.target.value)}/>
                <div className="ingredient-search-container">
                    {this.state.filteredIngredientsList.map((item, index) => {
                        return <IngredientListItem key={index} ingredientName={item.name} changeIngredients={this.props.changeIngredients} getIngredientsList={this.getIngredientsList}/>
                    })}
                </div>
            </div>
        )
    }
}