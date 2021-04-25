import React from 'react';

import './tabla-contenido.estilos.css';
import Cursos from '../cursos/cursos.componentes';
import Estudiante from '../estudiante/estudiante.componentes';


const TablaContenido = () => {
    return (
        <div className="tabla-contenido-cont">
             <Cursos nombreCurso="Matematicas Especiales"/>
             <Estudiante estudiante={{
                 nombre:"Alejandra",
                 nota:4,
                 genero:1,
             }}    />
             <Estudiante estudiante={{
                 nombre:"Valentina",
                 nota:1,
                 genero:1,
             }}    /> 
             <Estudiante estudiante={{
                 nombre:"Felipe",
                 nota:3,
                 genero:0,
             }}    />
             <Estudiante estudiante={{
                 nombre:"Paola",
                 nota:5,
                 genero:1,
             }}    /> 
             <Estudiante estudiante={{
                 nombre:"Juan Camilo",
                 nota:5,
                 genero:0,
             }}    />                                                     
             <Cursos nombreCurso="Programacion"/>
             <Estudiante estudiante={{
                 nombre:"Laura",
                 nota:4,
                 genero:1,
             }}    />
             <Estudiante estudiante={{
                 nombre:"Daniela",
                 nota:2,
                 genero:1,
             }}    /> 
             <Estudiante estudiante={{
                 nombre:"Francia",
                 nota:3,
                 genero:1,
             }}    />
             <Estudiante estudiante={{
                 nombre:"Carlos",
                 nota:5,
                 genero:0,
             }}    /> 
             <Estudiante estudiante={{
                 nombre:"Pedro",
                 nota:2,
                 genero:0,
             }}    />                               
             <Cursos nombreCurso="Bases de Datos"/>
        </div>
    );
}

export default TablaContenido;