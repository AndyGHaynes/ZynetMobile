import _ from 'lodash';

import { Recipe } from '../../types/recipe';
import { ActionTypes } from '../actions/recipe_card';

export default (state: Recipe = null, action): Recipe => {
  switch (action.type) {
    case ActionTypes.RECIPE_LOADED:
      return _.assign({}, action.recipe);
    default:
      return state;
  }
}
