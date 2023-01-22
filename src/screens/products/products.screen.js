import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';

import ProductsCard from '../../components/productsCard/productsCard';
import createStyles from './products.style';

const ProductsScreen = ({navigation}) => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`https://dummyjson.com/products`)
      .then(products => {
        setAllProducts(products.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={createStyles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {allProducts &&
          allProducts.map(product => (
            <ProductsCard
              key={product.id}
              product={product}
              navigation={navigation}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;
