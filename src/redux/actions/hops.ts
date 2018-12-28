import { Hop } from '../../types/ingredients';

export enum HopAction {
  ADD = 'HOPS/ADD',
  ADD_ADDITION = 'HOPS/ADD_ADDITION',
  REMOVE = 'HOPS/REMOVE',
  REMOVE_ADDITION = 'HOPS/REMOVE_ADDITION',
  SET_ADDITION_QUANTITY = 'HOPS/SET_ADDITION_QUANTITY',
  SET_ADDITION_TIME = 'HOPS/SET_ADDITION_TIME',
  SET_ADDITION_WEIGHT = 'HOPS/SET_ADDITION_WEIGHT',
  SET_ALPHA = 'HOPS/SET_ALPHA',
  SET_BETA = 'HOPS/SET_BETA',
}

export type HopActionType = {
  type: HopAction;
  hop: Hop;
};

export const removeHop = (hop: Hop): HopActionType => ({
  type: HopAction.REMOVE,
  hop,
});
