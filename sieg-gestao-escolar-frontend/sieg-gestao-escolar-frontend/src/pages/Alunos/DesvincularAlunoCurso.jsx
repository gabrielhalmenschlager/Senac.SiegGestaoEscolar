import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obterAlunoDetalhado, desvincularAlunoCurso } from "../../services/alunos";
import Footer from "../../components/Footer";
import { GlobalStyle } from '../../components/GlobalStyle';
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { Card, InfoList, InfoItem } from "../../components/ui/CardStyles";
import { BtnPrimary } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";
import Navbar from "../../components/NavBar";
import { MainLogo } from "../../components/ui/Logo";
import Logo from '../../assets/logo.png';

export default function DesvincularAlunoCurso() {
  const { id } = useParams(); // id do aluno
  const navigate = useNavigate();

  const [cursos, setCursos] = useState([]);
  const [erro, setErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Carrega os cursos vinculados ao aluno
  useEffect(() => {
    async function carregarCursos() {
      setCarregando(true);
      setErro("");
      try {
        const dados = await obterAlunoDetalhado(id);
        setCursos(dados.cursos || []); // supondo que o backend retorne os cursos vinculados
      } catch (e) {
        setErro("Erro ao carregar cursos do aluno");
        console.error(e);
      }
      setCarregando(false);
    }
    carregarCursos();
  }, [id]);

  // Função para desvincular
  const handleDesvincular = async (idCurso) => {
    setCarregando(true);
    setErro("");
    setMensagemSucesso("");

    try {
      await desvincularAlunoCurso(id, idCurso);
      setMensagemSucesso("Aluno desvinculado do curso com sucesso!");
      // Atualiza a lista de cursos após desvincular
      setCursos(cursos.filter(c => c.id !== idCurso));
    } catch (e) {
      console.error(e);
      setErro("Erro ao desvincular o aluno do curso");
    }

    setCarregando(false);
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <Card>
            <MainLogo src={Logo} alt="Logo" />
            <h2>Desvincular Aluno de Curso</h2>

            {carregando && <p>Carregando...</p>}
            {erro && <ErrorText>{erro}</ErrorText>}
            {mensagemSucesso && <p style={{ color: 'green' }}>{mensagemSucesso}</p>}

            <InfoList>
              {cursos.length === 0 && <p>Aluno não está vinculado a nenhum curso.</p>}
              {cursos.map((curso) => (
                <InfoItem key={curso.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{curso.nome} ({curso.categoriaCurso})</span>
                  <BtnPrimary
                    onClick={() => handleDesvincular(curso.id)}
                    disabled={carregando}
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    Desvincular
                  </BtnPrimary>
                </InfoItem>
              ))}
            </InfoList>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <BtnPrimary onClick={() => navigate("/alunos")}>Voltar</BtnPrimary>
            </div>
          </Card>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}