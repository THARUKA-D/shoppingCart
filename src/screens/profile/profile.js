import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ScrollView, View} from 'react-native';
import Button from '../../components/button/button';
import ProfileDetailTab from '../../components/user-detail-tab/user-detail-tab';
import UserImageView from '../../components/user-image-view/user-image-view';
import {LOGIN_SCREEN} from '../../navigation/screen-names';
import createStyles from './profile.style';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = props => {
  const navigation = useNavigation();
  const logOut = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(allKeys);
    } catch (error) {
      console.log('Error on logout : ', e);
    }
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <View style={createStyles.mainContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={createStyles.container}>
        <View style={createStyles.imageView}>
          <UserImageView imageURL={props.user.image} />
        </View>

        <View style={createStyles.icon}>
          <ProfileDetailTab
            iconName="birthday-cake"
            titel="Birth date"
            value={props.user.birthDate}
            iconType="FontAwesome"
          />
          <ProfileDetailTab value={props.user.gender} iconType="Ionicons" />
          <ProfileDetailTab
            iconName="call"
            titel="Contact"
            value={props.user.phone}
            iconType="Ionicons"
          />
          <ProfileDetailTab
            iconName="graduation-cap"
            titel="Studies at"
            value={props.user.university}
            iconType="FontAwesome"
          />
          <ProfileDetailTab
            iconName="location"
            titel="From"
            value={props.user.address.city}
            iconType="Ionicons"
          />
          <ProfileDetailTab
            iconName="home"
            titel="Work at"
            value={props.user.company.name}
            iconType="FontAwesome"
          />
          <ProfileDetailTab
            iconName="briefcase"
            titel="Works as a"
            value={props.user.company.title}
            iconType="FontAwesome"
          />
        </View>

        <View>
          <Button
            buttonText={'Logout'}
            onPress={() => {
              logOut();
            }}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
