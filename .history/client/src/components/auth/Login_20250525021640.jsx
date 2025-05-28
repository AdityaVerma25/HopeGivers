import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import Button from '../ui/Button';
import { BiDonateBlood } from "react-icons/bi";


const Login = () => {
    return (
        <div className='auth_main'>
            <div className='auth_right'>
                <form>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <BiDonateBlood />
                            <p className='auth_heading'>Welcome Back</p>
                            <p className='auth_title'>Login to continue</p>
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
                            <Button>Login</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
