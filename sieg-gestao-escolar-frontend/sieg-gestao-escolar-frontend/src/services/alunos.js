import api from './api';

export async function obterTodosAlunos() {
  const response = await api.get('/aluno', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYWJyaWVsLmhhbG1lbnNjaGxhZ2VyIiwianRpIjoiYWM0Yzk0MGQtZjJmOS00YmRlLTg3ZjktYmJlNWE0ZTA2OWM4IiwiZXhwIjoxNzU1MDQ1ODM1LCJpc3MiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20ifQ.0Lcawg0wOxN8_UYr2mwrmocyGN_DPRUqMzfbrM4pgGs'
  }
})
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