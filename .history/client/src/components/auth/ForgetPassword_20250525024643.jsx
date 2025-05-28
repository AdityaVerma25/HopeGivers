import React from 'react'
import Input from '../ui/Input'
import BackToLogin from '../ui/BackToLogin'
import Button from '../ui/Button'


const ForgetPassword = () => {

    
    return (
        <div className='auth_main'>
            <div className='auth_left'>

            </div>
            <div className='auth_right'>
                <form>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <p className='auth_heading'>Forget Password</p>
                            <p className='auth_title'>Enter your email to reset password</p>
                        </div>
                        <div className='auth_item'>
                            <label> Email *</label>
                            <Input type='email' required placeholder='enter your email' />
                        </div>
                        <div className='auth_action'>
                            <Button>Send OTP</Button>
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

export default ForgetPassword
