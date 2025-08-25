// React e hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Serviços / API
import { login } from '../../services/login';

// Componentes globais
import { GlobalStyle } from "../../components/GlobalStyle";

// Layout e UI reutilizáveis
import { 
  PageContainer, LeftSide, WelcomeText, LogoTop, 
  RightSide, FormCard, FormGroup, InputWrapper, 
  ButtonPrimary, ErrorText, MainLogo 
} from '../../components/Login';

// Assets
import Logo from '../../assets/logo.png';

// Importando ícones
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      await login(form.username, form.password);
      navigate('/home');
    } catch {
      setErro('Usuário ou senha inválidos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <LeftSide>
          <LogoTop src={Logo} alt="Logo" />
          <WelcomeText>
            <h1>Olá!</h1>
            <h2>Bem-vindo!</h2>
            <p>
              Gerencie sua escola de forma eficiente com nosso sistema completo: cadastro e controle
              de Alunos, Professores e Cursos, tudo em um ambiente seguro e intuitivo.
            </p>
          </WelcomeText>
        </LeftSide>

        <RightSide>
          <FormCard>
            <MainLogo src={Logo} alt="Logo" />
            <h2>Login</h2>
            {erro && <ErrorText>{erro}</ErrorText>}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <InputWrapper>
                  <FaUser className="icon" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <InputWrapper>
                  <FaLock className="icon" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <ButtonPrimary type="submit" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </ButtonPrimary>
            </form>
          </FormCard>
        </RightSide>
      </PageContainer>
    </>
  );
}