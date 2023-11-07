import React , { useEffect , useState } from "react";
import { useRoute } from '@react-navigation/native';

export async function UpdateData(prop) {
    
    const url = 'http://localhost:4433/api/itsm3';
console.log(prop);
    const response = await 
    fetch( url, 
        { method: "POST", 
          headers: { 
            "Content-Type": "application/json", // Indicamos que estamos enviando datos en formato JSON 
        }, body: JSON.stringify(prop), // Convertimos el objeto a JSON para enviarlo en el cuerpo de la solicitud
     }) .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    }) 
      .then((data) => { // Aquí puedes manejar la respuesta del servidor 
        return data; 
    }) .catch((error) => {  
        console.error("Error en la solicitud:", error); 
    });

    const json = await response.json()
    return json;
  }

export async function UpdateTicket(prop) {
    

    UpdateData(prop)
    

}
