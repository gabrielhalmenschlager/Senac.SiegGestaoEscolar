import api from './api';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export async function obterTodosAlunos() {
  const response = await api.get('/aluno/listar', { headers: getAuthHeader() })
  return response.data;
}

export async function obterAlunoDetalhado(id) {
  const response = await api.get(`aluno/${id}/detalhar`, { headers: getAuthHeader() });
  return response.data;
}

export async function adicionarAluno(aluno) {
  const response = await api.post('/aluno/adicionar', aluno, { headers: getAuthHeader() });
  return response.data;
}

export async function atualizarAluno(id, aluno) {
  const response = await api.put(`/aluno/${id}/atualizar`, aluno, { headers: getAuthHeader() });
  return response.data;
}

export async function deletarAluno(id) {
  const response = await api.delete(`/aluno/${id}/deletar`, { headers: getAuthHeader() });
  return response.data;
}

export async function vincularAlunoCurso(dados) {
  const response = await api.post('/aluno/vincular', dados, { headers: getAuthHeader() });
  return response.data;
}

export async function desvincularAlunoCurso({ idAluno, idCurso }) {
  const response = await api.delete('/aluno/desvincular', {
    headers: getAuthHeader(),
    data: { idAluno, idCurso }
  });
  return response.data;
}
