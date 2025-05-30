
import logoImage from '../../assets/HomeImage1.png'; // Adjust the path as necessary

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="HopeGivers Logo" className="logo-image" />
        <span>HopeGivers</span>
      </div>

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
              {user.result.name.charAt(0).toUpperCase()}
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
