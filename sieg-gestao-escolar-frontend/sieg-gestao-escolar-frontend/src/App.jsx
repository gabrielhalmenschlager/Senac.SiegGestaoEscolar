import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';

// Professores
import ListaProfessores from './pages/Professores/ListaProfessores';
import CadastroProfessor from './pages/Professores/CadastroProfessor';
import DetalheProfessor from './pages/Professores/DetalheProfessor';

// Alunos
import ListaAlunos from './pages/Alunos/ListaAlunos';
import CadastroAluno from './pages/Alunos/CadastroAluno';
import DetalheAluno from './pages/Alunos/DetalheAluno';

import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Home */}
      <Route path="/home" element={<Home />} />

      {/* Professores */}
      <Route path="/professores" element={<ListaProfessores />} />
      <Route path="/professores/novo" element={<CadastroProfessor />} />
      <Route path="/professores/:id" element={<DetalheProfessor />} />
      <Route path="/professores/:id/editar" element={<CadastroProfessor />} />

      {/* Alunos */}
      <Route path="/alunos" element={<ListaAlunos />} />
      <Route path="/alunos/novo" element={<CadastroAluno />} />
      <Route path="/alunos/:id" element={<DetalheAluno />} />
      <Route path="/alunos/:id/editar" element={<CadastroAluno />} />

      {/* Rota inicial sempre vai para login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Rota fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
