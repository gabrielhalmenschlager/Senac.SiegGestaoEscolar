import { useState, useEffect } from 'react';
import { obterTodosProfessores } from '../../services/professores';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';

export default function ListaProfessores() {
  const [professores, setProfessores] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarProfessores() {
      setCarregando(true);
      setErro('');
      try {
        const dados = await obterTodosProfessores();
        setProfessores(dados);
      } catch (e) {
        setErro('Erro ao carregar professores');
        console.log(e)
      }
      setCarregando(false);
    }

    carregarProfessores();
  }, []);

  return (
    <div>
      <Navbar />
    <div style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
      <h1>Professores</h1>

      <button 
        onClick={() => navigate('/professores/novo')} 
        style={{ marginBottom: 20 }}
      >
        Adicionar Professor
      </button>

      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <ul>
        {professores.map(prof => (
          <li key={prof.id}>
            {prof.nome} {prof.sobrenome} — {prof.email} {prof.telefone}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
