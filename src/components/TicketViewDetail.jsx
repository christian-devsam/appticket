
import React, {useState } from 'react';
import { Text, ScrollView , View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute  } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons';
//import RepositoryItem from './RepositoryItem.jsx';
import GetAllTickets from '../hooks/GetAllTickets.jsx';

import BarPost from "./BarPost.jsx";

const TicketViewDetail = () => { 
  //const {ticketList } = GetAllTickets()
  const route = useRoute();
  const navigation = useNavigation();
  
  const { data } = route.params;

  const estados = [
    { label: "Cerrado", value: "3" },
    { label: "Resuelto", value: "4" },
  ];
  
  const resolutor = [
    { nombre: "BarrosPerez,MarceloAndres" },
  { nombre: "BarrosPerez,RodolfoAlexis" },
  { nombre: "BorottoChavez,GiovanniPaolo" },
  { nombre: "CortesBenavides,Nestor" },
  { nombre: "MorenoArroyo,FernandoSebastian" },
  { nombre: "ParrasCalderon,OscarAlejandro" },
  { nombre: "SepulvedaAlvarez,Pablo" },
  { nombre: "CornejoVelasquez,PabloMiguel" },
  { nombre: "LiendoMedina,JoseBenjamin" },
  { nombre: "MUÑOZGAETE,SEBASTIANPATRICIO" },
  { nombre: "OrtizEscobar,AngelTomas" },
  { nombre: "OsorioAcevedo,PabloAnibal" },
  { nombre: "RochaZuñiga,NicolasIgnacio" },
  { nombre: "AcevedoDiaz,FranciscoRicardo" },
  { nombre: "AlarconCardenas,MarioEduardo" },
  { nombre: "AyalaConcha,SebastianAlfredo" },
  { nombre: "BarrientosNeira,PatrickAaron" },
  { nombre: "CabreraPalacios,GerardoGustavo" },
  { nombre: "CifuentesSepulveda,PabloAntonio" },
  { nombre: "ContrerasOrrego,JavierMauricio" },
  { nombre: "CortesSalazar,CarlosIsaac" },
  { nombre: "CuevasDuran,JoseManuel" },
  { nombre: "DiazAlmendras,JorgeGonzalo" },
  { nombre: "DonosoTabilo,Rodolfo" },
  { nombre: "EncinaBravo,Rodrigo" },
  { nombre: "FigueroaReyes,MarioAlejandro" },
  { nombre: "GarridoGarrido,MarceloAlejandro" },
  { nombre: "GonzalezEncina,JoaquinIgnacio" },
  { nombre: "GonzalezGatica,Ricardo" },
  { nombre: "GONZALEZPEÑA,CARLOSEDUARDO" },
  { nombre: "GormazOjeda,Olegario" },
  { nombre: "HonoresGonzalez,Carlo" },
  { nombre: "JeldresArias,NiltonEdgardo" },
  { nombre: "MendezAponte,JhonnySamntty" },
  { nombre: "MuñozJara,RicardoAdolfo" },
  { nombre: "MuruaDaza,AndyHernan" },
  { nombre: "NunezAguilera,JorgeRolando" },
  { nombre: "OrtegaMunzenmayer,Jorge" },
  { nombre: "PastenRobles,BrunoEnrique" },
  { nombre: "PeñaChavez,MarceloAlejandro" },
  { nombre: "PizarroEscobar,Guillermo" },
  { nombre: "RamosAguilera,AndresEmir" },
  { nombre: "SaldiviaAbarzua,Juan" },
  { nombre: "SanchezGarrido,RenatoRodrigo" },
  { nombre: "SilvaOrellana,IvanPedro" },
  { nombre: "SilvaPerez,MauricioAlejandro" },
  { nombre: "VillagraGallardo,JuanCarlos" },
  { nombre: "ZunigaMoreno,EduardoAlberto" },
  { nombre: "GalindoJeraldo,PatricioAndrés" },
  { nombre: "PinoSilva,RenéHernán" }
  ]
  //const [selectedValue, setSelectedValue] = useState();

  const [formState, setFormState] = useState({
    id: data.id,
    estado: estados[0].value,
    solicitante: data.solicitante,
    grupo: data.grupo,
    asignado_a: data.Asignado_a,
    Descripcion: data.Descripcion,
    Resolutor: ''
  });

  const handleEstadoChange = (estadoValue) => {
    setFormState({ ...formState, estado: estadoValue });
  };

  const handleResolutorChange = (resValue) => {
    setFormState({ ...formState, Resolutor: resValue });
  };

  const handleSubmit = () => {
    if(formState.estado == '3' || formState.estado == '4'){
      navigation.navigate('CloseRequest', {formState}); 
    }
    // Aquí puedes enviar los datos del formulario a tu API o realizar cualquier acción que desees con los datos ingresados.
    console.log(formState);
  };

  

  return (
    <>
    <BarPost/>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>Número de Ticket:</Text>
      <TextInput
        style={styles.input}
        value={formState.id}
        //placeholder={data.id}
        editable={false}
      />

      <Text style={styles.label}>Estado de Ticket:</Text>
      <Picker
        selectedValue={formState.estado}
        onValueChange={handleEstadoChange}
        style={styles.picker}
      >
        {estados.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Solicitante:</Text>
      <TextInput
        style={styles.input}
        value={formState.solicitante}
        onChangeText={(text) => setFormState({ ...formState, solicitante: text })}
        //placeholder={data.solicitante}
        editable={false}
      />

      <Text style={styles.label}>Grupo:</Text>
      <TextInput
        style={styles.input}
        value={formState.grupo}
        onChangeText={(text) => setFormState({ ...formState, grupo: text })}
        //placeholder={data.grupo}
        editable={false}
      />

      <Text style={styles.label}>Técnico:</Text>
      <TextInput
        style={styles.input}
        value={formState.asignado_a}
        onChangeText={(text) => setFormState({ ...formState, asignado_a: text })}
        //placeholder={data.Asignado_a}
        editable={false}
      />

      <Text style={styles.label}>Departamento:</Text>
      <TextInput
        style={styles.input}
        value={formState.departamento}
        onChangeText={(text) => setFormState({ ...formState, departamento: text })}
        //placeholder={data.departamento}
        editable={false}
      />

      <Text style={styles.label}>Resolutor:</Text>
      <Picker
        selectedValue={formState.Resolutor}
        onValueChange={handleResolutorChange}
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una opción" value="" />
        {resolutor.map((res) => (
          <Picker.Item
            key={res.nombre}
            label={res.nombre}
            value={res.nombre}
          />
        ))}
      </Picker>
  
      <Text style={styles.label}>Descripcion:</Text>
      <TextInput
        style={styles.input}
        value={formState.Descripcion}
        onChangeText={(text) => setFormState({ ...formState, Descripcion: text })}
        //placeholder={data.Descripcion}
        editable={false}
      />


      <Text> </Text>
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
    </ScrollView>
    </>
  )

};

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
    width: 200, // Establecer un ancho para el Picker
    marginBottom: 20, // Agregar un margen inferior para separarlo del Text
  }
});

export default TicketViewDetail