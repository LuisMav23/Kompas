import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    const [unInput, setunInput] = useState('');
    const [pwInput, setpwInput] = useState('');

    const handleunInputChange = (text) => {
      setunInput(text);
    };
    
    const handlepwInputtChange = (text) => {
      setpwInput(text);
    };

  return (
    <SafeAreaView style={loginStyles.container}>
        <Image source={require('../public/KOMPAS-logo-bg.png')} style={styles.image} />
        <Text style={{color: '#FFFFFF', fontSize: 26, fontWeight: '100',marginBottom: 35}}>Login to your account</Text>
        <TextInput
        style={loginStyles.input}
        value={unInput}
        onChangeText={handleunInputChange}
        placeholder='Username'
      />
      <TextInput
        style={loginStyles.input}
        value={pwInput}
        onChangeText={handlepwInputtChange}
        secureTextEntry={true}
        placeholder='Password'
      />
      <TouchableOpacity style={loginStyles.loginButton}>
        <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: '400'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 200,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    backgroundColor: '#0086F8',
  },
  image: {
    width: '75%',
    height: 60,
    resizeMode: 'contain',
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#0086F8',
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;