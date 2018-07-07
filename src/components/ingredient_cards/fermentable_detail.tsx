import React from 'react';

import { Fermentable } from '../../types/ingredients';
import IngredientDetail from './ingredient_detail';

export default (fermentable: Fermentable) => (
  <IngredientDetail
    category={fermentable.category}
    excludedProperties={[
      'characteristics',
      'color',
      'description',
      'gravity',
      'isExtract',
      'weight',
    ]}
    ingredient={fermentable}
    subDescription={fermentable.characteristics}
  />
);
