import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import './Home.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  const navigate = useNavigate();

  // Valores simulados — aqui você pode buscar da API
  const totalAlunos = 128;
  const totalProfessores = 12;
  const totalCursos = 24;

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="main-content">
        <header className="main-header center-header">
          <img src={logo} alt="Logo" className="main-logo" />
          <h1>Bem Vindo ao seu Painel de Controle!</h1>
        </header>
        <div className="logout-wrapper">
          <button className="logout-btn">
            <i className="bi bi-box-arrow-right" style={{ marginRight: '8px' }}></i>
            Log out
          </button>
        </div>

        {/* Blocos com estatística + card */}
        <div className="dashboard-sections">
          {/* Alunos */}
          <div className="dashboard-block">
            <div className="stat-card">
              <FaUserGraduate size={35} color="#509CDB" />
              <div>
                <h1>Total de Alunos</h1>
                <h2>{totalAlunos}</h2>
                <p>Ativos</p>
              </div>
            </div>
            <div className="card" onClick={() => navigate('/alunos')}>
              <div className="card-icon">
                <FaUserGraduate size={20} color="#152259" />
              </div>
              <div>
                <h3>Adicione outros Alunos</h3>
                <p>Cadastre novos alunos e gerencie suas informações para que possam acessar seus cursos.</p>
              </div>
            </div>
          </div>

          {/* Professores */}
          <div className="dashboard-block">
            <div className="stat-card">
              <FaChalkboardTeacher size={35} color="#509CDB" />
              <div>
                <h1>Total de Professores</h1>
                <h2>{totalProfessores}</h2>
                <p>Professores cadastrados</p>
              </div>
            </div>
            <div className="card" onClick={() => navigate('/professores')}>
              <div className="card-icon">
                <FaChalkboardTeacher size={20} color="#152259" />
              </div>
              <div>
                <h3>Adicione Professores</h3>
                <p>Inclua professores e atribua-os aos cursos para facilitar o ensino e a gestão.</p>
              </div>
            </div>
          </div>

          {/* Cursos */}
          <div className="dashboard-block">
            <div className="stat-card">
              <FaBook size={35} color="#509CDB" />
              <div>
                <h1>Total de Cursos</h1>
                <h2>{totalCursos}</h2>
                <p>Cursos disponiveis</p>
              </div>
            </div>
            <div className="card" onClick={() => navigate('/cursos')}>
              <div className="card-icon">
                <FaBook size={20} color="#152259" />
              </div>
              <div>
                <h3>Adicione Cursos</h3>
                <p>Crie e organize cursos para oferecer aos seus alunos de forma simples e rápida.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
