import react from "react";
import { View,Text,StyleSheet } from "react-native";
import { Link } from "expo-router";
//import { Link } from "react-router-native";


/*
const appBarTab = ({active, children, to}) => {
    return(
        <Link to={to}>
            <View style={BarStyle.sty_viewOptionBarNav}>
                <Text style={BarStyle.sty_optionBarNav}>{children}</Text>
            </View>
        </Link>
    );


}
*/

  


const BarNav = () => {
    return(

        <View style={BarStyle.sty_viewRow}>
            <View style={BarStyle.sty_viewOptionBarNav}>
                <Link href={"/src/doctores"} 
                      style={BarStyle.sty_optionBarNav}>Doctores
                </Link>
            </View>
            
             <View style={BarStyle.sty_viewOptionBarNav}>
             <Link href={"/src/paciente"} 
                      style={BarStyle.sty_optionBarNav}>Pacientes
                </Link>
            </View> 
            
            <View style={BarStyle.sty_viewOptionBarNav}>
                <Link href={"/src/citas"} 
                      style={BarStyle.sty_optionBarNav}>Citas
                </Link>
            </View>
            
            <View style={BarStyle.sty_viewOptionBarNav}>
                <Link href={"/src/main"} 
                      style={BarStyle.sty_optionBarNav}>[CERRAR]
                </Link>
            </View>

        </View>
    );
    





}


const BarStyle = StyleSheet.create({
    sty_viewRow:{
      marginTop:25,
      width:"100%",
      flexDirection:"row",
      display: "flex", 
      backgroundColor: "#483D8B",
    },
    sty_viewOptionBarNav:{
        paddingHorizontal:10,
        paddingVertical:5,
    },
    sty_optionBarNav:{
        color:"#F0F8FF",
        fontSize:15,
        fontWeight:"bold",
    },
}
);

export default BarNav;
