import _ from 'lodash';

import { Hop } from '../../types/ingredients';
import { Recipe } from '../../types/recipe';
import { HopAction } from '../actions/hops';
import { RecipeCardAction } from '../actions/recipe_card';

type RecipeAction = {
  hop?: Hop;
  recipe?: Recipe;
  type: HopAction | RecipeCardAction;
};

export default (state: Recipe = null, action: RecipeAction): Recipe => {
  switch (action.type) {
    case RecipeCardAction.EDIT_RECIPE:
      return _.cloneDeep(action.recipe);
    case HopAction.REMOVE:
      return _.assign({}, state, {
        hops: _.filter(
          state.hops,
          (hop) => hop.id !== action.hop.id
        ),
      });
    default:
      return state;
  }
};
