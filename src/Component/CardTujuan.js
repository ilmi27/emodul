import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dataTujuan} from '../constants/dataTujuan';

const CardTujuan = () => {
  const _renderItem = (text) => {
    return (
      <View>
        <View
          style={{width: wp('92'), backgroundColor: '#CACFD2', height: 1}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 24,
          }}>
          <Icon name="check-circle" color="#2C3E50" size={22} />
          <Text style={{marginLeft: 16, fontSize: 16}}>{text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Icon name="lightbulb-on-outline" color="#fff" size={18} />
        <Text style={styles.title}>Tujuan Pembelajaran</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc}>
          Setelah mempelajari sub materi VIRUS, peserta didik diharapkan dapat:
        </Text>
        {_renderItem(dataTujuan.t1)}
        {_renderItem(dataTujuan.t2)}
        {_renderItem(dataTujuan.t3)}
        {_renderItem(dataTujuan.t4)}
        {_renderItem(dataTujuan.t5)}
        {_renderItem(dataTujuan.t6)}
        {_renderItem(dataTujuan.t7)}
        {_renderItem(dataTujuan.t8)}
        {_renderItem(dataTujuan.t9)}
        {_renderItem(dataTujuan.t10)}
        {_renderItem(dataTujuan.t11)}
        {_renderItem(dataTujuan.t12)}
        {_renderItem(dataTujuan.t13)}
        {_renderItem(dataTujuan.t14)}
        {_renderItem(dataTujuan.t15)}
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
  body: {
    paddingVertical: 12,
  },
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default CardTujuan;
