import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';

import logo from '../assets/logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import somAguia from '../assets/aguia.mp3';

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const tocarSom = () => {
    const audio = new Audio(somAguia);
    audio.play().catch(e => console.log("Erro ao tocar som:", e));
  };

  return (
    <NavbarContainer>
      <NavbarHeader>
        <LogoImg 
          src={logo} 
          alt="Logo" 
          onClick={tocarSom} 
          style={{ cursor: 'pointer' }}
        />        
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

      <NavbarFooter>
        <BtnPrimary onClick={logout}>
          <BiLogOut size={22} />
        </BtnPrimary>
      </NavbarFooter>
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
  background: #152259;
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

  i {
    font-size: 1.4rem;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background-color: #FFB400;
    transform: translateX(5px);
    i {
      transform: scale(1.2);
      color: #152259;
    }
  }

  &.active-link {
    background-color: #509CDB;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    i {
      color: #FFFFFF;
    }
  }
`;

export const NavbarFooter = styled.div`
  /* remove margin-top: auto */
  padding-top: 20px;
  margin-bottom: 40px; 
  border-top: 2px solid rgba(255,255,255,0.2);
  display: flex;
  justify-content: center;
`;

export const BtnPrimary = styled.button`
  display: flex;      
  align-items: center;
  justify-content: center;
  width: 50px;  
  height: 50px;
  background-color: #FFB400;
  color: #152259;
  border: none;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }
`;