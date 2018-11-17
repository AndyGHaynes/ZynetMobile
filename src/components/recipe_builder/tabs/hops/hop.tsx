import _ from 'lodash';
import {
  Icon,
} from 'native-base';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Hop } from '../../../../types/ingredients';
import { Card } from '../../../core';
import styles from './.styles/hop';
import Addition from './addition';

interface Props {
  hop: Hop;
}

export default ({ hop }: Props) => (
  <Card>
    <View style={styles.header}>
      <View style={styles.name}>
        <Text style={styles.nameText}>
          {hop.name}
        </Text>
      </View>
      <View style={styles.acid}>
        <Text>
          α {hop.alpha}
        </Text>
      </View>
      <View style={styles.acid}>
        <Text>
          β {hop.beta}
        </Text>
      </View>
      <View style={styles.icons}>
        <Icon
          fontSize={14}
          name='plus-circle'
          style={styles.icon}
          type='MaterialCommunityIcons'
        />
      </View>
    </View>
    <View style={styles.additions}>
      {_.map(hop.additions, (addition, j) => (
        <Addition
          key={j}
          addition={addition}
          boilTimeMinutes={60}
          setAdditionTime={console.log}
          setAdditionType={console.log}
        />
      ))}
    </View>
  </Card>
);
