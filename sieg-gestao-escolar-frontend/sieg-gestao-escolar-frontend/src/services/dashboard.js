import api from './api';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export const getTotalProfessores = async () => {
    const response = await api.get('/professor/total', { headers: getAuthHeader() });
    return response.data.total;
  };

export const getTotalAlunos = async () => {
const response = await api.get('/aluno/total', { headers: getAuthHeader() });
return response.data.total;
};

export const getTotalCursos = async () => {
const response = await api.get('/curso/total', { headers: getAuthHeader() });
return response.data.total;
};