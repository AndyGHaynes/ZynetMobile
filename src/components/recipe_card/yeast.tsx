import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';

import { Yeast as YeastType } from '../../types';
import {
  Column,
  Row
} from '../core';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement';

const Yeast = (yeast: YeastType) => (
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

export default Yeast;
