import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMateri from '../Component/HeaderMateri';

const Kegiatan = ({navigation, route}) => {
  const data = route.params.data;
  const title = route.params.title;

  const _renderItem = (item, icon) => {
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
          <Icon name={icon} color="#2C3E50" size={22} />
          <Text style={{marginLeft: 16, fontSize: 16}}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderMateri navigation={navigation} title={title} />
      <ScrollView style={{marginVertical: 16}}>
        <View style={styles.main}>
          <View style={styles.head}>
            <Text style={styles.title}>Tujuan</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={data.tujuan}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => _renderItem(item, 'check')}
            />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.head}>
            <Text style={styles.title}>Alat dan Bahan</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={data.alatBahan}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => _renderItem(item, 'check')}
            />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.head}>
            <Text style={styles.title}>Cara Kerja</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={data.caraKerja}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => _renderItem(item, 'pencil-outline')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
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
  },

  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default Kegiatan;
