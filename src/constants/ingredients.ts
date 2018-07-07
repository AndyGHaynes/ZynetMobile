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
import {
  HopAdditionType,
  IngredientType,
  MashMethod,
  SpargeMethod,
  StarterAdditionType,
} from './enums';
import SRMColors from './srm_color';
import Units from './units';
import raw from './raw_ingredients';

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

function filterIngredients<T>(type: IngredientType) {
  const index = {
    [IngredientType.Malt]: 1,
    [IngredientType.Hop]: 2,
    [IngredientType.Yeast]: 3,
  }[type];
  return _.map(_.filter(raw, { ingredientType: index }), parseRanges);
}

function randomizeIngredientType<T>(type: IngredientType): T[] {
  const ingredients = {
    [IngredientType.Malt]: () => filterIngredients(IngredientType.Malt),
    [IngredientType.Hop]: () => filterIngredients(IngredientType.Hop),
    [IngredientType.Yeast]: () => filterIngredients(IngredientType.Yeast),
  }[type]();
  const count = _.random(1, 4);
  const indices = _.map(_.range(count), () => _.random(0, ingredients.length - 1));
  return _.map(indices, (i) => _.omit(ingredients[i], 'ingredientType'));
}

function getFermentables(): Fermentable[] {
  const grains = randomizeIngredientType<Fermentable>(IngredientType.Malt);
  return _.map(grains, (grain) => {
    const lovibond = _.parseInt(grain.lovibond) || 0;
    const srm = 1.4922 * Math.pow(lovibond, 0.6859);
    return {
      ...grain,
      weight: { value: _.round(_.random(0.25, 12), 2), unit: Units.Pound },
      color: SRMColors[_.min([_.round(srm), 40])],
      gravity: grain.gravity ? new Gravity(grain.gravity) : null,
    };
  });
}

function randomWithinRange(rawRange: string): number {
  const range = _.map(
    (rawRange || '').split('-'),
    _.parseInt
  );
  if (range.length) {
    return _.random(...range, true);
  }
  return null;
}

function getHopAdditions(): Hop[] {
  const randomHops = randomizeIngredientType<Hop>(IngredientType.Hop);
  return _.map(randomHops, (hop) => ({
    ...hop,
    alpha: randomWithinRange(hop.alphaRange),
    beta: randomWithinRange(hop.betaRange),
    additions: _.map(_.range(_.random(1, 3)), () => ({
      time: { value: _.random(0, 60), unit: Units.Minute },
      type: HopAdditionType.Boil,
      weight: { value: _.round(_.random(0.5, 5), 2), unit: Units.Ounce },
      ibu: _.random(0, 80),
    })),
  }));
}

function getYeasts(): Yeast[] {
  const yeasts = randomizeIngredientType<Yeast>(IngredientType.Yeast);
  return _.map(yeasts, (yeast) => ({
    ...yeast,
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
      }],
    }],
  }));
}

export const randomizeRecipe = (): Recipe => {
  const brewDate = moment().subtract(_.random(3, 432), 'days');
  return {
    name: 'Golden Brett Ale',
    style: { name: 'Brett Ale', code: '28A' },
    lastBrewed: brewDate,
    fermentables: getFermentables(),
    hops: getHopAdditions(),
    yeast: getYeasts(),
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
  }
};
