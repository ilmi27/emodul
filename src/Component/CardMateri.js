import React from 'react';
import {View, Text, Image} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {mainColor} from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardMateri = ({data, style}) => {
  const {image, width, height, mode, title} = data;
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          borderWidth: 0.4,
          borderColor: 'rgba(0,0,0,0.24)',
          width: widthPercentageToDP('92'),
          marginTop: 16,
          borderRadius: 4,
        },
        style ? style : {},
      ]}>
      <Image
        source={image}
        resizeMode={mode}
        style={{width, height, borderTopLeftRadius: 4, borderTopRightRadius: 4}}
      />
      <View
        style={{
          backgroundColor: mainColor,
          paddingVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}>
        <Icon name="play" size={32} color={'#fff'} />
        <Text style={{color: '#fff', fontSize: 20, marginLeft: 8}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CardMateri;
