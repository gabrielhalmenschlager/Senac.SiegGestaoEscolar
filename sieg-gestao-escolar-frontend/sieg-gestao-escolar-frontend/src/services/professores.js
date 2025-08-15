import api from './api';

export async function obterTodosProfessores() {
  const response = await api.get('/professor',)
  return response.data;
}

export async function obterProfessorDetalhado(id) {
  const response = await api.get(`/professor/${id}`);
  return response.data;
}

export async function adicionarProfessor(professor) {
  const response = await api.post('/professor', professor);
  return response.data;
}

export async function atualizarProfessor(id, professor) {
  const response = await api.put(`/professor/${id}`, professor);
  return response.data;
}

export async function deletarProfessor(id) {
  const response = await api.delete(`/professor/${id}`);
  return response.data;
}
