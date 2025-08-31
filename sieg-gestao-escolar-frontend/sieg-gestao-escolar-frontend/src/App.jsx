// React e hooks
import { Routes, Route, Navigate } from 'react-router-dom';

// Import da Proteção das rotas
import ProtectedRoute from './components/ProtectedRoute';

// Import Home
import Home from './pages/Home/Home';

// Professores
import ListaProfessores from './pages/Professores/ListaProfessores';
import CadastroProfessor from './pages/Professores/CadastroProfessor';
import EditarProfessor from './pages/Professores/EditarProfessor';
import DetalheProfessor from './pages/Professores/DetalheProfessor';

// Alunos
import ListaAlunos from './pages/Alunos/ListaAlunos';
import CadastroAluno from './pages/Alunos/CadastroAluno';
import DetalheAluno from './pages/Alunos/DetalheAluno';
import VincularAlunoCurso from './pages/Alunos/VincularAlunoCurso';
import DesvincularAlunoCurso from './pages/Alunos/DesvincularAlunoCurso';

// Cursos
import ListaCursos from './pages/Cursos/ListaCursos';
import CadastroCurso from './pages/Cursos/CadastroCurso';
import EditarCurso from './pages/Cursos/EditarCurso';
import DetalheCurso from './pages/Cursos/DetalheCurso';

import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Professores */}
      <Route
        path="/professores"
        element={
          <ProtectedRoute>
            <ListaProfessores />
          </ProtectedRoute>
        }
      />
      <Route
        path="/professores/novo"
        element={
          <ProtectedRoute>
            <CadastroProfessor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/professores/:id"
        element={
          <ProtectedRoute>
            <DetalheProfessor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/professores/:id/editar"
        element={
          <ProtectedRoute>
            <EditarProfessor />
          </ProtectedRoute>
        }
      />

      {/* Alunos */}
      <Route
        path="/alunos"
        element={
          <ProtectedRoute>
            <ListaAlunos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alunos/novo"
        element={
          <ProtectedRoute>
            <CadastroAluno />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alunos/:id"
        element={
          <ProtectedRoute>
            <DetalheAluno />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alunos/:id/editar"
        element={
          <ProtectedRoute>
            <CadastroAluno />
          </ProtectedRoute>
        }
      />
      <Route
       path="/alunos/:id/vincular" 
       element={
          <ProtectedRoute>
            <VincularAlunoCurso />
          </ProtectedRoute>
       } 
       />

      <Route
        path="/alunos/:id/desvincular"
        element={
          <ProtectedRoute>
            <DesvincularAlunoCurso />
          </ProtectedRoute>
        }
      />

      {/* Cursos */}
      <Route
        path="/cursos"
        element={
          <ProtectedRoute>
            <ListaCursos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cursos/novo"
        element={
          <ProtectedRoute>
            <CadastroCurso />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cursos/:id"
        element={
          <ProtectedRoute>
            <DetalheCurso />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cursos/:id/editar"
        element={
          <ProtectedRoute>
            <EditarCurso />
          </ProtectedRoute>
        }
      />

      {/* Rota inicial */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Rota fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;