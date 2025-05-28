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
                </div>
            </form>
        </div>
    )
}

export default Login
