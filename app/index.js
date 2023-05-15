import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import LoginScreen from './src/components/main';
import Paciente from './src/paciente';
import Doctores from './src/doctores';
import CitaPaciente from './src/citas';
import LoginScreen from './src/main.js';
import { Link } from 'expo-router';
//import { NativeRouter } from 'react-router-native';
//import Button from "react-bootstrap/Button" ;
//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";
//import Offcanvas from "react-bootstrap/Offcanvas";
import BarNav from './src/barnav'



export default function App() {
  return (

    <View style={styles.container}>
       <LoginScreen/> 
    </View>
     
    

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});