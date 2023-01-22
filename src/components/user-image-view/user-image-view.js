import React from 'react';
import {View, Image} from 'react-native';
import createStyles from './user-image-view.style';

const UserImageView = ({imageURL}) => {
  return (
    <View style={createStyles.container}>
      <Image
        style={createStyles.userImg}
        source={{
          uri: `${imageURL}`,
        }}
      />
    </View>
  );
};

export default UserImageView;
