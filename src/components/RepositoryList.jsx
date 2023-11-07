
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator  } from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';
import GetAllTickets from '../hooks/GetAllTickets.jsx';
import { useNavigation, useRoute  } from '@react-navigation/native';

import AppBar from "./AppBar.jsx";
import ModernAlert from './ModernAlert.jsx';


const RepositoryList = () => { 
  //const [refreshFlag, setRefreshFlag] = useState(false);
  
  const navigation = useNavigation();
  const route = useRoute();
  const { refresh, showAlert, formState   } = route.params || {}; 
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [indice, setIndice] = useState(0);

  const [load, setLoad] = useState(false);

  const {ticketList, refreshTickets } = GetAllTickets(indice);
// Efecto para detectar el cambio en el parámetro 'refresh' y recargar la lista
  React.useEffect(() => {
    if (refresh) {
      refreshTickets(indice); 
    }
  }, [refresh]);

  React.useEffect(() => {
      setLoad(true);
      refreshTickets(indice);
  }, [indice]);

  React.useEffect(() => {
    setLoad(false);
  }, [ticketList]);

  const handleRefreshButton = (value) => {

    let newindice = indice;
    if (value == "next"){
      if(ticketList.length > 9){
        newindice += 10;
      }
      
    }else if (value == "previous"){
      if(indice != 0){
        newindice = newindice - 10;
      }
      
    }

     setIndice(newindice);
    
  };

  useEffect(() => {
    if (showAlert) {
      setShowAlertModal(true); // Mostrar la alerta si showAlert es true
    }
  }, [showAlert]);

  const formStateData = formState || {};
return (
    
    <View style={{  flex : 1}}>
      <AppBar handleRefreshButton={handleRefreshButton} /> 
      
      {showAlertModal && (
        <ModernAlert
          title="¡Éxito!"
          message="La lista ha sido actualizada."
          onClose={() => setShowAlertModal(false)} // Cerrar la alerta al hacer clic en el botón "Cerrar"
          formState={formStateData}
        />
      )}

        {
          load ?  
          <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          </View>
        : 
        <FlatList 
          data={ticketList}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item: repo }) => (
            
              <RepositoryItem {...repo} />
              
          )}
          keyExtractor={(item) => item.id.toString()}
          extraData={ticketList}
        >
          
        </FlatList>
        }

      
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  refreshButton: {
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  refreshButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RepositoryList