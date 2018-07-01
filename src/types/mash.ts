import {
  LossType,
  MashMethod,
  SpargeMethod,
} from '../constants/enums';
import {
  Measurement,
  Ratio,
} from './core';

export class Loss {
  type: LossType;
  value?: Measurement;
  rate?: Ratio;
}

export class Rest {
  time: Measurement;
  temperature: Measurement;
  recirculated?: boolean;
}

export class MashSchedule {
  efficiency: number;
  method: MashMethod;
  rests: Rest[];
  sparge: SpargeMethod;
  losses?: Loss[];
  mashout?: Rest;
}
