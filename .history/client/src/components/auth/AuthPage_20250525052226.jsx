import React, { useEffect, useState } from 'react';
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
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3D%2522blood%2Bdrop%2522&psig=AOvVaw2S1tqyyZexNp9jvceYb_aD&ust=1748217120245000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCz_bemvY0DFQAAAAAdAAAAABAM"
                alt="Blood Drop"
                className="blood_image"
            />
            <p className="animated_sentence">{sentences[currentSentence]}</p>
        </div>
    );
}

export default AuthPage;