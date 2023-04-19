import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from "react-native";

const SOS = () => {
  const [messInput, setMessInput] = useState("");

  const handleMessInputChange = (text) => {
    setMessInput(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 28, color: "#FD4233", fontWeight: "900" }}>
        SEND SOS
      </Text>
      <Text style={{ fontSize: 14, color: "#000", fontWeight: "200" }}>
        Your current location and message will be sent to your emergency contacts.
      </Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        value={messInput}
        onChangeText={handleMessInputChange}
        placeholder="Type your message here"
      />
      <Text style={{ fontSize: 12, color: "grey", fontWeight: "400" }}>
        Note: to change who recieves your SOS message, go to settings.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../../public/SOSbutton.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 2,
  },
  button: {
    width: 150,
    height: 150,
  },
  image: {
    width: 150,
    height: 150,
  },
  input: {
    height: 150,
    width: "85%",
    backgroundColor: "#EDEDED",
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default SOS;
