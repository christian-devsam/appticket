import React from "react";
import { Text, ScrollView, StyleSheet , TouchableWithoutFeedback, View, TouchableOpacity  } from "react-native";
//import { FaArrowLeft, FaArrowRight } from '@react-icons/all-files/fa';
import StyledText from "./StyledText";
//import  Constants  from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-dom";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center", 
      },
      text: {
        color: theme.colors.textSecondary,
        paddingHorizontal: 10,
        fontSize: 16,
      },
      scroll: {
        flexGrow: 1, 
      },
      active: {
        color: theme.colors.textPrimary,
        fontWeight: "bold", 
      },
      signOutTab: {
        marginLeft: 16,
        color:theme.colors.textPrimary,
      },
      refreshButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    refreshButtonText: {
        color: '#3498db',
        fontSize: 14,
        fontWeight: 'bold',
    },
    arrowContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
})

const AppBarTab = ({ children , to, onPress }) => {
    
    let active = false;

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    if (onPress) {
        return (
          <TouchableOpacity onPress={onPress}>
            <StyledText fontWeight="bold" style={textStyles}>
              {children}
            </StyledText>
          </TouchableOpacity>
        );
      }

    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight="bold" style={textStyles}>
                    {children}
            </StyledText>
        </Link>
    )
}


const AppBar = ({ handleRefreshButton }) => {   
    const navigation = useNavigation();
    const handleSignOut = () => {
        navigation.navigate('LogInPage');
      };

    return (
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <AppBarTab to="/">Tickets</AppBarTab>
        </ScrollView>
        <View style={styles.arrowContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={ () => handleRefreshButton("previous")}>
              
              izquierda
          </TouchableOpacity>

          <TouchableOpacity style={styles.refreshButton} onPress={ () => handleRefreshButton("next")}>
              derecha
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={() => handleRefreshButton("refresh")}>
          refrescar
      </TouchableOpacity>
        <AppBarTab onPress={handleSignOut} style={styles.signOutTab}>
            Salir
        </AppBarTab>
        </View>
    )
}

export default AppBar