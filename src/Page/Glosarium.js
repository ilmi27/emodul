import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, SectionList, View, StyleSheet} from 'react-native';
import Header from '../Component/Header';
import {dataGlosarium} from '../constants/dataGlosarium';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Loading from '../Component/Loading';

const Glosarium = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const _renderItem = (item) => {
    return (
      <View>
        <View
          style={{width: wp('92'), backgroundColor: '#CACFD2', height: 1}}
        />
        <View
          style={{
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 24,
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: 'bold'}}>{item.word}</Text>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 16,
              marginRight: wp('24'),
            }}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  const _renderHeader = (title) => {
    return (
      <View
        style={{
          backgroundColor: '#D0D3D4',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Glosarium'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <View style={{padding: 16}}>
            <SectionList
              sections={dataGlosarium}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => _renderItem(item)}
              renderSectionHeader={({section: {title}}) => _renderHeader(title)}
              style={styles.main}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 6,
    marginBottom: 54,
    borderWidth: 0.2,
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
});

export default Glosarium;
