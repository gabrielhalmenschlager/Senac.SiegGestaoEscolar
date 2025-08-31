import api from './api';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export async function obterTodosProfessores() {
  const response = await api.get('/professor/listar', { headers: getAuthHeader() });
  return response.data;
}

export async function obterProfessorDetalhado(id) {
  const response = await api.get(`/professor/${id}/detalhar`, { headers: getAuthHeader() });
  return response.data;
}

export async function adicionarProfessor(professor) {
  const response = await api.post('/professor/adicionar', professor, { headers: getAuthHeader() });
  return response.data;
}

export async function atualizarProfessor(id, professor) {
  const response = await api.put(`/professor/${id}/atualizar`, professor, { headers: getAuthHeader() });
  return response.data;
}

export async function deletarProfessor(id) {
  const response = await api.delete(`/professor/${id}/deletar`, { headers: getAuthHeader() });
  return response.data;
}

export async function obterTotalProfessores() {
  const response = await api.get('/professor/total', { headers: getAuthHeader() });
  return response.data;
}

export async function vincularProfessorCurso(dados) {
  const response = await api.post('/professor/vincular', dados, { headers: getAuthHeader() });
  return response.data;
}
