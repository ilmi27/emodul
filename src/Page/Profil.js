import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Header from '../Component/Header';
import {mainColor} from '../constants/color';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../Component/Loading';

const Profil = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Profil Pemateri'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <ScrollView>
            <View style={styles.viewP}>
              <Text style={styles.p}>
                Nama penulis bernama A. Muh. Farid Khuzairi, anak sulung dari
                empat bersaudara (A. Ismail Khadri, A. Rizki A. Fauzi, A.
                Awaliyah Maryam). Lahir pada awal April 1997 dari bukti cinta
                kasih Bapak A. Akram dan Fitriah di Makassar. Saya memulai
                pendidikan formal di Soppeng mulai dari tingkat R.A. Massinring
                Pulu Tengapadange (2001), SDN 213 Lagoci (2003), MTs. DDI
                Pattojo (2009), SMAN 1 Liliriaja (sekarang SMAN 2 Soppeng,
                2012), kemudian melanjutkan pendidikan S1 di Universitas Islam
                Negeri (UIN) Alauddin Makassar pada Jurusan Pendidikan Biologi,
                Fakultas Tarbiyah dan Keguruan (2015).
              </Text>
              <Text style={[styles.p, styles.nextP]}>
                Pengembangan e-modul pembelajaran Biologi pada materi virus
                terintegrasi keilmuan Islam berbasis android ini dilakukan dalam
                rangka penyelesaian skripsi. Harapannya e-modul ini bermanfaat
                bagi banyak pengguna, khususnya bagi para pelajar. Segala saran
                dan masukan dari pengguna sangat penulis harapkan guna perbaikan
                modul kedepannya.
              </Text>
            </View>
            <View style={{paddingHorizontal: 16, marginVertical: 16}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Kontak dan Informasi
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: 16,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('mailto:20500115004@uin-alauddin.ac.id')
                  }
                  style={{
                    backgroundColor: '#D93025',
                    padding: 10,
                    borderRadius: 5,
                    marginRight: 32,
                  }}>
                  <Icon name="gmail" color="#fff" size={28} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:+6285242189674')}
                  style={{
                    backgroundColor: '#54A755',
                    padding: 10,
                    borderRadius: 5,
                    marginRight: 32,
                  }}>
                  <Icon name="phone" color="#fff" size={28} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://www.instagram.com/faridkhuzairi15/?hl=en',
                    )
                  }
                  style={{
                    backgroundColor: '#833AB4',
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Icon name="instagram" color="#fff" size={28} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  viewP: {paddingHorizontal: 16, marginTop: 16},
  p: {textAlign: 'justify', lineHeight: widthPercentageToDP('8')},
  nextP: {marginTop: 0},
  firstLetter: {
    color: mainColor,
    fontSize: 64,
  },
  viewSign: {alignSelf: 'flex-end', paddingHorizontal: 16, marginVertical: 16},
});

export default Profil;
