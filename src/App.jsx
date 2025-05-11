//import { useState } from 'react'
import './App.css'
import Formulario from './modules/Formulario.jsx'
import Citas from './modules/Cita.jsx'

function App() {

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario />
            
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Citas Nombre="Cacho" Dueño='Tomi' Fecha= '2022-11-12' Hora='16:26' Sintomas= 'Se lastimo una pata'/>
            <Citas Nombre="Scooby" Dueño='Facu' Fecha= '2004-02-02' Hora='03:43' Sintomas= 'Le duele el estomago'/>
            <Citas Nombre="Cucki" Dueño='Feli' Fecha= '2012-04-15' Hora='07:35' Sintomas= 'Vomitos'/>

          </div>
        </div>
      </div>
    </>
  )
}

export default App


