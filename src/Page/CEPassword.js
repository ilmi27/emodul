import React, {Component} from 'react';
import {View, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CEInput from '../Component/CEInput';

export default class CEPassword extends Component {
  state = {
    hidden: true,
  };

  render() {
    const {style, refComponent} = this.props;
    const {hidden} = this.state;

    return (
      <View style={[styles.password, style]}>
        <CEInput
          {...this.props}
          refComponent={refComponent}
          secureTextEntry={hidden}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => this.setState({hidden: !hidden})}>
          <Icon
            name={hidden ? 'eye' : 'eye-slash'}
            style={styles.eye}
            size={18}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  password: {
    position: 'relative',
  },
  icon: {
    padding: 10,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 0 : 5,
    right: 10,
  },
  eye: {
    color: '#9c9c9c',
  },
});
