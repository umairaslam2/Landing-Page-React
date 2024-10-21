// src/components/Header.jsx
import React from 'react';
import { FaBell, FaSun, FaMoon, FaBars, FaChevronLeft, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import '../Header.css';
import logo from '../assets/download.png'; 
import profileImage from '../assets/download1.jpg'; // Import the new profile image

const Header = ({ toggleTheme, isDarkMode, toggleSidebar, isSidebarCollapsed }) => {
  const navigate = useNavigate();  // Initialize navigation

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="left-section">
        {/* Clicking the logo navigates to the main page */}
        <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
        <h3 className={`brand-name ${isDarkMode ? 'dark' : ''}`}>Gaymove</h3>
      </div>

      <div className="center-section">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarCollapsed ? <FaChevronLeft /> : <FaBars />}
        </button>
        <h2 className={`header-title ${isDarkMode ? 'dark' : ''}`}>Demo</h2>
        <div className="search-bar">
          <FaSearch className={`search-icon ${isDarkMode ? 'dark' : ''}`} />
          <input
            type="text"
            placeholder="Search..."
            className={`${isDarkMode ? 'dark' : ''}`}
          />
        </div>
      </div>

      <div className="header-icons">
        <FaBell className={`icon1 ${isDarkMode ? 'dark' : ''}`} />
        {/* Theme toggling using the sun and moon icons */}
        {isDarkMode ? (
          <FaSun className={`icon1 ${isDarkMode ? 'dark' : ''}`} onClick={toggleTheme} />
        ) : (
          <FaMoon className={`icon1 ${isDarkMode ? 'dark' : ''}`} onClick={toggleTheme} />
        )}

        {/* Profile section */}
        <div className={`profile ${isDarkMode ? 'dark' : ''}`}>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <span>Peter Perks</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
