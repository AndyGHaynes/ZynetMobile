import _ from 'lodash';
import {
  Button,
  Icon,
} from 'native-base';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../core';

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 4,
    margin: 4,
  },
  closeButtonText: {
    color: 'white',
  },
  closeIcon: {
    color: 'white',
    fontSize: 32,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    maxHeight: _.round(Dimensions.get('window').height - 64),
  },
  header: {
    backgroundColor: Colors.grayDarker,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
});

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
      <Button
        block
        onPress={close}
        style={styles.closeButton}
      >
        <Text style={styles.closeButtonText}>
          Close
        </Text>
      </Button>
    </View>
  </Modal>
);
