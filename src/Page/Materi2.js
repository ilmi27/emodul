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
import {table1} from '../constants/dataTable1';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Loading from '../Component/Loading';

const Materi2 = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);

  const tableData = table1;

  const backAction = () => {
    if (route.name === 'Materi2') {
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
              padding: 5,
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              {item?.id}
            </Text>
          </View>
          <View
            style={{
              width: wp('39'),
              borderWidth: 0.6,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderColor: '#000',
              padding: 5,
            }}>
            <Text>{item?.l1}</Text>
          </View>
          <View
            style={{
              width: wp('39'),
              borderWidth: 0.6,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderColor: '#000',
              padding: 5,
            }}>
            <Text>{item?.l2}</Text>
          </View>
        </View>
      );
    });
    return data;
  };

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
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <ScrollView>
            {/* Reproduksi Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>A. Reproduksi Virus</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Virus berkembang biak dengan cara{' '}
                  <Text style={{fontWeight: 'bold'}}>replikasi</Text>{' '}
                  (perbanyakan diri) di dalam sel inang. Energi dan bahan untuk
                  sintesis protein virus berasal dari sel inang. Asam nukleat
                  virus membawa informasi genetik untuk menyandikan semua
                  makromolekul pembentuk virus di dalam sel inang sehingga virus
                  baru yang terbentuk memiliki sifat yang sama dengan sel induk.
                  Ciri yang menunjukkan virus dapat bereproduksi adalah jika
                  berinteraksi dengan sel inang, virion akan pecah, dan
                  terbentuk partikel-partikel turunan virus. Keberhasilan virus
                  dalam bereproduksi bergantung pada jenis virus dan kondisi
                  ketahanan sel inang. Reproduksi virus dapat terjadi melalui
                  siklus litik dan siklus lisogenik.
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
                <Text style={[styles.desc]}>
                  Siklus litik merupakan siklus replikasi virus yang pada fase
                  akhirnya terjadi peristiwa lisisnya dinding sel bakteri akibat
                  terbentuknya banyak virus baru di dalam sel bakteri. Siklus
                  litik terjadi apabila pertahanan sel inang lebih lemah
                  dibandingkan daya infeksi virus sehingga tahapan reproduksinya
                  dapat berlangsung cepat. Virus yang mampu bereproduksi dengan
                  siklus litik disebut virus virulen. Pada siklus litik, sel
                  inang akan pecah dan mati serta membentuk virion-virion baru.
                  Tahapan/fase yang terjadi selama siklus litik adalah sebagai
                  berikut:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                  }}>
                  a. Fase Adsorbsi/Penempelan
                </Text>
                <Text style={[styles.desc]}>
                  Fase ini ditandai dengan menempelnya ujung ekor virus pada
                  reseptor khusus dinding sel bakteri dengan mengunakan serat
                  ekornya.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                  }}>
                  b. Fase Injeksi/Penetrasi
                </Text>
                <Text style={[styles.desc]}>
                  Fase penetrasi yaitu selubung ekor berkontraksi mengeluarkan
                  enzim lisozim yang berfungsi melarutkan dinding sel bakteri
                  sehingga terbentuk lubang yang menembus dinding dan membran
                  selnya. Selanjutnya, virus menginjeksikan materi genetiknya ke
                  dalam sel bakteri, sehingga kapsid virus yang tertinggal di
                  luar sel menjadi kosong atau mati dan selanjutnya akan
                  terlepas karena tidak berfungsi lagi.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                  }}>
                  c. Fase Sintesis/Replikasi/Eklifase
                </Text>
                <Text style={[styles.desc]}>
                  Pada tahap sintesis, materi genetik virus akan mengontrol
                  metabolisme sel inang untuk menghasilkan asam nukleat (salinan
                  genom) dan protein komponen virus. DNA virus akan mereplikasi
                  diri berulang-ulang dengan cara menggandakan diri dalam jumlah
                  yang banyak. Bagian-bagian yang dibentuk antara lain DNA,
                  kapsid, ekor, dan serat ekor.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                  }}>
                  d. Fase Perakitan/Pematangan
                </Text>
                <Text style={styles.desc}>
                  Hasil dari fase sintesis berupa bagian-bagian virus tersebut
                  mula-mula terpisah, kemudian dirakit menjadi partikel-partikel
                  virus yang lengkap sehingga terbentuk virion-virion baru.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                  }}>
                  e. Fase Lisis
                </Text>
                <Text style={[styles.desc]}>
                  Ratusan bahkan ribuan virus baru yang terbentuk menghasilkan
                  lisozim, yaitu enzim pencerna untuk merusak dinding sel
                  bakteri. Dinding sel bakteri akan pecah mengakibatkan
                  terjadinya osmosis di dalam sel bakteri, sehingga sel inang
                  membesar dan akhirnya pecah. Partikel virus baru yang keluar
                  dari sel akan menginfeksi sel bakteri lainnya.
                </Text>
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
                <Text style={styles.desc}>
                  Siklus lisogenik merupakan kebalikan dari siklus litik, yaitu
                  proses terjadinya penyatuan DNA virus dengan DNA bakteri tanpa
                  menghancurkan dinding sel inang (bakteri), yang terjadi saat
                  bakteri bereproduksi normal (membelah diri). Penyatuan DNA
                  virus dan DNA bakteri disebut dengan istilah{' '}
                  <Text style={{fontWeight: 'bold'}}>lisogeni</Text>.
                </Text>
                <Text style={styles.desc}>
                  Siklus lisogenik terjadi apabila sel bakteri inang memiliki
                  pertahanan yang lebih baik dibandingkan daya infeksi virus,
                  sehingga sel inang tidak terjadi lisis tetapi dapat
                  bereproduksi secara normal (membelah diri) dan tidak langsung
                  memproduksi virion-virion baru. Pada siklus lisogenik, terjadi
                  replikasi genom virus tetapi tidak menghancurkan sel inang
                  berinteraksi kedalam kromosom sel inang membentuk profag.
                </Text>
                <Text style={[styles.desc]}>
                  Apabila bakteri yang mengandung profag membelah diri, maka DNA
                  virus akan membelah mewariskan profag kepada sel anaknya
                  sehingga mengalami penggandaan. Profag di dalam sel anak
                  bakteri inang tersebut dapat menjadi aktif dan keluar dari
                  kromosom sel inang untuk memasuki proses siklus litik. Virus
                  yang dapat bereproduksi dengan siklus lisogenik dan siklus
                  litik disebut{' '}
                  <Text style={{fontWeight: 'bold'}}>virus temperat</Text>.
                  Tahapan/fase yang terjadi selama siklus lisogenik adalah
                  sebagai berikut:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  a. Fase Adsorbsi
                </Text>
                <Text style={[styles.desc]}>Virus menempel pada bakteri.</Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  b. Fase Penetrasi
                </Text>
                <Text style={[styles.desc]}>
                  Virus memasukkan DNA ke dalam sel bakteri.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  c. Fase Penyisipan/Penggabungan
                </Text>
                <Text style={[styles.desc]}>
                  Tahap yang membedakan daur litik dan daur lisogenik adalah
                  tahap penggabungan dan fase penggandaan. Fase penggabungan
                  terjadi ketika bakteri inang yang virus tempati cukup kuat.
                </Text>
                <Text style={[styles.desc]}>
                  DNA sel inang yang terinfeksi DNA virus mengakibatkan benang
                  ganda berpilin DNA sel inang menjadi putus. Selanjutnya, DNA
                  virus menyisip di antara putusan dan menggabung dengan benang
                  bakteri. DNA virus yang menjadi satu dengan DNA sel inang
                  menjadi tidak aktif (disebut profag). Akibatnya, sel inang
                  yang terinfeksi akan memiliki DNA virus.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  d. Fase Pembelahan
                </Text>
                <Text style={styles.desc}>
                  Ketika bakteri menggandakan diri, maka profag juga ikut
                  melakukan replikasi sehingga kapsid bakteri anak mengandung
                  profag tersebut. Jumlah profage DNA virus akan mengikuti
                  jumlah sel inangnya.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  e. Fase Sintesis/Replikasi
                </Text>
                <Text style={[styles.desc]}>
                  Dalam keadaan tertentu, jika DNA virus yang tidak aktif
                  (profag) terkena zat kimia tertentu atau terkena radiasi
                  tinggi, maka DNA virus akan menjadi aktif kemudian dapat
                  menghancurkan DNA sel inang dan akan memisahkan diri.
                  Selanjutnya, DNA virus tersebut mensintesis protein sel
                  bakteri (inangnya) untuk digunakan sebagai kapsid bagi
                  virus-virus baru dan sekaligus melakukan replikasi diri
                  menjadi banyak.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  f. Fase Perakitan/Pematangan
                </Text>
                <Text style={[styles.desc]}>
                  Kapsid–kapsid dirakit menjadi kapsid virus yang utuh, yang
                  berfungsi sebagai selubung virus. Kapsid baru virus terbentuk
                  dan DNA hasil replikasi masuk ke dalamnya guna membentuk
                  virus-virus baru.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  g. Fase Lisis
                </Text>
                <Text style={[styles.desc]}>
                  Setelah terbentuk bakteri virus barulah terjadi litik. Jika
                  keadaan lingkungan mendukung, profag akan memisahkan diri dari
                  DNA bakteri untuk melakukan sintesis bagian virus.
                </Text>
                <Text style={[styles.desc]}>
                  Virus akan memasuki siklus litik.
                </Text>
                <ImageMateri
                  uri={require('../assets/image/cover2.jpg')}
                  title={'Siklus Litik dan Lisogenik'}
                  source={
                    'http://literasibio.blogspot.co.id/2015/12/siklus-hidup-virus-siklus-litik-dan_30.html'
                  }
                  nav={navigation}
                />
                <Text style={[styles.desc]}>
                  Berikut adalah perbedaan antara daur litik dan lisogenik.
                </Text>
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

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      No.
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('39'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Daur Litik
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('39'),
                      borderWidth: 0.6,
                      borderLeftWidth: 0,
                      borderColor: '#000',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      Daur Lisogenik
                    </Text>
                  </View>
                </View>

                {renderData()}
              </View>
            </View>

            {/* Klasifikasi Virus */}
            <View style={styles.main}>
              <View style={styles.head}>
                <Text style={styles.title}>B. Klasifikasi Virus</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Pengelompokkan virus biasanya dilakukan untuk suatu
                  kepentingan tertentu. Sejumlah informasi mengenai sifat-sifat
                  virus dapat digunakan sebagai dasar klasifikasi, namun tidak
                  semua virus memiliki informasi yang cukup untuk setiap
                  kategori. Beberapa dasar yang digunakan untuk klasifikasi
                  virus antara lain sebagai berikut.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    color: '#000',
                  }}>
                  1. Klasifikasi Berdasarkan Sel Inangnya
                </Text>
                <Text style={styles.desc}>
                  Berdasarkan sel inangnya, virus dibagi menjadi:
                </Text>
                {_renderCiri(
                  'a. ',
                  'Virus yang menyerang bakteri, virus bakteri mengandung materi genetik berupa DNA. Contohnya: Bakteriofage.',
                )}
                {_renderCiri(
                  'b. ',
                  'Virus yang menyerang hewan, mengandung materi genetik berupa DNA dan RNA. Contohnya: virus rabies (Rhabdovirus)',
                )}
                {_renderCiri(
                  'c. ',
                  'Virus yang menyerang tumbuhan, sebagian besar mengandung materi genetik berupa RNA. Contohnya: virus tembakau (TMV atau Tobacco Mozaik Virus).',
                )}
                {_renderCiri(
                  'd. ',
                  'Virus yang menyerang manusia, mengandung materi genetik berupa DNA dan RNA. Contohnya: HIV atau Human Immunodeficiency Virus).',
                )}
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginHorizontal: 12,
                    marginBottom: 16,
                    marginTop: 16,
                    color: '#000',
                  }}>
                  2. Klasifikasi Berdasarkan Struktur Asam Nukleatnya
                </Text>
                <Text style={styles.desc}>
                  Berdasarkan jenis materi genetiknya, virus dibagi menjadi
                  beberapa kelompok sebagai berikut:
                </Text>
                {_renderCiri(
                  'a. ',
                  'Deoksiribovirus/ virus DNA, yaitu virus yang asam nukleatnya berupa DNA contohnya Parvovirus, Papovavirus, Adenovirus, dan Herpesvirus.',
                )}
                {_renderCiri(
                  'b. ',
                  'Ribovirus/ virus RNA, yaitu virus yang asam nukleatnya berupa RNA contohnya Picornavirus, Togavirus, Flavivirus, Calicivirus, Coronavirus, Paramyxovirus, Rhabdovirus, Filovirus, Orthomyxovirus, Bunyavirus, Arenavirus, Reovirus, dan Retrovirus.',
                )}

                <View style={{alignItems: 'center', marginBottom: 12}}>
                  <View>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        navigation.navigate('ImagePage', {
                          url: require('../assets/image/m2/a22.png'),
                          title: 'Bentuk Virus RNA dan DNA',
                          source: 'http://www.gurupendidikan.com',
                        })
                      }>
                      <Image
                        style={{
                          width: wp('86'),
                          height: hp('30'),
                        }}
                        source={require('../assets/image/m2/a22.png')}
                        resizeMode={'stretch'}
                      />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        navigation.navigate('ImagePage', {
                          url: require('../assets/image/m2/a23.png'),
                          title: 'Bentuk Virus RNA dan DNA',
                          source: 'http://www.gurupendidikan.com',
                        })
                      }>
                      <Image
                        style={{
                          width: wp('86'),
                          height: hp('24'),
                          marginBottom: 12,
                        }}
                        source={require('../assets/image/m2/a23.png')}
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
                    {'Bentuk Virus RNA dan DNA'}
                  </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                      textAlign: 'center',
                      maxWidth: wp('80'),
                      fontSize: 14,
                    }}>{`(Sumber: http://www.gurupendidikan.com)`}</Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginHorizontal: 12,
                      marginBottom: 16,
                      marginTop: 16,
                      color: '#000',
                      textAlign: 'center',
                    }}>
                    Tabel 2. Klasifikasi Virus Berdasarkan Struktur Asam
                    Nukleatnya serta Reproduksi dan Penyakit yang ditimbulkan
                  </Text>

                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        No.
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        Tipe Asam Nukleat
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        Proses Reproduksi
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        Virus
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        Penyakit yang Ditimbulkan
                      </Text>
                    </View>
                  </View>

                  {/* No. 1 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>1.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>DNA Untai Ganda</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Replikasi</Text>
                    </View>
                    <View>
                      <View
                        style={{
                          width: wp('86'),
                          alignSelf: 'center',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Herpesviridae
                          </Text>
                        </View>

                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Herpes simpleks I (luka di sekeliling mulut ; dan
                            Herpes simpleks II (luka pada alat kelamin)
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Varicella zoster
                          </Text>
                        </View>

                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>Cacar air</Text>
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Poxviridae
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Virus{' '}
                            <Text style={{fontStyle: 'italic'}}>Smallpox</Text>{' '}
                            (cacar),{' '}
                            <Text style={{fontStyle: 'italic'}}>Vaccinia</Text>{' '}
                            (cacar sapi)
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Papovaviridae
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            <Text style={{fontStyle: 'italic'}}>
                              Papillomavirus
                            </Text>{' '}
                            (kutil)
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Adenovirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Penyakit pernapasan serta infeksi lambung dan usus
                            (Gastroenteritis), mata, dan kandung kemih.
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Papillomavirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                          }}>
                          <Text style={{textAlign: 'center'}}>Kanker</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* No. 2 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>2.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        DNA untai tunggal
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Replikasi</Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontStyle: 'italic', textAlign: 'center'}}>
                        Parvovirus
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        Penyakit kulit{' '}
                        <Text style={{fontStyle: 'italic'}}>mild rush</Text>
                      </Text>
                    </View>
                  </View>

                  {/* No. 3 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>3.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>RNA untai ganda</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Replikasi</Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontStyle: 'italic', textAlign: 'center'}}>
                        Reovirus
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        Infeksi Saluran Pernapasan Akut (ISPA) dan
                        Gastroenteritis infantil pada bayi
                      </Text>
                    </View>
                  </View>

                  {/* No. 4 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>4.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        RNA (+) untai tunggal
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Replikasi</Text>
                    </View>
                    <View>
                      <View
                        style={{
                          width: wp('86'),
                          alignSelf: 'center',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Retrovirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Penyakit menular seperti leukimia dan HIV/AIDS
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Coronavirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>Pneumonia</Text>
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Picornavirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Pilek dan Hepatitis A
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Orthomyxovirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>Influenza</Text>
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Poliovirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>Polio</Text>
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Flavivirus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                          }}>
                          <Text style={{textAlign: 'center'}}>
                            Hepatitis C, demam berdarah (virus Dengue)
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* No. 5 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>5.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        RNA (-) untai tunggal
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Replikasi</Text>
                    </View>
                    <View>
                      <View
                        style={{
                          width: wp('86'),
                          alignSelf: 'center',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Rhabdovirus
                          </Text>
                        </View>

                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomColor: '#fff',
                          }}>
                          <Text style={{textAlign: 'center'}}>Rabies</Text>
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
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            padding: 5,
                          }}>
                          <Text
                            style={{textAlign: 'center', fontStyle: 'italic'}}>
                            Paramycovyrus
                          </Text>
                        </View>
                        <View
                          style={{
                            width: wp('24'),
                            borderWidth: 0.6,
                            borderLeftWidth: 0,
                            borderColor: '#000',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                          }}>
                          <Text style={{textAlign: 'center'}}>Gondong</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* No. 6 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>6.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        RNA (+) untai tunggal dengan DNA perantara
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        Transkriptasi balik
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontStyle: 'italic', textAlign: 'center'}}>
                        Human immunodeviciency virus (HIV)
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>AIDS</Text>
                    </View>
                  </View>

                  {/* No. 7 */}
                  <View
                    style={{
                      width: wp('86'),
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('8'),
                        borderWidth: 0.6,
                        borderColor: '#000',
                        padding: 5,
                      }}>
                      <Text>7.</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        RNA untai ganda dengan RNA perantara
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('15'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        Transkriptasi balik
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{fontStyle: 'italic', textAlign: 'center'}}>
                        Hepadnavirus
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp('24'),
                        borderWidth: 0.6,
                        borderLeftWidth: 0,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>Heptitis B</Text>
                    </View>
                  </View>
                </View>

                {/* ICTV */}
                <Text style={[styles.desc, {marginTop: 20}]}>
                  Menurut sistem ICTV (
                  <Text style={{fontStyle: 'italic'}}>
                    International Committee on Taxonomy Viruses
                  </Text>
                  ), terdapat 4 tingkatan takson dalam klasifikasi virus, yaitu
                  ordo, famili, genus, dan spesies. Nama ordo diberi akhiran
                  <Text style={{fontStyle: 'italic'}}>–ales</Text>, famili
                  berakhiran <Text style={{fontStyle: 'italic'}}>–viridae</Text>
                  , genus berakhiran virus, dan nama pada spesies menggunakan
                  bahasa Inggris dan diakhiri dengan –virus. Contohnya{' '}
                  <Text style={{fontStyle: 'italic'}}>Herpesvirus</Text>.
                  Apabila ada subspesiesnya, biasanya ditambahkan angka romawi,
                  seperti{' '}
                  <Text style={{fontStyle: 'italic'}}>Herpesvirus I</Text>.
                </Text>
              </View>
            </View>

            {/* Tugas Proyek 1 */}
            <View style={styles.main}>
              <View style={[styles.head, {justifyContent: 'center'}]}>
                <Text style={styles.title}>Tugas Proyek 1</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.desc}>
                  Tujuan: Memahami struktur virus.{'\n'}Media: e-modul, buku,
                  internet.{'\n'}Langkah-langkah:
                </Text>

                {_renderCiri(
                  '1. ',
                  'Buatlah kelompok yang beranggotakan 3-5 orang.',
                )}
                {_renderCiri(
                  '2. ',
                  'Bualah 3 dimensi struktur virus dengan berbagai bentuk dan ukuran, menggunakan barang bekas.',
                )}
                {_renderCiri(
                  '3. ',
                  'Laporkan hasil karya kalian secara tertulis kepada guru.',
                )}
                {_renderCiri(
                  '4. ',
                  'Presentasikan struktur virus yang Anda buat bersama kelompok Anda.',
                )}
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
                  Allah (tadabbur). Virus dalam Al-Quran disebut dengan istilah
                  “<Text style={{fontStyle: 'italic'}}>binatang parasit</Text>”,
                  yaitu makhluk yang hanya dapat bergantung hidup dalam sel
                  tubuh makhluk hidup lain dengan memakan sel tubuh inang,
                  sehingga dapat dikategorikan sebagai makhluk hidup. Begitu
                  pula dikategorikan makhluk mati, karena dapat dikristalkan
                  apabila keluar dari sel inang sehingga disebut juga suatu
                  partikel.
                </Text>
                <Text style={[styles.desc]}>
                  Melalui ayat ini Allah menunjukkan kekuasaan-Nya melakukan
                  perubahan-perubahan menyangkut alam raya, itu pun berdasarkan
                  hukum-hukum alam yang ditetapkan-Nya. Dia mengeluarkan yang
                  hidup dari yang mati, dan mengeluarkan yang mati dari yang
                  hidup. Dari seorang mukmin yang hatinya hidup lahir seorang
                  kafir yang hatinya mati, atau sebaliknya; sekian banyak orang
                  kafir yang hatinya mati melahirkan putra-putri beriman. Dari
                  benda yang mati, seperti virus yang masuk ke dalam tubuh
                  menjadi penyakit. Dari yang hidup, seperti manusia yang
                  mengeluarkan virus melalui bersin dan batuk.
                </Text>
                <Text style={styles.desc}>
                  Ayat ini menunjukkan, betapa kuasanya Allah swt., sekaligus
                  menanamkan optimisme ke dalam hati setiap muslim yang
                  dirundung malang. Allah mengeluarkan yang hidup dari sesuatu
                  yang mati dan sebaliknya, yang diajarkan untuk diucapkan dalam
                  bentuk pernyataan dan doa. Apabila Allah menyuruh Rasul-Nya
                  membaca ayat ini sebagai doa, dan kemudian kita baca pula
                  sebagai doa, terlepaslah kita dari suasana terombang-ambing
                  melihat perubahan keadaan dan suasana di dalam alam ini. Dan
                  tertujulah rasa Tauhid, yaitu menghimpunkan kekuasaan dan
                  kemuliaan kepada Yang Satu. Maka bersyukurlah kepada Allah
                  ketika Diberi-Nya kurnia, dan bersabarlah atas percobaan-Nya
                  seketika Dia cabut. Tetapi apabila iman ada dalam hati,
                  perobahan keadaan tidaklah akan merobah hati. Sebab semua kita
                  dari Allah dan akan kembali kepada Allah.
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

export default Materi2;
