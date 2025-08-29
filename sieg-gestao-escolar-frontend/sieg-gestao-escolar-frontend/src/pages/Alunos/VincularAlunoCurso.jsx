import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obterTodosCursos } from "../../services/cursos";
import { vincularAlunoCurso } from "../../services/alunos"; // Certifique-se que exporta corretamente
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GlobalStyle } from '../../components/GlobalStyle';
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { Card, InfoList, InfoItem } from "../../components/ui/CardStyles";
import { BtnPrimary } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";

export default function VincularAlunoCurso() {
  const { id } = useParams(); // id do aluno
  const navigate = useNavigate();

  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [erro, setErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarCursos() {
      setCarregando(true);
      setErro("");
      try {
        const dados = await obterTodosCursos();
        setCursos(dados);
      } catch (e) {
        setErro("Erro ao carregar cursos");
        console.error(e);
      }
      setCarregando(false);
    }
    carregarCursos();
  }, []);

  async function handleVincular() {
    if (!cursoSelecionado) {
      setErro("Selecione um curso antes de vincular");
      setMensagemSucesso("");
      return;
    }

    setCarregando(true);
    setErro("");
    setMensagemSucesso("");

    try {
      // ✅ Use PascalCase para coincidir com o que o backend espera
      await vincularAlunoCurso({ IdAluno: id, IdCurso: cursoSelecionado });
      setMensagemSucesso("Aluno vinculado ao curso com sucesso!");
      setCursoSelecionado("");
    } catch (e) {
      console.error(e);
      setErro("Erro ao vincular o aluno ao curso");
    }

    setCarregando(false);
  }

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <Card>
            <h2>Vincular Aluno a Curso</h2>

            {carregando && <p>Carregando...</p>}
            {erro && <ErrorText>{erro}</ErrorText>}
            {mensagemSucesso && <p style={{ color: 'green' }}>{mensagemSucesso}</p>}

            <InfoList>
              <InfoItem>
                <label htmlFor="curso">Selecione um curso:</label>
                <select
                  id="curso"
                  value={cursoSelecionado}
                  onChange={e => setCursoSelecionado(e.target.value)}
                  style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                >
                  <option value="">-- Selecione --</option>
                  {cursos.map(curso => (
                    <option key={curso.id} value={curso.id}>
                      {curso.nome} ({curso.categoriaCurso})
                    </option>
                  ))}
                </select>
              </InfoItem>
            </InfoList>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <BtnPrimary onClick={handleVincular} disabled={carregando}>
                {carregando ? "Processando..." : "Vincular"}
              </BtnPrimary>
              <BtnPrimary onClick={() => navigate("/alunos")}>Voltar</BtnPrimary>
            </div>
          </Card>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}
