import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import Header from '../Component/Header';
import CardKIKD from '../Component/CardKIKD';

const KIKD = ({navigation}) => {
  const ki = {
    ki3: {
      text:
        'Memahami, menerapkan, menganalisis pengetahuan faktual, konseptual, prosedural berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait penyebab fenomena dan kejadian, serta menerapkan pengetahuan prosedural pada bidang kajian yang spesifik sesuai dengan bakat dan minatnya untuk memecahkan masalah.',
      numbering: 'KI 3.',
    },
    ki4: {
      text:
        'Mengolah, menalar, dan menyaji dalam ranah konkrit dan ranah abstrak  terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri, dan mampu menggunakan metode sesuai kaidah keilmuan.',
      numbering: 'KI 4.',
    },
  };

  const kd = {
    kd3: {
      text:
        'Menganalisis struktur dan replikasi, serta peran virus dalam aspek kesehatan masyarakat.',
      numbering: 'KD 3.4.',
    },
    kd4: {
      text:
        'Melakukan kampanye  tentang bahaya virus dalam kehidupan terutama bahaya AIDS berdasarkan tingkat virulensinya melalui berbagai media informasi.',
      numbering: 'KD 4.4.',
    },
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'KI & KD'} />
        <ScrollView>
          <View>
            <CardKIKD
              ki={ki}
              ic="lightbulb-on-outline"
              tp={'Kompetensi Inti (KI)'}
            />
          </View>
          <View>
            <CardKIKD
              kd={kd}
              ic="file-document-outline"
              tp={'Kompetensi Dasar (KD)'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default KIKD;
