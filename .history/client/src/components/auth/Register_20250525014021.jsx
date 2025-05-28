import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import { BiDonateBlood } from "react-icons/bi";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';


const Register = () => {
    return (
        <div className='auth_main'>
            <div className='auth_left'>

            </div>
            <div className='auth_right'>
                <form>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <BiDonateBlood />
                            <p className='auth_heading'>Welcome</p>
                            <p className='auth_title'>Create your account</p>
                        </div>
                        <div className='auth_item'>
                            <label> Name *</label>
                            <Input type='text' required placeholder='enter your name' />
                        </div>
                        <div className='auth_item'>
                            <label> Email *</label>
                            <Input type='email' required placeholder='enter your email' />
                        </div>
                        <div className='auth_item'>
                            <label> Password *</label>
                            <Input type='password' required placeholder='enter your password' />
                        </div>
                        <div className='auth_action'>
                            <Button>Register</Button>
                        </div>
                        <div>
                            backToLogin
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
