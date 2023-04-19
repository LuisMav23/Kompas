import React from 'react';
import {StyleSheet, Image, TouchableOpacity,Text } from 'react-native';

const SOSButton = ({ onPress}) =>  {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '900'}}>SOS</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#FD4233',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SOSButton;