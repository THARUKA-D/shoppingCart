import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import createStyles from './productCard.styles';

const ProductsCard = props => {
  const product = props.product;
  return (
    <View>
      <Pressable
        onPress={() => {
          // todo: must navigate to products detail page
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : undefined,
          },
        ]}>
        <View style={createStyles.container}>
          <Text style={createStyles.titleText}>{product.title}</Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={createStyles.descriptionText}>
            {product.description}
          </Text>

          <View style={createStyles.imageView}>
            <Image
              style={createStyles.productImage}
              source={{uri: `${product.images[0]}`}}></Image>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductsCard;
