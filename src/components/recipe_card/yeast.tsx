import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';

import { Yeast } from '../../types/ingredients';
import {
  Column,
  Row
} from '../core';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement';

export default (yeast: Yeast) => (
  <Column>
    <Row>
      <IngredientHeader name={yeast.name} mfg={`${yeast.mfg} ${yeast.code}`} />
      <View>
        <Measurement {...yeast.pitchTemp}/>
      </View>
    </Row>
    {_.map(yeast.starterSteps, (step, i) => (
      <View key={i} {...step} />
    ))}
  </Column>
);
