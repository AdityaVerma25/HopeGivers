import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import { BiDonateBlood } from "react-icons/bi";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';


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

    const sentences = [
        "Donate Blood, Save Lives.",
        "Be a Hero in Someone's Story.",
        "Your Blood Can Give Others a Chance to Live.",
    ];

    const AuthPage = () => {
        const [currentSentence, setCurrentSentence] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSentence((prev) => (prev + 1) % sentences.length);
            }, 3000); // change sentence every 3s

            return () => clearInterval(interval);
        }, []);
    }

    return (
        <div className='auth_main'>
            <div className='auth_left'>

                <div className="blood_banner">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" // blood icon
                        alt="Blood Drop"
                        className="blood_image"
                    />
                    <p className="animated_sentence">{sentences[currentSentence]}</p>
                </div>

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
