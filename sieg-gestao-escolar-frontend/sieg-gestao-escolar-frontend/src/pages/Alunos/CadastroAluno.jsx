// React e hooks
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Serviços / API
import { adicionarAluno, atualizarAluno, obterAlunoDetalhado } from '../../services/alunos';

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

export default function CadastroAluno() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    email: '',
    telefone: '',
    dataMatricula: '',
    ativo: true,
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    if (id) {
      obterAlunoDetalhado(id)
        .then(data => {
          if (!data) throw new Error('Aluno não encontrado');
          setForm({
            email: data.email,
            telefone: data.telefone,
            ativo: Boolean(data.ativo),
          });
        })
        .catch(() => setErro('Erro ao carregar aluno'));
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
          ativo: form.ativo,
        };
        await atualizarAluno(id, dadosParaAtualizar);
      } else {
        await adicionarAluno(form);
      }
      navigate('/alunos');
    } catch {
      setErro('Erro ao salvar aluno');
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
            <h2>{id ? 'Editar Aluno' : 'Cadastrar Aluno'}</h2>

            {erro && <ErrorText>{erro}</ErrorText>}

            <form onSubmit={handleSubmit}>
              {!id && (
                <>
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
                    <label htmlFor="dataMatricula">Data de Matrícula:</label>
                    <input type="date" id="dataMatricula" name="dataMatricula" value={form.dataMatricula} onChange={handleChange} required />
                  </FormGroup>
                </>
              )}

              <FormGroup>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </FormGroup>

              <FormGroup>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
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