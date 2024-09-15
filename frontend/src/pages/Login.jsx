import React from 'react';

const Login = () => {
  return(

    <>
      <div className='main-container'>
      <h1>EL GALPONCITO</h1>
      <p>Iniciar sesion</p>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button>Iniciar sesion</button>
      <p>¿No tienes cuenta? <a href="/Signup">Registrate</a></p>  
    </div>
    </>
  )
}

export default Login;