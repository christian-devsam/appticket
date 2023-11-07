import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import AppBar from "./AppBar.jsx";
import RepositoryList from "./components/RepositoryList.jsx"
import LogInPage from "./pages/Login.jsx"
import TicketViewDetail from "./components/TicketViewDetail.jsx";
import CloseRequest from "./components/CloseRequest.jsx";

const Stack = createStackNavigator();
//import './App.css';

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >           
            <Stack.Screen name="LogInPage" component={LogInPage} />                  
            <Stack.Screen name="RepositoryList" component={RepositoryList}/>
            <Stack.Screen name="TicketViewDetail" component={TicketViewDetail} />  
            <Stack.Screen name="CloseRequest" component={CloseRequest} />            
        </Stack.Navigator>
    </NavigationContainer>                          
    )
}

export default App;
