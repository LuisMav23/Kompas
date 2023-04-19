import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

//Importing components
import StartupScreen from "./components/startUp";
import Main from "./components/main";

export default function App() {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.parent}>
      {isLoading ? (
        <StartupScreen />
      ) : (
        <Main/>
      )}
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  
});

