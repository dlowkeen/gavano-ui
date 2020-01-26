import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../../themes';

const RoundedButton = ({disabled = false, onPress, label}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.roundedButton}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    borderWidth: 1,
    borderColor: Colors.green,
    backgroundColor: Colors.green,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});

export {RoundedButton};
