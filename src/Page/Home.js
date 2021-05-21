import React from 'react';
import {SafeAreaView, Image, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../Component/Header';
import {mainColor} from '../constants/color';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} title={'Home'} />
        <Image
          style={{resizeMode: 'stretch', width: wp('100'), height: hp('100')}}
          source={require('../assets/image/home.png')}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
