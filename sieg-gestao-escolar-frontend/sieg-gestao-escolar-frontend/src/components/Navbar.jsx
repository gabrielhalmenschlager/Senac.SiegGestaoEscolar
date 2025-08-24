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
          <StyledLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
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
  width: 280px;
  background: #152259; /* azul base */
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  box-shadow: 4px 0 15px rgba(0,0,0,0.2);
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 70px;
  }
`;

const NavbarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid rgba(255,255,255,0.2);
  padding-bottom: 2.5rem;
`;

const LogoImg = styled.img`
  width: 90px;
  height: auto;
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoText = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #FFFFFF;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled.li`
  margin-bottom: 1.2rem;
`;

const StyledLink = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 18px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  background-color: transparent;

  i {
    font-size: 1.4rem;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background-color: #FFB400; /* destaque dourado */
    transform: translateX(5px);
    i {
      transform: scale(1.2);
      color: #152259; /* ícone contraste no hover */
    }
  }

  &.active-link {
    background-color: #509CDB; /* azul secundário para ativo */
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    i {
      color: #FFFFFF;
    }
  }
`;
