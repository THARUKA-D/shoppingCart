import React from 'react';
import {View, Text, Pressable} from 'react-native';
import createStyles from './button.style';

const Button = props => {
  return (
    <View style={createStyles.container}>
      <Pressable
        onPress={() => {
          props.onPress();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          createStyles.button,
        ]}>
        <Text style={createStyles.buttonText}>{props.buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
