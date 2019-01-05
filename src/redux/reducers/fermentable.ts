import { Fermentable } from '../../types/ingredients';
import {
  FermentableAction,
  FermentableActionType,
} from '../actions/fermentables';

export default (state: Fermentable = null, action: FermentableActionType): Fermentable => {
  switch (action.type) {
    case FermentableAction.SET_WEIGHT:
      return {
        ...state,
        weight: {
          ...state.weight,
          ...action.weight,
        },
      };
    default:
      return state;
  }
};
