import React from 'react';
import {StyleSheet, Image, TouchableOpacity,Text } from 'react-native';

const DirectionButton = ({ onPress}) =>  {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={require('../public/dir.png')} style={styles.buttonIcons}/>
        <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '700', marginLeft: 10}}>Direction</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 120,
    height: 45,
    backgroundColor: '#FFC200',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonIcons: { 
    width: 15,
    height: 15,
  },
});

export default DirectionButton;