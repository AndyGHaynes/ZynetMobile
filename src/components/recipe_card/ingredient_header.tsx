import React from 'react';
import {
  Text,
} from 'react-native';

import { Row } from '../core'
import IngredientDetail from './ingredient_detail';
import styles from './.styles/ingredient_header';

interface HeaderProps {
  name: string;
  mfg: string;
  children?: JSX.Element;
}

export default ({ name, mfg, children }: HeaderProps) => (
  <IngredientDetail>
    <Text style={styles.name}>
      {name}
    </Text>
    <Row>
      <Text style={styles.mfg}>
        {mfg}
      </Text>
      {children}
    </Row>
  </IngredientDetail>
);
