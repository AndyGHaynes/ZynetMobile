import _ from 'lodash';
import React from 'react';

import { Measurement } from '../../types/zymath';
import { Quantity } from '../core';
import styles from './.styles/measurement';

export default ({ unit, value }: Measurement) => (
  <Quantity
    {...{ unit: unit.shortName, value: _.round(value, 2) }}
    unitStyle={styles.unit}
    valueStyle={styles.value}
  />
);
