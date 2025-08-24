// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços / API
import { obterTodosProfessores, deletarProfessor } from '../../services/professores';

// Componentes globais
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

// Layout e UI reutilizáveis
import { GlobalStyle } from '../../components/GlobalStyle';
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { BtnPrimary } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";
import { PageHeader, TableContainer, TableGlobal } from "../../components/ui/TableStyles";

// Importando ícones
import { BiDetail, BiEdit, BiTrash } from 'react-icons/bi';

export default function ListaProfessores() {
  const [professores, setProfessores] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    carregarProfessores();
  }, []);

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

  async function handleExcluir(id) {
    if (window.confirm('Deseja realmente excluir este professor?')) {
      try {
        await deletarProfessor(id);
        alert('Professor excluído com sucesso!');
        carregarProfessores();
      } catch (e) {
        console.error(e);
        alert('Erro ao excluir professor.');
      }
    }
  }

  return (
    <>
      <GlobalStyle/>
      <PageContainer>
        <Navbar />
        <MainContent>
          <PageHeader>
            <h1>Professores</h1>
            <BtnPrimary onClick={() => navigate('/professores/novo')}>
              <i className="bi bi-person-plus" style={{ marginRight: '8px' }}></i>
              Adicionar Professor
            </BtnPrimary>
          </PageHeader>

          {carregando && <p>Carregando...</p>}
          {erro && <ErrorText>{erro}</ErrorText>}

          {professores.length > 0 && (
            <TableContainer>
              <TableGlobal>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Ativo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {professores.map(prof => (
                    <tr key={prof.id}>
                      <td>{prof.id}</td>
                      <td>{prof.nome} {prof.sobrenome}</td>
                      <td>{prof.email}</td>
                      <td>{prof.telefone}</td>
                      <td>{prof.ativo ? "Sim" : "Não"}</td>
                      <td style={{ display: 'flex', gap: '15px' }}>
                        <BiDetail 
                          size={20} 
                          color="#1E90FF" 
                          style={{ cursor: 'pointer' }} 
                          onClick={() => navigate(`/professores/${prof.id}`)}
                          title="Detalhes"
                        />
                        <BiEdit 
                          size={20} 
                          color="#FFA500" 
                          style={{ cursor: 'pointer' }} 
                          onClick={() => navigate(`/professores/${prof.id}/editar`)}
                          title="Editar"
                        />
                        <BiTrash 
                          size={20} 
                          color="#FF4C4C" 
                          style={{ cursor: 'pointer' }} 
                          onClick={() => handleExcluir(prof.id)}
                          title="Excluir"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </TableGlobal>
            </TableContainer>
          )}
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}