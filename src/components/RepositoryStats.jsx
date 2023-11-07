import React from "react";
import { View, Text } from "react-native";

import StyledText from "./StyledText";

const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k`
    : String(value)
}


const RepositoryStats = props =>  {
    return(
        <View style={{flexDirection: "row" , justifyContent : "space-between"}}>
            <View>
                <StyledText align="left" >Fecha de solicitud</StyledText>
                <StyledText align="left">{props.Fecha_Solicitud}</StyledText>    
            </View>            
            <View>
                <StyledText align="left">Fecha de vencimiento</StyledText>
                <StyledText align="left">{props.Fecha_Vencimiento}</StyledText>
            </View>                                                              
        </View>
    )
} 

export default RepositoryStats
