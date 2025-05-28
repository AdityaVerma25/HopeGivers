import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import Button from '../ui/Button';

const Login = () => {
    return (
        <div className='auth_right'>
            <form>
                <div className="auth_container">
                    <div className='auth_header'>
                        <p className='auth_heading'>Welcome Back</p>
                        <p className='auth_title'>Login to continue</p>
                    </div>
                    <div className='auth_item'>
                        <label> Email *</label>
                        <Input type='email' required placeholder='enter your email' />
                    </div>
                    <div className='auth_item'>
                        <label> Name *</label>
                        <Input onChange={nameChange} type='text' required placeholder='enter your name' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
