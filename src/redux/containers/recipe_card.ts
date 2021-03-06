import _ from 'lodash';
import { connect } from 'react-redux';

import { RecipeCard } from '../../components/recipe_card';
import {
  editRecipe,
  loadRecipe,
} from '../actions/recipe';

const mapStateToProps = (state) => {
  return {
    recipe: _.get(state, 'selectedRecipe.recipe', null),
  };
};

export default connect(
  mapStateToProps, {
    editRecipe,
    loadRecipe,
  }
)(RecipeCard);
