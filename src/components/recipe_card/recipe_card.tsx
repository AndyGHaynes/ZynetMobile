import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Recipe } from '../../types/recipe';
import { Card, TouchableRow } from '../core';
import {
  FermentableDetailCard,
  HopDetailCard,
  YeastDetailCard,
} from '../ingredient_cards';
import { IngredientModal } from '../modal';
import styles from './.styles/recipe_card';
import Fermentable from './fermentable';
import Hop from './hop';
import RecipeDetailCard from './recipe_detail_card';
import Yeast from './yeast';

interface RecipeProps {
  loadRecipe: (id: string) => void;
  recipe: Recipe;
}

interface RecipeState {
  modalComponent?: JSX.Element;
  modalOpen: boolean;
  modalTitle: string,
}

export default class RecipeCard extends Component<RecipeProps, RecipeState> {
  constructor(props) {
    super(props);
    this.state = {
      modalComponent: null,
      modalOpen: false,
      modalTitle: null,
    };
  }

  componentDidMount() {
    this.props.loadRecipe('random');
  }

  setModalComponent = (title: string, component: JSX.Element): void => {
    this.setState({
      modalComponent: component,
      modalOpen: true,
      modalTitle: title,
    });
  };

  closeModal = () => {
    this.setState({
      modalComponent: null,
      modalOpen: false,
      modalTitle: null,
    });
  };

  render() {
    if (!this.props.recipe) {
      return null;
    }
    const {
      fermentables,
      hops,
      lastBrewed,
      name,
      style,
      yeast: yeasts,
    } = this.props.recipe;
    const {
      modalComponent,
      modalOpen,
      modalTitle,
    } = this.state;
    return (
      <View style={styles.content}>
        <ScrollView>
          <Card>
            <View>
              <Text style={styles.name}>
                {name}
              </Text>
            </View>
            <View>
              <Text>
                {style.name} {style.code}
              </Text>
            </View>
            <View>
              <Text>
                Last brewed {lastBrewed.fromNow()}
              </Text>
            </View>
          </Card>
          <RecipeDetailCard label='Fermentables'>
            {_.map(fermentables, (fermentable, i) => (
              <TouchableRow
                key={i}
                onPress={() =>
                  this.setModalComponent(
                    fermentable.name,
                    <FermentableDetailCard {...fermentable} />
                  )
                }
              >
                <Fermentable
                  fermentable={fermentable}
                  fraction={
                    fermentable.weight.value
                    / _.sum(_.map(fermentables, 'weight.value'))
                  }
                />
              </TouchableRow>
            ))}
          </RecipeDetailCard>
          <RecipeDetailCard label='Hops'>
            {_.map(hops, (hop, i) => (
              <TouchableRow
                key={i}
                onPress={() =>
                  this.setModalComponent(
                    hop.name,
                    <HopDetailCard {...hop} />
                  )
                }
              >
                <Hop {...hop} />
              </TouchableRow>
            ))}
          </RecipeDetailCard>
          <RecipeDetailCard label='Yeast'>
            {_.map(yeasts, (yeast, i) => (
              <TouchableRow
                key={i}
                onPress={() =>
                  this.setModalComponent(
                    yeast.name,
                    <YeastDetailCard {...yeast} />
                  )
                }
              >
                <Yeast {...yeast} />
              </TouchableRow>
            ))}
          </RecipeDetailCard>
        </ScrollView>
        <IngredientModal
          visible={modalOpen}
          close={this.closeModal}
          title={modalTitle}
        >
          {modalComponent}
        </IngredientModal>
      </View>
    );
  }
}