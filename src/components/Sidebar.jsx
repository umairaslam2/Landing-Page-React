// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTachometerAlt, // Dashboard
    faTh,           // Apps
    faIcons,        // Icons
    faClipboard,     // CMS
    faChartPie,     // Charts
    faChevronRight   // Chevron for dropdown
} from '@fortawesome/free-solid-svg-icons';
import '../Sidebar.css';

const Sidebar = ({ className, isCollapsed }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className={`sidebar ${className} ${isCollapsed ? 'collapsed' : ''}`}>
      <ul>
        <li onClick={() => toggleDropdown('dashboard')} className="dropdown-toggle">
          <FontAwesomeIcon icon={faTachometerAlt} />
          {!isCollapsed && <span> Dashboard</span>}
          <FontAwesomeIcon icon={faChevronRight} className={`chevron ${openDropdown === 'dashboard' ? 'rotated' : ''}`} />
        </li>
        {openDropdown === 'dashboard' && (
          <ul className="dropdown">
            <li onClick={() => handleNavigation('/distance-map')}>
              <FontAwesomeIcon icon={faChartPie} />
              {!isCollapsed && <span> Distance Map</span>}
            </li>
            <li onClick={() => handleNavigation('/task')}>
              <FontAwesomeIcon icon={faClipboard} />
              {!isCollapsed && <span> Task</span>}
            </li>
          </ul>
        )}

        <li onClick={() => toggleDropdown('apps')} className="dropdown-toggle">
          <FontAwesomeIcon icon={faTh} />
          {!isCollapsed && <span> Apps</span>}
          <FontAwesomeIcon icon={faChevronRight} className={`chevron ${openDropdown === 'apps' ? 'rotated' : ''}`} />
        </li>
        {openDropdown === 'apps' && (
          <ul className="dropdown">
            <li onClick={() => handleNavigation('/app1')}>
              <FontAwesomeIcon icon={faTh} />
              {!isCollapsed && <span> App 1</span>}
            </li>
            <li onClick={() => handleNavigation('/app2')}>
              <FontAwesomeIcon icon={faTh} />
              {!isCollapsed && <span> App 2</span>}
            </li>
          </ul>
        )}

        <li onClick={() => toggleDropdown('icons')} className="dropdown-toggle">
          <FontAwesomeIcon icon={faIcons} />
          {!isCollapsed && <span> Icons</span>}
          <FontAwesomeIcon icon={faChevronRight} className={`chevron ${openDropdown === 'icons' ? 'rotated' : ''}`} />
        </li>
        {openDropdown === 'icons' && (
          <ul className="dropdown">
            <li onClick={() => handleNavigation('/icon1')}>
              <FontAwesomeIcon icon={faIcons} />
              {!isCollapsed && <span> Icon 1</span>}
            </li>
            <li onClick={() => handleNavigation('/icon2')}>
              <FontAwesomeIcon icon={faIcons} />
              {!isCollapsed && <span> Icon 2</span>}
            </li>
          </ul>
        )}

        <li onClick={() => toggleDropdown('cms')} className="dropdown-toggle">
          <FontAwesomeIcon icon={faClipboard} />
          {!isCollapsed && <span> CMS</span>}
          <FontAwesomeIcon icon={faChevronRight} className={`chevron ${openDropdown === 'cms' ? 'rotated' : ''}`} />
        </li>
        {openDropdown === 'cms' && (
          <ul className="dropdown">
            <li onClick={() => handleNavigation('/cms1')}>
              <FontAwesomeIcon icon={faClipboard} />
              {!isCollapsed && <span> CMS 1</span>}
            </li>
            <li onClick={() => handleNavigation('/cms2')}>
              <FontAwesomeIcon icon={faClipboard} />
              {!isCollapsed && <span> CMS 2</span>}
            </li>
          </ul>
        )}

        <li onClick={() => toggleDropdown('charts')} className="dropdown-toggle">
          <FontAwesomeIcon icon={faChartPie} />
          {!isCollapsed && <span> Charts</span>}
          <FontAwesomeIcon icon={faChevronRight} className={`chevron ${openDropdown === 'charts' ? 'rotated' : ''}`} />
        </li>
        {openDropdown === 'charts' && (
          <ul className="dropdown">
            <li onClick={() => handleNavigation('/chart1')}>
              <FontAwesomeIcon icon={faChartPie} />
              {!isCollapsed && <span> Chart 1</span>}
            </li>
            <li onClick={() => handleNavigation('/chart2')}>
              <FontAwesomeIcon icon={faChartPie} />
              {!isCollapsed && <span> Chart 2</span>}
            </li>
          </ul>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
