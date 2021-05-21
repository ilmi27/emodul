import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderMateri from '../Component/HeaderMateri';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {mainColor} from '../constants/color';
import ImageMateri from '../Component/ImageMateri';
import {dataAyat} from '../constants/dataAyat';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Loading from '../Component/Loading';

const Materi1 = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);

  const backAction = () => {
    if (route.name === 'Materi1') {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <HeaderMateri navigation={navigation} title={'Uraian Materi 1'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <ScrollView>
            {/* Sejarah Penemuan Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>A. Sejarah Penemuan Virus</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Virus berasal dari bahasa Latin,{' '}
                  <Text style={{fontStyle: 'italic'}}>“virion”</Text> yang
                  berarti racun. Kata tersebut merujuk pada banyaknya penyakit
                  yang diakibatkan oleh virus, dan dipelajari dalam bidang
                  virologi. Virus hanya dapat bereplikasi di dalam sel/jaringan
                  hidup sehingga disebut{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    parasit obligat intraseluler
                  </Text>
                  . Biasanya virus mengandung sejumlah kecil asam nukleat (DNA
                  atau RNA, tetapi tidak kombinasi keduanya) yang diselubungi
                  semacam bahan pelindung yang terdiri atas protein, lipid,
                  glikoprotein, atau kombinasi ketiganya.
                </Text>
                <Text style={styles.desc}>
                  Virus dapat bertindak sebagai agen penyakit dan agen pewaris
                  sifat. Sebagai agen penyakit, virus memasuki sel dan
                  menyebabkan perubahan-perubahan yang membahayakan bagi sel,
                  yang akhirnya dapat merusak atau bahkan menyebabkan kematian
                  pada sel yang diinfeksinya. Sebagai agen pewaris sifat, virus
                  memasuki sel dan tinggal di dalam sel tersebut secara
                  permanen. Perubahan yang diakibatkannya tidak membahayakan
                  bagi sel atau bahkan bersifat menguntungkan. Dalam beberapa
                  kasus, virus dapat bertindak sebagai agen penyakit atau
                  sebagai agen pewaris sifat tergantung dari sel-sel inangnya
                  dan kondisi lingkungan.
                </Text>
                <Text style={styles.desc}>
                  Virus pertama kali ditemukan oleh ilmuwan Jerman,{' '}
                  <Text style={{fontWeight: 'bold'}}>Adolf Mayer</Text> pada
                  tahun 1883 ketika sedang meneliti penyebab penyakit
                  bintik-bintik kuning pada tanaman tembakau. Mayer melakukan
                  percobaan dengan menyemprotkan getah tanaman tembakau yang
                  terserang penyakit bintik kuning ke tanaman tembakau yang
                  sehat. Hasilnya, tanaman yang sehat menjadi ikut terserang dan
                  mengalami penyakit serupa. Dengan hasil ini, Mayer
                  menyimpulkan bahwa, ada suatu mikroorganisme yang ukurannya
                  jauh lebih kecil dari bakteri yang dapat menginfeksi tanaman
                  tembakau.
                </Text>
                <ImageMateri
                  uri={require('../assets/image/m1/a1.jpg')}
                  title={'Percobaan Adolf Mayer'}
                  source={'simakgadingserpong.bpkpenaburjakarta.or.id'}
                  nav={navigation}
                />
                <Text style={styles.desc}>
                  Percobaan yang dilakukan Mayer membuat ilmuan Rusia,{' '}
                  <Text style={{fontWeight: 'bold'}}>Dimitri Ivanovski</Text>{' '}
                  menjadi penasaran. Pada masa itu (tahun 1892), suatu filter
                  yang dapat menyaring bakteri telah ditemukan oleh Lembaga
                  Pasteur di Paris. Filter tersebut kemudian digunakan Ivanovski
                  untuk mengulangi penelitian Mayer. Ivanovski menyaring getah
                  tembakau yang terserang bintik kuning menggunakan penyaring
                  bakteri untuk membuktikan bahwa penularan bukan disebabkan
                  oleh infeksi bakteri. Getah yang sudah disaring kemudian
                  dioleskan pada tanaman sehat. Hasilnya, tanaman tembakau sehat
                  masih tetap terserang. Dengan hasil tersebut, ia kemudian
                  menyimpulkan bahwa, ada bakteri patogen atau zat kimia hasil
                  produksi bakteri yang berukuran sangat kecil sehingga dapat
                  lolos dari penyaring bakteri.
                </Text>
                <ImageMateri
                  uri={require('../assets/image/m1/dmitri.png')}
                  title={'Dimitri Ivanovski, 1864-1920'}
                  nav={navigation}
                />
                <ImageMateri
                  uri={require('../assets/image/m1/a2.jpg')}
                  title={'Percobaan Dimitri Ivanovski'}
                  source={
                    'http://aisyah-islamia.blogspot.co.id/2013/09/struktur-virus.html'
                  }
                  nav={navigation}
                />
                <Text style={[styles.desc]}>
                  Pada tahun 1897, seorang ahli botani Belanda bernama{' '}
                  <Text style={{fontWeight: 'bold'}}>Martinus Beijerinck</Text>{' '}
                  melakukan eksperimen yang membuktikan bahwa agen penginfeksi
                  yang terdapat di dalam getah tembakau dapat berkembangbiak.
                  Beijerinck menyemprotkan getah yang telah disaring ke tanaman
                  lainnya. Setelah tanaman tersebut sakit, maka getahnya
                  digunakan untuk menginfeksi tanaman berikutnya, dan seterusnya
                  hingga beberapa kali pemindahan. Ternyata kemampuan patogen
                  tersebut tidak berkurang setelah beberapa kali pemindahan.
                  Berbeda dengan bakteri, agen penginfeksi tersebut tidak dapat
                  dikembangbiakkan dalam medium nutrisi di dalam cawan petri dan
                  tidak dapat dinonaktifkan dengan alkohol. Dengan pengamatannya
                  itu, ia kemudian menyimpulkan bahwa, organisme yang
                  menyebabkan penyakit bintik kuning pada tembakau tersebut
                  memiliki ukuran yang sangat kecil. Mikroorganisme ini juga
                  diduga hanya dapat hidup dengan menumpang pada mahkluk hidup
                  yang diinfeksi olehnya. Meskipun sudah memiliki kesimpulan,
                  Beijerinck masih belum dapat menemukan jenis dan struktur dari
                  mikroorganisme tersebut.
                </Text>
                <ImageMateri
                  uri={require('../assets/image/m1/martinus.png')}
                  title={'Martinus Beijerinck, 1851-1931'}
                  nav={navigation}
                />
                <ImageMateri
                  uri={require('../assets/image/m1/a3.jpg')}
                  title={'Percobaan Martinus Beijerinck'}
                  source={
                    'http://aisyah-islamia.blogspot.co.id/2013/09/struktur-virus.html'
                  }
                  nav={navigation}
                />
                <Text style={styles.desc}>
                  Pada tahun 1935, seorang ilmuwan Amerika,{' '}
                  <Text style={{fontWeight: 'bold'}}>Wendell Stanley</Text>{' '}
                  berhasil mengisolasi dan mengkristalkan partikel penyebab
                  penyakit bintik kuning yang menyerang tembakau. Partikel
                  mikroskopis ini kemudian diberi nama Tobacco Mosaic Virus
                  (TMV). Sejak saat itu, penelitian lebih dalam terkait
                  keberadaan virus semakin banyak dilakukan. Para ilmuan
                  berlomba-lomba mengidentifikasi keberadaan virus dalam cabang
                  ilmu virologi untuk menemukan hal-hal baru yang belum pernah
                  ada dalam sejarah penemuan virus sebelumnya.
                </Text>
                <ImageMateri
                  uri={require('../assets/image/m1/a4.jpg')}
                  title={'Wendell Stanley berhasil mengkristalkan TMV'}
                  source={'https://i.ytimg.com/vi/Di9SoR8ihJs/hqdefault.jpg'}
                  nav={navigation}
                />
              </View>
            </View>
            {/* Ukuran dan Bentuk Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>B. Ciri-Ciri Virus</Text>
              </View>
              <View style={styles.body}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    color: '#000',
                  }}>
                  Berikut ciri-ciri virus secara umum:
                </Text>
                {_renderCiri(
                  '1. ',
                  'Tubuh virus bukan merupakan suatu sel (aseluler) karena tidak memiliki organel-organel sel seperti dinding sel, membran sel, sitoplasma, inti sel, dan organel sel lainnya.',
                )}
                {_renderCiri(
                  '2. ',
                  'Bersifat patogen, yaitu mampu menimbulkan penyakit pada sel inang yang diinfeksinya.',
                )}
                {_renderCiri(
                  '3. ',
                  'Ukurannya sangat kecil antara 20nm–300nm (1nm= 1/1.000.000 mm).',
                )}
                {_renderCiri(
                  '4. ',
                  'Hanya mengandung satu jenis asam nukleat, DNA atau RNA.  DNA atau RNA pada virus merupakan penyusun genom (kumpulan gen) yang berfungsi sebagai informasi genetik pada saat replikasi (penggandaan).',
                )}
                {_renderCiri(
                  '5. ',
                  'Hanya memerlukan asam nukleat untuk berkembang biak (bereproduksi) dengan cara repliskasi/memperbanyak diri di dalam sel inang.',
                )}
                {_renderCiri(
                  '6. ',
                  'Bersifat parasit intraselular obligat, virus hanya dapat hidup di dalam sel hidup organisme tertentu yang cocok.',
                )}
                {_renderCiri(
                  '7. ',
                  'Merupakan organisme peralihan, disebut makhluk hidup karena mampu bereproduksi dan tubuhnya mengandung asam nukleat, disebut benda mati karena dapat dikristalkan dan hanya dapat hidup dan berkembang biak di dalam sel hidup lain/sel inang.',
                )}
                {_renderCiri(
                  '8. ',
                  'Memiliki bentuk yang bermacam-macam, misalnya batang (TMV), polihedral (adenovirus), bola/bulat (HIV dan influenza), huruf T (bakteriofag). ',
                )}
                <ImageMateri
                  uri={require('../assets/image/m1/a6.png')}
                  title={
                    'Gambar 1. a) virus bentuk bulat, b) virus bentuk batang, c) virus bentuk T'
                  }
                  source={
                    'http://www.tutor.com.my/creative/sep/image/SPM_BI2m3.jpg'
                  }
                  nav={navigation}
                />
              </View>
            </View>
            {/* Struktur Tubuh Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>C. Struktur Tubuh Virus</Text>
              </View>
              <View style={styles.body}>
                <ImageMateri
                  uri={require('../assets/image/cover1.jpg')}
                  title={'Ragam Bentuk Virus'}
                  source={
                    'http://www.ebiologi.com/2016/03/struktur-tubuh-macam-macam-bentuk-virus.html'
                  }
                  nav={navigation}
                />
                <Text style={styles.desc}>
                  Virus paling sederhana hanya terdiri dari asam nukleat yang
                  dibungkus kapsid sehingga disebut{' '}
                  <Text style={{fontWeight: 'bold'}}>nukleokapsid</Text>. Kapsid
                  berfungsi membentuk bagian luar dan melindungi bagian dalam
                  DNA atau RNA. Setiap kapsid tersusun atas sejumlah sub unit
                  protein yang disebut{' '}
                  <Text style={{fontWeight: 'bold'}}>Kapsomer</Text>, yang
                  terdiri dari kumpulan polipeptida. Bentuk kapsid virus
                  berbeda-beda, berupa polihedral, batang, oval, dan lain-lain.
                  Virus yang hanya terdiri dari nukleokapsid disebut
                  <Text style={{fontWeight: 'bold'}}>virus telanjang</Text>.
                  Contoh virus yang hanya berupa nukleokapsid adalah Tobacco
                  Mosaic Virus (TMV), adenovirus dan virus kutil.
                </Text>
                <Text style={styles.desc}>
                  Selain nukleokapsid, ada virus yang memiliki bagian luar
                  kapsul yang menyelubungi kapsid berupa{' '}
                  <Text style={{fontWeight: 'bold'}}>lipoprotein</Text>.
                  Selubung yang menyusun virus ini merupakan membran lipid
                  bilayer dan protein, biasanya berupa glikoprotein seperti
                  virus influenza, virus herpes, dan virus cacar. Virus yang
                  seperti ini disebut{' '}
                  <Text style={{fontWeight: 'bold'}}>virus bersampul</Text>.
                </Text>
                <Text style={styles.desc}>
                  Virus yang strukturnya paling kompleks adalah virus
                  bakteriofag atau fage. Misalnya Bakteriofag T4 yang menyerang
                  bakteri{' '}
                  <Text style={{fontStyle: 'italic'}}>Escherichia coli</Text>,
                  memiliki ekor yang merupakan struktur kompleks. Ekor T4
                  disusun oleh lebih dari 20 macam protein dan kepalanya disusun
                  oleh beberapa protein lainnya.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    color: '#000',
                  }}>
                  1. Struktur Tubuh Virus Bagian Luar
                </Text>
                <Text style={styles.desc}>
                  Secara umum, struktur tubuh virus{' '}
                  <Text style={{fontWeight: 'bold'}}>bagian luar</Text> terdiri
                  atas 4 bagian utama, yaitu kepala, isi tubuh, ekor, dan
                  kapsid.
                </Text>
                {_renderCiri(
                  'a. ',
                  'Kepala, virus memiliki kepala berisi DNA atau RNA yang menjadi bahan genetik kehidupannya.',
                )}
                {_renderCiri(
                  'b. ',
                  'Isi tubuh virus berupa asam nukleat (DNA atau RNA), merupakan penyusun genom (kumpulan gen) yang berfungsi sebagai informasi genetik pada saat replikasi (penggandaan).',
                )}
                {_renderCiri(
                  'c. ',
                  'Ekor, merupakan bagian dalam struktur tubuh virus yang berfungsi sebagai alat untuk menempelkan diri pada sel inang.',
                )}
                {_renderCiri(
                  'd. ',
                  'Kapsid, merupakan selubung protein virus yang akan membungkus materi genetik dan melindunginya dari kondisi lingkungan yang tidak menguntungkan.',
                )}
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                2. Struktur Tubuh Virus Bagian Dalam
              </Text>
              <Text style={styles.desc}>
                Struktur tubuh bagian dalam tersusun atas materi genetik yang
                berupa asam nukleat (DNA atau RNA) yang biasanya dilengkapi pula
                dengan berbagai protein (enzim).
              </Text>
              <View style={{alignItems: 'center', marginBottom: 12}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('ImagePage', {
                        url: require('../assets/image/m1/a7.png'),
                        title: 'Struktur Tubuh Virus',
                        source:
                          'http://doctorology.net/wp-content/uploads/2009/hiv.jpg dan http://muhammadnurawal.blogspot.co.id',
                      })
                    }>
                    <Image
                      style={{
                        width: wp('40'),
                        height: hp('24'),
                        marginBottom: 12,
                      }}
                      source={require('../assets/image/m1/a7.png')}
                      resizeMode={'stretch'}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('ImagePage', {
                        url: require('../assets/image/m1/a5.jpg'),
                        title: 'Struktur Tubuh Virus',
                        source:
                          'http://doctorology.net/wp-content/uploads/2009/hiv.jpg dan http://muhammadnurawal.blogspot.co.id',
                      })
                    }>
                    <Image
                      style={{
                        width: wp('40'),
                        height: hp('24'),
                        marginBottom: 12,
                        marginLeft: 10,
                      }}
                      source={require('../assets/image/m1/a5.jpg')}
                      resizeMode={'stretch'}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    maxWidth: wp('84'),
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  {'Struktur Tubuh Virus'}
                </Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                    textAlign: 'center',
                    maxWidth: wp('80'),
                    fontSize: 14,
                  }}>{`(Sumber: http://doctorology.net/wp-content/uploads/2009/hiv.jpg dan http://muhammadnurawal.blogspot.co.id)`}</Text>
              </View>
            </View>

            {/* Integrasi Keilmuan */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={styles.title}>Integrasi Keilmuan Islam</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Ayat yang berkaitan dengan materi QS. Al-Baqarah: 26
                </Text>
                <Text style={styles.ayat}>{dataAyat.ayat1}</Text>
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
                    {dataAyat.ter1}
                  </Text>
                </View>
                <Text style={[styles.desc, {marginTop: 16}]}>
                  Menurut Al-Fakhr al-Raziy, Ayat di atas menjelaskan bahwa
                  sesunguhnya Allah tidak segan atau tidak enggan, untuk membuat
                  perumpamaan makhluk semisal{' '}
                  <Text style={{fontStyle: 'italic'}}>ba’ūdhah</Text> (nyamuk)
                  atau yang melebihnya (
                  <Text style={{fontStyle: 'italic'}}>fauqa ba'ūdhah</Text>),
                  yakni lebih rendah atau lebih besar dari itu. Selain itu boleh
                  jadi yang diremehkan atau dinggap tidak wajar bagi orang-orang
                  kafir, karena dianggap tidak berguna dan membawa penyakit.
                </Text>
                <Text style={styles.desc}>
                  Menurut Muhammad bin Umar al-Jawi, Melalui ayat ini sebenarnya
                  Allah ingin menyampaikan keajaiban dan keindahan ciptaan-Nya,
                  terutama dalam hal ukuran nyamuk (
                  <Text style={{fontStyle: 'italic'}}>ba’ūdhah</Text>) dan yang
                  lebih kecil (
                  <Text style={{fontStyle: 'italic'}}>fauqa ba'ūdhah</Text>)
                  yaitu virus, bakteri, yang tidak bisa dilihat dengan mata
                  telanjang, dan hanya bisa dilihat dengan bantuan mikroskop.
                </Text>
              </View>
            </View>
            {/* Kegiatan */}
            <View style={styles.main}>
              <View style={[styles.head]}>
                <Icon name="text-document" color={'#fff'} size={18} />
                <Text style={[styles.title, {marginLeft: 8}]}>
                  Tes Formatif Materi 1
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Tes1')}
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
        )}
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
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginBottom: 12,
  },
});

export default Materi1;
