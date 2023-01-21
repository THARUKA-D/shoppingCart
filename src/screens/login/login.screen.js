import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {PRODUCTS_SCREEN} from '../../navigation/screen-names';
import createStyles from './login.style';

const LoginScreen = props => {
  return (
    <View style={createStyles.container}>
      <View style={createStyles.body}>
        <View style={createStyles.wrapper}>
          <View style={createStyles.topView}>
            <Text style={createStyles.headerText}>Practical Test</Text>
          </View>
          <View style={createStyles.inputContainer}>
            <TextInput style={createStyles.input} placeholder={'Username'} />
            <TextInput style={createStyles.input} placeholder={'Password'} />
          </View>
        </View>
        <View style={createStyles.wrapperBottom}>
          <Pressable
            onPress={() => {
              props.navigation.navigate(PRODUCTS_SCREEN);
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'red' : 'blue',
              },
              createStyles.button,
            ]}>
            <Text style={createStyles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
