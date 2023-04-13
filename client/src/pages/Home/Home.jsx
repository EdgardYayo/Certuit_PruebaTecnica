import React from 'react'
import VehiclesCatalog from '../../components/VehiclesCatalog/VehiclesCatalog'
import RoutesCatalog from '../../components/RoutesCatalog/RoutesCatalog'
import BoothsCatalog from '../../components/BoothsCatalog/BoothsCatalog'
import GasCatalog from '../../components/GasCatalog/GasCatalog'
import style from './Home.module.css';

function Home() {
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
            <button>Generar Presupuesto</button>
            <button>Ver Reportes</button>
        </section>
    </main>
  )
}

export default Home