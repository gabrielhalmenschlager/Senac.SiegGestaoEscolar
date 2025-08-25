import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { adicionarCurso, atualizarCurso, obterCursoDetalhado } from '../../services/cursos';
import { obterTodosProfessores } from '../../services/professores';

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

export default function CadastroCurso() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [professores, setProfessores] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    categoriaCurso: '',
    valor: 0,
    cargaHoraria: 0,
    ativo: true,
    professorId: 0,
  });
  const [erro, setErro] = useState('');

  // Carregar professores
  useEffect(() => {
    async function carregarProfessores() {
      try {
        const dados = await obterTodosProfessores();
        setProfessores(dados);
      } catch (e) {
        console.error('Erro ao carregar professores', e);
      }
    }
    carregarProfessores();
  }, []);

  // Se id existir, carregar curso para edição
  useEffect(() => {
    if (id) {
      async function carregarCurso() {
        try {
          const dados = await obterCursoDetalhado(id);
          if (!dados) throw new Error('Curso não encontrado');
          setForm({
            nome: dados.nome,
            descricao: dados.descricao,
            categoriaCurso: dados.categoriaCurso,
            valor: Number(dados.valor),
            cargaHoraria: Number(dados.cargaHoraria),
            ativo: Boolean(dados.ativo),
            professorId: Number(dados.professorId),
          });
        } catch (e) {
          setErro('Erro ao carregar curso para edição');
          console.error(e);
        }
      }
      carregarCurso();
    }
  }, [id]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'number'
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    try {
      // Monta o payload básico
      const payload = {
        ...form,
        valor: Number(form.valor),
        cargaHoraria: Number(form.cargaHoraria),
        professorId: Number(form.professorId),
      };

      if (id) {
        // Atualização não altera a data de criação
        await atualizarCurso(id, payload);
      } else {
        // Inclusão adiciona o campo obrigatório dataCriacao
        payload.dataCriacao = new Date().toISOString();
        await adicionarCurso(payload);
      }

      navigate('/cursos');
    } catch (e) {
      console.error('Erro detalhado:', e.response?.data || e);
      setErro('Erro ao salvar curso. Verifique os dados.');
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
            <h2>{id ? 'Editar Curso' : 'Cadastrar Curso'}</h2>

            {erro && <ErrorText>{erro}</ErrorText>}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="descricao">Descrição:</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                  rows={4}
                  style={{ width: '400px', height: '100px', resize: 'none' }}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="categoriaCurso">Categoria:</label>
                <input
                  type="text"
                  id="categoriaCurso"
                  name="categoriaCurso"
                  value={form.categoriaCurso}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="valor">Valor:</label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  value={form.valor}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="cargaHoraria">Carga Horária (horas):</label>
                <input
                  type="number"
                  id="cargaHoraria"
                  name="cargaHoraria"
                  value={form.cargaHoraria}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="professorId">Professor:</label>
                <select
                  name="professorId"
                  value={form.professorId}
                  onChange={handleChange}
                  required
                >
                  <option value={0}>Selecione um professor</option>
                  {professores.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.nome} {p.sobrenome}
                    </option>
                  ))}
                </select>
              </FormGroup>

              <CheckboxGroup>
                <label>
                  <input
                    type="checkbox"
                    name="ativo"
                    checked={form.ativo}
                    onChange={handleChange}
                  />
                  Ativo
                </label>
              </CheckboxGroup>

              <BtnSecundary type="submit">
                {id ? 'Salvar' : 'Cadastrar'}
              </BtnSecundary>
            </form>
          </FormCard>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}