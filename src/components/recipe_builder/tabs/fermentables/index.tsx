import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import { Fermentable } from '../../../../types/ingredients';
import { TouchableRow } from '../../../core';
import FermentableComponent from '../../../recipe_card/fermentable';
import styles, { CHART_HEIGHT } from './.styles/fermentables';
import FermentablesChart from './chart';

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
    const { fermentables } = this.props;
    const totalWeight = _.sumBy(fermentables, (f) => f.weight.value);
    return (
      <View style={styles.tabContainer}>
        <View style={styles.chartContainer}>
          <FermentablesChart
            chartHeight={CHART_HEIGHT}
            fermentables={fermentables}
            selectSegment={this.selectSegment}
          />
        </View>
        <ScrollView style={styles.fermentablesContainer}>
          {_.map(fermentables, (fermentable) => (
            <TouchableRow
              key={fermentable.name}
              onPress={_.noop}
            >
              <FermentableComponent
                fermentable={fermentable}
                fraction={_.round(fermentable.weight.value / totalWeight, 2)}
              />
            </TouchableRow>
          ))}
        </ScrollView>
      </View>
    );
  }
}
