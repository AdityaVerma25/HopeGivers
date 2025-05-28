import React from 'react'
import './input.css'

const Input = ({ placeholder, required, onChange, value }) => {
    return (
        <input onChange={onChange} value={value} placeholder=''  />
    )
}

export default Input
