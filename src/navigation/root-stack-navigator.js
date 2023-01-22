import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens';
import {LOGIN_SCREEN, TAB_STACK} from './screen-names';
import TabNavigator from './tab-navigator';

const Stack = createNativeStackNavigator();

const RootStackNavigator = props => {
  const {initialRouteName} = props;
  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
      <Stack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerTitle: '',
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={TAB_STACK}
        component={TabNavigator}
        options={{
          headerTitle: 'Products',
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
