import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import { Fermentable as FermentableType } from '../../../../types/ingredients';
import { Measurement } from '../../../../types/zymath';
import { TouchableRow } from '../../../core';
import { IngredientModal } from '../../../modal';
import { Fermentable } from '../../../recipe_card';
import styles, { CHART_HEIGHT } from './.styles/fermentables';
import FermentablesChart from './chart';
import FermentableForm from './form';

interface FermentableProps {
  fermentables: FermentableType[];
  setWeight: (fermentable: FermentableType, weight: Measurement) => void;
}

interface FermentableState {
  modalOpen: boolean;
  selectedFermentable: FermentableType;
}

export default class FermentablesTab extends Component<FermentableProps, FermentableState> {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedFermentable: null,
    };
  }

  closeModal = () => this.setState({ modalOpen: false });

  selectSegment = (fermentable: FermentableType) => {
    this.setState({
      modalOpen: true,
      selectedFermentable: fermentable,
    });
  };

  componentDidUpdate() {
    const { selectedFermentable } = this.state;
    if (selectedFermentable) {
      const updated = _.find(
        this.props.fermentables,
        (fermentable) => fermentable.id === selectedFermentable.id && (
          fermentable.weight.value !== selectedFermentable.weight.value ||
          fermentable.weight.unit !== selectedFermentable.weight.unit
        )
      );
      if (updated) {
        this.setState({ selectedFermentable: updated });
      }
    }
  }

  render() {
    const { fermentables, setWeight } = this.props;
    const { modalOpen, selectedFermentable } = this.state;
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
              onPress={() => this.selectSegment(fermentable)}
            >
              <Fermentable
                fermentable={fermentable}
                fraction={_.round(fermentable.weight.value / totalWeight, 2)}
              />
            </TouchableRow>
          ))}
        </ScrollView>
        <IngredientModal
          close={this.closeModal}
          title={selectedFermentable && selectedFermentable.name}
          visible={modalOpen}
        >
          <FermentableForm
            fermentable={selectedFermentable}
            setWeight={(weight: Measurement) => setWeight(selectedFermentable, weight)}
          />
        </IngredientModal>
      </View>
    );
  }
}
