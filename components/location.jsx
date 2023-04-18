import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';


class Location extends Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.FlexContainer}>
            <Text numberOfLines={1} style={{ fontSize: 9, marginTop: 15, fontWeight: 'regular' }}>Current Location</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 14, marginTop: 0, fontWeight: 'bold' }}>Taft Avenue, Ermita, Manila</Text>
          </View>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderRadius: 50,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  FlexContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Location;