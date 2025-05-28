import React from 'react'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from "react-icons/fa";

const VerifyOtp = () => {
    return (
        <div className='auth_main'>
            <div className='auth_left'>
                {/* You can add an image or any other content here */}
            </div>
            <div className='auth_right'>
                <form>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <FaFingerprint />
                            <p className='auth_heading'>Verify OTP</p>
                            <p className='auth_title'>Enter the OTP sent to your email</p>
                        </div>
                        <div className='auth_item'>
                            <label> OTP *</label>
                            <div className='otp_input_container'>
                                  {[1,2,3,4,5,6].map((_, index) => {}}
                            </div>
                        </div>
                        <div className='auth_action'>
                            <Button>Verify</Button>
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

export default VerifyOtp
