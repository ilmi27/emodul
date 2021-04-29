import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={styles.body}>
          <Text style={styles.title}>Menu</Text>
        </View>
        {/* <View>
          <Image
            resizeMode="stretch"
            source={require('../assets/image/bg-drawer.png')}
            style={{height: hp('36'), width: wp('76')}}
          />
        </View> */}
        <Drawer.Section>
          <DrawerItemList {...props} />
          <DrawerItem
            icon={({focused}) => (
              <Icon
                name="logout"
                size={26}
                color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
              />
            )}
            label="Logout"
            labelStyle={{fontSize: 16, fontWeight: 'bold'}}
            activeTintColor={'rgba(14,111,56,1)'}
            inactiveTintColor={'rgba(0,0,0,0.5)'}
            style={{marginHorizontal: 16}}
            onPress={() => props.navigation.navigate('Welcome')}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#136c40',
    height: 54,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DrawerContent;
