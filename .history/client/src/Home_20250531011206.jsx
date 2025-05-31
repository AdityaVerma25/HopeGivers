import React from 'react';
import Navbar from '../components/navbar/Navbar';
import RegistrationForm from './RegistrationPage';

const Home = () => {
    return (
        <>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <h1>Welcome to the Home Page</h1>
            </div>
            <RegistrationForm />
        </>
    );
};

export default Home;
