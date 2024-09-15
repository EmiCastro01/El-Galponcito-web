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
      <button>Como ayudar</button>
      <button>Anotarme</button>
      <Link to="/CSEInstructive">Compromiso Social Estudiantil UNC</Link>
      <Link to="/login">Iniciar sesion</Link>

    </div>
  </>
  
  )
  
}
export default Welcome;