import moment from 'moment';

import Units from './constants/units';
import {
  HopAdditionType,
  MashMethod,
  SpargeMethod,
  StarterAdditionType,
} from './constants/enums';
import { Gravity } from './types/zymath';

const brewDate = moment().subtract(15, 'days');

export default {
  name: 'Golden Brett Ale',
  style: { name: 'Brett Ale', code: '28A' },
  lastBrewed: brewDate,
  fermentables: [{
    name: '2-Row Pale Malt',
    gravity: new Gravity(1.037),
    mfg: 'Briess',
    weight: { value: 8, unit: Units.Pound },
    srm: 2.4,
    color: '#EA8F00',
  }, {
    name: 'White Wheat Malt',
    gravity: new Gravity(1.035),
    mfg: 'Simpson',
    weight: { value: 4, unit: Units.Pound },
    srm: 1.9,
    color: '#FFCA5A',
  }, {
    name: 'Honey Malt',
    gravity: new Gravity(1.034),
    mfg: 'Gambrinus',
    weight: { value: 0.58, unit: Units.Pound },
    srm: 6.8,
    color: '#F8A600',
  }],
  hops: [{
    name: 'Motueka',
    alpha: 6.4,
    beta: 4.1,
    mfg: 'YCH',
    flavors: ['lime', 'mint', 'floral'],
    additions: [{
      ibu: 24.3,
      time: { value: 60, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.3, unit: Units.Ounce },
    }, {
      ibu: 18.7,
      time: { value: 15, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.75, unit: Units.Ounce },
    }, {
      ibu: 24.3,
      time: { value: 10, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.25, unit: Units.Ounce },
    }, {
      ibu: 18.7,
      time: { value: 5, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.75, unit: Units.Ounce },
    }, {
      ibu: 3.1,
      type: HopAdditionType.Whirlpool,
      weight: { value: 1, unit: Units.Ounce },
    }, {
      time: { value: 3, unit: Units.Day },
      type: HopAdditionType.DryHop,
      weight: { value: 1, unit: Units.Ounce },
    }]
  }
  , {
    name: 'Cascade',
    alpha: 7.1,
    beta: 5.8,
    mfg: 'YCH',
    flavors: ['citrus', 'floral'],
    additions: [{
      ibu: 89.4,
      time: { value: 60, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 21.8, unit: Units.Gram },
    }, {
      ibu: 18.7,
      time: { value: 5, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.75, unit: Units.Ounce },
    }, {
      ibu: 3.1,
      type: HopAdditionType.Whirlpool,
      weight: { value: 1, unit: Units.Ounce },
    }, {
      time: { value: 3, unit: Units.Day },
      type: HopAdditionType.DryHop,
      weight: { value: 1, unit: Units.Ounce },
    }]
  }, {
    name: 'Citra',
    alpha: 13.6,
    beta: 7.9,
    mfg: 'YCH',
    flavors: ['citrus', 'floral'],
    additions: [{
      ibu: 113.4,
      time: { value: 60, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 21.82, unit: Units.Gram },
    }, {
      ibu: 18.7,
      time: { value: 5, unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: 1.75, unit: Units.Ounce },
    }, {
      time: { value: 3, unit: Units.Day },
      type: HopAdditionType.DryHop,
      weight: { value: 1, unit: Units.Ounce },
    }]
  }
  ],
  mash: {
    efficiency: 0.75,
    method: MashMethod.BIAB,
    sparge: SpargeMethod.None,
    rests: [{
      recirculated: true,
      temperature: { value: 152, unit: Units.Fahrenheit },
      time: { value: 60, unit: Units.Minute },
    }],
  },
  yeast: [{
    name: 'American Ale',
    code: '1056',
    mfg: 'Wyeast',
    pitchTemp: { value: 68, unit: Units.Fahrenheit },
    quantity: 1,
    targetCellCount: 117.4,
    starterSteps: [{
      volume: { value: 1, unit: Units.Liter },
      time: { value: 12, unit: Units.Hour },
      gravity: new Gravity(1.035),
      stirPlate: false,
      decanted: true,
      growthFactor: 1.3,
      additions: [{
        name: 'Light DME',
        type: StarterAdditionType.Fermentable,
        quantity: { value: 3, unit: Units.Ounce },
      } , {
        name: 'Wyeast Nutrient',
        type: StarterAdditionType.Nutrient,
        quantity: { value: 1, unit: Units.Gram },
      }],
    }]
  }],
};
