import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
        </Routes>
          
      </Router>
    </>
  )
}

export default App
