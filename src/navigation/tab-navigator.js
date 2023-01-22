import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import HomeStackNavigator from './home-stack-navigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME_STACK') {
            iconName = 'home';
            color = focused ? 'blue' : 'gray';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HOME_STACK"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
