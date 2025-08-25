// React e hooks
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Serviços / API
import { obterTodosAlunos, deletarAluno } from "../../services/alunos"

// Componentes globais
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GlobalStyle } from '../../components/GlobalStyle';
import SearchBar from '../../components/ui/SearchBar';

// Layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { PageHeader, TableContainer, TableGlobal } from "../../components/ui/TableStyles";
import { BtnPrimary } from "../../components/ui/Buttons";
import ErrorMessage from '../../components/ui/ErrorMessage';

// Importando ícones
import { BiDetail, BiEdit, BiTrash } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    carregarAlunos();
  }, []);

  async function carregarAlunos() {
    setCarregando(true);
    setErro("");
    try {
      const dados = await obterTodosAlunos();
      setAlunos(dados);
    } catch (e) {
      setErro("Erro ao carregar alunos");
      console.log(e);
    }
    setCarregando(false);
  }

  async function handleExcluir(id) {
    if (window.confirm("Deseja realmente excluir este aluno?")) {
      try {
        await deletarAluno(id);
        alert("Aluno excluído com sucesso!");
        carregarAlunos();
      } catch (e) {
        console.error(e);
        alert("Erro ao excluir aluno.");
      }
    }
  }

  const alunosFiltrados = alunos.filter(aluno =>
    `${aluno.nome} ${aluno.sobrenome}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <PageHeader>
            <h1>Alunos</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <SearchBar
                placeholder="Pesquisar alunos..."
                value={searchTerm}
                onChange={setSearchTerm}
                style={{ width: '250px' }}
              />
              <BtnPrimary onClick={() => navigate("/alunos/novo")}>
                <i className="bi bi-person-plus" style={{ marginRight: "8px" }}></i>
                Adicionar Aluno
              </BtnPrimary>
            </div>
          </PageHeader>

          {carregando && <p>Carregando...</p>}
          {erro && <ErrorMessage title="Erro ao carregar cursos" message={erro} />}      

          {alunosFiltrados.length > 0 && (
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
                  {alunosFiltrados.map(aluno => (
                    <tr key={aluno.id}>
                      <td>{aluno.id}</td>
                      <td>{aluno.nome} {aluno.sobrenome}</td>
                      <td>{aluno.email}</td>
                      <td>{aluno.telefone}</td>
                      <td>
                        {aluno.ativo 
                          ? <AiOutlineCheck size={20} color="green" /> 
                          : <AiOutlineClose size={20} color="red" />
                        }
                      </td>
                      <td style={{ display: 'flex', gap: '15px' }}>
                        <BiDetail
                          size={20}
                          color="#1E90FF"
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/alunos/${aluno.id}`)}
                          title="Detalhes"
                        />
                        <BiEdit
                          size={20}
                          color="#FFA500"
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/alunos/${aluno.id}/editar`)}
                          title="Editar"
                        />
                        <BiTrash
                          size={20}
                          color="#FF4C4C"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleExcluir(aluno.id)}
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