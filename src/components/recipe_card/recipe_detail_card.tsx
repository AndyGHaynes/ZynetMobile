import {
  Body,
  Card,
  CardItem,
} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Colors } from '../core';

const styles = StyleSheet.create({
  ingredientGroupLabel: {
    color: Colors.gray,
    fontVariant: ['small-caps'],
  },
});

const RecipeDetailCard = (props) => (
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

export default RecipeDetailCard;
