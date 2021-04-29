import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardNilai = ({data, answers, set, submitted}) => {
  const [jum, setJum] = useState(0);

  const _renderItem = (item, index) => {
    return (
      <View>
        <View
          style={{width: wp('92'), backgroundColor: '#CACFD2', height: 1}}
        />
        <View
          style={{
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="checkbox-marked" color={'#000'} size={20} />
          <Text
            style={{
              fontSize: 16,
              maxWidth: wp('70'),
              marginLeft: 16,
            }}>
            {item.answer}
          </Text>
        </View>
      </View>
    );
  };

  const onPress = () => {
    if (!submitted) {
      set(true);
      const j = answers.filter((i) => i.correct === true);
      setJum(j.length);
    }
  };

  const total = jum * 10;
  const kategori =
    total <= 55
      ? 'Kurang'
      : total > 55 && total <= 70
      ? 'Cukup'
      : total > 70 && total <= 85
      ? 'Baik'
      : 'Sangat Baik';

  return (
    <View>
      <View style={[styles.main, {marginBottom: submitted ? 0 : 16}]}>
        <View style={styles.head}>
          <Text style={styles.title}>Nilai</Text>
        </View>
        <TouchableOpacity
          style={styles.body}
          onPress={onPress}
          disabled={submitted ? true : false}>
          <Icon
            name={submitted ? 'checkbox-marked' : 'arrow-up-drop-circle'}
            color={'#fff'}
            size={26}
          />
          <Text style={styles.desc}>
            {submitted ? `${total} [${kategori}]` : 'Update Nilai'}
          </Text>
        </TouchableOpacity>
      </View>
      {submitted && (
        <View>
          <View style={[styles.main, {marginTop: 0}]}>
            <View style={styles.head}>
              <Text style={styles.title}>
                Bagaimana hasil pekerjaan kalian?
              </Text>
            </View>
            <View style={styles.body1}>
              <Text style={styles.desc1}>
                Apabila nilai kalian di atas 80 maka pelajarilah materi
                berikutnya. Namun apabila nilai kalian masih di bawah 80,
                cobalah untuk mempelajari secara cermat dan teliti terutama pada
                materi yang belum kalian pahami.
              </Text>
            </View>
          </View>
          <View style={[styles.main, {marginTop: 0, marginBottom: 16}]}>
            <View style={styles.head}>
              <Text style={styles.title}>Kunci Jawaban</Text>
            </View>
            <View
              style={[
                styles.body1,
                {paddingHorizontal: 0, paddingVertical: 0},
              ]}>
              <FlatList
                data={data}
                removeClippedSubviews={true}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => _renderItem(item, index)}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 16,
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
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#85A83F',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body1: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    fontSize: 22,
    textAlign: 'justify',
    color: '#fff',
    marginLeft: 16,
  },
  desc1: {
    fontSize: 18,
    color: '#000',
    textAlign: 'justify',
  },
});

export default CardNilai;
