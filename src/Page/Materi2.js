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
import ImageMateri from '../Component/ImageMateri';
import {dataAyat} from '../constants/dataAyat';
import Icon from 'react-native-vector-icons/Entypo';

const Materi2 = ({navigation, route}) => {
  const backAction = () => {
    if (route.name === 'Materi2') {
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

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Uraian Materi 2'} />
        <ScrollView>
          {/* Reproduksi Virus */}
          <View style={styles.main}>
            <View style={styles.head}>
              <Text style={styles.title}>A. Reproduksi Virus</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>
                Virus berkembang biak dengan cara replikasi (perbanyakan diri)
                di dalam sel inang. Energi dan bahan untuk sintesis protein
                virus berasal dari sel inang. Asam nukleat virus membawa
                informasi genetik untuk menyandikan semua makromolekul pembentuk
                virus di dalam sel inang sehingga virus baru yang terbentuk
                memiliki sifat yang sama dengan sel induk. Ciri yang menunjukkan
                virus dapat dapat berreproduksi adalah jika berinteraksi dengan
                sel inang, virion akan pecah, dan terbentuk partikel-partikel
                turunan virus. Keberhasilan virus dalam berreproduksi bergantung
                pada jenis virus dan kondisi ketahanan sel inang. Reproduksi
                virus dapat terjadi melalui siklus litik dan siklus lisogenik.
              </Text>
              {/* Siklus Litik */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                1. Siklus Litik
              </Text>
              <Text style={[styles.desc, {marginBottom: 0}]}>
                Disebut siklus litik karena pada fase akhir dari siklus ini
                terjadi peristiwa lisisnya dinding sel bakteri akibat
                terbentuknya banyak virus baru di dalam sel bakteri. Siklus
                litik terjadi apabila pertahanan sel inang lebih lemah
                dibandingkan daya infeksi virus sehingga tahapan reproduksinya
                dapat berlangsung cepat. Virus yang mampu berreproduksi dengan
                siklus litik disebut virus virulen. Pada siklus litik, sel inang
                akan pecah dan mati serta membentuk virion-virion baru.
                Tahapan/fase yang terjadi selama siklus litik adalah sebagai
                berikut:
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                a. Fase Adsorbsi
              </Text>
              <Text style={[styles.desc]}>
                Virus akan menempel pada reseptor khusus pada sel inang denggan
                mengunakan serat ekornya.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                b. Fase Penetrasi
              </Text>
              <Text style={[styles.desc, {marginBottom: 0}]}>
                Selubung ekor berkontraksi untuk membuat lubang yang menembus
                dinding dan membran sel. Selanjutnya, virus menginjeksikan
                materi genetiknya ke dalam sel inang sehingga kapsid virus
                menjadi kosong (mati).
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                c. Fase Sintesis/Eklifase
              </Text>
              <Text style={[styles.desc]}>
                DNA sel inang dihidrolisis dan dikendalikan oleh materi genetik
                virus untuk membuat asam nukleat (salinan genom) dan protein
                komponen virus.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                d. Fase Perakitan/Pematangan
              </Text>
              <Text style={styles.desc}>
                Hasil sintesis berupa asam nukleat dan protein dirakit menjadi
                partikel-partikel virus yang lengkap sehingga terbentuk
                virion-virion baru.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                e. Fase Lisis
              </Text>
              <Text style={[styles.desc, {marginBottom: 0}]}>
                Fag menghasilkan lisozim, yaitu enzim perusak dinding sel inang.
                Rusaknya dinding sel inang mengakibatkan terjadinya osmosis ke
                dalam sel inang, sehingga sel inang membesar dan akhirnya pecah.
                Partikel virus baru yang keluar dari sel akan menyerang sel
                inang lainnya.
              </Text>
              <ImageMateri
                uri={require('../assets/image/m2/a1.jpg')}
                title={'Siklus Litik'}
                source={
                  'http://www.referensibebas.com/2016/03/tahapan-siklus-litik-pada-replikasi.html'
                }
                nav={navigation}
              />
              {/* Siklus Lisogenik */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                2. Siklus Lisogenik
              </Text>
              <Text style={[styles.desc, {marginBottom: 0}]}>
                Disebut siklus lisogenik karena terjadi proses penyatuan DNA
                virus dengan DNA bakteri, penyatuan DNA tersebut disebut dengan
                istilah lisogeni. Siklus lisogenik terjadi apabila sel inang
                memiliki pertahanan yang lebih baik dibandingkan daya infeksi
                virus sehingga sel inang tidak segera pecah, bahkan dapat
                berreproduksi secara normal (membelah diri). Pada siklus
                lisogenik, terjadi replikasi genom virus, tetapi tidak
                menghancurkan sel inang. DNA fag berinteraksi ke dalam kromosom
                sel inang membentuk profag. Jika sel inang yang mengandung
                profag membelah diri untuk berreproduksi, profag akan diwariskan
                kepada kedua sel anaknya. Profag di dalam sel anak inang dapat
                menjadi aktif dan keluar dari kromosom sel inang untuk memasuki
                tahap-tahap dalam siklus litik. Virus yang dapat bereproduksi
                dengan siklus lisogenik dan siklus litik disebut virus temperat.
                Tahapan/fase yang terjadi selama siklus lisogenik adalah sebagai
                berikut:
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                a. Fase Adsorbsi
              </Text>
              <Text style={[styles.desc]}>Virus menempel pada bakteri.</Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                b. Fase Penetrasi
              </Text>
              <Text style={[styles.desc]}>
                Virus memasukkan DNA ke dalam sel bakteri.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                c. Fase Penyisipan
              </Text>
              <Text style={[styles.desc]}>
                DNA virus akan menyatu dengan DNA bakteri/sel inang. DNA virus
                yang menyatu namun tidak aktif ini disebut dengan istilah
                profage.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                d. Fase Penggandan
              </Text>
              <Text style={styles.desc}>
                Ketika bakteri menggandakan diri, profage akan ikut tergandakan
                juga sehingga bakteri-bakteri anak juga mengandung profage
                tersebut.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                e. Fase Pemisahan
              </Text>
              <Text style={[styles.desc]}>
                Jika keadaan lingkungan mendukung, profage akan memisahkan diri
                dari DNA bakteri untuk melakukan sintesis bagian virus baru.
              </Text>
              <Text
                style={{fontSize: 16, marginHorizontal: 12, marginBottom: 12}}>
                f. Virus akan memasuki siklus litik
              </Text>
              <ImageMateri
                uri={require('../assets/image/cover2.jpg')}
                title={'Siklus Lisogenik'}
                source={
                  'http://literasibio.blogspot.co.id/2015/12/siklus-hidup-virus-siklus-litik-dan_30.html'
                }
                nav={navigation}
              />
            </View>
          </View>
          {/* Klasifikasi Virus */}
          <View style={styles.main}>
            <View style={styles.head}>
              <Text style={styles.title}>B. Klasifikasi Virus</Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                1. Klasifikasi Berdasarkan Sel Inangnya
              </Text>
              <Text style={styles.desc}>
                Berdasarkan sel inangnya, virus dibagi menjadi:
              </Text>
              {_renderCiri(
                'a. ',
                'Virus yang menyerang bakteri, contohnya: Bakteriofag.',
              )}
              {_renderCiri(
                'b. ',
                'Virus yang menyerang hewan, contohnya: virus rabies (Rhabdovirus).',
              )}
              {_renderCiri(
                'c. ',
                'Virus yang menyerang tumbuhan, contohnya: virus tembakau (TMV atau Tobacco Mozaik Virus.',
              )}
              {_renderCiri(
                'd. ',
                'Virus yang menyerang manusia, contohnya: HIV atau Human Immunodeficiency Virus).',
              )}

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                  marginTop: 16,
                }}>
                2. Klasifikasi Berdasarkan Asam Nukleatnya
              </Text>
              <Text style={styles.desc}>
                Berdasarkan jenis materi genetiknya, virus dibagi menjadi dua
                macam, yaitu virus DNA dan virus RNA.
              </Text>
              {_renderCiri(
                'a. ',
                'Virus DNA, yaitu virus yang mengandung DNA contohnya Parvovirus, Papovavirus, Adenovirus, dan Herpesvirus.',
              )}
              {_renderCiri(
                'b. ',
                'Virus RNA, yaitu virus yang mengandung RNA contohnya Picornavirus, Togavirus, Flavivirus, Calicivirus, Coronavirus, Paramyxovirus, Rhabdovirus, Filovirus, Orthomyxovirus, Bunyavirus, Arenavirus, Reovirus, dan Retrovirus.',
              )}
              <Text style={styles.desc}>
                Menurut sistem ICTV (International Committee on Taxonomy
                Viruses), terdapat tiga tingkatan takson dalam klasifikasi
                virus, yaitu famili, genus, dan spesies.
              </Text>
              <Text style={{fontSize: 16, marginLeft: 32, marginBottom: 12}}>
                a. Famili
              </Text>
              <Text style={styles.desc}>
                Nama pada famili virus menggunakan akhiran –viridae.
              </Text>
              <Text style={{fontSize: 16, marginLeft: 32, marginBottom: 12}}>
                b. Genus
              </Text>
              <Text style={styles.desc}>
                Nama pada genus menggunakan akhiran –virus.
              </Text>
              <Text style={{fontSize: 16, marginLeft: 32, marginBottom: 12}}>
                c. Spesies
              </Text>
              <Text style={styles.desc}>
                Nama pada spesies menggunakan bahasa Inggris dan diakhiri
                dengan–virus
              </Text>
            </View>
          </View>
          {/* Integrasi Keilmuan */}
          <View style={styles.main}>
            <View style={[styles.head, {justifyContent: 'center'}]}>
              <Text style={styles.title}>Integrasi Keilmuan Islam</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>
                Ayat yang berkaitan dengan materi QS. Ali Imran (3): 27
              </Text>
              <Text style={styles.ayat}>{dataAyat.ayat2}</Text>
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
                  {dataAyat.ter2}
                </Text>
              </View>
              <Text style={[styles.desc, {marginTop: 16}]}>
                Ayat di atas menjelaskan tentang kejadian virus sebagai suatu
                benda unik dalam rangka untuk memikirkan tanda-tanda kebesaran
                Allah (tadabbur). Virus dalam Al-Quran disebut dengan istilah “
                <Text style={{fontStyle: 'italic'}}>binatang parasit</Text>”,
                yaitu makhluk yang hanaya dapat bergantung hidup dalam sel tubuh
                makhluk hidup lain dengan memakan sel tubuh inang, sehingga
                dapat dikategorikan sebagai makhluk hidup. Begitu pula
                dikategorikan makhluk mati, karena dapat dikristalkan apabila
                keluar dari sel inang sehingga disebut juga suatu partikel.
              </Text>
              <Text style={[styles.desc, {marginTop: -16}]}>
                Melalui ayat ini Allah menunjukkan kekuasaan-Nya melakukan
                perubahan-perubahan menyangkut alam raya, itu pun berdasarkan
                hukum-hukum alam yang ditetapkan-Nya. Dia mengeluarkan yang
                hidup dari yang mati, dan mengeluarkan yang mati dari yang
                hidup. Dari seorang mukmin yang hatinya hidup lahir seorang
                kafir yang hatinya mati, atau sebaliknya; sekian banyak orang
                kafir yang hatinya mati melahirkan putra-putri beriman. Dari
                benda yang mati, seperti virus yang masuk ke dalam tubuh menjadi
                penyakit. Dari yang hidup, seperti manusia yang mengeluarkan
                virus melalui bersin dan batuk.
              </Text>
              <Text style={styles.desc}>
                Ayat ini menunjukkan, betapa kuasanya Allah swt., sekaligus
                menanamkan optimisme ke dalam hati setiap muslim yang dirundung
                malang. Allah mengeluarkan yang hidup dari sesuatu yang mati dan
                sebaliknya. dan yang diajarkan untuk diucapkan dalam bentuk
                pernyataan dan doa.
              </Text>
              <Text style={styles.desc}>
                Apabila Allah menyuruh Rasul-Nya membaca ayat ini sebagai doa,
                dan kemudian kita baca pula sebagai doa, terlepaslah kita dari
                suasana terombang-ambing melihat perubahan keadaan dan suasana
                di dalam alam ini. Dan tertujulah rasa Tauhid, yaitu
                menghimpunkan kekuasaan dan kemuliaan kepada Yang Satu. Maka
                bersyukurlah kepada Allah ketika diberi-Nya kumia dan
                bersabarlah atas percobaaNya seketika Dia cabut. Tetapi apabila
                iman ad`a dalam hati, perobahan keadaan tidaklah akan merobah
                hati. Sebab semua kita dari Allah dan akan kembali kepada Allah.
              </Text>
            </View>
          </View>
          {/* Kegiatan */}
          <View style={styles.main}>
            <View style={[styles.head]}>
              <Icon name="text-document" color={'#fff'} size={18} />
              <Text style={[styles.title, {marginLeft: 8}]}>
                Tes Formatif Materi 2
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tes2')}
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

export default Materi2;
