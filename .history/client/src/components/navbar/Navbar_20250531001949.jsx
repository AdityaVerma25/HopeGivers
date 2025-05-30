import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apis from '../../utils/apis';
import './navbar.css'; // Your styling file
import logoImage from '../../assets/HomeImage1.png'; // Adjust path if needed

const api = apis();

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/login');
      return;
    }

    fetch(api.getHomeData, {
      method: 'Get',  // Use GET because backend expects GET on /user/home
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          // If 401 or 500, logout and redirect
          // localStorage.removeItem('token');
          navigate('/login');
          return;
        }
        const data = await res.json();
        if (data.status && data.name) {
          setUserName(data.name);
        } else {
          localStorage.removeItem('token');
          navigate('/login');
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);

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
      <div
        className="profile"
        onClick={() => setShowDropdown((prev) => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <div className="avatar">{userName ? userName.charAt(0).toUpperCase() : '?'}</div>
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
