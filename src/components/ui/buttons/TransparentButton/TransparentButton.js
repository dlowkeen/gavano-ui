import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../../themes';

const TransparentButton = ({disabled = false, onPress, label}) => {
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
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: Colors.green,
    fontSize: 20,
    textAlign: 'center',
  },
});

export {TransparentButton};
