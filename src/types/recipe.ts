import { Moment }  from 'moment';

import { LoadingScreen } from './components';
import {
  Fermentable,
  Hop,
  Yeast,
} from './ingredients';
import { Mash } from './mash';
import { StyleIdentifier } from './style';
import { Gravity, Measurement } from './zymath';

export class Recipe {
  targetFG?: Gravity;
  targetOG?: Gravity;
  targetVolume: Measurement;
  name: string;
  style?: StyleIdentifier;
  lastBrewed?: Moment;
  fermentables?: Fermentable[];
  hops?: Hop[];
  yeast?: Yeast[];
  mash?: Mash;
}

export class RecipeCard extends LoadingScreen {
  recipe: Recipe;
  recipeId: string;
}
