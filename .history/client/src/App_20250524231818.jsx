import React from 'react'
import Register from './components/auth/Register'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
        <Route path='/register' element{<Register}/>
    </Routes>
  )
}

export default App
