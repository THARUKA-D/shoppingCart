import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Button from '../../components/button/button';
import RadioButtonRN from 'radio-buttons-react-native';

import createStyles from './checkout.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PRODUCTS_SCREEN} from '../../navigation/screen-names';

const CheckOutScreen = ({route, navigation}) => {
  const data = [
    {
      label: 'Cash On Delivery',
    },
  ];

  const onPayNowButtonPress = async () => {
    try {
      await AsyncStorage.multiRemove(route.params.itemKeyArray);
    } catch (e) {
      console.log('Error removing items from cart: ', e);
    }

    navigation.navigate(PRODUCTS_SCREEN);
  };

  return (
    <View style={createStyles.container}>
      <View style={createStyles.details}>
        <Text style={createStyles.total}>Total</Text>
        <Text style={createStyles.price}>$ {route.params.totalAmount}.00</Text>
        <View>
          <Text style={createStyles.total}>Payment Method</Text>
          <View style={createStyles.radio}>
            <RadioButtonRN initial={1} box={false} data={data} selectedBtn={e => {}} />
          </View>
        </View>
      </View>

      <View style={createStyles.icon}>
        <Button
          buttonText={'Pay Now'}
          onPress={() => {
            onPayNowButtonPress();
          }}></Button>
      </View>
    </View>
  );
};

export default CheckOutScreen;
