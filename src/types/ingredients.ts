import {
  HopAdditionType,
  StarterAdditionType,
} from '../constants/enums';
import {
  Gravity,
  Measurement,
} from './core';

export class HopAddition {
  type: HopAdditionType;
  time?: Measurement;
  weight: Measurement;
  ibu?: number;
  utilization?: number;
}

abstract class Ingredient {
  name: string;
  mfg?: string;
  sourceUrl?: string;
}

export class Hop extends Ingredient {
  additions: HopAddition[];
  alpha?: number;
  beta?: number;
  flavors?: string[];
}

export class Fermentable extends Ingredient {
  color: string;
  gravity: Gravity;
  srm: number;
  weight: Measurement;
}

export class Yeast extends Ingredient {
  code: string;
  pitchRate?: number;
  pitchTemp?: Measurement;
  quantity: number;
  starterSteps?: StarterStep[];
  targetCellCount: number;
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
