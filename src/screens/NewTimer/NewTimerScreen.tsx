import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Button, Screen, Text} from 'src/components';
import {addItem} from 'src/services';
import styles from './NewTimerScreen.style';
import {NewTimerProps} from './NewTimerScreen.types';

export const NewTimerScreen = ({navigation}: NewTimerProps) => {
  const [title, setTitle] = useState('');
  const onGoBack = () => navigation.goBack();
  const onSave = async () => {
    const prepObj = {
      id: new Date(),
      title: title,
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
    await addItem(prepObj);
    navigation.goBack();
  };
  return (
    <Screen isLoading={false} style={styles.screenWrapper}>
      <View style={styles.viewWrapper}>
        <Button
          category="primary"
          text={'Back'}
          onPress={onGoBack}
          style={styles.buttonStyle}
        />
        <View style={styles.inputWrapper}>
          <Text textCategory="h3" text={'Title'} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Type here title"
            onChangeText={text => setTitle(text)}
            defaultValue={title}
          />
        </View>
      </View>
      <View style={styles.wrapperConfirm}>
        <Button category="primary" text={'Save'} onPress={onSave} />
      </View>
    </Screen>
  );
};
