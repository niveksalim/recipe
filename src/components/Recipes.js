import React from 'react';
import {
  Card,
  Icon,
  Image,
  Grid,
  Button,
} from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Recipes = (props) => {
  return (
    <div className="ui container">
      <Grid columns={3}>
        <Grid.Row>
        { props.recipes.map((recipe) => {
          return (
            <Grid.Column key={ recipe.recipe_id }>
              <Card className="recipes__box" style={{ marginBottom:"2rem" }}>
                <Image src={ recipe.image_url } alt={ recipe.title } className="recipes__image" />
                <Card.Content>
                  <Card.Header>{ recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }</Card.Header>
                  <Card.Meta>
                    <span className='date'>Publisher: { recipe.publisher }</span>
                    <br />
                    <Button icon>
                      <Icon name='star' />
                      { recipe.social_rank }
                    </Button>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui buttons'>
                    <Button basic color='green'>
                      <Link to={{ 
                        pathname: `/recipe/${recipe.recipe_id}`,
                      }}>View Recipe</Link>
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        }) }
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Recipes;