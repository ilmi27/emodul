import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mainColor} from '../constants/color';

const Welcome = ({navigation, route}) => {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <>
      <SafeAreaView>
        <ImageBackground
          style={{width: wp('100'), height: hp('100')}}
          source={require('../assets/image/bg-drawer.png')}>
          <View
            style={{
              marginTop: 150,
              backgroundColor: 'rgba(19, 108, 64, 0.6)',
              padding: 16,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: wp('9.6'),
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Selamat Datang di
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: wp('8'),
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              E-Modul Biologi
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: wp('6'),
                fontWeight: 'bold',
                marginTop: 16,
                marginBottom: 36,
                textAlign: 'center',
              }}>
              Modul Biologi Berbasis Android
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainColor,
                width: wp('90'),
                paddingVertical: 8,
                borderRadius: 6,
              }}>
              <Icon name="play" size={32} color={'#fff'} />
              <Text style={{fontSize: 20, color: '#fff', marginLeft: 8}}>
                MULAI
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Welcome;
