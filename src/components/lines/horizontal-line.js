import React from 'react';
import {View} from 'react-native';

const HorizontalLine = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
      }}
    />
  );
};

export default HorizontalLine;
