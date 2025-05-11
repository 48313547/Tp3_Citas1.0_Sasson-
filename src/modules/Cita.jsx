import React from 'react';

const CrearCita = (props) => {
  return (
    <div className="cita">
      <p>{props.id}</p>
      <p>Mascota: <span>{props.Nombre}</span>  </p>
      <p>Dueño:<span> {props.Dueño}</span></p>
      <p>Fecha: <span>{props.Fecha}</span></p>
      <p>Hora: <span>{props.Hora}</span></p>
      <p>Sintomas: <span>{props.Sintomas}</span></p>
      
      <button className='button eliminar'>
        Eliminar X
      </button>
    </div>
  );
}

export default CrearCita;