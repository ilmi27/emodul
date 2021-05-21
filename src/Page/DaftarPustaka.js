import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Component/Header';
import CardDapus from '../Component/CardDapus';
import Loading from '../Component/Loading';

const DaftarPustaka = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Daftar Pustaka'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <ScrollView>
            <View>
              <CardDapus />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default DaftarPustaka;
