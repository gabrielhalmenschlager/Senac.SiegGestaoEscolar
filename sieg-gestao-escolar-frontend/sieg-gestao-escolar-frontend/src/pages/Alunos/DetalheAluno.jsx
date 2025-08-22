import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { obterAlunoDetalhado } from "../../services/alunos";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import { BiUser, BiCalendar, BiEnvelope, BiPhone, BiCheckCircle, BiXCircle } from "react-icons/bi";
import { MdSchool } from "react-icons/md"; // <- ícone de escola

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
    <PageContainer>
      <Navbar />
      <MainContent>
        <Card>
          <MainLogo src={Logo} alt="Logo" />
          <h2>Detalhes do Aluno</h2>

          {carregando && <p>Carregando...</p>}
          {erro && <ErrorText>{erro}</ErrorText>}

          {aluno && (
            <InfoList>
              <InfoItem><BiUser /> <strong>Nome:</strong> {aluno.nome} {aluno.sobrenome}</InfoItem>
              <InfoItem><BiCalendar /> <strong>Data de Nascimento:</strong> {new Date(aluno.dataDeNascimento).toLocaleDateString("pt-BR")}</InfoItem>
              <InfoItem><BiEnvelope /> <strong>Email:</strong> {aluno.email}</InfoItem>
              <InfoItem><MdSchool /> <strong>Curso:</strong> {aluno.curso}</InfoItem>
              <InfoItem><BiPhone /> <strong>Telefone:</strong> {aluno.telefone}</InfoItem>
              <InfoItem>
                {aluno.ativo ? <BiCheckCircle color="#28a745" /> : <BiXCircle color="#dc3545" />}
                <strong>Status:</strong> {aluno.ativo ? "Ativo" : "Inativo"}
              </InfoItem>
            </InfoList>
          )}

          <BtnVoltar onClick={() => navigate("/alunos")}>
            Voltar
          </BtnVoltar>
        </Card>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}


// Styled Components (mesmos da tela de professor)
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Kumbh Sans', sans-serif;
  color: #152259;
  background: linear-gradient(135deg, #f4f6f8, #e0e4e9);
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 50px 20px;
  margin-left: 300px;
`;

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
