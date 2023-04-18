import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapView from "react-native-maps";

//Importing components
import Location from "./components/location";
import RoundButton from "./components/buttons";
import StartupScreen from "./components/startUp";

export default function App() {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.parent}>
      {isLoading ? (
        <StartupScreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.topRow}>
            <RoundButton iconPath={require("./public/settingsIcon.png")} />
            <Location />
            <RoundButton iconPath={require("./public/profileIcon.png")} />
          </View>
          <View style={styles.bottomRow}></View>
          <MapView style={styles.map} initialRegion={initialRegion} />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    zIndex: 1,
    marginTop: 50,
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomRow: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 1,
    width: "100%",
    height: 250,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});
