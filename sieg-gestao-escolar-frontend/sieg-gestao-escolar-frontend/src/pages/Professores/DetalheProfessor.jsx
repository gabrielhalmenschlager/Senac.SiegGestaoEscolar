// React e hooks
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Serviços / API
import { obterProfessorDetalhado } from "../../services/professores";

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
import { BiUser, BiCalendar, BiEnvelope, BiPhone, BiBook, BiBriefcase, BiCheckCircle, BiXCircle } from "react-icons/bi";

export default function DetalheProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [professor, setProfessor] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarProfessor() {
      setCarregando(true);
      setErro("");
      try {
        const dados = await obterProfessorDetalhado(id);
        setProfessor(dados);
      } catch (e) {
        setErro("Erro ao carregar detalhes do professor");
        console.log(e);
      }
      setCarregando(false);
    }
    carregarProfessor();
  }, [id]);

  return (
    <>
    < GlobalStyle />
    <PageContainer>
      <Navbar />
      <MainContent>
        <Card>
          <MainLogo src={Logo} alt="Logo" />
          <h2>Detalhes do Professor</h2>

          {carregando && <p>Carregando...</p>}
          {erro && <ErrorText>{erro}</ErrorText>}

          {professor && (
            <InfoList>
              <InfoItem><BiUser /> <strong>Nome:</strong> {professor.nome} {professor.sobrenome}</InfoItem>
              <InfoItem><BiCalendar /> <strong>Data de Nascimento:</strong> {new Date(professor.dataDeNascimento).toLocaleDateString("pt-BR")}</InfoItem>
              <InfoItem><BiEnvelope /> <strong>Email:</strong> {professor.email}</InfoItem>
              <InfoItem><BiPhone /> <strong>Telefone:</strong> {professor.telefone}</InfoItem>
              <InfoItem><BiBook /> <strong>Formação:</strong> {professor.formacao}</InfoItem>
              <InfoItem><BiBriefcase /> <strong>Data de Contratação:</strong> {new Date(professor.dataContratacao).toLocaleDateString("pt-BR")}</InfoItem>
              <InfoItem>
                {professor.ativo ? <BiCheckCircle color="#28a745" /> : <BiXCircle color="#dc3545" />}
                <strong>Status:</strong> {professor.ativo ? "Ativo" : "Inativo"}
              </InfoItem>
            </InfoList>
          )}

          <BtnVoltar onClick={() => navigate("/professores")}>
            Voltar
          </BtnVoltar>
        </Card>
      </MainContent>
      <Footer />
    </PageContainer>
    </>
  );
}