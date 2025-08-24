import api from './api';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export async function obterTodosProfessores() {
  const response = await api.get('/professor', { headers: getAuthHeader() });
  return response.data;
}

export async function obterProfessorDetalhado(id) {
  const response = await api.get(`/${id}/professor`, { headers: getAuthHeader() });
  return response.data;
}

export async function adicionarProfessor(professor) {
  const response = await api.post('/adicionar/professor', professor, { headers: getAuthHeader() });
  return response.data;
}

export async function atualizarProfessor(id, professor) {
  const response = await api.put(`/${id}/atualizar`, professor, { headers: getAuthHeader() });
  return response.data;
}

export async function deletarProfessor(id) {
  const response = await api.delete(`/${id}/deletar`, { headers: getAuthHeader() });
  return response.data;
}


