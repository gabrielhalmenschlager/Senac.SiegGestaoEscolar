import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../assets/logo.png';

import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarHeader>
        <LogoImg src={logo} alt="Logo" />
        <LogoText>Sieg Gestão Escolar</LogoText>
      </NavbarHeader>
      <NavList>
        <NavItem>
          <StyledLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            <i className="bi bi-house"></i>
            Início
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/professores" className={({ isActive }) => isActive ? "active-link" : ""}>
            <i className="bi bi-book"></i>
            Professores
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/alunos" className={({ isActive }) => isActive ? "active-link" : ""}>
            <i className="bi bi-backpack2"></i>            
            Alunos
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/cursos" className={({ isActive }) => isActive ? "active-link" : ""}>
            <i className="bi bi-mortarboard"></i>
            Cursos
          </StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  font-family: 'Kumbh Sans', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: #152259;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: white;
`;

const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 2px solid white;
  padding-bottom: 3rem;
`;

const LogoImg = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 10px;
`;

const LogoText = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  white-space: nowrap;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  i {
    font-size: 1.3rem;
  }

  &:hover,
  &.active-link {
    background-color: #509CDB;
  }
`;