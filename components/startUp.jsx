import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const StartupScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../public/KOMPAS-logo-bg.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#0086F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '75%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default StartupScreen;