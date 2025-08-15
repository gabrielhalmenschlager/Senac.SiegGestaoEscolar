import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // importe sua logo
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="navbar-footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© 2025 Sieg Gestão Escolar. Todos os direitos reservados.</p>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={18} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={18} />
        </a>
      </div>
    </footer>
  );
}
