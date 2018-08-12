import React, { Component } from 'react';

import { Button, Item } from 'semantic-ui-react'

const API_KEY = 'xxx';
const API_URL = 'http://food2fork.com';

class Recipe extends Component {

  state = {
    recipe: {},
  };

  async componentDidMount () {
    const recipeId = this.props.match.params.id;
    const api_call = await fetch(`https://secret-ocean-49799.herokuapp.com/${API_URL}/api/get?key=${API_KEY}&rId=${recipeId}`);
    
    const data = await api_call.json();
    if (data && data.recipe) {
      this.setState({ recipe: data.recipe });
    }
  }

  render() {
    return (
      <div className="App ui container">
        <Item.Group relaxed>
          <Item>
            <Item.Image src={ this.state.recipe.image_url } />

            <Item.Content verticalAlign='middle'>
              <Item.Header>{ this.state.recipe.title }</Item.Header>
              <Item.Description>
                Publisher: { this.state.recipe.publisher }
                <br />
                Ingredients: { this.state.recipe.ingredients }
              </Item.Description>
              <Item.Extra>
                <Button floated='right'>Back</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default Recipe;
