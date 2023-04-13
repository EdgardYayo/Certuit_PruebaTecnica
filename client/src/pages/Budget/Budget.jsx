import React, { useState } from 'react'
import style from 

function Budget() {

  let [data, setData] = useState({
    typeOfTravel:"",
    goRoute: "",
    backRoute: "",
    dateOfTravel: "",
    dateOfBack: "",
    wayOfTransportation: "",
    numberOfPassengers: 1,
    numberOfVehicles: 1
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
        ...data,
        [name]: value
    })
  }

  const handleTypeOfTravel = (event) => {
    setData({
        ...data,
        typeOfTravel: event.target.value,
    })
    //event.target.value = "Tipo de Viaje"
  }

  const handleGoRoute = (event) => {
    setData({
        ...data,
        goRoute: event.target.value,
    })
    //event.target.value = "Ruta de Ida"
  }

  const handleBackRoute = (event) => {
    setData({
        ...data,
        backRoute: event.target.value,
    })
    //event.target.value = "Ruta de Vuelta"
  }

  const handleVehicles = (event) => {
    setData({
        ...data,
        wayOfTransportation: event.target.value,
    })
    //event.target.value = "Unidad de Transporte"
  }

  const handleSubmit = () => {

  }

   console.log(data);
  return (
    <form className={style.container}>
        <h1>Genera un presupuesto</h1>
        <div>
            <select onChange={(e) => handleTypeOfTravel(e)}>
                <option>Tipo de Viaje</option>
                <option value={"Una direccion"}>Una direccion</option>
                <option value={"Viaje Redondo"}>Viaje Redondo</option>
            </select>
        </div>
        <div>
            <select onChange={(e) => handleGoRoute(e)}>
                <option>Ruta de Ida</option>
                <option value={"Mexicali, Tecate-Tijuana, Rosarito, Ensenada"}>Mexicali, Tecate-Tijuana, Rosarito, Ensenada</option>
                <option value={"Mexicali, Tecate"}>Mexicali, Tecate</option>
                <option value={"Mexicali, Tecate, Ensenada"}>Mexicali, Tecate, Ensenada</option>
                <option value={"Mexicali, Tijuana"}>Mexicali, Tijuana</option>
            </select>
        </div>
        <div>
            <select onChange={(e) => handleBackRoute(e)}>
                <option>Ruta de Vuelta</option>
                <option value={"Mexicali, Tecate-Tijuana, Rosarito, Ensenada"}>Mexicali, Tecate-Tijuana, Rosarito, Ensenada</option>
                <option value={"Mexicali, Tecate"}>Mexicali, Tecate</option>
                <option value={"Mexicali, Tecate, Ensenada"}>Mexicali, Tecate, Ensenada</option>
                <option value={"Mexicali, Tijuana"}>Mexicali, Tijuana</option>
            </select>
        </div>
        <div>
            <label>Fecha del Viaje (DIA/MES/AÑO HORA:MINUTOS AM/PM)</label>
            <input value={data.dateOfTravel} name='dateOfTravel' onChange={handleChange} type='text'/>
        </div>
        <div>
            <label>Fecha del Regreso (DIA/MES/AÑO HORA:MINUTOS AM/PM)</label>
            <input value={data.dateOfBack} name='dateOfBack' onChange={handleChange} type='text'/>
        </div>
        <div>
            <select onChange={(e) => handleVehicles(e)}>
                <option>Unidad de Transporte</option>
                <option value={"Automovil"}>Automovil</option>
                <option value={"Autobus"}>Autobus</option>
            </select>
        </div>
        <div>
            <label>Numero de Pasajeros</label>
            <input value={data.numberOfPassengers} name='numberOfPassengers' onChange={handleChange} type='number'/>
        </div>
        <div>
            <label>Numero de Vehiculos</label>
            <input value={data.numberOfVehicles} name='numberOfVehicles' onChange={handleChange} type='number'/>
        </div>
        <button type='submit'>Generar</button>
    </form>
  )
}

export default Budget