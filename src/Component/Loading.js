import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {Grid} from 'react-native-animated-spinkit';
import {mainColor} from '../constants/color';

const Loading = ({isVisible}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 20,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Grid size={48} color={mainColor} />
          <Text style={{color: mainColor, fontSize: 20, marginTop: 10}}>
            Loading ...
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default Loading;
