import _ from 'lodash';
import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import { Hop as HopType } from '../../../../types/ingredients';
import styles from './.styles/hops';
import Hop from './hop';

type Props = {
  hops: HopType[];
  removeHop: (hop: HopType) => void;
};

export default ({ hops, removeHop }: Props) => (
  <View style={styles.container}>
    <ScrollView style={styles.hops}>
      {_.map(hops, (hop, i) => (
        <View
          key={`${hop.name}-${i}`}
          style={styles.hop}
        >
          <Hop
            hop={hop}
            remove={() => removeHop(hop)}
          />
        </View>
      ))}
    </ScrollView>
  </View>
);
