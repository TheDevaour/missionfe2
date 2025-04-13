import React from 'react'
import Login from './Pages/login.jsx'
import Registers from './Pages/registers.jsx'
import Home from './Pages/home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registers" element={<Registers />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
