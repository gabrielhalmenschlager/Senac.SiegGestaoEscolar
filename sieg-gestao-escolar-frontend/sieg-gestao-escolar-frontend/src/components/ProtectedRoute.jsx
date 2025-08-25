import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não estiver logado, redireciona para login
    return <Navigate to="/login" replace />;
  }

  return children; // Se estiver logado, renderiza o componente
}
