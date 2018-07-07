import React from 'react';

import { Hop } from '../../types/ingredients';
import IngredientDetail from './ingredient_detail';

export default (hop: Hop) => (
  <IngredientDetail
    category={hop.categories.replace(/,/g, ' | ')}
    excludedProperties={[
      'additions',
      'alpha',
      'aroma',
      'beta',
      'categories',
      'color',
      'description',
      'weight',
    ]}
    ingredient={hop}
    propertyMask={{
      'alphaRange': 'alpha',
      'betaRange': 'beta',
      'coHumulone': 'co-humulone',
      'totalOil': 'total oil',
    }}
    subDescription={hop.aroma}
  />
);
