import React from 'react';
import {Link} from 'react-router-dom';
const Welcome = () => {

  return(
    <>
    <div className='main-container'>
      <h1>EL GALPONCITO</h1>
      <p>Bienvenido</p>
      <p>Somos el GALPONCITO
        ayudamos a pequeñitos con educacion blabla
      </p>
      <button>Conocenos</button>
      <button>Ayudanos</button>
      <button>Anotarme</button>
      <Link to="/login">Compromiso Social Estudiantil UNC</Link>

    </div>
  </>
  )
  
}
export default Welcome;