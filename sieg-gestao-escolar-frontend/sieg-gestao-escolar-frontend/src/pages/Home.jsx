import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import somAguia from '../assets/aguia.mp3';

import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';

export default function Home() {
  const navigate = useNavigate();

  const totalAlunos = 128;
  const totalProfessores = 12;
  const totalCursos = 24;

  const tocarSom = () => {
    const audio = new Audio(somAguia);
    audio.play();
  };

  return (
    <DashboardContainer>
      <Navbar />
      <MainContent>
        <CenterHeader>
          <Logo src={logo} alt="Logo" onClick={tocarSom} />
          <h1>Bem Vindo ao seu Painel de Controle!</h1>
        </CenterHeader>
        <LogoutWrapper>
          <LogoutBtn>
            <i className="bi bi-box-arrow-right" style={{ marginRight: '8px' }}></i>
            Log out
          </LogoutBtn>
        </LogoutWrapper>

        <DashboardSections>
          {/* Alunos */}
          <DashboardBlock>
            <StatCard>
              <FaUserGraduate size={35} color="#509CDB" />
              <div>
                <h1>Total de Alunos</h1>
                <h2>{totalAlunos}</h2>
                <p>Ativos</p>
              </div>
            </StatCard>
            <Card onClick={() => navigate('/alunos')}>
              <CardIcon>
                <FaUserGraduate size={20} color="#152259" />
              </CardIcon>
              <div>
                <h3>Adicione outros Alunos</h3>
                <p>Cadastre novos alunos e gerencie suas informações para que possam acessar seus cursos.</p>
              </div>
            </Card>
          </DashboardBlock>

          {/* Professores */}
          <DashboardBlock>
            <StatCard>
              <FaChalkboardTeacher size={35} color="#509CDB" />
              <div>
                <h1>Total de Professores</h1>
                <h2>{totalProfessores}</h2>
                <p>Professores cadastrados</p>
              </div>
            </StatCard>
            <Card onClick={() => navigate('/professores')}>
              <CardIcon>
                <FaChalkboardTeacher size={20} color="#152259" />
              </CardIcon>
              <div>
                <h3>Adicione Professores</h3>
                <p>Inclua professores e atribua-os aos cursos para facilitar o ensino e a gestão.</p>
              </div>
            </Card>
          </DashboardBlock>

          {/* Cursos */}
          <DashboardBlock>
            <StatCard>
              <FaBook size={35} color="#509CDB" />
              <div>
                <h1>Total de Cursos</h1>
                <h2>{totalCursos}</h2>
                <p>Cursos disponíveis</p>
              </div>
            </StatCard>
            <Card onClick={() => navigate('/cursos')}>
              <CardIcon>
                <FaBook size={20} color="#152259" />
              </CardIcon>
              <div>
                <h3>Adicione Cursos</h3>
                <p>Crie e organize cursos para oferecer aos seus alunos de forma simples e rápida.</p>
              </div>
            </Card>
          </DashboardBlock>
        </DashboardSections>
      </MainContent>
      <Footer />
    </DashboardContainer>
  );
}

/* Styled Components */
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Kumbh Sans', sans-serif;
  color: #152259;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fb, #e6e9f0);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 50px;
  position: relative;
  margin-left: 300px; /* mesma largura da navbar vertical */
`;


const CenterHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #1a202c;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 15px;
`;

const LogoutWrapper = styled.div``;

const LogoutBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  background-color: #509CDB;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a83bf;
    transform: translateY(-3px);
  }
`;

const DashboardSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const DashboardBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
  width: 100%;
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 350px;
  min-height: 150px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.12);
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  h2 {
    margin: 5px 0;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #777;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  cursor: pointer;
  width: 350px;
  min-height: 150px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);

    svg {
      transform: scale(1.3);
      color: #2a76f4;
    }
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #1a202c;
    font-weight: 600;
  }

  p {
    margin-top: 5px;
    font-size: 1rem;
    color: #4F4F4F;
    line-height: 1.5;
  }

  svg {
    transition: all 0.3s ease;
  }
`;

const CardIcon = styled.div`
  background-color: rgba(80, 156, 219, 0.15);
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
