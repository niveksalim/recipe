import React, { Component } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Form from './components/Form';

const API_KEY = 'xxx';
const API_URL = 'http://food2fork.com/api';

class App extends Component {

  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://secret-ocean-49799.herokuapp.com/${API_URL}/search?key=${API_KEY}&q=${recipeName}&count=10`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  }

  render() {
    return (
      <div className="App ui container">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
