import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login'
import CSE from './pages/CSEInstructive'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CSEInstructive' element={<CSE />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
          
      </Router>
    </>
  )
}

export default App
