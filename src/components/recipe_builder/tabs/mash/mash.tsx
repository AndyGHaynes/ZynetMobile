import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import Units from '../../../../constants/units';
import { MashSchedule } from '../../../../types/mash';
import { Card } from '../../../core';
import styles from './.styles/mash';
import Header from './header';
import Loss from './loss';
import Rest from './rest';

type Props = {
  schedule: MashSchedule;
}

export default class MashTab extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const totalLoss = {
      unit: Units.Gallon,
      value: 1,
    };
    return (
      <View style={styles.tabContainer}>
        <ScrollView style={styles.mashContainer}>
          <Card>
            <Header columns={['Step', 'Temperature', 'Time']} />
            {_.map(this.props.schedule.rests, (rest, i) => (
              <Rest
                key={`rest-${i}`}
                rest={rest}
                step={i + 1}
              />
            ))}
          </Card>
          <Card>
            <Header columns={['Loss Type', 'Loss Rate', 'Total Loss']} />
            {_.map(this.props.schedule.losses, (loss, i) => (
              <Loss
                key={`loss-${i}`}
                loss={loss}
                totalLoss={totalLoss}
              />
            ))}
          </Card>
        </ScrollView>
      </View>
    );
  }
}
