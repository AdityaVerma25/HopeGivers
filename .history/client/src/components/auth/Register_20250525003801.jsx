import React from 'react'
import './auth.css'
import Input from '../ui/Input'
// import { BiSolidDonateBlood } from "react-icons/bi";


const Register = () => {
  return (
    <div className='auth_main'>
        <div className='auth_left'>

        </div>
        <div className='auth_right'>
            <form>
               <div className="auth_container">
                    <div className='auth_header'>
                        {/* <BiSolidDonateBlood/> */}
                        <p className='auth_heading'>Welcome</p>
                        <p className='auth_title'>Create an account</p>
                    </div>
                    <div className='auth_item'>
                         <label> Name *</label>
                         <Input placeholder='enter your name'/>
                    </div>
                    <div className='auth_item'>
                         <label> Email *</label>
                         <Input placeholder='enter your email'/>
                    </div>
                    <div className='auth_item'>
                         <label> Password *</label>
                         <Input placeholder='enter your password'/>
                    </div>
               </div>
            </form>
        </div> 
    </div>
  )
}

export default Register
