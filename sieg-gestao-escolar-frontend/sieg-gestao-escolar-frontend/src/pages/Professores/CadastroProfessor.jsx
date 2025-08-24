// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Serviços / API
import { adicionarProfessor, atualizarProfessor, obterProfessorDetalhado } from '../../services/professores';

// Componentes globais
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { GlobalStyle } from '../../components/GlobalStyle';

// Layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { FormCard, FormGroup, CheckboxGroup } from "../../components/ui/CardStyles";
import { BtnSecundary } from "../../components/ui/Buttons";
import { MainLogo } from "../../components/ui/Logo";
import { ErrorText } from "../../components/ui/Text"; 

// Assets
import Logo from '../../assets/logo.png';

const formacaoOptions = [
  { id: 1, nome: 'Graduacao' },
  { id: 2, nome: 'PosGraduacao' },
  { id: 3, nome: 'Mestrado' },
  { id: 4, nome: 'Doutorado' },
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
    formacao: 'Graduacao',
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
            formacao: data.formacao,
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
        const dadosParaAtualizar = {
          email: form.email,
          telefone: form.telefone,
          formacao: form.formacao,
          ativo: form.ativo,
        };
        await atualizarProfessor(id, dadosParaAtualizar);
      } else {
        await adicionarProfessor(form);
      }
      navigate('/professores');
    } catch {
      setErro('Erro ao salvar professor');
    }
  }

  return (
    <>
      <GlobalStyle />
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
                <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required disabled={!!id} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" name="sobrenome" value={form.sobrenome} onChange={handleChange} required disabled={!!id} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="dataDeNascimento">Data de Nascimento:</label>
                <input type="date" id="dataDeNascimento" name="dataDeNascimento" value={form.dataDeNascimento} onChange={handleChange} required disabled={!!id} />
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
                <select
                  id="formacao"
                  name="formacao"
                  value={form.formacao}
                  onChange={handleChange}
                  required
                >
                  {formacaoOptions.map(opt => (
                    <option key={opt.id} value={opt.nome}>{opt.nome}</option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="dataContratacao">Data de Contratação:</label>
                <input type="date" id="dataContratacao" name="dataContratacao" value={form.dataContratacao} onChange={handleChange} required disabled={!!id} />
              </FormGroup>

              <CheckboxGroup>
                <label>
                  <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
                  Ativo
                </label>
              </CheckboxGroup>

              <BtnSecundary type="submit">{id ? 'Salvar' : 'Cadastrar'}</BtnSecundary>
            </form>
          </FormCard>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}