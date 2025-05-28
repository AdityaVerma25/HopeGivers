import React, { useEffect, useState } from 'react';
import HomeImage    from '../../assets/HomeIm.png';
import './auth.css'

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
        }, 3000); // every 3 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="blood_banner">
            <img
                src=""
                alt="Blood Drop"
                className="blood_image"
            />
            <p className="animated_sentence">{sentences[currentSentence]}</p>
        </div>
    );
}

export default AuthPage;