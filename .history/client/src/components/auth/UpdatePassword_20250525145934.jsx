import React from 'react'
import Input from '../ui/Input';
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { GrUpdate } from "react-icons/gr";


const UpdatePassword = () => {

    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');   

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordChange = (e) => {          
        setConfirmPassword(e.target.value);
    }   


    const submitHandler = (e) => {      
        e.preventDefault();
        // Handle password update logic here
        if (password === confirmPassword) {


  return (
    <div className='auth_main'>
        <div className='auth_left'>
            {/* You can add a component here like HomePage if needed */}
        </div>
        <div className='auth_right'>
            <form>
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
