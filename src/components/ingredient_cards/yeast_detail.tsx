import React from 'react';

import { Yeast } from '../../types/ingredients';
import IngredientDetail from './ingredient_detail';

export default (yeast: Yeast) => (
  <IngredientDetail
    category={yeast.category}
    excludedProperties={[
      'code',
      'quantity',
      'pitchTemp',
      'starterSteps',
      'targetCellCount',
    ]}
    ingredient={yeast}
    linkText={`${yeast.mfg} ${yeast.code}`}
    subDescription={yeast.styles}
  />
);
