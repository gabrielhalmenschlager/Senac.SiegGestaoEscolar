import { useState, useEffect } from 'react';
import { obterTodosCursos } from '../../services/cursos';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

import styled from 'styled-components';

export default function ListaCursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarCursos() {
      setCarregando(true);
      setErro('');
      try {
        const dados = await obterTodosCursos();
        setCursos(dados);
      } catch (e) {
        setErro('Erro ao carregar cursos');
        console.log(e);
      }
      setCarregando(false);
    }
    carregarCursos();
  }, []);

  return (
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
            <CursosTable>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Carga Horária</th>
                  <th>Descrição</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {cursos.map(curso => (
                  <tr key={curso.id}>
                    <td>{curso.nome}</td>
                    <td>{curso.cargaHoraria} horas</td>
                    <td>{curso.descricao}</td>
                    <td>
                      <BtnDetail onClick={() => navigate(`/cursos/${curso.id}`)}>
                        <i className="bi bi-eye" style={{ marginRight: '6px' }}></i>
                        Detalhes
                      </BtnDetail>
                    </td>
                  </tr>
                ))}
              </tbody>
            </CursosTable>
          </TableContainer>
        )}
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

/* Styled Components */
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Kumbh Sans', sans-serif;
  color: #152259;
  background: linear-gradient(135deg, #f8f9fb, #e6e9f0);
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 50px;
  margin-left: 300px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;

  h1 {
    color: #4F4F4F;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
`;

const BtnPrimary = styled.button`
  background-color: #509CDB;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a83bf;
    transform: translateY(-2px);
  }
`;

const BtnDetail = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a6268;
    transform: translateY(-2px);
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  margin-top: 100px;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
`;

const CursosTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 15px;
    font-size: 1rem;
  }

  th {
    background-color: #152259;
    color: white;
    font-weight: 600;
  }

  tr {
    border-bottom: 1px solid #e0e0e0;
    transition: background 0.3s ease;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  td {
    color: #555;
  }
`;
