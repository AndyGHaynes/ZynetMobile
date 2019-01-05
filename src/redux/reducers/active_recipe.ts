import _ from 'lodash';

import { Recipe } from '../../types/recipe';
import { FermentableAction, FermentableActionType } from '../actions/fermentables';
import { HopAction, HopActionType } from '../actions/hops';
import { RecipeAction, RecipeActionType } from '../actions/recipe';
import fermentables from './fermentables';
import hops from './hops';

type RootRecipeType =
  RecipeActionType
  | FermentableActionType
  | HopActionType;

export default (state: Recipe = null, action: RootRecipeType): Recipe => {
  switch (action.type) {
    case RecipeAction.EDIT_RECIPE:
      return _.cloneDeep(action.recipe);
    case FermentableAction.SET_WEIGHT:
      return {
        ...state,
        fermentables: fermentables(state.fermentables, action),
      };
    case HopAction.REMOVE:
      return {
        ...state,
        hops: hops(state.hops, action),
      };
    default:
      return state;
  }
};
