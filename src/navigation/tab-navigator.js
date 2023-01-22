import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from './home-stack-navigator';
import {CART_SCREEN, PROFILE_SCREEN} from './screen-names';
import {ProfileScreen} from '../screens';
import axios from 'axios';
import CartScreen from '../screens/cart/cart.screen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [user, setUser] = useState('');

  const fetchUser = async () => {
    await axios
      .get(`https://dummyjson.com/users/1`)
      .then(user => {
        setUser(user.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME_STACK') {
            iconName = 'home';
            color = focused ? 'blue' : 'gray';
          } else if (route.name === PROFILE_SCREEN) {
            iconName = 'user';
            return (
              <IconFontAwesome name={iconName} size={size} color={color} />
            );
          } else if (route.name === CART_SCREEN) {
            iconName = 'shopping-cart';
            return (
              <IconFontAwesome name={iconName} size={size} color={color} />
            );
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HOME_STACK" component={HomeStackNavigator} />
      <Tab.Screen
        name={CART_SCREEN}
        component={CartScreen}
        options={{
          title: CART_SCREEN,
          headerShown: true,
          unmountOnBlur: true, // update the page everytime when re-visit
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        children={() => <ProfileScreen user={user} />}
        options={{
          title: `${user.firstName} ${user.lastName}`,
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
