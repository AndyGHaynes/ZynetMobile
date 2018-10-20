import {
  Body,
  Card,
  CardItem,
} from 'native-base';
import React from 'react';
import {
  Text,
} from 'react-native';

import styles from './.styles/recipe_detail_card';

export default (props) => (
  <Card>
    <CardItem>
      <Body>
        <Text style={styles.ingredientGroupLabel}>
          {props.label}
        </Text>
        {props.children}
      </Body>
    </CardItem>
  </Card>
);
