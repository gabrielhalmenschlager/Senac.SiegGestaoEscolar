import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ListaProfessores from './pages/Professores/ListaProfessores';
import CadastroProfessor from './pages/Professores/CadastroProfessor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/professores" element={<ListaProfessores />} />
      <Route path="/professores/novo" element={<CadastroProfessor />} />
      <Route path="/professores/:id" element={<CadastroProfessor />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
