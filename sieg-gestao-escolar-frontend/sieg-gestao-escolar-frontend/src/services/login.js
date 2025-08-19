import axios from 'axios';

const api = axios.create({
  baseURL: 'https://identityserver-api.onrender.com',
});
    
export async function login(username, password) {
  try {
    const response = await api.post('/auth/login', {
      username,
      password
    });
    const token = response.data.token
    localStorage.setItem('token', token)
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}
