import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Header from '../Component/Header';
import {mainColor} from '../constants/color';

import Loading from '../Component/Loading';

const Pendahuluan = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Pendahuluan'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <ScrollView>
            <View style={styles.viewP}>
              <Text style={styles.p}>
                <Text style={styles.firstLetter}>P</Text>
                uji syukur tiada terhingga penulis panjatkan atas kehadirat
                Allah subhaanahu wata'ala, karena atas berkat rahmat, taufik dan
                Hidayah-Nya sehingga penulis dapat menyelesaikan{' '}
                <Text style={{fontWeight: 'bold'}}>
                  E-modul Pembelajaran Biologi Berbasis Android Terintegrasi
                  Keilmuan Islam Untuk Peserta Didik SMA/MA Kelas X IPA Semester
                  Ganjil.
                </Text>{' '}
                Shalawat dan salam atas junjungan dan suri tauladan kita Nabi
                Besar Muhammad sallallahu alaihi wassallam, beserta para
                keluarganya, para sahabatnya, dan para umatnya hingga akhir
                zaman.
              </Text>
              <Text style={[styles.p, styles.nextP]}>
                E-modul pembelajaran biologi ini, disusun sistematis sebagai
                bahan ajar mandiri bagi peserta didik tanpa bimbingan dari
                pendidik. Bahan ajar ini diharapkan dapat membantu peserta didik
                terutama peserta didik SMA/MA kelas X dalam memahami isi materi
                yang harus dikuasai. Selain itu dapat memberikan pengetahuan
                tambahan melalui integrasi keilmuan Islam yang dapat dijadikan
                sebagai pegangan dasar akidah Islam.
              </Text>
              <Text style={[styles.p, styles.nextP]}>
                Materi dibuat berdasarkan silabus kurikulum 2013 revisi tahun
                2016 mata pelajaran Biologi kelas X semester 1 Kompetensi Dasar
                3.4. Menganalisis struktur dan replikasi, serta peran virus
                dalam aspek kesehatan masyarakat, dan Kompetensi Dasar 4.4.
                Melakukan kampanye tentang bahaya virus dalam kehidupan terutama
                bahaya AIDS berdasarkan tingkat virulensinya melalui berbagai
                media informasi.
              </Text>
              <Text style={[styles.p, styles.nextP]}>
                Penulis menyampaikan rasa hormat dan terima kasih kepada semua
                pihak yang telah membantu dalam penyelesaian e-modul ini.
                Penulis berharap e-modul pembelajaran biologi berbasis android
                yang terintegrasi keilmuan Islam ini dapat membantu dalam proses
                pembelajaran dan dapat bermanfaat dalam mengembangkan
                pengetahuan sehingga peserta didik mampu menerapkan ilmu yang
                diperoleh dalam kehidupan sehari-hari. Penulis menyadari bahwa
                penyusunan e-modul ini masih terdapat kekurangan maka dari itu
                penulis menerima saran dan kritik yang membangun dari pembaca
                untuk perbaikan e-modul ini dimasa yang akan datang.
              </Text>
            </View>
            <View style={styles.viewSign}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 20}}>Makassar,</Text>
                <Text>Maret 2020</Text>
              </View>
              <Text style={{marginTop: 4}}>Penyusun</Text>
              <Text style={{marginTop: 30}}>A. Muh. Farid Khuzairi</Text>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  viewP: {paddingHorizontal: 16},
  p: {textAlign: 'justify'},
  nextP: {marginTop: 16},
  firstLetter: {
    color: mainColor,
    fontSize: 64,
  },
  viewSign: {alignSelf: 'flex-end', paddingHorizontal: 16, marginVertical: 16},
});

export default Pendahuluan;
