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

const Tes2 = ({navigation, route}) => {
  const tableData = ['1.', '2.', '3.', '4.', '5.'];

  const backAction = () => {
    if (route.name === 'Tes2') {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const renderData = () => {
    const data = tableData.map((item, index) => {
      return (
        <View
          style={{
            width: wp('86'),
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          key={index}>
          <View
            style={{
              width: wp('8'),
              borderWidth: 0.6,
              borderTopWidth: 0,
              borderColor: '#000',
              height: hp('4.8'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              {item}
            </Text>
          </View>
          <View
            style={{
              width: wp('26'),
              borderWidth: 0.6,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderColor: '#000',
              height: hp('4.8'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}> </Text>
          </View>
          <View
            style={{
              width: wp('26'),
              borderWidth: 0.6,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderColor: '#000',
              height: hp('4.8'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}> </Text>
          </View>
          <View
            style={{
              width: wp('26'),
              borderWidth: 0.6,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderColor: '#000',
              height: hp('4.8'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}> </Text>
          </View>
        </View>
      );
    });
    return data;
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Materi 2'} />
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.head}>
              <Icon name="file-document-edit" color={'#fff'} size={18} />
              <Text style={styles.title}>Tes Formatif</Text>
            </View>
            <View style={styles.body}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    marginRight: 22,
                  }}>
                  <View>
                    <Text style={{marginRight: 8}}>1.</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'justify', fontSize: 16}}>
                      Jelaskan tahapaan terjadinya replikasi virus?
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    marginRight: 22,
                  }}>
                  <View>
                    <Text style={{marginRight: 8}}>2.</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'justify', fontSize: 16}}>
                      Jelaskan perbedaan antara daur litik dan daur lisogenik?
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    marginRight: 22,
                  }}>
                  <View>
                    <Text style={{marginRight: 8}}>3.</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'justify', fontSize: 16}}>
                      Kelompokkan virus yang ada pada kolom bawah sesuai dengan
                      asam nukleatnya!
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 8}}>
                <View style={{paddingHorizontal: 16}}>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Tabel klasifikasi virus berdasarkan asam nukleatnya
                  </Text>
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
                      width: wp('8'),
                      borderWidth: 0.6,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      No.
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('26'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Ribovirus
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('26'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Deoksiribovirus
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('26'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      height: hp('4.8'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Keterangan
                    </Text>
                  </View>
                </View>
                {renderData()}
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

export default Tes2;
