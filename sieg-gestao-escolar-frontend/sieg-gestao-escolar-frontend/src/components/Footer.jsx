import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import somAguia from '../assets/aguia.mp3';

export default function Footer() {

    const tocarSom = () => {
      const audio = new Audio(somAguia);
      audio.play().catch(e => console.log("Erro ao tocar som:", e));
    };

  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo          
          src={logo} 
          alt="Logo" 
          onClick={tocarSom} 
          style={{ cursor: 'pointer' }} 
        />
        <FooterText>© 2025 Sieg Gestão Escolar. Todos os direitos reservados.</FooterText>
      </FooterLeft>
      <FooterRight>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </SocialLink>
        <SocialLink href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </SocialLink>
      </FooterRight>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-left: 300px; /* alinhado com main-content da navbar */
  background-color: #152259; /* azul base */
  color: #FFFFFF; /* texto principal */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.9rem;
  border-top: 3px solid #FFB400; /* destaque dourado */
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FooterLogo = styled.img`
  width: 70px;
  height: auto;
`;

const FooterText = styled.p`
  color: #AAAAAA; /* texto secundário mais suave */
  margin: 0;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: #FFFFFF;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #FFB400; /* destaque dourado ao passar o mouse */
    transform: scale(1.1); /* leve animação para interatividade */
  }
`;