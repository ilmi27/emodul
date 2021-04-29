import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CEInput from '../Component/CEInput';
import {mainColor} from '../constants/color';
import CEPassword from './CEPassword';
import CEBottom from '../Component/CEBottom';

const Login = ({navigation}) => {
  const passRef = useRef(null);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView style={{marginBottom: 200}}>
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
            <View style={{marginTop: -16}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 28, color: mainColor}}>
                Masuk
              </Text>
              <View style={{marginTop: 16}}>
                <Text style={{fontWeight: 'bold', marginBottom: 12}}>
                  NIP / NIS
                </Text>
                <CEInput
                  placeholder={'NIP / NIS Anda'}
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
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderTopColor: '#f0f0f0',
              borderTopWidth: 1,
              backgroundColor: '#fff',
            }}>
            <Text style={{color: '#9c9c9c', textAlign: 'center'}}>
              Jika Anda sebagai siswa, untuk masuk harus menggunakan NIS dan
              password yang diberikan oleh guru, Sedangkan untuk guru silahkan
              daftar terlebih dahulu menggunakan NIP Anda.
            </Text>
            <TouchableOpacity
              style={{marginTop: 12}}
              onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: mainColor,
                }}>
                DAFTAR
              </Text>
            </TouchableOpacity>
          </View>
          <CEBottom disabled={false} onPress={() => alert('a')}>
            MASUK
          </CEBottom>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
