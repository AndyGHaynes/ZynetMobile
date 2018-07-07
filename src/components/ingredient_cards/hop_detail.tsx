import React from 'react';

import { Hop } from '../../types/ingredients';
import IngredientDetail from './ingredient_detail';

export default (hop: Hop) => (
  <IngredientDetail
    category={hop.categories.replace(/,/g, ' | ')}
    excludedProperties={[
      'additions',
      'aroma',
      'categories',
      'color',
      'description',
      'weight',
    ]}
    ingredient={hop}
    propertyMask={{
      'coHumulone': 'co-humulone',
      'totalOil': 'total oil',
    }}
    subDescription={hop.aroma}
  />
);
