import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo src={logo} alt="Logo" />
        <p>© 2025 Sieg Gestão Escolar. Todos os direitos reservados.</p>
      </FooterLeft>
      <FooterRight>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={18} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={18} />
        </a>
      </FooterRight>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-left: 300px; /* alinhado com main-content da navbar */
  background-color: #152259;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.9rem;
  border-top: 2px solid #509CDB;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* espaço entre logo e texto */
`;

const FooterLogo = styled.img`
  width: 40px; /* ajuste do tamanho da logo */
  height: auto;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin-left: 15px;
    transition: color 0.2s ease;

    &:hover {
      color: #509CDB;
    }
  }
`;

