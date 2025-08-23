import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { obterCursoDetalhado } from "../../services/cursos";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { PageContainer, MainContent } from "../../components/ui/Layout";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import { BiBook, BiCalendar, BiCheckCircle, BiXCircle } from "react-icons/bi";

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
              <InfoItem><BiCalendar /> <strong>Carga Horária:</strong> {curso.cargaHoraria} horas</InfoItem>
              <InfoItem><strong>Descrição:</strong> {curso.descricao}</InfoItem>
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
  );
}

/* Styled Components */
const Card = styled.div`
  max-width: 650px;
  margin: 50px auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;

  h2 {
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 2rem;
  }
`;

const MainLogo = styled.img`
  display: block;
  margin: 0 auto 25px auto;
  width: 120px;
`;

const InfoList = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const InfoItem = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    color: #152259;
    width: 150px;
  }

  svg {
    min-width: 20px;
    min-height: 20px;
  }
`;

const BtnVoltar = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  background-color: #509CDB;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a83bf;
    transform: translateY(-2px);
  }
`;

const ErrorText = styled.p`
  color: #dc3545;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;
