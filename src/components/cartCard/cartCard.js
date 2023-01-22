import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import HorizontalLine from '../lines/horizontal-line';
import createStyles from './cartCard.styles';

const CartCard = props => {
  const product = props.product;

  return (
    <View>
      <View style={createStyles.container}>
        <View style={createStyles.imageView}>
          <Image
            style={createStyles.productImage}
            source={{uri: `${product.image}`}}></Image>
        </View>

        <View style={createStyles.centerItem}>
          <Text style={createStyles.titleText}>{product.title}</Text>
          <View style={createStyles.info}>
            <Text style={createStyles.qtyText}>
              Quantity {product.quantity}
            </Text>
            <Pressable
              onPress={() => {
                props.onProductDelete(props.itemKey);
              }}>
              <Text style={createStyles.deleteButton}>Delete</Text>
            </Pressable>
          </View>
        </View>

        <View style={createStyles.right}>
          <Text style={createStyles.price}>{product.price}$</Text>
        </View>
      </View>
      <View style={createStyles.line}>
        {props.index < props.length - 1 && <HorizontalLine />}
      </View>
    </View>
  );
};

export default CartCard;
