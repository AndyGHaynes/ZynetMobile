import _ from 'lodash';
import moment from 'moment';

import {
  Fermentable,
  Hop,
  Ingredient,
  Yeast,
} from '../types/ingredients';
import { Recipe } from '../types/recipe';
import { Gravity } from '../types/zymath';
import { BJCPCodes } from '../constants/bjcp';
import {
  HopAdditionType,
  HopFormType,
  IngredientType,
  LossType,
  MashMethod,
  SpargeMethod,
  StarterAdditionType,
} from '../constants/enums';
import SRMColors from '../constants/srm_color';
import Units from '../constants/units';
import { getIngredients } from '../db';

function randomByIncrement(min: number, max: number, increment: number) {
  return min + (increment * _.random(0, max / increment));
}

function randomByRangeIncrement(range: Range, increment: number) {
  return randomByIncrement(range.min, range.max, increment);
}

interface Range {
  min: number,
  max: number,
}

function parseRange(rawRange: string): Range {
  const values = _.map(
    (rawRange || '').split('-'),
    _.parseInt
  );
  const min = _.parseInt(_.get(values, 0, null));
  const max = _.parseInt(_.get(values, 1, min));
  return { min, max };
}

function parseRanges(ingredient: Ingredient) {
  const rangeProps = [
    'attenuation',
    'temperature',
    'tolerance',
  ];
  const ranges = _.reduce(Object.keys(ingredient), (rangeValues: Object, key: string) => {
    const rangeKey = _.find(rangeProps, (prop) => key.startsWith(prop));
    if (rangeKey) {
      rangeValues[rangeKey] = rangeValues[rangeKey] || [];
      let index;
      if (key.endsWith('High')) {
        index = 1;
      } else if (key.endsWith('Low')) {
        index = 0;
      }
      if (!_.isNil(index)) {
        rangeValues[rangeKey][index] = ingredient[key];
      }
    }
    return rangeValues;
  }, {});
  _.forOwn(ranges, (value, key) => ranges[key] = value.join(' - '));
  return {
    ..._.omit(ingredient, _.flatten(_.map(rangeProps, (prefix) => [`${prefix}High`, `${prefix}Low`]))),
    ...ranges,
  };
}

function filterIngredients(ingredients: Ingredient[], type: IngredientType): Ingredient[] {
  const index = {
    [IngredientType.Malt]: 1,
    [IngredientType.Hop]: 2,
    [IngredientType.Yeast]: 3,
  }[type];
  return _.map(_.filter(ingredients, { ingredientType: index }), parseRanges);
}

function randomizeIngredientType<T>(ingredients: Ingredient[], type: IngredientType): T[] {
  const high = {
    [IngredientType.Malt]: 8,
    [IngredientType.Hop]: 6,
    [IngredientType.Yeast]: 3,
  }[type];
  const count = _.random(1, high);
  const filtered = filterIngredients(ingredients, type);
  const indices = _.map(_.range(count), () => _.random(0, filtered.length - 1));
  return _.map(indices, (i) => _.omit(filtered[i], 'ingredientType'));
}

function randomizeFermentables(grains: Ingredient[]): Fermentable[] {
  return _.map(grains, (grain) => {
    const lovibond = _.parseInt(grain.lovibond) || 0;
    const srm = 1.4922 * Math.pow(lovibond, 0.6859);
    return {
      ...grain,
      weight: {
        value: randomByIncrement(0.25, 15, 0.25),
        unit: Units.Pound,
      },
      color: SRMColors[_.min([_.round(srm), 40])],
      gravity: grain.gravity ? new Gravity(grain.gravity) : null,
    };
  });
}

function randomizeHopAdditions(hops: Ingredient[]): Hop[] {
  const randomizeAcid = (rawRange: string) =>
    _.round(randomByRangeIncrement(parseRange(rawRange), 0.1), 1);
  return _.map(hops, (hop) => ({
    ...hop,
    alpha: randomizeAcid(hop.alphaRange),
    beta: randomizeAcid(hop.betaRange),
    form: HopFormType.Pellet,
    additions: _.orderBy(_.map(_.range(_.random(1, 3)), () => ({
      time: { value: _.random(0, 60), unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: {
        value: randomByIncrement(0.5, 5, 0.125),
        unit: Units.Ounce,
      },
      ibu: _.random(0, 80),
    })), 'time.value', ['desc']),
  }));
}

function randomizeYeasts(yeasts: Ingredient[]): Yeast[] {
  return _.map(yeasts, (yeast) => ({
    ...yeast,
    pitchTemp: { value: 68, unit: Units.Fahrenheit },
    quantity: _.random(1, 3),
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
      }],
    }],
  }));
}

export const randomizeRecipe = (): Promise<Recipe> => {
  return getIngredients()
    .then((ingredients) => {
      console.log('INGREDIENTS', ingredients);
      const orderIngredients = (ingredientSet, primarySort) =>
        _.orderBy(ingredientSet, [primarySort, 'name'], ['desc', 'asc']);
      const brewDate = moment().subtract(_.random(3, 432), 'days');
      const fermentables = randomizeIngredientType<Fermentable>(ingredients, IngredientType.Malt);
      const hops = randomizeIngredientType<Hop>(ingredients, IngredientType.Hop);
      const yeast = randomizeIngredientType<Yeast>(ingredients, IngredientType.Yeast);
      const style = BJCPCodes[_.random(0, BJCPCodes.length - 1)];
      return {
        name: 'Golden Brett Ale',
        style,
        lastBrewed: brewDate,
        fermentables: orderIngredients(
          randomizeFermentables(fermentables),
          'weight.value'
        ),
        hops: orderIngredients(
          randomizeHopAdditions(hops),
          (hop) => _.sumBy(hop.additions, 'weight.value')
        ),
        yeast: orderIngredients(
          randomizeYeasts(yeast),
          'quantity'
        ),
        mash: {
          schedule: {
            efficiency: 0.75,
            losses: [{
              type: LossType.Boil,
              rate: {
                antecedent: Units.Gallon,
                consequent: Units.Hour,
                value: 1,
              },
            }, {
              type: LossType.Grains,
              rate: {
                antecedent: Units.Gallon,
                consequent: Units.Pound,
                value: 0.1,
              },
            }],
            method: MashMethod.BIAB,
            rests: [{
              recirculated: true,
              temperature: { value: 104, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }, {
              recirculated: true,
              temperature: { value: 140, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }, {
              recirculated: true,
              temperature: { value: 158, unit: Units.Fahrenheit },
              time: { value: 30, unit: Units.Minute },
            }],
            sparge: SpargeMethod.None,
          },
        },
        targetVolume: {
          unit: Units.Gallon,
          value: 5,
        },
      };
    });
};
