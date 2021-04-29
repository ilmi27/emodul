import React, {useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {mainColor} from '../constants/color';
import Loading from 'react-native-spinkit';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1500);
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: mainColor,
        }}>
        <Image source={require('../assets/image/lg.png')} />
        <Loading
          style={{position: 'absolute', bottom: 72}}
          isVisible={true}
          color={'#fff'}
          size={38}
          type={'Pulse'}
        />
      </SafeAreaView>
    </>
  );
};

export default Splash;
