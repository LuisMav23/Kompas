import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, {Marker} from "react-native-maps";

//Importing components
import Location from "../components/location";
import RoundButton from "./roundButton";
import DirectionButton from "./directionButton";
import SOSButton from "./sosButton";
import NewsButton from "./newsButton";
import NewsList from "./cards/newsList";
import SOS from "./cards/sos";

const Main = () => {
  const initialRegion = {
    latitude: 14.587289,
    longitude: 120.975486,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [unInput, setunInput] = useState("");
  const [pwInput, setpwInput] = useState("");

  const handleunInputChange = (text) => {
    setunInput(text);
  };

  const handlepwInputtChange = (text) => {
    setpwInput(text);
  };

  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const [isNewsButtonPressed, setIsNewsButtonPressed] = React.useState(false);

  const handleNewsButtonPress = () => {
    setIsNewsButtonPressed(!isNewsButtonPressed);
    handleAbleToOpen();
  };

  const [isSOSButtonPressed, setIsSOSButtonPressed] = React.useState(false);

  const handleSOSButtonPress = () => {
    setIsSOSButtonPressed(!isSOSButtonPressed);
    handleAbleToOpen();
  }

  const [isAbleToOpen, setIsAbleToOpen] = React.useState(false);

  const handleAbleToOpen = () => {
    if (isSOSButtonPressed == true || isNewsButtonPressed == true)
    setIsAbleToOpen(false);
    else
    setIsAbleToOpen(true);
  }


  return (
    <SafeAreaView style={styles.parent}>
      {!isLogged ? (
        <SafeAreaView style={loginStyles.container}>
          <Image
            source={require("../public/KOMPAS-logo-bg.png")}
            style={loginStyles.image}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: "100",
              marginBottom: 35,
            }}
          >
            Login to your account
          </Text>
          <TextInput
            style={loginStyles.input}
            value={unInput}
            onChangeText={handleunInputChange}
            placeholder="Username"
          />
          <TextInput
            style={loginStyles.input}
            value={pwInput}
            onChangeText={handlepwInputtChange}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity
            style={loginStyles.loginButton}
            onPress={handleLogin}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "400" }}>
              Login
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.topRow}>
            <RoundButton iconPath={require("../public/settingsIcon.png")} />
            <Location />
            <RoundButton iconPath={require("../public/profileIcon.png")} />
          </View>
          <View style={styles.bottomRow}>
            <DirectionButton />
            <NewsButton onPress={handleNewsButtonPress} />
            <SOSButton onPress={handleSOSButtonPress}/>
          </View>
          <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={{ latitude: 14.587289, longitude: 120.975486 }}
            title="Warning"
            description="There are dangerous incidents in this area."
            image={require('../public/red.png')}
            pinColor="red" // specify pin color
            />
            <Marker
            coordinate={{ latitude: 14.589229, longitude: 120.969768 }}
            title="Emergency"
            description="There's an emergency in this area."
            image={require('../public/violet.png')}
            pinColor="violet" // specify pin color
            />
            <Marker
            coordinate={{ latitude: 14.579405, longitude: 120.981738 }}
            title="Safe"
            description="This are hase increased in safety."
            image={require('../public/green.png')}
            pinColor="green" // specify pin color
            />
            <Marker
            coordinate={{ latitude: 14.596754, longitude: 120.976669}}
            title="Caution"
            description="Be cautious this areas might be dangerous."
            image={require('../public/yellow.png')}
            pinColor="yellow" // specify pin color
            />
          </MapView>
        </SafeAreaView>
      )}
      {(isNewsButtonPressed && isAbleToOpen) && <NewsList />}
      {(isSOSButtonPressed && isAbleToOpen) && <SOS />}
    </SafeAreaView>
  );
};

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
    marginTop: 30,
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomRow: {
    paddingTop: 5,
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 1,
    width: "100%",
    height: 85,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 200,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: "center",
    backgroundColor: "#0086F8",
  },
  image: {
    width: "75%",
    height: 60,
    resizeMode: "contain",
  },
  input: {
    height: 45,
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 30,
  },
  loginButton: {
    width: 100,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#0086F8",
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
