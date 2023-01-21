import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, ProductsScreen} from '../screens';
import {LOGIN_SCREEN, PRODUCTS_SCREEN} from './screen-names';

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
        name={PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          headerTitle: 'Products',
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
