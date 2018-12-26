import _ from 'lodash';

import { Recipe } from '../../types/recipe';
import { RecipeCardAction } from '../actions/recipe_card';

type RecipeAction = {
  recipe?: Recipe;
  type: RecipeCardAction;
};

export default (state: Recipe = null, action: RecipeAction): Recipe => {
  switch (action.type) {
    case RecipeCardAction.EDIT_RECIPE:
      return _.cloneDeep(action.recipe);
    default:
      return state;
  }
};
