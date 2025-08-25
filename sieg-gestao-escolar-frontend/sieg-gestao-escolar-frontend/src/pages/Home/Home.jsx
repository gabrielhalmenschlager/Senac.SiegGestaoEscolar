// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços / API
import { getTotalProfessores, getTotalAlunos, getTotalCursos } from '../../services/dashboard';
import { logout } from '../../services/login';

// Componentes globais
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { GlobalStyle } from '../../components/GlobalStyle';

// Layout e UI reutilizáveis
import { BtnPrimary } from '../../components/ui/Buttons';

// Componentes de layout e estilização do Dashboard
import {
  DashboardContainer,
  MainContent,
  HeaderSection,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle,
  QuickActionsSection,
  SectionTitle,
  QuickActions,
  QuickActionCard,
  ActionIcon,
  ActionLabel,
  DashboardGrid,
  DashboardSection,
  StatsCard,
  StatsHeader,
  StatsIcon,
  StatsContent,
  StatsNumber,
  StatsLabel,
  StatsFooter,
  GrowthIndicator,
  ManagementCard,
  CardHeader,
  CardIcon,
  CardTitle,
  CardDescription,
  CardFooter,
  ViewAllLink
} from '../../components/Home';

// Assets
import somAguia from '../../assets/aguia.mp3';

// Ícones
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
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