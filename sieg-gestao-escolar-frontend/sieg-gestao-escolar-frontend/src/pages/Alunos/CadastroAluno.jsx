import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarAluno } from "../../services/alunos";

export default function CadastroAluno() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    dataDeNascimento: "",
    email: "",
    telefone: "",
    dataMatricula: "",
    ativo: true,
  });

  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adicionarAluno(form);
      alert("Aluno cadastrado com sucesso!");
      navigate("/alunos");
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
      setErro("Erro ao cadastrar aluno. Verifique os dados.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Aluno</h1>
      {erro && <p className="text-red-600 mb-2">{erro}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          value={form.sobrenome}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="date"
          name="dataDeNascimento"
          value={form.dataDeNascimento}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="date"
          name="dataMatricula"
          value={form.dataMatricula}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="ativo"
            checked={form.ativo}
            onChange={handleChange}
          />
          <span>Ativo</span>
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
