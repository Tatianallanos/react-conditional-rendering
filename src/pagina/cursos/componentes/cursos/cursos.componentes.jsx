import React from 'react';
import './cursos.estilos.css';

const Cursos = (props) => {
    return (
        <div className="cursos-cont" >
          {props.nombreCurso}
        </div>   
    );
}

export default Cursos;