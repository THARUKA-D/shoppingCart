import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import createStyles from './slide-bar.style';

const SliderBar = props => {
  const getQuantity = value => {
    const intValue = parseInt(value);
    props.setBuyQuantity(intValue);
  };

  return (
    <View style={createStyles.container}>
      <Text style={createStyles.minValue}>{props.minValue}</Text>
      <View style={createStyles.sliderView}>
        <Slider
          value={props.minValue}
          thumbTintColor="#6500f3"
          maximumValue={props.maxValue}
          minimumValue={props.minValue}
          minimumTrackTintColor="#6500f3"
          maximumTrackTintColor="#D3D3D3"
          onValueChange={value => getQuantity(value)}
        />
      </View>

      <Text style={createStyles.maxValue}>{props.maxValue}</Text>
    </View>
  );
};

export default SliderBar;
