import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductDetailScreen, ProductsScreen} from '../screens';
import {PRODUCTS_SCREEN, PRODUCT_DETAIL_SCREEN} from './screen-names';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          headerTitle: 'Products',
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name={PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{
          headerTitle: '',
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
