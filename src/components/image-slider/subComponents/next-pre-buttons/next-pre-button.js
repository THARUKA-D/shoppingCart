import React from 'react';
import {Pressable, Image} from 'react-native';

const NextPreButton = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress();
      }}
      style={props.buttonStyle}>
      <Image
        style={props.iconStyle}
        source={require('../../../../../Icons/right-arrow.png')}></Image>
    </Pressable>
  );
};

export default NextPreButton;
