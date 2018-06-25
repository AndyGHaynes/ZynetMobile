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
  lastBrewed?: Date;
  fermentables?: Fermentable[];
  hops?: Hop[];
  yeast?: Yeast[];
  mash?: MashSchedule;
}
