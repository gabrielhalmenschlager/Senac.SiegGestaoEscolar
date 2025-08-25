import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import { getTotalProfessores, getTotalAlunos, getTotalCursos } from '../services/dashboard';
import { logout } from '../services/login';

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import somAguia from '../assets/aguia.mp3';

import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyle';
import { BtnPrimary } from '../components/ui/Buttons';
import { BiLogOut } from 'react-icons/bi';

export default function Home() {
  const navigate = useNavigate();

  const [totalAlunos, setTotalAlunos] = useState(0);
  const [totalProfessores, setTotalProfessores] = useState(0);
  const [totalCursos, setTotalCursos] = useState(0);

  const tocarSom = () => {
    const audio = new Audio(somAguia);
    audio.play();
  };

  useEffect(() => {
    const carregarTotais = async () => {
      try {
        const [alunos, professores, cursos] = await Promise.all([
          getTotalAlunos(),
          getTotalProfessores(),
          getTotalCursos()
        ]);

        setTotalAlunos(alunos);
        setTotalProfessores(professores);
        setTotalCursos(cursos);
      } catch (error) {
        console.error('Erro ao carregar totais:', error);
      }
    };

    carregarTotais();
  }, []);

  return (
    <>
      <GlobalStyle/>
      <DashboardContainer>
        <Navbar />
        <MainContent>
          <HeaderSection>
            <WelcomeSection>
              <WelcomeTitle>Painel de Controle</WelcomeTitle>
              <WelcomeSubtitle>Gerencie sua plataforma educacional de forma eficiente</WelcomeSubtitle>
            </WelcomeSection>
            <BtnPrimary onClick={() => logout(navigate)}>
              <BiLogOut size={20} />
              Sair
            </BtnPrimary>
          </HeaderSection>

          <QuickActionsSection>
            <SectionTitle>Ações Rápidas</SectionTitle>
            <QuickActions>
              <QuickActionCard onClick={() => navigate('/alunos/novo')}>
                <ActionIcon className="students">
                  <FaUserGraduate size={28} />
                </ActionIcon>
                <ActionLabel>Adicionar Aluno</ActionLabel>
              </QuickActionCard>
              <QuickActionCard onClick={() => navigate('/professores/novo')}>
                <ActionIcon className="teachers">
                  <FaChalkboardTeacher size={28} />
                </ActionIcon>
                <ActionLabel>Adicionar Professor</ActionLabel>
              </QuickActionCard>
              <QuickActionCard onClick={() => navigate('/cursos/novo')}>
                <ActionIcon className="courses">
                  <FaBook size={28} />
                </ActionIcon>
                <ActionLabel>Adicionar Curso</ActionLabel>
              </QuickActionCard>
            </QuickActions>
          </QuickActionsSection>

          <DashboardGrid>
            {/* Alunos */}
            <DashboardSection>
              <StatsCard>
                <StatsHeader>
                  <StatsIcon>
                    <FaUserGraduate size={24} />
                  </StatsIcon>
                  <StatsContent>
                    <StatsNumber>{totalAlunos}</StatsNumber>
                    <StatsLabel>Alunos Ativos</StatsLabel>
                  </StatsContent>
                </StatsHeader>
                <StatsFooter>
                  <GrowthIndicator>
                    <i className="bi bi-arrow-up"></i>
                    <span>+12% este mês</span>
                  </GrowthIndicator>
                </StatsFooter>
              </StatsCard>

              <ManagementCard onClick={() => navigate('/alunos')}>
                <CardHeader>
                  <CardIcon>
                    <FaUserGraduate size={20} />
                  </CardIcon>
                  <CardTitle>Gerenciar Alunos</CardTitle>
                </CardHeader>
                <CardDescription>
                  Cadastre novos alunos, gerencie perfis e controle o acesso aos cursos da plataforma.
                </CardDescription>
                <CardFooter>
                  <ViewAllLink>
                    Ver todos os alunos
                    <i className="bi bi-arrow-right"></i>
                  </ViewAllLink>
                </CardFooter>
              </ManagementCard>
            </DashboardSection>

            {/* Professores */}
            <DashboardSection>
              <StatsCard>
                <StatsHeader>
                  <StatsIcon>
                    <FaChalkboardTeacher size={24} />
                  </StatsIcon>
                  <StatsContent>
                    <StatsNumber>{totalProfessores}</StatsNumber>
                    <StatsLabel>Professores</StatsLabel>
                  </StatsContent>
                </StatsHeader>
                <StatsFooter>
                  <GrowthIndicator>
                    <i className="bi bi-arrow-up"></i>
                    <span>+3 novos</span>
                  </GrowthIndicator>
                </StatsFooter>
              </StatsCard>

              <ManagementCard onClick={() => navigate('/professores')}>
                <CardHeader>
                  <CardIcon>
                    <FaChalkboardTeacher size={20} />
                  </CardIcon>
                  <CardTitle>Gerenciar Professores</CardTitle>
                </CardHeader>
                <CardDescription>
                  Adicione professores qualificados e atribua-os aos cursos para otimizar o ensino.
                </CardDescription>
                <CardFooter>
                  <ViewAllLink>
                    Ver todos os professores
                    <i className="bi bi-arrow-right"></i>
                  </ViewAllLink>
                </CardFooter>
              </ManagementCard>
            </DashboardSection>

            {/* Cursos */}
            <DashboardSection>
              <StatsCard>
                <StatsHeader>
                  <StatsIcon>
                    <FaBook size={24} />
                  </StatsIcon>
                  <StatsContent>
                    <StatsNumber>{totalCursos}</StatsNumber>
                    <StatsLabel>Cursos Ativos</StatsLabel>
                  </StatsContent>
                </StatsHeader>
                <StatsFooter>
                  <GrowthIndicator>
                    <i className="bi bi-arrow-up"></i>
                    <span>+5 este mês</span>
                  </GrowthIndicator>
                </StatsFooter>
              </StatsCard>

              <ManagementCard onClick={() => navigate('/cursos')}>
                <CardHeader>
                  <CardIcon>
                    <FaBook size={20} />
                  </CardIcon>
                  <CardTitle>Gerenciar Cursos</CardTitle>
                </CardHeader>
                <CardDescription>
                  Crie, organize e publique cursos de alta qualidade para seus alunos.
                </CardDescription>
                <CardFooter>
                  <ViewAllLink>
                    Ver todos os cursos
                    <i className="bi bi-arrow-right"></i>
                  </ViewAllLink>
                </CardFooter>
              </ManagementCard>
            </DashboardSection>
          </DashboardGrid>
        </MainContent>
        <Footer />
      </DashboardContainer>
    </>
  );
}

/* Styled Components sem transições */
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #152259;
  min-height: 100vh;
  background: linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  margin-left: 320px;
  background: #F5F5F5;
`;

const HeaderSection = styled.div`
  background: #808080;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px rgba(21, 34, 89, 0.15);
`;

const WelcomeSection = styled.div`
  flex: 1;
  margin: 0 40px;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 400;
`;

const QuickActionsSection = styled.div`
  padding: 50px;
  background: #FFFFFF;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #152259;
  margin: 0 0 30px 0;
  text-align: center;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ActionIcon = styled.div`
  color: #152259;
  margin-bottom: 20px;
`;

const ActionLabel = styled.span`
  font-weight: 600;
  color: #152259;
  font-size: 1.1rem;
`;

const QuickActionCard = styled.div`
  background: #FFFFFF;
  border: 2px solid #F5F5F5;
  border-radius: 16px;
  padding: 30px;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(21, 34, 89, 0.1);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  padding: 50px;
  background: #F5F5F5;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatsCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(21, 34, 89, 0.08);
  border: 1px solid rgba(21, 34, 89, 0.05);
`;

const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const StatsIcon = styled.div`
  background: linear-gradient(135deg, #152259, #1a2a6b);
  color: #FFFFFF;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatsContent = styled.div`
  flex: 1;
`;

const StatsNumber = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: #152259;
  margin: 0;
  line-height: 1;
`;

const StatsLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #AAAAAA;
  margin: 5px 0 0 0;
`;

const StatsFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid #F5F5F5;
`;

const GrowthIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FFB400;
  font-weight: 600;
  font-size: 0.9rem;

  i {
    font-size: 14px;
  }
`;

const ViewAllLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #152259;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #FFB400;
  }
`;

const ManagementCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(21, 34, 89, 0.08);
  border: 1px solid rgba(21, 34, 89, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: top;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(21, 34, 89, 0.1);
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;


const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const CardIcon = styled.div`
  background: rgba(255, 180, 0, 0.1);
  color: #FFB400;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #152259;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #AAAAAA;
  line-height: 1.6;
  margin: 0 0 25px 0;
`;

const CardFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid #F5F5F5;
`;
