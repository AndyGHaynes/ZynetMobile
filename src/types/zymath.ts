import _ from 'lodash';

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

export class Ratio {
  antecedent: Unit;
  consequent: Unit;
  value: number;
}
