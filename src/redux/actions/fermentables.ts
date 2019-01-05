import { Fermentable } from '../../types/ingredients';
import { Measurement } from '../../types/zymath';

export enum FermentableAction {
  ADD = 'FERMENTABLE/ADD',
  REMOVE = 'FERMENTABLE/REMOVE',
  SET_GRAVITY = 'FERMENTABLE/SET_GRAVITY',
  SET_LOVIBOND = 'FERMENTABLE/SET_LOVIBOND',
  SET_WEIGHT = 'FERMENTABLE/SET_WEIGHT',
}

export type FermentableActionType = {
  type: FermentableAction;
  fermentable: Fermentable;
  weight?: Measurement;
};

export const setWeight = (fermentable: Fermentable, weight: Measurement): FermentableActionType => ({
  type: FermentableAction.SET_WEIGHT,
  fermentable,
  weight,
});
