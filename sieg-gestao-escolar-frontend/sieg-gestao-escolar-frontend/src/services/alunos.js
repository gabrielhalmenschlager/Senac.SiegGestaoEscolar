import api from './api';

export async function obterTodosAlunos() {
  const response = await api.get('/aluno',)
  return response.data;
}

export async function obterAlunoDetalhado(id) {
  const response = await api.get(`/aluno/${id}`);
  return response.data;
}

export async function adicionarAluno(aluno) {
  const response = await api.post('/aluno', aluno);
  return response.data;
}

export async function atualizarAluno(id, aluno) {
  const response = await api.put(`/aluno/${id}`, aluno);
  return response.data;
}

export async function deletarAluno(id) {
  const response = await api.delete(`/aluno/${id}`);
  return response.data;
}