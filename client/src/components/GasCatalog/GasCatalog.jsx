import React from 'react'
import { FaGasPump } from 'react-icons/fa'

function GasCatalog() {
  return (
    <div>
        <h3>Catalogo de Combustible <FaGasPump/></h3>
        <table>
            <tr>
                <td><strong>Tipo de Combustible</strong></td>
                <td><strong>Precio por Litro (pesos)</strong></td>
            </tr>
            <tr>
                <td>Gasolina</td>
                <td>$21.32</td>
            </tr>
            <tr>
                <td>Diesel</td>
                <td>$22.73</td>
            </tr>        
        </table>
    </div>
  )
}

export default GasCatalog