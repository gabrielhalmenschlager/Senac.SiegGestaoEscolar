import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Serviços / API
import { atualizarProfessor, obterProfessorDetalhado } from '../../services/professores';

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

// Opções compatíveis com o enum da API
const formacaoOptions = [
  { id: 1, label: 'Graduação', value: 'Graduacao' },
  { id: 2, label: 'Pós-Graduação', value: 'PosGraduado' },
  { id: 3, label: 'Mestrado', value: 'Mestrado' },
  { id: 4, label: 'Doutorado', value: 'Doutorado' },
];

export default function EditarProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    telefone: '',
    formacao: 'Graduacao', // default
    ativo: true,
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    if (!id) return;

    obterProfessorDetalhado(id)
      .then(data => {
        if (!data) throw new Error('Professor não encontrado');
        setForm({
          email: data.email || '',
          telefone: data.telefone || '',
          formacao: data.formacao || 'Graduacao', // deve coincidir com enum
          ativo: Boolean(data.ativo),
        });
      })
      .catch(() => setErro('Erro ao carregar professor'));
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
      // envia o valor compatível com o enum
      await atualizarProfessor(id, {
        ...form,
        formacao: form.formacao, // já está compatível
      });
      navigate('/professores');
    } catch (err) {
      console.error('Erro ao salvar professor:', err.response?.data || err);
      setErro('Erro ao atualizar professor. Verifique os dados.');
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
            <h2>Editar Professor</h2>

            {erro && <ErrorText>{erro}</ErrorText>}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="telefone">Telefone:</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                />
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
                    <option key={opt.id} value={opt.value}>
                      {opt.label}
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

              <BtnSecundary type="submit">Salvar</BtnSecundary>
            </form>
          </FormCard>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}
