import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import './Home.css';
import Navbar from '../components/NavBar';
import logo from '../assets/logo.png'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="main-content">
        <header className="main-header center-header">
          <img src={logo} alt="Logo" className="main-logo" />
          <h1>Bem Vindo ao seu Painel de Controle!</h1>
        </header>
          <button className="logout-btn">Log out</button>

        <div className="cards">
          <div className="card" onClick={() => navigate('/alunos')}>
            <FaUserGraduate size={40} color="#509CDB" />
            <h3>Adicione outros Alunos</h3>
            <p>Cadastre novos alunos e gerencie suas informações para que possam acessar seus cursos.</p>
          </div>
          <div className="card" onClick={() => navigate('/professores')}>
            <FaChalkboardTeacher size={40} color="#509CDB" />
            <h3>Adicione Professores</h3>
            <p>Inclua professores e atribua-os aos cursos para facilitar o ensino e a gestão.</p>
          </div>
          <div className="card" onClick={() => navigate('/cursos')}>
            <FaBook size={40} color="#509CDB" />
            <h3>Adicione Cursos</h3>
            <p>Crie e organize cursos para oferecer aos seus alunos de forma simples e rápida.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
