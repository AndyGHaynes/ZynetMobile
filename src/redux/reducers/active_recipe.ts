import _ from 'lodash';

import { Recipe } from '../../types/recipe';
import {
  HopAction,
  HopActionType,
} from '../actions/hops';
import {
  RecipeAction,
  RecipeActionType,
} from '../actions/recipe';
import hops from './hops';

type RootRecipeType =
  RecipeActionType
  | HopActionType;

export default (state: Recipe = null, action: RootRecipeType): Recipe => {
  switch (action.type) {
    case RecipeAction.EDIT_RECIPE:
      return _.cloneDeep(action.recipe);
    case HopAction.REMOVE:
      return _.assign({}, state, {
        hops: hops(state.hops, action),
      });
    default:
      return state;
  }
};
