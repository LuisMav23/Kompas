import React from 'react';
import {StyleSheet, Image, TouchableOpacity } from 'react-native';

const RoundButton = ({ iconPath, onPress}) =>  {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={iconPath} style={styles.buttonIcons}/>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonIcons: { 
    width: 30,
    height: 30,
  },
});

export default RoundButton;