import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootParamList, Screens} from './screen-params';
import {HomeScreen} from 'src/screens';
import {color} from 'src/themes';

const Stack = createStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardStyle: {backgroundColor: color.transparent},
        headerShown: false,
      }}
      initialRouteName={Screens.Home}>
      <Stack.Screen component={HomeScreen} name={Screens.Home} />
    </Stack.Navigator>
  );
};
