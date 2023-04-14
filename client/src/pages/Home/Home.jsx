import React from 'react'
import VehiclesCatalog from '../../components/VehiclesCatalog/VehiclesCatalog'
import RoutesCatalog from '../../components/RoutesCatalog/RoutesCatalog'
import BoothsCatalog from '../../components/BoothsCatalog/BoothsCatalog'
import GasCatalog from '../../components/GasCatalog/GasCatalog'
import style from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cleanUserData } from '../../redux/actions'

function Home() {

  const userData = useSelector((state) => state.user);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(cleanUserData())
    nav("/");
  }

  if(Array.isArray(userData)){
    return (
      <main>
        <h3>Necesitas Registrarte e Iniciar Sesion para usar la Aplicacion</h3>
        <button onClick={() => nav("/register")}>Registrate</button>
        <button onClick={() => nav("/login")}>Inicia Sesion</button>
      </main>
    )
  }

  return (
    <main>
        <h1>PresupuestApp la forma mas facil de hacer presupestos para tus viajes</h1>
        <h2>Bienvenido {userData.name}</h2>
        <section className={style.catalogs}>
            <VehiclesCatalog />
            <RoutesCatalog /> 
            <BoothsCatalog />
            <GasCatalog /> 
        </section>
        <section className={style.btnContainer}>
            <button onClick={() => nav("/budget")}>Generar Presupuesto</button>
            <button onClick={() => nav("/report")}>Ver Reportes</button>
            <button onClick={() => handleLogOut()}>Cerrar Sesion</button>
        </section>
    </main>
  )
}

export default Home