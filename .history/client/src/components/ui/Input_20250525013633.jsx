import React from 'react'
import './input.css'

const Input = ({ placeholder, required, onChange, value,t }) => {
    return (
        <input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            required={required}
            className='ui_input'
        />
    )
}

export default Input
