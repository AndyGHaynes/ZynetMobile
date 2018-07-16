import _ from 'lodash';
import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe_card';
import actions from '../actions';

const mapStateToProps = (state) => {
  return {
    recipe: _.get(state.recipeCard, 'recipe', null),
    recipeCard: state.recipeCard,
  };
};

const mapDispatchToProps = (dispatch) => ({
  lookupRecipe: (id: string) => dispatch(actions.lookupRecipe(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);
