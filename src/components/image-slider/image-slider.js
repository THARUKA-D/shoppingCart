import React, {useState} from 'react';
import {View, Image} from 'react-native';
import createStyles from './image-slider.style';
import NextPreButton from './subComponents/next-pre-buttons/next-pre-button';

const ImageSlider = props => {
  const images = props.images;
  const [imageindex, setImageIndex] = useState(0);

  const nextImage = () => {
    images && images.length > imageindex + 1
      ? setImageIndex(imageindex + 1)
      : setImageIndex(0);
  };

  const preImage = () => {
    images && 0 == imageindex
      ? setImageIndex(images.length - 1)
      : setImageIndex(imageindex - 1);
  };

  return (
    <View style={createStyles.container}>
      <View style={createStyles.leftSlide}>
        <NextPreButton
          buttonStyle={createStyles.button}
          iconStyle={createStyles.iconLeft}
          onPress={preImage}
        />
      </View>

      <View style={createStyles.imageView}>
        <Image
          style={createStyles.productImage}
          source={{uri: `${images[imageindex]}`}}></Image>
      </View>

      <View style={createStyles.rightSlide}>
        <NextPreButton
          buttonStyle={createStyles.button}
          iconStyle={createStyles.iconRight}
          onPress={nextImage}
        />
      </View>
    </View>
  );
};

export default ImageSlider;
