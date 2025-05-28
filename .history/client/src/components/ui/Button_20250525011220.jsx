import React from 'react'
import './button.css'

const Button = ({onCick,type,children}) => {
  return (
    <button 
    onClick={onClick}
    type={type}>{children}</button>
  )
}

export default Button
