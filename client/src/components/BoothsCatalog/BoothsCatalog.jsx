import React from 'react'
import { SiCashapp } from 'react-icons/si'

function BoothsCatalog() {
  return (
    <div>
        <h3>Catalogo de Casetas <SiCashapp/></h3>
        <table>
            <tr>
                <td><strong>Casetas</strong></td>
                <td><strong>Precio Automovil (pesos)</strong></td>
                <td><strong>Precio Autobus (pesos)</strong></td>
            </tr>
            <tr>
                <td>La Rumorosa</td>
                <td>$30</td>
                <td>$114</td>
            </tr>
            <tr>
                <td>El Hongo</td>
                <td>$94</td>
                <td>$170</td>
            </tr>
            <tr>
                <td>Tijuana</td>
                <td>$151</td>
                <td>$224</td>
            </tr>
            <tr>
                <td>Rosarito</td>
                <td>$43</td>
                <td>$91</td>
            </tr>
            <tr>
                <td>Ensenada</td>
                <td>$47</td>
                <td>$95</td>
            </tr>
        </table>
    </div>
  )
}

export default BoothsCatalog