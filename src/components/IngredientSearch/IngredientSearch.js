import './IngredientSearch.css'

import { invertedIngredientsFetch } from '../../utils/index.js';
import { IngredientListItem } from '../IngredientListItem/IngredientListItem.js';

import React, { Component } from 'react';

// This component should contain a text box for the user to search for ingredients in the list
// And a list of each ingredient from the resulting search

export class IngredientSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            completeIngredientsList: [],
            invertedUserIngredientsList: [],
            filteredIngredientsList: []
        }
    }

    getIngredientsList = async () => {
        // Fetch all ingredients from the SQL database
        // Store in a variable for further use

        // The fetch may require an empty array to function properly
        let ingredients = await invertedIngredientsFetch(['']);

        this.setState({completeIngredientsList: ingredients});
        this.setState({filteredIngredientsList: this.state.completeIngredientsList});
    }

    filterIngredientsList = (filterText) => {
        // When the user starts typing in the search box
        // filter the array of ingredients to only contain
        // anything that matches the search parameters

        console.log(`Filtering with parameter ${filterText}`);

        let result = this.state.completeIngredientsList.filter(function(item) {
            return typeof item.name == 'string' && item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        });

        //this.hideUserIngredients(result);
        this.setState({filteredIngredientsList: result});
    }

    hideUserIngredients = () => {
        // Make this work properly

        let result = this.state.filteredIngredientsList;
        this.props.ingredientList.forEach((item) => {
            const index = result.indexOf(item);
            console.log(item);
            if(index > -1)
                result = result.splice(index, 1);
        })
        this.setState({filteredIngredientsList: result});
    }

    initializePage = () => {
        if(this.state.completeIngredientsList.length == 0) {
            this.getIngredientsList();
        }
    }

    componentDidMount() {
        this.initializePage();
    }

    render() {
        return(
            <div className="search-container">
            <input className="ingredient-input" onChange={(e) => this.filterIngredientsList(e.target.value)}></input>
                <div className="ingredient-search-container">
                    {this.state.filteredIngredientsList.map((item, index) => {
                        return <IngredientListItem key={index} ingredientName={item.name} changeIngredients={this.props.changeIngredients}/>
                    })}
                </div>
            </div>
        )
    }
}