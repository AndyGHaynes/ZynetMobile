import _ from 'lodash';
import {
  Body,
  Card,
  CardItem,
  Content,
} from 'native-base';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import { Recipe } from '../../types/recipe';
import Fermentable from './fermentable';
import Hop from './hop';
import RecipeDetailCard from './recipe_detail_card';
import Yeast from './yeast';

const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
  }
});

export default ({ recipe }: { recipe: Recipe }) => (
  <Content style={styles.content}>
    <ScrollView>
    <Card>
      <CardItem>
        <Body>
        <Text style={styles.name}>
          {recipe.name}
        </Text>
        <Text>
          {recipe.style.name} {recipe.style.code}
        </Text>
        <Text>
          Last brewed {recipe.lastBrewed.fromNow()}
        </Text>
        </Body>
      </CardItem>
    </Card>
    <RecipeDetailCard label='Fermentables'>
      {_.map(recipe.fermentables, (fermentable, i) => (
        <Fermentable
          key={i}
          fermentable={fermentable}
          fraction={
            fermentable.weight.value
            / _.sum(_.map(recipe.fermentables, 'weight.value'))
          }
        />
      ))}
    </RecipeDetailCard>
    <RecipeDetailCard label='Hops'>
      {_.map(recipe.hops, (hop, i) => (
        <Hop
          key={i}
          {...hop}
        />
      ))}
    </RecipeDetailCard>
    <RecipeDetailCard label='Yeast'>
      {_.map(recipe.yeast, (yeast, i) => (
        <Yeast
          key={i}
          {...yeast}
        />
      ))}
    </RecipeDetailCard>
    </ScrollView>
  </Content>
);
