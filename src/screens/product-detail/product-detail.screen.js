import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import createStyles from './product-detail.style';
import SliderBar from '../../components/slider-bar/slider-bar';
import Button from '../../components/button/button';
import ImageSlider from '../../components/image-slider/image-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({route}) => {
  const [buyQuantity, setBuyQuantity] = useState(1);

  // i have taken the product as a prop so,
  // no need to fetch the product again.
  // As mentioned in the TEST instuctions i will add the fetch but will be commented...
  const product =
    route.params && route.params.product ? route.params.product : [];
  const PRODUCT_NOT_AVAILABLE_IN_THE_STORE = 0;
  console.log(product.id);

  // TO be implemented but not needed because i get the products as a prop.
  useEffect(() => {}, []);

  const addToCart = async () => {
    const PRODUCT_MAIN_INFO = {
      image: product.images[0],
      title: product.title,
      price: product.price,
      quantity: buyQuantity,
    };

    try {
      await AsyncStorage.setItem(
        `product_${product.id}`,
        JSON.stringify(PRODUCT_MAIN_INFO),
      );
    } catch (e) {
      console.log('Error saving to cart: ', e);
    }
  };

  return (
    <View style={createStyles.mainContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={createStyles.container}>
        <View style={createStyles.imgSlider}>
          {product && product.images && <ImageSlider images={product.images} />}
        </View>

        <View style={createStyles.detailView}>
          <Text style={createStyles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>

        <View style={createStyles.infoView}>
          <View style={createStyles.info}>
            <Text style={createStyles.key}>Price</Text>
            <Text style={createStyles.value}>{product.price}$</Text>
          </View>

          <View style={createStyles.info}>
            <Text style={createStyles.key}>Feedback</Text>
            <Text style={createStyles.value}>{product.rating}</Text>
            {/* todo: have to update the rating value with starts */}
          </View>
        </View>

        <View style={createStyles.sliderBar}>
          <Text style={createStyles.centerText}>Quantity</Text>
          <SliderBar
            minValue={
              parseInt(product.stock) > 0
                ? 1
                : PRODUCT_NOT_AVAILABLE_IN_THE_STORE
            }
            maxValue={product.stock}
            setBuyQuantity={setBuyQuantity}
          />
        </View>

        <View style={createStyles.button}>
          <Button
            onPress={() => {
              addToCart();
            }}
            buttonText={`Add to Cart (${buyQuantity})`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;
