
import React , { useEffect , useState } from "react";

const GetAllTickets = (indice) => {

    const [ticketList , setTicketList] = React.useState([ ])

    async function getData(indice) {

      const response = await fetch(`http://localhost:4433/api/itsm3?index=${indice}`)
      const json = await response.json()
      return json;
    }
  
    const fetchRepositories = async (indice) => {
      console.log("indice antes del foreach"+indice);
      const json = await getData(indice);
  
      let data_frmt = []
  
      json.requests.forEach((item) => {
  
          let aux = {
            id: item.id,
            estado: item.status.name,
            solicitante: item.requester.name,
            grupo: item.group.name,
            departamento: !item.requester.department ? "" : item.requester.department,
            Asignado_a: !item.technician ? "" : item.technician.name,
            Fecha_Solicitud: item.created_time.display_value,
            Fecha_Vencimiento: !item.due_by_time ? "" : item.due_by_time.display_value,
            SLA: !item.sla ? "" : item.sla.name,
            Descripcion: item.short_description,
            subject: item.subject
          }
  
          data_frmt.push(aux);
  
      })
  
      setTicketList(data_frmt)
    }

    useEffect(() => {
        fetchRepositories(indice)
      } , [])

    const refreshTickets = async (indice) => {
      console.log(indice);
    // Llamar a la función fetchRepositories para obtener los datos actualizados
    await fetchRepositories(indice);
    };
      
    return { ticketList, refreshTickets }

}

export default GetAllTickets