import _ from 'lodash';
import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe_card';
import CardActions from '../actions/recipe_card/types';

const mapStateToProps = (state) => {
  return {
    recipe: _.get(state.recipeCard, 'recipe', null),
    recipeCard: state.recipeCard,
  };
};

const mapDispatchToProps = (dispatch) => ({
  lookupRecipe: (recipeId: string) => dispatch({
    type: CardActions.RECIPE_LOADING,
    recipeId,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);
