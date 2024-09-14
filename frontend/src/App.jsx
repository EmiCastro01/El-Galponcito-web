import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>EL GALPONCITO</h1>
        <p>Iniciar sesion</p>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar sesion</button>
        <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
        
      </div>
    </>
  )
}

export default App
