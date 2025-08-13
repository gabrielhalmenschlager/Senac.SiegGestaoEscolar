import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 
import casinha from '../assets/house.svg'; 

export default function Navbar() {
  return (
    <nav className="navbar-vertical">
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
        <h2 className="navbar-logo">Sieg Gestão Escolar</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            <i class="bi bi-house"></i>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/professores" className={({ isActive }) => isActive ? "active-link" : ""}>
            Professores
          </NavLink>
        </li>
        <li>
          <NavLink to="/alunos" className={({ isActive }) => isActive ? "active-link" : ""}>
            Alunos
          </NavLink>
        </li>
        <li>
          <NavLink to="/cursos" className={({ isActive }) => isActive ? "active-link" : ""}>
            Cursos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
