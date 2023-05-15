import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList,StyleSheet, Button, Alert } from 'react-native';
import BarNav from './barnav';

const CitaPaciente = () => {


    return(
    
        <View style={MyStyle.sty_pantalla}>
                <BarNav/>
               
                <View style={MyStyle.sty_viewTitulo}>
                    <Text style={MyStyle.sty_titulo}>Citas</Text>
                </View>

                <View style={MyStyle.sty_viewRow}>
                    <Text>id:</Text>
                    <TextInput style={MyStyle.sty_textInput}></TextInput>
                </View>

                <View style={MyStyle.sty_viewRow}>
                    <Text>Nombre Doctor </Text>
                    <TextInput style={MyStyle.sty_textInput}></TextInput>
                </View>

                <View style={MyStyle.sty_viewRow}>
                    <Text>Nombre Paciente </Text>
                    <TextInput style={MyStyle.sty_textInput}></TextInput>
                </View>

                <View style={MyStyle.sty_viewRow}>
                    <Text>Fecha de Cita </Text>
                    <TextInput style={MyStyle.sty_textInput}></TextInput>
                </View>

                <View style={MyStyle.sty_viewRow}>
                    <Text>Hora de cita </Text>
                    <TextInput style={MyStyle.sty_textInput}></TextInput>
                </View>

                
               

                <View style={MyStyle.sty_viewButton}>
                    <Button title='Enviar'
                        onPress={() => Alert.alert("Has Precionado El Boton")}
                         />
                </View>

            </View>
 );
}

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
      fontWeight: "bold",
      alignItems:"center",
      marginBottom: 15,    
      marginTop:50,      
    },
  
    sty_viewButton:
    {
      width: "30%",  
      marginTop: 10,  
      marginLeft: 150,
  
    }
  
  })


export default CitaPaciente;