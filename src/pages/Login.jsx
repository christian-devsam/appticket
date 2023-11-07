import React, { useState } from "react";
import { Formik, useField } from "formik";
import { Text, View , TextInput, Button , StyleSheet,TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from '../config.js';
import { ActivityIndicator } from "react-native-web";

const Login = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    const handleLogin = async () => {
        setLoading(true);
        try {
          
          const response = await signInWithEmailAndPassword(auth, email, password);
          
          console.log(response);
          navigation.navigate('RepositoryList');
        } catch (error) {
          console.error("Error de inicio de sesión:", error.message);
          
        }finally {
            setLoading(false);
        }
      };

    return (
        <View style={styles.formContainer}>
          <Image source={require('../assets/logo-cajalosandes.png')} style={styles.logo} resizeMode="contain" />
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              style={styles.input}
              placeholder="E-mail"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.showPasswordIcon}
              onPress={() => setShowPassword((prev) => !prev)}
            >
             ojito 
            </TouchableOpacity>
          </View>
          { loading ? (
            <ActivityIndicator size="large" color="#0000ff"/>
          ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
          )}
          
        </View>
      );
}


export default Login;

    
const styles = StyleSheet.create({
    error : {
        color : "red",
        fontSize : 12 ,
        marginBottom : 20 ,
        marginTop : -5
    },
    form : {
        margin : 12
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      inputContainer: {
        width: '80%',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      input: {
        fontSize: 16,
        paddingVertical: 8,
      },
      showPasswordIcon: {
        position: 'absolute',
        right: 0,
        bottom: 10,
      },
      buttonContainer: {
        width: '80%',
      },
      button: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
      }
})
