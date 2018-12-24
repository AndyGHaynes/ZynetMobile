import _ from 'lodash';
import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe_card';
import { loadRecipe } from '../actions/recipe_card';

const mapStateToProps = (state) => {
  return {
    recipe: _.get(state, 'selectedRecipe.recipe', null),
  };
};

export default connect(
  mapStateToProps, {
    loadRecipe,
  }
)(RecipeCard);
