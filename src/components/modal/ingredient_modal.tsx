import {
  Button,
  Icon,
} from 'native-base';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import styles from './.styles/ingredient_modal';

interface ModalProps {
  children: JSX.Element;
  close: () => void;
  visible: boolean;
  title: string;
}

export default ({ visible, close, title, children }: ModalProps) => (
  <Modal isVisible={visible}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={close}
          style={styles.closeIconContainer}
        >
          <Icon
            name='close'
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {children}
      </ScrollView>
      <View style={styles.closeButton}>
        <Button
          block
          onPress={close}
        >
          <Text style={styles.closeButtonText}>
            Close
          </Text>
        </Button>
      </View>
    </View>
  </Modal>
);
