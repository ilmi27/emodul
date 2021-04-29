import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default class CEInput extends Component {
  render() {
    const {style, refComponent, multiline} = this.props;
    return (
      <TextInput
        {...this.props}
        ref={refComponent}
        textAlignVertical={multiline ? 'top' : 'center'}
        placeholderTextColor={'#9c9c9c'}
        style={[
          styles.textInput,
          multiline ? styles.multiline : {},
          style ? style : {},
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#000',
  },
  multiline: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: 100,
  },
});

CEInput.defaultProps = {
  secureTextEntry: false,
};
