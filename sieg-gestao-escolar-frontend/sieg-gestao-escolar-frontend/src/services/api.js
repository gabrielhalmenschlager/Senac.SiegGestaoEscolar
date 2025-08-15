import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7230',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYWJyaWVsLmhhbG1lbnNjaGxhZ2VyIiwianRpIjoiMzExZWU5ZTAtNWEwMi00YWZmLWI1MmEtYTBjYzI4MGQyMDA1IiwiZXhwIjoxNzU1MjE3MTE1LCJpc3MiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5c2VydmVyLWFwaS5vbnJlbmRlci5jb20ifQ.EBLVIxkMavCofbjqWW8FtfBoLKkrYEp950kRP8Uw_qw'
  }
});

export default api;
