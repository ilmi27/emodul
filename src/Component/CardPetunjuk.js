import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardPetunjuk = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
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
  },
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
  },
});

export default CardPetunjuk;
