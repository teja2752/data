import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; Developed By Tejas Gadhave</p>
      
      <div className="social-icons">
        <a href="https://github.com/tejasgadhave" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/tejasgadhave" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:tejasgadhave@example.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
