import api from './api';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export async function obterTodosCursos() {
  const response = await api.get('/curso', { headers: getAuthHeader() });
  return response.data;
}

export async function obterCursoDetalhado(id) {
  const response = await api.get(`/${id}/curso`, { headers: getAuthHeader() });
  return response.data;
}

export async function adicionarCurso(curso) {
  const response = await api.post('/adicionar/curso', curso, { headers: getAuthHeader() });
  return response.data;
}

export async function atualizarCurso(id, curso) {
  const response = await api.put(`/curso/${id}/atualizar`, curso, { headers: getAuthHeader() });
  return response.data;
}

export async function deletarCurso(id) {
  const response = await api.delete(`/curso/${id}/deletar`, { headers: getAuthHeader() });
  return response.data;
}