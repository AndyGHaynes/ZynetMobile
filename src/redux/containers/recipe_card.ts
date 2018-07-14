import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe_card';
import actions from '../actions';

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
  };
};

const mapDispatchToProps = (dispatch) => ({
  randomizeRecipe: () => dispatch(actions.recipe.loadRandomRecipe()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);
