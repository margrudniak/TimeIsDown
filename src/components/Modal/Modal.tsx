import React from 'react';
import {View, Modal as ModalNative} from 'react-native';
import {formatDate} from 'src/utils/helpers';
import {Button} from '../Button/Button';
import {Text} from '../Text/Text';
import {ModalProps} from './Modal.types';
import styles from './Modalstyle.';

export const Modal = ({
  isVisible,
  closeModal,
  dataModal: {id, title},
}: ModalProps) => {
  return (
    <ModalNative transparent={true} animationType={'none'} visible={isVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.contentWrapper}>
          <Text textCategory="h1" text={title} />
          <Text textCategory="h3" text={`${formatDate(id)}`} />
          <Button
            category="primary"
            text={'Close modal'}
            onPress={closeModal}
          />
        </View>
      </View>
    </ModalNative>
  );
};
