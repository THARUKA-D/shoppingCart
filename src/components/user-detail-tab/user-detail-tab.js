import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import createStyles from './user-detail-tab.style';

const ProfileDetailTab = props => {
  const [value, setValue] = useState(props.value);
  const [iconName, setIconName] = useState(props.iconName);

  const titel = props.titel;
  const iconTypeFontAwesome = props.iconType === 'FontAwesome';

  useEffect(() => {
    if (!iconName && !titel) {
      value == 'male' ? setIconName('male') : setIconName('female');
      // Change the first letter to capital
      setValue(value.charAt(0).toUpperCase() + value.slice(1));
    }
  }, []);

  return (
    <View style={createStyles.container}>
      <Text style={createStyles.icon}>
        {iconTypeFontAwesome ? (
          <Icon name={iconName} size={20} color="#7575a3" />
        ) : (
          <IconIonicons name={iconName} size={20} color="#7575a3" />
        )}
      </Text>

      {titel && <Text style={createStyles.titel}>{titel}</Text>}

      <Text style={createStyles.valueText}>{value}</Text>
    </View>
  );
};

export default ProfileDetailTab;
