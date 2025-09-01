// React e hooks
import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";

// Serviços / API
import { obterCursoDetalhado } from "../../services/cursos";

// Componentes globais
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GlobalStyle } from '../../components/GlobalStyle';

// Layout e UI reutilizáveis
import { PageContainer, MainContent } from "../../components/ui/Layout";
import { Card, InfoList, InfoItem } from "../../components/ui/CardStyles";
import { BtnVoltar } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";

// ícones
import { 
  BiBookOpen, BiInfoCircle, BiTag, 
  BiCheckCircle, BiXCircle, BiUser, BiChalkboard, BiCreditCard
} from "react-icons/bi";


export default function DetalheCurso() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarCurso() {
      setCarregando(true);
      setErro("");
      try {
        const dados = await obterCursoDetalhado(id);
        setCurso(dados);
      } catch (e) {
        setErro("Erro ao carregar detalhes do curso");
        console.error(e);
      }
      setCarregando(false);
    }
    carregarCurso();
  }, [id]);

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <MainContent>
          <Card>
            <h2>Detalhes do Curso</h2>

            {carregando && <p>Carregando...</p>}
            {erro && <ErrorText>{erro}</ErrorText>}

            {curso && (
              <>
                <InfoList>
                  <InfoItem><BiBookOpen /> <strong>Nome:</strong> {curso.nome}</InfoItem>
                  <InfoItem><BiInfoCircle /> <strong>Descrição:</strong> {curso.descricao}</InfoItem>
                  <InfoItem><BiTag /> <strong>Categoria:</strong> {curso.categoriaCurso}</InfoItem>
                  <InfoItem><BiCreditCard /> <strong>Valor:</strong> R$ {curso.valor.toFixed(2)}</InfoItem>
                  <InfoItem>
                    {curso.ativo ? <BiCheckCircle color="#28a745" /> : <BiXCircle color="#dc3545" />}
                    <strong>Status:</strong> {curso.ativo ? "Ativo" : "Inativo"}
                  </InfoItem>
                  <InfoItem><BiChalkboard /> <strong>Professor:</strong> {curso.professor.nome} {curso.professor.sobrenome}</InfoItem>
                </InfoList>

                <h3 style={{ marginTop: "15px" }}>Alunos Vinculados</h3>
                {curso.alunos.length > 0 ? (
                  <InfoList>
                    {curso.alunos.map(aluno => (
                      <InfoItem key={aluno.id}>
                        <BiUser /> {aluno.nome} {aluno.sobrenome}
                      </InfoItem>
                    ))}
                  </InfoList>
                ) : (
                  <p>Nenhum aluno vinculado a este curso.</p>
                )}
              </>
            )}

            <BtnVoltar onClick={() => navigate("/cursos")}>
              Voltar
            </BtnVoltar>
          </Card>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  );
}
