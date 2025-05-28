import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import { BiDonateBlood } from "react-icons/bi";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import AuthPage from './AuthPage';


const Register = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log(name, email, password);
    };

    return (
        <div className='auth_main'>
            <div className='auth_left'>

            </div>
            <div className='auth_right'>
                <form onSubmit={submitHandler}>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <BiDonateBlood />
                            <p className='auth_heading'>Welcome</p>
                            <p className='auth_title'>Create your account</p>
                        </div>
                        <div className='auth_item'>
                            <label> Name *</label>
                            <Input onChange={nameChange} type='text' required placeholder='enter your name' />
                        </div>
                        <div className='auth_item'>
                            <label> Email *</label>
                            <Input onChange={emailChange} type='email' required placeholder='enter your email' />
                        </div>
                        <div className='auth_item'>
                            <label> Password *</label>
                            <Input onChange={passwordChange} type='password' required placeholder='enter your password' />
                        </div>
                        <div className='auth_action'>
                            <Button>Register</Button>
                        </div>
                        <div>
                            <BackToLogin />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
