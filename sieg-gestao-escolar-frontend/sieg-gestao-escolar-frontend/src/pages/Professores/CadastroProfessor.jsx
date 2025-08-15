import { useState, useEffect } from 'react';
import { adicionarProfessor, atualizarProfessor, obterProfessorDetalhado } from '../../services/professores';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Logo from '../../assets/logo.png';

import styled from 'styled-components';

const formacaoOptions = [
  'EnsinoMedio',
  'EnsinoTecnico',
  'Graduado',
  'PosGraduado',
  'Mestrado',
  'Doutorado',
];

export default function CadastroProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    email: '',
    telefone: '',
    formacao: formacaoOptions[0],
    dataContratacao: '',
    ativo: true,
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    if (id) {
      obterProfessorDetalhado(id)
        .then(data => {
          if (!data) throw new Error('Professor não encontrado');
          setForm({
            ...data,
            dataDeNascimento: data.dataDeNascimento?.slice(0, 10) || '',
            dataContratacao: data.dataContratacao?.slice(0, 10) || '',
            ativo: Boolean(data.ativo),
          });
        })
        .catch(() => setErro('Erro ao carregar professor'));
    }
  }, [id]);

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
      if (id) {
        await atualizarProfessor(id, form);
      } else {
        await adicionarProfessor(form);
      }
      navigate('/professores');
    } catch {
      setErro('Erro ao salvar professor');
    }
  }

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <FormCard>
          <MainLogo src={Logo} alt="Logo" />
          <h2>{id ? 'Editar Professor' : 'Cadastrar Professor'}</h2>

          {erro && <ErrorText>{erro}</ErrorText>}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={form.sobrenome} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="dataDeNascimento">Data de Nascimento:</label>
              <input type="date" id="dataDeNascimento" name="dataDeNascimento" value={form.dataDeNascimento} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="formacao">Formação:</label>
              <select id="formacao" name="formacao" value={form.formacao} onChange={handleChange} required>
                {formacaoOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="dataContratacao">Data de Contratação:</label>
              <input type="date" id="dataContratacao" name="dataContratacao" value={form.dataContratacao} onChange={handleChange} required />
            </FormGroup>

            <CheckboxGroup>
              <label>
                <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
                Ativo
              </label>
            </CheckboxGroup>

            <ButtonSecundary type="submit">{id ? 'Salvar' : 'Cadastrar'}</ButtonSecundary>
          </form>
        </FormCard>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Kumbh Sans', sans-serif;
  color: #152259;
  background: linear-gradient(135deg, #f8f9fb, #e6e9f0);
  flex-direction: column; /* organiza Navbar, main e Footer verticalmente */
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 50px;
  margin-left: 300px; /* largura da navbar vertical */
`;

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

  input, select {
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
