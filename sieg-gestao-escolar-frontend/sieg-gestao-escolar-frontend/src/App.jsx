import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ListaProfessores from './pages/Professores/ListaProfessores';
import CadastroProfessor from './pages/Professores/CadastroProfessor';
import DetalheProfessor from './pages/Professores/DetalheProfessor';
import Login from './pages/Login/Login'; // <- Import do Login

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Professores */}
      <Route path="/professores" element={<ListaProfessores />} />
      <Route path="/professores/novo" element={<CadastroProfessor />} />
      <Route path="/professores/:id" element={<DetalheProfessor />} />
      <Route path="/professores/:id/editar" element={<CadastroProfessor />} />

      {/* Rota fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
