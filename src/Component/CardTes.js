import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {mainColor} from '../constants/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardTes = ({tes, num, save, answers, data1, saveData, submitted}) => {
  // const shuffleData = (array) => {
  //   let i = array.length - 1;

  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * array.length);
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  //   return array;
  // };

  const [data, setData] = useState(tes.options);
  const [tmpData, setTmpData] = useState(tes.options);

  const _renderItem = (item, index) => {
    const asc = index + 65;
    const optionsLetter = String.fromCharCode(asc);
    return (
      <TouchableOpacity
        disabled={item.selected || submitted ? true : false}
        onPress={() => _selectAnswer(item, index)}
        style={{
          backgroundColor: submitted
            ? item.selected &&
              (item.correct ? 'rgba(140,196,63,0.8)' : 'rgba(235,28,35,0.8)')
            : item.selected
            ? '#CACFD2'
            : '#fff',
        }}>
        <View
          style={{width: wp('92'), backgroundColor: '#CACFD2', height: 1}}
        />
        <View
          style={{
            justifyContent: 'space-between',
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              maxWidth: wp('70'),
              fontWeight: item.selected ? 'bold' : 'normal',
            }}>{`${optionsLetter}. ${item.answer}`}</Text>

          {submitted ? (
            item.selected &&
            (item.correct ? (
              <Icon name="check" color={'#000'} size={20} />
            ) : (
              <Icon name="close" color={'#000'} size={20} />
            ))
          ) : item.selected ? (
            <Icon name="checkbox-blank-circle" color={'#000'} size={20} />
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const _selectAnswer = (item, index) => {
    const elementsIndex1 = data1.findIndex((element) => element.id === tes.id);
    let newArrayData = [...data1];
    newArrayData[elementsIndex1] = {
      ...newArrayData[elementsIndex1],
      selected: true,
    };
    saveData(newArrayData);

    const elementsIndex = tmpData.findIndex(
      (element) => element.id === item.id,
    );
    let newArray = [...tmpData];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      selected: !newArray[elementsIndex].selected,
    };
    setData(newArray);

    const an = answers.filter((i) => i.id_answer === tes.id);

    if (an.length === 0) {
      const e = newArray.filter((i) => i.id === item.id);
      const b = Object.assign({}, e);

      const arr = Object.entries(b).map(([key, value]) => {
        const c = value.correct ? value.correct : false;
        const d = {id_answer: tes.id, answer: value.answer, correct: c};
        const newArr = [...answers, d];
        return newArr;
      });
      save(arr[0]);
    } else {
      const e = newArray.filter((i) => i.id === item.id);
      const b = Object.assign({}, e);

      const arr1 = Object.entries(b).map(([key, value]) => {
        const c = value.correct ? value.correct : false;
        const el = answers.findIndex((el) => el.id_answer === tes.id);
        let ay = [...answers];
        ay[el] = {
          ...ay[el],
          correct: c,
          answer: value.answer,
        };
        return ay;
      });
      save(arr1[0]);
    }
  };

  return (
    <View style={[styles.main, {marginBottom: num === 5 ? 8 : 0}]}>
      <View style={styles.head}>
        <Text style={styles.title}>{`${num}. ${tes.question}`}</Text>
        {tes.image && (
          <Image
            source={tes.image}
            style={{
              width: 200,
              height: 240,
              marginTop: 8,
              alignSelf: 'center',
              borderRadius: 1,
            }}
            resizeMode={'contain'}
          />
        )}
      </View>
      <View>
        <FlatList
          data={data}
          removeClippedSubviews={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => _renderItem(item, index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 16,
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
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  desc: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
  },
  notSelect: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default CardTes;
