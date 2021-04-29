import * as React from 'react';
import {LogBox, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawerContent from './Component/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Home from './Page/Home';
import Petunjuk from './Page/Petunjuk';
import Pendahuluan from './Page/Pendahuluan';
import KIKD from './Page/KIKD';
import Materi from './Page/Materi';
import TesFormatif from './Page/TesFormatif';
import Glosarium from './Page/Glosarium';
import DaftarPustaka from './Page/DaftarPustaka';
import Profil from './Page/Profil';

import Splash from './Page/Splash';
import Welcome from './Page/Welcome';
import Materi1 from './Page/Materi1';
import Materi2 from './Page/Materi2';
import Materi3 from './Page/Materi3';
import Tes1 from './Page/Tes1';
import Tes2 from './Page/Tes2';
import Tes3 from './Page/Tes3';
import Kegiatan from './Page/Kegiatan';
import {StatusBar} from 'react-native';
import {mainColor} from './constants/color';

import Register from './Page/Register';
import Login from './Page/Login';
import ImagePage from './Page/ImagePage';

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{backgroundColor: '#fff', width: wp('76')}}
      drawerContentOptions={{
        activeTintColor: 'rgba(14,111,56,1)',
        inactiveTintColor: 'rgba(0,0,0,0.5)',
        itemStyle: {
          width: '100%',
          marginHorizontal: 0,
          height: 48,
          justifyContent: 'center',
          paddingHorizontal: 16,
        },
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <Icon
              name="home-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Petunjuk"
        component={Petunjuk}
        options={{
          title: 'Petunjuk',
          drawerIcon: ({focused}) => (
            <Icon
              name="alert-box-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pendahuluan"
        component={Pendahuluan}
        options={{
          title: 'Pendahuluan',
          drawerIcon: ({focused}) => (
            <Icon
              name="book-open-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="KIKD"
        component={KIKD}
        options={{
          title: 'KI & KD',
          drawerIcon: ({focused}) => (
            <Icon
              name="bookmark-multiple-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Materi"
        component={Materi}
        options={{
          title: 'Materi',
          drawerIcon: ({focused}) => (
            <Icon
              name="clipboard-text-multiple-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TesFormatif"
        component={TesFormatif}
        options={{
          title: 'Uji Kompetensi',
          drawerIcon: ({focused}) => (
            <Icon
              name="file-document-edit-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Glosarium"
        component={Glosarium}
        options={{
          title: 'Glosarium',
          drawerIcon: ({focused}) => (
            <Icon
              name="file-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DaftarPustaka"
        component={DaftarPustaka}
        options={{
          title: 'Daftar Pustaka',
          drawerIcon: ({focused}) => (
            <Icon
              name="square-edit-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profil"
        component={Profil}
        options={{
          title: 'Profil',
          drawerIcon: ({focused}) => (
            <Icon
              name="account-box-outline"
              size={22}
              color={focused ? 'rgba(14,111,56,1)' : '#B3B6B7'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Materi1"
          component={Materi1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Materi2"
          component={Materi2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Materi3"
          component={Materi3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kegiatan"
          component={Kegiatan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tes1"
          component={Tes1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tes2"
          component={Tes2}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Tes3" component={Tes3} />
        <Stack.Screen
          name="ImagePage"
          component={ImagePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={mainColor} barStyle={'light-content'} />
      <Navigation />
    </>
  );
};

export default App;
