// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços/API
import { obterTodosProfessores, deletarProfessor } from '../../services/professores';

// Componentes globais
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

// Componentes de layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { BtnPrimary, BtnDetail, BtnEdit, BtnDelete } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";
import { PageHeader, TableContainer, ProfessoresTable } from "../../components/ui/TableStyles";

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
            <ProfessoresTable>
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
                    <td>
                      <BtnDetail onClick={() => navigate(`/professores/${prof.id}`)}>Detalhes</BtnDetail>
                      <BtnEdit onClick={() => navigate(`/professores/${prof.id}/editar`)}>Editar</BtnEdit>
                      <BtnDelete onClick={() => handleExcluir(prof.id)}>Excluir</BtnDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProfessoresTable>
          </TableContainer>
        )}
      </MainContent>
      <Footer />
    </PageContainer>
  );
}