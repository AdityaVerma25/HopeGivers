import React from 'react'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
im

const App = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App
