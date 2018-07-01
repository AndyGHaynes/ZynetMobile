import { Moment }  from 'moment';

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
