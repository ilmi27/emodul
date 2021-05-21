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
import {dataAyat} from '../constants/dataAyat';
import Icon from 'react-native-vector-icons/Entypo';
import {dataKegiatan1} from '../constants/dataKegiatan';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Loading from '../Component/Loading';

const Materi3 = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);

  const backAction = () => {
    if (route.name === 'Materi3') {
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
        <Text style={{fontSize: 16, fontStyle: 'italic'}}>{num}</Text>
        <Text style={{textAlign: 'justify', fontSize: 16, fontStyle: 'italic'}}>
          {text}
        </Text>
      </View>
    );
  };

  const _renderPerilaku = (num, text) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 12,
          paddingRight: 24,
          marginBottom: 4,
        }}>
        <Text style={{fontSize: 16}}>{num}</Text>
        <Text style={{textAlign: 'justify', fontSize: 16}}>{text}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HeaderMateri navigation={navigation} title={'Uraian Materi 3'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
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
                  1. Menguntungkan
                </Text>
                {_renderCiri('a. ', 'Memproduksi Vaksin')}
                <Text style={[styles.desc]}>
                  Vaksin merupakan patogen yang telah dilemahkan sehingga tidak
                  berbahaya jika menyerang manusia. Ada beberapa virus yang
                  dimanfaatkan untuk memproduksi vaksin. Jika telah diberi
                  vaksin, tubuh manusia akan dapat memproduksi antibodi sehingga
                  jika sewaktu-waktu terserang patogen yang sebenarnya, tubuh
                  manusia tersebut telah kebal karena di dalam tubuhnya telah
                  diproduksi antibodi patogen tersebut.
                </Text>
                {_renderCiri('b. ', 'Membuat Antitoksin')}
                <Text style={[styles.desc]}>
                  Antitoksin dapat dibuat dengan menggabungkan DNA virus dan gen
                  yang mempunyai sifat menguntungkan. Oleh karena itu, apabila
                  virus menginfeksi bakteri, maka di dalam sel bakteri tersebut
                  terkandung gen yang menguntungkan. Gen manusia adalah gen yang
                  menguntungkan yang dapat mengendalikan produksi antitoksin.
                  Jika oleh DNA virus, DNA manusia disambungkan dengan DNA
                  bakteri, sel bakteri tersebut akan mengandung gen manusia
                  penghasil antitoksin. Jadi, yang mulanya gen bakteri tidak
                  mengandung antitoksin manusia, sekarang mampu memproduksi
                  antitoksin manusia.
                </Text>
                <Text style={[styles.desc]}>
                  Pembelahan akan terus-menerus dilakukan oleh bakteri. Setiap
                  bakteri baru dipastikan mengandung antitoksin yang dihasilkan
                  oleh DNA manusia. Antitoksin dapat dipisahkan dan dimanfaatkan
                  untuk melawan penyakit pada manusia. Melalui rekayasa genetik,
                  dapat dikatakan bahwa virus dapat dimanfaatkan sebagai
                  perantara gen manusia atau gen makhluk hidup lainnya untuk
                  masuk ke dalam sel bakteri agar sel bakteri tersebut membawa
                  sifat gen manusia atau gen makhluk hidup lain.
                </Text>
                {_renderCiri('c. ', 'Melemahkan Bakteri')}
                <Text style={[styles.desc]}>
                  Virus yang menyerang bakteri patogen merupakan virus yang
                  menguntungkan. Jika DNA virus lisogenik menginfeksi DNA
                  bakteri patogen, bakteri tersebut menjadi melemah atau tidak
                  berbahaya.
                </Text>

                {/* Merugikan */}
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                  }}>
                  2. Merugikan
                </Text>
                {/* Penyakit pada Manusia */}
                {_renderCiri('a. ', 'Menyebabkan Penyakit pada Manusia')}
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  1) AIDS (
                  <Text style={{fontStyle: 'italic'}}>
                    acquired immunodeficiency syndrome
                  </Text>
                  ) merupakan penyakit hilangnya sistem kekebalan tubuh.
                  Penyakit ini disebabkan oleh HIV (
                  <Text style={{fontStyle: 'italic'}}>
                    human immunodeficiency virus
                  </Text>
                  ) dari genus{' '}
                  <Text style={{fontStyle: 'italic'}}>Lentivirus</Text>, family
                  <Text style={{fontStyle: 'italic'}}>Retroviridae</Text>,
                  subfamily{' '}
                  <Text style={{fontStyle: 'italic'}}>Lentivirinae</Text> yang
                  menyerang sel limfosit T CD4+.
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  2) Covid-19 (
                  <Text style={{fontStyle: 'italic'}}>
                    Corona Virus Disease-2019
                  </Text>
                  ) adalah penyakit infeksi yang disebabkan oleh{' '}
                  <Text style={{fontStyle: 'italic'}}>Novel Coronavirus</Text>{' '}
                  atau <Text style={{fontStyle: 'italic'}}>Coronavirus</Text>{' '}
                  jenis baru yaitu Sars-Cov-2, menyebabkan wabah pneumonia
                  pertama kali pada Desember tahun 2019 di kota Wuhan, China.
                  Covid-19 ini menimbulkan gejala gangguan pernapasan akut
                  seperti demam di atas 38˚C, batuk dan sesak napas bagi
                  manusia. Pada penderita Covid-19 berat, dapat menimbulkan
                  pneumonia, sindrom pernapasan akut, gagal ginjal, hingga
                  kematian. Covid-19 dapat menular dari manusia ke manusia lain
                  melalui percikan droplet (ludah yang keluar saat batuk atau
                  bersin), memegang mulut atau hidung tanpa mencuci tangan
                  terlebih dulu setelah menyentuh benda yang terkena cipratan
                  ludah penderita Covid-19, dan sentuhan atau kontak jarak dekat
                  dengan penderita Covid-19.
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  3) Hepatitis atau biasa dikenal dengan sakit kuning merupakan
                  penyakit gangguan fungsi hati dan saluran empedu yang ditandai
                  dengan membengkaknya organ hati oleh virus, sehingga empedu
                  akan mengalir atau beredar ke seluruh bagian tubuh, dan
                  munculnya warna kuning pada bola mata juga kulit. Terdapat
                  beberapa jenis hepatitis antara lain: penyakit Hepatitis A
                  (disebabkan oleh virus HAV dari famili Picornaviridae genus
                  Picornavirus), Hepatitis B (disebabkan oleh virus HBV dari
                  famili Hepadnaviridae genus Orthohepadnavirus), Hepatitis C
                  (disebabkan oleh virus HCV dari famili Hepadnaviridae genus
                  Hepacivirus), Hepatitis D (disebabkan oleh virus HDV dari
                  genus Deltavirus), dan Hepatitis E (disebabkan oleh virus HEV
                  dari genus Hervesvirus).
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  4) Campak (morbili) merupakan penyakit yang disebabkan oleh
                  infeksi Morbillivirus. Gejala penyakit ini yaitu demam,
                  bersin, batuk, pilek, mata merah, dan timbul ruam bercak
                  cokelat pada kulit. Pencegahan penyakit ini bisa dilakukan
                  dengan melakukan vaksin.
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  5) Herpes adalah penyakit infeksi pada sel epitel. Setelah
                  terjadi infeksi, virus tidak akan keluar dari tubuh dan tetap
                  laten pada sel-sel saraf. Penyakit ini dapat menular melalui
                  kontak langsung dengan cairan yang berasal dari jaringan
                  epitel yang terinfeksi. Herpes disebut juga demam lepuh.
                  Penyebabnya adalah virus herpes simplex (HSV-1 dan HSV 2).
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  6) Influenza merupakan penyakit pernafasan yang terkadang
                  mewabah di beberapa bagian dunia. Gejala influenza timbul
                  mendadak dengan gejala tubuh menggigil, sakit kepala, batuk
                  kering, demam, dan nyeri otot menyeluruh. Influenza disebabkan
                  oleh kelompok virus Orthomyxovirus yang berbentuk bulat dengan
                  diameter 100 nm. Virus influenza menyerang sel-sel saluran
                  pernafasan dan mudah menyebar dari orang ke orang saat batuk,
                  bersin, atau melalui kontak tangan yang terkontaminasi.
                </Text>
                <Text style={[styles.desc]}>
                  7) Ebola merupakan penyakit mematikan yang hanya menyerang
                  kera dan manusia dengan gejala pendarahan di dalam dan di luar
                  tubuh. Virus ebola diketahui muncul pertama kali di Zaire,
                  Afrika Tengah, pada tahun 1976 dan diperkirakan ditularkan ke
                  manusia melalui babi yang terinfeksi. Virus ini menyerang sel
                  darah putih makroFage, jaringan fibroblas, kemudian menyebar
                  ke organ-organ tubuh sehingga menyebabkan pendarahan dan
                  kematian pada penderitanya.
                </Text>
                <Text style={[styles.desc]}>
                  8) Demam berdarah ditandai gejala tubuh menggigil dan sakit
                  kepala. Rasa sakit segera timbul khususnya pada punggung,
                  sendi, otot, dan bola mata. Suhu tubuh kembali normal setelah
                  5-6 hari dan meningkat kembali sekitar 5-8 hari kemudian.
                  Bercak-bercak merah akan timbul dan berlangsung selama 24-72
                  jam. Kadar trombosit dalam darah akan menurun dan kondisi
                  paling parah adalah terjadinya pendarahan yang menyebabkan
                  kematian. Demam berdarah merupakan penyakit epidemi (wabah) di
                  Filipina, India, dan Indonesia dengan angka kematian 9-10%.
                  Demam berdarah disebabkan oleh virus dengue (Flavivirus)
                  melalui gigitan nyamuk Aedes aegypti.
                </Text>

                {/* Penyakit pada Hewan */}
                {_renderCiri('b. ', 'Menyebabkan Penyakit pada Hewan')}
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  1) Rabies merupakan infeksi akut pada susunan saraf pusat yang
                  disebabkan oleh Rhabdovirus yang dapat menular ke manusia
                  melalui gigitan atau air liur hewan penderita, misalnya
                  anjing, serigala, kucing, dan sebagainya.
                </Text>
                <Text style={[styles.desc, {marginBottom: 24}]}>
                  2) Tetelo atau NCD (newcastle disease) merupakan penyakit yang
                  terjadi pada unggas dengan gejala diare, batuk-batuk, dan
                  kehilangan keseimbangan sehingga tubuhnya berputar-putar
                  dengan kepala tertekuk. Penyakit ini disebabkan oleh virus NCD
                  (newcastle disease) dan bersifat mudah menular. Tetelo dapat
                  menyebabkan kematian hewan ternak.
                </Text>
                {/* Penyakit pada Tumbuhan */}
                {_renderCiri('c. ', 'Menyebabkan Penyakit pada Tumbuhan')}
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  1) Tungro, penyakit yang disebabkan oleh virus dari family
                  Caulimoviridae dapat menyerang tanaman padi yang menyebabkan
                  sel-sel daun mati sehingga pertumbuhan terganggu dan kerdil.
                  Penyebaran virus ini melalui perantaraan wereng cokelat dan
                  wereng hijau.
                </Text>
                <Text style={[styles.desc, {marginBottom: 8}]}>
                  2) Mosaik, penyakit bercak-bercak kuning yang terjadi pada
                  daun tembakau, kacang tanah, papaya, cabai, tomat, dan
                  kentang. Penyebaran virus mosaik terjadi melalui perantara
                  serangga.
                </Text>
                <Text style={[styles.desc, {marginBottom: 0}]}>
                  3) TYLC (Tomato yellow leaf curl virus) adalah virus yang
                  menyebabkan daun dan tumbuhan tomat berwarna kuning dan
                  menggulung sehingga menurunkan hasil protein.
                </Text>
              </View>
            </View>
            {/* Pencegahan Akibat Infekis Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>
                  B. Pencegahan Akibat Infeksi Virus
                </Text>
              </View>
              <View style={styles.body}>
                <Text style={[styles.desc]}>
                  Hal utama yang harus diketahui dalam upaya pencegahan infeksi
                  virus adalah mengetahui cara penularan penyakit tersebut.
                  Beberapa penyakit ada yang menular melalui kontak langsung
                  atau melalui darah dan cairan tubuh orang yang terinfeksi
                  seperti lewat jarum suntik bersama, transfusi darah, alat
                  kedokteran, melalui udara, dan ada pula yang ditularkan
                  melalui vektor atau perantara hewan. Berikut cara pencegahan
                  terhadap infeksi virus.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    color: '#000',
                  }}>
                  1. Perilaku Hidup Sehat
                </Text>
                <Text style={[styles.desc]}>
                  Langkah pencegahan sebenarnya lebih mudah dilakukan dengan
                  menerapkan perilaku disiplin hidup sehat. Berikut adalah tips
                  untuk mencegah anda terkena penyakit inveksi virus, antara
                  lain:
                </Text>
                <View style={{marginLeft: 16, marginBottom: 16}}>
                  {_renderPerilaku(
                    'a. ',
                    'Menjauhi penderita penyakit yang mudah menular melalui kontak misalnya flu, cacar dan sebagainya, menggnnakan masker serta tidak menggunakan barang pribadi penderita penyakit yang terkontaminasi virus.',
                  )}
                  {_renderPerilaku(
                    'b. ',
                    'Cucilah tangan sebelum dan sesudah melakukan segala aktivitas.',
                  )}
                  {_renderPerilaku(
                    'c. ',
                    'Hindari kontak dengan binatang yang menjadi vektor pembawa penyakit.',
                  )}
                  {_renderPerilaku(
                    'd. ',
                    'Masak dan sajikan makanan dengan aman.',
                  )}
                  {_renderPerilaku(
                    'e. ',
                    'Pastikan anda mendapatkan semua imunisasi yang dibutuhkan.',
                  )}
                  {_renderPerilaku(
                    'f. ',
                    'Menjaga kebersihan lingkungan sekitar.',
                  )}
                </View>

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    color: '#000',
                  }}>
                  2. Pemberian Vaksin
                </Text>
                <Text style={[styles.desc]}>
                  Tindakan pencegahan dapat dilakukan terhadap serangan virus
                  adalah dengan pemberian vaksin (vaksinasi/imunisasi).{' '}
                  <Text style={{fontWeight: 'bold'}}>Vaksin</Text> adalah suatu
                  zat yang mengandung mikroorganisme patogen yang sudah
                  dilemahkan. Pemberian vaksin memberikan kekebalan secara aktif
                  bagi tubuh manusia, antara lain :
                </Text>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginHorizontal: 12,
                      marginBottom: 16,
                      color: '#000',
                    }}>
                    a. Vaksin Virus Mati
                  </Text>
                  <Text style={[styles.desc]}>
                    Vaksin mati atau disebut juga vaksin tidak aktif mengandung
                    virus atau bakteri yang sudah dihancurkan dengan suhu panas,
                    radiasi, atau bahan kimia, sehingga mati atau tidak aktif.
                    Proses ini membuat virus tetap utuh, tetapi tidak dapat
                    berkembangbiak dan menyebabkan penyakit dalam tubuh.
                    Melainkan membuat tubuh menciptakan reaksi kekebalan. Vaksin
                    mati ini umumnya memproduksi respons imun yang lebih rendah
                    daripada vaksin hidup. Beberapa contoh vaksin untuk
                    pencegahan penyakit yang disebabkan oleh virus adalah OPV
                    (Oral Polio Vaccine) atau vaksin polio, vaksin DPT (defteri,
                    pertusis dan tetanus), dan vaksin flu adalah beberapa contoh
                    vaksin mati.
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginHorizontal: 12,
                      marginBottom: 16,
                      color: '#000',
                    }}>
                    b. Vaksin Virus Hidup yang Dilemahkan
                  </Text>
                  <Text style={[styles.desc]}>
                    Vaksin hidup adalah vaksin yang dilemahkan di laboratorium,
                    tapi bukan dihancurkan. Virus atau bakteri yang disuntikkan
                    tidak akan menyebabkan sakit, tapi dapat berkembangbiak
                    untuk memunculkan respons sistem imun. Vaksin hidup ini
                    mendatangkan kekebalan yang lebih kuat dan bisa memberikan
                    perlindungan seumur hidup meskipun hanya diberikan satu atau
                    dua kali. Namun, vaksin ini tidak dapat diberikan pada
                    mereka yang mengalami gangguan sistem kekebalan tubuh.
                    Contoh dari vaksin hidup adalah vaksin MMR (vaksin untuk
                    penyakit campak (measles), gondongan (mumps), dan rubella),
                    vaksin BCG (vaksin untuk penyakit TBC), cacar air, dan
                    vaksin flu semprot.
                  </Text>
                </View>
              </View>
            </View>
            {/* Pencegahan Covid-19 */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={[styles.title, {textAlign: 'center'}]}>
                  Pencegahan Covid-19
                </Text>
              </View>
              <TouchableWithoutFeedback
                style={[styles.body, {alignItems: 'center'}]}
                onPress={() =>
                  navigation.navigate('ImagePage', {
                    url: require('../assets/image/cov19.png'),
                    title: 'Pencegahan Covid-19',
                  })
                }>
                <Image
                  resizeMode="contain"
                  style={{width: wp('90'), height: hp('40')}}
                  source={require('../assets/image/cov19.png')}
                />
              </TouchableWithoutFeedback>
            </View>
            {/* Integrasi Keilmuan */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={styles.title}>Integrasi Keilmuan Islam</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>Q.S. Al-Ma'idah (5): 6</Text>
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
                  Di dalam ayat ini Allah menjelaskan bahwa kehendak Allah yang
                  utama ialah supaya kamu menjadi suci bersih. Wudhu mengandung
                  dua aspek kebersihan yaitu kebersihan lahiriyah (fisik) berupa
                  pencucian bagian tubuh tertentu, dan kebersihan batiniyah
                  (psikis) yang ditimbulkan oleh pengaruh wudhu yang berupa
                  pembersihan dari kesalahan dan dosa yang dilakukan oleh
                  anggota-anggota tubuh. Kebersihan lahiriyah itu tidak dapat
                  dipisahkan dengan kebersihan batiniyah. Oleh karena itu,
                  ketika seorang Muslim melaksanakan ibadah tertentu harus
                  membersihkan terlebih dahulu aspek lahiriyahnya.
                </Text>
                <Text style={styles.desc}>
                  Berwudhu dapat bermanfaat untuk kesehatan, seperti ungkapan
                  “bersih pangkal sehat”. Selalu berwudhu sebanyak 5 kali
                  sebelum shalat dapat membersihkan berbagai kotoran, virus, dan
                  bakteri yang berada di telinga, hidung, mulut dan gigi, serta
                  dapat mempermudah regenerasi selaput lendir sehingga dapat
                  mencegah berbagai penyakit yang masuk melalui telinga, hidung
                  dan mulut. Baik penyakit yang ringan maupun penyakit yang
                  serius. Selain itu, kebanyakan titik refleksi berada pada
                  anggota wudhu.
                </Text>
              </View>
            </View>
            {/* Rangkuman */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={styles.title}>Rangkuman</Text>
              </View>
              <View style={styles.body}>
                {_renderPerilaku(
                  '1. ',
                  'Tubuh virus bukan merupakan suatu sel karena tidak memiliki dinding sel, membran sel, sitoplasma, inti sel, dan organel sel lainnya. ',
                )}
                {_renderPerilaku(
                  '2. ',
                  'Virus baktiorifage yang berbentuk huruf T (misalnya fag T4) bagian-bagian yaitu kepala, leher, dan ekor. Pada bagian kepala dan ekor terhadap kapsid dan selubung ekor (bagian terluar), serta asam nuklear (bagian dalam). ',
                )}
                {_renderPerilaku(
                  '3. ',
                  'Virus hanya mengandung satu jenis asam, nukleat, yaitu DNA dan RNA. Virus yang mengandung DNA, antara lain parvovirus, Papovavirus, Papillomavirus, Adenovirus, dan Herpesvirus. Sementara virus yang mengandung RNA antara lain Picornavirus, Togavirus, Flavivirus, Calicivirus, Bunyavirus, Arenavirus, Reovirus, dan Retrovirus. ',
                )}
                {_renderPerilaku(
                  '4. ',
                  'Reproduksi virus dapat terjadi melalui siklus litik dan siklus lisogenik. Siklus litik terdiri dari lima tahap: tahap adsorpsi, tahap penetrasi, tahap sitesis, tahap pematangan, dan tahap lisis. Siklus lisogenik terdiri dari lima tahap: tahap adsorpsi, tahap penetrasi, tahap penggabungan, tahap pembelahan, tahap sitensis, tahap pematangan, dan tahap lisis.',
                )}
                {_renderPerilaku(
                  '5. ',
                  'Usaha pencegahan terhadap infeksi virus dapat dilakukan dengan cara perilaku disiplin hidup sehat dan pemberian vaksin.',
                )}
              </View>
            </View>
            {/* Tugas Proyek 1 */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={styles.title}>Tugas Proyek 2</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Tujuan: Memahami peranan virus terhadap kesehatan masyarakat,
                  dan berpartisipasi melakukan upaya penyebaran informasi
                  tentang bahaya virus.{'\n'}Media: e-modul, buku, internet,
                  kertas/gawai.
                  {'\n'}Langkah-langkah:
                </Text>

                {_renderPerilaku(
                  '1. ',
                  'Buatlah kelompok yang beranggotakan 3-5 orang.',
                )}
                {_renderPerilaku(
                  '2. ',
                  'Carilah informasi dari berbagai sumber tentang bahaya dan cara penularan virus COVID-19, virus HIV/AIDS, virus influenza, virus demam berdarah dan virus flu burung. Tuangkan dalam tulisan minimal dua halaman.',
                )}
                {_renderPerilaku(
                  '3. ',
                  'Berdasarkan tulisan yang kalian susun, buatlah poster ajakan pencegahan bahaya penularan dan dampak penyebaran virus pada kertas atau melalui gawai kalian. Poster yang dirancang melalui gawai diprint untuk dipresentasikan.',
                )}
                {_renderPerilaku(
                  '4. ',
                  'Presentasikan hasil diskusi kelompok Anda di depan kelas menggunakan video.',
                )}
                {_renderPerilaku(
                  '5. ',
                  'Publikasikan tugas poster dan video kalian melalui akun facebook, instagram dan kanal youtube.',
                )}
                {_renderPerilaku('6. ', 'instagram atau kanal youtube.')}
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

export default Materi3;
