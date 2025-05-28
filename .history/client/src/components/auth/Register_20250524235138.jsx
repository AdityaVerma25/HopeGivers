import React from 'react'
import './auth.css'
import Input from '../ui/Input'


const Register = () => {
  return (
    <div className='auth_main'>
        <div className='auth_right'>
            <form>
               <div className="auth_container">
                    <div className='auth_header'></div>
                    <div className='auth_item'>
                         <label> Name </label>
                    </div>
               </div>
            </form>
        </div>
        <div className='auth_left'>

        </div> 
    </div>
  )
}

export default Register
