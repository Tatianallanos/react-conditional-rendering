import React from 'react';
import TablaContenido from '../tabla-contenido/tabla-contenido.componentes';
import './tabla-general-cursos.estilos.css';
import Busqueda from '../busqueda/busqueda.componentes';


const TablaGeneralCursos = () => {
    return (
        <div className ="tabla-general-cursos-cont">
            <Busqueda/>
            <TablaContenido/>
        </div>   
    );
}

export default TablaGeneralCursos;