import logoImage from '../../assets/HomeImage1.png'; // Adjust the path as necessary
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/auth';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/home');
                setUsername(res.data.name);
            } catch (error) {
                console.error('Failed to fetch user', error);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={} alt="Logo" className="logo" />
                <span className="company-name">Friend2Support Clone</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
            <div className="navbar-profile">
                <div className="profile-circle" onClick={() => setShowDropdown(!showDropdown)}>
                    {username.charAt(0).toUpperCase()}
                </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <div onClick={() => navigate('/dashboard')}>Dashboard</div>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
