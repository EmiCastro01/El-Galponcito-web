import React from 'react';
import {Link} from 'react-router-dom';

const CSE = () => {
  return(

    <>
      <div>
        <h1>Compromiso Social Estudiantil UNC</h1>
        <h3>¿Como me inscribo a este proyecto?</h3>
        <div>
          <ul>
            <li>Debes registrarte en la página
              del Compromiso Social Estudiantil de la UNC
              en el siguiente link:
              <a target="blank" href="https://compromisosocial.unc.edu.ar/alumnos/#/"> CSE</a>
            </li>
            <li>
              Debes seleccionar el proyecto "El Galponcito" 
              <a target='blank' href="https://compromisosocial.unc.edu.ar/alumnos/index.html#/proyectos"> Proyectos</a>
            </li>
            <li>
              Debes inscribirte y seguir el instructivo en la página.
            </li>
            <li>
              <p>
              <Link to="/Contact">Contactanos </Link>
                 para entrar al grupo de 
                voluntarios de El Galponcito y recibir más información.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CSE;