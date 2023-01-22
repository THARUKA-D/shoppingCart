import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {TAB_STACK} from '../../navigation/screen-names';
import createStyles from './login.style';

const LoginScreen = props => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const authenticateUser = async () => {
    const body = {
      username: userName, //'kminchelle',
      password: password, //'0lelplR',
    };

    await axios
      .post('https://dummyjson.com/auth/login', body, {
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => {
        if (res.status == '200') {
          props.navigation.navigate(TAB_STACK);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={createStyles.container}>
      <View style={createStyles.body}>
        <View style={createStyles.wrapper}>
          <View style={createStyles.topView}>
            <Text style={createStyles.headerText}>Practical Test</Text>
          </View>
          <View style={createStyles.inputContainer}>
            <TextInput
              style={createStyles.input}
              placeholder={'Username'}
              onChangeText={e => {
                setuserName(e);
              }}
            />
            <TextInput
              style={createStyles.input}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={e => {
                setpassword(e);
              }}
            />
          </View>
        </View>
        <View style={createStyles.wrapperBottom}>
          <Pressable
            onPress={() => {
              authenticateUser();
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
