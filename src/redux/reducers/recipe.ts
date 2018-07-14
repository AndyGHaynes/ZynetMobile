import { Recipe } from '../../types/recipe';
import ActionTypes from '../actions/recipe/types';

export default (state: Recipe = null, action): Recipe => {
  switch (action.type) {
    case ActionTypes.RANDOMIZE_RECIPE:
      return {
        ...state,
        ...action.recipe,
      };
    default:
      return state;
  }
}
