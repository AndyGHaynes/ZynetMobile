import {
  HopAdditionType,
  HopFormType,
  StarterAdditionType,
} from '../constants/enums';
import {
  Gravity,
  Measurement,
} from './zymath';

export class HopAddition {
  type: HopAdditionType;
  time?: Measurement;
  weight: Measurement;
  ibu?: number;
  utilization?: number;
}

export class IngredientProperty {
  displayOrder?: number;
  name: string;
  value: string;
}

export abstract class Ingredient {
  category?: string;
  categories?: string;
  characteristics?: string;
  description?: string;
  id?: string;
  mfg?: string;
  name: string;
  properties?: IngredientProperty[];
  url?: string;
}

export class Hop extends Ingredient {
  additions: HopAddition[];
  alpha?: number;
  beta?: number;
  flavors?: string[];
  form: HopFormType;
  aroma?: string;
}

export class Fermentable extends Ingredient {
  color: string;
  gravity?: Gravity;
  lovibond?: number;
  srm?: number;
  weight: Measurement;
}

export class Yeast extends Ingredient {
  code: string;
  pitchRate?: number;
  pitchTemp?: Measurement;
  quantity: number;
  starterSteps?: StarterStep[];
  targetCellCount: number;
  styles?: string;
}

export class StarterStep {
  time: Measurement;
  volume: Measurement;
  gravity?: Gravity;
  growthFactor?: number;
  stirPlate: boolean;
  decanted: boolean;
  additions: StarterAddition[];
}

export class StarterAddition {
  name: string;
  type: StarterAdditionType;
  quantity: Measurement;
}
