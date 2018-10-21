import _ from 'lodash';
import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import { Hop as HopType } from '../../../../types/ingredients';
import styles from './.styles/hops';
import Hop from './hop';

interface Props {
  hops: HopType[];
}

export default ({ hops }: Props) => (
  <View style={styles.container}>
    <ScrollView style={styles.hops}>
      {_.map(hops, (hop, i) => (
        <View
          key={`${hop.name}-${i}`}
          style={styles.hop}
        >
          <Hop hop={hop} />
        </View>
      ))}
    </ScrollView>
  </View>
);
