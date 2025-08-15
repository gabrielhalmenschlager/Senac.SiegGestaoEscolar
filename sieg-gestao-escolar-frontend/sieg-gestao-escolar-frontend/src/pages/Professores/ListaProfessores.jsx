import { useState, useEffect } from 'react';
import { obterTodosProfessores } from '../../services/professores';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './ListaProfessores.css';

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
        console.log(e);
      }
      setCarregando(false);
    }

    carregarProfessores();
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="page-header">
          <h1>Professores</h1>
          <button className="btn-primary" onClick={() => navigate('/professores/novo')}>
            <i className="bi bi-person-plus" style={{ marginRight: '8px' }}></i>
            Adicionar Professor
          </button>
        </div>

        {carregando && <p>Carregando...</p>}
        {erro && <p className="error-text">{erro}</p>}

        {professores.length > 0 && (
          <div className="table-container">
            <table className="professores-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {professores.map(prof => (
                  <tr key={prof.id}>
                    <td>{prof.nome} {prof.sobrenome}</td>
                    <td>{prof.email}</td>
                    <td>{prof.telefone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
