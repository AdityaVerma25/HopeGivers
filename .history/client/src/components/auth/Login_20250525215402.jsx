import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import Button from '../ui/Button';
import { BiDonateBlood } from "react-icons/bi";
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        // Handle login logic here
      
        try {
            
        } catch (error) {
            toast
        }


        console.log(email, password);
        // You can add your login API call here         
    }
    return (
        <div className='auth_main'>
            <div className='auth_left'>
                <HomePage />
            </div>

            <div className='auth_right'>
                <form onSubmit={submitHandler}>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <BiDonateBlood />
                            <p className='auth_heading'>Welcome Back</p>
                            <p className='auth_title'>Login to continue</p>
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
                            <Button>Login</Button>
                        </div>
                        <div className='auth_options'>
                            <Link to='/register' className='auth_link'>Create new account?</Link>
                            <Link to='/forget/password' className='auth_link'>Forget password</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
