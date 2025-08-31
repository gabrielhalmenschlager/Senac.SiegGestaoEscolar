import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços / API
import { adicionarCurso } from '../../services/cursos';
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
  const navigate = useNavigate();

  const [professores, setProfessores] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    categoriaCurso: '', // valor enviado deve bater com enum
    valor: 0,
    cargaHoraria: 0,
    ativo: true,
    professorId: 0,
  });
  const [erro, setErro] = useState('');

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

    // Validações
    if (!form.professorId || form.professorId === 0) {
      setErro('Selecione um professor válido.');
      return;
    }

    if (!form.categoriaCurso) {
      setErro('Selecione uma categoria válida.');
      return;
    }

    const payload = {
      ...form,
      valor: Number(form.valor),
      cargaHoraria: Number(form.cargaHoraria),
      professorId: Number(form.professorId),
      dataCriacao: new Date(),
      // categoriaCurso já é string e deve bater com enum: "Basico", "Medio", "Avancado"
    };

    console.log('Payload enviado:', payload); // Verifique no console antes de enviar

    try {
      await adicionarCurso(payload);
      navigate('/cursos');
    } catch (e) {
      console.error('Erro detalhado:', e.response?.data || e);
      setErro('Erro ao cadastrar curso. Verifique os dados.');
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
            <h2>Cadastrar Curso</h2>

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
                  style={{ width: '570px', resize: 'none' }}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="descricao">Descrição:</label>
                <input
                  id="descricao"
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                  rows={4}
                  style={{ width: '570px', resize: 'none' }}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="categoriaCurso">Categoria:</label>
                <select
                  id="categoriaCurso"
                  name="categoriaCurso"
                  value={form.categoriaCurso}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione a categoria</option>
                  <option value="Basico">Básico</option>
                  <option value="Medio">Médio</option>
                  <option value="Avancado">Avançado</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="valor">Valor:</label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  value={form.valor}
                  onChange={handleChange}
                  style={{ width: '570px', resize: 'none' }}
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
                  style={{ width: '570px', resize: 'none' }}
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

              <BtnSecundary type="submit">Cadastrar</BtnSecundary>
            </form>
          </FormCard>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}
