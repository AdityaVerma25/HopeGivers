import React, { useEffect, useRef, useState, useCallback } from 'react';
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { FaFingerprint } from "react-icons/fa";
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apis from '../../utils/apis';
import LoadingButton from '../ui/LoadingButton';
import ResendButton from './ResendButton';

const VerifyOtp = () => {
    const ref0 = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const refs = [ref0, ref1, ref2, ref3, ref4, ref5];
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [otpTime, setOtpTime] = useState(null);

    const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (!/^\d?$/.test(value)) return; // Allow only single digit numbers

        const newOtpDigits = [...otpDigits];
        newOtpDigits[index] = value;
        setOtpDigits(newOtpDigits);

        if (value && index < 5) {
            refs[index + 1].current.focus();
        }
    };

    const getTime = useCallback(async () => {
        try {
            const response = await fetch(apis().getOtpTime, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('passToken') }),
            });

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || 'Failed to fetch OTP time');
                setOtpTime(null);
                return;
            }

            const sendTimeStr = result.sendTime;
            if (!sendTimeStr) {
                toast.error('sendTime not found. Please request a new OTP.');
                setOtpTime(null);
                return;
            }

            const sendTimeMs = new Date(sendTimeStr).getTime();
            if (isNaN(sendTimeMs)) {
                toast.error('Invalid sendTime received. Please request a new OTP.');
                setOtpTime(null);
                return;
            }

            console.log(otpTime)
            const OTP_VALIDITY_DURATION = 5 * 60 * 1000; // 5 minutes
            const expiryTimeMs = sendTimeMs + OTP_VALIDITY_DURATION;
            const remainingTime = expiryTimeMs - Date.now();

            if (remainingTime > 0) {
                setOtpTime(remainingTime);
            } else {
                toast.error('OTP expired. Please request a new one.');
                setOtpTime(null);
            }
        } catch (error) {
            toast.error('Something went wrong while fetching OTP time.');
            setOtpTime(null);
        }
    }, [setOtpTime]);

    useEffect(() => {
        if (ref1.current) {
            ref1.current.focus();
        }
        getTime();
    }, [getTime]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalOtp = otpDigits.join('');

        if (finalOtp.length !== 6) {
            toast.error('Please enter a valid 6-digit OTP');
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(apis().otpVerify, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: finalOtp }),
            });

            const result = await response.json();
            setLoading(false);

            if (!response.ok || !result.status) {
                throw new Error(result?.message || 'OTP verification failed');
            }

            toast.success(result.message);
            navigate('/password/update');
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    };

    return (
        <div className='auth_main'>
            <div className='auth_left'>
                <HomePage />
            </div>
            <div className='auth_right'>
                <form onSubmit={handleSubmit}>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <FaFingerprint />
                            <p className='auth_heading'>Verify OTP</p>
                            <p className='auth_title'>Enter the OTP sent to your email</p>
                        </div>

                        <div className='auth_item'>
                            <label> OTP *</label>
                            <div className='otp_input_container'>
                                {refs.map((ref, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        required
                                        maxLength={1}
                                        value={otpDigits[index]}
                                        onChange={(e) => handleOtpChange(e, index)}
                                        ref={ref}
                                        className='ui_input otp_input'
                                        onInput={(e) => {
                                            e.target.value = e.target.value.slice(0, 1);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='timer_container'>
                            <ResendButton />
                        </div>

                        <div className='auth_action'>
                            <Button>
                                <LoadingButton loading={loading} title="Verify" />
                            </Button>
                        </div>

                        <div>
                            <BackToLogin />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;
