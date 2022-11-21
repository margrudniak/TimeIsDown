import AsyncStorage from '@react-native-async-storage/async-storage';
import {TimerObjectType} from 'src/types';

export const updateItem = async (obj: TimerObjectType) => {
  try {
    await AsyncStorage.mergeItem(`${obj.id}`, JSON.stringify(obj));
  } catch (e) {
    console.log('error', e);
  }
};
