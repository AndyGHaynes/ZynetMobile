import _ from 'lodash';
import {
  Input,
  Item,
} from 'native-base';
import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { Fermentable } from '../../../../types/ingredients';
import { TouchableRow } from '../../../core';
import FermentableComponent from '../../../recipe_card/fermentable';
import FermentablesChart from './chart';

const chartHeight = 170;
const { height } = Dimensions.get('window');
const scrollHeight = height - (210 + chartHeight);

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 8,
  },
  chartContainer: {
    height: chartHeight,
    marginVertical: 10,
  },
  fermentablesContainer: {
    height: scrollHeight,
    paddingTop: 12,
    position: 'relative',
  },
});

interface FermentableProps {
  fermentables: Fermentable[];
}

interface FermentableState {
  selectedFermentable: Fermentable;
}

export default class FermentablesTab extends Component<FermentableProps, FermentableState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedFermentable: null,
    };
  }

  selectSegment = (fermentable: Fermentable) => {
    console.log(`selecting ${fermentable.name}`)
    this.setState({
      selectedFermentable: fermentable,
    });
  };

  render() {
    const {
      fermentables,
    } = this.props;
    return (
      <View style={styles.tabContainer}>
        <Item>
          <Input placeholder='Search Fermentables' />
        </Item>
        <View style={styles.chartContainer}>
          <FermentablesChart
            chartHeight={chartHeight}
            fermentables={fermentables}
            selectSegment={this.selectSegment}
          />
        </View>
        <ScrollView style={styles.fermentablesContainer}>
          {_.map(fermentables, (fermentable) => (
            <TouchableRow
              key={fermentable.name}
              onPress={() => {}}
            >
              <FermentableComponent
                fermentable={fermentable}
                fraction={_.round(fermentable.weight.value / _.sumBy(fermentables, (f) => f.weight.value), 2)}
              />
            </TouchableRow>
          ))}
        </ScrollView>
      </View>
    );
  }
}
