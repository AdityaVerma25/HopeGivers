import React, { useEffect, useState } from 'react';
import HomeImage1    from '../../assets/HomeImage1.png';
import './auth.css'

const sentences = [
    "Donate Blood, Save Lives.",
    "Be a Hero in Someone's Story.",
    "Your Blood Can Give Others a Chance to Live.",
    "Connecting Life – One Drop at a Time",
];
const HomePage = () => {

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
                src={HomeImage1}
                alt="Blood Drop"
                className="blood_image"
            />
            <p className="animated_sentence">{sentences[currentSentence]}</p>
            <p className="blood_banner"></p>
        </div>
    );
}

export default HomePage;