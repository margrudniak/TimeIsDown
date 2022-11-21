import AsyncStorage from '@react-native-async-storage/async-storage';
import {TimerObjectType} from 'src/types';

export const getAllItems = async (cb: (valueArr: TimerObjectType) => void) => {
  await AsyncStorage.getAllKeys((error?: Error, keys?: string[]) => {
    keys?.map(e => {
      AsyncStorage.getItem(e, (errorItem?: Error, result?: string) => {
        try {
          const valueArr = JSON.parse(result!);
          console.log('valueArr', valueArr);
          cb(valueArr);
        } catch (err) {
          console.error('Error getAll', errorItem);
        }
      });
    });
  });
};
