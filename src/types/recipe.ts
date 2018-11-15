import { Moment }  from 'moment';

import { LoadingScreen } from './components';
import {
  Fermentable,
  Hop,
  Yeast,
} from './ingredients';
import { Mash } from './mash';
import { Style } from './style';
import { Gravity, Measurement } from './zymath';

export class Recipe {
  targetFG?: Gravity;
  targetOG?: Gravity;
  targetVolume: Measurement;
  name: string;
  style?: Style;
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
