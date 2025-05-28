import React from 'react'
import './button.css'

const Button = ({onCick,type,children}) => {
  return (
    <button>{children}</button>
  )
}

export default Button
