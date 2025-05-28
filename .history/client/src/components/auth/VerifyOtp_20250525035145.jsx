import React, { useEffect, useRef } from 'react'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from "react-icons/fa";

const VerifyOtp = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

    useEffect(() => {
   
        if(ref1.current) {
            ref1.current.focus();
        }

    }, []);


    const 


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
                                {inputRef.map((item, index) => {
                                    return <input
                                        ref={item}
                                        onInput={(e) => {
                                            if (e.target.value.length > 1) {
                                                e.target.value = e.target.value.slice(0, 1);
                                            }
                                            if (index < 5) {
                                                e.target.nextElementSibling.focus();
                                            }
                                        }}
                                        type='number' className='ui_input otp_input' />
                                })}
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
