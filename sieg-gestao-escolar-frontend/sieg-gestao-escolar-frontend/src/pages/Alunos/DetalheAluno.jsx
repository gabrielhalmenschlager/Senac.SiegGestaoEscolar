import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";

// Serviços / API
import { obterAlunoDetalhado } from "../../services/alunos";

// Componentes globais
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GlobalStyle } from '../../components/GlobalStyle';

// Layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { Card, InfoList, InfoItem } from "../../components/ui/CardStyles";
import { MainLogo } from "../../components/ui/Logo";
import { BtnVoltar } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";

// Assets
import Logo from "../../assets/logo.png";

// Ícones
import { 
  BiUser, 
  BiCalendar, 
  BiEnvelope, 
  BiPhone, 
  BiCheckCircle, 
  BiXCircle, 
  BiBook 
} from "react-icons/bi";

export default function DetalheAluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarAluno() {
      setCarregando(true);
      setErro("");
      try {
        const dados = await obterAlunoDetalhado(id);
        setAluno(dados);
      } catch (e) {
        setErro("Erro ao carregar detalhes do aluno");
        console.log(e);
      }
      setCarregando(false);
    }
    carregarAluno();
  }, [id]);

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <Card>
            <MainLogo src={Logo} alt="Logo" />
            <h2>Detalhes do Aluno</h2>

            {carregando && <p>Carregando...</p>}
            {erro && <ErrorText>{erro}</ErrorText>}

            {aluno && (
              <>
                <InfoList>
                  <InfoItem><BiUser /> <strong>Nome:</strong> {aluno.nome} {aluno.sobrenome}</InfoItem>
                  <InfoItem><BiCalendar /> <strong>Data de Nascimento:</strong> {new Date(aluno.dataDeNascimento).toLocaleDateString("pt-BR")}</InfoItem>
                  <InfoItem><BiEnvelope /> <strong>Email:</strong> {aluno.email}</InfoItem>
                  <InfoItem><BiPhone /> <strong>Telefone:</strong> {aluno.telefone}</InfoItem>
                  <InfoItem>
                    {aluno.ativo ? <BiCheckCircle color="#28a745" /> : <BiXCircle color="#dc3545" />}
                    <strong>Status:</strong> {aluno.ativo ? "Ativo" : "Inativo"}
                  </InfoItem>
                </InfoList>

                {/* Listagem de cursos vinculados */}
                <h3 style={{ marginTop: "15px" }}>Cursos Vinculados</h3>
                {aluno.cursos && aluno.cursos.length > 0 ? (
                  <InfoList>
                    {aluno.cursos.map((curso) => (
                      <InfoItem key={curso.id}>
                        <BiBook />{curso.nome} — {curso.categoriaCurso}
                      </InfoItem>
                    ))}
                  </InfoList>
                ) : (
                  <p>Nenhum curso vinculado a este aluno.</p>
                )}
              </>
            )}

            <BtnVoltar onClick={() => navigate("/alunos")}>
              Voltar
            </BtnVoltar>
          </Card>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}
