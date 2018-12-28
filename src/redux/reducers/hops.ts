import _ from 'lodash';

import { Hop } from '../../types/ingredients';
import {
  HopAction,
  HopActionType,
} from '../actions/hops';

export default (state: Hop[] = [], action: HopActionType): Hop[] => {
  switch (action.type) {
    case HopAction.REMOVE:
      return _.filter(state, (hop) => hop.id !== action.hop.id);
    default:
      return state;
  }
};
