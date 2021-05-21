import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardDapus = () => {
  const _renderItem = (web, awal, mid, akhir) => {
    return (
      <View>
        <View
          style={{width: wp('92'), backgroundColor: '#CACFD2', height: 1}}
        />
        <View
          style={{
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 24,
          }}>
          {web ? (
            <Text
              style={{
                marginLeft: 16,
                fontSize: 16,
                textAlign: 'justify',
                maxWidth: wp('72'),
                fontStyle: 'italic',
              }}>
              {web}
            </Text>
          ) : (
            <Text
              style={{
                marginLeft: 16,
                fontSize: 16,
                textAlign: 'justify',
                maxWidth: wp('72'),
              }}>
              {awal} <Text style={{fontStyle: 'italic'}}>{mid}</Text> {akhir}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Icon name={'book'} color="#fff" size={18} />
        <Text style={styles.title}>Referensi</Text>
      </View>

      <View style={styles.body}>
        {_renderItem(
          '',
          'Hamka. 2015.',
          'Tafsir Al- Azhar.',
          'Depok: Gema Insani Press.',
        )}
        {_renderItem(
          '',
          'Irnaningtyas. 2013.',
          'Biologi untuk SMA/MA Kelas X Kelompok Peminatan Matematika dan Ilmu Alam.',
          'Jakarta: Erlangga.',
        )}
        {_renderItem(
          '',
          'Pahmi, Khairil dan Natsir Abdullah. 2021.',
          'Mengkaji Sifat-Sifat Virus Dalam Al-Qur’an untuk Mentadabburi Isi Al-Qur’an',
          'Indonesian Scholars Network.',
        )}
        {_renderItem(
          '',
          'al-Raziy, Al-Fakhr. 1995.',
          `al-Tafsir al-Kabir. Beirut: Dar Ihya' al-Turath al-'Arabiy.`,
          '',
        )}
        {_renderItem(
          '',
          'Shihab, Quraish. 2005.',
          `Tafsir Al- Mishba.`,
          'Jakarta: Penerbit Lentera Hati.',
        )}
        {_renderItem(
          '',
          'Wathoni, Lalu Muhammad Nurul dan Nursyamsu. 2020.',
          `Tafsir Virus, Fauqa Ba’udhah: Korelasi Covid-19 dengan Ayat-ayat Allah.`,
          'Jurnal el-Umdah 3, No. 1.',
        )}
        {_renderItem(
          '',
          'Yusa, dkk. 2016.',
          'Buku Saku Aktif dan Kreatif Biologi untuk Sekolah Menengah Atas/Madrasah Aliyah Kelas X Peminatan Matematika dan Ilmu Alam.',
          'Bandung: Grafindo Media Pratama.',
        )}

        {_renderItem(
          'http://aisyah-islamia.blogspot.co.id/2013/09/struktur-virus.html.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://doctorology.net/wp-content/uploads/2009/hiv.jpg.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'https://i.ytimg.com/vi/Di9SoR8ihJs/hqdefault.jpg.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://literasibio.blogspot.co.id/2015/12/siklus-hidup-virus-siklus-litik-dan_30.html.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://muhammadnurawal.blogspot.co.id/2011/12/struktur-tubuh-virus-dan-penjelasannya.html.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://www.ebiologi.com/2016/03/struktur-tubuh-macam-macam-bentuk-virus.html.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://www.referensibebas.com/2016/03/tahapan-siklus-litik-pada-replikasi.html.',
          '',
          '',
          '',
        )}
        {_renderItem(
          'http://www.tutor.com.my/creative/sep/image/SPM_BI2m3.jpg.',
          '',
          '',
          '',
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 16,
    width: wp('92'),
    alignSelf: 'center',
    borderWidth: 0.4,
    borderColor: 'rgba(0,0,0,0.32)',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    zIndex: 1.2,
    elevation: 1.2,
  },
  head: {
    backgroundColor: mainColor,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  },
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default CardDapus;
