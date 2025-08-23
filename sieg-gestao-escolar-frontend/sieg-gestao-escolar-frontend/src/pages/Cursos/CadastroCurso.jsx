import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adicionarCurso } from '../../services/cursos';
import { obterTodosProfessores } from '../../services/professores';

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { PageContainer, MainContent } from "../../components/ui/Layout";

import Logo from '../../assets/logo.png';

import styled from 'styled-components';

export default function CadastroCurso() {
  const navigate = useNavigate();

  const [professores, setProfessores] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    dataCriacao: '',
    categoriaCurso: '',
    valor: 0,
    cargaHoraria: 0,
    ativo: true,
    professorId: 0,
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarProfessores() {
      try {
        const dados = await obterTodosProfessores(); // ou via API de professores
        setProfessores(dados);
      } catch (e) {
        console.log('Erro ao carregar professores', e);
      }
    }
    carregarProfessores();
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    try {
      await adicionarCurso(form);
      navigate('/cursos');
    } catch {
      setErro('Erro ao cadastrar curso. Verifique os dados.');
    }
  }

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <FormCard>
          <MainLogo src={Logo} alt="Logo" />
          <h2>Cadastrar Curso</h2>

          {erro && <ErrorText>{erro}</ErrorText>}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="descricao">Descrição:</label>
              <textarea id="descricao" name="descricao" value={form.descricao} onChange={handleChange} rows={4} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="dataCriacao">Data de Criação:</label>
              <input type="date" id="dataCriacao" name="dataCriacao" value={form.dataCriacao} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="categoriaCurso">Categoria:</label>
              <input type="text" id="categoriaCurso" name="categoriaCurso" value={form.categoriaCurso} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="valor">Valor:</label>
              <input type="number" id="valor" name="valor" value={form.valor} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="cargaHoraria">Carga Horária (horas):</label>
              <input type="number" id="cargaHoraria" name="cargaHoraria" value={form.cargaHoraria} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="professorId">Professor:</label>
              <select name="professorId" value={form.professorId} onChange={handleChange} required>
                <option value={0}>Selecione um professor</option>
                {professores.map(p => (
                  <option key={p.id} value={p.id}>{p.nome} {p.sobrenome}</option>
                ))}
              </select>
            </FormGroup>

            <CheckboxGroup>
              <label>
                <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
                Ativo
              </label>
            </CheckboxGroup>

            <ButtonSecundary type="submit">Cadastrar</ButtonSecundary>
          </form>
        </FormCard>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

/* Styled Components */
const FormCard = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  h2 {
    color: #4F4F4F;
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: #509CDB;
    }
  }

  textarea {
    resize: none;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #d0d7de;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    margin-right: 10px;
  }
`;

const ButtonSecundary = styled.button`
  display: block;
  width: 100%;
  background-color: #509CDB;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a83bf;
    transform: translateY(-2px);
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 15px;
  text-align: center;
`;

const MainLogo = styled.img`
  display: block;
  margin: 0 auto 20px auto;
  width: 100px;
`;
