import React from 'react'

function RoutesCatalog() {
  return (
    <div>
        <h3>Catalogo de Rutas</h3>
        <table>
            <tr>
                <td><strong>Ruta</strong></td>
                <td><strong>Distancia Total</strong></td>
            </tr>
            <tr>
                <td>Mexicali, Tecate-Tijuana, Rosarito, Ensenada</td>
                <td>257.56 km</td>
            </tr>
            <tr>
                <td>Mexicali, Tecate</td>
                <td>129.75 km</td>
            </tr>
            <tr>
                <td>Mexicali, Tecate, Ensenada</td>
                <td>269.69 km</td>
            </tr>
            <tr>
                <td>Mexicali, Tijuana</td>
                <td>171.56 km</td>
            </tr>
        </table>
    </div>
  )
}

export default RoutesCatalog