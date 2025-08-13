import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
    <div style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
      <h1>Bem-vindo ao Sistema de Gestão Escolar</h1>
      <p>Gerencie Professores, Cursos e Alunos de forma fácil e rápida.</p>
    </div>
    </div>
  );
}
