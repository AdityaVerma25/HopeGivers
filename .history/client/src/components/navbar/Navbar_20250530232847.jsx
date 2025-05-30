import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apis from '../utils/apis';
import logoImage from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const api = apis();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        fetch(api.getHomeData, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status && data.name) {
                    setUserName(data.name);
                } else {
                    navigate('/login');
                }
            })
            .catch(() => navigate('/login'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
                <span>MyCompany</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
            <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="avatar">{userName.charAt(0).toUpperCase()}</div>
                {showDropdown && (
                    <div className="dropdown">
                        <div onClick={() => navigate('/dashboard')}>Dashboard</div>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
