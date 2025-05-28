import React from 'react'
import Input from '../ui/Input';
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';


const UpdatePassword = () => {

    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate=useNavigate();

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }


    const submitHandler = async(e) => {
        e.preventDefault();
        
        try {
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await fetch(a, { // Adjust the endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, token: localStorage.getItem('passToken') }) // Assuming you have a token for authentication
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result?.message || 'Failed to update password');
            }

            if (result?.status) {
                navigate('/login'); // Redirect to login page after successful update
            }
        } catch (error) {   
            console.error("Error updating password:", error);
            alert(error.message || 'Something went wrong while updating the password');
        }
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
                            <GrUpdate />
                            <p className='auth_heading'>Update Password</p>
                            <p className='auth_title'>Enter your new password</p>
                        </div>
                        <div className='auth_item'>
                            <label> New Password *</label>
                            <Input onChange={passwordChange} type='password' required placeholder='enter your new password' />
                        </div>
                        <div className='auth_item'>
                            <label> Confirm Password *</label>
                            <Input onChange={confirmPasswordChange} type='password' required placeholder='confirm your new password' />
                        </div>
                        <div className='auth_action'>
                            <Button>Update Password</Button>
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

export default UpdatePassword;
