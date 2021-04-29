import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  BackHandler,
} from 'react-native';
import HeaderMateri from '../Component/HeaderMateri';
import {mainColor} from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tes3 = ({navigation, route}) => {
  const backAction = () => {
    if (route.name === 'Tes3') {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Materi 3'} />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.head}>
              <Icon name="file-document-edit" color={'#fff'} size={18} />
              <Text style={styles.title}>Tes Formatif</Text>
            </View>
            <View style={styles.body}>
              <View>
                <Text style={styles.desc}>
                  Gambarkan salah satu virus yang menarik menurut anda (bisa
                  virus pada manusia, hewan dan tumbuhan). Kemudian, jelaskan
                  pengaruh virus tersebut pada organisme inang, jelaskan cara
                  penularan penyakit, dan cara pencegahan serta penanganan
                  penyakit tersebut!
                </Text>
              </View>
              <View
                style={{
                  width: wp('86'),
                  alignSelf: 'center',
                  flexDirection: 'row',
                  marginTop: -16,
                }}>
                <View>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#000',
                      height: hp('12'),
                      width: wp('30'),
                      marginTop: 8,
                    }}
                  />
                  <Text style={{textAlign: 'center', marginTop: 4}}>
                    Gambar virus.
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#000',
                      height: hp('20'),
                      width: wp('52'),
                      marginLeft: wp('4'),
                    }}
                  />
                  <Text
                    style={{
                      maxWidth: wp('48'),
                      textAlign: 'justify',
                      marginLeft: wp('4'),
                      marginTop: 4,
                    }}>
                    Pengaruh virus, penularan penyakit, serta pencegahan dan
                    penangan penyakit.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 4,
    marginVertical: 16,
    width: wp('92'),
    alignSelf: 'center',
    borderWidth: 0.6,
    borderColor: 'rgba(0,0,0,0.32)',
  },
  head: {
    backgroundColor: mainColor,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  },
  body: {
    paddingVertical: 12,
  },
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginHorizontal: 12,
    marginBottom: 12,
  },
  ayat: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    marginHorizontal: 12,
    marginBottom: 12,
  },
});

export default Tes3;
