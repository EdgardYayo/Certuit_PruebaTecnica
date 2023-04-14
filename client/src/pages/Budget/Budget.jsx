import React, { useState } from 'react'
import style from "./Budget.module.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReport } from '../../redux/actions';


function Budget() {

  const nav = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  let userId = userData.id;

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

  const handleSubmit = (event) => {
    event.preventDefault()
    let limitOfCar = 3;
    let limitOfBus = 20;
    const { typeOfTravel, goRoute, dateOfTravel, wayOfTransportation, numberOfPassengers, numberOfVehicles } = data
    if(!typeOfTravel || !goRoute || !dateOfTravel || !wayOfTransportation || !numberOfPassengers || !numberOfVehicles ){
        toast('Todos los campos son requeridos', {
            position: "top-center",
            theme: "dark",
            });
    } else if(!typeOfTravel){
        toast('El tipo de viaje es requerido', {
            position: "top-center",
            theme: "dark",
            });
    } else if(!goRoute){
        toast('La ruta de ida es requerida', {
            position: "top-center",
            theme: "dark",
            });
    } else if(!dateOfTravel){
        toast('La fecha del viaje es requerida', {
            position: "top-center",
            theme: "dark",
            });
    } else if(!wayOfTransportation){
        toast('La unidad de transporte es requerida', {
            position: "top-center",
            theme: "dark",
            });
    } else if(numberOfPassengers > 3 && numberOfVehicles === 1 && wayOfTransportation === "Automovil"){
        toast('Solo caben 3 personas en un automovil necesitara otro', {
            position: "top-center",
            theme: "dark",
            });
    } else if(numberOfPassengers > 20 && numberOfVehicles === 1 && wayOfTransportation === "Autobus"){
        toast('Solo caben 20 personas en un autobus necesitara otro', {
            position: "top-center",
            theme: "dark",
            });
    } else if(wayOfTransportation === "Automovil" && Math.ceil(numberOfPassengers / limitOfCar) > numberOfVehicles){
        toast('Necesitara mas vehiculos para viajar', {
            position: "top-center",
            theme: "dark",
            });
    } else if(wayOfTransportation === "Autobus" && Math.ceil(numberOfPassengers / limitOfBus) > numberOfVehicles){
        toast('Necesitara mas autobuses para viajar', {
            position: "top-center",
            theme: "dark",
            });
    } else {
        dispatch(createReport(data, userId))
        toast('Calculando presupuesto...', {
            position: "top-center",
            theme: "dark",
            });
        setTimeout(() => {
            nav("/report")
        }, 3000)
    }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
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
                <option>Ruta de Regreso</option>
                <option value={"Mexicali, Tecate-Tijuana, Rosarito, Ensenada"}>Mexicali, Tecate-Tijuana, Rosarito, Ensenada</option>
                <option value={"Mexicali, Tecate"}>Mexicali, Tecate</option>
                <option value={"Mexicali, Tecate, Ensenada"}>Mexicali, Tecate, Ensenada</option>
                <option value={"Mexicali, Tijuana"}>Mexicali, Tijuana</option>
            </select>
        </div>
        <div>
            <label>Fecha y Hora de Partida (DIA/MES/AÑO HORA:MINUTOS AM/PM)</label>
            <input value={data.dateOfTravel} name='dateOfTravel' onChange={handleChange} type='text'/>
        </div>
        <div>
            <label>Fecha y Hora de Regreso (DIA/MES/AÑO HORA:MINUTOS AM/PM)</label>
            <input value={data.dateOfBack} name='dateOfBack' onChange={handleChange} type='text'/>
        </div>
        <div>
            { data.typeOfTravel  && data.goRoute && data.dateOfTravel &&
            ( <select onChange={(e) => handleVehicles(e)}>
                <option>Unidad de Transporte</option>
                <option value={"Automovil"}>Automovil</option>
                <option value={"Autobus"}>Autobus</option>
            </select> ) }
        </div>
        { data.wayOfTransportation && (
        <div>
            <label>Numero de Pasajeros</label>
            <input value={data.numberOfPassengers} name='numberOfPassengers' onChange={handleChange} type='number'/>
        </div> )}
        { data.wayOfTransportation && (
        <div>
            <label>Numero de Vehiculos</label>
            <input value={data.numberOfVehicles} name='numberOfVehicles' onChange={handleChange} type='number'/>
        </div> )}
        { data.typeOfTravel && data.goRoute && data.dateOfTravel && data.wayOfTransportation && (
        <button type='submit'>Calcular Presupuesto</button> )}
        <ToastContainer/>
    </form>
  )
}

export default Budget;