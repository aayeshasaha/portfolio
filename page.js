 import Image from "next/image";
import "./page.css"; 
import { FaHome, FaUser, FaCog, FaBriefcase, FaNewspaper, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaDribble, FaTiktok } from 'react-icons/fa';  

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <h1 className="logo">mumbai</h1>
      <nav className="nav-links">
        <a href="#" className="nav-item"><FaHome /><span>Home</span></a>

        <a href="#" className="nav-item"><FaUser /><span>About</span></a>

        <a href="#" className="nav-item"><FaCog /><span>Service</span></a>
        
        <a href="#" className="nav-item"><FaBriefcase /><span>Portfolio</span></a>
        
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="main-content">
    <img
      src="/src/app/"
      alt=" Aayesha saha "
      className="profile-img"
    />
    <h1 className="name"> Aayesha saha  </h1>
    <p className="description">
      unique mind.
    </p>
    <div className="social-icons">
      <a href="#"><FaFacebookF /></a>

      <a href="#"><FaDribble /></a>

      <a href="#"><FaTiktok /></a>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}
