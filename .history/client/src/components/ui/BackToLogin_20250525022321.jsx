import React from 'react'
import './backtologin.css'
import { FaArrowLeft } from "react-icons/fa6";

const BackToLogin = () => {

  const navigateHandler = () => {};


  return (
    <div className='ui_backToLogin'>
        <FaArrowLeft />
        <span>
            Back to Login
        </span>
    </div>
  )
}

export default BackToLogin
