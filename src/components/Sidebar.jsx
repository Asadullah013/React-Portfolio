import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ toggleTheme }) => {
  const location = useLocation();
  const menuItems = [
    { path: "/about", icon: "bi-person", label: "About" },
    { path: "/experience", icon: "bi-briefcase", label: "Experience" },
    { path: "/skills", icon: "bi-code-slash", label: "Skills" },
    { path: "/projects", icon: "bi-folder", label: "Projects" },
    { path: "/education", icon: "bi-mortarboard", label: "Education" },
    { path: "/certifications", icon: "bi-award", label: "Certifications" }, 
    { path: "/contact", icon: "bi-envelope", label: "Contact" },
  ];

  return (
    <nav id="sidebar" className="d-none d-sm-block">
      <div className="p-3">
        <h4 className="text-center mb-4">Asadullah Magsi</h4>
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                to={item.path}
              >
                <i className={`bi ${item.icon}`}></i> {item.label}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <button onClick={toggleTheme} className="btn btn-warning w-100 mt-3">
              <i className="bi bi-moon"></i> Toggle Mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;