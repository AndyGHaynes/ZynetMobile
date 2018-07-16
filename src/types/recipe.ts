import { Moment }  from 'moment';

import { LoadingScreen } from './components';
import {
  Fermentable,
  Hop,
  Yeast,
} from './ingredients';
import { MashSchedule } from './mash';
import { Style } from './style';

export class Recipe {
  name: string;
  style?: Style;
  lastBrewed?: Moment;
  fermentables?: Fermentable[];
  hops?: Hop[];
  yeast?: Yeast[];
  mash?: MashSchedule;
}

export class RecipeCard extends LoadingScreen {
  recipe: Recipe;
  recipeId: string;
}
