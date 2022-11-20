import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootParamList, Screens} from './screen-params';
import {HomeScreen} from 'src/screens';
import {color} from 'src/themes';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          cardStyle: {backgroundColor: color.transparent},
          headerShown: false,
        }}
        initialRouteName={Screens.Home}>
        <Stack.Screen component={HomeScreen} name={Screens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
