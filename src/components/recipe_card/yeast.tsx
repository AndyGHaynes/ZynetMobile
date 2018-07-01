import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Yeast } from '../../types/ingredients';
import {
  Column,
  Row
} from '../core';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement';

const styles = StyleSheet.create({
  detailCell: {
    flex: 1,
  },
  headerCell: {
    flex: 3,
  },
});

export default (yeast: Yeast) => (
  <Column>
    <Row>
      <View style={styles.headerCell}>
        <IngredientHeader
          name={yeast.name}
          mfg={`${yeast.mfg} ${yeast.code}`}
        />
      </View>
      <View style={styles.detailCell}>
        <Measurement {...yeast.pitchTemp}/>
      </View>
    </Row>
    {_.map(yeast.starterSteps, (step, i) => (
      <View key={i} {...step} />
    ))}
    </Column>
);
