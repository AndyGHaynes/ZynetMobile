import _ from 'lodash';

import { Fermentable } from '../../types/ingredients';
import { FermentableAction, FermentableActionType } from '../actions/fermentables';
import fermentable from './fermentable';

export default (state: Fermentable[] = [], action: FermentableActionType): Fermentable[] => {
  switch (action.type) {
    case FermentableAction.SET_WEIGHT:
      return _.map(
        state,
        (f) => action.fermentable.id === f.id ? fermentable(f, action) : f,
      );
    default:
      return state;
  }
};
