import React from "react";
import { Image, View , Text , StyleSheet , Platform, TouchableOpacity } from "react-native";
import StyledText  from './StyledText';
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";
import theme from "../theme";
import { useNavigation } from '@react-navigation/native';
import GetAllTickets from '../hooks/GetAllTickets.jsx';

const RepositoryItem = (props) => {
    const navigation = useNavigation();
   
    
    const handleRepositoryItemPress = () => {
        
        navigation.navigate('TicketViewDetail',{  data: props }); 
    };

    return(
        <View key={props.id} style={styles.container}>   
            <TouchableOpacity onPress={() => handleRepositoryItemPress()}>
                <RepositoryItemHeader {...props}/>
                <RepositoryStats {...props} />    
            </TouchableOpacity>    
                
        </View>
    )

}

const styles = StyleSheet.create({
    
    container : {
        padding : 20 , 
        paddingVertical : 5
    },
    strong : {
        color : "#09f",
        fontWeight: "bold",
        marginBottom : 5
    },
    language : {
        padding : 4,
        color : theme.colors.white,
        backgroundColor : Platform.select({
            android : theme.colors.primary,
            web : "orange",
            default : "purple"
        }),
        alignSelf : "flex-start",
        overflow : "hidden",
        borderRadius : 4
    },
    image : {
        width : 48, 
        height : 48 , 
        borderRadius : 4
    }
})

export default RepositoryItem