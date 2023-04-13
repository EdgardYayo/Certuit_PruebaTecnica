import React from 'react'
import VehiclesCatalog from '../../components/VehiclesCatalog/VehiclesCatalog'
import RoutesCatalog from '../../components/RoutesCatalog/RoutesCatalog'
import BoothsCatalog from '../../components/BoothsCatalog/BoothsCatalog'
import GasCatalog from '../../components/GasCatalog/GasCatalog'
import style from './Home.module.css';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {

  const userData = useSelector((state) => state.user);
  const nav = useNavigate();

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
        <section className={style.catalogs}>
            <VehiclesCatalog />
            <RoutesCatalog /> 
            <BoothsCatalog />
            <GasCatalog /> 
        </section>
        <section>
            <button onClick={() => nav("/budget")}>Generar Presupuesto</button>
            <button onClick={() => nav("/report")}>Ver Reportes</button>
        </section>
    </main>
  )
}

export default Home