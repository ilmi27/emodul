import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import Header from '../Component/Header';
import CardTes from '../Component/CardTes';
import CardNilai from '../Component/CardNilai';
import {dataTes} from '../constants/dataTes';
import Loading from '../Component/Loading';

const TesFormatif = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const shuffleData = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const [data, setData] = useState(shuffleData(dataTes));
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const focusedEvent = navigation.addListener('focus', () => {
      _doRefresh();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return focusedEvent;
  }, [navigation]);

  const _doRefresh = () => {
    setLoading(true);
    setAnswers([]);
    setSubmitted(false);
    setData(shuffleData(dataTes));
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const renderFooter = () => {
    return (
      <View>
        <CardNilai
          data={data}
          answers={answers}
          set={(val) => setSubmitted(val)}
          submitted={submitted}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Uji Kompetensi'} />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <View>
            <FlatList
              refreshing={refreshing}
              onRefresh={() => _doRefresh()}
              data={data}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.id}
              renderItem={({item, index}) => (
                <CardTes
                  tes={item}
                  num={index + 1}
                  save={(val) => setAnswers(val)}
                  answers={answers}
                  data1={data}
                  saveData={(val) => setData(val)}
                  submitted={submitted}
                />
              )}
              ListFooterComponent={renderFooter()}
              style={{marginBottom: 54}}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default TesFormatif;
