import { Range } from './zymath';

export class StyleIdentifier {
  code: string;
  name: string;
}

export class Style extends StyleIdentifier {
  category: string;
  description?: string;
  commercialExamples?: string[];
  overallImpression?: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  comments: string;
  history: string;
  characteristicIngredients: string;
  styleComparison: string;
  OG: Range;
  IBUs: Range;
  FG: Range;
  SRM: Range;
  ABV: Range;
  tags: string[];
}
