import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.topHeader}>
        <Text style = {styles.logoText}>Shop6</Text>
        <Text style = {styles.signInText}>Sign In</Text>
        <View>
          <TextInput  placeholder='Email' style={styles.inputSignin} />
          <TextInput  placeholder='Password' style={styles.inputSignin} />
            <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
              <Text style={styles.loginText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>SIGN In WITH APPLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>SIGN IN WITH GOOLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>SIGN In WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>SIGN In WITH AMAZON</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.loginScreenButton} onPress={ () => alert('Button with adjusted color pressed')}>
          <Text style={styles.loginText}>MERCHANT SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  topHeader: {
    padding: 20
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  signInText: {
    fontSize: 20,
    marginTop: 10,
  },
  inputSignin: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  signButton: {
    marginTop: 15
  },
  loginScreenButton:{
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#d6d6d6'
  },
  loginText:{
    color:'black',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  socialLogin: {
    padding: 20
  }
});
