import _ from 'lodash';

import {
  HopAdditionType,
} from '../constants/enums';

export class Unit {
  unit: string;
  name: string;
  shortName: string;
  shorterName: string;
}

export class Measurement {
  value: number;
  unit: Unit;
}

export class Gravity {
  constructor(
    public value: number
  ) { }
  get points() {
    return _.round((1 - this.value) * 100);
  }
  toString() {
    return this.value === 1
      ? '1.000'
      : `${this.value}000`.substring(0, 5);
  }
}

export class HopAddition {
  type: HopAdditionType;
  time: Measurement;
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
  gravity: number;
  srm: number;
  weight: Measurement;
}

export class Yeast extends Ingredient {
  code: string;
  pitchRate?: number;
  pitchTemp?: Measurement;
  quantity: number;
  starterSteps?: StarterStep[];
}

export class StarterStep {
  time: Measurement;
  gravity?: number;
  growthRate?: number;
  stirPlate: boolean;
}
