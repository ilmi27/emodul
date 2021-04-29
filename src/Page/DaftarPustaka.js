import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Component/Header';
import CardDapus from '../Component/CardDapus';

const DaftarPustaka = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Daftar Pustaka'} />
        <ScrollView>
          <View>
            <CardDapus />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DaftarPustaka;
