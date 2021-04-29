import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardKIKD = ({ki, kd, ic, tp}) => {
  const _renderItem = (text, numbering) => {
    return (
      <View>
        <View
          style={{
            width: wp('92'),
            backgroundColor: '#CACFD2',
            height: 1,
          }}
        />
        <View
          style={{
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 24,
            flexDirection: 'row',
            marginRight: wp('12'),
          }}>
          <Text style={{fontWeight: 'bold'}}>{numbering}</Text>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 16,
              textAlign: 'justify',
            }}>
            {text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Icon name={ic} color="#fff" size={18} />
        <Text style={styles.title}>{tp}</Text>
      </View>
      {ki && (
        <View style={styles.body}>
          {_renderItem(ki.ki3.text, ki.ki3.numbering)}
          {_renderItem(ki.ki4.text, ki.ki4.numbering)}
        </View>
      )}
      {kd && (
        <View style={styles.body}>
          {_renderItem(kd.kd3.text, kd.kd3.numbering)}
          {_renderItem(kd.kd4.text, kd.kd4.numbering)}
        </View>
      )}
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
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default CardKIKD;
