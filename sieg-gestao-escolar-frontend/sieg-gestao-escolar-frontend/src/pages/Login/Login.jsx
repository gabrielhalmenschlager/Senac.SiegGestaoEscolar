import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/login';
import Logo from '../../assets/logo.png';
import styled from 'styled-components';
import { GlobalStyle } from "../../components/GlobalStyle";
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

/* Styled Components */
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Kumbh Sans', sans-serif;
`;

const LeftSide = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #152259, #1e2a59);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  position: relative;
  color: #fff;
`;

const WelcomeText = styled.div`
  max-width: 450px;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #d1d1d1;
  }
`;

const LogoTop = styled.img`
  position: absolute;
  top: 70px;
  left: 80px;
  width: 90px;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  padding: 40px;
`;

const FormCard = styled.div`
  width: 400px;
  padding: 50px 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    color: #333;
    font-weight: 600;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 12px;
    color: #509CDB;
    font-size: 1.1rem;
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border-radius: 12px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    background-color: #f8f9fa;

    &:focus {
      border-color: #509CDB;
      box-shadow: 0 0 8px rgba(80, 156, 219, 0.4);
      background-color: #fff;
    }
  }

  &::after {
    content: '';
  }
`;

const ButtonPrimary = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #509CDB, #3a83bf);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:enabled {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  }

  &:disabled {
    background-color: #a0c4e8;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;

const MainLogo = styled.img`
  display: block;
  margin: 0 auto 25px auto;
  width: 100px;
`;
