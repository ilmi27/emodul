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

const Materi1 = ({navigation, route}) => {
  const backAction = () => {
    if (route.name === 'Materi1') {
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
        <HeaderMateri navigation={navigation} title={'Uraian Materi 1'} />
        <ScrollView>
          {/* Sejarah Penemuan Virus */}
          <View style={styles.main}>
            <View style={styles.head}>
              <Text style={styles.title}>A. Sejarah Penemuan Virus</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>
                Virus berasal dari bahasa Latin,{' '}
                <Text style={{fontStyle: 'italic'}}>“virion”</Text> yang berarti
                racun. Kata tersebut merujuk pada banyaknya penyakit yang
                diakibatkan oleh virus, dan dipelajari dalam bidang virologi.
              </Text>
              <Text style={styles.desc}>
                Virus pertama kali ditemukan oleh ilmuwan Jerman,{' '}
                <Text style={{fontWeight: 'bold'}}>Adolf Mayer</Text> pada tahun
                1883 ketika sedang meneliti penyebab penyakit bintik-bintik
                kuning pada tanaman tembakau. Mayer melakukan percobaan dengan
                menyemprotkan getah tanaman tembakau yang terserang penyakit
                bintik kuning ke tanaman tembakau yang sehat. Hasilnya, tanaman
                yang sehat menjadi ikut terserang dan mengalami penyakit serupa.
                Dengan hasil ini, Mayer menyimpulkan bahwa, ada suatu
                mikroorganisme yang ukurannya jauh lebih kecil dari bakteri yang
                dapat menginfeksi tanaman tembakau.
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
                menjadi penasaran. Pada masa itu (tahun 1892), suatu filter yang
                dapat menyaring bakteri telah ditemukan oleh Lembaga Pasteur di
                Paris. Filter tersebut kemudian digunakan Ivanovski untuk
                mengulangi penelitian Mayer. Ivanovski menyaring getah tembakau
                yang terserang bintik kuning menggunakan penyaring bakteri untuk
                membuktikan bahwa penularan bukan disebabkan oleh infeksi
                bakteri. Getah yang sudah disaring kemudian dioleskan pada
                tanaman sehat. Hasilnya, tanaman tembakau sehat masih tetap
                terserang. Dengan hasil tersebut, ia kemudian menyimpulkan
                bahwa, ada bakteri patogen atau zat kimia hasil produksi bakteri
                yang berukuran sangat kecil sehingga dapat lolos dari penyaring
                bakteri.
              </Text>
              <ImageMateri
                uri={require('../assets/image/m1/a2.jpg')}
                title={'Percobaan Dimitri Ivanovski'}
                source={
                  'http://aisyah-islamia.blogspot.co.id/2013/09/struktur-virus.html'
                }
                nav={navigation}
              />
              <Text style={[styles.desc, {marginBottom: 0}]}>
                Pada tahun 1897, seorang ahli botani Belanda bernama Martinus
                Beijerinck melakukan eksperimen yang membuktikan bahwa agen
                penginfeksi yang terdapat di dalam getah tembakau dapat
                berkembangbiak. Beijerinck menyemprotkan getah yang telah
                disaring ke tanaman lainnya. Setelah tanaman tersebut sakit,
                maka getahnya digunakan untuk menginfeksi tanaman berikutnya,
                dan seterusnya hingga beberapa kali pemindahan. Ternyata
                kemampuan patogen tersebut tidak berkurang setelah beberapa kali
                pemindahan. Berbeda dengan bakteri, agen penginfeksi tersebut
                tidak dapat dikembangbiakkan dalam medium nutrisi di dalam cawan
                petri dan tidak dapat dinonaktifkan dengan alkohol. Dengan
                pengamatannya itu, ia kemudian menyimpulkan bahwa, organisme
                yang menyebabkan penyakit bintik kuning pada tembakau tersebut
                memiliki ukuran yang sangat kecil. Mikroorganisme ini juga
                diduga hanya dapat hidup dengan menumpang pada mahkluk hidup
                yang diinfeksi olehnya. Meskipun sudah memiliki kesimpulan,
                Beijerinck masih belum dapat menemukan jenis dan struktur dari
                mikroorganisme tersebut.
              </Text>
              <ImageMateri
                uri={require('../assets/image/m1/a3.jpg')}
                title={'Percobaan Martinus Beijerinck'}
                source={
                  'http://aisyah-islamia.blogspot.co.id/2013/09/struktur-virus.html'
                }
                nav={navigation}
              />
              <Text style={styles.desc}>
                Pada tahun 1935, seorang ilmuan Amerika, Wendell Stanley
                berhasil mengisolasi dan mengkristalkan partikel penyebab
                penyakit bintik kuning yang menyerang tembakau. Partikel
                mikroskopis ini kemudian diberi nama Tobacco Mosaic Virus (TMV).
                Sejak saat itu, penelitian lebih dalam terkait keberadaan virus
                semakin banyak dilakukan. Para ilmuan berlomba-lomba
                mengidentifikasi keberadaan virus dalam cabang ilmu virologi
                untuk menemukan hal-hal baru yang belum pernah ada dalam sejarah
                penemuan virus sebelumnya.
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
              <Text style={styles.title}>B. Ukuran dan Bentuk Virus</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>
                Virus merupakan jasad subrenik yang hanya dapat dilihat dengan
                mikroskop elektron. Ukuran virus sangat kecil antara 20nm–300nm
                (1nm= 1/1.000.000 mm). Virus tidak memiliki proptoplasma dan
                organel sehingga tidak dapat dikatakan sebagai sel (aseluler).
                Tubuh virus terdiri atas asam nukleat (DNA atau RNA saja) yang
                dibungkus oleh selubung (kapsid) yang tersusun atas protein.
              </Text>
              <Text style={styles.desc}>
                Bentuk virus beraneka ragam misalnya bentuk bola, batang oval,
                silindris, menyerupai kubus, tidak beraturan, jarum dan
                menerupai huruf T.
              </Text>
              <ImageMateri
                uri={require('../assets/image/cover1.jpg')}
                title={'Ragam Bentuk Virus'}
                source={
                  'http://www.ebiologi.com/2016/03/struktur-tubuh-macam-macam-bentuk-virus.html'
                }
                nav={navigation}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 12,
                  marginBottom: 16,
                }}>
                Ciri dan Karakteristik Virus
              </Text>
              {_renderCiri(
                '1. ',
                'Tubuh virus bukan merupakan suatu sel karena tidak memiliki dinding sel, membran sel, sitoplasma, inti sel, dan organel sel lainnya (aselular).',
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
                'Memiliki bentuk yang bermacam-macam, misalnya batang (TMV), polihedral (adenovirus), bola/bulat (HIV dan influenza), huruf T (bakteriofage).',
              )}
            </View>
          </View>
          {/* Struktur Tubuh Virus */}
          <View style={styles.main}>
            <View style={styles.head}>
              <Text style={styles.title}>C. Struktur Tubuh Virus</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.desc}>
                Secara umum, struktur tubuh virus terdiri atas 4 bagian utama,
                yaitu kepala, isi tubuh, ekor, dan kapsid.
              </Text>
              {_renderCiri(
                'a. ',
                'Kepala, virus memiliki kepala berisi DNA atau RNA yang menjadi bahan genetik kehidupannya.',
              )}
              {_renderCiri(
                'b. ',
                'Kapsid, merupakan selubung protein virus yang akan membungkus materi genetik dan melindunginya dari kondisi lingkungan yang tidak menguntungkan.',
              )}
              {_renderCiri(
                'c. ',
                'Isi tubuh virus berupa asam nukleat (DNA atau RNA), merupakan penyusun genom (kumpulan gen) yang berfungsi sebagai informasi genetik pada saat replikasi (penggandaan).',
              )}
              {_renderCiri(
                'd. ',
                'Ekor, merupakan bagian dalam struktur tubuh virus yang berfungsi sebagai alat untuk menempelkan diri pada sel inang.',
              )}
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginHorizontal: 12,
                marginBottom: 16,
              }}>
              Struktur Tubuh Virus
            </Text>
            <Text style={styles.desc}>
              Struktur tubuh bagian luar disebut juga{' '}
              <Text style={{fontWeight: 'bold'}}>Kapsid</Text>. Kapsid berfungsi
              membentuk bagian luar dan melindungi bagian dalam DNA atau RNA.
              Setiap kapsid tersusun atas sejulah sub unit protein disebut{' '}
              <Text style={{fontWeight: 'bold'}}>Kapsomer</Text> yang merupakan
              kumpulan polipeptida.
            </Text>
            <ImageMateri
              uri={require('../assets/image/m1/a5.jpg')}
              title={'Struktur Tubuh Virus'}
              source={
                'http://muhammadnurawal.blogspot.co.id/2011/12/struktur-tubuh-virus-dan-penjelasannya.html'
              }
              nav={navigation}
            />
            <Text style={styles.desc}>
              Bentuk kapsid virus berbeda-beda, berupa polihedral, batang, oval,
              dan lain-lain. Ada beberapa virus memiliki kapsid yang diseliputi
              oleh <Text style={{fontWeight: 'bold'}}>lipoprotein</Text>,
              misalnya virus influenza, virus herpes, dan virus cacar.
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginHorizontal: 12,
                marginBottom: 16,
              }}>
              Struktur Tubuh Virus Bagian Dalam
            </Text>
            <Text style={styles.desc}>
              Struktur tubuh bagian dalam tersusun atas materi genetik yang
              berupa asam nukleat (DNA atau RNA) yang biasanya dilengkapi pula
              dengan berbagai protein (enzim).
            </Text>
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
                Ayat di atas menjelaskan bahwa sesunguhnya Allah tidak malu
                yaitu tidak segan atau tidak enggan, untuk membuat perumpamaan
                makhluk semisal{' '}
                <Text style={{fontStyle: 'italic'}}>ba’ūdhah</Text> (nyamuk)
                atau yang melebihnya (
                <Text style={{fontStyle: 'italic'}}>fauqa ba’ūdhah</Text>),
                yakni lebih rendah atau lebih besar dari itu. Selain itu boleh
                jadi yang diremehkan atau dinggap tidak wajar bagi orang-orang
                kafir, karena dianggap tidak berguna dan membawa penyakit.
              </Text>
              <Text style={styles.desc}>
                Melalui ayat ini sebenarnya Allah ingin menyampaikan keajaiban
                dan keindahan ciptaan-Nya, terutama dalam hal ukuran nyamuk (
                <Text style={{fontStyle: 'italic'}}>ba’ūdhah</Text>) dan yang
                sangat kecil (
                <Text style={{fontStyle: 'italic'}}>fauqa ba’ūdhah</Text>),
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

export default Materi1;
