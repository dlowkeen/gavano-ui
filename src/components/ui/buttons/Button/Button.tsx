import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../../themes';

const Button = ({disabled = false, onPress, label}) => {
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
    padding: 5,
    margin: 5,
  },
  buttonText: {
    color: Colors.green,
    fontSize: 20,
    textAlign: 'center',
  },
});

export {Button};
