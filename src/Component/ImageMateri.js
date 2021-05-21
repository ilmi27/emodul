import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ImageMateri = ({uri, title, source, nav}) => {
  return (
    <View style={{alignItems: 'center', marginBottom: 12}}>
      <TouchableWithoutFeedback
        onPress={() => nav.navigate('ImagePage', {url: uri, title, source})}>
        <Image
          style={{width: wp('86'), height: hp('36'), marginBottom: 12}}
          source={uri}
          resizeMode={'stretch'}
        />
      </TouchableWithoutFeedback>
      <Text
        style={{
          textAlign: 'center',
          maxWidth: wp('84'),
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {title}
      </Text>
      {source ? (
        <Text
          style={{
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: wp('80'),
            fontSize: 14,
          }}>{`(Sumber: ${source})`}</Text>
      ) : null}
    </View>
  );
};

export default ImageMateri;
