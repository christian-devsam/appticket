import React from "react"
import { Image, StyleSheet, View  } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";


const RepositoryItemHeader = (props) => (    

    <View style={{ flexDirection : "row" , paddingBottom : 2}}>                       
        
        <View style={{flex : 1}}> 
            <StyledText fontWeight="bold" fontSize="subheading">#{props.id} | {props.solicitante}</StyledText>
            <StyledText>{props.subject}</StyledText> 
            
        </View>
        <View style={{paddingRight : 10}}>
            <StyledText style={styles.estado} estado={props.estado} estadoColor={props.estado}>{props.estado}</StyledText>             
        </View>
    </View>
    //<Image style={styles.image} source={{uri : "https://avatars.githubusercontent.com/u/1561955?=v4"}} />                 

)

const styles = StyleSheet.create({       
    estado : {
        padding : 4,           
        alignSelf : "flex-start",
        marginVertical : 4,
        overflow : "hidden",
        borderRadius : 4
    },
    image : {
        width : 48, 
        height : 48 , 
        borderRadius : 4
    }
})

export default RepositoryItemHeader