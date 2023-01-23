import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import Button from '../../components/button/button';
import CartCard from '../../components/cartCard/cartCard';
import {CHECKOUT_SCREEN} from '../../navigation/screen-names';
import createStyles from './cart.style';

const CartScreen = ({navigation}) => {
  const [cartItems, setcartItems] = useState([]);
  const [itemKeyArray, setitemKeyArray] = useState([]);
  const [totalAmount, settotalAmount] = useState('');

  const getCartItems = async () => {
    const itemKeys = await AsyncStorage.getAllKeys();
    const itemArray = [];
    let total = 0;

    for (const itemKey of itemKeys) {
      const product = await AsyncStorage.getItem(`${itemKey}`);
      const productJSON = JSON.parse(product);
      itemArray.push(productJSON);
      total += productJSON.price;
      settotalAmount(`${total}`);
    }
    setcartItems(itemArray);
    setitemKeyArray(itemKeys);
    settotalAmount(total);
  };

  const onProductDelete = async itemKey => {
    try {
      await AsyncStorage.removeItem(`${itemKey}`);
    } catch (e) {
      console.log('Error removing item from cart: ', e);
    }

    getCartItems();
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <View style={createStyles.main}>
      {cartItems && cartItems.length ? (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={createStyles.container}>
          <View style={createStyles.wrapper}>
            {cartItems &&
              cartItems.map((product, index) => (
                <CartCard
                  key={index}
                  product={product}
                  index={index}
                  length={cartItems.length}
                  onProductDelete={onProductDelete}
                  itemKey={itemKeyArray[index]}
                />
              ))}
          </View>
          <View style={createStyles.button}>
            <Button
              buttonText={'Checkout'}
              onPress={() => {
                navigation.navigate(CHECKOUT_SCREEN, {
                  totalAmount: totalAmount,
                  itemKeyArray: itemKeyArray,
                });
              }}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={createStyles.optionView}>
          <Text style={createStyles.option}> No Items Added to cart..</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
