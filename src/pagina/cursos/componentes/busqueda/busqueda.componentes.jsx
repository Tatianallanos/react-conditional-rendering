import React from 'react';
import './busqueda.estilos.css';

const Busqueda = () => {
    return (
        <div className="busqueda-cont">
            <div className="search-input">
                <input type="text" placeholder="Buscar..."/>
            </div>
            <div>
                <input type="checkbox"/> Busqueda
            </div>  
        </div>   
    );
}

export default Busqueda;