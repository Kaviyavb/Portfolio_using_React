// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <h1 className="nav-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        </h1>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/education" onClick={toggleMenu}>Education</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/certifications" onClick={toggleMenu}>Certifications</Link>
          <Link to="/resume" onClick={toggleMenu}>Resume</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>

        {/* Actions: Theme Toggle + Hamburger */}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
