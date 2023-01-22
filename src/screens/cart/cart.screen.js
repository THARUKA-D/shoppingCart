import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import Button from '../../components/button/button';
import CartCard from '../../components/cartCard/cartCard';
import createStyles from './cart.style';

const CartScreen = () => {
  const [cartItems, setcartItems] = useState([]);
  const [itemKeyArray, setitemKeyArray] = useState([]);

  const getCartItems = async () => {
    const itemKeys = await AsyncStorage.getAllKeys();
    const itemArray = [];
    for (const itemKey of itemKeys) {
      const product = await AsyncStorage.getItem(`${itemKey}`);
      itemArray.push(JSON.parse(product));
    }
    setcartItems(itemArray);
    setitemKeyArray(itemKeys);
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
                  key={product.titel}
                  product={product}
                  index={index}
                  length={cartItems.length}
                  onProductDelete={onProductDelete}
                  itemKey={itemKeyArray[index]}
                />
              ))}
          </View>
          <View style={createStyles.button}>
            <Button buttonText={'Checkout'} onPress={() => {}} />
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
