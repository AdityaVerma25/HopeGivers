import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
// import apis from '../../utils/apis';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem(accessToken));

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyBloodBank</div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>

      <div className="navbar-user">
        {user && (
          <div className="user-dropdown">
            <div className="avatar">
              {/* {user.result.name.charAt(0).toUpperCase()} */}
            </div>
            <div className="dropdown-content">
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
