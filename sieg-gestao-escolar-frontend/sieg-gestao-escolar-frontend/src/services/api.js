import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7230',
  headers: {
    'Authorization': 'Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYWJyaWVsLmhhbG1lbnNjaGxhZ2VyIiwianRpIjoiNjliYmJmMmUtZjhjOC00ODg0LTkzYzAtN2FjZjEzN2YzNTM2IiwiZXhwIjoxNzU1Mjk1NTMwLCJpc3MiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20ifQ.X2H8WFznrIY4MDLdA50qLjh0z6-8auobhiY7dHOriLA'
  }
});

export default api;
