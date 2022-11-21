import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {Button, Modal, Screen, Text} from 'src/components';
import {Screens} from 'src/navigation';
import {getAllItems} from 'src/services';
import {TimerObjectType} from 'src/types';
import {TimerItem} from './components/TimerItem/TimerItem';
import {HomeScreenProps} from './HomeScreen.types';
import styles from './HomeScreen.style';

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState<
    Pick<TimerObjectType, 'id' | 'title'> | {}
  >({});
  const [activeElementId, setActiveElementId] = useState('');
  const [timers, setTimers] = useState<TimerObjectType[] | []>([]);
  const onAddNewTimer = () => navigation.navigate(Screens.NewTimer);
  const focused = useIsFocused();

  useEffect(() => {
    setIsScreenLoading(true);
    (async () => {
      if (focused) {
        console.log('invoked');
        await getAllItems((el: TimerObjectType) =>
          timers.find(a => a.id === el.id) ? null : setTimers([...timers, el]),
        );
      }
    })();
    setTimeout(() => {
      setIsScreenLoading(false);
    }, 1000);
    return () => {
      if (!focused) {
        setTimers([]);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const onPressedButton = (id: string) => {
    if (activeElementId) {
      setActiveElementId('');
    } else {
      setActiveElementId(id);
    }
  };

  const onPressElement = (idEl: Date, titleEl: string) => {
    setIsModalVisible(true);
    setDataModal({id: idEl, title: titleEl});
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
    setDataModal({});
  };

  const renderItem = ({
    item: {id, title, time},
  }: ListRenderItemInfo<TimerObjectType>) => (
    <TimerItem
      id={id}
      activeElementId={activeElementId}
      title={title}
      time={time}
      onPressElement={(idEl: Date, titleEl: string) =>
        onPressElement(idEl, titleEl)
      }
      onPressedButton={(idElement: string) => onPressedButton(idElement)}
    />
  );

  return (
    <Screen isLoading={isScreenLoading} style={styles.screenContainer}>
      {timers.length > 0 ? (
        <FlatList
          data={timers}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text textCategory="h2" text={'No timers, please add some.'} />
        </View>
      )}
      <Button
        category="primary"
        text={'Add new timer'}
        onPress={onAddNewTimer}
      />
      <Modal
        dataModal={dataModal}
        isVisible={isModalVisible}
        closeModal={onCloseModal}
      />
    </Screen>
  );
};
