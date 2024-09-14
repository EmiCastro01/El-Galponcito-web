import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './pages/Welcome.jsx'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Welcome />} />
        </Routes>
          
      </Router>
    </>
  )
}

export default App
