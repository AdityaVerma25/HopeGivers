import React from 'react'
import './button.css'

const Button = ({onCick,type,children}) => {
  return (
    <button 
    onClick={onClick}>{children}</button>
  )
}

export default Button
