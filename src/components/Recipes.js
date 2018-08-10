import React from 'react';
import {
  Card,
  Icon,
  Image,
  Grid,
} from 'semantic-ui-react';

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
                    <span className='date'>{ recipe.publisher }</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='star' />
                    { recipe.social_rank }
                  </a>
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