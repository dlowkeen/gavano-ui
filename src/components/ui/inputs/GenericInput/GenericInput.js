import React from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';

const GenericInput = ({onChangeText, label, value}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={label}
        editable
        onBlur={Keyboard.dismiss}
        maxLength={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 50,
    width: '80%',
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {GenericInput};
