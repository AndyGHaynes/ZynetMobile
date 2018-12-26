import _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Colors, Icons } from '../../../../theme';
import { Hop } from '../../../../types/ingredients';
import {
  Card,
  IconButton,
} from '../../../core';
import styles from './.styles/hop';
import Addition from './addition';

type Props = {
  hop: Hop;
  remove: () => void;
};

export default ({ hop, remove }: Props) => (
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
        <IconButton
          color={Colors.grayDarker}
          icon={Icons.type.close}
          onPress={remove}
          size={Icons.size.medium}
          style={styles.icon}
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
