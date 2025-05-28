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
                        <BiDonateBlood />
                        <p className='auth_heading'>Welcome</p>
                        <p className='auth_title'>Create your account</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
