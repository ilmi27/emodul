import React from 'react';
import {SafeAreaView, ScrollView, Pressable} from 'react-native';
import Header from '../Component/Header';
import CardMateri from '../Component/CardMateri';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Materi = ({navigation}) => {
  const data = {
    data1: {
      title: 'Materi I',
      image: require('../assets/image/cover1.jpg'),
      width: wp('92'),
      height: hp('32'),
      mode: 'stretch',
    },
    data2: {
      title: 'Materi II',
      image: require('../assets/image/cover2.jpg'),
      width: wp('92'),
      height: hp('32'),
      mode: 'stretch',
    },
    data3: {
      title: 'Materi III',
      image: require('../assets/image/cover3.jpg'),
      width: wp('92'),
      height: hp('32'),
      mode: 'stretch',
    },
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Materi'} />
        <ScrollView>
          <Pressable onPress={() => navigation.navigate('Materi1')}>
            <CardMateri data={data.data1} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Materi2')}>
            <CardMateri data={data.data2} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Materi3')}>
            <CardMateri style={{marginBottom: 16}} data={data.data3} />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Materi;
