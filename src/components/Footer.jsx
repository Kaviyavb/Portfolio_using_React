// src/components/Footer.jsx
import "../styles/styles.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>Kaviya Sri Venkatesan</strong>. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/Kaviyavb" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kaviya-sri-v" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
           <a href="https://www.instagram.com/kaviyasri_venkatesh/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
             </div>
      </div>
    </footer>
  );
}
