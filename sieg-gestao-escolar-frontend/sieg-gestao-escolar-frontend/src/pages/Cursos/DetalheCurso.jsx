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
import { MainLogo } from "../../components/ui/Logo";
import { BtnVoltar } from "../../components/ui/Buttons";
import { ErrorText } from "../../components/ui/Text";

// Assets
import Logo from "../../assets/logo.png";

// Importando ícones
import { BiBook, BiCalendar, BiCheckCircle, BiXCircle, BiText, BiDollar, BiCategory, BiUser } from "react-icons/bi";

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
        console.log(e);
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
            <MainLogo src={Logo} alt="Logo" />
            <h2>Detalhes do Curso</h2>

            {carregando && <p>Carregando...</p>}
            {erro && <ErrorText>{erro}</ErrorText>}

            {curso && (
              <InfoList>
                <InfoItem><BiBook /> <strong>Nome:</strong> {curso.nome}</InfoItem>
                <InfoItem><BiUser /> <strong>Professor ID:</strong> {curso.professorId}</InfoItem>
                <InfoItem><BiText /> <strong>Descrição:</strong> {curso.descricao}</InfoItem>
                <InfoItem><BiCalendar /> <strong>Data de Criação:</strong> {new Date(curso.dataCriacao).toLocaleDateString("pt-BR")}</InfoItem>
                <InfoItem><BiCategory /> <strong>Categoria:</strong> {curso.categoriaCurso}</InfoItem>
                <InfoItem><BiDollar /> <strong>Valor:</strong> R$ {curso.valor}</InfoItem>
                <InfoItem><BiCalendar /> <strong>Carga Horária:</strong> {curso.cargaHoraria} horas</InfoItem>
                <InfoItem>
                  {curso.ativo ? <BiCheckCircle color="#28a745" /> : <BiXCircle color="#dc3545" />}
                  <strong>Status:</strong> {curso.ativo ? "Ativo" : "Inativo"}
                </InfoItem>
              </InfoList>
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