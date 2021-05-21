import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImagePage = ({route, navigation}) => {
  const {url, title, source} = route.params;

  const images = [
    {
      url: '',
      props: {
        source: url,
      },
    },
  ];

  const _renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(0, 0, 0, 0.36)',
          alignItems: 'center',
          position: 'absolute',
          top: 16,
          left: 16,
          width: wp('100'),
          elevation: 99,
          height: 46,
          width: 46,
          borderRadius: 23,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={26} color={'#fff'} />
        </TouchableOpacity>
      </View>
    );
  };

  const _rendeFooter = () => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.36)',
          paddingHorizontal: 16,
          position: 'absolute',
          bottom: 0,
          width: wp('100'),
          elevation: 99,
          padding: 16,
        }}>
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        {source ? (
          <Text
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 12,
              marginTop: 6,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            {`(Sumber: ${source})`}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar backgroundColor={'#000'} />
        <ImageViewer
          imageUrls={images}
          renderIndicator={() => {}}
          saveToLocalByLongPress={false}
          renderFooter={_rendeFooter}
        />
        {_renderHeader()}
      </SafeAreaView>
    </>
  );
};

export default ImagePage;
