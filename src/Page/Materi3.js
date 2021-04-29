import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import HeaderMateri from '../Component/HeaderMateri';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {mainColor} from '../constants/color';
import {dataAyat} from '../constants/dataAyat';
import Icon from 'react-native-vector-icons/Entypo';
import {dataKegiatan1} from '../constants/dataKegiatan';

const Materi3 = ({navigation, route}) => {
  const backAction = () => {
    if (route.name === 'Materi3') {
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
        <Text style={{fontSize: 16, fontStyle: 'italic'}}>{num}</Text>
        <Text style={{textAlign: 'justify', fontSize: 16, fontStyle: 'italic'}}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Uraian Materi 3'} />
        <ScrollView>
          {/* Reproduksi Virus */}
          <View style={styles.main}>
            <View style={styles.head}>
              <Text style={styles.title}>
                A. Peranana Virus Dalam Kehidupan
              </Text>
            </View>
            <View style={styles.body}>
              {/* Menguntungkan */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                Menguntungkan
              </Text>
              {_renderCiri('a. ', 'Dalam Teknologi Rekayasa Genetika')}
              <Text style={[styles.desc]}>
                Peranan virus misalnya untuk terapi gen, yaitu upaya perbaikan
                informasi genetik dengan memperbaiki susunan basa nitrogen pada
                untaian DNA di dalam gen. Salah satu keberhasilan teknik ini
                adalah memperbaiki kelainan genetik ADD (adenosine deaminase
                deficiency) yang menyebabkan seseorang tidak memiliki daya tahan
                tubuh karena tidak adanya enzim AD (adenosine deaminase). Dalam
                teknik terapi gen, Retrovirus digunakan sebagai vektor untuk
                memasukkan gen pengkode enzim AD ke dalam sel limfosit T yang
                abnormal.
              </Text>
              {_renderCiri('b. ', 'Pembuatan Vaksin Protein')}
              <Text style={[styles.desc]}>
                Selubung virus dapat digunakan sebagai protein khusus yang akan
                memacu terbentuknya respons kekebalan tubuh melalui suatu
                penyakit. Contohnya adalah pembuatan vaksin cacar.
              </Text>
              {_renderCiri('c. ', 'Pengobatan Secara Biologis')}
              <Text style={[styles.desc]}>
                Dengan cara melemahkan atau membunuh bakteri, jamur, atau
                protozoa yang bersifat patogen. Bakteriofag misalnya dapat
                digunakan untuk membunuh bakteri patogen.
              </Text>
              {_renderCiri('d. ', 'Pemberantasan Serangga Hama')}
              <Text style={[styles.desc]}>
                Beberapa virus hidup parasit pada serangga. Virus tersebut
                dibiakkan dan digunakan untuk menyemprot serangga atau tanaman,
                misalnya Baculovirus. Sejak tahun 1950, Baculovirus digunakan
                sebagai bioinsektisida yang tidak mencemari lingkungan.
              </Text>
              {_renderCiri('e. ', 'Untuk Membuat Perangkat Elektronik')}
              <Text style={[styles.desc]}>
                Tim ilmuwan dari John Innes Center (pusat mikrobiologi di
                Inggris) berhasil menginokulasi partikel virus, kemudian
                mencampurnya dengan senyawa besi (Fe) untuk membuat kapasitor
                (alat penyimpanan energi listrik).
              </Text>
              {/* Merugikan */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                Merugikan
              </Text>
              {/* Penyakit pada Manusia */}
              {_renderCiri('a. ', 'Menyebabkan Penyakit pada Manusia')}
              <Text style={[styles.desc, {marginBottom: 8}]}>
                1) AIDS (acquired immunodeficiency syndrome) merupakan penyakit
                hilangnya sistem kekebalan tubuh. Penyakit ini disebabkan oleh
                HIV (human immunodeficiency virus) dari genus Lentivirus, family
                Retroviridae, subfamily Lentivirinae yang menyerang sel limfosit
                T CD4.
              </Text>
              <Text style={[styles.desc, {marginBottom: 8}]}>
                2) Hepatitis merupakan penyakit gangguan fungsi hati dan saluran
                empedu yang dapat menyebabkan kematian. Terdapat penyakit
                Hepatitis A (disebabkan oleh virus HIV dari genus Heparnavirus),
                Hepatitis B (disebabkan oleh virus HBV dari genus
                Orthohepadnavirus), Hepatitis C (disebabkan oleh virus HCV dari
                genus Hepacivirus), Hepatitis D (disebabkan oleh virus HDV dari
                genus Deltavirus), dan Hepatitis E (disebabkan oleh virus HEV
                dari genus Hervesvirus.
              </Text>
              <Text style={[styles.desc, {marginBottom: 8}]}>
                3) Campak (morbili) merupakan penyakit yang disebabkan oleh
                infeksi Morbillivirus. Gejala penyakit ini yaitu demam, bersin,
                batuk, pilek, mata merah, dan timbul ruam bercak cokelat pada
                kulit. Pencegahan penyakit ini bisa dilakukan dengan melakukan
                vaksin.
              </Text>
              <Text style={[styles.desc, {marginBottom: 8}]}>
                4) Herpes adalah penyakit infeksi pada sel epitel. Setelah
                terjadi infeksi, virus tidak akan keluar dari tubuh dan tetap
                laten pada sel-sel saraf. Penyakit ini dapat menular melalui
                kontak langsung dengan cairan yang berasal dari jaringan epitel
                yang terinfeksi. Herpes disebut juga demam lepuh. Penyebabnya
                adalah virus herpes simplex (HSV-1 dan HSV 2).
              </Text>
              <Text style={[styles.desc, {marginBottom: 8}]}>
                5) Influenza merupakan penyakit pernafasan yang terkadang
                mewabah di beberapa bagian dunia. Gejala influenza timbul
                mendadak dengan gejala tubuh menggigil, sakit kepala, batuk
                kering, demam, dan nyeri otot menyeluruh.Influenza disebabkan
                oleh kelompok virus Orthomyxovirus yang berbentuk bulat dengan
                diameter 100 nm. Virus influenza menyerang sel-sel saluran
                pernafasan dan mudah menyebar dari orang ke orang saat batuk,
                bersin, atau melalui kontak tangan yang terkontaminasi.
              </Text>
              <Text style={[styles.desc, {marginBottom: 8}]}>
                6) Ebola merupakan penyakit mematikan. Virus ebola diketahui
                muncul pertama kali di Zaire, Afrika Tengah, pada tahun 1976 dan
                diperkirakan ditularkan ke manusia melalui babi yang terinfeksi.
                Virus ini menyerang sel darah putih makrofag, jaringan
                fibroblas, kemudian menyebar ke organ-organ tubuh sehingga
                menyebabkan pendarahan dan kematian pada penderitanya.
              </Text>
              <Text style={[styles.desc]}>
                7) Demam Berdarah ditandai gejala tubuh menggigil dan sakit
                kepala. Rasa sakit segera timbul khususnya pada punggung, sendi,
                otot, dan bola mata. Suhu tubuh kembali normal setelah 5-6 hari
                dan meningkat kembali sekitar 5-8 hari kemudian. Bercak-bercak
                merah akan timbul dan berlangsung selama 24-72 jam. Kadar
                trombosit dalam darah akan menurun dan kondisi paling parah
                adalah terjadinya pendarahan yang menyebabkan kematian. Demam
                berdarah merupakan penyakit epidemi (wabah) di Filipina, India,
                dan Indonesia dengan angka kematian 9-10%.
              </Text>
              <Text style={[styles.desc, {marginBottom: 24}]}>
                Demam berdarah disebabkan oleh virus dengue (Flavivirus) melalui
                gigitan nyamuk Aedes aegypti.
              </Text>
              {/* Penyakit pada Hewan */}
              {_renderCiri('b. ', 'Menyebabkan Penyakit pada Hewan')}
              <Text style={[styles.desc, {marginBottom: 8}]}>
                1) Rabies merupakan infeksi akut pada susunan saraf pusat yang
                disebabkan oleh Rhabdovirus yang dapat menular ke manusia
                melalui gigitan atau air liur hewan penderita, misalnya anjing,
                serigala, kucing, dan sebagainya.
              </Text>
              <Text style={[styles.desc, {marginBottom: 24}]}>
                2) Tetelo atau parrot fever merupakan penyakit yang terjadi pada
                unggas dengan gejala diare, batuk-batuk, dan kehilangan
                keseimbangan sehingga tubuhnya berputar-putar dengan kepala
                tertekuk. Penyakit ini disebabkan oleh virus NCD (newcastle
                disease) dan bersifat mudah menular. Tetelo dapat menyebabkan
                kematian hewan ternak.
              </Text>
              {/* Penyakit pada Tumbuhan */}
              {_renderCiri('c. ', 'Menyebabkan Penyakit pada Tumbuhan')}
              <Text style={[styles.desc, {marginBottom: -8}]}>
                1) Tungro. Virus tungro yang berasal dari family Caulimoviridae
                dapat menyerang tanaman padi yang menyebabkan sel-sel daun mati
                sehingga pertumbuhan terganggu dan kerdil. Penyebaran virus ini
                melalui perantaraan wereng cokelat dan wereng hijau.
              </Text>
              <Text style={[styles.desc]}>
                2) Mosaik. Penyakit mosaik dapat terjadi pada daun tembakau,
                kacang tanah, papaya, cabai, tomat,
              </Text>
            </View>
          </View>
          {/* Integrasi Keilmuan */}
          <View style={styles.main}>
            <View style={[styles.head, {justifyContent: 'center'}]}>
              <Text style={styles.title}>Integrasi Keilmuan Islam</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>Q.S. Al- Hadid (57): 22</Text>
              <Text style={styles.ayat}>{dataAyat.ayat3}</Text>
              <View
                style={{
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  marginRight: wp('32'),
                }}>
                <Text style={{marginRight: 16}}>Terjemahnya:</Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    textAlign: 'justify',

                    fontStyle: 'italic',
                  }}>
                  {dataAyat.ter3}
                </Text>
              </View>
              <Text style={[styles.desc, {marginTop: 16}]}>
                Ayat di atas menyatakan:{' '}
                <Text style={{fontStyle: 'italic'}}>
                  tiada suatu bencana pun yang menimpa kamu atau siapa pun di
                  bumi, seperti kekeringan, longsor, gempa, banjir, paceklik,
                  dan tidak pula pada diri kamu sendiri, seperti penyakit,
                  kemiskinan, kematian, dan lain-lain, melainkan telah tercatat
                  dalam kitab
                </Text>
                , yakni Lauh Mahfuzh dan atau ilmu Allah yang meliputi segala
                sesuatu, sebelum Kami menciptakannya, yakni sebelum terjadinya
                musibah itu. Sesungguhnya yang demikian itu, yakni pengetahuan
                dan pencatatan itu bagi Allah adalah sangat mudah karena
                ilmu-Nya mencakup segala sesuatu dan kuasa-Nya tidak terhalangi
                oleh apa pun.
              </Text>
              <Text style={styles.desc}>
                Kami menyampaikan hakikat itu kepada kamu semua supaya kamu
                jangan berduka cita secara berlebihan dan melampaui kewajaran
                sehingga berputus asa terhadap apa, yakni hal-hal yang kamu
                sukai, yang luput dari kamu, dan supaya kamu juga jangan terlalu
                gembira sehingga bersikap sombong dan lupa daratan terhadap apa
                yang diberikan-Nya kepada kamu. Karena sesungguhnya, Allah tidak
                menyukai setiap orang yang berputus asa akibat kegagalan dan
                Allah tidak menyukai juga setiap orang yang sombong lagi
                membanggakan diri dengan sukses yang diperolehnya.
              </Text>
            </View>
          </View>
          {/* Kegiatan */}
          <View style={styles.main}>
            <View style={[styles.head]}>
              <Icon name="text-document" color={'#fff'} size={18} />
              <Text style={[styles.title, {marginLeft: 8}]}>
                Tes Formatif Materi 3
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tes3')}
              style={{
                backgroundColor: '#85A83F',
                flexDirection: 'row',
                paddingHorizontal: 12,
                paddingVertical: 16,
                alignItems: 'center',
              }}>
              <Icon name="flag" color={'#fff'} size={24} />
              <Text style={[styles.title, {marginLeft: 16, fontSize: 24}]}>
                Mulai
              </Text>
            </TouchableOpacity>
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

export default Materi3;
