import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList,StyleSheet, Button, Alert } from 'react-native';
import BarNav from './barnav';

const Doctores = () => {



 return(
  
  <View style={MyStyle.sty_pantalla}>
    <BarNav/>
     <View style={MyStyle.sty_viewTitulo}>
         <Text style={MyStyle.sty_titulo}>Doctores</Text>
    </View>
    <View style={MyStyle.sty_viewRow}>
         <Text>id:</Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
    <View style={MyStyle.sty_viewRow}>      
         <Text>Nombre: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
    <View style={MyStyle.sty_viewRow}>
         <Text>Apellido: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
    <View style={MyStyle.sty_viewRow}>
         <Text>Direccion: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
    <View style={MyStyle.sty_viewRow}>
         <Text>Especialidad: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
    <View style={MyStyle.sty_viewRow}>
         <Text>Fecha de Ingreso: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
  
    <View style={MyStyle.sty_viewRow}>
         <Text >Telefono: </Text>
         <TextInput style={MyStyle.sty_textInput}></TextInput>
    </View>
       
       <View style={MyStyle.sty_viewButton}>
        <Button title='Enviar' 
                onPress={()=>Alert.alert("Has Precionado El Boton")} 
        />
       </View>

  </View>//
 );//


  







}//

const MyStyle = StyleSheet.create({
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

  sty_titulo:{
    fontSize: 50, 
    fontWeight: "bold",//ahora voy a despegar el viewTitulo
  },

  sty_viewTitulo:{
    alignItems:"center",
    marginBottom: 15,    
    marginTop:15,
  },

  sty_pantalla:{
    width: "100%",
    height: "100%",
    backgroundColor: "#C6E2FF",

  },

  sty_button:{
    fontSize: 30, 
    fontWeight: "bold",//ahora voy a despegar el viewTitulo
    alignItems:"center",
    marginBottom: 15,    
    marginTop:50,    
  },

  sty_viewButton:
  {
    width: "30%",  
    marginTop: 25,  
    marginLeft: 215,

  }

})

export default Doctores;














