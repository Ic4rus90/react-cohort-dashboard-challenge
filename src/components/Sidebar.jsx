import HomeIcon  from '../assets/home-icon.svg'; 
import ProfileIcon from '../assets/profile-icon.svg'; 
import '../styling/sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <nav className="sidebar">
        <Link to="/">
          <button className="nav-button">
            <img src={HomeIcon} className="home-icon"/>
            <span>Home</span>
          </button>
        </Link>
        <Link to="/profile">
          <button className="nav-button">
            <img src={ProfileIcon} alt="Profile" className="profile-icon" />
            <span>Profile</span>
          </button>
      </Link>
    </nav>
  );
};

export default Sidebar