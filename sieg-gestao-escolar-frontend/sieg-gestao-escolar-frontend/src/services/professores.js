import api from './api';

export async function obterTodosProfessores() {
  const response = await api.get('/professor', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYWJyaWVsLmhhbG1lbnNjaGxhZ2VyIiwianRpIjoiYWM0Yzk0MGQtZjJmOS00YmRlLTg3ZjktYmJlNWE0ZTA2OWM4IiwiZXhwIjoxNzU1MDQ1ODM1LCJpc3MiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20ifQ.0Lcawg0wOxN8_UYr2mwrmocyGN_DPRUqMzfbrM4pgGs'
  }
})
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
