import React from "react";
import { StyleSheet,  Text } from "react-native";
import theme from "../theme.js"


const styles = StyleSheet.create({
    text : {
        color : theme.colors.textPrimary,
        fontSize : theme.fontSizes.body ,
        fontFamily : theme.fonts.main, 
        fontWeight : theme.fontWeights.normal
    },
    colorPrimary : {
        color : theme.colors.primary
    },
    colorSecondary : {
        color : theme.colors.textSecondary
    },
    bold : {
        fontWeight : theme.fontWeights.bold
    },    
    subheading : {
        fontSize : theme.fontSizes.subheading
    },
    textAlignCenter : {
        textAlign : "center"
    },
    colorAbierto : {
        backgroundColor : "#18ab38"
    },
    colorEspera : {
        backgroundColor : "#f7d200"
    },
    colorWhite : {
        color : "#fff"
    }

    
})

export default function StyledText({align , children  , color , fontSize ,  fontWeight , estado , estadoColor , style  ,   ...restOfProps}){
    const textStyles = [
        styles.text,
        color == "primary" && styles.colorPrimary,
        color == "secondary" && styles.colorSecondary, 
        estado == "Abierto" && styles.colorAbierto,
        estado == "En Espera" && styles.colorEspera,
        estadoColor == "Abierto" && styles.colorWhite,
        estadoColor == "En Espera" && styles.colorSecondary,
        fontSize == "subheading" && styles.subheading,
        fontWeight == "bold" && styles.bold,
        align =="center" && styles.textAlignCenter,
        style
    ]    
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}