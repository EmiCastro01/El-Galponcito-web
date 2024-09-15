import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return(
    <>
      <div>
        <h1>EL GALPONCITO</h1>
        <p>Registrate</p>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <button>Registrarme</button>
        <p>¿Ya tienes cuenta? <Link to="/login">Iniciar sesion</Link></p>

      </div>
    </>

  )

}

export default Signup;