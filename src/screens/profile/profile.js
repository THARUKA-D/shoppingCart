import React from 'react';
import {ScrollView, View} from 'react-native';
import Button from '../../components/button/button';
import ProfileDetailTab from '../../components/user-detail-tab/user-detail-tab';
import UserImageView from '../../components/user-image-view/user-image-view';
import createStyles from './profile.style';

const ProfileScreen = props => {
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
          <Button buttonText={'Logout'} onPress={() => {}}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
