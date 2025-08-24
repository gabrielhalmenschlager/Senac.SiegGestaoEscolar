// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços / API
import { obterTodosCursos, deletarCurso } from '../../services/cursos';

// Componentes globais
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { GlobalStyle } from '../../components/GlobalStyle';

// Layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { BtnPrimary } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";
import { PageHeader, TableContainer, TableGlobal } from "../../components/ui/TableStyles";

// Importando ícones
import { BiDetail, BiEdit, BiTrash } from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

export default function ListaCursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    carregarCursos();
  }, []);

  async function carregarCursos() {
    setCarregando(true);
    setErro('');
    try {
      const dados = await obterTodosCursos();
      setCursos(dados);
    } catch (e) {
      setErro('Erro ao carregar cursos');
      console.error(e);
    }
    setCarregando(false);
  }

  async function handleExcluir(id) {
    if (window.confirm('Deseja realmente excluir este curso?')) {
      try {
        await deletarCurso(id);
        alert('Curso excluído com sucesso!');
        carregarCursos();
      } catch (e) {
        console.error(e);
        alert('Erro ao excluir curso.');
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <PageHeader>
            <h1>Cursos</h1>
            <BtnPrimary onClick={() => navigate('/cursos/novo')}>
              <i className="bi bi-plus-circle" style={{ marginRight: '8px' }}></i>
              Adicionar Curso
            </BtnPrimary>
          </PageHeader>

          {carregando && <p>Carregando...</p>}
          {erro && <ErrorText>{erro}</ErrorText>}

          {cursos.length > 0 && (
            <TableContainer>
              <TableGlobal>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Categoria Curso</th>
                    <th>Valor</th>
                    <th>Ativo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map(curso => (
                    <tr key={curso.id}>
                      <td>{curso.id}</td>
                      <td>{curso.nome}</td>
                      <td>{curso.categoriaCurso}</td>
                      <td>R$ {curso.valor}</td>
                      <td>
                        {curso.ativo 
                          ? <AiOutlineCheck size={20} color="green" /> 
                          : <AiOutlineClose size={20} color="red" />
                        }
                      </td>
                      <td style={{ display: 'flex', gap: '15px' }}>
                        <BiDetail
                          size={20}
                          color="#1E90FF"
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/cursos/${curso.id}`)}
                          title="Detalhes"
                        />
                        <BiEdit
                          size={20}
                          color="#FFA500"
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/cursos/${curso.id}/editar`)}
                          title="Editar"
                        />
                        <BiTrash
                          size={20}
                          color="#FF4C4C"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleExcluir(curso.id)}
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
