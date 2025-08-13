import { useState, useEffect } from 'react';
import { adicionarProfessor, atualizarProfessor, obterProfessorDetalhado } from '../../services/professores';
import { useNavigate, useParams } from 'react-router-dom';

const formacaoOptions = [
  'EnsinoMedio',
  'EnsinoTecnico',
  'Graduado',
  'PosGraduado',
  'Mestrado',
  'Doutorado',
];

export default function CadastroProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    email: '',
    telefone: '',
    formacao: formacaoOptions[0],
    dataContratacao: '',
    ativo: true,
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    if (id) {
      obterProfessorDetalhado(id)
        .then(data => {
          if (!data) throw new Error('Professor não encontrado');
          setForm({
            ...data,
            dataDeNascimento: data.dataDeNascimento?.slice(0, 10) || '',
            dataContratacao: data.dataContratacao?.slice(0, 10) || '',
            ativo: Boolean(data.ativo),
          });
        })
        .catch(() => setErro('Erro ao carregar professor'));
    }
  }, [id]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    try {
      if (id) {
        await atualizarProfessor(id, form);
      } else {
        await adicionarProfessor(form);
      }
      navigate('/professores');
    } catch {
      setErro('Erro ao salvar professor');
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '30px auto', padding: 20, border: '1px solid #ccc' }}>
      <h2>{id ? 'Editar Professor' : 'Cadastrar Professor'}</h2>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="nome">Nome:</label><br />
          <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="sobrenome">Sobrenome:</label><br />
          <input type="text" id="sobrenome" name="sobrenome" value={form.sobrenome} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="dataDeNascimento">Data de Nascimento:</label><br />
          <input type="date" id="dataDeNascimento" name="dataDeNascimento" value={form.dataDeNascimento} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="telefone">Telefone:</label><br />
          <input type="text" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="formacao">Formação:</label><br />
          <select id="formacao" name="formacao" value={form.formacao} onChange={handleChange} required>
            {formacaoOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="dataContratacao">Data de Contratação:</label><br />
          <input type="date" id="dataContratacao" name="dataContratacao" value={form.dataContratacao} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="ativo"
              checked={form.ativo}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Ativo
          </label>
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          {id ? 'Salvar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}
