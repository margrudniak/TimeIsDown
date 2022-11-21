import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'src/components';
import {returnSeconds} from 'src/utils/helpers';
import {useTimer} from 'src/utils/hooks';
import styles from './TimerItem.style';
import {TimerItemProps} from './TimerItem.types';

export const TimerItem = ({
  id,
  activeElementId,
  title,
  time,
  onPressElement,
  onPressedButton,
}: TimerItemProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const {time: timer} = useTimer(returnSeconds(time), isStarted, {
    id,
    title,
    time,
  });

  //check if activeElementId exists, if yes then check if activeElementId is equals current id, if yes then this element shouldnt be disable
  const isDisabled = activeElementId
    ? activeElementId === `${id}`
      ? false
      : true
    : false;

  const onInteraction = () => {
    setIsStarted((prev: boolean) => !prev);
    onPressedButton(`${id}`);
  };

  return (
    <TouchableOpacity
      onPress={() => onPressElement(id, title)}
      style={styles.wrapperElement}>
      <View style={styles.wrapperText}>
        <Text textCategory="h2" text={title} />
        <View style={styles.wrapperTimer}>
          <Text textCategory="h2" text={timer.hours} />
          <Text textCategory="h2" text={':'} />
          <Text textCategory="h2" text={timer.minutes} />
          <Text textCategory="h2" text={':'} />
          <Text textCategory="h2" text={timer.seconds} />
        </View>
      </View>
      <View style={styles.wrapperButton}>
        <Button
          disabled={isDisabled}
          category="primary"
          text={isDisabled ? 'DISABLED' : isStarted ? 'Pause' : 'Start'}
          style={styles.buttonStyle}
          onPress={onInteraction}
        />
      </View>
    </TouchableOpacity>
  );
};
