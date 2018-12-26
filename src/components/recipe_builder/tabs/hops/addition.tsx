import React, { Component } from 'react';
import {
  Slider,
  View,
} from 'react-native';

import { Icons } from '../../../../theme';
import { HopAddition } from '../../../../types/ingredients';
import { HopAdditionType } from '../../../../constants/enums';
import { Measurement } from '../../../../types/zymath';
import { Icon, Quantity } from '../../../core';
import styles from './.styles/addition';

interface AdditionProps {
  addition: HopAddition;
  boilTimeMinutes: number;
  setAdditionTime: (time: Measurement) => void,
  setAdditionType: (type: HopAdditionType) => void,
}

const getAdditionIcon = (type: HopAdditionType) => {
  return {
    [HopAdditionType.Boil]: 'pot',
    [HopAdditionType.DryHop]: 'barrel',
    [HopAdditionType.HopStand]: 'decagram',
    [HopAdditionType.Whirlpool]: 'ubisoft',
  }[type];
};

export default class Addition extends Component<AdditionProps> {
  render() {
    const {
      addition,
      boilTimeMinutes,
      setAdditionTime,
    } = this.props;
    const {
      time,
      type,
      weight,
    } = addition;
    const setTimeValue = (value: number) => setAdditionTime({ ...time, value });
    return (
      <View style={styles.container}>
        <View style={styles.additionType}>
          <Icon
            name={getAdditionIcon(type)}
            size={Icons.size.mediumSmall}
            style={styles.icon}
          />
        </View>
        <View style={styles.weight}>
          <Quantity
            unit={weight.unit.shortName}
            unitStyle={styles.weightUnit}
            value={weight.value}
            valueStyle={styles.weightValue}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            minimumValue={0}
            maximumValue={boilTimeMinutes}
            onValueChange={setTimeValue}
            style={styles.slider}
            value={time.value}
          />
        </View>
        <View style={styles.time}>
          <Quantity
            unit=''
            unitStyle={{}}
            value={addition.time.value}
            valueStyle={styles.timeValue}
          />
        </View>
      </View>
    );
  }
}
