import React from 'react';
import {FlatList, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Header from '../Component/Header';
import CardPetunjuk from '../Component/CardPetunjuk';
import {dataPetunjuk} from '../constants/dataPetunjuk';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Petunjuk = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Petunjuk'} />
        <View>
          <FlatList
            style={styles.list}
            data={dataPetunjuk}
            removeClippedSubviews={true}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CardPetunjuk item={item} />}
            ListFooterComponent={() => {
              return (
                <View style={styles.footer}>
                  <Text style={styles.footerText}>
                    SELAMAT BELAJAR, SEMOGA SUKSES
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {marginBottom: 72},
  footer: {
    backgroundColor: mainColor,
    marginTop: 16,
    padding: 12,
    width: wp('92'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  footerText: {color: '#fff', fontSize: 16, textAlign: 'center'},
});

export default Petunjuk;
