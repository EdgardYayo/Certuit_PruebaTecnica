import React from 'react'
import { FaCarSide } from 'react-icons/fa'

function VehiclesCatalog() {
  return (
    <div>
        <h3>Catalogo de Vehiculos <FaCarSide/></h3>
        <table>
            <tr>
                <td><strong>Vehiculo</strong></td>
                <td><strong>Tipo de Combustible</strong></td>
                <td><strong>Maximo numero de Pasajeros</strong></td>
            </tr>
            <tr>
                <td>Automovil</td>
                <td>Gasolina</td>
                <td>3 pasajeros</td>
            </tr>
            <tr>
                <td>Autobus</td>
                <td>Diesel</td>
                <td>20 pasajeros</td>
            </tr>
        </table>
    </div>
  )
}

export default VehiclesCatalog