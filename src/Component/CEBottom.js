import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class CEBottom extends Component {
  render() {
    const {disabled, grey, onPress, children} = this.props;

    if (grey) {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{flex: 1, opacity: 1}}>
          <View style={[styles.btnBottom, styles.greyBtn]}>
            <Text style={styles.captionBlack}>{children}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    if (disabled) {
      return (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#93F9B9', '#136c40']}
          style={[styles.btnBottom, {flex: 1, opacity: 0.2}]}>
          <Text style={styles.caption}>{children}</Text>
        </LinearGradient>
      );
    }

    return (
      <TouchableOpacity onPress={disabled ? null : onPress} style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#93F9B9', '#136c40']}
          style={styles.btnBottom}>
          <Text bold center style={styles.caption}>
            {children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnBottom: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyBtn: {
    backgroundColor: '#f0f0f0',
  },
  caption: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  captionBlack: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
