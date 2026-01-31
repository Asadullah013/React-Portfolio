
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-lg-none">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Asadullah Magsi
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-person me-2"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                <i className="bi bi-briefcase me-2"></i>Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                <i className="bi bi-code-slash me-2"></i>Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="bi bi-folder me-2"></i>Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                <i className="bi bi-mortarboard me-2"></i>Education {/* Fixed: Added Education link */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certifications">
                <i className="bi bi-award me-2"></i>Certifications {/* Fixed icon and label */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope me-2"></i>Contact
              </Link>
            </li>
            <li className="nav-item mt-2">
              <button onClick={toggleTheme} className="btn btn-warning w-100">
                <i className="bi bi-moon me-2"></i>Toggle Mode
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;