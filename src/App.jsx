// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import DistanceMap from './components/DistanceMap'; // Importing DistanceMap component
import './App.css';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBicycle, faUser, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

// Sample Components for Navigation
const Task = () => <div>Task Page</div>;
const App1 = () => <div>App 1 Page</div>;
const App2 = () => <div>App 2 Page</div>;
const Icon1 = () => <div>Icon 1 Page</div>;
const Icon2 = () => <div>Icon 2 Page</div>;
const CMS1 = () => <div>CMS 1 Page</div>;
const CMS2 = () => <div>CMS 2 Page</div>;
const Chart1 = () => <div>Chart 1 Page</div>;
const Chart2 = () => <div>Chart 2 Page</div>;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        toggleSidebar={toggleSidebar} 
        isSidebarCollapsed={isSidebarCollapsed} 
      />
      <div className="main-container">
        <Sidebar className={isDarkMode ? 'dark' : ''} isCollapsed={isSidebarCollapsed} />
        <div className="card-section">
          <Routes>
            <Route path="/distance-map" element={<DistanceMap />} />
            <Route path="/task" element={<Task />} />
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
            <Route path="/icon1" element={<Icon1 />} />
            <Route path="/icon2" element={<Icon2 />} />
            <Route path="/cms1" element={<CMS1 />} />
            <Route path="/cms2" element={<CMS2 />} />
            <Route path="/chart1" element={<Chart1 />} />
            <Route path="/chart2" element={<Chart2 />} />
            <Route path="/" element={
              <>
                <Card title="Weekly Progress" value="42%" hoverColor="yellow" icon={faChartBar} />
                <Card title="Distance Traveled" value="42 km" hoverColor="purple" icon={faBicycle} />
                <Card title="Daily Cycling" value="230 Km" hoverColor="green" icon={faUser} />
                <Card title="Morning Yoga" value="18:34:21" hoverColor="red" icon={faCalendarDay} />
              </>
            } />
            {/* Redirect any unmatched routes to the main page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
