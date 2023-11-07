
import React, { useState } from 'react';
import { Text, FlatList, View, TextInput, Button, StyleSheet, Alert  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute  } from '@react-navigation/native';
//import RepositoryItem from './RepositoryItem.jsx';
import GetAllTickets from '../hooks/GetAllTickets.jsx';

import { UpdateTicket } from '../hooks/UpdateTicket.jsx';

import BarPost from './BarPost.jsx';
import ModernAlert from './ModernAlert.jsx';

const CloseRequest = () => {

    const route = useRoute();
    const { formState } = route.params;

    const navigation = useNavigation();

    const closureOptions = [
      { label: "Activación de garantía", value: "1501" },
      { label: "Cancelado", value: "2" },
      { label: "Cerrado por desvinculación de usuario", value: "1801" },
      { label: "Cerrado por No Contacto Usuario", value: "301" },
      { label: "Exitoso", value: "1" },
      { label: "Moved", value: "901" },
      { label: "No se puede reproducir", value: "5" },
      { label: "Postpuesto", value: "3" },
      { label: "Relacionado a Ticket problema", value: "601" },
      { label: "Solución Temporal", value: "1201" },
    ];
    
    const [formClose, setFormClose] = useState({
      comentarios: '',
      codigo_cierre: closureOptions[0].value,
      descripcion_cerrada: ''
    });

    const handleCodigo = (codigoValue) => {
      setFormClose({ ...formClose, codigo_cierre: codigoValue });
    };

    const handleFormSubmit = () => {
      const prop = {formState, formClose};

      UpdateTicket(prop)

      
      navigation.navigate('RepositoryList', { showAlert: true }); 

      
    // Aquí puedes realizar las acciones necesarias al enviar el formulario
    // Por ejemplo, enviar los datos al servidor, almacenarlos localmente, etc.
    };

    const handleCancel = () => {
      navigation.goBack();
    };

    const [showAlert, setShowAlert] = useState(false); 

    return(
        <>
            <BarPost />
            <View style={styles.container}>

            

            <Text style={styles.label}>Código de cierre de solicitud</Text>
            <Picker
            selectedValue={formClose.codigo_cierre}
            onValueChange={handleCodigo}
            style={styles.picker}
            >
            <Picker.Item label="Seleccione una opción" value="" />
            {closureOptions.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
            </Picker>

            <Text style={styles.label}>Comentarios</Text>
            <TextInput
            style={styles.input}
            value={formClose.comentarios}
            onChangeText={(text) => setFormClose({ ...formClose, comentarios: text })}
            />


            <Text style={styles.label}>Comentarios de cierre de solicitud/Comentario de cambio de estado</Text>
            <TextInput
            style={styles.input}
            value={formClose.descripcion_cerrada}
            onChangeText={(text) => setFormClose({ ...formClose, descripcion_cerrada: text })}
            />

            <Button title="Enviar" onPress={handleFormSubmit} />
            <Button title="Cancelar" onPress={handleCancel} color="red" />

            {showAlert && (
              <ModernAlert
                title="¡Éxito!"
                message="Formulario enviado exitosamente."
                onClose={() => setShowAlert(false)} // Cerrar la alerta al hacer clic en el botón "Cerrar"
              />
            )}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    picker: {
      width: 250, // Establecer un ancho para el Picker
      marginBottom: 20, // Agregar un margen inferior para separarlo del Text
    }
  });

export default CloseRequest