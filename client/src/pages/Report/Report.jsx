import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReport } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import style from './Report.module.css';

function Report() {

  const nav = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const report = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(getReport(userData.id));
  }, [])


//console.log(report.reports);
  return (
    <>
    <section className={style.container}>
      { report.reports?.some((e) => typeof(e) === "object") ? report && report.reports?.map((r, i) => (
      <div key={r.i} className={style.reportContent}>
        <h2>Tu Reporte del Viaje</h2>
        <p><strong>Tipo de Viaje:</strong> {r.typeOfTravel}</p>
        <p><strong>Ruta de Ida:</strong> {r.goRoute}</p>
        <p><strong>Ruta de Regreso:</strong> {r.backRoute ? r.backRoute : "No aplica"}</p>
        <p><strong>Fecha de Viaje:</strong> {r.dateOfTravel}</p>
        <p><strong>Fecha de Regreso:</strong> {r.dateOfBack ? r.dateOfBack : "No aplica"}</p>
        <p><strong>Unidad de Transporte:</strong> {r.wayOfTransportation}</p>
        <p><strong>Numero de Pasajeros:</strong> {r.numberOfPassengers}</p>
        <p><strong>Numero de Vehiculos:</strong> {r.numberOfVehicles}</p>
        <h2>Costos</h2>
        <p><strong>Concepto de Combustible:</strong> ${r.costOfGas} pesos</p>
        <p><strong>Concepto de Peajes:</strong> ${r.costOfBooth} pesos</p>
        <p><strong>Concepto de Viaticos:</strong> ${r.costOfPilot} pesos</p>
        <p><strong>Total: </strong>${r.total} pesos</p>
      </div>
      )) : <h2>No has generado ningun reporte</h2>}
    </section>
    <button className={style.btn} onClick={() => nav("/home")}>Ver Catalogos</button>
    </>
  )
}

export default Report