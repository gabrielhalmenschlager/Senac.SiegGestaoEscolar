import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export async function login(username, password) {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}

export function logout(navigate) {
  localStorage.removeItem('token');
  navigate('/login', { replace: true });
}