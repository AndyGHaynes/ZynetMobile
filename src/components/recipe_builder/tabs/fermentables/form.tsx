import React from 'react';
import {
  Picker,
  TextInput,
} from 'react-native';

import Units from '../../../../constants/units';
import { Fermentable } from '../../../../types/ingredients';
import { Measurement, Unit } from '../../../../types/zymath';
import { Col, Row } from '../../../core';
import styles from './.styles/form';

type FermentableType = {
  fermentable: Fermentable;
  setWeight: (weight: Measurement) => void;
};

export default class FermentableForm extends React.Component<FermentableType> {
  setWeightUnit = (unit: Unit) => {
    this.props.setWeight({
      ...this.props.fermentable.weight,
      unit,
    })
  };

  setWeightValue = (rawValue: string) => {
    const value = parseFloat(rawValue);
    if (!isNaN(value)) {
      this.props.setWeight({
        ...this.props.fermentable.weight,
        value,
      });
    }
  };

  renderUnit = (unit: Unit) => (
    <Picker.Item label={unit.unit} value={unit} />
  );

  render() {
    const { fermentable } = this.props;
    return (
      <Col>
        <Row>
          <Col>
            <TextInput
              keyboardType='numeric'
              onChangeText={this.setWeightValue}
              style={styles.weightValue}
              value={fermentable.weight.value.toString()}
            />
          </Col>
          <Col>
            <Picker
              selectedValue={fermentable.weight.unit}
              style={styles.unitPicker}
              onValueChange={this.setWeightUnit}
            >
              {this.renderUnit(Units.Pound)}
              {this.renderUnit(Units.Kilogram)}
              {this.renderUnit(Units.Ounce)}
              {this.renderUnit(Units.Gram)}
            </Picker>
          </Col>
        </Row>
      </Col>
    );
  }
}
