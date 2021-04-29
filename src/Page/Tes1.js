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

const Tes1 = ({navigation, route}) => {
  const backAction = () => {
    if (route.name === 'Tes1') {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const _renderCiri = (num, text) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 12,
          paddingRight: 24,
          marginBottom: 4,
        }}>
        <Text>{num}</Text>
        <Text style={{textAlign: 'justify', fontSize: 16}}>{text}</Text>
      </View>
    );
  };

  const _renderCiri1 = (num, text, top, bot) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          marginTop: top ? 8 : 4,
          marginBottom: bot ? 8 : 0,
        }}>
        <Text>{num}</Text>
        <Text style={{textAlign: 'justify', fontSize: 16}}>{text}</Text>
      </View>
    );
  };

  const _renderCiri2 = (num, text, top) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 8,
          marginTop: top ? 4 : 8,
        }}>
        <Text>{num}</Text>
        <Text style={{fontSize: 16}}>{text}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Materi 1'} />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.head}>
              <Icon name="file-document-edit" color={'#fff'} size={18} />
              <Text style={styles.title}>Tes Formatif</Text>
            </View>
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 8,
                  marginRight: wp('10'),
                }}>
                <View>
                  <Text>1.</Text>
                </View>
                <View>
                  {_renderCiri(
                    'a. ',
                    'Gambarkanlah struktur tubuh virus beserta keterangannya.',
                  )}
                  {_renderCiri('b. ', 'Sebutkan ciri-ciri virus secara umum!')}
                  {_renderCiri(
                    'c. ',
                    'Dari ciri-ciri tersebut identifikasi mana ciri virus sebagai mahluk hidup mana ciri sebagai benda mati?',
                  )}
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    marginRight: wp('10'),
                  }}>
                  <View>
                    <Text style={{marginRight: 8}}>2.</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'justify', fontSize: 16}}>
                      Pasangkanlah kalimat pada kolom A dengan pasangan kata
                      yang sesuai pada kolom B:
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: wp('86'),
                    marginTop: 8,
                    alignSelf: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: wp('48'),
                      borderWidth: 0.6,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Kolom A
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('38'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Kolom B
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: wp('86'),
                    alignSelf: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: wp('48'),
                      borderWidth: 0.6,
                      borderTopWidth: 0,
                      borderColor: '#000',
                      alignItems: 'center',
                    }}>
                    {_renderCiri1(
                      '1. ',
                      'Bagian tubuh virus yang di dalamnya mengandung asam nukleat adalah....',
                    )}
                    {_renderCiri1(
                      '2. ',
                      'Selubung pada virus yang tersusun atas molekul protein adalah....',
                      true,
                    )}
                    {_renderCiri1(
                      '3. ',
                      'Bagian virus yang berfungsi untuk menginfeksi organisme adalah....',
                      true,
                    )}
                    {_renderCiri1(
                      '4. ',
                      'Asam nukleat pada virus yang berupa rantai ganda adalah....',
                      true,
                    )}
                    {_renderCiri1(
                      '5. ',
                      'Asam nukleat pada virus yang berupa rantai tunggal adalah ....',
                      true,
                      true,
                    )}
                  </View>
                  <View
                    style={{
                      width: wp('38'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderColor: '#000',
                    }}>
                    {_renderCiri2('A. ', 'Deoxyribonucleic acid (DNA)', true)}
                    {_renderCiri2('B. ', 'Ekor')}
                    {_renderCiri2('C. ', 'Leher')}
                    {_renderCiri2('D. ', 'Kapsomer')}
                    {_renderCiri2('E. ', 'Kepala')}
                    {_renderCiri2('F. ', 'Kapsid')}
                    {_renderCiri2('G. ', 'Ribonucleic acid (RNA)')}
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    marginRight: wp('10'),
                  }}>
                  <View>
                    <Text style={{marginRight: 8}}>3.</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'justify', fontSize: 16}}>
                      Jelaskan alasan bahwa virus dapat dikategorikan sebagai
                      makhluk hidup dan jelaskan pula alasan virus dapa
                      dikategorikan sebagai benda tidak hidup?
                    </Text>
                  </View>
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

export default Tes1;
