import HomeIcon  from '../assets/home-icon.svg'; 
import ProfileIcon from '../assets/profile-icon.svg'; 
import '../styling/sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate()
  return (
    <nav className="sidebar">
      <button className="nav-button" onClick={() => useNavigate(("/"))}>
        <img src={HomeIcon} className="home-icon"/>
        <span>Home</span>
      </button>
      <button className="nav-button" onClick={() => useNavigate("/profile")}>
        <img src={ProfileIcon} alt="Profile" className="profile-icon" />
        <span>Profile</span>
      </button>
    </nav>
  );
};

export default Sidebar