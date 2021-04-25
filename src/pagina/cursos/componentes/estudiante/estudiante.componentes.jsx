import React from 'react';

import './estudiante.estilos.css';

const Estudiante = (props) => {
    return (
        <div className="estudiante-cont">

          {
            props.estudiante.nota === 2
            ? //Si-verdad
              <span className="estudiante-without-nota">{props.estudiante.nombre}</span>
            : //No-Falso
              <span>{props.estudiante.nombre}</span>
          }
        
          {' '}
          
          {props.estudiante.genero === 1
            ? //Si-verdad
            <span className="estudiante-without-generoFemenino">{props.estudiante.genero}</span>
          : //No-Falso
            <span>{props.estudiante.genero}</span>

          }


        </div>   
    );
}

export default Estudiante;