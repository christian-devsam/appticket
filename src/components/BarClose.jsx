import React from "react";
import { Platform, ScrollView, StyleSheet , TouchableWithoutFeedback, View, TouchableOpacity  } from "react-native";
import StyledText from "./StyledText";
import  Constants  from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-dom";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center", 
      },
      text: {
        color: theme.colors.textSecondary,
        paddingHorizontal: 10,
      },
      scroll: {
        flexGrow: 1, 
      },
      active: {
        color: theme.colors.textPrimary,
      },
      signOutTab: {
        marginLeft: 16,
      },

})

const BarCloseTab = ({ children , to, onPress }) => {

    const { pathname } = useLocation();

    const active = pathname === to

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


const BarClose = () => {   
    const navigation = useNavigation();
    const handleSignOut = () => {
        navigation.navigate('LogInPage');
      };

    const handleBackup = () => {
        navigation.navigate('TicketViewDetail');
    };

    return (
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <BarCloseTab to="/">Tickets</BarCloseTab>
        </ScrollView>
        <BarCloseTab onPress={handleBackup} style={styles.signOutTab}>
            Volver
        </BarCloseTab>
        <BarCloseTab onPress={handleSignOut} style={styles.signOutTab}>
            Salir
        </BarCloseTab>
        </View>
    )
}

export default BarClose