import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/login';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Logo from '../../assets/logo.png';
import styled from 'styled-components';

// Componente Login
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
      setLoading(false);
      navigate('/');
    } catch (err) {
      setErro('Usuário ou senha inválidos');
      setLoading(false);
    }
  }

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <FormCard>
          <MainLogo src={Logo} alt="Logo" />
          <h2>Login</h2>

          {erro && <ErrorText>{erro}</ErrorText>}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </ButtonPrimary>
          </form>
        </FormCard>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

// Styled Components (mesmos do seu código anterior)
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormCard = styled.div`
  width: 400px;
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
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 10px;
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

const ButtonPrimary = styled.button`
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

  &:hover:enabled {
    background-color: #3a83bf;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #a0c4e8;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;

const MainLogo = styled.img`
  display: block;
  margin: 0 auto 20px auto;
  width: 100px;
`;
