import React, { useState, useEffect, useDebugValue } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet ,Text, Button, Alert } from 'react-native';
import { Link } from "expo-router";
//import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const handleLogin = () => {
    // Validar los datos de inicio de sesión aquí
  };

  return (
    
    <View style={MyStyle.sty_pantalla}>

        <View style={MyStyle.sty_viewRow}>
          <Text>Usuario: </Text>
          <TextInput style={MyStyle.sty_textInput}></TextInput>
        </View>
  
        <View style={MyStyle.sty_viewRow}>
          <Text >Clave: </Text>
          <TextInput style={MyStyle.sty_textInput}></TextInput>
        </View>
          
        <View style={MyStyle.sty_viewRow}>
          <Link href="/src/doctores"
                style={MyStyle.sty_linkLikeBtn}
          >
            ACEPTAR
          </Link>
        </View> 
      
    </View>
  );

 
};

const MyStyle = StyleSheet.create({
  sty_pantalla:{
    width: "100%",
    height: "100%",
    backgroundColor: "#C6E2FF",
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',

  },
  sty_textInput:{
    borderWidth:1,
    borderRadius:15,
    width:200,
    marginLeft:10,
    backgroundColor:"#FFF",
  },

  sty_viewRow:{
    flexDirection:"row",
    marginTop:10,
    marginRight:25,
    justifyContent: "flex-end",
    fontSize: 20,
  },

  sty_linkLikeBtn:{
    paddingHorizontal:10,
    paddingVertical:8,
    backgroundColor:"#2098FF",
    color:"#FFFFFF",
  },
})

export default LoginScreen;   
