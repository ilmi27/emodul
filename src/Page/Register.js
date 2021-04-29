import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CEInput from '../Component/CEInput';
import {mainColor} from '../constants/color';
import CEPassword from './CEPassword';
import CEBottom from '../Component/CEBottom';

const Register = ({navigation, route}) => {
  const nipRef = useRef(null);
  const schollRef = useRef(null);
  const passRef = useRef(null);

  const backAction = () => {
    if (route.name === 'Register') {
      navigation.goBack();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView style={{marginBottom: 96}}>
          <View style={{paddingHorizontal: 16}}>
            <Image
              source={require('../assets/image/lg.png')}
              style={{
                width: 240,
                height: 240,
                alignSelf: 'center',
                marginTop: 16,
              }}
            />
            <TouchableOpacity
              style={{position: 'absolute', left: 16, top: 16}}
              onPress={() => navigation.goBack(null)}>
              <Icon name={'chevron-left'} size={26} color={'rgba(0,0,0,0.4)'} />
            </TouchableOpacity>
            <View style={{marginTop: -16}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 28, color: mainColor}}>
                Daftar
              </Text>
              <View style={{marginTop: 16}}>
                <Text style={{fontWeight: 'bold', marginBottom: 12}}>Nama</Text>
                <CEInput
                  placeholder={'Nama Anda'}
                  returnKeyType={'next'}
                  onSubmitEditing={() => nipRef.current.focus()}
                />
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{fontWeight: 'bold', marginBottom: 12}}>NIP</Text>
                <CEInput
                  placeholder={'NIP Anda'}
                  keyboardType={'phone-pad'}
                  refComponent={nipRef}
                  returnKeyType={'next'}
                  onSubmitEditing={() => schollRef.current.focus()}
                />
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{fontWeight: 'bold', marginBottom: 12}}>
                  Sekolah
                </Text>
                <CEInput
                  placeholder={'Nama Sekolah Anda'}
                  refComponent={schollRef}
                  returnKeyType={'next'}
                  onSubmitEditing={() => passRef.current.focus()}
                />
              </View>

              <View style={{marginTop: 16}}>
                <Text style={{fontWeight: 'bold', marginBottom: 12}}>
                  Password
                </Text>
                <CEPassword
                  autoCapitalize="none"
                  placeholder={'Password Anda'}
                  refComponent={passRef}
                />
                <Text style={{color: '#9c9c9c', fontSize: 12, marginTop: 8}}>
                  Panjang password minimal 6 karakter
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
          }}>
          <CEBottom disabled={false} onPress={() => alert('a')}>
            DAFTAR
          </CEBottom>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Register;
